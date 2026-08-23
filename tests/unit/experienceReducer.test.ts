import { describe, expect, it } from 'vitest';
import type { RoleCompletion, RoleId } from '../../src/experience/contracts/role';
import {
  areAllRequiredRolesCompleted,
  getRoleEntryCandidates,
  productionExperiencePlan,
} from '../../src/experience/experiencePlans';
import {
  createInitialExperienceState,
  experienceReducer,
} from '../../src/experience/experienceReducer';
import type { ExperiencePlan } from '../../src/experience/experienceTypes';

function completion(roleId: RoleId): RoleCompletion {
  return {
    roleId,
    completed: true,
    sharedSignals: [
      {
        id: `${roleId}-signal`,
        sourceRole: roleId,
        tags: ['test'],
      },
    ],
    detail: { test: true },
  };
}

describe('experienceReducer', () => {
  it('moves from start to common morning and then to role entry', () => {
    let state = createInitialExperienceState(productionExperiencePlan.id);

    state = experienceReducer(state, { type: 'START_EXPERIENCE' });
    expect(state.phase).toBe('common-morning');

    state = experienceReducer(state, { type: 'COMPLETE_COMMON_MORNING' });
    expect(state.phase).toBe('role-entry');
    expect(state.commonMorningCompleted).toBe(true);
  });

  it('stores a qualitative role completion and reflects it in experience state', () => {
    let state = createInitialExperienceState(productionExperiencePlan.id);
    state = experienceReducer(state, { type: 'START_EXPERIENCE' });
    state = experienceReducer(state, { type: 'COMPLETE_COMMON_MORNING' });
    state = experienceReducer(state, { type: 'ENTER_ROLE', roleId: 'gather' });
    state = experienceReducer(state, {
      type: 'COMPLETE_ROLE',
      result: completion('gather'),
    });

    expect(state.phase).toBe('perspective-bridge');
    expect(state.completedRoles).toEqual(['gather']);
    expect(state.roleResults.gather?.completed).toBe(true);
    expect(state.currentRole).toBeNull();
  });

  it('does not duplicate an already completed role', () => {
    let state = createInitialExperienceState(productionExperiencePlan.id);
    state = {
      ...state,
      phase: 'role-playing',
      currentRole: 'hunt',
    };

    state = experienceReducer(state, {
      type: 'COMPLETE_ROLE',
      result: completion('hunt'),
    });

    const repeated = experienceReducer(
      {
        ...state,
        phase: 'role-playing',
        currentRole: 'hunt',
      },
      {
        type: 'COMPLETE_ROLE',
        result: completion('hunt'),
      },
    );

    expect(repeated.completedRoles).toEqual(['hunt']);
    expect(repeated.roleResults.hunt).toEqual(state.roleResults.hunt);
  });

  it('recognizes all required roles independent of completion order', () => {
    const state = {
      ...createInitialExperienceState(productionExperiencePlan.id),
      completedRoles: ['gather', 'camp', 'hunt'] as const,
    };

    expect(areAllRequiredRolesCompleted(productionExperiencePlan, state)).toBe(
      true,
    );
  });

  it('changes configured role order without changing reducer logic', () => {
    const reorderedPlan: ExperiencePlan = {
      id: 'reordered-test',
      requiredRoles: ['hunt', 'gather', 'camp'],
      roleOrderPolicy: {
        kind: 'configured',
        order: ['gather', 'camp', 'hunt'],
      },
    };

    const initial = createInitialExperienceState(reorderedPlan.id);
    expect(getRoleEntryCandidates(reorderedPlan, initial)).toEqual(['gather']);

    const afterGather = {
      ...initial,
      completedRoles: ['gather'] as const,
    };
    expect(getRoleEntryCandidates(reorderedPlan, afterGather)).toEqual(['camp']);
  });

  it('resets progress while preserving the active plan id', () => {
    const progressed = {
      ...createInitialExperienceState('custom-plan'),
      phase: 'perspective-bridge' as const,
      commonMorningCompleted: true,
      completedRoles: ['camp'] as const,
      roleResults: {
        camp: completion('camp'),
      },
    };

    expect(
      experienceReducer(progressed, { type: 'RESET_EXPERIENCE' }),
    ).toEqual(createInitialExperienceState('custom-plan'));
  });
});
