import type {
  RoleCompletion,
  RoleId,
  SharedDayContext,
} from '../contracts/role';

export interface CommonEveningInput {
  roleResults: Readonly<Partial<Record<RoleId, RoleCompletion>>>;
  dayContext: Readonly<SharedDayContext>;
}

export interface CommonEveningModel {
  receivedRoleIds: readonly RoleId[];
  sharedSignalIds: readonly string[];
  communityId: string;
}

export function buildCommonEveningModel(
  input: CommonEveningInput,
): CommonEveningModel {
  const receivedRoleIds = (Object.keys(input.roleResults) as RoleId[]).filter(
    (roleId) => input.roleResults[roleId]?.completed === true,
  );

  const sharedSignalIds = receivedRoleIds.flatMap(
    (roleId) =>
      input.roleResults[roleId]?.sharedSignals.map((signal) => signal.id) ?? [],
  );

  return {
    receivedRoleIds,
    sharedSignalIds,
    communityId: input.dayContext.communityId,
  };
}
