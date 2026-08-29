import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Stage075VisualAnchorReviewBoard } from '../../src/experience/production/Stage075VisualAnchorReviewBoard';
import {
  STAGE075_ANCHOR_REVIEW_BUNDLES,
  getStage075AnchorBundleLineageIssues,
  getStage075AnchorBundleProgress,
  getStage075AnchorReviewBundle,
  getStage075AnchorSlotProductionReadiness,
  getStage075NextGlobalProductionTarget,
  getStage075NextProductionSlot,
  isStage075AnchorBundleLineageValid,
  isStage075AnchorReviewBundleComplete,
  type Stage075AnchorReviewBundle,
} from '../../src/experience/production/stage075AnchorReviewBundle';
import {
  STAGE075_STYLE_ANCHOR,
  isStage075StyleAnchorApproved,
  type Stage075StyleAnchor,
} from '../../src/experience/production/stage075StyleAnchor';

function makeApprovedStyleBundle(): Stage075AnchorReviewBundle {
  const source = getStage075AnchorReviewBundle('STYLE-GIR-V1');
  if (!source) {
    throw new Error('STYLE-GIR-V1 review bundle must exist');
  }

  return {
    ...source,
    slots: source.slots.map((slot) => ({
      ...slot,
      approvedPath: slot.plannedRepositoryPath,
    })),
  };
}

