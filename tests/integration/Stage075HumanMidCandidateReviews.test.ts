import { describe, expect, it } from 'vitest';
import { STAGE075_HUMAN_MID_PRODUCTION_JOB } from '../../src/experience/production/stage075HumanMidProductionJob';
import {
  STAGE075_HUMAN_MID_CANDIDATE_REVIEWS,
  getStage075HumanMidLatestCandidateReview,
  getStage075HumanMidNextCandidateRevision,
} from '../../src/experience/production/stage075HumanMidCandidateReviews';

describe('Stage 07.5 human-mid candidate review ledger', () => {
  it('preserves r01/r02 rejects and records r03 as the first approved binary', () => {
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.map((record) => record.revision)).toEqual([1, 2, 3]);
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[0].decision).toBe('rejected');
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[1].decision).toBe('rejected');
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[2].decision).toBe('approved');
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[0].binaryCommittedToRepo).toBe(false);
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[1].binaryCommittedToRepo).toBe(false);
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[2].binaryCommittedToRepo).toBe(true);
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

  it('records r03 as a clean five-check approval with no unresolved drift', () => {
    const r03 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 3);

    expect(r03?.decision).toBe('approved');
    expect(r03?.reviewChecks).toEqual({
      technicalCleanliness: 'pass',
      structuralAnatomy: 'pass',
      styleBoundary: 'pass',
      extractionViability: 'pass',
      historicalRestraint: 'pass',
    });
    expect(r03?.driftCodes).toEqual([]);
    expect(r03?.notes.join(' ')).toContain('public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp');
  });

  it('keeps the registered production job aligned to the approved r03 review', () => {
    expect(getStage075HumanMidLatestCandidateReview()?.revision).toBe(3);
    expect(getStage075HumanMidLatestCandidateReview()?.decision).toBe('approved');
    expect(getStage075HumanMidNextCandidateRevision()).toBe(4);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateRevision).toBe(3);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.status).toBe('registered');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.registeredApprovedPath).toBe(
      'public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp',
    );
  });
});
