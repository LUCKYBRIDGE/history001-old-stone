import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { R2EmbodiedSkeleton } from '../../src/experience/skeleton/R2EmbodiedSkeleton';

async function reachToolReceived() {
  const user = userEvent.setup();

  await user.click(screen.getByRole('button', { name: '눈을 뜬다' }));
  await user.click(
    screen.getByRole('button', { name: '그 사람을 바라본다' }),
  );
  await user.click(screen.getByRole('button', { name: '돌도구를 받는다' }));

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

  it('keeps the stone tool attached to the player body after receiving it', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachToolReceived();

    expect(screen.getByTestId('held-tool')).toBeTruthy();
    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'standing-with-tool',
    );

    await user.click(
      screen.getByRole('button', { name: '사람들과 함께 일어난다' }),
    );

    expect(screen.getByTestId('held-tool')).toBeTruthy();
    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'walking-with-tool',
    );
  });

  it('changes embodied pose when the player crouches to observe the ground', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachToolReceived();

    await user.click(
      screen.getByRole('button', { name: '사람들과 함께 일어난다' }),
    );
    await user.click(screen.getByRole('button', { name: '거처를 나선다' }));

    expect(screen.getByTestId('player-body').getAttribute('data-body-pose')).toBe(
      'crouch-observe',
    );
    expect(
      screen.getByRole('button', { name: '몸을 낮춰 지면을 살핀다' }),
    ).toBeTruthy();
  });

  it('opens a clearly identified second perspective after the embodied observation proof', async () => {
    render(<R2EmbodiedSkeleton />);
    const user = await reachToolReceived();

    await user.click(
      screen.getByRole('button', { name: '사람들과 함께 일어난다' }),
    );
    await user.click(screen.getByRole('button', { name: '거처를 나선다' }));
    await user.click(
      screen.getByRole('button', { name: '몸을 낮춰 지면을 살핀다' }),
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

  it('exposes reduced-effects controls only on the teacher surface', async () => {
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

    expect(container.querySelector('.r2-skeleton--reduced')).toBeTruthy();
  });

  it('exposes internal state only in explicit debug mode and records learning evidence', async () => {
    render(<R2EmbodiedSkeleton surfaceMode="debug" />);
    const user = await reachToolReceived();

    let debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('tool-used-in-context');

    await user.click(
      screen.getByRole('button', { name: '사람들과 함께 일어난다' }),
    );
    await user.click(screen.getByRole('button', { name: '거처를 나선다' }));
    await user.click(
      screen.getByRole('button', { name: '몸을 낮춰 지면을 살핀다' }),
    );

    debugText = screen.getByTestId('r2-debug-state').textContent ?? '';
    expect(debugText).toContain('embodied-observation-performed');
    expect(debugText).toContain('perspective-proof');
  });
});
