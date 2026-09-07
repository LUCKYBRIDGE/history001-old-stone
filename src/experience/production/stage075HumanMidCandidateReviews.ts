import type { Stage075HumanMidReviewChecks } from './stage075HumanMidProductionJob';

export type Stage075HumanMidCandidateDecision = 'rejected' | 'approved' | 'superseded';

export interface Stage075HumanMidCandidateReviewRecord {
  readonly revision: number;
  readonly candidateLabel: string;
  readonly decision: Stage075HumanMidCandidateDecision;
  readonly reviewChecks: Stage075HumanMidReviewChecks;
  readonly driftCodes: readonly string[];
  readonly binaryCommittedToRepo: boolean;
  readonly reviewedOn: string;
  readonly policyRevision: 'PRE-GIR-30' | 'GIR-SURFACE-30';
  readonly notes: readonly string[];
}

export const STAGE075_HUMAN_MID_CANDIDATE_REVIEWS: readonly Stage075HumanMidCandidateReviewRecord[] = [
  {
    revision: 1,
    candidateLabel: 'GIR-HUMAN-MID-001-r01.png',
    decision: 'rejected',
    reviewChecks: {
      technicalCleanliness: 'pass',
      structuralAnatomy: 'pass',
      styleBoundary: 'pass',
      extractionViability: 'pass',
      historicalRestraint: 'fail',
    },
    driftCodes: [],
    binaryCommittedToRepo: false,
    reviewedOn: '2026-09-06',
    policyRevision: 'PRE-GIR-30',
    notes: [
      'Painterly Grounded Illustrative Realism direction was promising.',
      'Neck/adornment details and relatively specific garment coding exceeded the intended low-specificity historical restraint for a style-only anonymous proof.',
      'Candidate was revised instead of being promoted to the canonical STYLE-GIR-V1 path.',
    ],
  },
  {
    revision: 2,
    candidateLabel: 'GIR-HUMAN-MID-001-r02.png',
    decision: 'rejected',
    reviewChecks: {
      technicalCleanliness: 'pass',
      structuralAnatomy: 'pass',
      styleBoundary: 'fail',
      extractionViability: 'fail',
      historicalRestraint: 'pass',
    },
    driftCodes: ['SID-PHOTO', 'SID-LENS', 'SID-EDGE'],
    binaryCommittedToRepo: false,
    reviewedOn: '2026-09-06',
    policyRevision: 'PRE-GIR-30',
    notes: [
      'The revision removed the most obvious adornment/historical-specificity problem.',
      'Skin, hair and overall rendering moved too far toward photographic treatment.',
      'Background depth relies too heavily on photographic shallow-DOF language for the STYLE-GIR target.',
      'Hair/background edge behavior is less suitable for the later extraction-oriented asset pipeline.',
      'Do not use this revision as a downstream style parent or approved reference.',
    ],
  },
  {
    revision: 3,
    candidateLabel: 'GIR-HUMAN-MID-001-r03.webp',
    decision: 'superseded',
    reviewChecks: {
      technicalCleanliness: 'pass',
      structuralAnatomy: 'pass',
      styleBoundary: 'fail',
      extractionViability: 'pass',
      historicalRestraint: 'pass',
    },
    driftCodes: ['SID-PHOTO', 'SID-DETAIL'],
    binaryCommittedToRepo: true,
    reviewedOn: '2026-09-07',
    policyRevision: 'GIR-SURFACE-30',
    notes: [
      'r03 was previously approved under the older qualitative STYLE-GIR boundary and the historical approval is preserved in project history.',
      'After the project owner reset the desired surface/rendering realism to about 30/100, r03 was re-evaluated against GIR-SURFACE-30 and is now too realistic to remain the canonical human style parent.',
      'The failure is surface-level, not structural: anatomy and extraction viability remain usable references for what worked.',
      'Skin/hair/material rendering still carries more semireal micro-information than the new 25–35 acceptance band permits.',
      'The former canonical binary is removed from the approved anchor path and must not condition downstream first-person-hand/world/material generation.',
      'Next candidate is r04 and must target GIR-SURFACE-30 directly.',
    ],
  },
] as const;

export function getStage075HumanMidLatestCandidateReview() {
  return STAGE075_HUMAN_MID_CANDIDATE_REVIEWS.at(-1) ?? null;
}

export function getStage075HumanMidNextCandidateRevision() {
  const latest = getStage075HumanMidLatestCandidateReview();
  return (latest?.revision ?? 0) + 1;
}
