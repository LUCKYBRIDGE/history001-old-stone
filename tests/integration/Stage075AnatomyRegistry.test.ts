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
