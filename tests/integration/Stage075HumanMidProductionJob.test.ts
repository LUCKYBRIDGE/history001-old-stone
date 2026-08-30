import { describe, expect, it } from 'vitest';
import {
  STAGE075_HUMAN_MID_PRODUCTION_JOB,
  areStage075HumanMidReviewChecksPassed,
  canStage075HumanMidAdvanceToOwnerReview,
  canStage075HumanMidCandidateBeRegistered,
  canStage075HumanMidUnlockNextSlot,
  getStage075HumanMidLifecycleIssues,
  isStage075HumanMidCurrentProductionTarget,
  type Stage075HumanMidProductionJob,
  type Stage075HumanMidReviewChecks,
} from '../../src/experience/production/stage075HumanMidProductionJob';

const PASS_REVIEW: Stage075HumanMidReviewChecks = {
  technicalCleanliness: 'pass',
  structuralAnatomy: 'pass',
  styleBoundary: 'pass',
  extractionViability: 'pass',
  historicalRestraint: 'pass',
};

function producedCandidate(
  overrides: Partial<Stage075HumanMidProductionJob> = {},
): Stage075HumanMidProductionJob {
  return {
    ...STAGE075_HUMAN_MID_PRODUCTION_JOB,
    status: 'candidate-produced',
    candidateStagingPath: 'artifacts/stage075/candidates/STYLE-GIR-V1/GIR-HUMAN-MID-001-r01.webp',
    ...overrides,
  };
}

