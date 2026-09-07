export type Stage075ContinuityPriority =
  | 'P0-identity'
  | 'P1-contact-object'
  | 'P2-world-structure'
  | 'P3-incidental';

export type Stage075ReusableAssetRole =
  | 'style-proof-reference'
  | 'opaque-world-master'
  | 'transparent-reusable-layer'
  | 'unified-contact-master';

export type Stage075VisualDerivationMode =
  | 'independent-exploration'
  | 'crop-from-master'
  | 'outpaint-from-master'
  | 'angle-derivative'
  | 'state-derivative'
  | 'unified-contact-derivative';

export type Stage075SurfaceRealismPolicyId = 'GIR-SURFACE-30';

export interface Stage075ResponsiveDerivationInput {
  sameApprovedContinuityGroup: boolean;
  sameWorldMoment: boolean;
  sameCameraDirection: boolean;
  cropSafe: boolean;
  sourceCoverageSufficient: boolean;
  sourceResolutionSufficient: boolean;
}

export const STAGE075_VISUAL_PRODUCTION_POLICY = {
  governingRule:
    'Preserve identity strictly. Preserve structure strongly. Allow harmless micro-variation.',
  derivationRule: 'Do not regenerate what can be derived from an approved master.',
  framingRule: 'Crop first. Derive only when crop fails.',
  anatomyRule:
    'Functional anatomy is mandatory. Photographic 6/7/8-head proportion convention is not.',
  proportionRule:
    'Choose the canonical proportion with the approved master, then measure and lock that design instead of imposing a textbook head-count target first.',
  canonicalRatioRule:
    'After approval, every derivative inherits the exact same canonical proportion fingerprint. A 7.2-head canonical character does not become 6.8-head or 7.5-head in another view or pose.',
  projectionRule:
    'Perspective, foreshortening, pose and crop may change apparent projected measurements, but they never authorize a new underlying head/body or limb ratio.',
  verificationRule:
    'Validate derivatives against the canonical structural scaffold and recorded normalized ratios, not by re-measuring a perspective-distorted screen silhouette as a new body design.',
  surfaceRealismPolicy: {
    policyId: 'GIR-SURFACE-30' as Stage075SurfaceRealismPolicyId,
    axis:
      '0-100 surface/rendering realism only. This score does not lower anatomy, contact, weight, perspective or continuity requirements.',
    minimum: 0,
    maximum: 100,
    target: 30,
    acceptanceMin: 25,
    acceptanceMax: 35,
    targetRead:
      'At normal viewing distance the image must immediately read as an illustration, while joints, weight, contact and spatial logic remain believable.',
    preserve: [
      'five-finger and joint correctness',
      'believable wrist/forearm and limb articulation',
      'weight, balance and center-of-mass logic',
      'contact pressure, occlusion and object depth',
      'coherent perspective and world-space light',
      'exact approved character/Player/object/world continuity',
    ],
    simplify: [
      'skin into broad value/color planes with only representative creases',
      'hair into grouped masses and silhouette instead of individual strands',
      'nails into simple shape/value cues without macro reflection detail',
      'veins and body hair to only the few cues needed for form, usually none at medium distance',
      'garments into silhouette, weight and major fold groups instead of fiber/stitch microdetail',
      'rock/earth into major planes, roughness groups and representative marks instead of exhaustive cracks/grains',
      'background vegetation and terrain into readable shape/value groups instead of photo-density texture',
    ],
  },
  bodyMasterOrder: [
    'structural-scaffold',
    'canonical-body-or-identity-master',
    'appearance-or-garment-lock',
    'turnaround-derivatives',
    'motion-and-contact-derivatives',
    'measured-proportion-contract',
  ],
  allowedProportionStylization: [
    'relatively larger or smaller head',
    'shorter or longer torso',
    'shorter or longer limbs',
    'slightly emphasized hands or feet',
    'broader or narrower shoulder-to-pelvis relationship',
    'compact or elongated body silhouette',
  ],
  hardProportionRejects: [
    'required 6-head/7-head/8-head target imposed before canonical master approval',
    'canonical head-count or normalized body ratio changed between derivatives',
    'canonical head/body relationship changed and explained away as style variation',
    'chibi or bobble-head caricature',
    'rubber-hose or mechanically impossible limb structure',
    'scene-by-scene head/body ratio redesign',
    'limb stretching or compression to fit viewport composition',
    'same face placed on a materially different body proportion family',
  ],
  continuityPriorities: {
    'P0-identity': [
      'Aru/Damu/Nua face identity',
      'hero hair silhouette',
      'hero exact canonical body proportion fingerprint',
      'hero body mass family',
      'hero garment silhouette and major material zones',
      'Player exact canonical hand/arm/foot/body proportion fingerprint',
    ],
    'P1-contact-object': [
      'DAY1-HANDAXE-V1 morphology and scale fingerprint',
      'contact topology',
      'hand/object depth and contact relationship',
      'limb scale at contact',
    ],
    'P2-world-structure': [
      'major landmark silhouette and position',
      'shelter/fire/route relative geography',
      'terrain slope direction',
      'rock-shelter geometry family',
      'world-space light direction and time family',
    ],
    'P3-incidental': [
      'minor hair flyaways',
      'small garment folds',
      'incidental pebbles and grass blades',
      'smoke/flame micro-shape',
      'cloud and distant vegetation micro-shape',
    ],
  } satisfies Record<Stage075ContinuityPriority, readonly string[]>,
  reusableAssetRoles: {
    styleProof: 'style-proof-reference',
    world: 'opaque-world-master',
    actorBodyItem: 'transparent-reusable-layer',
    contactHeavy: 'unified-contact-master',
  } satisfies Record<string, Stage075ReusableAssetRole>,
  hardStyleRejects: [
    'surface/rendering realism materially above the GIR-SURFACE-30 acceptance band',
    'photographic pore-field or beauty-photo facial rendering',
    'photographic individual-hair field instead of grouped hair masses',
    'macro nail/vein/body-hair detail becoming a defining cue',
    'rock, soil, fur or fabric rendered at product-photo or macro texture density',
    'baked photographic lens bokeh/flare/chromatic-aberration/sensor-noise language',
    'shallow photographic depth-of-field that dissolves a reusable silhouette',
    'photographic actor against illustrative world or the reverse',
    'visible alpha halo/background contamination at intended display size',
    'AAA poster/HDR grading that harms information readability',
    'surface simplification so extreme that the result becomes cartoon/chibi rather than grounded illustration',
  ],
} as const;

