import { ExperienceOrchestrator } from '../experience/ExperienceOrchestrator';
import { Stage075PrevisualHarness } from '../experience/previsual/Stage075PrevisualHarness';
import { Stage075RasterIntegrationPreview } from '../experience/production/Stage075RasterIntegrationPreview';
import { Stage075VisualAnchorReviewBoard } from '../experience/production/Stage075VisualAnchorReviewBoard';
import {
  R2EmbodiedSkeleton,
  type SkeletonSurfaceMode,
} from '../experience/skeleton/R2EmbodiedSkeleton';
import { AppShell } from './AppShell';

function getDevelopmentMode() {
  if (!import.meta.env.DEV) {
    return {
      legacy: false,
      previsual: false,
      raster: false,
      anchors: false,
      surfaceMode: 'player' as SkeletonSurfaceMode,
    };
  }

  const params = new URLSearchParams(window.location.search);

  if (params.get('anchors') === '1') {
    return {
      legacy: false,
      previsual: false,
      raster: false,
      anchors: true,
      surfaceMode: 'player' as SkeletonSurfaceMode,
    };
  }

  if (params.get('raster') === '1') {
    return {
      legacy: false,
      previsual: false,
      raster: true,
      anchors: false,
      surfaceMode: 'player' as SkeletonSurfaceMode,
    };
  }

  if (params.get('previsual') === '1') {
    return {
      legacy: false,
      previsual: true,
      raster: false,
      anchors: false,
      surfaceMode: 'player' as SkeletonSurfaceMode,
    };
  }

  if (params.get('legacy') === '1') {
    return {
      legacy: true,
      previsual: false,
      raster: false,
      anchors: false,
      surfaceMode: 'player' as SkeletonSurfaceMode,
    };
  }

  if (params.get('debug') === '1') {
    return {
      legacy: false,
      previsual: false,
      raster: false,
      anchors: false,
      surfaceMode: 'debug' as SkeletonSurfaceMode,
    };
  }

  if (params.get('teacher') === '1') {
    return {
      legacy: false,
      previsual: false,
      raster: false,
      anchors: false,
      surfaceMode: 'teacher' as SkeletonSurfaceMode,
    };
  }

  return {
    legacy: false,
    previsual: false,
    raster: false,
    anchors: false,
    surfaceMode: 'player' as SkeletonSurfaceMode,
  };
}

export function App() {
  const mode = getDevelopmentMode();

  return (
    <AppShell>
      {mode.anchors ? (
        <Stage075VisualAnchorReviewBoard />
      ) : mode.raster ? (
        <Stage075RasterIntegrationPreview />
      ) : mode.previsual ? (
        <Stage075PrevisualHarness />
      ) : mode.legacy ? (
        <ExperienceOrchestrator />
      ) : (
        <R2EmbodiedSkeleton surfaceMode={mode.surfaceMode} />
      )}
    </AppShell>
  );
}
