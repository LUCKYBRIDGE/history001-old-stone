import { useReducer } from 'react';
import './r2EmbodiedSkeleton.css';
import './currentShelter.css';
import './stage07RelationshipProof.css';
import './stage07ActorIdentityClarity.css';

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
  join: 'H1 합류 요청 / H2 바깥 관찰',
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
          <p className="r2-orientation__eyebrow">새벽</p>
          <h1 id="r2-orientation-title">불 냄새가 먼저 난다.</h1>
          <p>
            눈꺼풀 너머로 붉은 빛이 번진다. 손끝은 아직 따뜻하고, 가까운 곳에서
            장작이 내려앉는 소리와 낮은 발소리가 들린다.
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
        <ActorDialogueLayer step={state.step} />
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
  const h1Invite = step === 'join';
  const h2GazeCue = step === 'h2-notice' || step === 'cave-notice';
  const h2Scanning = step === 'join' || step === 'h2-notice';

  return (
    <div className="r2-actors" aria-hidden="true">
      {showR ? (
        <div
          className={`r2-actor r2-actor--r ${step === 'depart' ? 'r2-actor--farewell' : ''}`}
          data-testid="r-actor"
        >
          <span className="r2-actor__head" />
          <span className="r2-actor__body" />
          {step === 'receive-tool' ? (
            <span className="r2-actor__offering-hand">
              <span className="r2-tool r2-tool--offered" />
            </span>
          ) : null}
          {step === 'depart' ? (
            <span className="r2-actor__gesture r2-actor__gesture--farewell" />
          ) : null}
        </div>
      ) : null}
      <div
        className={`r2-actor r2-actor--h1 ${h1SharedObservation ? 'r2-actor--relationship-active' : ''} ${h1Invite ? 'r2-actor--invite' : ''}`}
        data-testid="h1-actor"
        data-relationship-beat={
          h1SharedObservation
            ? 'h1-shared-ground-observation'
            : h1Invite
              ? 'h1-invites-player'
              : undefined
        }
      >
        <span className="r2-actor__head" />
        <span className="r2-actor__body" />
        {h1Invite ? (
          <span className="r2-actor__gesture r2-actor__gesture--invite" />
        ) : null}
      </div>
      <div
        className={`r2-actor r2-actor--h2 ${h2GazeCue ? 'r2-actor--relationship-active' : ''} ${h2Scanning ? 'r2-actor--scanning' : ''}`}
        data-testid="h2-actor"
        data-relationship-beat={
          h2GazeCue
            ? 'h2-gaze-cue'
            : h2Scanning
              ? 'h2-scans-outward'
              : undefined
        }
      >
        <span className="r2-actor__head" />
        <span className="r2-actor__body" />
        {h2Scanning ? <span className="r2-actor__gaze" /> : null}
      </div>
    </div>
  );
}

