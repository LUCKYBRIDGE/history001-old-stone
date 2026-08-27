import { useReducer } from 'react';
import './r2EmbodiedSkeleton.css';
import './currentShelter.css';
import './stage07RelationshipProof.css';
import './stage07ActorIdentityClarity.css';
import './stage075SocialImmersion.css';

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

type SharedDayEventId =
  | 'morning-community-already-active'
  | 'aru-name-heard-in-context'
  | 'aru-handaxe-handoff'
  | 'aru-return-line'
  | 'departed-from-fire-together'
  | 'player-damu-shared-ground-observation'
  | 'nua-attention-shift-seed';

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
  sharedDayEvents: readonly SharedDayEventId[];
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

const characterCallNames = {
  R: '아루',
  H1: '다무',
  H2: '누아',
} as const;

const initialState: SkeletonState = {
  step: 'orientation',
  hasTool: false,
  reducedEffects: false,
  evidence: [],
  relationshipSignals: [],
  sharedDayEvents: [],
};

const teacherStepLabels: Readonly<Record<SkeletonStep, string>> = {
  orientation: '눈뜨기 전 / 공동체 생활 선행',
  fire: '새벽 불 앞 / 아루 이름을 생활 속에서 인식',
  'receive-tool': '아루 도구 전달',
  'tool-reveal': '뗀석기 → 주먹도끼 명명',
  join: '다무 이동 시작 / 누아 외부 주의',
  depart: '아루 귀환 모티프 / 현재 거처 이탈',
  'crouch-proof': '다무가 먼저 멈춤',
  travel: '다무와 같은 지면을 직접 관찰',
  'h2-notice': '누아 attention shift',
  'cave-notice': '누아의 방향을 따라 자연 거처 후보 발견',
  'cave-inspect': '동굴·바위 그늘 살핌',
  'perspective-proof': '같은 아침을 아루 쪽 자리에서 재해석',
};

const stepTreatment: Readonly<Record<SkeletonStep, SkeletonTreatmentPreset>> = {
  orientation: 'none',
  fire: 'fire-warmth',
  'receive-tool': 'fire-warmth',
  'tool-reveal': 'tool-focus',
  join: 'standing-shift',
  depart: 'walking-air',
  'crouch-proof': 'crouch-focus',
  travel: 'crouch-focus',
  'h2-notice': 'standing-shift',
  'cave-notice': 'cave-exposure',
  'cave-inspect': 'cave-exposure',
  'perspective-proof': 'perspective-transition',
};

function addUnique<T>(items: readonly T[], ...ids: readonly T[]) {
  return ids.reduce<readonly T[]>(
    (nextItems, id) => (nextItems.includes(id) ? nextItems : [...nextItems, id]),
    items,
  );
}

