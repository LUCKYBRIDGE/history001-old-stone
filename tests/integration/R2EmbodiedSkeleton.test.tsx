import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { R2EmbodiedSkeleton } from '../../src/experience/skeleton/R2EmbodiedSkeleton';

async function receiveHandaxe() {
  const user = userEvent.setup();

  await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));
  await user.click(
    screen.getByRole('button', { name: '눈이 마주친 얼굴을 바라본다' }),
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
    screen.getByRole('button', { name: '목소리 쪽으로 한 걸음 다가간다' }),
  );

  return user;
}

async function reachH2Notice() {
  const user = await reachDeparture();

  await user.click(
    screen.getByRole('button', { name: '한번 돌아보고 걷기 시작한다' }),
  );
  await user.click(
    screen.getByRole('button', { name: '옆에 쪼그려 앉는다' }),
  );
  await user.click(screen.getByRole('button', { name: '다시 걷는다' }));

  return user;
}

async function reachCaveNotice() {
  const user = await reachH2Notice();

  await user.click(screen.getByRole('button', { name: '그쪽을 본다' }));

  return user;
}

describe('R2EmbodiedSkeleton', () => {
  it('starts inside a sensory situation without player-facing role exposition', () => {
    render(<R2EmbodiedSkeleton />);

    expect(
      screen.getByRole('heading', { name: '불 냄새가 먼저 난다.' }),
    ).toBeTruthy();
    expect(document.body.textContent).toContain('눈꺼풀 너머로 붉은 빛');
    expect(document.body.textContent).not.toContain('사냥을 나선 사람의 관점');
    expect(document.body.textContent).not.toContain('관점');
    expect(document.body.textContent).not.toContain('Stage 08-B');
    expect(document.body.textContent).not.toContain('현재 단계:');
    expect(document.body.textContent).not.toContain('역사적 재구성');
    expect(screen.queryByLabelText('교사용 제어')).toBeNull();
    expect(screen.queryByLabelText('디버그 정보')).toBeNull();
  });

  it('shows embodied need and a familiar face before the later natural-shelter discovery', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));

    const shelter = screen.getByTestId('current-shelter');
    expect(shelter).toBeTruthy();
    expect(shelter.querySelector('.r2-current-shelter__cover')).toBeTruthy();
    expect(document.body.textContent).toContain('입안은 마르고 배는 비어 있다');
    expect(document.body.textContent).toContain('익숙한 얼굴과 눈이 마주친다');
    expect(document.body.textContent).not.toContain('동행자');
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
    expect(document.body.textContent).toContain(
      '돌을 건넨 손이 물러나고 같은 돌이 네 오른손에 남는다',
    );
    expect(screen.getByTestId('held-tool')).toBeTruthy();
  });

  it('anchors the invitation in the world without narrating a companion role', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await receiveHandaxe();

    await user.click(
      screen.getByRole('button', { name: '주먹도끼를 쥐고 일어난다' }),
    );

    expect(screen.getByTestId('h1-dialogue').textContent).toContain('같이 가자');
    expect(screen.getByTestId('h1-actor').classList.contains('r2-actor--invite')).toBe(
      true,
    );
    expect(screen.getByTestId('h2-actor').classList.contains('r2-actor--scanning')).toBe(
      true,
    );
    expect(document.body.textContent).toContain('바로 곁의 발소리가 멎는다');
    expect(document.body.textContent).not.toContain('동행자');
    expect(document.body.textContent).not.toContain('함께 나가는 사람');
    expect(document.body.textContent).not.toContain('주변을 살피는 사람');

    await user.click(
      screen.getByRole('button', { name: '목소리 쪽으로 한 걸음 다가간다' }),
    );

    expect(screen.queryByTestId('h1-dialogue')).toBeNull();
    expect(screen.getByTestId('r-dialogue').textContent).toContain(
      '해가 지기 전에 돌아와',
    );
    expect(document.body.textContent).toContain('아까 돌을 내민 손');
  });

  it('keeps the same handaxe and the remembered fire-side voice through departure', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachDeparture();

    expect(screen.getByTestId('held-tool')).toBeTruthy();
    expect(screen.getByTestId('r-dialogue').textContent).toContain(
      '해가 지기 전에 돌아와',
    );
    expect(screen.getByTestId('current-shelter').classList.contains('r2-current-shelter--distant')).toBe(
      true,
    );

    await user.click(
      screen.getByRole('button', { name: '한번 돌아보고 걷기 시작한다' }),
    );

    expect(screen.getByTestId('held-tool')).toBeTruthy();
    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'crouch-observe',
    );
  });

  it('makes the shared ground observation readable through proximity rather than an H1 role description', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachDeparture();

    await user.click(
      screen.getByRole('button', { name: '한번 돌아보고 걷기 시작한다' }),
    );

    expect(screen.getByTestId('h1-actor').getAttribute('data-relationship-beat')).toBe(
      'h1-shared-ground-observation',
    );
    expect(document.body.textContent).toContain('곁의 사람이 쪼그려 앉는다');
    expect(document.body.textContent).not.toContain('H1');
    expect(document.body.textContent).not.toContain('동행자');

    await user.click(screen.getByRole('button', { name: '옆에 쪼그려 앉는다' }));

    expect(document.body.textContent).toContain('셋의 발걸음이 이어진다');
  });

  it('keeps the cave hidden until the person ahead stops and the player looks that way', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachH2Notice();

    expect(screen.queryByTestId('cave-opening')).toBeNull();
    expect(screen.getByTestId('h2-actor').getAttribute('data-relationship-beat')).toBe(
      'h2-gaze-cue',
    );
    expect(screen.getByTestId('h2-dialogue').textContent).toContain('저기');
    expect(document.body.textContent).toContain('앞서 가던 사람이 갑자기 멈춘다');
    expect(document.body.textContent).not.toContain('H2');
    expect(document.body.textContent).not.toContain('동행자');

    await user.click(screen.getByRole('button', { name: '그쪽을 본다' }));

    expect(screen.getByTestId('cave-opening')).toBeTruthy();
    expect(screen.queryByTestId('h2-dialogue')).toBeNull();
    expect(document.body.textContent).toContain('고개를 돌리자 큰 바위 아래');
  });

  it('places both cave judgments in the world before naming cave or rock-shelter living', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachCaveNotice();

    expect(screen.queryByText('동굴 / 바위 그늘')).toBeNull();

    await user.click(
      screen.getByRole('button', { name: '바위 아래로 가까이 가 본다' }),
    );

    expect(screen.getByTestId('cave-opening')).toBeTruthy();
    expect(screen.getByText('동굴 / 바위 그늘')).toBeTruthy();
    expect(screen.getByTestId('curriculum-cue').getAttribute('data-anchor-ids')).toBe(
      'cave-or-rock-shelter',
    );
    expect(screen.getByTestId('h2-dialogue').textContent).toContain('안이 꽤 넓어');
    expect(screen.getByTestId('h1-dialogue').textContent).toContain(
      '안쪽은 먼저 봐야 해',
    );
    expect(document.body.textContent).not.toContain('동행자');
    expect(document.body.textContent).not.toContain('막집');
  });

  it('reveals the same departure from the other body through hand and object continuity instead of a role title', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachCaveNotice();

    await user.click(
      screen.getByRole('button', { name: '바위 아래로 가까이 가 본다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '돌아갈 길을 눈에 담는다' }),
    );

    expect(
      screen.getByRole('heading', { name: '불이 바로 앞에서 타고 있다.' }),
    ).toBeTruthy();
    expect(document.body.textContent).toContain('손이 비어 있다');
    expect(document.body.textContent).toContain('조금 전까지 손에 있던 돌');
    expect(document.body.textContent).toContain('해가 지기 전에 돌아와');
    expect(document.body.textContent).not.toContain('아침에 네게 도구를 건넨 사람의 관점');
    expect(document.body.textContent).not.toContain('관점');
    expect(screen.getByTestId('departing-group')).toBeTruthy();
    expect(screen.queryByTestId('held-tool')).toBeNull();
    expect(screen.getByTestId('current-shelter')).toBeTruthy();
  });

  it('keeps production-role metadata off the player surface while exposing it to teachers', async () => {
    const playerUser = userEvent.setup();
    const player = render(<R2EmbodiedSkeleton />);

    await playerUser.click(screen.getByRole('button', { name: '눈을 뜬다' }));
    expect(document.body.textContent).not.toContain('역사적 재구성');
    expect(document.body.textContent).not.toContain('R 첫 인식');
    player.unmount();

    const teacherUser = userEvent.setup();
    render(<R2EmbodiedSkeleton surfaceMode="teacher" />);

    await teacherUser.click(screen.getByRole('button', { name: '눈을 뜬다' }));
    await teacherUser.click(
      screen.getByRole('button', { name: '눈이 마주친 얼굴을 바라본다' }),
    );
    expect(screen.getByTestId('reconstruction-note').textContent).toContain(
      '이 도구를 건네는 구체 사건',
    );

    await teacherUser.click(screen.getByRole('button', { name: '돌도구를 받는다' }));
    await teacherUser.click(
      screen.getByRole('button', { name: '주먹도끼를 쥐고 일어난다' }),
    );
    await teacherUser.click(
      screen.getByRole('button', { name: '목소리 쪽으로 한 걸음 다가간다' }),
    );
    await teacherUser.click(
      screen.getByRole('button', { name: '한번 돌아보고 걷기 시작한다' }),
    );
    expect(screen.getByTestId('reconstruction-note').textContent).toContain(
      'H1과 함께 이동하고 같은 흔적을 살피는 관계 사건',
    );
  });

  it('records relationship signals only in debug mode alongside curriculum evidence', async () => {
    render(<R2EmbodiedSkeleton surfaceMode="debug" />);
    const user = await receiveHandaxe();

    let debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('r-recognized');
    expect(debugText).toContain('r-tool-handoff-shared');
    expect(debugText).toContain('tool-received-in-embodied-context');

    await user.click(
      screen.getByRole('button', { name: '주먹도끼를 쥐고 일어난다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '목소리 쪽으로 한 걸음 다가간다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '한번 돌아보고 걷기 시작한다' }),
    );
    await user.click(screen.getByRole('button', { name: '옆에 쪼그려 앉는다' }));
    await user.click(screen.getByRole('button', { name: '다시 걷는다' }));
    await user.click(screen.getByRole('button', { name: '그쪽을 본다' }));

    debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('r-return-motif-heard');
    expect(debugText).toContain('h1-shared-ground-observation');
    expect(debugText).toContain('h2-gaze-followed');
    expect(debugText).toContain('embodied-observation-performed');
  });
});