import { describe, expect, it } from 'vitest';
import {
  STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB,
  areStage075FirstPersonHandReviewChecksPassed,
  canStage075FirstPersonHandBeRegistered,
  isStage075FirstPersonHandCurrentProductionTarget,
  type Stage075FirstPersonHandProductionJob,
} from '../../src/experience/production/stage075FirstPersonHandProductionJob';

describe('Stage 07.5 first-person-hand production job', () => {
  it('stays active after r01 rejection and requires the approved human-mid style reference', () => {
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.jobId).toBe('GIR-FIRST-PERSON-HAND-001');
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.status).toBe('pending-production');
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.candidateRevision).toBe(2);
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.generationStrategy).toBe(
      'anchor-conditioned-style-match',
    );
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.requiredStyleReferencePaths).toEqual([
      'public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp',
    ]);
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.plannedApprovedPath).toBe(
      'public/assets/stage075/anchors/STYLE-GIR-V1/first-person-hand.webp',
    );
    expect(isStage075FirstPersonHandCurrentProductionTarget()).toBe(true);
  });

  it('starts r02 with all review checks pending and no candidate path', () => {
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.candidateStagingPath).toBeNull();
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.registeredApprovedPath).toBeNull();
    expect(areStage075FirstPersonHandReviewChecksPassed(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.reviewChecks)).toBe(false);
    expect(canStage075FirstPersonHandBeRegistered(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB)).toBe(false);
  });

  it('requires a real reviewed candidate, all checks pass and zero drift before registration', () => {
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
    expect(canStage075FirstPersonHandBeRegistered(reviewed)).toBe(true);
    expect(canStage075FirstPersonHandBeRegistered({ ...reviewed, driftCodes: ['SID-PHOTO'] })).toBe(false);
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
