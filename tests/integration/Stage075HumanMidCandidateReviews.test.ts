import { describe, expect, it } from 'vitest';
import { STAGE075_HUMAN_MID_PRODUCTION_JOB } from '../../src/experience/production/stage075HumanMidProductionJob';
import {
  STAGE075_HUMAN_MID_CANDIDATE_REVIEWS,
  getStage075HumanMidLatestCandidateReview,
  getStage075HumanMidNextCandidateRevision,
} from '../../src/experience/production/stage075HumanMidCandidateReviews';

describe('Stage 07.5 human-mid candidate review ledger', () => {
  it('records r01 and r02 as rejected and keeps rejected binaries outside the repo', () => {
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.map((record) => record.revision)).toEqual([1, 2]);
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.every((record) => record.decision === 'rejected')).toBe(true);
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.every((record) => record.binaryCommittedToRepo === false)).toBe(true);
  });

  it('records the r02 photographic/lens/extraction failure explicitly', () => {
    const r02 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 2);

    expect(r02).toBeDefined();
    expect(r02?.reviewChecks).toEqual({
      technicalCleanliness: 'pass',
      structuralAnatomy: 'pass',
      styleBoundary: 'fail',
      extractionViability: 'fail',
      historicalRestraint: 'pass',
    });
    expect(r02?.driftCodes).toEqual(['SID-PHOTO', 'SID-LENS', 'SID-EDGE']);
  });

  it('advances the active production attempt to r03 without unlocking another slot', () => {
    expect(getStage075HumanMidLatestCandidateReview()?.revision).toBe(2);
    expect(getStage075HumanMidNextCandidateRevision()).toBe(3);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateRevision).toBe(3);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.status).toBe('pending-production');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateStagingPath).toBeNull();
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.registeredApprovedPath).toBeNull();
  });
});
