import { useReducer, useRef } from 'react';
import type { ReactNode } from 'react';
import type { RoleFeatureProps } from '../../experience/contracts/role';
import { ActionButton } from '../../ui/ActionButton/ActionButton';
import { ScreenRegion } from '../../ui/ScreenRegion/ScreenRegion';
import { buildHuntCompletion } from './buildHuntCompletion';
import {
  HUNT_APPROACH_COPY,
  HUNT_ATTEMPT_OUTCOME_COPY,
  HUNT_CLUE_COPY,
  HUNT_DANGER_CUE_COPY,
  HUNT_DANGER_RESPONSE_COPY,
  HUNT_FINAL_OUTCOME_COPY,
  HUNT_RETURN_LANDMARK_COPY,
  HUNT_SEARCH_SPOTS,
  HUNT_TRACKING_COPY,
} from './huntContent';
import { createInitialHuntState, huntReducer } from './huntReducer';
import './hunt.css';

const DAY_MOMENT_LABELS = {
  morning: '아침',
  'late-morning': '오전이 흐르는 중',
  midday: '한낮 무렵',
  afternoon: '오후',
  dusk: '해질녘',
  evening: '저녁',
} as const;

export function HuntFeature({ dayContext, onComplete }: RoleFeatureProps) {
  const [state, dispatch] = useReducer(
    huntReducer,
    undefined,
    createInitialHuntState,
  );
  const completionSent = useRef(false);

  const frame = (content: ReactNode) => (
    <div className="hunt-feature">
      <div className="hunt-stage-meta" aria-label="사냥 관점 진행 정보">
        <span>같은 공동체의 하루 · 사냥 관점</span>
        <span>{DAY_MOMENT_LABELS[state.dayMoment]}</span>
      </div>
      {!dayContext.sharedMorningSeen ? (
        <p className="hunt-warning" role="status">
          이 역할은 공통 아침 이후 진입하는 것을 전제로 합니다.
        </p>
      ) : null}
      {content}
    </div>
  );

  const finishHunt = () => {
    if (completionSent.current) {
      return;
    }

    const completion = buildHuntCompletion(state);

    if (!completion) {
      return;
    }

    completionSent.current = true;
    onComplete(completion);
  };

  if (state.stage === 'departure') {
    return frame(
      <ScreenRegion
        title="사냥 · 출발"
        description={
          <p>
            오늘 공동체의 여러 일 가운데 우리는 사냥하는 사람들과 함께 나갑니다.
            사냥만이 하루의 전부는 아닙니다.
          </p>
        }
      >
        <blockquote className="hunt-quote">“해가 지기 전에 돌아와.”</blockquote>
        <p>
          거처의 불과 사람들을 뒤로하고 밖으로 나갑니다. 아직 사냥감은 보이지
          않습니다.
        </p>
        <ActionButton onClick={() => dispatch({ type: 'LEAVE_CAMP' })}>
          사람들과 함께 출발하기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'clue-search') {
    const enoughClues = state.foundClues.length >= 2;

    return frame(
      <ScreenRegion
        title="사냥 · 흔적 탐색"
        description={
          <p>
            사냥감은 바로 나타나지 않습니다. 주변을 직접 살피며 지나간 가능성을
            보여주는 흔적을 찾아봅니다.
          </p>
        }
      >
        <div className="hunt-observation-grid" aria-label="주변 살펴보기">
          {HUNT_SEARCH_SPOTS.map((spot) => {
            const inspected = state.inspectedSpots.includes(spot.id);

            return (
              <button
                key={spot.id}
                type="button"
                className="hunt-observation-button"
                aria-pressed={inspected}
                onClick={() =>
                  dispatch({ type: 'INSPECT_SPOT', spotId: spot.id })
                }
              >
                <strong>{spot.label}</strong>
                <span>{inspected ? spot.reveal : spot.prompt}</span>
              </button>
            );
          })}
        </div>

        <p className="hunt-feedback" aria-live="polite">
          {enoughClues
            ? '서로 다른 흔적을 충분히 살폈습니다. 이제 어떤 단서를 더 따라볼지 판단할 수 있습니다.'
            : '정해진 시간 안에 많이 찾는 시험이 아닙니다. 눈에 들어오는 곳을 차분히 살펴보세요.'}
        </p>

        <ActionButton
          disabled={!enoughClues}
          onClick={() => dispatch({ type: 'CONTINUE_FROM_SEARCH' })}
        >
          찾은 단서를 함께 살펴보기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'clue-choice') {
    return frame(
      <ScreenRegion
        title="사냥 · 단서 판단"
        description={
          <p>
            한 방향으로 이어진 정답 길은 없습니다. 직접 확인한 흔적 가운데 무엇을
            더 믿고 살필지 정합니다.
          </p>
        }
      >
        <div
          className="hunt-choice-list"
          role="group"
          aria-label="따라갈 단서 선택"
        >
          {state.foundClues.map((clueId) => {
            const clue = HUNT_CLUE_COPY[clueId];
            const selected = state.trailChoice === clueId;

            return (
              <ActionButton
                key={clueId}
                className={`action-button--secondary hunt-choice-button${
                  selected ? ' hunt-choice-button--selected' : ''
                }`}
                aria-pressed={selected}
                onClick={() => dispatch({ type: 'CHOOSE_TRAIL', clueId })}
              >
                {clue.label}
              </ActionButton>
            );
          })}
        </div>

        {state.trailChoice ? (
          <p className="hunt-feedback" role="status">
            {HUNT_CLUE_COPY[state.trailChoice].reflection}
          </p>
        ) : (
          <p className="hunt-feedback">
            어느 선택도 정답이나 오답으로 즉시 끝나지 않습니다.
          </p>
        )}

        <ActionButton
          disabled={!state.trailChoice}
          onClick={() => dispatch({ type: 'FOLLOW_SELECTED_TRAIL' })}
        >
          이 단서를 따라가 보기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'discovery') {
    return frame(
      <ScreenRegion
        title="사냥 · 발견"
        description={
          <p>
            한참 흔적을 따라온 뒤 동행자들의 움직임이 조심스러워집니다. 멀리
            움직이는 사냥감이 보입니다.
          </p>
        }
      >
        <p className="hunt-emphasis">드디어 찾았다.</p>
        <p>
          하지만 발견했다고 바로 잡은 것은 아닙니다. 너무 빨리 움직이면 상황이
          달라질 수 있습니다.
        </p>
        <ActionButton onClick={() => dispatch({ type: 'OBSERVE_DISCOVERY' })}>
          먼저 조용히 상황 살피기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'approach-choice') {
    return frame(
      <ScreenRegion
        title="사냥 · 접근 판단"
        description={
          <p>
            기회와 시간, 아직 알 수 없는 결과를 함께 생각합니다. 교사가 정해 둔
            하나의 정답을 고르는 장면이 아닙니다.
          </p>
        }
      >
        <div
          className="hunt-choice-list"
          role="group"
          aria-label="접근 방법 선택"
        >
          {(
            Object.keys(HUNT_APPROACH_COPY) as Array<
              keyof typeof HUNT_APPROACH_COPY
            >
          ).map((choice) => {
            const option = HUNT_APPROACH_COPY[choice];
            const selected = state.approachChoice === choice;

            return (
              <ActionButton
                key={choice}
                className={`action-button--secondary hunt-choice-button${
                  selected ? ' hunt-choice-button--selected' : ''
                }`}
                aria-pressed={selected}
                onClick={() => dispatch({ type: 'CHOOSE_APPROACH', choice })}
              >
                {option.label}
              </ActionButton>
            );
          })}
        </div>

        {state.approachChoice ? (
          <p className="hunt-feedback" role="status">
            {HUNT_APPROACH_COPY[state.approachChoice].consequence}
          </p>
        ) : null}

        <ActionButton
          disabled={!state.approachChoice}
          onClick={() => dispatch({ type: 'CONTINUE_TO_ATTEMPT' })}
        >
          이 판단으로 움직이기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'hunt-attempt') {
    const approach = state.approachChoice
      ? HUNT_APPROACH_COPY[state.approachChoice]
      : null;

    return frame(
      <ScreenRegion
        title="사냥 · 사냥 시도"
        description={
          <p>
            사냥감의 움직임에 집중합니다. 이번 조작을 잘했다고 자동으로 성공하는
            실력 시험은 아닙니다.
          </p>
        }
      >
        {approach ? (
          <p className="hunt-feedback">선택한 판단: {approach.label}</p>
        ) : null}
        <p>
          동행자들과 움직임을 맞추고, 지금 보이는 기회에 사냥을 시도합니다.
        </p>
        <ActionButton onClick={() => dispatch({ type: 'ATTEMPT_HUNT' })}>
          기회를 보고 사냥 시도하기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'tracking-situation') {
    const attemptCopy = state.attemptOutcome
      ? HUNT_ATTEMPT_OUTCOME_COPY[state.attemptOutcome]
      : '사냥 시도 결과를 확인할 수 없습니다.';

    return frame(
      <ScreenRegion
        title="사냥 · 아직 끝나지 않았다"
        description={<p>{attemptCopy}</p>}
      >
        <p className="hunt-emphasis">“조금만 더 가면…”</p>
        <p>
          흔적은 더 멀리 이어지고 해의 위치도 달라졌습니다. 먹을 것을 얻을
          가능성과 돌아갈 시간·거리를 함께 생각해야 합니다.
        </p>
        <ActionButton
          onClick={() => dispatch({ type: 'CONTINUE_TO_TRACKING_CHOICE' })}
        >
          시간과 거리를 함께 살피기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'tracking-choice') {
    return frame(
      <ScreenRegion
        title="사냥 · 추적 판단"
        description={
          <p>
            끝까지 쫓는 것이 언제나 좋은 선택도, 돌아가는 것이 겁이 많은 선택도
            아닙니다. 서로 다른 이유와 부담이 있습니다.
          </p>
        }
      >
        <div
          className="hunt-choice-list"
          role="group"
          aria-label="추적 여부 선택"
        >
          {(
            Object.keys(HUNT_TRACKING_COPY) as Array<
              keyof typeof HUNT_TRACKING_COPY
            >
          ).map((choice) => {
            const option = HUNT_TRACKING_COPY[choice];
            const selected = state.trackingChoice === choice;

            return (
              <ActionButton
                key={choice}
                className={`action-button--secondary hunt-choice-button${
                  selected ? ' hunt-choice-button--selected' : ''
                }`}
                aria-pressed={selected}
                onClick={() => dispatch({ type: 'CHOOSE_TRACKING', choice })}
              >
                {option.label}
              </ActionButton>
            );
          })}
        </div>

        {state.trackingChoice ? (
          <p className="hunt-feedback" role="status">
            {HUNT_TRACKING_COPY[state.trackingChoice].consequence}
          </p>
        ) : null}

        <ActionButton
          disabled={!state.trackingChoice}
          onClick={() => dispatch({ type: 'CONTINUE_TO_DANGER' })}
        >
          이 판단으로 움직이기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'danger-cue') {
    const cue = state.dangerCue ? HUNT_DANGER_CUE_COPY[state.dangerCue] : null;

    return frame(
      <ScreenRegion
        title="사냥 · 낯선 신호"
        description={
          <p>
            사냥감을 찾던 시선이 주변의 위험을 살피는 쪽으로 바뀝니다. 사람은
            자연에서 항상 쫓는 쪽만은 아닙니다.
          </p>
        }
      >
        {cue ? (
          <div className="hunt-result-card" role="status">
            <strong>{cue.label}</strong>
            <p>{cue.detail}</p>
          </div>
        ) : null}
        <ActionButton
          onClick={() => dispatch({ type: 'OBSERVE_DANGER_CUE' })}
        >
          동행자들과 멈춰 주변 살피기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'danger-choice') {
    return frame(
      <ScreenRegion
        title="사냥 · 자연의 위험"
        description={
          <p>
            위험을 처치하는 전투가 아닙니다. 주변을 살피고 서로 떨어지지 않으며
            위험과 거리를 두는 판단을 합니다.
          </p>
        }
      >
        <div
          className="hunt-choice-list"
          role="group"
          aria-label="위험 대응 선택"
        >
          {(
            Object.keys(HUNT_DANGER_RESPONSE_COPY) as Array<
              keyof typeof HUNT_DANGER_RESPONSE_COPY
            >
          ).map((response) => {
            const option = HUNT_DANGER_RESPONSE_COPY[response];
            const selected = state.dangerResponse === response;

            return (
              <ActionButton
                key={response}
                className={`action-button--secondary hunt-choice-button${
                  selected ? ' hunt-choice-button--selected' : ''
                }`}
                aria-pressed={selected}
                onClick={() =>
                  dispatch({ type: 'CHOOSE_DANGER_RESPONSE', response })
                }
              >
                {option.label}
              </ActionButton>
            );
          })}
        </div>

        {state.dangerResponse ? (
          <p className="hunt-feedback" role="status">
            {HUNT_DANGER_RESPONSE_COPY[state.dangerResponse].reflection}
          </p>
        ) : null}

        <ActionButton
          disabled={!state.dangerResponse}
          onClick={() => dispatch({ type: 'LEAVE_DANGER' })}
        >
          위험과 거리를 두며 움직이기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'danger-resolved') {
    const response = state.dangerResponse
      ? HUNT_DANGER_RESPONSE_COPY[state.dangerResponse]
      : null;

    return frame(
      <ScreenRegion
        title="사냥 · 위험에서 벗어난다"
        description={
          <p>
            누가 더 강한지 겨루는 일이 아니었습니다. 사람들과 판단을 맞추며 낯선
            신호에서 거리를 벌렸습니다.
          </p>
        }
      >
        {response ? <p className="hunt-feedback">{response.reflection}</p> : null}
        <p>
          위험에서 벗어나고 나니 사냥감의 흔적과 우리가 걸어온 시간이 다시 눈에
          들어옵니다. 이제 오늘의 결과를 받아들여야 합니다.
        </p>
        <ActionButton onClick={() => dispatch({ type: 'CONTINUE_TO_RESULT' })}>
          오늘 사냥 결과를 받아들이기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'hunt-result') {
    const outcome = state.finalOutcome
      ? HUNT_FINAL_OUTCOME_COPY[state.finalOutcome]
      : null;

    return frame(
      <ScreenRegion
        title="사냥 · 오늘의 결과"
        description={
          <p>
            어떤 날은 먹을 것을 얻고, 어떤 날은 빈손으로 돌아갈 수 있습니다.
            어느 쪽이든 오늘의 하루는 이어집니다.
          </p>
        }
      >
        {outcome ? (
          <div className="hunt-result-card" role="status">
            <strong>{outcome.title}</strong>
            <p>{outcome.detail}</p>
          </div>
        ) : null}
        <ActionButton onClick={() => dispatch({ type: 'START_RETURN' })}>
          이제 사람들에게 돌아가기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'return-start') {
    const outcome = state.finalOutcome
      ? HUNT_FINAL_OUTCOME_COPY[state.finalOutcome]
      : null;

    return frame(
      <ScreenRegion
        title="사냥 · 귀환 시작"
        description={
          <p>
            목표가 바뀝니다. 이제 중요한 일은 먹을 것을 더 찾는 것이 아니라
            사람들이 있는 곳으로 돌아가는 것입니다.
          </p>
        }
      >
        {outcome ? <p className="hunt-feedback">{outcome.returnNote}</p> : null}
        <p className="hunt-emphasis">돌아간다.</p>
        <ActionButton
          onClick={() => dispatch({ type: 'CONTINUE_TO_RETURN_CHOICE' })}
        >
          돌아가는 길을 확인하기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'return-choice') {
    return frame(
      <ScreenRegion
        title="사냥 · 돌아가는 길"
        description={
          <p>
            멀리 왔다면 돌아갈 방향도 다시 확인해야 합니다. 이 판단을 큰 길찾기
            시험으로 만들지는 않습니다.
          </p>
        }
      >
        <div
          className="hunt-choice-list"
          role="group"
          aria-label="귀환 단서 선택"
        >
          {(
            Object.keys(HUNT_RETURN_LANDMARK_COPY) as Array<
              keyof typeof HUNT_RETURN_LANDMARK_COPY
            >
          ).map((landmark) => {
            const option = HUNT_RETURN_LANDMARK_COPY[landmark];
            const selected = state.returnLandmark === landmark;

            return (
              <ActionButton
                key={landmark}
                className={`action-button--secondary hunt-choice-button${
                  selected ? ' hunt-choice-button--selected' : ''
                }`}
                aria-pressed={selected}
                onClick={() =>
                  dispatch({ type: 'CHOOSE_RETURN_LANDMARK', landmark })
                }
              >
                {option.label}
              </ActionButton>
            );
          })}
        </div>

        {state.returnLandmark ? (
          <p className="hunt-feedback" role="status">
            {HUNT_RETURN_LANDMARK_COPY[state.returnLandmark].reflection}
          </p>
        ) : null}

        <ActionButton
          disabled={!state.returnLandmark}
          onClick={() => dispatch({ type: 'CONTINUE_RETURN' })}
        >
          이 단서를 기준으로 돌아가기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  if (state.stage === 'motif-recall') {
    return frame(
      <ScreenRegion
        title="사냥 · 해 질 무렵"
        description={
          <p>
            해가 거의 지고 주변이 어두워집니다. 아침에 들었던 말이 다시
            떠오릅니다.
          </p>
        }
      >
        <blockquote className="hunt-quote">“해가 지기 전에 돌아와.”</blockquote>
        <p>
          아침에는 평범한 당부였지만 지금은 우리를 기다리는 사람들이 있다는
          뜻으로 다르게 들립니다.
        </p>
        <ActionButton
          onClick={() => dispatch({ type: 'CONTINUE_AFTER_MOTIF' })}
        >
          사람들이 있는 곳을 향해 계속 걷기
        </ActionButton>
      </ScreenRegion>,
    );
  }

  const outcome = state.finalOutcome
    ? HUNT_FINAL_OUTCOME_COPY[state.finalOutcome]
    : null;

  return frame(
    <ScreenRegion
      title="사냥 · 불빛"
      description={
        <p>
          멀리 작은 불빛이 보입니다. 사냥 결과가 어떠했든 같은 공동체의
          사람들이 있는 곳으로 돌아왔습니다.
        </p>
      }
    >
      <p className="hunt-emphasis">돌아왔다.</p>
      {outcome ? (
        <p className="hunt-feedback">
          {outcome.title} 이제 이 결과는 개인의 승패가 아니라 공동체의 오늘에
          합쳐집니다.
        </p>
      ) : null}
      <p>
        우리가 밖에 있는 동안에도 다른 사람들의 하루는 이어지고 있었습니다.
      </p>
      <ActionButton onClick={finishHunt}>
        불 주변 사람들에게 합류하기
      </ActionButton>
    </ScreenRegion>,
  );
}
