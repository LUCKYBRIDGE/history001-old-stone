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

  it('requires functional anatomy without imposing a textbook 6/7/8-head body target', () => {
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.anatomyRule).toContain('Functional anatomy');
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.anatomyRule).toContain('6/7/8-head');
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.proportionRule).toContain('canonical proportion');
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.allowedProportionStylization).toContain(
      'relatively larger or smaller head',
    );
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.allowedProportionStylization).toContain(
      'slightly emphasized hands or feet',
    );
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.hardProportionRejects).toContain(
      'required 6-head/7-head/8-head target imposed before canonical master approval',
    );
  });

  it('locks structure first and measures ratios only after a canonical body or identity master exists', () => {
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.bodyMasterOrder).toEqual([
      'structural-scaffold',
      'canonical-body-or-identity-master',
      'appearance-or-garment-lock',
      'turnaround-derivatives',
      'motion-and-contact-derivatives',
      'measured-proportion-contract',
    ]);
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
