import type { DayMoment } from '../../experience/contracts/time';

export type HuntStage =
  | 'departure'
  | 'clue-search'
  | 'clue-choice'
  | 'discovery'
  | 'approach-choice'
  | 'hunt-attempt'
  | 'tracking-situation'
  | 'tracking-choice'
  | 'danger-cue'
  | 'danger-choice'
  | 'danger-resolved'
  | 'hunt-result'
  | 'return-start'
  | 'return-choice'
  | 'motif-recall'
  | 'firelight';

export type HuntSearchSpotId =
  | 'bare-ground'
  | 'grass-edge'
  | 'low-branch'
  | 'broad-rock';

export type HuntClueId =
  | 'ground-mark'
  | 'pressed-grass'
  | 'broken-branch';

export type HuntApproachChoice = 'wait' | 'move-closer' | 'attempt-now';

export type HuntAttemptOutcome =
  | 'brief-opening'
  | 'target-shifted'
  | 'target-fled';

export type HuntTrackingChoice =
  | 'continue-tracking'
  | 'consider-return'
  | 'check-surroundings';

export type HuntDangerCue =
  | 'distant-call'
  | 'brush-movement'
  | 'large-track';

export type HuntDangerResponse =
  | 'stay-together'
  | 'quietly-distance'
  | 'scan-safe-route';

export type HuntFinalOutcome = 'food-secured' | 'empty-handed';

export type HuntReturnLandmark =
  | 'large-rock'
  | 'water-flow'
  | 'ridge-line';

export type HuntDistanceBurden = 'near' | 'far' | 'farther';

export interface HuntCompletionDetail {
  huntOutcome: HuntFinalOutcome;
  attemptOutcome: HuntAttemptOutcome;
  trackingChoice: HuntTrackingChoice;
  dangerCue: HuntDangerCue;
  dangerResponse: HuntDangerResponse;
  returnLandmark: HuntReturnLandmark;
  distanceBurden: Exclude<HuntDistanceBurden, 'near'>;
  returnedToCommunity: true;
}

export interface HuntState {
  stage: HuntStage;
  dayMoment: DayMoment;
  inspectedSpots: readonly HuntSearchSpotId[];
  foundClues: readonly HuntClueId[];
  trailChoice: HuntClueId | null;
  approachChoice: HuntApproachChoice | null;
  attemptOutcome: HuntAttemptOutcome | null;
  trackingChoice: HuntTrackingChoice | null;
  dangerCue: HuntDangerCue | null;
  dangerResponse: HuntDangerResponse | null;
  finalOutcome: HuntFinalOutcome | null;
  returnLandmark: HuntReturnLandmark | null;
  distanceBurden: HuntDistanceBurden;
}
