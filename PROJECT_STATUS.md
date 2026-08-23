# PROJECT_STATUS.md

## Current phase

**Stage 08-A — 사냥 Vertical Slice 전반 구현 완료.**

현재 앱은 Stage 07 공통 골격을 유지한 채 실제 Hunt 전반부를 플레이할 수 있다.

구현 범위:

```text
공통 아침
→ Hunt RoleEntry
→ 출발
→ 흔적 탐색
→ 단서 판단
→ 발견
→ 접근 판단
→ 사냥 시도
→ Stage 08-A 개발 체크포인트
```

다음 단계는 **Stage 08-B — 사냥 Vertical Slice 후반 구현**이다.

---

## Stage 07 foundation preserved

상위 구조는 계속 다음 경계를 유지한다.

```text
App
↓
Experience Orchestrator
↓
Common Experience / Role Features
↓
Shared UI
```

- Common Shell은 Hunt 내부 진행을 알지 않는다.
- Production Plan required roles는 `hunt`, `gather`, `camp` 세 역할 모두다.
- 역할 순서는 `ExperiencePlan.roleOrderPolicy`에서 설정한다.
- Common Morning은 한 번만 실행한다.
- Role Feature 완료 뒤에는 Perspective Bridge를 거친다.
- Common Evening은 점수표가 아니라 세 역할 Integration 지점이다.

---

## Stage 08-A implemented

### Hunt Feature 내부 구조

추가/변경된 핵심 파일:

- `src/roles/hunt/HuntFeature.tsx`
- `src/roles/hunt/huntTypes.ts`
- `src/roles/hunt/huntContent.ts`
- `src/roles/hunt/huntReducer.ts`
- `src/roles/hunt/hunt.css`

Hunt 진행 상태는 Common reducer가 아니라 Hunt Feature 내부 reducer가 소유한다.

현재 내부 단계:

- `departure`
- `clue-search`
- `clue-choice`
- `discovery`
- `approach-choice`
- `hunt-attempt`
- `stage-08a-checkpoint`

### 출발

- 사냥을 영웅의 모험이 아니라 공동체의 여러 일 중 하나로 제시
- 공통 모티프 `“해가 지기 전에 돌아와.”` 사용
- 거처를 떠나도 사냥감이 바로 보이지 않는 상황으로 연결

### 흔적 탐색 — 첫 직접 조작

- 학생이 주변 지점을 직접 눌러 관찰
- 땅의 자국 / 눌린 풀 / 낮은 가지 같은 prototype 단서 사용
- 단서가 없는 지점을 눌러도 `오답` 처리하지 않음
- 제한시간 없음
- 점수 없음
- 반복 실패 / GAME OVER 없음
- 최소한의 관찰이 이루어진 뒤 다음 판단으로 이동

구체적 동물 종과 최종 흔적 표현은 아직 확정하지 않았다.

### 단서 판단

- 직접 확인한 단서 가운데 더 살필 방향을 선택
- 정답/오답 선택이 아님
- 선택 뒤 결과 설명으로 불확실성을 보여줌

### 발견

- 앞선 탐색 뒤 처음 사냥감을 확인하는 감정 상승점
- 발견과 성공이 다르다는 다음 경험으로 연결

### 접근 판단

세 방향을 prototype으로 구현했다.

- 조금 더 기다리며 움직임을 살핀다.
- 조심스럽게 거리를 좁힌다.
- 지금 조건에서 사냥을 시도할 준비를 한다.

각 선택은 정답이 아니라 기회·시간·상황 변화 가능성의 trade-off다.

### 사냥 시도 — 두 번째 직접 조작

- 학생이 직접 사냥 시도를 실행
- 조작 성공 = 사냥 성공으로 만들지 않음
- 선택한 접근 방식에 따라 서로 다른 질적 상황이 나타남
- 현재 결과는 최종 Hunt 성공/실패가 아니라 **추적·후속 판단으로 이어질 상태**다.

### Stage 08-A 경계

중요:

**Stage 08-A 끝에서는 `onComplete(RoleCompletion)`을 호출하지 않는다.**

이유:

- Hunt 역할의 역사적 핵심에는 추적 판단, 자연 위험, 성공/실패, 귀환이 포함된다.
- 전반부 사냥 시도 직후 Hunt를 완료 처리하면 `잡는 것뿐 아니라 돌아오는 것도 오늘의 일`이라는 설계를 깨뜨린다.

