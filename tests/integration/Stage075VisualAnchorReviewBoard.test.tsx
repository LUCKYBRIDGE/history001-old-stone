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
    slots: source.slots.map((slot) => ({ ...slot, approvedPath: slot.plannedRepositoryPath })),
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

  it('defines five STYLE-GIR-V1 slots as a serial GIR-30 calibration queue', () => {
    const styleBundle = getStage075AnchorReviewBundle('STYLE-GIR-V1')!;
    expect(styleBundle.productionMode).toBe('serial-calibration');
    expect(styleBundle.slots.map((slot) => slot.id)).toEqual([
      'human-mid',
      'first-person-hand',
      'world',
      'material',
      'responsive-pair',
    ]);
    expect(styleBundle.slots[0].candidateBrief?.mode).toBe('independent-exploration');
    expect(styleBundle.slots[1].candidateBrief?.mode).toBe('anchor-conditioned');
    expect(styleBundle.slots[2].candidateBrief?.mode).toBe('anchor-conditioned');
    expect(styleBundle.slots[3].candidateBrief?.mode).toBe('anchor-conditioned');
    expect(styleBundle.slots[4].candidateBrief?.mode).toBe('locked-keyframe-variation');

    const combinedInstructions = styleBundle.slots
      .map((slot) => slot.candidateBrief?.instruction ?? '')
      .join(' ');
    expect(combinedInstructions).toContain('30/100');
    expect(combinedInstructions).toContain('25–35');
    expect(combinedInstructions).toContain('Aru/Damu/Nua');
    expect(combinedInstructions).toContain('DAY1-HANDAXE-V1');
    expect(combinedInstructions).toContain('WORLD-CAMP-DAWN-A');
    expect(combinedInstructions).toContain('crop/zoom');
    expect(combinedInstructions).toContain('모공');
    expect(combinedInstructions).toContain('6/7/8등신');
  });

  it('uses one handaxe morphology seed before opposite-face, side and scale derivatives', () => {
    const bundle = getStage075AnchorReviewBundle('DAY1-HANDAXE-V1')!;
    expect(bundle.productionMode).toBe('serial-master-derivation');
    expect(bundle.slots.map((slot) => slot.id)).toEqual(['face-a', 'face-b', 'side', 'scale']);
    expect(bundle.slots[0].label).toContain('Canonical Face A');
    for (const slot of bundle.slots.slice(1)) {
      expect(slot.parentSlotId).toBe('face-a');
    }
    expect(bundle.slots.find((slot) => slot.id === 'scale')?.purpose).toContain('순환 의존성');
  });

  it('locks Player structure first, then one canonical body, then all limb/action derivatives', () => {
    const bundle = getStage075AnchorReviewBundle('PLAYER-HUNT-BODY-V1')!;
    expect(bundle.slots.map((slot) => slot.id)).toEqual([
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
    expect(bundle.slots[1].parentSlotId).toBe('structural-scaffold');
    for (const slot of bundle.slots.slice(2)) {
      expect(slot.parentSlotId).toBe('canonical-body');
    }
  });

  it('locks Aru structure and one canonical identity before turnaround/action derivatives', () => {
    const bundle = getStage075AnchorReviewBundle('ARU-IDENTITY-V1')!;
    expect(bundle.slots.map((slot) => slot.id)).toEqual([
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
    expect(bundle.slots[1].parentSlotId).toBe('structural-scaffold');
    for (const slot of bundle.slots.slice(2)) {
      expect(slot.parentSlotId).toBe('canonical-identity');
    }
  });

  it('requires every derived slot parent to exist and precede the child', () => {
    for (const bundle of STAGE075_ANCHOR_REVIEW_BUNDLES) {
      expect(getStage075AnchorBundleLineageIssues(bundle), bundle.anchorId).toEqual([]);
      expect(isStage075AnchorBundleLineageValid(bundle), bundle.anchorId).toBe(true);
    }
  });

  it('blocks bundle completion when a derivative parent is missing', () => {
    const source = getStage075AnchorReviewBundle('PLAYER-HUNT-BODY-V1')!;
    const invalid: Stage075AnchorReviewBundle = {
      ...source,
      slots: source.slots.map((slot) =>
        slot.id === 'right-palm'
          ? { ...slot, approvedPath: slot.plannedRepositoryPath, parentSlotId: 'missing-parent' }
          : { ...slot, approvedPath: slot.plannedRepositoryPath },
      ),
    };
    expect(getStage075AnchorBundleLineageIssues(invalid)).toContain(
      'right-palm:missing-parent:missing-parent',
    );
    expect(isStage075AnchorReviewBundleComplete(invalid)).toBe(false);
  });

  it('advances the STYLE serial queue from approved GIR-30 human-mid to first-person-hand', () => {
    const styleBundle = getStage075AnchorReviewBundle('STYLE-GIR-V1')!;
    expect(getStage075AnchorSlotProductionReadiness(styleBundle, 'human-mid').state).toBe('approved');
    expect(getStage075NextProductionSlot(styleBundle)?.id).toBe('first-person-hand');
    expect(getStage075AnchorSlotProductionReadiness(styleBundle, 'first-person-hand')).toEqual({
      state: 'ready',
      blockedBySlotIds: [],
    });
    expect(getStage075AnchorSlotProductionReadiness(styleBundle, 'world')).toEqual({
      state: 'blocked',
      blockedBySlotIds: ['first-person-hand'],
    });
  });

  it('keeps downstream bundles globally blocked until the STYLE bundle is complete', () => {
    expect(getStage075NextGlobalProductionTarget()).toMatchObject({
      anchorId: 'STYLE-GIR-V1',
      slotId: 'first-person-hand',
    });
    const approved = makeApprovedStyleBundle();
    const bundles = STAGE075_ANCHOR_REVIEW_BUNDLES.map((bundle) =>
      bundle.anchorId === 'STYLE-GIR-V1' ? approved : bundle,
    );
    expect(getStage075NextGlobalProductionTarget(bundles)).toMatchObject({
      anchorId: 'DAY1-HANDAXE-V1',
      slotId: 'face-a',
    });
  });

  it('tracks one approved STYLE slot while all downstream bundles remain unapproved', () => {
    for (const bundle of STAGE075_ANCHOR_REVIEW_BUNDLES) {
      const progress = getStage075AnchorBundleProgress(bundle);
      expect(progress.required).toBeGreaterThan(0);
      if (bundle.anchorId === 'STYLE-GIR-V1') {
        expect(progress.approved).toBe(1);
        expect(progress.missingSlotIds).not.toContain('human-mid');
      } else {
        expect(progress.approved).toBe(0);
        expect(progress.missingSlotIds).toHaveLength(progress.required);
      }
    }
  });

  it('requires all five STYLE slots and exact reference paths before opening the style gate', () => {
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
  });

  it('renders GIR-30, approved human-mid and the next first-person-hand target', () => {
    render(<Stage075VisualAnchorReviewBoard />);
    const surfacePolicy = screen.getByTestId('surface-realism-policy');
    expect(surfacePolicy.textContent).toContain('GIR-SURFACE-30');
    expect(surfacePolicy.textContent).toContain('30/100');
    expect(surfacePolicy.textContent).toContain('25–35');

    const target = screen.getByTestId('next-production-target');
    expect(target.textContent).toContain('STYLE-GIR-V1');
    expect(target.textContent).toContain('first-person-hand');
    expect(screen.getByTestId('slot-state-STYLE-GIR-V1-human-mid').textContent).toBe('approved reference');
    expect(screen.getByTestId('slot-state-STYLE-GIR-V1-first-person-hand').textContent).toBe('NEXT production target');
    expect(screen.getByTestId('slot-blocked-by-STYLE-GIR-V1-world').textContent).toContain('first-person-hand');
  });

  it('renders controlled production briefs and downstream readiness', () => {
    render(<Stage075VisualAnchorReviewBoard />);
    expect(screen.getByRole('heading', { name: 'Stage 07.5 Visual Anatomy Reference Lock' })).toBeTruthy();
    expect(screen.getByTestId('review-bundle-STYLE-GIR-V1')).toBeTruthy();
    expect(screen.getByTestId('review-bundle-DAY1-HANDAXE-V1')).toBeTruthy();
    expect(screen.getByTestId('candidate-brief-STYLE-GIR-V1-human-mid')).toBeTruthy();
    expect(screen.getByTestId('candidate-brief-STYLE-GIR-V1-first-person-hand')).toBeTruthy();
    expect(screen.getByTestId('visual-anchor-PLAYER-HUNT-BODY-V1')).toBeTruthy();
    expect(screen.getByTestId('anatomy-contract-SC02-HANDOFF-GEO-V1')).toBeTruthy();
  });
});
