import { describe, expect, it } from 'vitest';
import { createInitialHuntState, huntReducer } from '../../src/roles/hunt/huntReducer';

describe('huntReducer Stage 08-A', () => {
  it('treats inspection as observation rather than a wrong-answer counter', () => {
    let state = createInitialHuntState();
    state = huntReducer(state, { type: 'LEAVE_CAMP' });
    state = huntReducer(state, { type: 'INSPECT_SPOT', spotId: 'broad-rock' });

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
    state = huntReducer(state, { type: 'INSPECT_SPOT', spotId: 'bare-ground' });

    expect(huntReducer(state, { type: 'CONTINUE_FROM_SEARCH' }).stage).toBe(
      'clue-search',
    );

    state = huntReducer(state, { type: 'INSPECT_SPOT', spotId: 'grass-edge' });
    state = huntReducer(state, { type: 'CONTINUE_FROM_SEARCH' });

    expect(state.stage).toBe('clue-choice');
    expect(state.foundClues).toEqual(['ground-mark', 'pressed-grass']);
  });

  it('only lets the student follow a clue they actually inspected', () => {
    let state = createInitialHuntState();
    state = huntReducer(state, { type: 'LEAVE_CAMP' });
    state = huntReducer(state, { type: 'INSPECT_SPOT', spotId: 'bare-ground' });
    state = huntReducer(state, { type: 'INSPECT_SPOT', spotId: 'grass-edge' });
    state = huntReducer(state, { type: 'CONTINUE_FROM_SEARCH' });

    state = huntReducer(state, { type: 'CHOOSE_TRAIL', clueId: 'broken-branch' });
    expect(state.trailChoice).toBeNull();

    state = huntReducer(state, { type: 'CHOOSE_TRAIL', clueId: 'ground-mark' });
    state = huntReducer(state, { type: 'FOLLOW_SELECTED_TRAIL' });

    expect(state.stage).toBe('discovery');
    expect(state.dayMoment).toBe('midday');
  });

  it('stops at the Stage 08-A checkpoint after the first hunting attempt', () => {
    let state = createInitialHuntState();
    state = huntReducer(state, { type: 'LEAVE_CAMP' });
    state = huntReducer(state, { type: 'INSPECT_SPOT', spotId: 'bare-ground' });
    state = huntReducer(state, { type: 'INSPECT_SPOT', spotId: 'grass-edge' });
    state = huntReducer(state, { type: 'CONTINUE_FROM_SEARCH' });
    state = huntReducer(state, { type: 'CHOOSE_TRAIL', clueId: 'ground-mark' });
    state = huntReducer(state, { type: 'FOLLOW_SELECTED_TRAIL' });
    state = huntReducer(state, { type: 'OBSERVE_DISCOVERY' });
    state = huntReducer(state, { type: 'CHOOSE_APPROACH', choice: 'move-closer' });
    state = huntReducer(state, { type: 'CONTINUE_TO_ATTEMPT' });
    state = huntReducer(state, { type: 'ATTEMPT_HUNT' });

    expect(state.stage).toBe('stage-08a-checkpoint');
    expect(state.attemptOutcome).toBe('target-shifted');
  });
});
