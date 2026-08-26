import { useReducer } from 'react';
import './r2EmbodiedSkeleton.css';
import './currentShelter.css';
import './stage07RelationshipProof.css';

export type SkeletonSurfaceMode = 'player' | 'teacher' | 'debug';

type SkeletonStep =
  | 'orientation'
  | 'fire'
  | 'receive-tool'
  | 'tool-reveal'
  | 'join'
  | 'depart'
  | 'crouch-proof'
  | 'travel'
  | 'h2-notice'
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

type RelationshipSignalId =
  | 'r-recognized'
  | 'r-tool-handoff-shared'
  | 'r-return-motif-heard'
  | 'h1-shared-ground-observation'
  | 'h2-gaze-followed';

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
  relationshipSignals: readonly RelationshipSignalId[];
}

type SkeletonEvent =
  | { type: 'BEGIN' }
  | { type: 'NOTICE_R' }
  | { type: 'RECEIVE_TOOL' }
  | { type: 'CONTINUE_AFTER_TOOL_REVEAL' }
  | { type: 'JOIN_COMPANIONS' }
  | { type: 'DEPART' }
  | { type: 'OBSERVE_GROUND' }
  | { type: 'CONTINUE_TRAVEL' }
  | { type: 'FOLLOW_H2_GAZE' }
  | { type: 'APPROACH_CAVE' }
  | { type: 'CONTINUE_AFTER_CAVE_INSPECTION' }
  | { type: 'RESET' }
  | { type: 'SET_REDUCED_EFFECTS'; value: boolean };

const initialState: SkeletonState = {
  step: 'orientation',
  hasTool: false,
  reducedEffects: false,
  evidence: [],
  relationshipSignals: [],
};

const teacherStepLabels: Readonly<Record<SkeletonStep, string>> = {
  orientation: '관점 진입',
  fire: '새벽 불 앞 / R 첫 인식',
  'receive-tool': 'R 도구 전달',
  'tool-reveal': '뗀석기 → 주먹도끼 명명',
  join: '동행자 합류',
  depart: 'R 귀환 모티프 / 현재 거처 이탈',
  'crouch-proof': 'H1과 함께 지면 관찰',
  travel: '동행 이동 연속성',
  'h2-notice': 'H2 시선 선행',
  'cave-notice': '시선을 따라 자연 거처 후보 발견',
  'cave-inspect': '동굴·바위 그늘 살핌',
  'perspective-proof': 'R 쪽 자리에서 같은 아침 재해석',
};

const stepTreatment: Readonly<Record<SkeletonStep, SkeletonTreatmentPreset>> = {
  orientation: 'none',
  fire: 'fire-warmth',
  'receive-tool': 'fire-warmth',
  'tool-reveal': 'tool-focus',
  join: 'standing-shift',
  depart: 'walking-air',
  'crouch-proof': 'crouch-focus',
  travel: 'walking-air',
  'h2-notice': 'standing-shift',
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

function addRelationshipSignals(
  signals: readonly RelationshipSignalId[],
  ...ids: readonly RelationshipSignalId[]
) {
  return ids.reduce<readonly RelationshipSignalId[]>(
    (nextSignals, id) =>
      nextSignals.includes(id) ? nextSignals : [...nextSignals, id],
    signals,
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
      return state.step === 'fire'
        ? {
            ...state,
            step: 'receive-tool',
            relationshipSignals: addRelationshipSignals(
              state.relationshipSignals,
              'r-recognized',
            ),
          }
        : state;

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
            relationshipSignals: addRelationshipSignals(
              state.relationshipSignals,
              'r-tool-handoff-shared',
            ),
          }
        : state;

    case 'CONTINUE_AFTER_TOOL_REVEAL':
      return state.step === 'tool-reveal' ? { ...state, step: 'join' } : state;

    case 'JOIN_COMPANIONS':
      return state.step === 'join' ? { ...state, step: 'depart' } : state;

    case 'DEPART':
      return state.step === 'depart'
        ? {
            ...state,
            step: 'crouch-proof',
            relationshipSignals: addRelationshipSignals(
              state.relationshipSignals,
              'r-return-motif-heard',
            ),
          }
        : state;

    case 'OBSERVE_GROUND':
      return state.step === 'crouch-proof'
        ? {
            ...state,
            step: 'travel',
            evidence: addEvidence(
              state.evidence,
              'embodied-observation-performed',
            ),
            relationshipSignals: addRelationshipSignals(
              state.relationshipSignals,
              'h1-shared-ground-observation',
            ),
          }
        : state;

    case 'CONTINUE_TRAVEL':
      return state.step === 'travel' ? { ...state, step: 'h2-notice' } : state;

    case 'FOLLOW_H2_GAZE':
      return state.step === 'h2-notice'
        ? {
            ...state,
            step: 'cave-notice',
            relationshipSignals: addRelationshipSignals(
              state.relationshipSignals,
              'h2-gaze-followed',
            ),
          }
        : state;

    case 'APPROACH_CAVE':
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
            하루를 준비하는 기척이 들린다.
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
      className={`r2-current-shelter ${distant ? 'r2-current-shelter--distant' : ''}`}
      data-testid="current-shelter"
      aria-hidden="true"
    >
      <span className="r2-current-shelter__cover" />
      <span className="r2-current-shelter__pole r2-current-shelter__pole--left" />
      <span className="r2-current-shelter__pole r2-current-shelter__pole--right" />
      <span className="r2-current-shelter__crossbar" />
      <span className="r2-current-shelter__opening" />
    </div>
  );
}

