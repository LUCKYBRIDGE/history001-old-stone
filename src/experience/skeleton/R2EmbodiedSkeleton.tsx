import { useReducer } from 'react';
import './r2EmbodiedSkeleton.css';

export type SkeletonSurfaceMode = 'player' | 'teacher' | 'debug';

type SkeletonStep =
  | 'orientation'
  | 'fire'
  | 'receive-tool'
  | 'join'
  | 'depart'
  | 'crouch-proof'
  | 'perspective-proof';

type SkeletonTreatmentPreset =
  | 'none'
  | 'fire-warmth'
  | 'standing-shift'
  | 'walking-air'
  | 'crouch-focus'
  | 'perspective-transition';

type LearningEvidenceId =
  | 'tool-used-in-context'
  | 'embodied-observation-performed';

interface SkeletonState {
  step: SkeletonStep;
  hasTool: boolean;
  reducedEffects: boolean;
  evidence: readonly LearningEvidenceId[];
}

type SkeletonEvent =
  | { type: 'BEGIN' }
  | { type: 'NOTICE_R' }
  | { type: 'RECEIVE_TOOL' }
  | { type: 'JOIN_COMPANIONS' }
  | { type: 'DEPART' }
  | { type: 'OBSERVE_GROUND' }
  | { type: 'RESET' }
  | { type: 'SET_REDUCED_EFFECTS'; value: boolean };

const initialState: SkeletonState = {
  step: 'orientation',
  hasTool: false,
  reducedEffects: false,
  evidence: [],
};

const teacherStepLabels: Readonly<Record<SkeletonStep, string>> = {
  orientation: '관점 진입',
  fire: '새벽 불 앞',
  'receive-tool': '도구 전달',
  join: '동행자 합류',
  depart: '거처 이탈',
  'crouch-proof': '몸 낮춰 관찰',
  'perspective-proof': '다른 관점 진입',
};

const stepTreatment: Readonly<Record<SkeletonStep, SkeletonTreatmentPreset>> = {
  orientation: 'none',
  fire: 'fire-warmth',
  'receive-tool': 'fire-warmth',
  join: 'standing-shift',
  depart: 'walking-air',
  'crouch-proof': 'crouch-focus',
  'perspective-proof': 'perspective-transition',
};

function addEvidence(
  evidence: readonly LearningEvidenceId[],
  id: LearningEvidenceId,
) {
  return evidence.includes(id) ? evidence : [...evidence, id];
}

function skeletonReducer(
  state: SkeletonState,
  event: SkeletonEvent,
): SkeletonState {
  switch (event.type) {
    case 'BEGIN':
      return state.step === 'orientation' ? { ...state, step: 'fire' } : state;

    case 'NOTICE_R':
      return state.step === 'fire' ? { ...state, step: 'receive-tool' } : state;

    case 'RECEIVE_TOOL':
      return state.step === 'receive-tool'
        ? {
            ...state,
            step: 'join',
            hasTool: true,
            evidence: addEvidence(state.evidence, 'tool-used-in-context'),
          }
        : state;

    case 'JOIN_COMPANIONS':
      return state.step === 'join' ? { ...state, step: 'depart' } : state;

    case 'DEPART':
      return state.step === 'depart'
        ? { ...state, step: 'crouch-proof' }
        : state;

    case 'OBSERVE_GROUND':
      return state.step === 'crouch-proof'
        ? {
            ...state,
            step: 'perspective-proof',
            evidence: addEvidence(
              state.evidence,
              'embodied-observation-performed',
            ),
          }
        : state;

    case 'SET_REDUCED_EFFECTS':
      return { ...state, reducedEffects: event.value };

    case 'RESET':
      return { ...initialState, reducedEffects: state.reducedEffects };

    default:
      return state;
  }
}

interface R2EmbodiedSkeletonProps {
  surfaceMode?: SkeletonSurfaceMode;
}

