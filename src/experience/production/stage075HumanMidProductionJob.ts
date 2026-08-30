import {
  getStage075AnchorReviewBundle,
  getStage075NextGlobalProductionTarget,
  type Stage075AnchorReviewBundle,
} from './stage075AnchorReviewBundle';

export type Stage075ProductionJobStatus =
  | 'pending-production'
  | 'candidate-produced'
  | 'review-passed'
  | 'owner-approved'
  | 'candidate-rejected'
  | 'registered';

export type Stage075OwnerDecision = 'pending' | 'approved' | 'rejected';
export type Stage075ReviewCheckState = 'pending' | 'pass' | 'fail';

export interface Stage075HumanMidReviewChecks {
  readonly technicalCleanliness: Stage075ReviewCheckState;
  readonly structuralAnatomy: Stage075ReviewCheckState;
  readonly styleBoundary: Stage075ReviewCheckState;
  readonly extractionViability: Stage075ReviewCheckState;
  readonly historicalRestraint: Stage075ReviewCheckState;
}

export interface Stage075HumanMidProductionJob {
  readonly jobId: 'GIR-HUMAN-MID-001';
  readonly anchorId: 'STYLE-GIR-V1';
  readonly slotId: 'human-mid';
  readonly momentId: 'STYLE-GIR-HUMAN-MID-A';
  readonly outputRole: 'style-proof';
  readonly derivationMode: 'independent-exploration';
  readonly jobCardPath: string;
  readonly plannedApprovedPath: string;
  readonly status: Stage075ProductionJobStatus;
  readonly candidateRevision: number;
  readonly candidateStagingPath: string | null;
  readonly registeredApprovedPath: string | null;
  readonly ownerDecision: Stage075OwnerDecision;
  readonly reviewChecks: Stage075HumanMidReviewChecks;
  readonly driftCodes: readonly string[];
  readonly mustNotDefine: readonly string[];
}

const styleBundle = getStage075AnchorReviewBundle('STYLE-GIR-V1');
const humanMidSlot = styleBundle?.slots.find((slot) => slot.id === 'human-mid');

if (!humanMidSlot) {
  throw new Error('STYLE-GIR-V1 / human-mid slot must exist before production job initialization');
}

const PENDING_REVIEW_CHECKS: Stage075HumanMidReviewChecks = {
  technicalCleanliness: 'pending',
  structuralAnatomy: 'pending',
  styleBoundary: 'pending',
  extractionViability: 'pending',
  historicalRestraint: 'pending',
};

export const STAGE075_HUMAN_MID_PRODUCTION_JOB: Stage075HumanMidProductionJob = {
  jobId: 'GIR-HUMAN-MID-001',
  anchorId: 'STYLE-GIR-V1',
  slotId: 'human-mid',
  momentId: 'STYLE-GIR-HUMAN-MID-A',
  outputRole: 'style-proof',
  derivationMode: 'independent-exploration',
  jobCardPath: 'handoff/STAGE07_5_STYLE_GIR_V1_HUMAN_MID_JOB_CARD.md',
  plannedApprovedPath: humanMidSlot.plannedRepositoryPath,
  status: 'pending-production',
  candidateRevision: 1,
  candidateStagingPath: null,
  registeredApprovedPath: null,
  ownerDecision: 'pending',
  reviewChecks: PENDING_REVIEW_CHECKS,
  driftCodes: [],
  mustNotDefine: [
    'ARU-IDENTITY-V1',
    'DAMU-IDENTITY-V1',
    'NUA-IDENTITY-V1',
    'PLAYER-HUNT-BODY-V1',
    'DAY1-HANDAXE-V1',
    'WORLD-CAMP-DAWN-A',
  ],
};

export function isStage075HumanMidCurrentProductionTarget(
  job: Stage075HumanMidProductionJob = STAGE075_HUMAN_MID_PRODUCTION_JOB,
) {
  const target = getStage075NextGlobalProductionTarget();
  return target?.anchorId === job.anchorId && target.slotId === job.slotId;
}

export function areStage075HumanMidReviewChecksPassed(
  checks: Stage075HumanMidReviewChecks,
) {
  return Object.values(checks).every((state) => state === 'pass');
}