function Fire({ step }: { step: SkeletonStep }) {
  if (step === 'depart') {
    return <div className="r2-fire r2-fire--distant" aria-hidden="true" />;
  }

  if (
    step === 'crouch-proof' ||
    step === 'travel' ||
    step === 'h2-notice' ||
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
      <div
        className="r2-actors r2-actors--departing"
        data-testid="departing-group"
        aria-hidden="true"
      >
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
  const h1SharedObservation = step === 'crouch-proof' || step === 'travel';
  const h2GazeCue = step === 'h2-notice' || step === 'cave-notice';

  return (
    <div className="r2-actors" aria-hidden="true">
      {showR ? (
        <div className="r2-actor r2-actor--r" data-testid="r-actor">
          <span className="r2-actor__head" />
          <span className="r2-actor__body" />
          {step === 'receive-tool' ? (
            <span className="r2-actor__offering-hand">
              <span className="r2-tool r2-tool--offered" />
            </span>
          ) : null}
        </div>
      ) : null}
      <div
        className={`r2-actor r2-actor--h1 ${h1SharedObservation ? 'r2-actor--relationship-active' : ''}`}
        data-testid="h1-actor"
        data-relationship-beat={
          h1SharedObservation ? 'h1-shared-ground-observation' : undefined
        }
      >
        <span className="r2-actor__head" />
        <span className="r2-actor__body" />
      </div>
      <div
        className={`r2-actor r2-actor--h2 ${h2GazeCue ? 'r2-actor--relationship-active' : ''}`}
        data-testid="h2-actor"
        data-relationship-beat={h2GazeCue ? 'h2-gaze-cue' : undefined}
      >
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
          <p className="r2-dialogue">불 너머의 익숙한 사람이 먼저 네 쪽을 본다.</p>
          <p>
            오늘도 먹을 것을 찾아 멀리 나가야 한다. 불 곁에 남을 사람과 함께
            나갈 두 사람이 각자 하루를 준비하고 있다.
          </p>
          <p>
            불 옆에는 사람들이 비바람을 피하려고 세워 둔 임시 거처가 생활의
            흔적과 함께 이어져 있다.
          </p>
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
            눈이 마주친 그 사람이 한쪽은 손에 잡히고 다른 쪽은 날카롭게 깨진
            돌도구를 네 오른손 쪽으로 내민다.
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
            그 사람의 손이 물러나고 같은 돌이 네 오른손에 남는다. 거친 무게와
            깨진 날이 손 안에서 분명하게 느껴진다.
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
          <p>
            한 사람은 네가 일어날 때까지 잠깐 기다린다. 다른 한 사람은 이미
            거처 바깥쪽과 먼 지형을 살피고 있다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'JOIN_COMPANIONS' })}
          >
            두 사람 곁으로 간다
          </button>
        </>
      );

    case 'depart':
      return (
        <>
          <p className="r2-dialogue">“해가 지기 전에 돌아와.”</p>
          <p>
            뒤돌아보면 방금 말한 사람과 불, 나뭇가지와 덮개로 세운 임시 거처가
            같은 자리에서 조금씩 작아진다. 네 옆에는 함께 나선 두 사람이 있다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'DEPART' })}
          >
            사람들과 거처를 나선다
          </button>
        </>
      );

    case 'crouch-proof':
      return (
        <>
          <p>
            곁에서 걷던 사람이 속도를 늦추고 네가 따라오기를 기다린다. 그 사람이
            몸을 낮춘 자리 앞, 풀 한쪽이 낮게 눌려 있다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'OBSERVE_GROUND' })}
          >
            그 사람 곁에 몸을 낮춰 함께 살핀다
          </button>
        </>
      );

    case 'travel':
      return (
        <>
          <p>
            둘이 다시 일어선다. 앞사람은 네가 일어날 때까지 한 걸음 늦추고,
            셋은 다시 걸음을 맞춘다. 불과 거처는 이제 보이지 않는다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'CONTINUE_TRAVEL' })}
          >
            사람들과 계속 걷는다
          </button>
        </>
      );

    case 'h2-notice':
      return (
        <>
          <p>
            한동안 더 걸은 뒤, 계속 주변을 살피던 다른 사람이 갑자기 멈춘다.
            고개와 시선이 앞쪽 큰 바위 방향에 고정된다. 아직 네 시야에는 무엇을
            본 것인지 분명하지 않다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'FOLLOW_H2_GAZE' })}
          >
            그 사람이 보는 방향을 바라본다
          </button>
        </>
      );

    case 'cave-notice':
      return (
        <>
          <p>
            그 사람의 시선을 따라 고개를 돌리자 큰 바위 아래에 어두운 공간이
            드러난다. 생각보다 입구가 넓어 보인다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'APPROACH_CAVE' })}
          >
            사람들과 바위 아래 공간으로 가까이 간다
          </button>
        </>
      );

    case 'cave-inspect':
      return (
        <>
          <p className="r2-dialogue">먼저 발견한 사람이 말한다. “안이 꽤 넓어.”</p>
          <p className="r2-dialogue">곁의 다른 사람이 어두운 안쪽을 보며 말한다. “안쪽은 먼저 봐야 해.”</p>
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
          <p className="r2-orientation__eyebrow">같은 날, 아까 그 사람의 자리</p>
          <h1>아침에 도구를 건넨 사람의 관점</h1>
          <p>
            같은 Day 1의 같은 아침이다. 불은 바로 앞에서 타고 있다. 조금 전
            내가 돌도구를 건넨 사람이 그 도구를 오른손에 들고 두 동행자와 함께
            멀어져 간다.
          </p>
          <p className="r2-dialogue">
            “해가 지기 전에 돌아와.” 방금 건넨 말 뒤로 세 사람의 모습과 발소리가
            조금씩 작아진다.
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

  const reconstructionNote = getReconstructionNote(state.step);

  if (surfaceMode === 'teacher') {
    return (
      <aside className="r2-surface-panel" aria-label="교사용 제어">
        <strong>교사용 제어</strong>
        <span>현재 구간: {teacherStepLabels[state.step]}</span>
        {curriculumCue ? (
          <span>교과 연결: {curriculumCue.teacherSummary}</span>
        ) : null}
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
          relationshipSignals: state.relationshipSignals,
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

function getReconstructionNote(step: SkeletonStep): string | null {
  switch (step) {
    case 'fire':
    case 'join':
    case 'depart':
      return '역사적 재구성: 이 Day 1 공동체의 구체 인물과 거처 배치';
    case 'receive-tool':
    case 'tool-reveal':
      return '역사적 재구성: R이 이 아침에 플레이어에게 이 도구를 건네는 구체 사건';
    case 'crouch-proof':
    case 'travel':
      return '역사적 재구성: H1과 함께 이동하고 같은 흔적을 살피는 관계 사건';
    case 'h2-notice':
    case 'cave-notice':
    case 'cave-inspect':
      return '역사적 재구성: H2의 시선을 따라 이 날 자연 거처 후보를 발견하는 구체 사건';
    case 'perspective-proof':
      return '역사적 재구성: 같은 Day 1 아침을 R 쪽 자리에서 다시 보는 관계 관점 proof이며 Camp 역할 확정이 아님';
    default:
      return null;
  }
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
    case 'travel':
      return 'walking-with-tool';
    case 'h2-notice':
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
      return '눈이 마주친 익숙한 사람이 돌도구를 내밀고 내 오른손이 향하는 시야';
    case 'tool-reveal':
      return '내 오른손에 대표적인 뗀석기인 주먹도끼를 받아 쥔 채 형태를 살피는 시야';
    case 'join':
      return '주먹도끼를 든 채 기다리는 한 사람과 주변을 살피는 다른 사람 곁에서 일어나는 시야';
    case 'depart':
      return '주먹도끼를 들고 두 사람과 현재 임시 거처를 떠나며 불과 기다리는 사람을 뒤돌아보는 시야';
    case 'crouch-proof':
      return '동행자 한 사람 곁에 몸을 낮춰 내 손과 무릎 너머의 눌린 풀을 함께 살피는 시야';
    case 'travel':
      return '지면을 함께 살핀 뒤 두 동행자와 다시 걸음을 맞추는 시야';
    case 'h2-notice':
      return '한동안 이동한 뒤 주변을 살피던 동행자가 갑자기 멈추고 한 방향을 바라보는 시야';
    case 'cave-notice':
      return '동행자의 시선을 따라 본 뒤 멀리 큰 바위 아래 넓어 보이는 어두운 공간이 드러난 시야';
    case 'cave-inspect':
      return '주먹도끼를 든 채 동행자들과 넓은 자연 공간의 입구와 마른 바닥, 어두운 안쪽을 살피는 시야';
    case 'perspective-proof':
      return '같은 Day 1 아침, 도구를 건넨 사람의 자리에서 주먹도끼를 든 사람과 두 동행자가 멀어지는 모습을 보는 시야';
    default:
      return '구석기 공동체의 시야';
  }
}
