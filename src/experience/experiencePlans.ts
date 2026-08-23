import type { RoleId } from './contracts/role';
import type { ExperiencePlan, ExperienceState } from './experienceTypes';

export const productionExperiencePlan: ExperiencePlan = {
  id: 'production-day-one',
  requiredRoles: ['hunt', 'gather', 'camp'],
  roleOrderPolicy: {
    kind: 'configured',
    order: ['hunt', 'gather', 'camp'],
  },
};

export const huntDevelopmentPlan: ExperiencePlan = {
  id: 'dev-hunt-only',
  requiredRoles: ['hunt'],
  roleOrderPolicy: {
    kind: 'configured',
    order: ['hunt'],
  },
};

export function getRemainingRoles(
  plan: ExperiencePlan,
  completedRoles: readonly RoleId[],
): RoleId[] {
  return plan.requiredRoles.filter((roleId) => !completedRoles.includes(roleId));
}

export function getRoleEntryCandidates(
  plan: ExperiencePlan,
  state: Pick<ExperienceState, 'completedRoles'>,
): RoleId[] {
  const remainingRoles = getRemainingRoles(plan, state.completedRoles);

  if (plan.roleOrderPolicy.kind === 'free-order') {
    return remainingRoles;
  }

  const configuredNext = plan.roleOrderPolicy.order.find((roleId) =>
    remainingRoles.includes(roleId),
  );

  return configuredNext ? [configuredNext] : remainingRoles.slice(0, 1);
}

export function areAllRequiredRolesCompleted(
  plan: ExperiencePlan,
  state: Pick<ExperienceState, 'completedRoles'>,
): boolean {
  return plan.requiredRoles.every((roleId) => state.completedRoles.includes(roleId));
}
