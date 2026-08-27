import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { R2EmbodiedSkeleton } from '../../src/experience/skeleton/R2EmbodiedSkeleton';

async function receiveHandaxe() {
  const user = userEvent.setup();

  await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));
  await user.click(screen.getByRole('button', { name: '아루 쪽을 본다' }));
  await user.click(screen.getByRole('button', { name: '손을 내민다' }));

  return user;
}

async function reachDeparture() {
  const user = await receiveHandaxe();

  await user.click(screen.getByRole('button', { name: '돌을 쥔 채 일어난다' }));
  await user.click(screen.getByRole('button', { name: '일어나 따라간다' }));

  return user;
}

async function reachDamuStop() {
  const user = await reachDeparture();

  await user.click(screen.getByRole('button', { name: '걷기 시작한다' }));

  return user;
}

async function reachNuaNotice() {
  const user = await reachDamuStop();

  await user.click(screen.getByRole('button', { name: '다무 곁에 몸을 낮춘다' }));
  await user.click(screen.getByRole('button', { name: '다시 일어나 걷는다' }));

  return user;
}

async function reachCaveNotice() {
  const user = await reachNuaNotice();

  await user.click(screen.getByRole('button', { name: '누아가 보는 쪽을 살핀다' }));

  return user;
}

describe('R2EmbodiedSkeleton', () => {
  it('starts with community life already audible and no player-facing role exposition', () => {
    render(<R2EmbodiedSkeleton />);

    expect(
      screen.getByRole('heading', { name: '불 냄새가 먼저 난다.' }),
    ).toBeTruthy();
    expect(document.body.textContent).toContain('“그건 젖었어.”');
    expect(document.body.textContent).toContain('“저쪽 걸 써.”');
    expect(document.body.textContent).not.toContain('사냥을 나선 사람의 관점');
    expect(document.body.textContent).not.toContain('당신은 사냥꾼');
    expect(document.body.textContent).not.toContain('등장인물');
    expect(document.body.textContent).not.toContain('역사적 재구성');
    expect(screen.queryByLabelText('교사용 제어')).toBeNull();
    expect(screen.queryByLabelText('디버그 정보')).toBeNull();
  });

  it('keeps background people active and lets the player hear Aru in context after opening their eyes', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));

    expect(screen.getByTestId('background-fire-actor')).toBeTruthy();
    expect(screen.getByTestId('background-shelter-actor')).toBeTruthy();
    expect(screen.getByTestId('aru-name-call').textContent).toContain('아루');
    expect(screen.getByTestId('current-shelter')).toBeTruthy();
    expect(document.body.textContent).toContain('모두가 멈추지는 않는다');
    expect(document.body.textContent).not.toContain('도구를 주는 사람');
    expect(document.body.textContent).not.toContain('같이 가는 사람');
    expect(document.body.textContent).not.toContain('주변을 보는 사람');
    expect(screen.queryByTestId('cave-opening')).toBeNull();
  });

  it('turns the handaxe pickup into an Aru-to-hand contact event before terminology appears', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));
    await user.click(screen.getByRole('button', { name: '아루 쪽을 본다' }));

    expect(screen.getByTestId('aru-dialogue').textContent).toContain('아루');
    expect(screen.getByTestId('aru-dialogue').textContent).toContain('손.');
    expect(screen.queryByText('뗀석기')).toBeNull();
    expect(screen.queryByTestId('held-tool')).toBeNull();

    await user.click(screen.getByRole('button', { name: '손을 내민다' }));

    const cue = screen.getByTestId('curriculum-cue');
    expect(cue.getAttribute('data-anchor-ids')).toBe(
      'paleolithic-chipped-stone,handaxe',
    );
    expect(screen.getByText('뗀석기')).toBeTruthy();
    expect(document.body.textContent).toContain(
      '지금 손에 든 것은 그 대표적인 예인 주먹도끼다.',
    );
    expect(document.body.textContent).toContain('아루의 손이 물러나고 같은 돌이 네 오른손에 남는다');
    expect(screen.getByTestId('held-tool')).toBeTruthy();
  });

  it('shows Damu already moving and Nua attending elsewhere instead of explaining their roles', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await receiveHandaxe();

    await user.click(screen.getByRole('button', { name: '돌을 쥔 채 일어난다' }));

    expect(screen.getByTestId('damu-dialogue').textContent).toContain('다무');
    expect(screen.getByTestId('damu-dialogue').textContent).toContain('가자.');
    expect(screen.getByTestId('damu-actor').getAttribute('data-relationship-beat')).toBe(
      'damu-already-moving',
    );
    expect(screen.getByTestId('nua-actor').getAttribute('data-relationship-beat')).toBe(
      'nua-scans-independently',
    );
    expect(document.body.textContent).toContain('다무는 이미 몇 걸음 앞서 있다');
    expect(document.body.textContent).toContain('누아는 네 쪽보다 나무 사이 바깥을 보고 있다');
    expect(document.body.textContent).not.toContain('동행자');
    expect(document.body.textContent).not.toContain('관찰 담당');
  });

  it('lets Aru address the departing group and Damu answer before the fire recedes', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await receiveHandaxe();

    await user.click(screen.getByRole('button', { name: '돌을 쥔 채 일어난다' }));
    await user.click(screen.getByRole('button', { name: '일어나 따라간다' }));

    expect(screen.getByTestId('aru-dialogue').textContent).toContain('해 지기 전에 와');
    expect(screen.getByTestId('damu-dialogue').textContent).toContain('알았어');
    expect(
      screen.getByTestId('current-shelter').classList.contains('r2-current-shelter--distant'),
    ).toBe(true);
    expect(screen.getByTestId('held-tool')).toBeTruthy();

    await user.click(screen.getByRole('button', { name: '걷기 시작한다' }));

    expect(screen.queryByTestId('current-shelter')).toBeNull();
    expect(screen.getByTestId('held-tool')).toBeTruthy();
  });

  it('keeps the ground evidence hidden until Damu stops and the player physically crouches beside him', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachDamuStop();

    expect(screen.queryByTestId('ground-mark')).toBeNull();
    expect(screen.getByTestId('damu-dialogue').textContent).toContain('잠깐.');
    expect(screen.getByTestId('damu-actor').getAttribute('data-relationship-beat')).toBe(
      'damu-stops-before-ground-observation',
    );
    expect(document.body.textContent).toContain('아직 무엇인지 보이지 않는다');

    await user.click(screen.getByRole('button', { name: '다무 곁에 몸을 낮춘다' }));

    expect(screen.getByTestId('ground-mark')).toBeTruthy();
    expect(screen.getByTestId('damu-dialogue').textContent).toContain('봤어?');
    expect(screen.getByTestId('damu-actor').getAttribute('data-relationship-beat')).toBe(
      'damu-shared-ground-observation',
    );
    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'crouch-observe',
    );
    expect(document.body.textContent).toContain('낮게 눌린 풀과 흐트러진 흙');
  });

  it('keeps the same handaxe through the first-five social and ground-observation sequence', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachDamuStop();

    expect(screen.getByTestId('held-tool')).toBeTruthy();

    await user.click(screen.getByRole('button', { name: '다무 곁에 몸을 낮춘다' }));

    expect(screen.getByTestId('held-tool')).toBeTruthy();
    expect(document.body.textContent).not.toContain('주먹도끼를 다시 얻는다');
  });

  it('uses Nua attention as the causal seed and keeps the cave hidden until the player follows it', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachNuaNotice();

    expect(screen.queryByTestId('cave-opening')).toBeNull();
    expect(screen.getByTestId('nua-actor').getAttribute('data-relationship-beat')).toBe(
      'nua-attention-shift',
    );
    expect(document.body.textContent).toContain('누아의 발걸음이 멎는다');
    expect(document.body.textContent).not.toContain('큰 바위 아래에 어두운 공간이 드러난다');
    expect(document.body.textContent).not.toContain('동굴 발견');

    await user.click(screen.getByRole('button', { name: '누아가 보는 쪽을 살핀다' }));

    expect(screen.getByTestId('cave-opening')).toBeTruthy();
    expect(document.body.textContent).toContain('시선을 따라가자 큰 바위 아래');
  });

  it('keeps both cave judgments attached to named people before the natural-shelter concept is closed', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachCaveNotice();

    expect(screen.queryByText('동굴 / 바위 그늘')).toBeNull();

    await user.click(screen.getByRole('button', { name: '바위 아래로 가까이 가 본다' }));

    expect(screen.getByTestId('cave-opening')).toBeTruthy();
    expect(screen.getByText('동굴 / 바위 그늘')).toBeTruthy();
    expect(screen.getByTestId('curriculum-cue').getAttribute('data-anchor-ids')).toBe(
      'cave-or-rock-shelter',
    );
    expect(screen.getByTestId('nua-dialogue').textContent).toContain('누아');
    expect(screen.getByTestId('nua-dialogue').textContent).toContain('안이 꽤 넓어');
    expect(screen.getByTestId('damu-dialogue').textContent).toContain('다무');
    expect(screen.getByTestId('damu-dialogue').textContent).toContain('안쪽은 먼저 봐야 해');
    expect(document.body.textContent).not.toContain('막집');
  });

  it('recontextualizes the same morning through body and object continuity instead of a role-title announcement', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachCaveNotice();

    await user.click(screen.getByRole('button', { name: '바위 아래로 가까이 가 본다' }));
    await user.click(screen.getByRole('button', { name: '돌아갈 길을 눈에 담는다' }));

    expect(
      screen.getByRole('heading', { name: '불이 바로 앞에서 타고 있다.' }),
    ).toBeTruthy();
    expect(document.body.textContent).toContain('손이 비어 있다');
    expect(document.body.textContent).toContain('조금 전까지 가까이에 있던 돌');
    expect(document.body.textContent).toContain('해 지기 전에 와');
    expect(document.body.textContent).not.toContain('아루의 관점');
    expect(document.body.textContent).not.toContain('Camp 역할');
    expect(screen.getByTestId('departing-group')).toBeTruthy();
    expect(screen.queryByTestId('held-tool')).toBeNull();
    expect(screen.getByTestId('current-shelter')).toBeTruthy();
  });

  it('keeps fictional-name and authoring-ID mapping off Player text while exposing it to Teacher', async () => {
    const playerUser = userEvent.setup();
    const player = render(<R2EmbodiedSkeleton />);

    await playerUser.click(screen.getByRole('button', { name: '눈을 뜬다' }));
    expect(document.body.textContent).not.toContain('R=아루');
    expect(document.body.textContent).not.toContain('H1=다무');
    expect(document.body.textContent).not.toContain('H2=누아');
    expect(document.body.textContent).not.toContain('실제 선사 언어 복원');
    player.unmount();

    render(<R2EmbodiedSkeleton surfaceMode="teacher" />);
    expect(screen.getByTestId('character-name-mapping').textContent).toContain('R=아루');
    expect(screen.getByTestId('character-name-mapping').textContent).toContain('H1=다무');
    expect(screen.getByTestId('character-name-mapping').textContent).toContain('H2=누아');
    expect(document.body.textContent).toContain('실제 선사 언어 복원이 아니라');
    expect(screen.getByTestId('reconstruction-note').textContent).toContain(
      '실제 구석기 이름 복원이 아님',
    );
  });

  it('records first-five Shared Day Events and relationship evidence only in Debug metadata', async () => {
    render(<R2EmbodiedSkeleton surfaceMode="debug" />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));

    let debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('morning-community-already-active');
    expect(debugText).toContain('aru-name-heard-in-context');
    expect(debugText).toContain('"R":"아루"');

    await user.click(screen.getByRole('button', { name: '아루 쪽을 본다' }));
    await user.click(screen.getByRole('button', { name: '손을 내민다' }));
    await user.click(screen.getByRole('button', { name: '돌을 쥔 채 일어난다' }));
    await user.click(screen.getByRole('button', { name: '일어나 따라간다' }));
    await user.click(screen.getByRole('button', { name: '걷기 시작한다' }));
    await user.click(screen.getByRole('button', { name: '다무 곁에 몸을 낮춘다' }));
    await user.click(screen.getByRole('button', { name: '다시 일어나 걷는다' }));

    debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('aru-handaxe-handoff');
    expect(debugText).toContain('aru-return-line');
    expect(debugText).toContain('departed-from-fire-together');
    expect(debugText).toContain('player-damu-shared-ground-observation');
    expect(debugText).toContain('nua-attention-shift-seed');
    expect(debugText).toContain('r-tool-handoff-shared');
    expect(debugText).toContain('h1-shared-ground-observation');
    expect(debugText).toContain('embodied-observation-performed');
  });
});
