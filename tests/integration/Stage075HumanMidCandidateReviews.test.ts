import { describe, expect, it } from 'vitest';
import { STAGE075_HUMAN_MID_PRODUCTION_JOB } from '../../src/experience/production/stage075HumanMidProductionJob';
import {
  STAGE075_HUMAN_MID_CANDIDATE_REVIEWS,
  getStage075HumanMidLatestCandidateReview,
  getStage075HumanMidNextCandidateRevision,
} from '../../src/experience/production/stage075HumanMidCandidateReviews';

describe('Stage 07.5 human-mid candidate review ledger', () => {
  it('preserves r01/r02 rejects, r03 supersession, r04 rejection and r05 approval', () => {
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.map((record) => record.revision)).toEqual([1, 2, 3, 4, 5]);
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.map((record) => record.decision)).toEqual([
      'rejected',
      'rejected',
      'superseded',
      'rejected',
      'approved',
    ]);
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS[4].policyRevision).toBe('GIR-SURFACE-30');
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

  it('rejects r04 for cartoon/fantasy drift despite acceptable large-plane simplification', () => {
    const r04 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 4);

    expect(r04?.decision).toBe('rejected');
    expect(r04?.reviewChecks.structuralAnatomy).toBe('pass');
    expect(r04?.reviewChecks.styleBoundary).toBe('fail');
    expect(r04?.reviewChecks.historicalRestraint).toBe('fail');
    expect(r04?.driftCodes).toEqual(['SID-CARTOON', 'SID-FANTASY']);
    expect(r04?.binaryCommittedToRepo).toBe(false);
  });

  it('records r05 as the first approved GIR-SURFACE-30 human style parent', () => {
    const r05 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 5);

    expect(r05?.decision).toBe('approved');
    expect(r05?.reviewChecks).toEqual({
      technicalCleanliness: 'pass',
      structuralAnatomy: 'pass',
      styleBoundary: 'pass',
      extractionViability: 'pass',
      historicalRestraint: 'pass',
    });
    expect(r05?.driftCodes).toEqual([]);
    expect(r05?.binaryCommittedToRepo).toBe(true);
    expect(r05?.notes.join(' ')).toContain('30/100');
    expect(r05?.notes.join(' ')).toContain('public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp');
  });

  it('keeps the registered job aligned to r05 and advances the next revision number', () => {
    expect(getStage075HumanMidLatestCandidateReview()?.revision).toBe(5);
    expect(getStage075HumanMidLatestCandidateReview()?.decision).toBe('approved');
    expect(getStage075HumanMidNextCandidateRevision()).toBe(6);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateRevision).toBe(5);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.status).toBe('registered');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.registeredApprovedPath).toBe(
      'public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp',
    );
  });
});
