import type { PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <p className="eyebrow">Stage 08-B · Hunt Vertical Slice v0.1</p>
        <h1>구석기 공동체의 하루</h1>
        <p>
          같은 하루를 사냥·채집·머무름의 서로 다른 관점에서 경험하는 교육용
          웹게임
        </p>
      </header>

      <main className="app-shell__main">{children}</main>

      <footer className="app-shell__footer">
        현재 화면은 기능·UX 검증용 프로토타입이며 최종 이미지·사운드는 아직 연결하지 않았습니다.
      </footer>
    </div>
  );
}
