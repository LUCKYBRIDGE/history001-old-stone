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

  it('keeps all bundle lineage valid', () => {
    for (const bundle of STAGE075_ANCHOR_REVIEW_BUNDLES) {
      expect(getStage075AnchorBundleLineageIssues(bundle), bundle.anchorId).toEqual([]);
      expect(isStage075AnchorBundleLineageValid(bundle), bundle.anchorId).toBe(true);
    }
  });

  it('resets STYLE to 0/5 and makes human-mid the only production-ready slot', () => {
    const styleBundle = getStage075AnchorReviewBundle('STYLE-GIR-V1')!;
    const progress = getStage075AnchorBundleProgress(styleBundle);

    expect(styleBundle.productionMode).toBe('serial-calibration');
    expect(progress.approved).toBe(0);
    expect(progress.required).toBe(5);
    expect(progress.missingSlotIds).toEqual([
      'human-mid',
      'first-person-hand',
      'world',
      'material',
      'responsive-pair',
    ]);
    expect(getStage075NextProductionSlot(styleBundle)?.id).toBe('human-mid');
    expect(getStage075AnchorSlotProductionReadiness(styleBundle, 'human-mid')).toEqual({
      state: 'ready',
      blockedBySlotIds: [],
    });
    expect(getStage075AnchorSlotProductionReadiness(styleBundle, 'first-person-hand')).toEqual({
      state: 'blocked',
      blockedBySlotIds: ['human-mid'],
    });
    expect(getStage075NextGlobalProductionTarget()).toMatchObject({
      anchorId: 'STYLE-GIR-V1',
      slotId: 'human-mid',
    });
  });

  it('keeps downstream bundles globally blocked until all five STYLE slots are approved', () => {
    const approved = makeApprovedStyleBundle();
    const bundles = STAGE075_ANCHOR_REVIEW_BUNDLES.map((bundle) =>
      bundle.anchorId === 'STYLE-GIR-V1' ? approved : bundle,
    );
    expect(getStage075NextGlobalProductionTarget(bundles)).toMatchObject({
      anchorId: 'DAY1-HANDAXE-V1',
      slotId: 'face-a',
    });
  });

  it('requires all five STYLE slots and exact paths before opening the style gate', () => {
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
    expect(isStage075AnchorReviewBundleComplete(getStage075AnchorReviewBundle('STYLE-GIR-V1')!)).toBe(false);
  });

  it('retains canonical Player and Aru master-derivation order', () => {
    const player = getStage075AnchorReviewBundle('PLAYER-HUNT-BODY-V1')!;
    expect(player.slots[0].id).toBe('structural-scaffold');
    expect(player.slots[1].id).toBe('canonical-body');
    for (const slot of player.slots.slice(2)) {
      expect(slot.parentSlotId).toBe('canonical-body');
    }

    const aru = getStage075AnchorReviewBundle('ARU-IDENTITY-V1')!;
    expect(aru.slots[0].id).toBe('structural-scaffold');
    expect(aru.slots[1].id).toBe('canonical-identity');
    for (const slot of aru.slots.slice(2)) {
      expect(slot.parentSlotId).toBe('canonical-identity');
    }
  });

  it('renders GIR-30, reopened human-mid and blocked first-person-hand', () => {
    render(<Stage075VisualAnchorReviewBoard />);
    const surfacePolicy = screen.getByTestId('surface-realism-policy');
    expect(surfacePolicy.textContent).toContain('GIR-SURFACE-30');
    expect(surfacePolicy.textContent).toContain('30/100');
    expect(surfacePolicy.textContent).toContain('25–35');

    const target = screen.getByTestId('next-production-target');
    expect(target.textContent).toContain('STYLE-GIR-V1');
    expect(target.textContent).toContain('human-mid');
    expect(screen.getByTestId('slot-state-STYLE-GIR-V1-human-mid').textContent).toBe('NEXT production target');
    expect(screen.getByTestId('slot-blocked-by-STYLE-GIR-V1-first-person-hand').textContent).toContain('human-mid');
  });
});
