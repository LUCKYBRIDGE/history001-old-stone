import type { RoleId } from '../experience/contracts/role';
import type {
  ExperiencePhase,
  ExperienceState,
} from '../experience/experienceTypes';

const STORAGE_KEY = 'history001-old-stone:experience';
const SCHEMA_VERSION = 1;

interface PersistedExperience {
  version: 1;
  state: ExperienceState;
}

export interface ExperienceStorage {
  load: (planId: string) => ExperienceState | null;
  save: (state: ExperienceState) => void;
  clear: () => void;
}

const validPhases: readonly ExperiencePhase[] = [
  'start',
  'common-morning',
  'role-entry',
  'role-playing',
  'perspective-bridge',
  'common-evening',
];

const validRoles: readonly RoleId[] = ['hunt', 'gather', 'camp'];

function isRoleId(value: unknown): value is RoleId {
  return typeof value === 'string' && validRoles.includes(value as RoleId);
}

function isExperienceState(value: unknown): value is ExperienceState {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<ExperienceState>;

  return (
    typeof candidate.planId === 'string' &&
    typeof candidate.commonMorningCompleted === 'boolean' &&
    typeof candidate.phase === 'string' &&
    validPhases.includes(candidate.phase as ExperiencePhase) &&
    (candidate.currentRole === null || isRoleId(candidate.currentRole)) &&
    Array.isArray(candidate.completedRoles) &&
    candidate.completedRoles.every(isRoleId) &&
    !!candidate.roleResults &&
    typeof candidate.roleResults === 'object'
  );
}

function getBrowserStorage(): Storage | null {
  return typeof window === 'undefined' ? null : window.localStorage;
}

export function createExperienceStorage(
  storage: Storage | null = getBrowserStorage(),
): ExperienceStorage {
  return {
    load(planId) {
      if (!storage) {
        return null;
      }

      try {
        const raw = storage.getItem(STORAGE_KEY);

        if (!raw) {
          return null;
        }

        const parsed = JSON.parse(raw) as Partial<PersistedExperience>;

        if (
          parsed.version !== SCHEMA_VERSION ||
          !isExperienceState(parsed.state) ||
          parsed.state.planId !== planId
        ) {
          return null;
        }

        return parsed.state;
      } catch {
        return null;
      }
    },

    save(state) {
      if (!storage) {
        return;
      }

      const persisted: PersistedExperience = {
        version: SCHEMA_VERSION,
        state,
      };

      storage.setItem(STORAGE_KEY, JSON.stringify(persisted));
    },

    clear() {
      storage?.removeItem(STORAGE_KEY);
    },
  };
}
