import { describe, expect, it } from 'vitest';
import {
  STAGE075_ANATOMY_CONTRACTS,
  getStage075AnatomyContract,
} from '../../src/experience/production/stage075AnatomyRegistry';
import { STAGE075_RASTER_MANIFEST } from '../../src/experience/production/stage075RasterManifest';

describe('Stage 07.5 anatomy and contact registry', () => {
  it('keeps anatomy/contact contract ids unique', () => {
    const ids = STAGE075_ANATOMY_CONTRACTS.map((contract) => contract.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('requires every anatomy contract to define proportion keys and immutable rules', () => {
    for (const contract of STAGE075_ANATOMY_CONTRACTS) {
      expect(contract.proportionKeys.length, contract.id).toBeGreaterThan(0);
      expect(contract.immutableRules.length, contract.id).toBeGreaterThan(0);
      expect(contract.forbiddenDriftCodes.length, contract.id).toBeGreaterThan(0);
    }
  });

  it('measures hero proportions from canonical masters instead of imposing 6/7/8-head targets', () => {
    for (const id of ['ARU-PROP-V1', 'DAMU-PROP-V1', 'NUA-PROP-V1'] as const) {
      const contract = getStage075AnatomyContract(id);
      expect(contract).toBeTruthy();
      expect(contract?.proportionKeys).toContain('canonical-head-count');
      expect(contract?.proportionKeys).toContain('head-height/H');
      expect(contract?.proportionKeys).toContain('shoulder-width/H');
      expect(contract?.proportionKeys).toContain('upper-arm/H');
      expect(contract?.proportionKeys).toContain('forearm/H');
      expect(contract?.proportionKeys).toContain('thigh/H');
      expect(contract?.proportionKeys).toContain('shin/H');
      expect(contract?.immutableRules.join(' ')).toContain('6/7/8등신');
      expect(contract?.forbiddenDriftCodes).toContain('ANAT-HEAD-BODY');
    }
  });

  it('treats the approved canonical head-count and normalized ratios as immutable P0 identity', () => {
    const aru = getStage075AnatomyContract('ARU-PROP-V1');
    const damu = getStage075AnatomyContract('DAMU-PROP-V1');
    const nua = getStage075AnatomyContract('NUA-PROP-V1');

    expect(aru?.immutableRules.join(' ')).toContain('7.2');
    expect(aru?.immutableRules.join(' ')).toContain('6.8');
    expect(aru?.immutableRules.join(' ')).toContain('P0 identity');
    expect(damu?.immutableRules.join(' ')).toContain('P0 identity');
    expect(nua?.immutableRules.join(' ')).toContain('P0 identity');
  });

  it('keeps apparent camera/pose projection separate from the underlying canonical ratio', () => {
    const aru = getStage075AnatomyContract('ARU-PROP-V1');
    expect(aru?.immutableRules.join(' ')).toContain('apparent ratio');
    expect(aru?.immutableRules.join(' ')).toContain('camera/pose');
    expect(aru?.immutableRules.join(' ')).toContain('새 canonical ratio');
  });

  it('keeps Player feet and ankles inside the same exact measured body family as hands and arms', () => {
    const player = getStage075AnatomyContract('PLAYER-HUNT-BODY-PROP-V1');
    expect(player).toBeTruthy();
    expect(player?.proportionKeys).toContain('foot-length');
    expect(player?.proportionKeys).toContain('ankle-width');
    expect(player?.forbiddenDriftCodes).toContain('ANAT-FOOT-SCALE');
    expect(player?.immutableRules.join(' ')).toContain('canonical body master');
    expect(player?.immutableRules.join(' ')).toContain('정확히 동일한 underlying ratio');
  });

  it('requires every raster anatomy dependency to resolve', () => {
    for (const record of STAGE075_RASTER_MANIFEST) {
      for (const contractId of record.requiredAnatomyContractIds) {
        expect(getStage075AnatomyContract(contractId), `${record.assetId} -> ${contractId}`).toBeTruthy();
      }
    }
  });

  it('does not approve an anatomy/contact contract without stored master paths', () => {
    for (const contract of STAGE075_ANATOMY_CONTRACTS) {
      if (contract.status === 'contract-approved') {
        expect(contract.approvedMasterPaths?.length, contract.id).toBeGreaterThan(0);
      }
    }
  });

  it('keeps the critical first-lock anatomy contracts pending until real masters exist', () => {
    const criticalIds = [
      'PLAYER-HUNT-BODY-PROP-V1',
      'ARU-PROP-V1',
      'SC02-HANDOFF-GEO-V1',
      'DAMU-PROP-V1',
      'NUA-PROP-V1',
    ] as const;

    for (const id of criticalIds) {
      const contract = getStage075AnatomyContract(id);
      expect(contract).toBeTruthy();
      expect(contract?.status).not.toBe('contract-approved');
      expect(contract?.approvedMasterPaths).toBeUndefined();
    }
  });

  it('requires SC02 handoff raster to depend on player, Aru and handoff geometry contracts', () => {
    const handoff = STAGE075_RASTER_MANIFEST.find(
      (record) => record.assetId === 'HUNT-SC02-HANDOFF-KEYFRAME-V1',
    );

    expect(handoff).toBeTruthy();
    expect(handoff?.requiredAnatomyContractIds).toContain('PLAYER-HUNT-BODY-PROP-V1');
    expect(handoff?.requiredAnatomyContractIds).toContain('ARU-PROP-V1');
    expect(handoff?.requiredAnatomyContractIds).toContain('SC02-HANDOFF-GEO-V1');
  });
});
