import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Stage075VisualAnchorReviewBoard } from '../../src/experience/production/Stage075VisualAnchorReviewBoard';
import {
  STAGE075_ANCHOR_REVIEW_BUNDLES,
  getStage075AnchorBundleProgress,
  getStage075AnchorReviewBundle,
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

  it('defines five controlled STYLE-GIR-V1 slots without prematurely locking downstream identities', () => {
    const styleBundle = getStage075AnchorReviewBundle('STYLE-GIR-V1');

    expect(styleBundle).toBeTruthy();
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
  });

  it('keeps the first anchor review bundle incomplete until approved master files are registered', () => {
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
    expect(screen.getAllByText('planned candidate path')).toHaveLength(
      STAGE075_ANCHOR_REVIEW_BUNDLES.flatMap((bundle) => bundle.slots).length,
    );
    expect(screen.getByTestId('visual-anchor-PLAYER-HUNT-BODY-V1')).toBeTruthy();
    expect(screen.getByTestId('anatomy-contract-SC02-HANDOFF-GEO-V1')).toBeTruthy();
    expect(document.querySelector('img')).toBeNull();
  });
});
