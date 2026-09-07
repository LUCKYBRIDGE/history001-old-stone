import {
  getStage075AnchorReviewBundle,
  getStage075NextGlobalProductionTarget,
} from './stage075AnchorReviewBundle';
import type { Stage075ReviewCheckState } from './stage075HumanMidProductionJob';

export interface Stage075FirstPersonHandReviewChecks {
  readonly technicalCleanliness: Stage075ReviewCheckState;
  readonly handAnatomy: Stage075ReviewCheckState;
  readonly styleBoundary: Stage075ReviewCheckState;
  readonly contactReadability: Stage075ReviewCheckState;
  readonly extractionViability: Stage075ReviewCheckState;
  readonly historicalRestraint: Stage075ReviewCheckState;
}

export interface Stage075FirstPersonHandProductionJob {
  readonly jobId: 'GIR-FIRST-PERSON-HAND-001';
  readonly anchorId: 'STYLE-GIR-V1';
  readonly slotId: 'first-person-hand';
  readonly outputRole: 'style-proof';
  readonly generationStrategy: 'anchor-conditioned-style-match';
  readonly stylePolicyRevision: 'GIR-SURFACE-30';
  readonly targetSurfaceRealism: 30;
  readonly status:
    | 'blocked-upstream'
    | 'pending-production'
    | 'candidate-produced'
    | 'review-passed'
    | 'candidate-rejected'
    | 'registered';
  readonly candidateRevision: number;
  readonly candidateStagingPath: string | null;
  readonly registeredApprovedPath: string | null;
  readonly plannedApprovedPath: string;
  readonly requiredStyleReferencePaths: readonly string[];
  readonly blockedBy: readonly string[];
  readonly reviewChecks: Stage075FirstPersonHandReviewChecks;
  readonly driftCodes: readonly string[];
  readonly mustNotDefine: readonly string[];
}

const styleBundle = getStage075AnchorReviewBundle('STYLE-GIR-V1');
const handSlot = styleBundle?.slots.find((slot) => slot.id === 'first-person-hand');
const humanMidSlot = styleBundle?.slots.find((slot) => slot.id === 'human-mid');

if (!handSlot || !humanMidSlot) {
  throw new Error('STYLE-GIR-V1 human-mid and first-person-hand slots must exist');
}

const approvedHumanMidPath = humanMidSlot.approvedPath ?? null;

export const STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB: Stage075FirstPersonHandProductionJob = {
  jobId: 'GIR-FIRST-PERSON-HAND-001',
  anchorId: 'STYLE-GIR-V1',
  slotId: 'first-person-hand',
  outputRole: 'style-proof',
  generationStrategy: 'anchor-conditioned-style-match',
  stylePolicyRevision: 'GIR-SURFACE-30',
  targetSurfaceRealism: 30,
  status: approvedHumanMidPath ? 'pending-production' : 'blocked-upstream',
  candidateRevision: 2,
  candidateStagingPath: null,
  registeredApprovedPath: null,
  plannedApprovedPath: handSlot.plannedRepositoryPath,
  requiredStyleReferencePaths: approvedHumanMidPath ? [approvedHumanMidPath] : [],
  blockedBy: approvedHumanMidPath ? [] : ['STYLE-GIR-V1/human-mid'],
  reviewChecks: {
    technicalCleanliness: 'pending',
    handAnatomy: 'pending',
    styleBoundary: 'pending',
    contactReadability: 'pending',
    extractionViability: 'pending',
    historicalRestraint: 'pending',
  },
  driftCodes: [],
  mustNotDefine: [
    'PLAYER-HUNT-BODY-V1',
    'DAY1-HANDAXE-V1',
    'ARU-IDENTITY-V1',
    'DAMU-IDENTITY-V1',
    'NUA-IDENTITY-V1',
  ],
};

export function isStage075FirstPersonHandCurrentProductionTarget() {
  const target = getStage075NextGlobalProductionTarget();
  return target?.anchorId === 'STYLE-GIR-V1' && target.slotId === 'first-person-hand';
}

export function isStage075FirstPersonHandUpstreamReady(
  job: Stage075FirstPersonHandProductionJob = STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB,
) {
  return (
    job.status !== 'blocked-upstream' &&
    job.requiredStyleReferencePaths.length === 1 &&
    job.blockedBy.length === 0
  );
}

export function areStage075FirstPersonHandReviewChecksPassed(
  checks: Stage075FirstPersonHandReviewChecks,
) {
  return Object.values(checks).every((state) => state === 'pass');
}

export function canStage075FirstPersonHandBeRegistered(
  job: Stage075FirstPersonHandProductionJob,
) {
  return (
    job.status === 'review-passed' &&
    isStage075FirstPersonHandUpstreamReady(job) &&
    Boolean(job.candidateStagingPath) &&
    !job.registeredApprovedPath &&
    areStage075FirstPersonHandReviewChecksPassed(job.reviewChecks) &&
    job.driftCodes.length === 0
  );
}
