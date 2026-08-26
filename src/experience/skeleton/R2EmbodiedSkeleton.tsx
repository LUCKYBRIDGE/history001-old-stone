import { useReducer } from 'react';
import './r2EmbodiedSkeleton.css';

export type SkeletonSurfaceMode = 'player' | 'teacher' | 'debug';

type SkeletonStep =
  | 'orientation'
  | 'fire'
  | 'receive-tool'
  | 'tool-reveal'
  | 'join'
  | 'depart'
  | 'crouch-proof'
  | 'cave-notice'
  | 'cave-inspect'
  | 'perspective-proof';

type SkeletonTreatmentPreset =
  | 'none'
  | 'fire-warmth'
  | 'tool-focus'
  | 'standing-shift'
  | 'walking-air'
  | 'crouch-focus'
  | 'cave-exposure'
  | 'perspective-transition';

type LearningEvidenceId =
  | 'tool-received-in-embodied-context'
  | 'chipped-stone-term-revealed'
  | 'handaxe-term-revealed'
  | 'embodied-observation-performed'
  | 'natural-shelter-evaluated'
  | 'cave-shelter-term-revealed';

type CurriculumAnchorId =
  | 'paleolithic-chipped-stone'
  | 'handaxe'
  | 'cave-or-rock-shelter';

interface CurriculumCueData {
  anchorIds: readonly CurriculumAnchorId[];
  title: string;
  description: string;
  teacherSummary: string;
}

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
  | { type: 'CONTINUE_AFTER_TOOL_REVEAL' }
  | { type: 'JOIN_COMPANIONS' }
  | { type: 'DEPART' }
  | { type: 'OBSERVE_GROUND' }
  | { type: 'NOTICE_CAVE' }
  | { type: 'CONTINUE_AFTER_CAVE_INSPECTION' }
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
  'tool-reveal': '뗀석기 → 주먹도끼 명명',
  join: '동행자 합류',
  depart: '현재 거처 이탈',
  'crouch-proof': '몸 낮춰 관찰',
  'cave-notice': '자연 거처 후보 발견',
  'cave-inspect': '동굴·바위 그늘 살핌',
  'perspective-proof': '다른 관점 진입',
};

const stepTreatment: Readonly<Record<SkeletonStep, SkeletonTreatmentPreset>> = {
  orientation: 'none',
  fire: 'fire-warmth',
  'receive-tool': 'fire-warmth',
  'tool-reveal': 'tool-focus',
  join: 'standing-shift',
  depart: 'walking-air',
  'crouch-proof': 'crouch-focus',
  'cave-notice': 'cave-exposure',
  'cave-inspect': 'cave-exposure',
  'perspective-proof': 'perspective-transition',
};

function addEvidence(
  evidence: readonly LearningEvidenceId[],
  ...ids: readonly LearningEvidenceId[]
) {
  return ids.reduce<readonly LearningEvidenceId[]>(
    (nextEvidence, id) =>
      nextEvidence.includes(id) ? nextEvidence : [...nextEvidence, id],
    evidence,
  );
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
            step: 'tool-reveal',
            hasTool: true,
            evidence: addEvidence(
              state.evidence,
              'tool-received-in-embodied-context',
              'chipped-stone-term-revealed',
              'handaxe-term-revealed',
            ),
          }
        : state;

    case 'CONTINUE_AFTER_TOOL_REVEAL':
      return state.step === 'tool-reveal' ? { ...state, step: 'join' } : state;

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
            step: 'cave-notice',
            evidence: addEvidence(
              state.evidence,
              'embodied-observation-performed',
            ),
          }
        : state;

    case 'NOTICE_CAVE':
      return state.step === 'cave-notice'
        ? { ...state, step: 'cave-inspect' }
        : state;

    case 'CONTINUE_AFTER_CAVE_INSPECTION':
      return state.step === 'cave-inspect'
        ? {
            ...state,
            step: 'perspective-proof',
            evidence: addEvidence(
              state.evidence,
              'natural-shelter-evaluated',
              'cave-shelter-term-revealed',
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
  const curriculumCue = getCurriculumCue(state.step);

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
          curriculumCue={curriculumCue}
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
        <CurrentShelter step={state.step} />
        <Fire step={state.step} />
        <CaveOpening step={state.step} />
        <Actors step={state.step} />
        <PlayerBody step={state.step} hasTool={state.hasTool} />
        <WorldDetail step={state.step} />
      </section>

      <section className="r2-story" aria-live="polite">
        {curriculumCue ? <CurriculumCue cue={curriculumCue} /> : null}
        <StoryBeat state={state} dispatch={dispatch} />
      </section>

      <SkeletonControls
        state={state}
        surfaceMode={surfaceMode}
        curriculumCue={curriculumCue}
        onReducedEffectsChange={(value) =>
          dispatch({ type: 'SET_REDUCED_EFFECTS', value })
        }
        onReset={() => dispatch({ type: 'RESET' })}
      />
    </div>
  );
}

