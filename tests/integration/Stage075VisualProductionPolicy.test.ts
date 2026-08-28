import { describe, expect, it } from 'vitest';
import {
  STAGE075_VISUAL_PRODUCTION_POLICY,
  chooseStage075ResponsiveDerivationMode,
  getStage075ReusableAssetRole,
} from '../../src/experience/production/stage075VisualProductionPolicy';

describe('Stage 07.5 visual production policy', () => {
  it('keeps hero and Player identity above incidental micro-detail continuity', () => {
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.continuityPriorities['P0-identity']).toContain(
      'Player hand/arm/foot identity and proportion family',
    );
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.continuityPriorities['P3-incidental']).toContain(
      'incidental pebbles and grass blades',
    );
  });

  it('crops from the same master when moment, camera direction, coverage and resolution remain valid', () => {
    expect(
      chooseStage075ResponsiveDerivationMode({
        sameApprovedContinuityGroup: true,
        sameWorldMoment: true,
        sameCameraDirection: true,
        cropSafe: true,
        sourceCoverageSufficient: true,
        sourceResolutionSufficient: true,
      }),
    ).toBe('crop-from-master');
  });

  it('uses a master-conditioned outpaint when the same camera cannot be served by a safe source crop', () => {
    expect(
      chooseStage075ResponsiveDerivationMode({
        sameApprovedContinuityGroup: true,
        sameWorldMoment: true,
        sameCameraDirection: true,
        cropSafe: false,
        sourceCoverageSufficient: false,
        sourceResolutionSufficient: true,
      }),
    ).toBe('outpaint-from-master');
  });

  it('uses an angle derivative for the same moment when camera direction materially changes', () => {
    expect(
      chooseStage075ResponsiveDerivationMode({
        sameApprovedContinuityGroup: true,
        sameWorldMoment: true,
        sameCameraDirection: false,
        cropSafe: false,
        sourceCoverageSufficient: false,
        sourceResolutionSufficient: true,
      }),
    ).toBe('angle-derivative');
  });

  it('uses a state derivative when the world moment changes', () => {
    expect(
      chooseStage075ResponsiveDerivationMode({
        sameApprovedContinuityGroup: true,
        sameWorldMoment: false,
        sameCameraDirection: true,
        cropSafe: true,
        sourceCoverageSufficient: true,
        sourceResolutionSufficient: true,
      }),
    ).toBe('state-derivative');
  });

  it('allows independent generation only before a continuity group is approved', () => {
    expect(
      chooseStage075ResponsiveDerivationMode({
        sameApprovedContinuityGroup: false,
        sameWorldMoment: true,
        sameCameraDirection: true,
        cropSafe: true,
        sourceCoverageSufficient: true,
        sourceResolutionSufficient: true,
      }),
    ).toBe('independent-exploration');
  });

  it('defines extraction-friendly reusable layers and unified contact masters explicitly', () => {
    expect(getStage075ReusableAssetRole('world')).toBe('opaque-world-master');
    expect(getStage075ReusableAssetRole('actor')).toBe('transparent-reusable-layer');
    expect(getStage075ReusableAssetRole('body')).toBe('transparent-reusable-layer');
    expect(getStage075ReusableAssetRole('item')).toBe('transparent-reusable-layer');
    expect(getStage075ReusableAssetRole('contact-heavy')).toBe('unified-contact-master');
    expect(getStage075ReusableAssetRole('style-proof')).toBe('style-proof-reference');
  });
});
