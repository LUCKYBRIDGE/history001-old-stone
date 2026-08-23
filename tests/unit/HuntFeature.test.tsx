import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { HuntFeature } from '../../src/roles/hunt/HuntFeature';

describe('HuntFeature placeholder contract', () => {
  it('returns RoleCompletion through the common contract without score fields', async () => {
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

    await user.click(
      screen.getByRole('button', { name: '개발용: 사냥 관점 완료 반환' }),
    );

    expect(onComplete).toHaveBeenCalledTimes(1);
    const result = onComplete.mock.calls[0]?.[0];

    expect(result.roleId).toBe('hunt');
    expect(result.completed).toBe(true);
    expect(result.sharedSignals[0].sourceRole).toBe('hunt');
    expect(Object.keys(result)).not.toContain('score');
    expect(Object.keys(result)).not.toContain('hp');
    expect(Object.keys(result)).not.toContain('xp');
  });
});
