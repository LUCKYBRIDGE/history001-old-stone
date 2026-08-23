import { getClueForSpot } from './huntContent';
import type {
  HuntApproachChoice,
  HuntAttemptOutcome,
  HuntClueId,
  HuntSearchSpotId,
  HuntState,
} from './huntTypes';

export type HuntEvent =
  | { type: 'LEAVE_CAMP' }
  | { type: 'INSPECT_SPOT'; spotId: HuntSearchSpotId }
  | { type: 'CONTINUE_FROM_SEARCH' }
  | { type: 'CHOOSE_TRAIL'; clueId: HuntClueId }
  | { type: 'FOLLOW_SELECTED_TRAIL' }
  | { type: 'OBSERVE_DISCOVERY' }
  | { type: 'CHOOSE_APPROACH'; choice: HuntApproachChoice }
  | { type: 'CONTINUE_TO_ATTEMPT' }
  | { type: 'ATTEMPT_HUNT' };

export function createInitialHuntState(): HuntState {
  return {
    stage: 'departure',
    dayMoment: 'morning',
    inspectedSpots: [],
    foundClues: [],
    trailChoice: null,
    approachChoice: null,
    attemptOutcome: null,
  };
}

function resolveAttemptOutcome(
  choice: HuntApproachChoice,
): HuntAttemptOutcome {
  switch (choice) {
    case 'wait':
      return 'brief-opening';
    case 'move-closer':
      return 'target-shifted';
    case 'attempt-now':
      return 'target-fled';
  }
}

export function huntReducer(state: HuntState, event: HuntEvent): HuntState {
  switch (event.type) {
    case 'LEAVE_CAMP':
      return state.stage === 'departure'
        ? { ...state, stage: 'clue-search', dayMoment: 'late-morning' }
        : state;

    case 'INSPECT_SPOT': {
      if (
        state.stage !== 'clue-search' ||
        state.inspectedSpots.includes(event.spotId)
      ) {
        return state;
      }

      const clueId = getClueForSpot(event.spotId);

      return {
        ...state,
        inspectedSpots: [...state.inspectedSpots, event.spotId],
        foundClues:
          clueId && !state.foundClues.includes(clueId)
            ? [...state.foundClues, clueId]
            : state.foundClues,
      };
    }

    case 'CONTINUE_FROM_SEARCH':
      return state.stage === 'clue-search' && state.foundClues.length >= 2
        ? { ...state, stage: 'clue-choice' }
        : state;

    case 'CHOOSE_TRAIL':
      return state.stage === 'clue-choice' && state.foundClues.includes(event.clueId)
        ? { ...state, trailChoice: event.clueId }
        : state;

    case 'FOLLOW_SELECTED_TRAIL':
      return state.stage === 'clue-choice' && state.trailChoice
        ? { ...state, stage: 'discovery', dayMoment: 'midday' }
        : state;

    case 'OBSERVE_DISCOVERY':
      return state.stage === 'discovery'
        ? { ...state, stage: 'approach-choice' }
        : state;

    case 'CHOOSE_APPROACH':
      return state.stage === 'approach-choice'
        ? { ...state, approachChoice: event.choice }
        : state;

    case 'CONTINUE_TO_ATTEMPT':
      return state.stage === 'approach-choice' && state.approachChoice
        ? { ...state, stage: 'hunt-attempt' }
        : state;

    case 'ATTEMPT_HUNT':
      return state.stage === 'hunt-attempt' && state.approachChoice
        ? {
            ...state,
            stage: 'stage-08a-checkpoint',
            attemptOutcome: resolveAttemptOutcome(state.approachChoice),
          }
        : state;

    default:
      return state;
  }
}
