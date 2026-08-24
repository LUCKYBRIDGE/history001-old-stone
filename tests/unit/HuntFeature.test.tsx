import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { HuntFeature } from '../../src/roles/hunt/HuntFeature';

type User = ReturnType<typeof userEvent.setup>;

async function playFrontHalf(
  user: User,
  approachButtonName: string,
) {
  await user.click(
    screen.getByRole('button', { name: '사람들과 함께 출발하기' }),
  );
  await user.click(
    screen.getByRole('button', { name: /흙이 드러난 가장자리/ }),
  );
  await user.click(screen.getByRole('button', { name: /낮게 눌린 풀/ }));
  await user.click(
    screen.getByRole('button', { name: '찾은 단서를 함께 살펴보기' }),
  );
  await user.click(
    screen.getByRole('button', { name: '땅의 자국이 이어지는 쪽' }),
  );
  await user.click(
    screen.getByRole('button', { name: '이 단서를 따라가 보기' }),
  );
  await user.click(
    screen.getByRole('button', { name: '먼저 조용히 상황 살피기' }),
  );
  await user.click(
    screen.getByRole('button', { name: approachButtonName }),
  );
  await user.click(
    screen.getByRole('button', { name: '이 판단으로 움직이기' }),
  );
  await user.click(
    screen.getByRole('button', { name: '기회를 보고 사냥 시도하기' }),
  );
}

async function playBackHalfToFirelight(
  user: User,
  trackingButtonName: string,
) {
  await user.click(
    screen.getByRole('button', { name: '시간과 거리를 함께 살피기' }),
  );
  await user.click(
    screen.getByRole('button', { name: trackingButtonName }),
  );
  await user.click(
    screen.getByRole('button', { name: '이 판단으로 움직이기' }),
  );

  expect(
    screen.getByRole('heading', { name: '사냥 · 낯선 신호' }),
  ).toBeTruthy();
  await user.click(
    screen.getByRole('button', { name: '동행자들과 멈춰 주변 살피기' }),
  );

  expect(
    screen.getByRole('heading', { name: '사냥 · 자연의 위험' }),
  ).toBeTruthy();
  expect(
    screen.queryByRole('button', { name: /싸운다|공격한다|처치한다/ }),
  ).toBeNull();

  await user.click(
    screen.getByRole('button', { name: '사람들과 가까이 붙어 움직인다' }),
  );
  await user.click(
    screen.getByRole('button', { name: '위험과 거리를 두며 움직이기' }),
  );
  await user.click(
    screen.getByRole('button', { name: '오늘 사냥 결과를 받아들이기' }),
  );
  await user.click(
    screen.getByRole('button', { name: '이제 사람들에게 돌아가기' }),
  );
  await user.click(
    screen.getByRole('button', { name: '돌아가는 길을 확인하기' }),
  );
  await user.click(
    screen.getByRole('button', {
      name: '지나오며 본 큰 바위를 기준으로 잡는다',
    }),
  );
  await user.click(
    screen.getByRole('button', { name: '이 단서를 기준으로 돌아가기' }),
  );

  expect(
    screen.getByRole('heading', { name: '사냥 · 해 질 무렵' }),
  ).toBeTruthy();
  expect(screen.getByText('“해가 지기 전에 돌아와.”')).toBeTruthy();

  await user.click(
    screen.getByRole('button', {
      name: '사람들이 있는 곳을 향해 계속 걷기',
    }),
  );

  expect(
    screen.getByRole('heading', { name: '사냥 · 불빛' }),
  ).toBeTruthy();
  expect(screen.getByText('돌아왔다.')).toBeTruthy();
}

function renderHunt(onComplete = vi.fn()) {
  render(
    <HuntFeature
      dayContext={{
        experienceId: 'test',
        communityId: 'community',
        sharedMorningSeen: true,
      }}
      onComplete={onComplete}
    />,
  );

  return onComplete;
}

describe('HuntFeature complete vertical slice', () => {
  it('completes a food-secured path only after returning to the community', async () => {
    const user = userEvent.setup();
    const onComplete = renderHunt();

    await playFrontHalf(user, '조금 더 기다리며 움직임을 살핀다');
    expect(onComplete).not.toHaveBeenCalled();

    await playBackHalfToFirelight(user, '조금 더 흔적을 따라간다');
    expect(onComplete).not.toHaveBeenCalled();

    await user.click(
      screen.getByRole('button', { name: '불 주변 사람들에게 합류하기' }),
    );

    expect(onComplete).toHaveBeenCalledTimes(1);
    const result = onComplete.mock.calls[0]?.[0];

    expect(result.roleId).toBe('hunt');
    expect(result.completed).toBe(true);
    expect(result.detail.huntOutcome).toBe('food-secured');
    expect(result.detail.returnedToCommunity).toBe(true);
    expect(result.sharedSignals.map((signal: { id: string }) => signal.id)).toContain(
      'hunt-returned-to-community',
    );
    expect(Object.keys(result)).not.toContain('score');
    expect(Object.keys(result)).not.toContain('hp');
    expect(Object.keys(result)).not.toContain('xp');
  });

  it('completes an empty-handed path through the same return and perspective contract', async () => {
    const user = userEvent.setup();
    const onComplete = renderHunt();

    await playFrontHalf(
      user,
      '지금 조건에서 사냥을 시도할 준비를 한다',
    );
    await playBackHalfToFirelight(
      user,
      '여기서 돌아가는 쪽을 생각한다',
    );

    expect(
      screen.getByText(/오늘 가져갈 사냥감은 없다/),
    ).toBeTruthy();

    await user.click(
      screen.getByRole('button', { name: '불 주변 사람들에게 합류하기' }),
    );

    expect(onComplete).toHaveBeenCalledTimes(1);
    const result = onComplete.mock.calls[0]?.[0];

    expect(result.detail.huntOutcome).toBe('empty-handed');
    expect(result.detail.returnedToCommunity).toBe(true);
    expect(result.sharedSignals.map((signal: { id: string }) => signal.id)).toContain(
      'hunt-returned-empty-handed',
    );
  });

  it('keeps observation and danger handling free of score, HP, EXP, ranking, and combat choices', async () => {
    const user = userEvent.setup();
    renderHunt();

    await user.click(
      screen.getByRole('button', { name: '사람들과 함께 출발하기' }),
    );
    await user.click(
      screen.getByRole('button', { name: /넓은 돌 옆/ }),
    );

    expect(
      screen.getByText(
        /동물이 지나갔다고 단정할 만한 흔적은 분명하지 않다/,
      ),
    ).toBeTruthy();
    expect(document.body.textContent).not.toContain('오답');
    expect(document.body.textContent).not.toContain('점수');
    expect(document.body.textContent).not.toContain('HP');
    expect(document.body.textContent).not.toContain('EXP');
    expect(document.body.textContent).not.toContain('랭킹');
    expect(document.body.textContent).not.toContain('GAME OVER');
  });
});
