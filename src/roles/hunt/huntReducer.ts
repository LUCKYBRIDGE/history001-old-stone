import { getClueForSpot } from './huntContent';
import type {
  HuntApproachChoice,
  HuntAttemptOutcome,
  HuntClueId,
  HuntDangerCue,
  HuntDangerResponse,
  HuntFinalOutcome,
  HuntReturnLandmark,
  HuntSearchSpotId,
  HuntState,
  HuntTrackingChoice,
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
  | { type: 'ATTEMPT_HUNT' }
  | { type: 'CONTINUE_TO_TRACKING_CHOICE' }
  | { type: 'CHOOSE_TRACKING'; choice: HuntTrackingChoice }
  | { type: 'CONTINUE_TO_DANGER' }
  | { type: 'OBSERVE_DANGER_CUE' }
  | { type: 'CHOOSE_DANGER_RESPONSE'; response: HuntDangerResponse }
  | { type: 'LEAVE_DANGER' }
  | { type: 'CONTINUE_TO_RESULT' }
  | { type: 'START_RETURN' }
  | { type: 'CONTINUE_TO_RETURN_CHOICE' }
  | { type: 'CHOOSE_RETURN_LANDMARK'; landmark: HuntReturnLandmark }
  | { type: 'CONTINUE_RETURN' }
  | { type: 'CONTINUE_AFTER_MOTIF' };

export function createInitialHuntState(): HuntState {
  return {
    stage: 'departure',
    dayMoment: 'morning',
    inspectedSpots: [],
    foundClues: [],
    trailChoice: null,
    approachChoice: null,
    attemptOutcome: null,
    trackingChoice: null,
    dangerCue: null,
    dangerResponse: null,
    finalOutcome: null,
    returnLandmark: null,
    distanceBurden: 'near',
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

function resolveDangerCue(choice: HuntTrackingChoice): HuntDangerCue {
  switch (choice) {
    case 'continue-tracking':
      return 'brush-movement';
    case 'consider-return':
      return 'distant-call';
    case 'check-surroundings':
      return 'large-track';
  }
}

function resolveFinalOutcome(
  attemptOutcome: HuntAttemptOutcome,
  trackingChoice: HuntTrackingChoice,
): HuntFinalOutcome {
  if (trackingChoice === 'consider-return') {
    return 'empty-handed';
  }

  if (attemptOutcome === 'brief-opening') {
    return 'food-secured';
  }

  if (
    attemptOutcome === 'target-shifted' &&
    trackingChoice === 'continue-tracking'
  ) {
    return 'food-secured';
  }

  return 'empty-handed';
}

export function huntReducer(state: HuntState, event: HuntEvent): HuntState {
  switch (event.type) {
    case 'LEAVE_CAMP':
      return state.stage === 'departure'
        ? {
            ...state,
            stage: 'clue-search',
            dayMoment: 'late-morning',
            distanceBurden: 'far',
          }
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
      return state.stage === 'clue-choice' &&
        state.foundClues.includes(event.clueId)
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
            stage: 'tracking-situation',
            dayMoment: 'afternoon',
            attemptOutcome: resolveAttemptOutcome(state.approachChoice),
          }
        : state;

    case 'CONTINUE_TO_TRACKING_CHOICE':
      return state.stage === 'tracking-situation' && state.attemptOutcome
        ? { ...state, stage: 'tracking-choice' }
        : state;

    case 'CHOOSE_TRACKING': {
      if (state.stage !== 'tracking-choice') {
        return state;
      }

      return {
        ...state,
        trackingChoice: event.choice,
        dangerCue: resolveDangerCue(event.choice),
        dayMoment:
          event.choice === 'continue-tracking' ? 'dusk' : 'afternoon',
        distanceBurden:
          event.choice === 'continue-tracking' ? 'farther' : 'far',
      };
    }

    case 'CONTINUE_TO_DANGER':
      return state.stage === 'tracking-choice' &&
        state.trackingChoice &&
        state.dangerCue
        ? { ...state, stage: 'danger-cue' }
        : state;

    case 'OBSERVE_DANGER_CUE':
      return state.stage === 'danger-cue' && state.dangerCue
        ? { ...state, stage: 'danger-choice' }
        : state;

    case 'CHOOSE_DANGER_RESPONSE':
      return state.stage === 'danger-choice'
        ? { ...state, dangerResponse: event.response }
        : state;

    case 'LEAVE_DANGER':
      return state.stage === 'danger-choice' && state.dangerResponse
        ? { ...state, stage: 'danger-resolved' }
        : state;

    case 'CONTINUE_TO_RESULT':
      return state.stage === 'danger-resolved' &&
        state.attemptOutcome &&
        state.trackingChoice
        ? {
            ...state,
            stage: 'hunt-result',
            finalOutcome: resolveFinalOutcome(
              state.attemptOutcome,
              state.trackingChoice,
            ),
          }
        : state;

    case 'START_RETURN':
      return state.stage === 'hunt-result' && state.finalOutcome
        ? { ...state, stage: 'return-start', dayMoment: 'dusk' }
        : state;

    case 'CONTINUE_TO_RETURN_CHOICE':
      return state.stage === 'return-start'
        ? { ...state, stage: 'return-choice' }
        : state;

    case 'CHOOSE_RETURN_LANDMARK':
      return state.stage === 'return-choice'
        ? { ...state, returnLandmark: event.landmark }
        : state;

    case 'CONTINUE_RETURN':
      return state.stage === 'return-choice' && state.returnLandmark
        ? { ...state, stage: 'motif-recall' }
        : state;

    case 'CONTINUE_AFTER_MOTIF':
      return state.stage === 'motif-recall'
        ? { ...state, stage: 'firelight', dayMoment: 'evening' }
        : state;

    default:
      return state;
  }
}
