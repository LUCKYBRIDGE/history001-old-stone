import { ExperienceOrchestrator } from '../experience/ExperienceOrchestrator';
import {
  R2EmbodiedSkeleton,
  type SkeletonSurfaceMode,
} from '../experience/skeleton/R2EmbodiedSkeleton';
import { AppShell } from './AppShell';

function getDevelopmentMode() {
  if (!import.meta.env.DEV) {
    return { legacy: false, surfaceMode: 'player' as SkeletonSurfaceMode };
  }

  const params = new URLSearchParams(window.location.search);

  if (params.get('legacy') === '1') {
    return { legacy: true, surfaceMode: 'player' as SkeletonSurfaceMode };
  }

  if (params.get('debug') === '1') {
    return { legacy: false, surfaceMode: 'debug' as SkeletonSurfaceMode };
  }

  if (params.get('teacher') === '1') {
    return { legacy: false, surfaceMode: 'teacher' as SkeletonSurfaceMode };
  }

  return { legacy: false, surfaceMode: 'player' as SkeletonSurfaceMode };
}

export function App() {
  const mode = getDevelopmentMode();

  return (
    <AppShell>
      {mode.legacy ? (
        <ExperienceOrchestrator />
      ) : (
        <R2EmbodiedSkeleton surfaceMode={mode.surfaceMode} />
      )}
    </AppShell>
  );
}
