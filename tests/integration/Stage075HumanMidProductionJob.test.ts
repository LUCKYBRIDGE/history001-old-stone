import { describe, expect, it } from 'vitest';
import {
  getStage075AnchorReviewBundle,
  getStage075NextGlobalProductionTarget,
  type Stage075AnchorReviewBundle,
} from '../../src/experience/production/stage075AnchorReviewBundle';
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

const PENDING_REVIEW: Stage075HumanMidReviewChecks = {
  technicalCleanliness: 'pending',
  structuralAnatomy: 'pending',
  styleBoundary: 'pending',
  extractionViability: 'pending',
  historicalRestraint: 'pending',
};

function pendingJob(
  overrides: Partial<Stage075HumanMidProductionJob> = {},
): Stage075HumanMidProductionJob {
  return {
    ...STAGE075_HUMAN_MID_PRODUCTION_JOB,
    status: 'pending-production',
    candidateRevision: 6,
    candidateStagingPath: null,
    registeredApprovedPath: null,
    ownerDecision: 'pending',
    reviewChecks: PENDING_REVIEW,
    driftCodes: [],
    ...overrides,
  };
}

function producedCandidate(
  overrides: Partial<Stage075HumanMidProductionJob> = {},
): Stage075HumanMidProductionJob {
  return {
    ...pendingJob(),
    status: 'candidate-produced',
    candidateStagingPath: 'external-review/GIR-HUMAN-MID-TEST.png',
    ...overrides,
  };
}

function registeredStyleBundle(
  approvedPath = STAGE075_HUMAN_MID_PRODUCTION_JOB.plannedApprovedPath,
): Stage075AnchorReviewBundle {
  const source = getStage075AnchorReviewBundle('STYLE-GIR-V1');
  if (!source) {
    throw new Error('STYLE-GIR-V1 bundle must exist');
  }

  return {
    ...source,
    slots: source.slots.map((slot) =>
      slot.id === 'human-mid' ? { ...slot, approvedPath } : { ...slot },
    ),
  };
}

describe('Stage 07.5 human-mid production job', () => {
  it('registers GIR-SURFACE-30 r05 and advances the serial queue to first-person-hand', () => {
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.jobId).toBe('GIR-HUMAN-MID-001');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.anchorId).toBe('STYLE-GIR-V1');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.slotId).toBe('human-mid');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.stylePolicyRevision).toBe('GIR-SURFACE-30');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.targetSurfaceRealism).toBe(30);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.acceptanceSurfaceRealismBand).toEqual([25, 35]);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.supersededRevision).toBe(3);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateRevision).toBe(5);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.status).toBe('registered');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.ownerDecision).toBe('approved');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.registeredApprovedPath).toBe(
      'public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp',
    );
    expect(areStage075HumanMidReviewChecksPassed(STAGE075_HUMAN_MID_PRODUCTION_JOB.reviewChecks)).toBe(true);
    expect(getStage075HumanMidLifecycleIssues(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toEqual([]);
    expect(canStage075HumanMidUnlockNextSlot(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toBe(true);
    expect(isStage075HumanMidCurrentProductionTarget()).toBe(false);
    expect(getStage075NextGlobalProductionTarget()).toMatchObject({
      anchorId: 'STYLE-GIR-V1',
      slotId: 'first-person-hand',
    });
  });

  it('treats the GIR-30 policy identity and acceptance band as part of lifecycle validity', () => {
    expect(
      getStage075HumanMidLifecycleIssues({
        ...pendingJob(),
        targetSurfaceRealism: 31 as 30,
      }),
    ).toContain('surface-realism-target-mismatch');

    expect(
      getStage075HumanMidLifecycleIssues({
        ...pendingJob(),
        stylePolicyRevision: 'OLD' as 'GIR-SURFACE-30',
      }),
    ).toContain('style-policy-revision-mismatch');
  });

  it('keeps candidate staging separate from the canonical approved anchor directory', () => {
    const exactCanonical = producedCandidate({
      candidateStagingPath: STAGE075_HUMAN_MID_PRODUCTION_JOB.plannedApprovedPath,
    });

    expect(getStage075HumanMidLifecycleIssues(exactCanonical)).toContain(
      'candidate-must-use-staging-path-before-registration',
    );
    expect(getStage075HumanMidLifecycleIssues(exactCanonical)).toContain(
      'candidate-staging-path-must-not-use-approved-anchor-directory',
    );

    const alternatePublicAnchorPath = producedCandidate({
      candidateStagingPath: 'public/assets/stage075/anchors/STYLE-GIR-V1/human-mid-test.webp',
    });
    expect(getStage075HumanMidLifecycleIssues(alternatePublicAnchorPath)).toContain(
      'candidate-staging-path-must-not-use-approved-anchor-directory',
    );
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

    const registered: Stage075HumanMidProductionJob = {
      ...ownerApproved,
      status: 'registered',
      registeredApprovedPath: ownerApproved.plannedApprovedPath,
    };

    expect(getStage075HumanMidLifecycleIssues(registered)).toEqual([]);
    expect(canStage075HumanMidCandidateBeRegistered(registered)).toBe(false);
    expect(canStage075HumanMidUnlockNextSlot(registered, registeredStyleBundle())).toBe(true);
  });

  it('rejects mismatched bundle registration even when the job itself is registered cleanly', () => {
    const registered: Stage075HumanMidProductionJob = {
      ...producedCandidate(),
      status: 'registered',
      ownerDecision: 'approved',
      reviewChecks: PASS_REVIEW,
      registeredApprovedPath: STAGE075_HUMAN_MID_PRODUCTION_JOB.plannedApprovedPath,
    };

    expect(
      canStage075HumanMidUnlockNextSlot(
        registered,
        registeredStyleBundle('public/assets/stage075/anchors/STYLE-GIR-V1/wrong.webp'),
      ),
    ).toBe(false);
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
