import { ExperienceOrchestrator } from '../experience/ExperienceOrchestrator';
import { AppShell } from './AppShell';

export function App() {
  return (
    <AppShell>
      <ExperienceOrchestrator />
    </AppShell>
  );
}
