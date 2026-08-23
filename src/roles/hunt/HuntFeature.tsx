import { useReducer } from 'react';
import type { RoleFeatureProps } from '../../experience/contracts/role';
import { ActionButton } from '../../ui/ActionButton/ActionButton';
import { ScreenRegion } from '../../ui/ScreenRegion/ScreenRegion';
import {
  HUNT_APPROACH_COPY,
  HUNT_ATTEMPT_OUTCOME_COPY,
  HUNT_CLUE_COPY,
  HUNT_SEARCH_SPOTS,
} from './huntContent';
import { createInitialHuntState, huntReducer } from './huntReducer';
import type { HuntClueId } from './huntTypes';
import './hunt.css';

const DAY_MOMENT_LABELS = {
  morning: '아침',
  'late-morning': '오전이 흐르는 중',
  midday: '한낮 무렵',
  afternoon: '오후',
  dusk: '해질녘',
  evening: '저녁',
} as const;

export function HuntFeature({ dayContext }: RoleFeatureProps) {
  const [state, dispatch] = useReducer(
    huntReducer,
    undefined,
    createInitialHuntState,
  );

  const frame = (content: React.ReactNode) => (
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
                onClick={() => dispatch({ type: 'INSPECT_SPOT', spotId: spot.id })}
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
        <div className="hunt-choice-list" role="group" aria-label="따라갈 단서 선택">
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
        <div className="hunt-choice-list" role="group" aria-label="접근 방법 선택">
          {(Object.keys(HUNT_APPROACH_COPY) as Array<keyof typeof HUNT_APPROACH_COPY>).map(
            (choice) => {
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
            },
          )}
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

  const attemptCopy = state.attemptOutcome
    ? HUNT_ATTEMPT_OUTCOME_COPY[state.attemptOutcome]
    : '사냥 시도 결과를 확인할 수 없습니다.';

  return frame(
    <ScreenRegion
      title="사냥 시도 결과"
      description={
        <p>
          사냥을 시도했지만 오늘의 사냥 전체 결과는 아직 정해지지 않았습니다.
        </p>
      }
    >
      <div className="hunt-result-card" role="status">
        <strong>발견과 성공은 같은 일이 아니다.</strong>
        <p>{attemptCopy}</p>
      </div>
      <aside className="hunt-dev-checkpoint" aria-label="Stage 08-A 개발 경계">
        <strong>Stage 08-A 구현 완료 지점</strong>
        <p>
          여기서는 Hunt 역할을 완료 처리하지 않습니다. 다음 Stage 08-B에서 추적
          판단 → 자연 위험 → 성공/실패 → 귀환으로 이어진 뒤에만 공통
          RoleCompletion을 반환합니다.
        </p>
      </aside>
    </ScreenRegion>,
  );
}
