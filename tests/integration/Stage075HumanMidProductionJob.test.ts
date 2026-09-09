import { describe, expect, it } from 'vitest';
import {
  getStage075NextGlobalProductionTarget,
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

function producedCandidate(
  overrides: Partial<Stage075HumanMidProductionJob> = {},
): Stage075HumanMidProductionJob {
  return {
    ...STAGE075_HUMAN_MID_PRODUCTION_JOB,
    status: 'candidate-produced',
    candidateStagingPath: 'external-review/GIR-HUMAN-MID-001-r06.webp',
    reviewChecks: {
      technicalCleanliness: 'pending',
      structuralAnatomy: 'pending',
      styleBoundary: 'pending',
      extractionViability: 'pending',
      historicalRestraint: 'pending',
    },
    ...overrides,
  };
}

describe('Stage 07.5 human-mid production job', () => {
  it('reopens human-mid r06 after invalidating the non-WebP r05 registration', () => {
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.jobId).toBe('GIR-HUMAN-MID-001');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.stylePolicyRevision).toBe('GIR-SURFACE-30');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.targetSurfaceRealism).toBe(30);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.acceptanceSurfaceRealismBand).toEqual([25, 35]);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.supersededRevision).toBe(5);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateRevision).toBe(6);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.status).toBe('pending-production');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateStagingPath).toBeNull();
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.registeredApprovedPath).toBeNull();
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.ownerDecision).toBe('pending');
    expect(areStage075HumanMidReviewChecksPassed(STAGE075_HUMAN_MID_PRODUCTION_JOB.reviewChecks)).toBe(false);
    expect(getStage075HumanMidLifecycleIssues(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toEqual([]);
    expect(canStage075HumanMidUnlockNextSlot(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toBe(false);
    expect(isStage075HumanMidCurrentProductionTarget()).toBe(true);
    expect(getStage075NextGlobalProductionTarget()).toMatchObject({
      anchorId: 'STYLE-GIR-V1',
      slotId: 'human-mid',
    });
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
  });

  it('does not advance to owner review before all checks pass', () => {
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

  it('allows registration only after clean review and explicit owner approval', () => {
    const ownerApproved: Stage075HumanMidProductionJob = {
      ...producedCandidate(),
      status: 'owner-approved',
      ownerDecision: 'approved',
      reviewChecks: PASS_REVIEW,
    };

    expect(getStage075HumanMidLifecycleIssues(ownerApproved)).toEqual([]);
    expect(canStage075HumanMidCandidateBeRegistered(ownerApproved)).toBe(true);
  });

  it('keeps the anonymous style proof isolated from downstream identities', () => {
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
