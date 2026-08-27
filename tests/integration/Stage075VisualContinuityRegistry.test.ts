import { describe, expect, it } from 'vitest';
import { STAGE075_RASTER_MANIFEST } from '../../src/experience/production/stage075RasterManifest';
import {
  STAGE075_VISUAL_CONTINUITY_ANCHORS,
  getStage075VisualAnchor,
} from '../../src/experience/production/stage075VisualContinuityRegistry';

describe('Stage 07.5 visual continuity registry', () => {
  it('keeps every visual anchor id unique', () => {
    const ids = STAGE075_VISUAL_CONTINUITY_ANCHORS.map((anchor) => anchor.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('requires every raster manifest anchor dependency to resolve to a registered anchor', () => {
    for (const record of STAGE075_RASTER_MANIFEST) {
      for (const anchorId of record.requiredAnchorIds) {
        expect(getStage075VisualAnchor(anchorId), `${record.assetId} -> ${anchorId}`).toBeTruthy();
      }
    }
  });

  it('documents immutable traits and forbidden drift for every anchor', () => {
    for (const anchor of STAGE075_VISUAL_CONTINUITY_ANCHORS) {
      expect(anchor.immutableTraits.length, anchor.id).toBeGreaterThan(0);
      expect(anchor.forbiddenDrift.length, anchor.id).toBeGreaterThan(0);
    }
  });

  it('does not mark an anchor approved without approved reference paths', () => {
    for (const anchor of STAGE075_VISUAL_CONTINUITY_ANCHORS) {
      if (anchor.status === 'anchor-approved') {
        expect(anchor.approvedReferencePaths?.length, anchor.id).toBeGreaterThan(0);
      }
    }
  });

  it('keeps critical identity/world/object anchors pending until actual masters exist', () => {
    const criticalIds = [
      'ARU-IDENTITY-V1',
      'DAMU-IDENTITY-V1',
      'NUA-IDENTITY-V1',
      'PLAYER-HUNT-BODY-V1',
      'WORLD-CAMP-DAWN-A',
      'DAY1-HANDAXE-V1',
    ] as const;

    for (const id of criticalIds) {
      const anchor = getStage075VisualAnchor(id);
      expect(anchor).toBeTruthy();
      expect(anchor?.status).not.toBe('anchor-approved');
      expect(anchor?.approvedReferencePaths).toBeUndefined();
    }
  });
});
