import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Stage075RasterMedia } from '../../src/experience/production/Stage075RasterMedia';
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

  it('uses PP then TP sources and landscape img fallback for an approved asset', () => {
    const approved: Stage075RasterRecord = {
      assetId: 'TEST-HANDOFF',
      sceneIds: ['SC02'],
      pvId: 'PV-02',
      role: 'contact-keyframe',
      status: 'approved',
      requiredFamilies: ['L', 'TP', 'PP'],
      sources: {
        landscape: '/assets/handoff-l.webp',
        tabletPortrait: '/assets/handoff-tp.webp',
        phonePortrait: '/assets/handoff-pp.webp',
      },
      alt: 'test handoff',
      objectFit: 'cover',
      continuity: [],
    };

    render(<Stage075RasterMedia record={approved} eager />);

    const picture = screen.getByTestId('raster-media-TEST-HANDOFF');
    const sources = picture.querySelectorAll('source');
    const image = picture.querySelector('img');

    expect(sources).toHaveLength(2);
    expect(sources[0].getAttribute('data-composition-family')).toBe('PP');
    expect(sources[0].getAttribute('media')).toContain('max-width: 599px');
    expect(sources[1].getAttribute('data-composition-family')).toBe('TP');
    expect(sources[1].getAttribute('media')).toContain('min-width: 600px');
    expect(image?.getAttribute('src')).toBe('/assets/handoff-l.webp');
    expect(image?.getAttribute('loading')).toBe('eager');
    expect(image?.getAttribute('fetchpriority')).toBe('high');
  });
});