describe('Stage 07.5 human-mid production job', () => {
  it('binds the active production job to the current serial queue target', () => {
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.jobId).toBe('GIR-HUMAN-MID-001');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.anchorId).toBe('STYLE-GIR-V1');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.slotId).toBe('human-mid');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.jobCardPath).toBe(
      'handoff/STAGE07_5_STYLE_GIR_V1_HUMAN_MID_JOB_CARD.md',
    );
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.plannedApprovedPath).toBe(
      'public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp',
    );
    expect(isStage075HumanMidCurrentProductionTarget()).toBe(true);
  });

  it('starts with no candidate, no canonical registration, and all review checks pending', () => {
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.status).toBe('pending-production');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateStagingPath).toBeNull();
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.registeredApprovedPath).toBeNull();
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.ownerDecision).toBe('pending');
    expect(areStage075HumanMidReviewChecksPassed(STAGE075_HUMAN_MID_PRODUCTION_JOB.reviewChecks)).toBe(false);
    expect(getStage075HumanMidLifecycleIssues(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toEqual([]);
    expect(canStage075HumanMidAdvanceToOwnerReview(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toBe(false);
    expect(canStage075HumanMidCandidateBeRegistered(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toBe(false);
    expect(canStage075HumanMidUnlockNextSlot(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toBe(false);
  });

  it('keeps candidate staging separate from the canonical approved asset path', () => {
    const invalid = producedCandidate({
      candidateStagingPath: STAGE075_HUMAN_MID_PRODUCTION_JOB.plannedApprovedPath,
    });

    expect(getStage075HumanMidLifecycleIssues(invalid)).toContain(
      'candidate-must-use-staging-path-before-registration',
    );
    expect(canStage075HumanMidCandidateBeRegistered(invalid)).toBe(false);
    expect(canStage075HumanMidUnlockNextSlot(invalid)).toBe(false);
  });

  it('does not allow a produced candidate to reach owner review until all technical review checks pass', () => {
    const produced = producedCandidate();
    expect(canStage075HumanMidAdvanceToOwnerReview(produced)).toBe(false);

    const reviewed: Stage075HumanMidProductionJob = {
      ...produced,
      status: 'review-passed',
      reviewChecks: PASS_REVIEW,
    };

    expect(getStage075HumanMidLifecycleIssues(reviewed)).toEqual([]);
    expect(canStage075HumanMidAdvanceToOwnerReview(reviewed)).toBe(true);
    expect(canStage075HumanMidCandidateBeRegistered(reviewed)).toBe(false);
  });

  it('blocks owner approval and registration when any review check fails or unresolved drift exists', () => {
    const failedCheck: Stage075HumanMidProductionJob = {
      ...producedCandidate(),
      status: 'owner-approved',
      ownerDecision: 'approved',
      reviewChecks: {
        ...PASS_REVIEW,
        extractionViability: 'fail',
      },
    };

    expect(getStage075HumanMidLifecycleIssues(failedCheck)).toContain(
      'owner-approval-requires-clean-review',
    );
    expect(canStage075HumanMidCandidateBeRegistered(failedCheck)).toBe(false);

    const withDrift: Stage075HumanMidProductionJob = {
      ...producedCandidate(),
      status: 'owner-approved',
      ownerDecision: 'approved',
      reviewChecks: PASS_REVIEW,
      driftCodes: ['SID-PHOTO'],
    };

    expect(getStage075HumanMidLifecycleIssues(withDrift)).toContain(
      'owner-approval-requires-clean-review',
    );
    expect(canStage075HumanMidCandidateBeRegistered(withDrift)).toBe(false);
  });

  it('allows canonical registration only after clean review and explicit owner approval', () => {
    const ownerApproved: Stage075HumanMidProductionJob = {
      ...producedCandidate(),
      status: 'owner-approved',
      ownerDecision: 'approved',
      reviewChecks: PASS_REVIEW,
    };

    expect(getStage075HumanMidLifecycleIssues(ownerApproved)).toEqual([]);
    expect(canStage075HumanMidCandidateBeRegistered(ownerApproved)).toBe(true);
    expect(canStage075HumanMidUnlockNextSlot(ownerApproved)).toBe(false);

    const registered: Stage075HumanMidProductionJob = {
      ...ownerApproved,
      status: 'registered',
      registeredApprovedPath: ownerApproved.plannedApprovedPath,
    };

    expect(getStage075HumanMidLifecycleIssues(registered)).toEqual([]);
    expect(canStage075HumanMidCandidateBeRegistered(registered)).toBe(false);
    expect(canStage075HumanMidUnlockNextSlot(registered)).toBe(true);
  });

  it('rejects non-canonical registration paths and premature registered paths', () => {
    const wrongPath: Stage075HumanMidProductionJob = {
      ...producedCandidate(),
      status: 'registered',
      ownerDecision: 'approved',
      reviewChecks: PASS_REVIEW,
      registeredApprovedPath: 'public/assets/stage075/anchors/STYLE-GIR-V1/human-mid-alt.webp',
    };

    expect(getStage075HumanMidLifecycleIssues(wrongPath)).toContain(
      'registered-path-must-match-canonical-path',
    );
    expect(canStage075HumanMidUnlockNextSlot(wrongPath)).toBe(false);

    const premature: Stage075HumanMidProductionJob = {
      ...producedCandidate(),
      status: 'owner-approved',
      ownerDecision: 'approved',
      reviewChecks: PASS_REVIEW,
      registeredApprovedPath: STAGE075_HUMAN_MID_PRODUCTION_JOB.plannedApprovedPath,
    };

    expect(getStage075HumanMidLifecycleIssues(premature)).toContain(
      'approved-path-cannot-be-registered-before-registered-status',
    );
  });

  it('requires a concrete rejection basis for rejected candidates', () => {
    const invalidRejected: Stage075HumanMidProductionJob = {
      ...producedCandidate(),
      status: 'candidate-rejected',
    };
    expect(getStage075HumanMidLifecycleIssues(invalidRejected)).toContain(
      'candidate-rejected-requires-rejection-basis',
    );

    const rejectedWithDrift: Stage075HumanMidProductionJob = {
      ...invalidRejected,
      driftCodes: ['SID-LENS'],
    };
    expect(getStage075HumanMidLifecycleIssues(rejectedWithDrift)).not.toContain(
      'candidate-rejected-requires-rejection-basis',
    );
  });

  it('keeps the style proof isolated from downstream identities', () => {
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.mustNotDefine).toEqual([
      'ARU-IDENTITY-V1',
      'DAMU-IDENTITY-V1',
      'NUA-IDENTITY-V1',
      'PLAYER-HUNT-BODY-V1',
      'DAY1-HANDAXE-V1',
      'WORLD-CAMP-DAWN-A',
    ]);
  });
});
