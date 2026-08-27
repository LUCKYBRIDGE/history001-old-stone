import { ExperienceOrchestrator } from '../experience/ExperienceOrchestrator';
import { Stage075PrevisualHarness } from '../experience/previsual/Stage075PrevisualHarness';
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
      surfaceMode: 'player' as SkeletonSurfaceMode,
    };
  }

  const params = new URLSearchParams(window.location.search);

  if (params.get('previsual') === '1') {
    return {
      legacy: false,
      previsual: true,
      surfaceMode: 'player' as SkeletonSurfaceMode,
    };
  }

  if (params.get('legacy') === '1') {
    return {
      legacy: true,
      previsual: false,
      surfaceMode: 'player' as SkeletonSurfaceMode,
    };
  }

  if (params.get('debug') === '1') {
    return {
      legacy: false,
      previsual: false,
      surfaceMode: 'debug' as SkeletonSurfaceMode,
    };
  }

  if (params.get('teacher') === '1') {
    return {
      legacy: false,
      previsual: false,
      surfaceMode: 'teacher' as SkeletonSurfaceMode,
    };
  }

  return {
    legacy: false,
    previsual: false,
    surfaceMode: 'player' as SkeletonSurfaceMode,
  };
}

export function App() {
  const mode = getDevelopmentMode();

  return (
    <AppShell>
      {mode.previsual ? (
        <Stage075PrevisualHarness />
      ) : mode.legacy ? (
        <ExperienceOrchestrator />
      ) : (
        <R2EmbodiedSkeleton surfaceMode={mode.surfaceMode} />
      )}
    </AppShell>
  );
}
