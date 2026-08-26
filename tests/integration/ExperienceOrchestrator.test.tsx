import type { ComponentType } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from '../../src/app/App';
import { AppShell } from '../../src/app/AppShell';
import { ExperienceOrchestrator } from '../../src/experience/ExperienceOrchestrator';
import type {
  RoleCompletion,
  RoleFeatureProps,
  RoleId,
  RoleRegistry,
} from '../../src/experience/contracts/role';
import type { ExperiencePlan } from '../../src/experience/experienceTypes';
import { createExperienceStorage } from '../../src/persistence/experienceStorage';

function makeCompletion(roleId: RoleId): RoleCompletion {
  return {
    roleId,
    completed: true,
    sharedSignals: [
      {
        id: `${roleId}-shared-signal`,
        sourceRole: roleId,
        tags: ['same-day', 'test'],
      },
    ],
    detail: {
      roleOwnedDetail: true,
    },
  };
}

function makeFakeRole(roleId: RoleId): ComponentType<RoleFeatureProps> {
  return function FakeRole({ dayContext, onComplete }) {
    return (
      <>
        <span data-testid={`fake-${roleId}-day`}>{dayContext.dayId}</span>
        <button type="button" onClick={() => onComplete(makeCompletion(roleId))}>
          fake {roleId} 완료
        </button>
      </>
    );
  };
}

const fakeRegistry: RoleRegistry = {
  hunt: {
    id: 'hunt',
    label: '사냥',
    Component: makeFakeRole('hunt'),
  },
  gather: {
    id: 'gather',
    label: '채집',
    Component: makeFakeRole('gather'),
  },
  camp: {
    id: 'camp',
    label: '머무름',
    Component: makeFakeRole('camp'),
  },
};

const productionLikePlan: ExperiencePlan = {
  id: 'integration-three-roles',
  requiredRoles: ['hunt', 'gather', 'camp'],
  roleOrderPolicy: {
    kind: 'configured',
    order: ['hunt', 'gather', 'camp'],
  },
};

describe('ExperienceOrchestrator', () => {
  it('renders the R2 Stage 07 player experience by default', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: '불 냄새가 먼저 난다.' }),
    ).toBeTruthy();
    expect(document.body.textContent).not.toContain('사냥을 나선 사람의 관점');
    expect(document.body.textContent).not.toContain('Stage 08-B');
    expect(document.body.textContent).not.toContain('현재 단계:');
  });

  it('runs common morning once, keeps all role play on the same day, bridges perspectives, and reaches common evening', async () => {
    const user = userEvent.setup();

    render(
      <AppShell>
        <ExperienceOrchestrator
          plan={productionLikePlan}
          registry={fakeRegistry}
          storage={createExperienceStorage(window.localStorage)}
        />
      </AppShell>,
    );

    await user.click(screen.getByRole('button', { name: '체험 시작' }));
    expect(screen.getByRole('heading', { name: '공통 아침' })).toBeTruthy();

    await user.click(
      screen.getByRole('button', { name: '공통 아침 마치기' }),
    );
    expect(
      screen.getByRole('button', { name: '사냥 관점 시작' }),
    ).toBeTruthy();

    await user.click(screen.getByRole('button', { name: '사냥 관점 시작' }));
    expect(screen.getByTestId('fake-hunt-day').textContent).toBe('day-1');
    await user.click(screen.getByRole('button', { name: 'fake hunt 완료' }));

    expect(
      screen.getByRole('heading', { name: 'Perspective Bridge' }),
    ).toBeTruthy();
    expect(screen.queryByRole('heading', { name: '공통 아침' })).toBeNull();

    await user.click(
      screen.getByRole('button', { name: '다른 관점으로 이어가기' }),
    );
    await user.click(screen.getByRole('button', { name: '채집 관점 시작' }));
    expect(screen.getByTestId('fake-gather-day').textContent).toBe('day-1');
    await user.click(screen.getByRole('button', { name: 'fake gather 완료' }));

    await user.click(
      screen.getByRole('button', { name: '다른 관점으로 이어가기' }),
    );
    await user.click(screen.getByRole('button', { name: '머무름 관점 시작' }));
    expect(screen.getByTestId('fake-camp-day').textContent).toBe('day-1');
    await user.click(screen.getByRole('button', { name: 'fake camp 완료' }));

    expect(
      screen.getByRole('button', { name: '공통 저녁으로 이어가기' }),
    ).toBeTruthy();

    await user.click(
      screen.getByRole('button', { name: '공통 저녁으로 이어가기' }),
    );

    expect(screen.getByRole('heading', { name: '공통 저녁' })).toBeTruthy();
    const integrationStatus = screen.getByTestId('integration-status');
    expect(integrationStatus.textContent).toContain('사냥');
    expect(integrationStatus.textContent).toContain('채집');
    expect(integrationStatus.textContent).toContain('머무름');
    expect(document.body.textContent).not.toContain('총점');
    expect(document.body.textContent).not.toContain('랭킹');
  });

  it('honors a reordered ExperiencePlan without changing role features or the shared day identity', async () => {
    const user = userEvent.setup();
    const reorderedPlan: ExperiencePlan = {
      id: 'integration-reordered',
      requiredRoles: ['hunt', 'gather', 'camp'],
      roleOrderPolicy: {
        kind: 'configured',
        order: ['gather', 'camp', 'hunt'],
      },
    };

    render(
      <ExperienceOrchestrator
        plan={reorderedPlan}
        registry={fakeRegistry}
        storage={createExperienceStorage(window.localStorage)}
      />,
    );

    await user.click(screen.getByRole('button', { name: '체험 시작' }));
    await user.click(
      screen.getByRole('button', { name: '공통 아침 마치기' }),
    );

    expect(
      screen.getByRole('button', { name: '채집 관점 시작' }),
    ).toBeTruthy();
    expect(screen.queryByRole('button', { name: '사냥 관점 시작' })).toBeNull();

    await user.click(screen.getByRole('button', { name: '채집 관점 시작' }));
    expect(screen.getByTestId('fake-gather-day').textContent).toBe('day-1');
    await user.click(screen.getByRole('button', { name: 'fake gather 완료' }));
    await user.click(
      screen.getByRole('button', { name: '다른 관점으로 이어가기' }),
    );

    expect(
      screen.getByRole('button', { name: '머무름 관점 시작' }),
    ).toBeTruthy();
  });
});