따라서 현재 production 앱은 Hunt 전반부를 플레이한 뒤 개발 체크포인트에서 멈추는 것이 정상이다.

Stage 08-B에서 실제 귀환까지 끝난 뒤에만 Hunt RoleCompletion을 반환한다.

---

## Time model

Hunt 내부 `DayMoment`는 현재:

```text
morning → late-morning → midday
```

정도로만 사용한다.

이 값은 Hunt 안의 같은 하루 분위기를 표현하기 위한 것이며 다른 역할의 시작 시간이나 학생의 역할 플레이 순서를 변경하지 않는다.

---

## Tests

추가:

- `tests/unit/huntReducer.test.ts` — 4 tests
- `tests/unit/HuntFeature.test.tsx` — Stage 08-A 상호작용 2 tests로 확장

현재 전체 자동 테스트:

- Test files: 5
- Tests: 17

검증 범위:

- 중립적 관찰 처리
- 충분한 단서 관찰 전 다음 단계 차단
- 실제 확인한 단서만 선택 가능
- Stage 08-A 내부 진행
- 사냥 시도 뒤 체크포인트 정지
- Hunt 조기 RoleCompletion 방지
- score / HP / EXP / ranking / GAME OVER 비사용
- Stage 07 공통 reducer / persistence / Orchestrator guardrail 유지

---

## Verification

Stage 08-A 최종 CI 성공 기록:

- GitHub Actions run: `32671722477`
- Workflow: `Project CI`
- Node.js: 24.19.0
- npm: 11.17.0
- install: PASS
- typecheck: PASS
- tests: PASS — 5 files / 17 tests
- production build: PASS — Vite 8.2.2, 37 modules transformed

운영 문서, package Stage 08-A version, CI 표시명까지 반영한 커밋 기준으로 모두 검증했다.

상세: `handoff/TEST_REPORT.md`

---

## Architecture guardrails still active

- Hunt-specific event를 Common reducer에 넣지 않는다.
- Hunt / Gather / Camp끼리 직접 import하지 않는다.
- Gather / Camp를 Hunt 구조에 맞추지 않는다.
- Hunt 내부 stage를 `ExperienceState`로 올리지 않는다.
- 범용 Scene Engine을 만들지 않는다.
- 학생의 역할 플레이 순서를 역사 속 시간 진행으로 취급하지 않는다.
- score / HP / EXP / ranking을 기본 계약이나 Hunt 기본 구조에 넣지 않는다.
- 자연 위험을 전투 시스템으로 만들지 않는다.
- Common Evening을 Hunt 엔딩이나 점수표로 만들지 않는다.

---

## Current placeholders / unfinished work

- Hunt Stage 08-B: 장면 7~15 및 실제 Hunt RoleCompletion
- Hunt 성공/실패의 최종 질적 결과 계약
- Hunt 귀환 후 Perspective Bridge 연결
- Gather 실제 STORY / PLAYFLOW / 구현
- Camp 실제 STORY / PLAYFLOW / 구현
- 실제 Common Evening narrative integration
- 며칠 변화
- 이동 / 새 거처
- 최종 이미지 / 사운드

현재 Stage 08-A는 CSS / 텍스트 prototype으로 검증 가능하므로 별도 이미지·사운드 요청 문서를 새로 만들지 않았다.

---

## Next planned work

### Stage 08-B — 사냥 Vertical Slice 후반 구현

기획 범위:

```text
장면 7  추적 상황
→ 장면 8  더 추적할지/돌아갈지 판단
→ 장면 9  자연의 위험
→ 장면 10 통제된 변주
→ 장면 11 사냥 결과
→ 장면 12 귀환 시작
→ 장면 13 귀환 방향 판단
→ 장면 14 “해가 지기 전에 돌아와.” 회상
→ 장면 15 불빛 / 거처 복귀
→ Hunt RoleCompletion
→ Perspective Bridge
```

공통 저녁의 실제 Integration은 기존 Common Evening 경계를 유지한다. Hunt를 독립 엔딩으로 만들지 않는다.

Stage 08-B에서도 이미지 생성, 전투 시스템, 점수/HP/EXP/랭킹, 범용 Scene Engine은 만들지 않는다.
