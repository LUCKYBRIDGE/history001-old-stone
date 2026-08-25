import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { R2EmbodiedSkeleton } from '../../src/experience/skeleton/R2EmbodiedSkeleton';

async function receiveHandaxe() {
  const user = userEvent.setup();

  await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));
  await user.click(
    screen.getByRole('button', { name: '그 사람을 바라본다' }),
  );
  await user.click(screen.getByRole('button', { name: '돌도구를 받는다' }));

  return user;
}

async function reachDeparture() {
  const user = await receiveHandaxe();

  await user.click(
    screen.getByRole('button', { name: '주먹도끼를 쥐고 일어난다' }),
  );
  await user.click(
    screen.getByRole('button', { name: '사람들과 함께 나갈 준비를 한다' }),
  );

  return user;
}

async function reachCaveNotice() {
  const user = await reachDeparture();

  await user.click(screen.getByRole('button', { name: '거처를 나선다' }));
  await user.click(
    screen.getByRole('button', { name: '몸을 낮춰 지면을 살핀다' }),
  );

  return user;
}

describe('R2EmbodiedSkeleton', () => {
  it('starts as a role-true player perspective without development chrome', () => {
    render(<R2EmbodiedSkeleton />);

    expect(
      screen.getByRole('heading', { name: '사냥을 나선 사람의 관점' }),
    ).toBeTruthy();
    expect(document.body.textContent).not.toContain('Stage 08-B');
    expect(document.body.textContent).not.toContain('현재 단계:');
    expect(screen.queryByLabelText('교사용 제어')).toBeNull();
    expect(screen.queryByLabelText('디버그 정보')).toBeNull();
  });

  it('reveals the chipped-stone and handaxe terms only after the embodied handoff', async () => {
    render(<R2EmbodiedSkeleton />);

    expect(screen.queryByText('뗀석기 · 주먹도끼')).toBeNull();

    await receiveHandaxe();

    const cue = screen.getByTestId('curriculum-cue');
    expect(cue.getAttribute('data-anchor-id')).toBe('handaxe');
    expect(screen.getByText('뗀석기 · 주먹도끼')).toBeTruthy();
    expect(screen.getByTestId('held-tool')).toBeTruthy();
    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'tool-inspect',
    );
  });

  it('keeps the same handaxe attached to the player body after naming and departure', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachDeparture();

    expect(screen.getByTestId('held-tool')).toBeTruthy();
    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'walking-with-tool',
    );

    await user.click(screen.getByRole('button', { name: '거처를 나선다' }));

    expect(screen.getByTestId('held-tool')).toBeTruthy();
    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'crouch-observe',
    );
  });

  it('moves from embodied ground observation into a natural shelter discovery instead of a textbook question', async () => {
    render(<R2EmbodiedSkeleton />);
    await reachCaveNotice();

    expect(screen.getByTestId('cave-opening')).toBeTruthy();
    expect(
      screen.getByRole('button', { name: '바위 아래 공간으로 가까이 간다' }),
    ).toBeTruthy();
    expect(document.body.textContent).not.toContain('정답');
    expect(document.body.textContent).not.toContain('다음 중');
  });

  it('lets the player inspect the cave before explicitly connecting it to cave and rock-shelter living', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachCaveNotice();

    expect(screen.queryByText('동굴 · 바위 그늘')).toBeNull();

    await user.click(
      screen.getByRole('button', { name: '바위 아래 공간으로 가까이 간다' }),
    );

    expect(screen.getByTestId('cave-opening')).toBeTruthy();
    expect(screen.getByText('동굴 · 바위 그늘')).toBeTruthy();
    expect(screen.getByTestId('curriculum-cue').getAttribute('data-anchor-id')).toBe(
      'cave-or-rock-shelter',
    );
    expect(document.body.textContent).toContain('비나 바람을 피하기에는 괜찮아 보이지만');
    expect(document.body.textContent).toContain('다른 동물이 이곳을 이용했는지는');
  });

  it('opens a clearly identified second perspective after evaluating the shelter candidate', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachCaveNotice();

    await user.click(
      screen.getByRole('button', { name: '바위 아래 공간으로 가까이 간다' }),
    );
    await user.click(
      screen.getByRole('button', {
        name: '이 장소와 돌아가는 길을 기억해 둔다',
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: '거처에 남아 생활을 이어가는 사람의 관점',
      }),
    ).toBeTruthy();
    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'camp-fire-rest',
    );
    expect(screen.queryByTestId('held-tool')).toBeNull();
  });

  it('exposes reduced-effects controls only on the teacher surface while preserving curriculum content', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <R2EmbodiedSkeleton surfaceMode="teacher" />,
    );

    expect(screen.getByLabelText('교사용 제어')).toBeTruthy();
    const reducedEffects = screen.getByRole('checkbox', {
      name: '화면 움직임 줄이기',
    });

    await user.click(reducedEffects);
    await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));
    await user.click(
      screen.getByRole('button', { name: '그 사람을 바라본다' }),
    );
    await user.click(screen.getByRole('button', { name: '돌도구를 받는다' }));

    expect(container.querySelector('.r2-skeleton--reduced')).toBeTruthy();
    expect(screen.getByText('뗀석기 · 주먹도끼')).toBeTruthy();
    expect(document.body.textContent).toContain('교과 연결: 뗀석기 · 주먹도끼');
  });

  it('exposes internal evidence only in debug mode and records curriculum and shelter evidence', async () => {
    render(<R2EmbodiedSkeleton surfaceMode="debug" />);
    const user = await receiveHandaxe();

    let debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('tool-received-in-embodied-context');
    expect(debugText).toContain('handaxe-term-revealed');
    expect(debugText).toContain('handaxe');

    await user.click(
      screen.getByRole('button', { name: '주먹도끼를 쥐고 일어난다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '사람들과 함께 나갈 준비를 한다' }),
    );
    await user.click(screen.getByRole('button', { name: '거처를 나선다' }));
    await user.click(
      screen.getByRole('button', { name: '몸을 낮춰 지면을 살핀다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '바위 아래 공간으로 가까이 간다' }),
    );
    await user.click(
      screen.getByRole('button', {
        name: '이 장소와 돌아가는 길을 기억해 둔다',
      }),
    );

    debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('embodied-observation-performed');
    expect(debugText).toContain('natural-shelter-evaluated');
    expect(debugText).toContain('cave-shelter-term-revealed');
    expect(debugText).toContain('perspective-proof');
  });
});
