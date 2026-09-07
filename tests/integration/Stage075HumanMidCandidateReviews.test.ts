import { describe, expect, it } from 'vitest';
import { STAGE075_HUMAN_MID_PRODUCTION_JOB } from '../../src/experience/production/stage075HumanMidProductionJob';
import {
  STAGE075_HUMAN_MID_CANDIDATE_REVIEWS,
  getStage075HumanMidLatestCandidateReview,
  getStage075HumanMidNextCandidateRevision,
} from '../../src/experience/production/stage075HumanMidCandidateReviews';

describe('Stage 07.5 human-mid candidate review ledger', () => {
  it('preserves r01/r02 rejects and supersedes the former r03 approval under GIR-SURFACE-30', () => {
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.map((record) => record.revision)).toEqual([1, 2, 3]);
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[0].decision).toBe('rejected');
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[1].decision).toBe('rejected');
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[2].decision).toBe('superseded');
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[2].policyRevision).toBe('GIR-SURFACE-30');
  });

  it('records the r02 photographic/lens/extraction failure explicitly', () => {
    const r02 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 2);

    expect(r02?.reviewChecks).toEqual({
      technicalCleanliness: 'pass',
      structuralAnatomy: 'pass',
      styleBoundary: 'fail',
      extractionViability: 'fail',
      historicalRestraint: 'pass',
    });
    expect(r02?.driftCodes).toEqual(['SID-PHOTO', 'SID-LENS', 'SID-EDGE']);
  });

  it('records why r03 is no longer eligible as the canonical style parent', () => {
    const r03 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 3);

    expect(r03?.decision).toBe('superseded');
    expect(r03?.reviewChecks.styleBoundary).toBe('fail');
    expect(r03?.driftCodes).toEqual(['SID-PHOTO', 'SID-DETAIL']);
    expect(r03?.notes.join(' ')).toContain('30/100');
    expect(r03?.notes.join(' ')).toContain('removed from the approved anchor path');
  });

  it('advances to r04 with no registered approved human-mid path', () => {
    expect(getStage075HumanMidLatestCandidateReview()?.revision).toBe(3);
    expect(getStage075HumanMidLatestCandidateReview()?.decision).toBe('superseded');
    expect(getStage075HumanMidNextCandidateRevision()).toBe(4);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateRevision).toBe(4);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.status).toBe('pending-production');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.registeredApprovedPath).toBeNull();
  });
});
