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
  continuityPriorities: {
    'P0-identity': [
      'Aru/Damu/Nua face identity',
      'hero hair silhouette',
      'hero body proportion/mass family',
      'hero garment silhouette and major material zones',
      'Player hand/arm/foot identity and proportion family',
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
    'photographic pore-field or beauty-photo facial rendering',
    'photographic individual-hair field instead of grouped hair masses',
    'baked photographic lens bokeh/flare/chromatic-aberration/sensor-noise language',
    'shallow photographic depth-of-field that dissolves a reusable silhouette',
    'photographic actor against illustrative world or the reverse',
    'visible alpha halo/background contamination at intended display size',
    'AAA poster/HDR grading that harms information readability',
  ],
} as const;

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