export function R2EmbodiedSkeleton({
  surfaceMode = 'player',
}: R2EmbodiedSkeletonProps) {
  const [state, dispatch] = useReducer(skeletonReducer, initialState);
  const treatment = stepTreatment[state.step];

  if (state.step === 'orientation') {
    return (
      <div className="r2-skeleton">
        <section className="r2-orientation" aria-labelledby="r2-orientation-title">
          <p className="r2-orientation__eyebrow">같은 하루, 첫 번째 관점</p>
          <h1 id="r2-orientation-title">사냥을 나선 사람의 관점</h1>
          <p>
            아직 완전히 밝지 않다. 가까운 곳에서 불 타는 소리와 사람들이
            움직이는 기척이 들린다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'BEGIN' })}
          >
            눈을 뜬다
          </button>
        </section>
        <SkeletonControls
          state={state}
          surfaceMode={surfaceMode}
          onReducedEffectsChange={(value) =>
            dispatch({ type: 'SET_REDUCED_EFFECTS', value })
          }
          onReset={() => dispatch({ type: 'RESET' })}
        />
      </div>
    );
  }

  return (
    <div
      className={`r2-skeleton ${state.reducedEffects ? 'r2-skeleton--reduced' : ''}`}
      data-surface-mode={surfaceMode}
    >
      <section
        className={`r2-world r2-world--${state.step} r2-treatment--${treatment}`}
        data-step={state.step}
        data-treatment={treatment}
        aria-label={getWorldAriaLabel(state.step)}
      >
        <div className="r2-world__sky" aria-hidden="true" />
        <div className="r2-world__ground" aria-hidden="true" />
        <Fire step={state.step} />
        <Actors step={state.step} />
        <PlayerBody step={state.step} hasTool={state.hasTool} />
        <WorldDetail step={state.step} />
      </section>

      <section className="r2-story" aria-live="polite">
        <StoryBeat state={state} dispatch={dispatch} />
      </section>

      <SkeletonControls
        state={state}
        surfaceMode={surfaceMode}
        onReducedEffectsChange={(value) =>
          dispatch({ type: 'SET_REDUCED_EFFECTS', value })
        }
        onReset={() => dispatch({ type: 'RESET' })}
      />
    </div>
  );
}

function Fire({ step }: { step: SkeletonStep }) {
  if (step === 'depart' || step === 'crouch-proof') {
    return <div className="r2-fire r2-fire--distant" aria-hidden="true" />;
  }

  if (step === 'perspective-proof') {
    return <div className="r2-fire r2-fire--near-again" aria-hidden="true" />;
  }

  return <div className="r2-fire" aria-hidden="true" />;
}

function Actors({ step }: { step: SkeletonStep }) {
  if (step === 'perspective-proof') {
    return (
      <div className="r2-actors r2-actors--departing" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className="r2-actors" aria-hidden="true">
      <div className="r2-actor r2-actor--r">
        <span className="r2-actor__head" />
        <span className="r2-actor__body" />
        {step === 'receive-tool' ? (
          <span className="r2-actor__offering-hand">
            <span className="r2-tool r2-tool--offered" />
          </span>
        ) : null}
      </div>
      <div className="r2-actor r2-actor--h1">
        <span className="r2-actor__head" />
        <span className="r2-actor__body" />
      </div>
      <div className="r2-actor r2-actor--h2">
        <span className="r2-actor__head" />
        <span className="r2-actor__body" />
      </div>
    </div>
  );
}

function PlayerBody({
  step,
  hasTool,
}: {
  step: SkeletonStep;
  hasTool: boolean;
}) {
  const pose = getBodyPose(step);

  return (
    <div
      className={`r2-body r2-body--${pose}`}
      data-testid="player-body"
      data-body-pose={pose}
      aria-hidden="true"
    >
      <span className="r2-body__left" />
      <span className="r2-body__right">
        {hasTool && step !== 'perspective-proof' ? (
          <span className="r2-tool r2-tool--held" data-testid="held-tool" />
        ) : null}
      </span>
      {step === 'fire' || step === 'receive-tool' ? (
        <>
          <span className="r2-body__knee r2-body__knee--left" />
          <span className="r2-body__knee r2-body__knee--right" />
        </>
      ) : null}
    </div>
  );
}

function WorldDetail({ step }: { step: SkeletonStep }) {
  if (step === 'crouch-proof') {
    return (
      <div className="r2-ground-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  return null;
}

function StoryBeat({
  state,
  dispatch,
}: {
  state: SkeletonState;
  dispatch: (event: SkeletonEvent) => void;
}) {
  switch (state.step) {
    case 'fire':
      return (
        <>
          <p className="r2-dialogue">불 너머의 익숙한 사람이 네 쪽을 본다.</p>
          <button
            className="r2-action r2-action--quiet"
            type="button"
            onClick={() => dispatch({ type: 'NOTICE_R' })}
          >
            그 사람을 바라본다
          </button>
        </>
      );

    case 'receive-tool':
      return (
        <>
          <p className="r2-dialogue">
            그 사람이 거친 돌도구를 네 쪽으로 내민다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'RECEIVE_TOOL' })}
          >
            돌도구를 받는다
          </button>
        </>
      );

    case 'join':
      return (
        <>
          <p className="r2-dialogue">“같이 가자.”</p>
          <p>옆의 두 사람이 밖으로 나갈 준비를 마쳤다.</p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'JOIN_COMPANIONS' })}
          >
            사람들과 함께 일어난다
          </button>
        </>
      );

    case 'depart':
      return (
        <>
          <p className="r2-dialogue">“해가 지기 전에 돌아와.”</p>
          <p>불빛과 사람들의 소리가 등 뒤에서 조금씩 멀어진다.</p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'DEPART' })}
          >
            거처를 나선다
          </button>
        </>
      );

    case 'crouch-proof':
      return (
        <>
          <p>
            앞사람이 잠시 속도를 늦춘다. 발밑의 풀 한쪽이 낮게 눌려 있다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'OBSERVE_GROUND' })}
          >
            몸을 낮춰 지면을 살핀다
          </button>
        </>
      );

    case 'perspective-proof':
      return (
        <>
          <p className="r2-orientation__eyebrow">같은 날, 다른 자리</p>
          <h1>거처에 남아 생활을 이어가는 사람의 관점</h1>
          <p>
            불은 바로 앞에서 타고 있다. 조금 전 밖으로 나간 사람들의 모습이
            멀어져 간다.
          </p>
        </>
      );

    default:
      return null;
  }
}

