import type { Stage075FirstPersonHandReviewChecks } from './stage075FirstPersonHandProductionJob';

export type Stage075FirstPersonHandCandidateDecision = 'rejected' | 'approved';

export interface Stage075FirstPersonHandCandidateReviewRecord {
  readonly revision: number;
  readonly candidateLabel: string;
  readonly decision: Stage075FirstPersonHandCandidateDecision;
  readonly reviewChecks: Stage075FirstPersonHandReviewChecks;
  readonly driftCodes: readonly string[];
  readonly binaryCommittedToRepo: boolean;
  readonly reviewedOn: string;
  readonly notes: readonly string[];
}

export const STAGE075_FIRST_PERSON_HAND_CANDIDATE_REVIEWS: readonly Stage075FirstPersonHandCandidateReviewRecord[] = [
  {
    revision: 1,
    candidateLabel: 'GIR-FIRST-PERSON-HAND-001-r01-generation-family',
    decision: 'rejected',
    reviewChecks: {
      technicalCleanliness: 'pass',
      handAnatomy: 'pass',
      styleBoundary: 'fail',
      contactReadability: 'pass',
      extractionViability: 'pass',
      historicalRestraint: 'pass',
    },
    driftCodes: ['SID-PHOTO', 'SID-LENS', 'SID-DETAIL'],
    binaryCommittedToRepo: false,
    reviewedOn: '2026-09-07',
    notes: [
      'Repeated controlled retries consistently preserved five-finger anatomy, wrist continuity and stone contact.',
      'The generation family nevertheless converged on photographic skin/rock microdetail and lens-like scenic depth instead of the approved human-mid painterly tier.',
      'No r01 retry is eligible for the canonical first-person-hand path and no rejected binary is committed to the repository.',
      'The next revision must be explicitly anchor-conditioned by the approved human-mid rendering language and use a low-information non-canonical background rather than cinematic landscape spectacle.',
    ],
  },
] as const;

export function getStage075FirstPersonHandLatestCandidateReview() {
  return STAGE075_FIRST_PERSON_HAND_CANDIDATE_REVIEWS.at(-1) ?? null;
}

export function getStage075FirstPersonHandNextCandidateRevision() {
  const latest = getStage075FirstPersonHandLatestCandidateReview();
  return (latest?.revision ?? 0) + 1;
}