function ActorDialogueLayer({ step }: { step: SkeletonStep }) {
  if (step === 'join') {
    return (
      <div className="r2-actor-dialogue-layer">
        <p
          className="r2-actor-dialogue r2-actor-dialogue--h1-join"
          data-testid="h1-dialogue"
          aria-label="바로 곁에서 목소리가 난다: 같이 가자"
        >
          “같이 가자.”
        </p>
      </div>
    );
  }

  if (step === 'depart') {
    return (
      <div className="r2-actor-dialogue-layer">
        <p
          className="r2-actor-dialogue r2-actor-dialogue--r-depart"
          data-testid="r-dialogue"
          aria-label="뒤쪽 불가에서 익숙한 목소리가 들린다: 해가 지기 전에 돌아와"
        >
          “해가 지기 전에 돌아와.”
        </p>
      </div>
    );
  }

  if (step === 'h2-notice') {
    return (
      <div className="r2-actor-dialogue-layer">
        <p
          className="r2-actor-dialogue r2-actor-dialogue--h2-notice"
          data-testid="h2-dialogue"
          aria-label="조금 앞쪽에서 짧은 목소리가 난다: 저기"
        >
          “저기.”
        </p>
      </div>
    );
  }

  if (step === 'cave-inspect') {
    return (
      <div className="r2-actor-dialogue-layer">
        <p
          className="r2-actor-dialogue r2-actor-dialogue--h2-cave"
          data-testid="h2-dialogue"
          aria-label="바위 아래 가까운 곳에서 목소리가 난다: 안이 꽤 넓어"
        >
          “안이 꽤 넓어.”
        </p>
        <p
          className="r2-actor-dialogue r2-actor-dialogue--h1-cave"
          data-testid="h1-dialogue"
          aria-label="바로 옆에서 다른 목소리가 난다: 안쪽은 먼저 봐야 해"
        >
          “안쪽은 먼저 봐야 해.”
        </p>
      </div>
    );
  }

  return null;
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
          <p className="r2-dialogue">
            눈을 뜨자 불빛이 먼저 번진다. 불 너머의 익숙한 얼굴과 눈이 마주친다.
          </p>
          <p>
            입안은 마르고 배는 비어 있다. 주변에서는 말없이 짐을 챙기는 소리가
            난다.
          </p>
          <button
            className="r2-action r2-action--quiet"
            type="button"
            onClick={() => dispatch({ type: 'NOTICE_R' })}
          >
            눈이 마주친 얼굴을 바라본다
          </button>
        </>
      );

    case 'receive-tool':
      return (
        <>
          <p className="r2-dialogue">
            눈앞의 손이 불 옆에 놓인 돌을 집어 들어 네 오른손 쪽으로 내민다.
            한쪽은 손에 잡히고 다른 쪽은 날카롭게 깨져 있다.
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
            돌을 건넨 손이 물러나고 같은 돌이 네 오른손에 남는다. 거친 무게와
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
          <p>
            일어서자 바로 곁의 발소리가 멎는다. 누군가 몸을 돌려 너를 본다.
            조금 앞쪽의 사람은 나무 사이를 바라보고 있다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'JOIN_COMPANIONS' })}
          >
            목소리 쪽으로 한 걸음 다가간다
          </button>
        </>
      );

    case 'depart':
      return (
        <>
          <p>
            뒤쪽 불가에서 익숙한 목소리가 들린다. 돌아보면 아까 돌을 내민 손이
            가볍게 들려 있다. 불과 임시 거처는 그 자리에 남아 있다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'DEPART' })}
          >
            한번 돌아보고 걷기 시작한다
          </button>
        </>
      );

    case 'crouch-proof':
      return (
        <>
          <p>
            몇 걸음 못 가 옆의 발소리가 느려진다. 곁의 사람이 쪼그려 앉는다.
            그 앞의 풀 한쪽이 낮게 눌려 있다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'OBSERVE_GROUND' })}
          >
            옆에 쪼그려 앉는다
          </button>
        </>
      );

    case 'travel':
      return (
        <>
          <p>
            둘이 다시 일어나자 셋의 발걸음이 이어진다. 불과 거처는 이제 보이지
            않는다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'CONTINUE_TRAVEL' })}
          >
            다시 걷는다
          </button>
        </>
      );

    case 'h2-notice':
      return (
        <>
          <p>
            한동안 더 걷자 앞서 가던 사람이 갑자기 멈춘다. 몸이 큰 바위 쪽으로
            돌아간다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'FOLLOW_H2_GAZE' })}
          >
            그쪽을 본다
          </button>
        </>
      );

    case 'cave-notice':
      return (
        <>
          <p>
            고개를 돌리자 큰 바위 아래에 어두운 공간이 드러난다. 생각보다 입구가
            넓어 보인다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'APPROACH_CAVE' })}
          >
            바위 아래로 가까이 가 본다
          </button>
        </>
      );

    case 'cave-inspect':
      return (
        <>
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
            돌아갈 길을 눈에 담는다
          </button>
        </>
      );

    case 'perspective-proof':
      return (
        <>
          <p className="r2-orientation__eyebrow">같은 아침</p>
          <h1>불이 바로 앞에서 타고 있다.</h1>
          <p>
            손이 비어 있다. 조금 전까지 손에 있던 돌은 이제 저 멀리, 세 사람
            가운데 한 사람의 오른손에 들려 있다. 불 냄새는 그대로인데 발소리는
            점점 멀어진다.
          </p>
          <p className="r2-dialogue">
            입 밖으로 방금 한 말이 아직 남아 있다. “해가 지기 전에 돌아와.”
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
      return '새벽 불 앞. 불 너머의 익숙한 얼굴과 주변 사람들, 내 손과 무릎, 임시 거처가 보이는 시야';
    case 'receive-tool':
      return '눈앞의 손이 돌도구를 집어 들어 내 오른손 쪽으로 내미는 시야';
    case 'tool-reveal':
      return '내 오른손에 대표적인 뗀석기인 주먹도끼를 받아 쥔 채 형태를 살피는 시야';
    case 'join':
      return '주먹도끼를 든 채 내 쪽으로 돌아서 기다리는 사람과 조금 앞에서 나무 사이를 바라보는 사람이 보이는 시야';
    case 'depart':
      return '주먹도끼를 들고 걷기 전 불가에서 아까 돌을 내민 손과 현재 임시 거처를 돌아보는 시야';
    case 'crouch-proof':
      return '곁의 사람과 몸을 낮춰 내 손과 무릎 너머의 눌린 풀을 함께 살피는 시야';
    case 'travel':
      return '지면을 함께 살핀 뒤 세 사람이 다시 걸음을 맞추는 시야';
    case 'h2-notice':
      return '한동안 이동한 뒤 앞서 가던 사람이 갑자기 멈추고 큰 바위 방향을 바라보는 시야';
    case 'cave-notice':
      return '앞서 가던 사람이 멈춘 방향을 본 뒤 큰 바위 아래 넓어 보이는 어두운 공간이 드러난 시야';
    case 'cave-inspect':
      return '주먹도끼를 든 채 함께 온 사람들과 넓은 자연 공간의 입구와 마른 바닥, 어두운 안쪽을 살피는 시야';
    case 'perspective-proof':
      return '같은 아침 불 바로 앞. 내 손은 비어 있고 조금 전 내 손을 떠난 돌도구를 든 사람과 두 사람이 멀어지는 모습을 보는 시야';
    default:
      return '구석기 공동체의 시야';
  }
}
