import { describe, expect, it } from 'vitest';
import {
  STAGE075_HUMAN_MID_PRODUCTION_JOB,
  canStage075HumanMidCandidateBeRegistered,
  canStage075HumanMidUnlockNextSlot,
  isStage075HumanMidCurrentProductionTarget,
  type Stage075HumanMidProductionJob,
} from '../../src/experience/production/stage075HumanMidProductionJob';

describe('Stage 07.5 human-mid production job', () => {
  it('binds the active production job to the current serial queue target', () => {
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.jobId).toBe('GIR-HUMAN-MID-001');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.anchorId).toBe('STYLE-GIR-V1');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.slotId).toBe('human-mid');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.jobCardPath).toBe(
      'handoff/STAGE07_5_STYLE_GIR_V1_HUMAN_MID_JOB_CARD.md',
    );
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.plannedApprovedPath).toBe(
      'public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp',
    );
    expect(isStage075HumanMidCurrentProductionTarget()).toBe(true);
  });

  it('starts with no candidate registered or owner approval', () => {
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.status).toBe('pending-production');
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.candidatePath).toBeNull();
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.ownerDecision).toBe('pending');
    expect(canStage075HumanMidCandidateBeRegistered(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toBe(false);
    expect(canStage075HumanMidUnlockNextSlot(STAGE075_HUMAN_MID_PRODUCTION_JOB)).toBe(false);
  });

  it('does not let a merely produced candidate unlock the next slot', () => {
    const produced: Stage075HumanMidProductionJob = {
      ...STAGE075_HUMAN_MID_PRODUCTION_JOB,
      status: 'candidate-produced',
      candidatePath: '/tmp/GIR-HUMAN-MID-001-r01.webp',
    };

    expect(canStage075HumanMidCandidateBeRegistered(produced)).toBe(false);
    expect(canStage075HumanMidUnlockNextSlot(produced)).toBe(false);
  });

  it('requires explicit owner approval, zero unresolved drift, and the canonical approved path', () => {
    const approvedElsewhere: Stage075HumanMidProductionJob = {
      ...STAGE075_HUMAN_MID_PRODUCTION_JOB,
      status: 'owner-approved',
      ownerDecision: 'approved',
      candidatePath: '/tmp/GIR-HUMAN-MID-001-r01.webp',
    };

    expect(canStage075HumanMidCandidateBeRegistered(approvedElsewhere)).toBe(true);
    expect(canStage075HumanMidUnlockNextSlot(approvedElsewhere)).toBe(false);

    const approvedAtCanonicalPath: Stage075HumanMidProductionJob = {
      ...approvedElsewhere,
      candidatePath: approvedElsewhere.plannedApprovedPath,
    };

    expect(canStage075HumanMidUnlockNextSlot(approvedAtCanonicalPath)).toBe(true);

    const withDrift: Stage075HumanMidProductionJob = {
      ...approvedAtCanonicalPath,
      driftCodes: ['SID-PHOTO'],
    };

    expect(canStage075HumanMidCandidateBeRegistered(withDrift)).toBe(false);
    expect(canStage075HumanMidUnlockNextSlot(withDrift)).toBe(false);
  });

  it('keeps the style proof isolated from downstream identities', () => {
    expect(STAGE075_HUMAN_MID_PRODUCTION_JOB.mustNotDefine).toEqual([
      'ARU-IDENTITY-V1',
      'DAMU-IDENTITY-V1',
      'NUA-IDENTITY-V1',
      'PLAYER-HUNT-BODY-V1',
      'DAY1-HANDAXE-V1',
      'WORLD-CAMP-DAWN-A',
    ]);
  });
});
