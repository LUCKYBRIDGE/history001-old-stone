import type { RoleCompletion, RoleId } from './contracts/role';
import type { ExperienceState } from './experienceTypes';

export type ExperienceEvent =
  | { type: 'START_EXPERIENCE' }
  | { type: 'COMPLETE_COMMON_MORNING' }
  | { type: 'ENTER_ROLE'; roleId: RoleId }
  | { type: 'COMPLETE_ROLE'; result: RoleCompletion }
  | { type: 'CONTINUE_FROM_PERSPECTIVE_BRIDGE' }
  | { type: 'ENTER_COMMON_EVENING' }
  | { type: 'RESET_EXPERIENCE' };

export function createInitialExperienceState(planId: string): ExperienceState {
  return {
    phase: 'start',
    planId,
    commonMorningCompleted: false,
    currentRole: null,
    completedRoles: [],
    roleResults: {},
  };
}

export function experienceReducer(
  state: ExperienceState,
  event: ExperienceEvent,
): ExperienceState {
  switch (event.type) {
    case 'START_EXPERIENCE':
      return state.phase === 'start'
        ? { ...state, phase: 'common-morning' }
        : state;

    case 'COMPLETE_COMMON_MORNING':
      return state.phase === 'common-morning'
        ? {
            ...state,
            phase: 'role-entry',
            commonMorningCompleted: true,
          }
        : state;

    case 'ENTER_ROLE':
      return state.phase === 'role-entry' &&
        !state.completedRoles.includes(event.roleId)
        ? {
            ...state,
            phase: 'role-playing',
            currentRole: event.roleId,
          }
        : state;

    case 'COMPLETE_ROLE': {
      if (
        state.phase !== 'role-playing' ||
        state.currentRole !== event.result.roleId ||
        state.completedRoles.includes(event.result.roleId)
      ) {
        return state;
      }

      return {
        ...state,
        phase: 'perspective-bridge',
        currentRole: null,
        completedRoles: [...state.completedRoles, event.result.roleId],
        roleResults: {
          ...state.roleResults,
          [event.result.roleId]: event.result,
        },
      };
    }

    case 'CONTINUE_FROM_PERSPECTIVE_BRIDGE':
      return state.phase === 'perspective-bridge'
        ? { ...state, phase: 'role-entry' }
        : state;

    case 'ENTER_COMMON_EVENING':
      return state.phase === 'perspective-bridge'
        ? { ...state, phase: 'common-evening' }
        : state;

    case 'RESET_EXPERIENCE':
      return createInitialExperienceState(state.planId);

    default:
      return state;
  }
}