function CurrentShelter({ step }: { step: SkeletonStep }) {
  const visible =
    step === 'fire' ||
    step === 'receive-tool' ||
    step === 'tool-reveal' ||
    step === 'join' ||
    step === 'depart' ||
    step === 'perspective-proof';

  if (!visible) {
    return null;
  }

  const distant = step === 'depart';

  return (
    <div
      data-testid="current-shelter"
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: distant ? '4%' : '5%',
        bottom: distant ? '48%' : '31%',
        zIndex: 2,
        width: distant ? '9%' : '22%',
        height: distant ? '8%' : '19%',
        opacity: distant ? 0.45 : 0.72,
        clipPath: 'polygon(50% 0, 100% 40%, 88% 100%, 12% 100%, 0 40%)',
        background:
          'linear-gradient(145deg, rgba(82, 61, 42, 0.88), rgba(45, 35, 28, 0.96))',
      }}
    />
  );
}

function Fire({ step }: { step: SkeletonStep }) {
  if (step === 'depart') {
    return <div className="r2-fire r2-fire--distant" aria-hidden="true" />;
  }

  if (
    step === 'crouch-proof' ||
    step === 'cave-notice' ||
    step === 'cave-inspect'
  ) {
    return null;
  }

  if (step === 'perspective-proof') {
    return <div className="r2-fire r2-fire--near-again" aria-hidden="true" />;
  }

  return <div className="r2-fire" aria-hidden="true" />;
}

function CaveOpening({ step }: { step: SkeletonStep }) {
  if (step !== 'cave-notice' && step !== 'cave-inspect') {
    return null;
  }

  return (
    <div
      className={`r2-cave ${step === 'cave-inspect' ? 'r2-cave--near' : ''}`}
      data-testid="cave-opening"
      aria-hidden="true"
    >
      <span className="r2-cave__interior" />
      <span className="r2-cave__dry-ground" />
      {step === 'cave-inspect' ? <span className="r2-cave__track" /> : null}
    </div>
  );
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

  const showR =
    step === 'fire' ||
    step === 'receive-tool' ||
    step === 'tool-reveal' ||
    step === 'join' ||
    step === 'depart';

  return (
    <div className="r2-actors" aria-hidden="true">
      {showR ? (
        <div className="r2-actor r2-actor--r">
          <span className="r2-actor__head" />
          <span className="r2-actor__body" />
          {step === 'receive-tool' ? (
            <span className="r2-actor__offering-hand">
              <span className="r2-tool r2-tool--offered" />
            </span>
          ) : null}
        </div>
      ) : null}
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
      {step === 'fire' || step === 'receive-tool' || step === 'tool-reveal' ? (
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

function CurriculumCue({ cue }: { cue: CurriculumCueData }) {
  return (
    <aside
      className="r2-curriculum-cue"
      data-testid="curriculum-cue"
      data-anchor-ids={cue.anchorIds.join(',')}
      aria-label="교과 개념 연결"
    >
      <strong>{cue.title}</strong>
      <span>{cue.description}</span>
    </aside>
  );
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
          <p>불 옆에는 사람들이 비바람을 피하려고 세워 둔 임시 거처가 보인다.</p>
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
            그 사람이 한쪽은 손에 잡히고 다른 쪽은 날카롭게 깨진 돌도구를
            네 쪽으로 내민다.
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

    case 'tool-reveal':
      return (
        <>
          <p>
            거친 돌의 무게가 손에 느껴진다. 이름을 알게 된 뒤에도 이 물건은
            화면 속 설명이 아니라 네가 들고 움직이는 도구로 남아 있다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'CONTINUE_AFTER_TOOL_REVEAL' })}
          >
            주먹도끼를 쥐고 일어난다
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
            사람들과 함께 나갈 준비를 한다
          </button>
        </>
      );

    case 'depart':
      return (
        <>
          <p className="r2-dialogue">“해가 지기 전에 돌아와.”</p>
          <p>
            불빛과 사람들의 소리, 나뭇가지와 덮개로 세운 임시 거처가 등
            뒤에서 조금씩 멀어진다.
          </p>
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

    case 'cave-notice':
      return (
        <>
          <p>
            한동안 더 걸은 뒤 다시 일어서자, 앞쪽 큰 바위 아래에 검은 틈이
            보인다. 생각보다 입구가 넓다. H2도 그쪽을 보고 멈춘다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'NOTICE_CAVE' })}
          >
            바위 아래 공간으로 가까이 간다
          </button>
        </>
      );

    case 'cave-inspect':
      return (
        <>
          <p className="r2-dialogue">“안이 꽤 넓어.”</p>
          <p>
            바닥 한쪽은 비교적 말라 있고 머리 위로 두꺼운 바위가 이어진다.
            비나 바람을 피하기에는 괜찮아 보인다.
          </p>
          <p>
            하지만 안쪽은 어둡다. 다른 동물이 이곳을 이용했는지, 물과
            먹을거리까지 얼마나 먼지도 아직 모른다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'CONTINUE_AFTER_CAVE_INSPECTION' })}
          >
            이 장소와 돌아가는 길을 기억해 둔다
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
            멀어져 간다. 그들이 어디에서 무엇을 보게 될지는 아직 알 수 없다.
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
  curriculumCue,
  onReducedEffectsChange,
  onReset,
}: {
  state: SkeletonState;
  surfaceMode: SkeletonSurfaceMode;
  curriculumCue: CurriculumCueData | null;
  onReducedEffectsChange: (value: boolean) => void;
  onReset: () => void;
}) {
  if (surfaceMode === 'player') {
    return null;
  }

  const reconstructionNote =
    state.step === 'cave-notice' || state.step === 'cave-inspect'
      ? '역사적 재구성: 이 날 이 사람들이 이 거처 후보를 발견하는 구체 사건'
      : null;

  if (surfaceMode === 'teacher') {
    return (
      <aside className="r2-surface-panel" aria-label="교사용 제어">
        <strong>교사용 제어</strong>
        <span>현재 구간: {teacherStepLabels[state.step]}</span>
        {curriculumCue ? <span>교과 연결: {curriculumCue.teacherSummary}</span> : null}
        {reconstructionNote ? (
          <span data-testid="reconstruction-note">{reconstructionNote}</span>
        ) : null}
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
          curriculumAnchors: curriculumCue?.anchorIds ?? [],
          reconstruction: reconstructionNote,
          evidence: state.evidence,
        })}
      </code>
      <button type="button" onClick={onReset}>
        reset
      </button>
    </aside>
  );
}