export function getStage075HumanMidLifecycleIssues(
  job: Stage075HumanMidProductionJob,
) {
  const issues: string[] = [];
  const hasCandidate = Boolean(job.candidateStagingPath);
  const reviewPassed = areStage075HumanMidReviewChecksPassed(job.reviewChecks);
  const hasFailedReview = Object.values(job.reviewChecks).some((state) => state === 'fail');

  if (job.candidateRevision < 1 || !Number.isInteger(job.candidateRevision)) {
    issues.push('candidate-revision-invalid');
  }

  if (job.candidateStagingPath === job.plannedApprovedPath) {
    issues.push('candidate-must-use-staging-path-before-registration');
  }

  if (job.candidateStagingPath?.startsWith('public/assets/stage075/anchors/')) {
    issues.push('candidate-staging-path-must-not-use-approved-anchor-directory');
  }

  if (job.status === 'pending-production' && hasCandidate) {
    issues.push('pending-production-cannot-have-candidate');
  }

  if (job.status !== 'pending-production' && job.status !== 'candidate-rejected' && !hasCandidate) {
    issues.push('candidate-path-required-after-production');
  }

  if (job.ownerDecision === 'approved' && !['owner-approved', 'registered'].includes(job.status)) {
    issues.push('approved-owner-decision-requires-approved-status');
  }

  if (job.ownerDecision === 'rejected' && job.status !== 'candidate-rejected') {
    issues.push('rejected-owner-decision-requires-rejected-status');
  }

  if (job.status === 'review-passed' && (!reviewPassed || job.driftCodes.length > 0)) {
    issues.push('review-passed-requires-clean-review');
  }

  if (job.status === 'owner-approved') {
    if (!reviewPassed || job.driftCodes.length > 0) {
      issues.push('owner-approval-requires-clean-review');
    }
    if (job.ownerDecision !== 'approved') {
      issues.push('owner-approved-status-requires-approved-decision');
    }
  }

  if (job.status === 'candidate-rejected') {
    const rejectionHasBasis =
      job.ownerDecision === 'rejected' ||
      hasFailedReview ||
      job.driftCodes.length > 0;
    if (!rejectionHasBasis) {
      issues.push('candidate-rejected-requires-rejection-basis');
    }
  }

  if (job.registeredApprovedPath && job.registeredApprovedPath !== job.plannedApprovedPath) {
    issues.push('registered-path-must-match-canonical-path');
  }

  if (job.status === 'registered') {
    if (job.ownerDecision !== 'approved') {
      issues.push('registration-requires-owner-approval');
    }
    if (!reviewPassed || job.driftCodes.length > 0) {
      issues.push('registration-requires-clean-review');
    }
    if (job.registeredApprovedPath !== job.plannedApprovedPath) {
      issues.push('registration-requires-canonical-approved-path');
    }
  } else if (job.registeredApprovedPath) {
    issues.push('approved-path-cannot-be-registered-before-registered-status');
  }

  return issues;
}

export function canStage075HumanMidAdvanceToOwnerReview(
  job: Stage075HumanMidProductionJob,
) {
  return (
    job.status === 'review-passed' &&
    Boolean(job.candidateStagingPath) &&
    areStage075HumanMidReviewChecksPassed(job.reviewChecks) &&
    job.driftCodes.length === 0 &&
    getStage075HumanMidLifecycleIssues(job).length === 0
  );
}

export function canStage075HumanMidCandidateBeRegistered(
  job: Stage075HumanMidProductionJob,
) {
  return (
    job.status === 'owner-approved' &&
    job.ownerDecision === 'approved' &&
    Boolean(job.candidateStagingPath) &&
    !job.registeredApprovedPath &&
    areStage075HumanMidReviewChecksPassed(job.reviewChecks) &&
    job.driftCodes.length === 0 &&
    getStage075HumanMidLifecycleIssues(job).length === 0
  );
}

export function canStage075HumanMidUnlockNextSlot(
  job: Stage075HumanMidProductionJob,
  bundle: Stage075AnchorReviewBundle | null = getStage075AnchorReviewBundle('STYLE-GIR-V1'),
) {
  const bundleSlot = bundle?.slots.find((slot) => slot.id === job.slotId);

  return (
    job.status === 'registered' &&
    job.ownerDecision === 'approved' &&
    job.registeredApprovedPath === job.plannedApprovedPath &&
    bundleSlot?.approvedPath === job.registeredApprovedPath &&
    areStage075HumanMidReviewChecksPassed(job.reviewChecks) &&
    job.driftCodes.length === 0 &&
    getStage075HumanMidLifecycleIssues(job).length === 0
  );
}
