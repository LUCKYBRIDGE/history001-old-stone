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
  it('starts as a role-true player perspective without development or reconstruction chrome', () => {
    render(<R2EmbodiedSkeleton />);

    expect(
      screen.getByRole('heading', { name: '사냥을 나선 사람의 관점' }),
    ).toBeTruthy();
    expect(document.body.textContent).not.toContain('Stage 08-B');
    expect(document.body.textContent).not.toContain('현재 단계:');
    expect(document.body.textContent).not.toContain('역사적 재구성');
    expect(screen.queryByLabelText('교사용 제어')).toBeNull();
    expect(screen.queryByLabelText('디버그 정보')).toBeNull();
  });

  it('shows an irregular current temporary shelter before the later natural-shelter discovery', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));

    const shelter = screen.getByTestId('current-shelter');
    expect(shelter).toBeTruthy();
    expect(shelter.classList.contains('r2-current-shelter')).toBe(true);
    expect(shelter.querySelector('.r2-current-shelter__cover')).toBeTruthy();
    expect(shelter.querySelectorAll('.r2-current-shelter__pole').length).toBe(2);
    expect(document.body.textContent).toContain('임시 거처');
    expect(screen.queryByTestId('cave-opening')).toBeNull();
  });

  it('reveals chipped-stone as the category and handaxe as a representative example only after the embodied handoff', async () => {
    render(<R2EmbodiedSkeleton />);

    expect(screen.queryByText('뗀석기')).toBeNull();

    await receiveHandaxe();

    const cue = screen.getByTestId('curriculum-cue');
    expect(cue.getAttribute('data-anchor-ids')).toBe(
      'paleolithic-chipped-stone,handaxe',
    );
    expect(screen.getByText('뗀석기')).toBeTruthy();
    expect(document.body.textContent).toContain(
      '지금 손에 든 것은 그 대표적인 예인 주먹도끼다.',
    );
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
    expect(screen.getByTestId('current-shelter').classList.contains('r2-current-shelter--distant')).toBe(
      true,
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
    expect(document.body.textContent).toContain('한동안 더 걸은 뒤');
    expect(
      screen.getByRole('button', { name: '바위 아래 공간으로 가까이 간다' }),
    ).toBeTruthy();
    expect(document.body.textContent).not.toContain('정답');
    expect(document.body.textContent).not.toContain('다음 중');
  });

  it('lets the player inspect the cave before naming cave or rock-shelter living and does not introduce the unexperienced makjip term there', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachCaveNotice();

    expect(screen.queryByText('동굴 / 바위 그늘')).toBeNull();

    await user.click(
      screen.getByRole('button', { name: '바위 아래 공간으로 가까이 간다' }),
    );

    expect(screen.getByTestId('cave-opening')).toBeTruthy();
    expect(screen.getByText('동굴 / 바위 그늘')).toBeTruthy();
    expect(screen.getByTestId('curriculum-cue').getAttribute('data-anchor-ids')).toBe(
      'cave-or-rock-shelter',
    );
    expect(document.body.textContent).toContain('비나 바람을 피하기에는 괜찮아 보인다');
    expect(document.body.textContent).toContain('다른 동물이 이곳을 이용했는지');
    expect(document.body.textContent).not.toContain('막집');
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
    expect(screen.getByTestId('current-shelter')).toBeTruthy();
  });

  it('keeps reconstruction metadata off the player surface while exposing the relevant event boundary to teachers', async () => {
    const playerUser = userEvent.setup();
    const player = render(<R2EmbodiedSkeleton />);

    await playerUser.click(screen.getByRole('button', { name: '눈을 뜬다' }));
    expect(document.body.textContent).not.toContain('역사적 재구성');
    player.unmount();

    const teacherUser = userEvent.setup();
    render(<R2EmbodiedSkeleton surfaceMode="teacher" />);

    await teacherUser.click(screen.getByRole('button', { name: '눈을 뜬다' }));
    expect(screen.getByTestId('reconstruction-note').textContent).toContain(
      '공동체의 구체 인물과 거처 배치',
    );

    await teacherUser.click(
      screen.getByRole('button', { name: '그 사람을 바라본다' }),
    );
    expect(screen.getByTestId('reconstruction-note').textContent).toContain(
      '이 도구를 건네는 구체 사건',
    );
  });

  it('keeps reduced-effects and curriculum information on the teacher surface and labels the specific cave discovery as reconstruction', async () => {
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
    expect(screen.getByText('뗀석기')).toBeTruthy();
    expect(document.body.textContent).toContain(
      '교과 연결: 뗀석기 → 대표적인 예: 주먹도끼',
    );

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

    expect(screen.getByTestId('reconstruction-note').textContent).toContain(
      '자연 거처 후보를 발견하는 구체 사건',
    );
  });

  it('exposes internal evidence only in debug mode and records both curriculum hierarchy and shelter evidence', async () => {
    render(<R2EmbodiedSkeleton surfaceMode="debug" />);
    const user = await receiveHandaxe();

    let debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('tool-received-in-embodied-context');
    expect(debugText).toContain('chipped-stone-term-revealed');
    expect(debugText).toContain('handaxe-term-revealed');
    expect(debugText).toContain('paleolithic-chipped-stone');
    expect(debugText).toContain('handaxe');
    expect(debugText).toContain('이 도구를 건네는 구체 사건');

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

    debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('자연 거처 후보를 발견하는 구체 사건');

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
