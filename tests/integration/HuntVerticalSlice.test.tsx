import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ExperienceOrchestrator } from '../../src/experience/ExperienceOrchestrator';
import { huntDevelopmentPlan } from '../../src/experience/experiencePlans';
import { createExperienceStorage } from '../../src/persistence/experienceStorage';
import { roleRegistry } from '../../src/roles/registry';

describe('Hunt Vertical Slice integration', () => {
  it('returns from the real Hunt feature into Perspective Bridge only after firelight', async () => {
    const user = userEvent.setup();

    render(
      <ExperienceOrchestrator
        plan={huntDevelopmentPlan}
        registry={roleRegistry}
        storage={createExperienceStorage(window.localStorage)}
      />,
    );

    await user.click(screen.getByRole('button', { name: '체험 시작' }));
    await user.click(
      screen.getByRole('button', { name: '공통 아침 마치기' }),
    );
    await user.click(
      screen.getByRole('button', { name: '사냥 관점 시작' }),
    );

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
      screen.getByRole('button', {
        name: '조금 더 기다리며 움직임을 살핀다',
      }),
    );
    await user.click(
      screen.getByRole('button', { name: '이 판단으로 움직이기' }),
    );
    await user.click(
      screen.getByRole('button', { name: '기회를 보고 사냥 시도하기' }),
    );

    expect(
      screen.queryByRole('heading', { name: 'Perspective Bridge' }),
    ).toBeNull();

    await user.click(
      screen.getByRole('button', { name: '시간과 거리를 함께 살피기' }),
    );
    await user.click(
      screen.getByRole('button', { name: '조금 더 흔적을 따라간다' }),
    );
    await user.click(
      screen.getByRole('button', { name: '이 판단으로 움직이기' }),
    );
    await user.click(
      screen.getByRole('button', { name: '동행자들과 멈춰 주변 살피기' }),
    );
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
    await user.click(
      screen.getByRole('button', {
        name: '사람들이 있는 곳을 향해 계속 걷기',
      }),
    );
    await user.click(
      screen.getByRole('button', { name: '불 주변 사람들에게 합류하기' }),
    );

    expect(
      screen.getByRole('heading', { name: 'Perspective Bridge' }),
    ).toBeTruthy();
    expect(
      screen.getByRole('button', { name: '공통 저녁으로 이어가기' }),
    ).toBeTruthy();

    await user.click(
      screen.getByRole('button', { name: '공통 저녁으로 이어가기' }),
    );

    expect(screen.getByRole('heading', { name: '공통 저녁' })).toBeTruthy();
    expect(screen.getByTestId('integration-status').textContent).toContain(
      '사냥',
    );
    expect(document.body.textContent).not.toContain('총점');
    expect(document.body.textContent).not.toContain('랭킹');
  });
});
