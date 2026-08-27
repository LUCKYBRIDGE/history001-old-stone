import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  Stage075RasterMedia,
  getStage075ResponsiveSources,
} from '../../src/experience/production/Stage075RasterMedia';
import {
  STAGE075_RASTER_MANIFEST,
  type Stage075RasterRecord,
} from '../../src/experience/production/stage075RasterManifest';

describe('Stage075RasterMedia', () => {
  it('never renders an unapproved production image path', () => {
    const pending = STAGE075_RASTER_MANIFEST.find(
      (record) => record.assetId === 'HUNT-SC02-HANDOFF-KEYFRAME-V1',
    );

    expect(pending).toBeTruthy();
    render(<Stage075RasterMedia record={pending!} />);

    expect(screen.getByTestId('raster-slot-HUNT-SC02-HANDOFF-KEYFRAME-V1')).toBeTruthy();
    expect(document.querySelector('picture')).toBeNull();
    expect(document.querySelector('img')).toBeNull();
  });

  it('does not render an approved scene raster when style/continuity anchors are not approved', () => {
    const continuityBlocked: Stage075RasterRecord = {
      assetId: 'TEST-CONTINUITY-BLOCKED',
      sceneIds: ['SC02'],
      pvId: 'PV-02',
      role: 'contact-keyframe',
      status: 'approved',
      requiredFamilies: ['L'],
      requiredStyleAnchorId: 'STYLE-GIR-V1',
      requiredAnchorIds: ['ARU-IDENTITY-V1', 'DAY1-HANDAXE-V1'],
      derivationMode: 'anchor-conditioned',
      continuityGroupId: 'TEST-CONTINUITY',
      sources: {
        landscape: '/assets/blocked.webp',
      },
      alt: 'blocked test asset',
      continuity: [],
    };

    render(<Stage075RasterMedia record={continuityBlocked} />);

    const slot = screen.getByTestId('raster-slot-TEST-CONTINUITY-BLOCKED');
    expect(slot.getAttribute('data-continuity-ready')).toBe('false');
    expect(document.querySelector('picture')).toBeNull();
    expect(document.querySelector('img')).toBeNull();
  });

  it('defines PP then TP responsive source priority independently from approval state', () => {
    const sources = getStage075ResponsiveSources({
      landscape: '/assets/handoff-l.webp',
      tabletPortrait: '/assets/handoff-tp.webp',
      phonePortrait: '/assets/handoff-pp.webp',
    });

    expect(sources).toHaveLength(2);
    expect(sources[0]).toEqual({
      family: 'PP',
      media: '(orientation: portrait) and (max-width: 599px)',
      srcSet: '/assets/handoff-pp.webp',
    });
    expect(sources[1]).toEqual({
      family: 'TP',
      media: '(orientation: portrait) and (min-width: 600px)',
      srcSet: '/assets/handoff-tp.webp',
    });
  });
});