function SkeletonControls({
  state,
  surfaceMode,
  onReducedEffectsChange,
  onReset,
}: {
  state: SkeletonState;
  surfaceMode: SkeletonSurfaceMode;
  onReducedEffectsChange: (value: boolean) => void;
  onReset: () => void;
}) {
  if (surfaceMode === 'player') {
    return null;
  }

  if (surfaceMode === 'teacher') {
    return (
      <aside className="r2-surface-panel" aria-label="교사용 제어">
        <strong>교사용 제어</strong>
        <span>현재 구간: {teacherStepLabels[state.step]}</span>
        <label>
          <input
            type="checkbox"
            checked={state.reducedEffects}
            onChange={(event) => onReducedEffectsChange(event.target.checked)}
          />{' '}
          화면 움직임 줄이기
        </label>
        <button type="button" onClick={onReset}>
          이 체험 처음부터
        </button>
      </aside>
    );
  }

  return (
    <aside className="r2-surface-panel" aria-label="디버그 정보">
      <strong>Debug</strong>
      <code data-testid="r2-debug-state">
        {JSON.stringify({
          step: state.step,
          hasTool: state.hasTool,
          reducedEffects: state.reducedEffects,
          treatment: stepTreatment[state.step],
          evidence: state.evidence,
        })}
      </code>
      <button type="button" onClick={onReset}>
        reset
      </button>
    </aside>
  );
}

function getBodyPose(step: SkeletonStep) {
  switch (step) {
    case 'fire':
      return 'fire-rest';
    case 'receive-tool':
      return 'receive-tool';
    case 'join':
      return 'standing-with-tool';
    case 'depart':
      return 'walking-with-tool';
    case 'crouch-proof':
      return 'crouch-observe';
    case 'perspective-proof':
      return 'camp-fire-rest';
    default:
      return 'neutral';
  }
}

function getWorldAriaLabel(step: SkeletonStep) {
  switch (step) {
    case 'fire':
      return '새벽 불 앞. 가까운 사람들과 내 손과 무릎이 보이는 시야';
    case 'receive-tool':
      return '익숙한 사람이 돌도구를 내밀고 내 손이 향하는 시야';
    case 'join':
      return '돌도구를 든 채 함께 나갈 사람들 곁에서 일어나는 시야';
    case 'depart':
      return '돌도구를 들고 사람들과 거처를 떠나는 시야';
    case 'crouch-proof':
      return '몸을 낮춰 내 손과 무릎 너머의 눌린 풀을 살피는 시야';
    case 'perspective-proof':
      return '같은 날 거처 불 가까이에서 밖으로 나간 사람들을 보는 다른 사람의 시야';
    default:
      return '구석기 공동체의 시야';
  }
}
