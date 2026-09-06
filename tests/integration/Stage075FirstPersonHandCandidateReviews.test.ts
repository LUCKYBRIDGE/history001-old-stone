import { describe, expect, it } from 'vitest';
import { STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB } from '../../src/experience/production/stage075FirstPersonHandProductionJob';
import {
  STAGE075_FIRST_PERSON_HAND_CANDIDATE_REVIEWS,
  getStage075FirstPersonHandLatestCandidateReview,
  getStage075FirstPersonHandNextCandidateRevision,
} from '../../src/experience/production/stage075FirstPersonHandCandidateReviews';

describe('Stage 07.5 first-person-hand candidate review ledger', () => {
  it('records r01 as rejected and keeps all rejected binaries outside the repo', () => {
    expect(STAGE075_FIRST_PERSON_HAND_CANDIDATE_REVIEWS).toHaveLength(1);
    const r01 = STAGE075_FIRST_PERSON_HAND_CANDIDATE_REVIEWS[0];
    expect(r01.revision).toBe(1);
    expect(r01.decision).toBe('rejected');
    expect(r01.binaryCommittedToRepo).toBe(false);
  });

  it('records the photographic rendering failure rather than anatomy/contact failure', () => {
    const r01 = STAGE075_FIRST_PERSON_HAND_CANDIDATE_REVIEWS[0];
    expect(r01.reviewChecks).toEqual({
      technicalCleanliness: 'pass',
      handAnatomy: 'pass',
      styleBoundary: 'fail',
      contactReadability: 'pass',
      extractionViability: 'pass',
      historicalRestraint: 'pass',
    });
    expect(r01.driftCodes).toEqual(['SID-PHOTO', 'SID-LENS', 'SID-DETAIL']);
  });

  it('advances only the same active slot to r02', () => {
    expect(getStage075FirstPersonHandLatestCandidateReview()?.revision).toBe(1);
    expect(getStage075FirstPersonHandNextCandidateRevision()).toBe(2);
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.candidateRevision).toBe(2);
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.status).toBe('pending-production');
    expect(STAGE075_FIRST_PERSON_HAND_PRODUCTION_JOB.registeredApprovedPath).toBeNull();
  });
});
