import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { R2EmbodiedSkeleton } from '../../src/experience/skeleton/R2EmbodiedSkeleton';

async function receiveHandaxe() {
  const user = userEvent.setup();

  await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));
  await user.click(
    screen.getByRole('button', { name: '불가의 익숙한 얼굴을 바라본다' }),
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
    screen.getByRole('button', { name: '목소리가 난 동행자 곁으로 간다' }),
  );

  return user;
}

async function reachH2Notice() {
  const user = await reachDeparture();

  await user.click(
    screen.getByRole('button', { name: '고개를 끄덕이고 두 동행자와 나선다' }),
  );
  await user.click(
    screen.getByRole('button', { name: '바로 옆에 몸을 낮춰 함께 살핀다' }),
  );
  await user.click(
    screen.getByRole('button', { name: '두 동행자와 계속 걷는다' }),
  );

  return user;
}

async function reachCaveNotice() {
  const user = await reachH2Notice();

  await user.click(
    screen.getByRole('button', { name: '멈춘 동행자의 시선을 따라본다' }),
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

  it('shows the current temporary shelter and relational need before the later natural-shelter discovery', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));

    const shelter = screen.getByTestId('current-shelter');
    expect(shelter).toBeTruthy();
    expect(shelter.querySelector('.r2-current-shelter__cover')).toBeTruthy();
    expect(document.body.textContent).toContain('먹을 것을 찾아 나설 준비');
    expect(document.body.textContent).toContain('바로 시선을 맞춘다');
    expect(screen.queryByTestId('cave-opening')).toBeNull();
  });

  it('reveals chipped-stone as the category and handaxe as a representative example only after the embodied R handoff', async () => {
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

  it('anchors the invitation to the nearby companion instead of narrating anonymous people', async () => {
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
    expect(document.body.textContent).not.toContain('한 사람은');
    expect(document.body.textContent).not.toContain('다른 한 사람');

    await user.click(
      screen.getByRole('button', { name: '목소리가 난 동행자 곁으로 간다' }),
    );

    expect(screen.queryByTestId('h1-dialogue')).toBeNull();
    expect(screen.getByTestId('r-dialogue').textContent).toContain(
      '해가 지기 전에 돌아와',
    );
    expect(document.body.textContent).not.toContain('방금 말한 사람');
  });

  it('keeps the same handaxe and the spatially sourced R return motif through departure', async () => {
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
      screen.getByRole('button', { name: '고개를 끄덕이고 두 동행자와 나선다' }),
    );

    expect(screen.getByTestId('held-tool')).toBeTruthy();
    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'crouch-observe',
    );
  });

  it('makes H1 part of the shared ground-observation event instead of an anonymous silhouette', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachDeparture();

    await user.click(
      screen.getByRole('button', { name: '고개를 끄덕이고 두 동행자와 나선다' }),
    );

    expect(screen.getByTestId('h1-actor').getAttribute('data-relationship-beat')).toBe(
      'h1-shared-ground-observation',
    );
    expect(document.body.textContent).toContain('바로 곁을 걷던 동행자');

    await user.click(
      screen.getByRole('button', { name: '바로 옆에 몸을 낮춰 함께 살핀다' }),
    );

    expect(document.body.textContent).toContain('셋의 발걸음이 이어진다');
  });

  it('keeps the cave hidden until the outward-looking companion stops and the player follows that gaze', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachH2Notice();

    expect(screen.queryByTestId('cave-opening')).toBeNull();
    expect(screen.getByTestId('h2-actor').getAttribute('data-relationship-beat')).toBe(
      'h2-gaze-cue',
    );
    expect(screen.getByTestId('h2-dialogue').textContent).toContain('저기');
    expect(document.body.textContent).toContain('앞쪽의 발소리가 갑자기 멈춘다');
    expect(document.body.textContent).not.toContain('계속 주변을 살피던 다른 사람');

    await user.click(
      screen.getByRole('button', { name: '멈춘 동행자의 시선을 따라본다' }),
    );

    expect(screen.getByTestId('cave-opening')).toBeTruthy();
    expect(screen.queryByTestId('h2-dialogue')).toBeNull();
    expect(document.body.textContent).toContain('고개를 돌리자 큰 바위 아래');
  });

  it('places both cave judgments at companion positions before naming cave or rock-shelter living', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachCaveNotice();

    expect(screen.queryByText('동굴 / 바위 그늘')).toBeNull();

    await user.click(
      screen.getByRole('button', {
        name: '두 동행자와 바위 아래 공간으로 가까이 간다',
      }),
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
    expect(document.body.textContent).not.toContain('먼저 발견한 사람이 말한다');
    expect(document.body.textContent).not.toContain('곁의 다른 사람이');
    expect(document.body.textContent).not.toContain('막집');
  });

  it('reinterprets the same departure from the morning handoff person without transferring the Hunt handaxe to the new body', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachCaveNotice();

    await user.click(
      screen.getByRole('button', {
        name: '두 동행자와 바위 아래 공간으로 가까이 간다',
      }),
    );
    await user.click(
      screen.getByRole('button', {
        name: '이 장소와 돌아가는 길을 기억해 둔다',
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: '아침에 네게 도구를 건넨 사람의 관점',
      }),
    ).toBeTruthy();
    expect(document.body.textContent).toContain('같은 Day 1의 같은 아침');
    expect(document.body.textContent).toContain('내가 돌도구를 건넨 사람');
    expect(document.body.textContent).toContain('해가 지기 전에 돌아와');
    expect(screen.getByTestId('departing-group')).toBeTruthy();
    expect(screen.queryByTestId('held-tool')).toBeNull();
    expect(screen.getByTestId('current-shelter')).toBeTruthy();
  });

  it('keeps reconstruction metadata off the player surface while exposing relationship event boundaries to teachers', async () => {
    const playerUser = userEvent.setup();
    const player = render(<R2EmbodiedSkeleton />);

    await playerUser.click(screen.getByRole('button', { name: '눈을 뜬다' }));
    expect(document.body.textContent).not.toContain('역사적 재구성');
    player.unmount();

    const teacherUser = userEvent.setup();
    render(<R2EmbodiedSkeleton surfaceMode="teacher" />);

    await teacherUser.click(screen.getByRole('button', { name: '눈을 뜬다' }));
    await teacherUser.click(
      screen.getByRole('button', { name: '불가의 익숙한 얼굴을 바라본다' }),
    );
    expect(screen.getByTestId('reconstruction-note').textContent).toContain(
      '이 도구를 건네는 구체 사건',
    );

    await teacherUser.click(screen.getByRole('button', { name: '돌도구를 받는다' }));
    await teacherUser.click(
      screen.getByRole('button', { name: '주먹도끼를 쥐고 일어난다' }),
    );
    await teacherUser.click(
      screen.getByRole('button', { name: '목소리가 난 동행자 곁으로 간다' }),
    );
    await teacherUser.click(
      screen.getByRole('button', { name: '고개를 끄덕이고 두 동행자와 나선다' }),
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
      screen.getByRole('button', { name: '목소리가 난 동행자 곁으로 간다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '고개를 끄덕이고 두 동행자와 나선다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '바로 옆에 몸을 낮춰 함께 살핀다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '두 동행자와 계속 걷는다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '멈춘 동행자의 시선을 따라본다' }),
    );

    debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('r-return-motif-heard');
    expect(debugText).toContain('h1-shared-ground-observation');
    expect(debugText).toContain('h2-gaze-followed');
    expect(debugText).toContain('embodied-observation-performed');
  });
});
