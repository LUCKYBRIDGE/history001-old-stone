import type { PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <main className="app-shell__main">{children}</main>
    </div>
  );
}
