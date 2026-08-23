import type { RoleRegistry } from '../experience/contracts/role';
import { CampFeature } from './camp/CampFeature';
import { GatherFeature } from './gather/GatherFeature';
import { HuntFeature } from './hunt/HuntFeature';

export const roleRegistry: RoleRegistry = {
  hunt: {
    id: 'hunt',
    label: '사냥',
    Component: HuntFeature,
  },
  gather: {
    id: 'gather',
    label: '채집',
    Component: GatherFeature,
  },
  camp: {
    id: 'camp',
    label: '머무름',
    Component: CampFeature,
  },
};