function skeletonReducer(state: SkeletonState, event: SkeletonEvent): SkeletonState {
  switch (event.type) {
    case 'BEGIN':
      return state.step === 'orientation'
        ? {
            ...state,
            step: 'fire',
            sharedDayEvents: addUnique(
              state.sharedDayEvents,
              'morning-community-already-active',
              'aru-name-heard-in-context',
            ),
          }
        : state;

    case 'NOTICE_R':
      return state.step === 'fire'
        ? {
            ...state,
            step: 'receive-tool',
            relationshipSignals: addUnique(state.relationshipSignals, 'r-recognized'),
          }
        : state;

    case 'RECEIVE_TOOL':
      return state.step === 'receive-tool'
        ? {
            ...state,
            step: 'tool-reveal',
            hasTool: true,
            evidence: addUnique(
              state.evidence,
              'tool-received-in-embodied-context',
              'chipped-stone-term-revealed',
              'handaxe-term-revealed',
            ),
            relationshipSignals: addUnique(
              state.relationshipSignals,
              'r-tool-handoff-shared',
            ),
            sharedDayEvents: addUnique(state.sharedDayEvents, 'aru-handaxe-handoff'),
          }
        : state;

    case 'CONTINUE_AFTER_TOOL_REVEAL':
      return state.step === 'tool-reveal' ? { ...state, step: 'join' } : state;

    case 'JOIN_COMPANIONS':
      return state.step === 'join'
        ? {
            ...state,
            step: 'depart',
            relationshipSignals: addUnique(
              state.relationshipSignals,
              'r-return-motif-heard',
            ),
            sharedDayEvents: addUnique(state.sharedDayEvents, 'aru-return-line'),
          }
        : state;

    case 'DEPART':
      return state.step === 'depart'
        ? {
            ...state,
            step: 'crouch-proof',
            sharedDayEvents: addUnique(
              state.sharedDayEvents,
              'departed-from-fire-together',
            ),
          }
        : state;

    case 'OBSERVE_GROUND':
      return state.step === 'crouch-proof'
        ? {
            ...state,
            step: 'travel',
            evidence: addUnique(state.evidence, 'embodied-observation-performed'),
            relationshipSignals: addUnique(
              state.relationshipSignals,
              'h1-shared-ground-observation',
            ),
            sharedDayEvents: addUnique(
              state.sharedDayEvents,
              'player-damu-shared-ground-observation',
            ),
          }
        : state;

    case 'CONTINUE_TRAVEL':
      return state.step === 'travel'
        ? {
            ...state,
            step: 'h2-notice',
            sharedDayEvents: addUnique(
              state.sharedDayEvents,
              'nua-attention-shift-seed',
            ),
          }
        : state;

    case 'FOLLOW_H2_GAZE':
      return state.step === 'h2-notice'
        ? {
            ...state,
            step: 'cave-notice',
            relationshipSignals: addUnique(
              state.relationshipSignals,
              'h2-gaze-followed',
            ),
          }
        : state;

    case 'APPROACH_CAVE':
      return state.step === 'cave-notice' ? { ...state, step: 'cave-inspect' } : state;

    case 'CONTINUE_AFTER_CAVE_INSPECTION':
      return state.step === 'cave-inspect'
        ? {
            ...state,
            step: 'perspective-proof',
            evidence: addUnique(
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
      <div
        className={`r2-skeleton ${state.reducedEffects ? 'r2-skeleton--reduced' : ''}`}
        data-surface-mode={surfaceMode}
      >
        <section className="r2-orientation" aria-labelledby="r2-orientation-title">
          <div className="r2-orientation__ember" aria-hidden="true" />
          <div className="r2-orientation__ambient" aria-label="눈을 뜨기 전 들리는 주변 생활 소리">
            <span>“그건 젖었어.”</span>
            <span>“저쪽 걸 써.”</span>
          </div>
          <p className="r2-orientation__eyebrow">새벽</p>
          <h1 id="r2-orientation-title">불 냄새가 먼저 난다.</h1>
          <p>
            눈꺼풀 너머로 붉은 빛이 번진다. 장작이 내려앉고, 가까운 곳에서 발소리와
            물건이 바닥에 닿는 소리가 이어진다.
          </p>
          <button className="r2-action" type="button" onClick={() => dispatch({ type: 'BEGIN' })}>
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
        <BackgroundCommunity step={state.step} />
        <Actors step={state.step} />
        <AmbientDialogueLayer step={state.step} />
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

function BackgroundCommunity({ step }: { step: SkeletonStep }) {
  const visible =
    step === 'fire' ||
    step === 'receive-tool' ||
    step === 'tool-reveal' ||
    step === 'join' ||
    step === 'perspective-proof';

  if (!visible) {
    return null;
  }

  return (
    <div className="r2-background-community" aria-hidden="true">
      <div className="r2-background-actor r2-background-actor--fire" data-testid="background-fire-actor">
        <span className="r2-background-actor__head" />
        <span className="r2-background-actor__body" />
        <span className="r2-background-actor__arm" />
      </div>
      <div className="r2-background-actor r2-background-actor--shelter" data-testid="background-shelter-actor">
        <span className="r2-background-actor__head" />
        <span className="r2-background-actor__body" />
        <span className="r2-background-actor__arm" />
      </div>
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

  const showAru =
    step === 'fire' ||
    step === 'receive-tool' ||
    step === 'tool-reveal' ||
    step === 'join' ||
    step === 'depart';
  const damuInvite = step === 'join';
  const damuStopped = step === 'crouch-proof';
  const damuSharedObservation = step === 'travel';
  const nuaScanning = step === 'join' || step === 'depart' || step === 'h2-notice';
  const nuaGazeCue = step === 'h2-notice' || step === 'cave-notice';

  return (
    <div className="r2-actors" aria-hidden="true">
      {showAru ? (
        <div
          className={`r2-actor r2-actor--r r2-actor--aru ${step === 'depart' ? 'r2-actor--farewell' : ''}`}
          data-testid="aru-actor"
          data-character-name="아루"
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
        className={`r2-actor r2-actor--h1 r2-actor--damu ${damuInvite ? 'r2-actor--invite r2-actor--moving' : ''} ${damuStopped ? 'r2-actor--stopped' : ''} ${damuSharedObservation ? 'r2-actor--relationship-active r2-actor--shared-observation' : ''}`}
        data-testid="damu-actor"
        data-character-name="다무"
        data-relationship-beat={
          damuSharedObservation
            ? 'damu-shared-ground-observation'
            : damuStopped
              ? 'damu-stops-before-ground-observation'
              : damuInvite
                ? 'damu-already-moving'
                : undefined
        }
      >
        <span className="r2-actor__head" />
        <span className="r2-actor__body" />
        {damuInvite ? <span className="r2-actor__gesture r2-actor__gesture--invite" /> : null}
      </div>

      <div
        className={`r2-actor r2-actor--h2 r2-actor--nua ${nuaScanning ? 'r2-actor--scanning' : ''} ${nuaGazeCue ? 'r2-actor--relationship-active r2-actor--attention-shift' : ''}`}
        data-testid="nua-actor"
        data-character-name="누아"
        data-relationship-beat={
          nuaGazeCue ? 'nua-attention-shift' : nuaScanning ? 'nua-scans-independently' : undefined
        }
      >
        <span className="r2-actor__head" />
        <span className="r2-actor__body" />
        {nuaScanning ? <span className="r2-actor__gaze" /> : null}
      </div>
    </div>
  );
}

function AmbientDialogueLayer({ step }: { step: SkeletonStep }) {
  if (step !== 'fire') {
    return null;
  }

  return (
    <div className="r2-ambient-dialogue-layer" aria-label="불가에서 이어지는 생활 대화">
      <p className="r2-ambient-dialogue r2-ambient-dialogue--name-call" data-testid="aru-name-call">
        “아루.”
      </p>
      <p className="r2-ambient-dialogue r2-ambient-dialogue--work">“여기 둬.”</p>
    </div>
  );
}

function DialogueBubble({
  speaker,
  line,
  className,
  testId,
}: {
  speaker: string;
  line: string;
  className: string;
  testId: string;
}) {
  return (
    <p className={`r2-actor-dialogue ${className}`} data-testid={testId}>
      <span className="r2-actor-dialogue__speaker">{speaker}</span>
      <span>“{line}”</span>
    </p>
  );
}

function ActorDialogueLayer({ step }: { step: SkeletonStep }) {
  if (step === 'receive-tool') {
    return (
      <div className="r2-actor-dialogue-layer">
        <DialogueBubble
          speaker="아루"
          line="손."
          className="r2-actor-dialogue--aru-handoff"
          testId="aru-dialogue"
        />
      </div>
    );
  }

  if (step === 'join') {
    return (
      <div className="r2-actor-dialogue-layer">
        <DialogueBubble
          speaker="다무"
          line="가자."
          className="r2-actor-dialogue--h1-join"
          testId="damu-dialogue"
        />
      </div>
    );
  }

  if (step === 'depart') {
    return (
      <div className="r2-actor-dialogue-layer">
        <DialogueBubble
          speaker="아루"
          line="해 지기 전에 와."
          className="r2-actor-dialogue--r-depart"
          testId="aru-dialogue"
        />
        <DialogueBubble
          speaker="다무"
          line="알았어."
          className="r2-actor-dialogue--damu-reply"
          testId="damu-dialogue"
        />
      </div>
    );
  }

  if (step === 'crouch-proof') {
    return (
      <div className="r2-actor-dialogue-layer">
        <DialogueBubble
          speaker="다무"
          line="잠깐."
          className="r2-actor-dialogue--damu-stop"
          testId="damu-dialogue"
        />
      </div>
    );
  }

  if (step === 'travel') {
    return (
      <div className="r2-actor-dialogue-layer">
        <DialogueBubble
          speaker="다무"
          line="봤어?"
          className="r2-actor-dialogue--damu-ground"
          testId="damu-dialogue"
        />
      </div>
    );
  }

  if (step === 'cave-inspect') {
    return (
      <div className="r2-actor-dialogue-layer">
        <DialogueBubble
          speaker="누아"
          line="안이 꽤 넓어."
          className="r2-actor-dialogue--h2-cave"
          testId="nua-dialogue"
        />
        <DialogueBubble
          speaker="다무"
          line="안쪽은 먼저 봐야 해."
          className="r2-actor-dialogue--h1-cave"
          testId="damu-dialogue"
        />
      </div>
    );
  }

  return null;
}

function PlayerBody({ step, hasTool }: { step: SkeletonStep; hasTool: boolean }) {
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
  if (step !== 'travel') {
    return null;
  }

  return (
    <div className="r2-ground-mark" data-testid="ground-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
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
          <p>
            불가에서는 손들이 계속 움직인다. 누군가는 불씨를 만지고, 누군가는 거처 곁의
            재료를 정리한다. 네가 눈을 떠도 모두가 멈추지는 않는다.
          </p>
          <button
            className="r2-action r2-action--quiet"
            type="button"
            onClick={() => dispatch({ type: 'NOTICE_R' })}
          >
            아루 쪽을 본다
          </button>
        </>
      );

    case 'receive-tool':
      return (
        <>
          <p>
            아루가 불 옆의 돌을 집는다. 손에 잡히는 면과 깨진 날을 잠깐 확인한 뒤 네
            오른손 쪽으로 내민다.
          </p>
          <button className="r2-action" type="button" onClick={() => dispatch({ type: 'RECEIVE_TOOL' })}>
            손을 내민다
          </button>
        </>
      );

    case 'tool-reveal':
      return (
        <>
          <p>
            아루의 손이 물러나고 같은 돌이 네 오른손에 남는다. 거친 무게와 깨진 날이
            손안에서 분명하다.
          </p>
          <button
            className="r2-action"
            type="button"
            onClick={() => dispatch({ type: 'CONTINUE_AFTER_TOOL_REVEAL' })}
          >
            돌을 쥔 채 일어난다
          </button>
        </>
      );

    case 'join':
      return (
        <>
          <p>
            다무는 이미 몇 걸음 앞서 있다. 누아는 네 쪽보다 나무 사이 바깥을 보고 있다.
          </p>
          <button className="r2-action" type="button" onClick={() => dispatch({ type: 'JOIN_COMPANIONS' })}>
            일어나 따라간다
          </button>
        </>
      );

    case 'depart':
      return (
        <>
          <p>
            다무와 누아의 걸음이 이어진다. 뒤쪽의 불과 사람들, 현재 거처는 한곳에 남아
            조금씩 작아진다.
          </p>
          <button className="r2-action" type="button" onClick={() => dispatch({ type: 'DEPART' })}>
            걷기 시작한다
          </button>
        </>
      );

    case 'crouch-proof':
      return (
        <>
          <p>
            한동안 걷던 다무의 발걸음이 갑자기 느려진다. 발소리가 멎고 다무가 먼저 몸을
            낮춘다. 아직 무엇인지 보이지 않는다.
          </p>
          <button className="r2-action" type="button" onClick={() => dispatch({ type: 'OBSERVE_GROUND' })}>
            다무 곁에 몸을 낮춘다
          </button>
        </>
      );

    case 'travel':
      return (
        <>
          <p>
            다무가 몸을 조금 비켜준다. 낮게 눌린 풀과 흐트러진 흙, 꺾인 작은 가지가 네
            앞에 들어온다.
          </p>
          <button className="r2-action" type="button" onClick={() => dispatch({ type: 'CONTINUE_TRAVEL' })}>
            다시 일어나 걷는다
          </button>
        </>
      );

    case 'h2-notice':
      return (
        <>
          <p>
            다시 한동안 걷자 누아의 발걸음이 멎는다. 말보다 먼저 고개와 몸이 한쪽으로
            돌아간다. 누아는 그 방향을 그대로 보고 있다.
          </p>
          <button className="r2-action" type="button" onClick={() => dispatch({ type: 'FOLLOW_H2_GAZE' })}>
            누아가 보는 쪽을 살핀다
          </button>
        </>
      );

    case 'cave-notice':
      return (
        <>
          <p>
            시선을 따라가자 큰 바위 아래에 어두운 공간이 드러난다. 생각보다 입구가 넓어
            보인다.
          </p>
          <button className="r2-action" type="button" onClick={() => dispatch({ type: 'APPROACH_CAVE' })}>
            바위 아래로 가까이 가 본다
          </button>
        </>
      );

    case 'cave-inspect':
      return (
        <>
          <p>
            바닥 한쪽은 비교적 말라 있고 머리 위로 두꺼운 바위가 이어진다. 비나 바람을
            피하기에는 괜찮아 보인다.
          </p>
          <p>
            하지만 안쪽은 어둡다. 다른 동물이 이곳을 이용했는지, 물과 먹을거리까지 얼마나
            먼지도 아직 모른다.
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
            손이 비어 있다. 조금 전까지 가까이에 있던 돌은 이제 멀어지는 세 사람 가운데
            한 사람의 오른손에 들려 있다. 불 냄새는 그대로인데 발소리는 점점 멀어진다.
          </p>
          <p className="r2-dialogue">입 밖으로 방금 한 말이 아직 남아 있다. “해 지기 전에 와.”</p>
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
        <span data-testid="character-name-mapping">
          가상 이름 매핑: R={characterCallNames.R}, H1={characterCallNames.H1}, H2={characterCallNames.H2}
        </span>
        <span>
          언어 규칙: Player 한국어 대사는 실제 선사 언어 복원이 아니라 의미 전달을 위한 번역 표현
        </span>
        {curriculumCue ? <span>교과 연결: {curriculumCue.teacherSummary}</span> : null}
        {reconstructionNote ? <span data-testid="reconstruction-note">{reconstructionNote}</span> : null}
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
          characterCallNames,
          curriculumAnchors: curriculumCue?.anchorIds ?? [],
          reconstruction: reconstructionNote,
          evidence: state.evidence,
          relationshipSignals: state.relationshipSignals,
          sharedDayEvents: state.sharedDayEvents,
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
      description: '구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.',
      teacherSummary: '동굴·바위 그늘도 생활 공간으로 이용',
    };
  }

  return null;
}

function getReconstructionNote(step: SkeletonStep): string | null {
  switch (step) {
    case 'orientation':
    case 'fire':
      return '역사적 재구성: 이 Day 1 공동체의 구체 인물·이름·대사·생활 배치. 아루/다무/누아는 실제 구석기 이름 복원이 아님';
    case 'receive-tool':
    case 'tool-reveal':
      return '역사적 재구성: 아루(R)가 이 아침에 플레이어에게 이 도구를 건네는 구체 사건';
    case 'join':
    case 'depart':
      return '역사적 재구성: 다무(H1)·누아(H2)와 함께 출발하고 아루(R)의 귀환 말을 듣는 구체 사건';
    case 'crouch-proof':
    case 'travel':
      return '역사적 재구성: 다무(H1)가 먼저 멈추고 플레이어가 같은 지면 흔적을 직접 살피는 관계 사건';
    case 'h2-notice':
    case 'cave-notice':
    case 'cave-inspect':
      return '역사적 재구성: 누아(H2)의 attention shift를 따라 이 날 자연 거처 후보를 발견하는 구체 사건';
    case 'perspective-proof':
      return '역사적 재구성: 같은 Day 1 아침을 아루(R) 쪽 자리에서 다시 보는 관계 관점 proof이며 Camp 역할 확정이 아님';
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
    case 'travel':
      return 'crouch-observe';
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
      return '새벽 불 앞. 주변 사람들이 자기 일을 계속하고 있고, 불가에서 아루라는 이름이 불리는 시야';
    case 'receive-tool':
      return '아루가 돌도구의 잡는 면과 깨진 날을 확인한 뒤 내 오른손 쪽으로 내미는 시야';
    case 'tool-reveal':
      return '내 오른손에 대표적인 뗀석기인 주먹도끼를 받아 쥔 채 형태를 살피는 시야';
    case 'join':
      return '다무는 이미 앞쪽으로 움직이고 누아는 바깥 환경을 바라보는 시야';
    case 'depart':
      return '다무와 누아를 따라 걷기 시작하며 뒤쪽의 아루와 불, 현재 임시 거처가 멀어지는 시야';
    case 'crouch-proof':
      return '한동안 걷던 다무가 먼저 멈추고 몸을 낮췄지만 아직 지면 정보는 직접 확인하지 않은 시야';
    case 'travel':
      return '다무 곁에 몸을 낮춘 뒤 눌린 풀과 흐트러진 흙, 작은 가지 변화를 직접 살피는 시야';
    case 'h2-notice':
      return '다시 이동한 뒤 누아가 말보다 먼저 멈추고 한쪽 방향을 바라보는 시야';
    case 'cave-notice':
      return '누아가 보던 방향을 직접 살핀 뒤 큰 바위 아래 넓어 보이는 어두운 공간이 드러난 시야';
    case 'cave-inspect':
      return '주먹도끼를 든 채 다무와 누아와 함께 자연 공간의 입구와 마른 바닥, 어두운 안쪽을 살피는 시야';
    case 'perspective-proof':
      return '같은 아침 불 바로 앞. 내 손은 비어 있고 조금 전 건넨 돌도구를 든 사람이 다른 두 사람과 멀어지는 모습을 보는 시야';
    default:
      return '구석기 공동체의 시야';
  }
}