function getCurriculumCue(step: SkeletonStep): CurriculumCueData | null {
  if (step === 'tool-reveal') {
    return {
      anchorIds: ['paleolithic-chipped-stone', 'handaxe'],
      title: '뗀석기',
      description:
        '돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다. 지금 손에 든 것은 그 대표적인 예인 주먹도끼다.',
      teacherSummary: '뗀석기 → 대표적인 예: 주먹도끼',
    };
  }

  if (step === 'cave-inspect') {
    return {
      anchorIds: ['cave-or-rock-shelter'],
      title: '동굴 / 바위 그늘',
      description:
        '구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.',
      teacherSummary: '동굴·바위 그늘도 생활 공간으로 이용',
    };
  }

  return null;
}

function getBodyPose(step: SkeletonStep) {
  switch (step) {
    case 'fire':
      return 'fire-rest';
    case 'receive-tool':
      return 'receive-tool';
    case 'tool-reveal':
      return 'tool-inspect';
    case 'join':
      return 'standing-with-tool';
    case 'depart':
      return 'walking-with-tool';
    case 'crouch-proof':
      return 'crouch-observe';
    case 'cave-notice':
      return 'standing-with-tool';
    case 'cave-inspect':
      return 'cave-inspect';
    case 'perspective-proof':
      return 'camp-fire-rest';
    default:
      return 'neutral';
  }
}

function getWorldAriaLabel(step: SkeletonStep) {
  switch (step) {
    case 'fire':
      return '새벽 불 앞. 가까운 사람들과 내 손과 무릎, 임시 거처가 보이는 시야';
    case 'receive-tool':
      return '익숙한 사람이 돌도구를 내밀고 내 손이 향하는 시야';
    case 'tool-reveal':
      return '내 손에 대표적인 뗀석기인 주먹도끼를 받아 쥔 채 형태를 살피는 시야';
    case 'join':
      return '주먹도끼를 든 채 함께 나갈 사람들 곁에서 일어나는 시야';
    case 'depart':
      return '주먹도끼를 들고 사람들과 현재 임시 거처를 떠나는 시야';
    case 'crouch-proof':
      return '몸을 낮춰 내 손과 무릎 너머의 눌린 풀을 살피는 시야';
    case 'cave-notice':
      return '한동안 이동한 뒤 멀리 큰 바위 아래 넓어 보이는 어두운 공간을 발견한 시야';
    case 'cave-inspect':
      return '주먹도끼를 든 채 넓은 자연 공간의 입구와 마른 바닥, 어두운 안쪽을 살피는 시야';
    case 'perspective-proof':
      return '같은 날 현재 거처의 불 가까이에서 밖으로 나간 사람들을 보는 다른 사람의 시야';
    default:
      return '구석기 공동체의 시야';
  }
}
