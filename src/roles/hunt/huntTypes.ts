import type { DayMoment } from '../../experience/contracts/time';

export type HuntStage =
  | 'departure'
  | 'clue-search'
  | 'clue-choice'
  | 'discovery'
  | 'approach-choice'
  | 'hunt-attempt'
  | 'stage-08a-checkpoint';

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

export interface HuntState {
  stage: HuntStage;
  dayMoment: DayMoment;
  inspectedSpots: readonly HuntSearchSpotId[];
  foundClues: readonly HuntClueId[];
  trailChoice: HuntClueId | null;
  approachChoice: HuntApproachChoice | null;
  attemptOutcome: HuntAttemptOutcome | null;
}
