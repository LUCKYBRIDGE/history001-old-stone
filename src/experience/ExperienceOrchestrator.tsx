import { useMemo, useReducer } from 'react';
import { createExperienceStorage } from '../persistence/experienceStorage';
import type { ExperienceStorage } from '../persistence/experienceStorage';
import { roleRegistry as productionRoleRegistry } from '../roles/registry';
import { ActionButton } from '../ui/ActionButton/ActionButton';
import { ScreenRegion } from '../ui/ScreenRegion/ScreenRegion';
import { CommonEvening } from './common/CommonEvening/CommonEvening';
import { CommonMorning } from './common/CommonMorning/CommonMorning';
import { PerspectiveBridge } from './common/PerspectiveBridge/PerspectiveBridge';
import { RoleEntry } from './common/RoleEntry/RoleEntry';
import type {
  RoleCompletion,
  RoleId,
  RoleRegistry,
  SharedDayContext,
} from './contracts/role';
import {
  areAllRequiredRolesCompleted,
  getRoleEntryCandidates,
  productionExperiencePlan,
} from './experiencePlans';
import type { ExperiencePlan } from './experienceTypes';
import {
  createInitialExperienceState,
  experienceReducer,
} from './experienceReducer';
import type { ExperienceEvent } from './experienceReducer';

interface ExperienceOrchestratorProps {
  plan?: ExperiencePlan;
  registry?: RoleRegistry;
  storage?: ExperienceStorage;
}

export function ExperienceOrchestrator({
  plan = productionExperiencePlan,
  registry = productionRoleRegistry,
  storage = createExperienceStorage(),
}: ExperienceOrchestratorProps) {
  const [state, dispatch] = useReducer(
    experienceReducer,
    createInitialExperienceState(plan.id),
    (freshState) => storage.load(plan.id) ?? freshState,
  );

  const dayContext: SharedDayContext = useMemo(
    () => ({
      experienceId: plan.id,
      communityId: 'old-stone-community-day-1',
      sharedMorningSeen: state.commonMorningCompleted,
    }),
    [plan.id, state.commonMorningCompleted],
  );

  const checkpoint = (event: ExperienceEvent) => {
    const nextState = experienceReducer(state, event);
    dispatch(event);
    storage.save(nextState);
  };

  const resetExperience = () => {
    dispatch({ type: 'RESET_EXPERIENCE' });
    storage.clear();
  };

  const enterRole = (roleId: RoleId) => {
    dispatch({ type: 'ENTER_ROLE', roleId });
  };

  const completeRole = (result: RoleCompletion) => {
    if (state.currentRole !== result.roleId) {
      return;
    }

    checkpoint({ type: 'COMPLETE_ROLE', result });
  };

  const continueFromBridge = () => {
    if (areAllRequiredRolesCompleted(plan, state)) {
      checkpoint({ type: 'ENTER_COMMON_EVENING' });
      return;
    }

    dispatch({ type: 'CONTINUE_FROM_PERSPECTIVE_BRIDGE' });
  };

  let content;

  switch (state.phase) {
    case 'start':
      content = (
        <ScreenRegion
          title="앱 시작"
          description={
            <p>
              현재 빌드는 공통 경험 구조를 유지하면서 사냥 관점의 출발부터
              귀환까지 이어지는 Vertical Slice를 검증합니다.
            </p>
          }
        >
          <ActionButton onClick={() => dispatch({ type: 'START_EXPERIENCE' })}>
            체험 시작
          </ActionButton>
        </ScreenRegion>
      );
      break;

    case 'common-morning':
      content = (
        <CommonMorning
          onComplete={() => checkpoint({ type: 'COMPLETE_COMMON_MORNING' })}
        />
      );
      break;

    case 'role-entry': {
      const candidateRoleIds = getRoleEntryCandidates(plan, state);

      content = (
        <RoleEntry
          candidateRoleIds={candidateRoleIds}
          registry={registry}
          onSelect={enterRole}
        />
      );
      break;
    }

    case 'role-playing': {
      const currentRole = state.currentRole;

      if (!currentRole) {
        content = <p>역할 진행 상태를 확인할 수 없습니다.</p>;
        break;
      }

      const RoleComponent = registry[currentRole].Component;
      content = (
        <RoleComponent dayContext={dayContext} onComplete={completeRole} />
      );
      break;
    }

    case 'perspective-bridge': {
      const completedRoleId = state.completedRoles.at(-1);
      const hasMoreRoles = !areAllRequiredRolesCompleted(plan, state);

      content = completedRoleId ? (
        <PerspectiveBridge
          completedRoleLabel={registry[completedRoleId].label}
          hasMoreRoles={hasMoreRoles}
          onContinue={continueFromBridge}
        />
      ) : (
        <p>완료된 역할을 확인할 수 없습니다.</p>
      );
      break;
    }

    case 'common-evening':
      content = (
        <CommonEvening
          input={{
            roleResults: state.roleResults,
            dayContext,
          }}
        />
      );
      break;

    default:
      content = null;
  }

  return (
    <div className="experience-orchestrator">
      <div className="experience-toolbar" aria-label="개발용 진행 제어">
        <span>
          현재 단계: <strong>{state.phase}</strong>
        </span>
        <ActionButton
          className="action-button--secondary"
          onClick={resetExperience}
        >
          처음부터 다시
        </ActionButton>
      </div>
      {content}
    </div>
  );
}