export function isStage075SurfaceRealismWithinTarget(score: number) {
  return (
    Number.isFinite(score) &&
    score >= STAGE075_VISUAL_PRODUCTION_POLICY.surfaceRealismPolicy.acceptanceMin &&
    score <= STAGE075_VISUAL_PRODUCTION_POLICY.surfaceRealismPolicy.acceptanceMax
  );
}

export function chooseStage075ResponsiveDerivationMode(
  input: Stage075ResponsiveDerivationInput,
): Stage075VisualDerivationMode {
  if (!input.sameApprovedContinuityGroup) {
    return 'independent-exploration';
  }

  if (!input.sameWorldMoment) {
    return 'state-derivative';
  }

  if (!input.sameCameraDirection) {
    return 'angle-derivative';
  }

  if (
    input.cropSafe &&
    input.sourceCoverageSufficient &&
    input.sourceResolutionSufficient
  ) {
    return 'crop-from-master';
  }

  return 'outpaint-from-master';
}

export function getStage075ReusableAssetRole(
  role: 'style-proof' | 'world' | 'actor' | 'body' | 'item' | 'contact-heavy',
): Stage075ReusableAssetRole {
  if (role === 'style-proof') {
    return 'style-proof-reference';
  }
  if (role === 'world') {
    return 'opaque-world-master';
  }
  if (role === 'contact-heavy') {
    return 'unified-contact-master';
  }
  return 'transparent-reusable-layer';
}
