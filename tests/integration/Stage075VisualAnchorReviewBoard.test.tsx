import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Stage075VisualAnchorReviewBoard } from '../../src/experience/production/Stage075VisualAnchorReviewBoard';
import {
  STAGE075_ANCHOR_REVIEW_BUNDLES,
  getStage075AnchorBundleProgress,
} from '../../src/experience/production/stage075AnchorReviewBundle';

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

  it('keeps the first anchor review bundle incomplete until approved master files are registered', () => {
    for (const bundle of STAGE075_ANCHOR_REVIEW_BUNDLES) {
      const progress = getStage075AnchorBundleProgress(bundle);
      expect(progress.required).toBeGreaterThan(0);
      expect(progress.approved).toBe(0);
    }
  });

  it('renders style, anatomy and downstream readiness without production images', () => {
    render(<Stage075VisualAnchorReviewBoard />);

    expect(screen.getByRole('heading', { name: 'Stage 07.5 Visual Anatomy Reference Lock' })).toBeTruthy();
    expect(screen.getByTestId('review-bundle-STYLE-GIR-V1')).toBeTruthy();
    expect(screen.getByTestId('review-bundle-DAY1-HANDAXE-V1')).toBeTruthy();
    expect(screen.getByTestId('visual-anchor-PLAYER-HUNT-BODY-V1')).toBeTruthy();
    expect(screen.getByTestId('anatomy-contract-SC02-HANDOFF-GEO-V1')).toBeTruthy();
    expect(document.querySelector('img')).toBeNull();
  });
});
