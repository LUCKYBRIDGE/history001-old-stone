import { describe, expect, it } from 'vitest';
import { STAGE075_HUMAN_MID_PRODUCTION_JOB } from '../../src/experience/production/stage075HumanMidProductionJob';
import {
  STAGE075_HUMAN_MID_CANDIDATE_REVIEWS,
  getStage075HumanMidLatestCandidateReview,
  getStage075HumanMidNextCandidateRevision,
} from '../../src/experience/production/stage075HumanMidCandidateReviews';

describe('Stage 07.5 human-mid candidate review ledger', () => {
  it('preserves candidate history and supersedes r05 after binary-integrity failure', () => {
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.map((record) => record.revision)).toEqual([1, 2, 3, 4, 5]);
    expect(STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.map((record) => record.decision)).toEqual([
      'rejected',
      'rejected',
      'superseded',
      'rejected',
      'superseded',
    ]);
  });

  it('records the r02 photographic/lens/extraction failure explicitly', () => {
    const r02 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 2);
    expect(r02?.driftCodes).toEqual(['SID-PHOTO', 'SID-LENS', 'SID-EDGE']);
    expect(r02?.reviewChecks.extractionViability).toBe('fail');
  });

  it('records why r03 is no longer eligible as the canonical style parent', () => {
    const r03 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 3);
    expect(r03?.decision).toBe('superseded');
    expect(r03?.reviewChecks.styleBoundary).toBe('fail');
    expect(r03?.driftCodes).toEqual(['SID-PHOTO', 'SID-DETAIL']);
  });

  it('rejects r04 for cartoon/fantasy drift', () => {
    const r04 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 4);
    expect(r04?.decision).toBe('rejected');
    expect(r04?.driftCodes).toEqual(['SID-CARTOON', 'SID-FANTASY']);
    expect(r04?.binaryCommittedToRepo).toBe(false);
  });

  it('invalidates r05 as a conditioning parent because the committed payload is not WebP', () => {
    const r05 = STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.find((record) => record.revision === 5);
    expect(r05?.decision).toBe('superseded');
    expect(r05?.reviewChecks.technicalCleanliness).toBe('fail');
    expect(r05?.reviewChecks.styleBoundary).toBe('pass');
    expect(r05?.driftCodes).toEqual(['ASSET-BINARY-INVALID']);
    expect(r05?.binaryCommittedToRepo).toBe(true);
    expect(r05?.notes.join(' ')).toContain('not a decodable WebP');
    expect(r05?.notes.join(' ')).toContain('must not condition downstream');
  });

  it('reopens production at r06 with no registered approved path', () => {
    expect(getStage075HumanMidLatestCandidateReview()?.revision).toBe(5);
    expect(getStage075HumanMidLatestCandidateReview()?.decision).toBe('superseded');
    expect(getStage075HumanMidNextCandidateRevision()).toBe(6);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidateRevision).toBe(6);
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.status).toBe('pending-production');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.registeredApprovedPath).toBeNull();
  });
});
