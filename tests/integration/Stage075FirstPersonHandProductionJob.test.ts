import { describe, expect, it } from 'vitest';
import {
  STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB,
  areStage075FirstPersonHandReviewChecksPassed,
  canStage075FirstPersonHandBeRegistered,
  isStage075FirstPersonHandCurrentProductionTarget,
  isStage075FirstPersonHandUpstreamReady,
  type Stage075FirstPersonHandProductionJob,
} from '../../src/experience/production/stage075FirstPersonHandProductionJob';

describe('Stage 07.5 first-person-hand production job', () => {
  it('blocks r02 again while the invalid human-mid raster registration is being replaced', () => {
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.jobId).toBe('GIR-FIRST-PERSON-HAND-001');
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.stylePolicyRevision).toBe('GIR-SURFACE-30');
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.targetSurfaceRealism).toBe(30);
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.status).toBe('blocked-upstream');
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.candidateRevision).toBe(2);
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.generationStrategy).toBe(
      'anchor-conditioned-style-match',
    );
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.requiredStyleReferencePaths).toEqual([]);
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.blockedBy).toEqual([
      'STYLE-GIR-V1/human-mid',
    ]);
    expect(isStage075FirstPersonHandUpstreamReady()).toBe(false);
    expect(isStage075FirstPersonHandCurrentProductionTarget()).toBe(false);
  });

  it('keeps r02 review checks pending with no candidate path', () => {
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.candidateStagingPath).toBeNull();
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.registeredApprovedPath).toBeNull();
    expect(areStage075FirstPersonHandReviewChecksPassed(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.reviewChecks)).toBe(false);
    expect(canStage075FirstPersonHandBeRegistered(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB)).toBe(false);
  });

  it('cannot register a reviewed hand without an actual approved upstream style reference', () => {
    const reviewed: Stage075FirstPersonHandProductionJob = {
      ...STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB,
      status: 'review-passed',
      candidateStagingPath: 'external-review/GIR-FIRST-PERSON-HAND-001-r02.png',
      reviewChecks: {
        technicalCleanliness: 'pass',
        handAnatomy: 'pass',
        styleBoundary: 'pass',
        contactReadability: 'pass',
        extractionViability: 'pass',
        historicalRestraint: 'pass',
      },
    };

    expect(areStage075FirstPersonHandReviewChecksPassed(reviewed.reviewChecks)).toBe(true);
    expect(isStage075FirstPersonHandUpstreamReady(reviewed)).toBe(false);
    expect(canStage075FirstPersonHandBeRegistered(reviewed)).toBe(false);
  });

  it('does not prematurely define Player identity, the handaxe, or named characters', () => {
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.mustNotDefine).toEqual([
      'PLAYER-HUNT-BODY-V1',
      'DAY1-HANDAXE-V1',
      'ARU-IDENTITY-V1',
      'DAMU-IDENTITY-V1',
      'NUA-IDENTITY-V1',
    ]);
  });
});
