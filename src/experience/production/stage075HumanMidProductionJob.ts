import {
  getStage075AnchorReviewBundle,
  getStage075NextGlobalProductionTarget,
} from './stage075AnchorReviewBundle';

export type Stage075ProductionJobStatus =
  | 'pending-production'
  | 'candidate-produced'
  | 'owner-approved'
  | 'registered';

export type Stage075OwnerDecision = 'pending' | 'approved' | 'rejected';

export interface Stage075HumanMidProductionJob {
  readonly jobId: 'GIR-HUMAN-MID-001';
  readonly anchorId: 'STYLE-GIR-V1';
  readonly slotId: 'human-mid';
  readonly momentId: 'STYLE-GIR-HUMAN-MID-A';
  readonly outputRole: 'style-proof';
  readonly derivationMode: 'independent-exploration';
  readonly jobCardPath: string;
  readonly plannedApprovedPath: string;
  readonly status: Stage075ProductionJobStatus;
  readonly candidateRevision: number;
  readonly candidatePath: string | null;
  readonly ownerDecision: Stage075OwnerDecision;
  readonly driftCodes: readonly string[];
  readonly mustNotDefine: readonly string[];
}

const styleBundle = getStage075AnchorReviewBundle('STYLE-GIR-V1');
const humanMidSlot = styleBundle?.slots.find((slot) => slot.id === 'human-mid');

if (!humanMidSlot) {
  throw new Error('STYLE-GIR-V1 / human-mid slot must exist before production job initialization');
}

export const STAGE075_HUMAN_MID_PRODUCTION_JOB: Stage075HumanMidProductionJob = {
  jobId: 'GIR-HUMAN-MID-001',
  anchorId: 'STYLE-GIR-V1',
  slotId: 'human-mid',
  momentId: 'STYLE-GIR-HUMAN-MID-A',
  outputRole: 'style-proof',
  derivationMode: 'independent-exploration',
  jobCardPath: 'handoff/STAGE07_5_STYLE_GIR_V1_HUMAN_MID_JOB_CARD.md',
  plannedApprovedPath: humanMidSlot.plannedRepositoryPath,
  status: 'pending-production',
  candidateRevision: 1,
  candidatePath: null,
  ownerDecision: 'pending',
  driftCodes: [],
  mustNotDefine: [
    'ARU-IDENTITY-V1',
    'DAMU-IDENTITY-V1',
    'NUA-IDENTITY-V1',
    'PLAYER-HUNT-BODY-V1',
    'DAY1-HANDAXE-V1',
    'WORLD-CAMP-DAWN-A',
  ],
};

export function isStage075HumanMidCurrentProductionTarget(
  job: Stage075HumanMidProductionJob = STAGE075_HUMAN_MID_PRODUCTION_JOB,
) {
  const target = getStage075NextGlobalProductionTarget();
  return target?.anchorId === job.anchorId && target.slotId === job.slotId;
}

export function canStage075HumanMidCandidateBeRegistered(
  job: Stage075HumanMidProductionJob,
) {
  return (
    job.status === 'owner-approved' &&
    job.ownerDecision === 'approved' &&
    Boolean(job.candidatePath) &&
    job.driftCodes.length === 0
  );
}

export function canStage075HumanMidUnlockNextSlot(
  job: Stage075HumanMidProductionJob,
) {
  return canStage075HumanMidCandidateBeRegistered(job) && job.candidatePath === job.plannedApprovedPath;
}
