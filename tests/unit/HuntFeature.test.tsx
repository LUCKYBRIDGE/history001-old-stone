import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { HuntFeature } from '../../src/roles/hunt/HuntFeature';

describe('HuntFeature Stage 08-A', () => {
  it('plays departure through the first hunting attempt without completing the Hunt role early', async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();

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

    expect(screen.getByRole('heading', { name: '사냥 · 출발' })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: '사람들과 함께 출발하기' }));

    expect(screen.getByRole('heading', { name: '사냥 · 흔적 탐색' })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: /흙이 드러난 가장자리/ }));
    await user.click(screen.getByRole('button', { name: /낮게 눌린 풀/ }));
    await user.click(screen.getByRole('button', { name: '찾은 단서를 함께 살펴보기' }));

    await user.click(screen.getByRole('button', { name: '땅의 자국이 이어지는 쪽' }));
    await user.click(screen.getByRole('button', { name: '이 단서를 따라가 보기' }));

    expect(screen.getByRole('heading', { name: '사냥 · 발견' })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: '먼저 조용히 상황 살피기' }));

    await user.click(
      screen.getByRole('button', { name: '조심스럽게 거리를 좁힌다' }),
    );
    await user.click(screen.getByRole('button', { name: '이 판단으로 움직이기' }));

    expect(screen.getByRole('heading', { name: '사냥 · 사냥 시도' })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: '기회를 보고 사냥 시도하기' }));

    expect(screen.getByRole('heading', { name: '사냥 시도 결과' })).toBeTruthy();
    expect(screen.getByText('Stage 08-A 구현 완료 지점')).toBeTruthy();
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('uses neutral observation feedback and exposes no score, HP, EXP, ranking, or GAME OVER UI', async () => {
    const user = userEvent.setup();

    render(
      <HuntFeature
        dayContext={{
          experienceId: 'test',
          communityId: 'community',
          sharedMorningSeen: true,
        }}
        onComplete={vi.fn()}
      />,
    );

    await user.click(screen.getByRole('button', { name: '사람들과 함께 출발하기' }));
    await user.click(screen.getByRole('button', { name: /넓은 돌 옆/ }));

    expect(
      screen.getByText(/동물이 지나갔다고 단정할 만한 흔적은 분명하지 않다/),
    ).toBeTruthy();
    expect(document.body.textContent).not.toContain('오답');
    expect(document.body.textContent).not.toContain('점수');
    expect(document.body.textContent).not.toContain('HP');
    expect(document.body.textContent).not.toContain('EXP');
    expect(document.body.textContent).not.toContain('랭킹');
    expect(document.body.textContent).not.toContain('GAME OVER');
  });
});