describe('Stage 07.5 visual anchor review board', () => {
  it('defines unique required reference slots with deterministic repository paths', () => {
    const slotKeys = STAGE075_ANCHOR_REVIEW_BUNDLES.flatMap((bundle) =>
      bundle.slots.map((slot) => `${bundle.anchorId}:${slot.id}`),
    );
    const plannedPaths = STAGE075_ANCHOR_REVIEW_BUNDLES.flatMap((bundle) =>
      bundle.slots.map((slot) => slot.plannedRepositoryPath),
    );

    expect(new Set(slotKeys).size).toBe(slotKeys.length);
    expect(new Set(plannedPaths).size).toBe(plannedPaths.length);
    expect(plannedPaths.every((path) => path.startsWith('public/assets/stage075/anchors/'))).toBe(true);
  });

  it('defines five controlled STYLE-GIR-V1 slots as a serial calibration queue', () => {
    const styleBundle = getStage075AnchorReviewBundle('STYLE-GIR-V1');

    expect(styleBundle).toBeTruthy();
    expect(styleBundle!.productionMode).toBe('serial-calibration');
    expect(styleBundle!.slots).toHaveLength(5);
    expect(styleBundle!.slots.map((slot) => slot.id)).toEqual([
      'human-mid',
      'first-person-hand',
      'world',
      'material',
      'responsive-pair',
    ]);
    expect(styleBundle!.slots.slice(0, 4).every((slot) => slot.candidateBrief?.mode === 'independent-exploration')).toBe(true);
    expect(styleBundle!.slots[4].candidateBrief?.mode).toBe('locked-keyframe-variation');

    const combinedInstructions = styleBundle!.slots
      .map((slot) => slot.candidateBrief?.instruction ?? '')
      .join(' ');
    expect(combinedInstructions).toContain('Aru/Damu/Nua');
    expect(combinedInstructions).toContain('DAY1-HANDAXE-V1');
    expect(combinedInstructions).toContain('WORLD-CAMP-DAWN-A');
    expect(combinedInstructions).toContain('crop/zoom');
    expect(combinedInstructions).toContain('pore-field');
    expect(combinedInstructions).toContain('lens');
    expect(combinedInstructions).toContain('6/7/8등신');
  });

  it('uses one handaxe morphology seed before opposite-face, side and scale derivatives', () => {
    const handaxeBundle = getStage075AnchorReviewBundle('DAY1-HANDAXE-V1');

    expect(handaxeBundle).toBeTruthy();
    expect(handaxeBundle!.productionMode).toBe('serial-master-derivation');
    expect(handaxeBundle!.slots.map((slot) => slot.id)).toEqual([
      'face-a',
      'face-b',
      'side',
      'scale',
    ]);
    expect(handaxeBundle!.slots[0].label).toContain('Canonical Face A');
    for (const slot of handaxeBundle!.slots.slice(1)) {
      expect(slot.parentSlotId, slot.id).toBe('face-a');
    }
    expect(handaxeBundle!.slots.some((slot) => slot.id === 'aru-grip')).toBe(false);
    expect(handaxeBundle!.slots.some((slot) => slot.id === 'player-grip')).toBe(false);
    expect(handaxeBundle!.slots.find((slot) => slot.id === 'scale')?.purpose).toContain('순환 의존성');
  });

  it('locks Player structure first, then one canonical body, then all limb/action derivatives', () => {
    const playerBundle = getStage075AnchorReviewBundle('PLAYER-HUNT-BODY-V1');

    expect(playerBundle).toBeTruthy();
    expect(playerBundle!.productionMode).toBe('serial-master-derivation');
    expect(playerBundle!.slots.map((slot) => slot.id)).toEqual([
      'structural-scaffold',
      'canonical-body',
      'right-palm',
      'right-dorsum',
      'left-palm',
      'left-dorsum',
      'forearm-neutral',
      'right-foot-ankle',
      'left-foot-ankle',
      'receive-reach',
      'handaxe-grip',
      'ground-brace',
      'rock-brace',
      'crouch',
      'walk-carry',
    ]);

    expect(playerBundle!.slots.find((slot) => slot.id === 'canonical-body')?.parentSlotId).toBe('structural-scaffold');
    for (const slot of playerBundle!.slots.slice(2)) {
      expect(slot.parentSlotId, slot.id).toBe('canonical-body');
    }
  });

  it('locks Aru structure and one canonical identity before turnaround/action derivatives', () => {
    const aruBundle = getStage075AnchorReviewBundle('ARU-IDENTITY-V1');

    expect(aruBundle).toBeTruthy();
    expect(aruBundle!.productionMode).toBe('serial-master-derivation');
    expect(aruBundle!.slots.map((slot) => slot.id)).toEqual([
      'structural-scaffold',
      'canonical-identity',
      'front',
      'back',
      'opposite-three-quarter',
      'side-left',
      'side-right',
      'seated',
      'offer-handaxe',
      'hand-reference',
    ]);

    expect(aruBundle!.slots.find((slot) => slot.id === 'canonical-identity')?.parentSlotId).toBe('structural-scaffold');
    for (const slot of aruBundle!.slots.slice(2)) {
      expect(slot.parentSlotId, slot.id).toBe('canonical-identity');
    }
  });

  it('requires every derived slot parent to exist and precede the child', () => {
    for (const bundle of STAGE075_ANCHOR_REVIEW_BUNDLES) {
      expect(getStage075AnchorBundleLineageIssues(bundle), bundle.anchorId).toEqual([]);
      expect(isStage075AnchorBundleLineageValid(bundle), bundle.anchorId).toBe(true);
    }
  });

  it('blocks bundle completion when a derivative parent is missing', () => {
    const source = getStage075AnchorReviewBundle('PLAYER-HUNT-BODY-V1');
    expect(source).toBeTruthy();

    const approvedSlots = source!.slots.map((slot) => ({
      ...slot,
      approvedPath: slot.plannedRepositoryPath,
    }));

    const invalid: Stage075AnchorReviewBundle = {
      ...source!,
      slots: approvedSlots.map((slot) =>
        slot.id === 'right-palm' ? { ...slot, parentSlotId: 'missing-parent' } : slot,
      ),
    };

    expect(getStage075AnchorBundleLineageIssues(invalid)).toContain(
      'right-palm:missing-parent:missing-parent',
    );
    expect(isStage075AnchorReviewBundleComplete(invalid)).toBe(false);
  });

  it('allows only one serial production slot at a time inside a bundle', () => {
    const styleBundle = getStage075AnchorReviewBundle('STYLE-GIR-V1')!;

    expect(getStage075NextProductionSlot(styleBundle)?.id).toBe('human-mid');
    expect(getStage075AnchorSlotProductionReadiness(styleBundle, 'human-mid').state).toBe('ready');
    expect(getStage075AnchorSlotProductionReadiness(styleBundle, 'first-person-hand')).toEqual({
      state: 'blocked',
      blockedBySlotIds: ['human-mid'],
    });

    const humanApproved: Stage075AnchorReviewBundle = {
      ...styleBundle,
      slots: styleBundle.slots.map((slot) =>
        slot.id === 'human-mid' ? { ...slot, approvedPath: slot.plannedRepositoryPath } : slot,
      ),
    };
    expect(getStage075NextProductionSlot(humanApproved)?.id).toBe('first-person-hand');
  });

  it('keeps downstream bundles globally blocked until the earlier bundle is complete', () => {
    const initialTarget = getStage075NextGlobalProductionTarget();
    expect(initialTarget).toMatchObject({
      anchorId: 'STYLE-GIR-V1',
      slotId: 'human-mid',
    });

    const styleApproved = makeApprovedStyleBundle();
    const withStyleApproved = STAGE075_ANCHOR_REVIEW_BUNDLES.map((bundle) =>
      bundle.anchorId === 'STYLE-GIR-V1' ? styleApproved : bundle,
    );
    const nextTarget = getStage075NextGlobalProductionTarget(withStyleApproved);
    expect(nextTarget).toMatchObject({
      anchorId: 'DAY1-HANDAXE-V1',
      slotId: 'face-a',
    });
  });

  it('requires the handaxe canonical seed to be approved before any derivative', () => {
    const source = getStage075AnchorReviewBundle('DAY1-HANDAXE-V1')!;

    expect(getStage075AnchorSlotProductionReadiness(source, 'face-b')).toEqual({
      state: 'blocked',
      blockedBySlotIds: ['face-a'],
    });

    const seedApproved: Stage075AnchorReviewBundle = {
      ...source,
      slots: source.slots.map((slot) =>
        slot.id === 'face-a' ? { ...slot, approvedPath: slot.plannedRepositoryPath } : slot,
      ),
    };
    expect(getStage075NextProductionSlot(seedApproved)?.id).toBe('face-b');
    expect(getStage075AnchorSlotProductionReadiness(seedApproved, 'side')).toEqual({
      state: 'blocked',
      blockedBySlotIds: ['face-b'],
    });
  });

  it('keeps the first anchor review bundles incomplete until approved master files are registered', () => {
    for (const bundle of STAGE075_ANCHOR_REVIEW_BUNDLES) {
      const progress = getStage075AnchorBundleProgress(bundle);
      expect(progress.required).toBeGreaterThan(0);
      expect(progress.approved).toBe(0);
      expect(progress.missingSlotIds).toHaveLength(progress.required);
    }
  });

  it('requires all five registered STYLE-GIR-V1 slots and exact reference paths before opening the style gate', () => {
    const approvedBundle = makeApprovedStyleBundle();
    const approvedPaths = approvedBundle.slots.map((slot) => slot.approvedPath!);
    const approvedStyle: Stage075StyleAnchor = {
      ...STAGE075_STYLE_ANCHOR,
      status: 'anchor-approved',
      approvedReferencePaths: approvedPaths,
    };

    expect(isStage075StyleAnchorApproved()).toBe(false);
    expect(isStage075StyleAnchorApproved(approvedStyle, approvedBundle)).toBe(true);
    expect(
      isStage075StyleAnchorApproved(
        { ...approvedStyle, approvedReferencePaths: approvedPaths.slice(0, 4) },
        approvedBundle,
      ),
    ).toBe(false);

    const incompleteBundle: Stage075AnchorReviewBundle = {
      ...approvedBundle,
      slots: approvedBundle.slots.map((slot, index) =>
        index === 4 ? { ...slot, approvedPath: undefined } : slot,
      ),
    };
    expect(isStage075StyleAnchorApproved(approvedStyle, incompleteBundle)).toBe(false);
  });

  it('renders canonical-ratio policy, parent lineage and the one active production target', () => {
    render(<Stage075VisualAnchorReviewBoard />);

    const policy = screen.getByTestId('canonical-ratio-policy');
    expect(policy.textContent).toContain('7.2-head canonical character does not become 6.8-head or 7.5-head');
    expect(policy.textContent).toContain('Perspective, foreshortening, pose and crop');

    const target = screen.getByTestId('next-production-target');
    expect(target.textContent).toContain('STYLE-GIR-V1');
    expect(target.textContent).toContain('human-mid');
    expect(screen.getByTestId('slot-state-STYLE-GIR-V1-human-mid').textContent).toBe('NEXT production target');
    expect(screen.getByTestId('slot-blocked-by-STYLE-GIR-V1-first-person-hand').textContent).toContain('human-mid');

    expect(screen.getByTestId('slot-parent-DAY1-HANDAXE-V1-face-b').textContent).toContain('face-a');
    expect(screen.getByTestId('slot-parent-PLAYER-HUNT-BODY-V1-canonical-body').textContent).toContain('structural-scaffold');
    expect(screen.getByTestId('slot-parent-PLAYER-HUNT-BODY-V1-right-palm').textContent).toContain('canonical-body');
    expect(screen.getByTestId('slot-parent-ARU-IDENTITY-V1-canonical-identity').textContent).toContain('structural-scaffold');
    expect(screen.getByTestId('slot-parent-ARU-IDENTITY-V1-front').textContent).toContain('canonical-identity');
  });

  it('renders controlled STYLE-GIR-V1 production briefs, anatomy and downstream readiness without production images', () => {
    render(<Stage075VisualAnchorReviewBoard />);

    expect(screen.getByRole('heading', { name: 'Stage 07.5 Visual Anatomy Reference Lock' })).toBeTruthy();
    expect(screen.getByTestId('review-bundle-STYLE-GIR-V1')).toBeTruthy();
    expect(screen.getByTestId('review-bundle-DAY1-HANDAXE-V1')).toBeTruthy();
    expect(screen.getByTestId('candidate-brief-STYLE-GIR-V1-human-mid')).toBeTruthy();
    expect(screen.getByTestId('candidate-brief-STYLE-GIR-V1-first-person-hand')).toBeTruthy();
    expect(screen.getByTestId('candidate-brief-STYLE-GIR-V1-world')).toBeTruthy();
    expect(screen.getByTestId('candidate-brief-STYLE-GIR-V1-material')).toBeTruthy();
    expect(screen.getByTestId('candidate-brief-STYLE-GIR-V1-responsive-pair')).toBeTruthy();
    expect(screen.getByTestId('visual-anchor-PLAYER-HUNT-BODY-V1')).toBeTruthy();
    expect(screen.getByTestId('anatomy-contract-SC02-HANDOFF-GEO-V1')).toBeTruthy();
    expect(document.querySelector('img')).toBeNull();
  });
});
