import type { ComponentType } from 'react';

export type RoleId = 'hunt' | 'gather' | 'camp';

export const ROLE_LABELS: Readonly<Record<RoleId, string>> = {
  hunt: '사냥',
  gather: '채집',
  camp: '머무름',
};

export interface SharedDayContext {
  experienceId: string;
  communityId: string;
  dayId: 'day-1';
  sharedMorningSeen: boolean;
}

export interface SharedSignal {
  id: string;
  sourceRole: RoleId;
  tags: readonly string[];
}

export interface RoleCompletion<TResultDetail = unknown> {
  roleId: RoleId;
  completed: true;
  sharedSignals: readonly SharedSignal[];
  detail: TResultDetail;
}

export interface RoleFeatureProps {
  dayContext: Readonly<SharedDayContext>;
  onComplete: (result: RoleCompletion) => void;
}

export interface RoleModule {
  id: RoleId;
  label: string;
  Component: ComponentType<RoleFeatureProps>;
}

export type RoleRegistry = Readonly<Record<RoleId, RoleModule>>;
