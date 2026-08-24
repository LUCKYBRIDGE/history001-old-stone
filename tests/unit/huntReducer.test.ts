import { describe, expect, it } from 'vitest';
import {
  createInitialHuntState,
  huntReducer,
} from '../../src/roles/hunt/huntReducer';
import type {
  HuntApproachChoice,
  HuntDangerResponse,
  HuntState,
  HuntTrackingChoice,
} from '../../src/roles/hunt/huntTypes';

function progressToTracking(
  approach: HuntApproachChoice = 'move-closer',
): HuntState {
  let state = createInitialHuntState();
  state = huntReducer(state, { type: 'LEAVE_CAMP' });
  state = huntReducer(state, { type: 'INSPECT_SPOT', spotId: 'bare-ground' });
  state = huntReducer(state, { type: 'INSPECT_SPOT', spotId: 'grass-edge' });
  state = huntReducer(state, { type: 'CONTINUE_FROM_SEARCH' });
  state = huntReducer(state, { type: 'CHOOSE_TRAIL', clueId: 'ground-mark' });
  state = huntReducer(state, { type: 'FOLLOW_SELECTED_TRAIL' });
  state = huntReducer(state, { type: 'OBSERVE_DISCOVERY' });
  state = huntReducer(state, { type: 'CHOOSE_APPROACH', choice: approach });
  state = huntReducer(state, { type: 'CONTINUE_TO_ATTEMPT' });
  return huntReducer(state, { type: 'ATTEMPT_HUNT' });
}

function progressThroughDanger(
  approach: HuntApproachChoice,
  tracking: HuntTrackingChoice,
  response: HuntDangerResponse = 'stay-together',
): HuntState {
  let state = progressToTracking(approach);
  state = huntReducer(state, { type: 'CONTINUE_TO_TRACKING_CHOICE' });
  state = huntReducer(state, { type: 'CHOOSE_TRACKING', choice: tracking });
  state = huntReducer(state, { type: 'CONTINUE_TO_DANGER' });
  state = huntReducer(state, { type: 'OBSERVE_DANGER_CUE' });
  state = huntReducer(state, {
    type: 'CHOOSE_DANGER_RESPONSE',
    response,
  });
  state = huntReducer(state, { type: 'LEAVE_DANGER' });
  return huntReducer(state, { type: 'CONTINUE_TO_RESULT' });
}

describe('huntReducer Hunt Vertical Slice', () => {
  it('treats inspection as observation rather than a wrong-answer counter', () => {
    let state = createInitialHuntState();
    state = huntReducer(state, { type: 'LEAVE_CAMP' });
    state = huntReducer(state, {
      type: 'INSPECT_SPOT',
      spotId: 'broad-rock',
    });

    expect(state.inspectedSpots).toEqual(['broad-rock']);
    expect(state.foundClues).toEqual([]);

    const repeated = huntReducer(state, {
      type: 'INSPECT_SPOT',
      spotId: 'broad-rock',
    });
    expect(repeated).toEqual(state);
  });

  it('requires enough observation before moving from clue search to clue judgment', () => {
    let state = createInitialHuntState();
    state = huntReducer(state, { type: 'LEAVE_CAMP' });
    state = huntReducer(state, {
      type: 'INSPECT_SPOT',
      spotId: 'bare-ground',
    });

    expect(huntReducer(state, { type: 'CONTINUE_FROM_SEARCH' }).stage).toBe(
      'clue-search',
    );

    state = huntReducer(state, {
      type: 'INSPECT_SPOT',
      spotId: 'grass-edge',
    });
    state = huntReducer(state, { type: 'CONTINUE_FROM_SEARCH' });

    expect(state.stage).toBe('clue-choice');
    expect(state.foundClues).toEqual(['ground-mark', 'pressed-grass']);
  });

  it('only lets the student follow a clue they actually inspected', () => {
    let state = createInitialHuntState();
    state = huntReducer(state, { type: 'LEAVE_CAMP' });
    state = huntReducer(state, {
      type: 'INSPECT_SPOT',
      spotId: 'bare-ground',
    });
    state = huntReducer(state, {
      type: 'INSPECT_SPOT',
      spotId: 'grass-edge',
    });
    state = huntReducer(state, { type: 'CONTINUE_FROM_SEARCH' });

    state = huntReducer(state, {
      type: 'CHOOSE_TRAIL',
      clueId: 'broken-branch',
    });
    expect(state.trailChoice).toBeNull();

    state = huntReducer(state, {
      type: 'CHOOSE_TRAIL',
      clueId: 'ground-mark',
    });
    state = huntReducer(state, { type: 'FOLLOW_SELECTED_TRAIL' });

    expect(state.stage).toBe('discovery');
    expect(state.dayMoment).toBe('midday');
  });

  it('continues from the first hunting attempt into time-and-distance judgment', () => {
    const state = progressToTracking('move-closer');

    expect(state.stage).toBe('tracking-situation');
    expect(state.attemptOutcome).toBe('target-shifted');
    expect(state.dayMoment).toBe('afternoon');
  });

  it('makes further tracking increase distance and time pressure without global time state', () => {
    let state = progressToTracking('wait');
    state = huntReducer(state, { type: 'CONTINUE_TO_TRACKING_CHOICE' });
    state = huntReducer(state, {
      type: 'CHOOSE_TRACKING',
      choice: 'continue-tracking',
    });

    expect(state.trackingChoice).toBe('continue-tracking');
    expect(state.distanceBurden).toBe('farther');
    expect(state.dayMoment).toBe('dusk');
    expect(state.dangerCue).toBe('brush-movement');
  });

  it('does not grade danger responses as hunt success or failure', () => {
    const together = progressThroughDanger(
      'wait',
      'check-surroundings',
      'stay-together',
    );
    const distance = progressThroughDanger(
      'wait',
      'check-surroundings',
      'quietly-distance',
    );

    expect(together.finalOutcome).toBe('food-secured');
    expect(distance.finalOutcome).toBe('food-secured');
    expect(together.dangerResponse).toBe('stay-together');
    expect(distance.dangerResponse).toBe('quietly-distance');
  });

  it('supports both a food-secured day and an empty-handed day as normal paths', () => {
    const foodSecured = progressThroughDanger(
      'move-closer',
      'continue-tracking',
    );
    const emptyHanded = progressThroughDanger(
      'attempt-now',
      'consider-return',
    );

    expect(foodSecured.finalOutcome).toBe('food-secured');
    expect(emptyHanded.finalOutcome).toBe('empty-handed');
    expect(foodSecured.stage).toBe('hunt-result');
    expect(emptyHanded.stage).toBe('hunt-result');
  });

  it('requires a return landmark and reaches firelight only after the return motif', () => {
    let state = progressThroughDanger('attempt-now', 'consider-return');
    state = huntReducer(state, { type: 'START_RETURN' });
    state = huntReducer(state, { type: 'CONTINUE_TO_RETURN_CHOICE' });

    expect(huntReducer(state, { type: 'CONTINUE_RETURN' }).stage).toBe(
      'return-choice',
    );

    state = huntReducer(state, {
      type: 'CHOOSE_RETURN_LANDMARK',
      landmark: 'large-rock',
    });
    state = huntReducer(state, { type: 'CONTINUE_RETURN' });
    expect(state.stage).toBe('motif-recall');

    state = huntReducer(state, { type: 'CONTINUE_AFTER_MOTIF' });
    expect(state.stage).toBe('firelight');
    expect(state.dayMoment).toBe('evening');
  });
});
