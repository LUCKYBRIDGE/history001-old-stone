import { describe, expect, it } from 'vitest';
import {
  STAGE075_VISUAL_PRODUCTION_POLICY,
  chooseStage075ResponsiveDerivationMode,
  getStage075ReusableAssetRole,
  isStage075SurfaceRealismWithinTarget,
} from '../../src/experience/production/stage075VisualProductionPolicy';

describe('Stage 07.5 visual production policy', () => {
  it('locks GIR-SURFACE-30 as a rendering-surface target distinct from anatomy correctness', () => {
    const policy = STAGE075_VISUAL_PRODUCTION_POLICY.surfaceRealismPolicy;

    expect(policy.policyId).toBe('GIR-SURFACE-30');
    expect(policy.minimum).toBe(0);
    expect(policy.maximum).toBe(100);
    expect(policy.target).toBe(30);
    expect(policy.acceptanceMin).toBe(25);
    expect(policy.acceptanceMax).toBe(35);
    expect(policy.axis).toContain('surface/rendering realism only');
    expect(policy.axis).toContain('does not lower anatomy');
    expect(policy.targetRead).toContain('immediately read as an illustration');
    expect(isStage075SurfaceRealismWithinTarget(24)).toBe(false);
    expect(isStage075SurfaceRealismWithinTarget(25)).toBe(true);
    expect(isStage075SurfaceRealismWithinTarget(30)).toBe(true);
    expect(isStage075SurfaceRealismWithinTarget(35)).toBe(true);
    expect(isStage075SurfaceRealismWithinTarget(36)).toBe(false);
  });

  it('simplifies photographic micro-detail while preserving physical structure', () => {
    const policy = STAGE075_VISUAL_PRODUCTION_POLICY.surfaceRealismPolicy;
    expect(policy.preserve).toContain('five-finger and joint correctness');
    expect(policy.preserve).toContain('contact pressure, occlusion and object depth');
    expect(policy.simplify.some((item) => item.includes('skin'))).toBe(true);
    expect(policy.simplify.some((item) => item.includes('nails'))).toBe(true);
    expect(policy.simplify.some((item) => item.includes('rock/earth'))).toBe(true);
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.hardStyleRejects).toContain(
      'surface/rendering realism materially above the GIR-SURFACE-30 acceptance band',
    );
  });

  it('keeps hero and Player identity above incidental micro-detail continuity', () => {
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.continuityPriorities['P0-identity']).toContain(
      'Player exact canonical hand/arm/foot/body proportion fingerprint',
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

  it('locks one exact canonical proportion fingerprint after approval', () => {
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.canonicalRatioRule).toContain('exact same canonical proportion fingerprint');
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.canonicalRatioRule).toContain('7.2-head');
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.canonicalRatioRule).toContain('6.8-head');
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.hardProportionRejects).toContain(
      'canonical head-count or normalized body ratio changed between derivatives',
    );
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.continuityPriorities['P0-identity']).toContain(
      'hero exact canonical body proportion fingerprint',
    );
  });

  it('distinguishes canonical ratios from camera-projected apparent ratios', () => {
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.projectionRule).toContain('apparent projected measurements');
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.projectionRule).toContain('underlying head/body or limb ratio');
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.verificationRule).toContain('canonical structural scaffold');
    expect(STAGE075_VISUAL_PRODUCTION_POLICY.verificationRule).toContain('perspective-distorted');
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
