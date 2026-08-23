import type { RoleCompletion, RoleId } from './contracts/role';

export type ExperiencePhase =
  | 'start'
  | 'common-morning'
  | 'role-entry'
  | 'role-playing'
  | 'perspective-bridge'
  | 'common-evening';

export type RoleOrderPolicy =
  | { kind: 'free-order' }
  | { kind: 'configured'; order: readonly RoleId[] };

export interface ExperiencePlan {
  id: string;
  requiredRoles: readonly RoleId[];
  roleOrderPolicy: RoleOrderPolicy;
}

export interface ExperienceState {
  phase: ExperiencePhase;
  planId: string;
  commonMorningCompleted: boolean;
  currentRole: RoleId | null;
  completedRoles: readonly RoleId[];
  roleResults: Readonly<Partial<Record<RoleId, RoleCompletion>>>;
}
