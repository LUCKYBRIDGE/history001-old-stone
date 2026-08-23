# CURRENT_HANDOFF.md

## Previous work

**Stage 08-A — 사냥 Vertical Slice 전반 구현을 완료했다.**

Stage 07의 실행 가능한 공통 골격 위에서 Hunt Feature 내부에 실제 전반부 플레이를 추가했다.

현재 구현 범위:

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

Stage 08-B의 추적·위험·최종 결과·귀환은 아직 구현하지 않았다.

---

## Current runnable state

권장 환경:

- Node.js 24
- npm 11 이상
- `.nvmrc` 제공

실행:

```bash
npm install
npm run dev
```

검증:

```bash
npm run typecheck
npm test
npm run build
```

---

## Stage 08-A Hunt implementation

핵심 파일:

- `src/roles/hunt/HuntFeature.tsx`
- `src/roles/hunt/huntTypes.ts`
- `src/roles/hunt/huntContent.ts`
- `src/roles/hunt/huntReducer.ts`
- `src/roles/hunt/hunt.css`

테스트:

- `tests/unit/huntReducer.test.ts`
- `tests/unit/HuntFeature.test.tsx`

### Internal Hunt stages

```text
departure
→ clue-search
→ clue-choice
→ discovery
→ approach-choice
→ hunt-attempt
→ stage-08a-checkpoint
```

이 stage들은 **Hunt Feature 내부 구현 세부사항**이다.

Common reducer / ExperienceState / Gather / Camp 계약으로 승격하지 않는다.

### Direct interaction 1 — clue search

주변 prototype 지점을 직접 관찰한다.

- 흔적 가능성이 있는 지점
- 흔적이 분명하지 않은 지점

모두 관찰 자체는 정상 행동이다.

하지 않는 것:

- 제한시간
- 오답 카운트
- 점수
- GAME OVER
- 반복 정답 맞히기

### Judgment 1 — trail clue

직접 발견한 단서 중 하나를 더 살피기로 결정한다.

정답/오답이 아니다.

### Discovery

탐색 뒤 사냥감을 발견하지만 아직 성공하지 않은 상태를 만든다.

### Judgment 2 — approach

prototype 선택:

- 기다리며 살피기
- 조심스럽게 가까이 가기
- 현재 조건에서 시도 준비

각 선택에는 이유와 대가가 있으며 `좋은 선택/나쁜 선택`으로 평가하지 않는다.

### Direct interaction 2 — hunt attempt

학생이 실제 시도 버튼을 실행한다.

조작 실력만으로 성공을 보장하지 않는다.

현재 결과는 최종 성공/실패가 아니라 Stage 08-B의 추적·후속 판단으로 이어질 질적 상태다.

---

## Important completion rule

**현재 HuntFeature는 Stage 08-A 끝에서 `onComplete`를 호출하지 않는다.**

이것은 버그가 아니라 의도된 경계다.

Hunt의 핵심 의미에는 다음이 아직 남아 있다.

- 조금 더 추적할지 / 돌아갈지 판단
- 자연 위험
- 성공 또는 실패 결과 수용
- 귀환 시작
- 돌아가는 방향 판단
- `“해가 지기 전에 돌아와.”`의 의미 변화
- 불빛과 공동체로 복귀

Stage 08-B에서 이것들을 완료한 뒤에만 `RoleCompletion`을 반환한다.

따라서 현재 production app이 Hunt Stage 08-A 체크포인트에서 더 진행되지 않는 것은 정상이다.

---

## Common architecture boundaries — preserve

1. Common Shell / reducer에 Hunt-specific action을 추가하지 않는다.
2. Hunt / Gather / Camp끼리 직접 import하지 않는다.
3. Role Feature → ExperienceOrchestrator 역방향 import를 만들지 않는다.
4. Shared UI가 Hunt를 알게 하지 않는다.
5. Hunt stage / clue / approach 상태를 `ExperienceState`로 올리지 않는다.
6. Hunt reducer를 범용 Scene Engine으로 일반화하지 않는다.
7. Gather / Camp를 Hunt reducer 복사본으로 시작하지 않는다.
8. RoleCompletion 기본 계약에 score / HP / EXP / ranking을 넣지 않는다.
9. Common Evening을 Hunt 결과표로 만들지 않는다.
10. 학생의 플레이 순서와 같은 하루의 역사적 시간을 연결하지 않는다.

---

## Time model

Hunt 내부에서 `DayMoment`를 다음 정도로만 사용한다.

```text
morning → late-morning → midday
```

이것은 Hunt 내부의 같은 하루 분위기 표현이다.

Hunt의 DayMoment가 Gather/Camp 시작 시간을 결정해서는 안 된다.

---

## Tests to preserve

현재 전체 테스트는 5 files / 17 tests다.

### `tests/unit/huntReducer.test.ts`

- 중립적 관찰
- 단서 관찰 gate
- 실제 찾은 단서만 선택
- 사냥 시도 후 Stage 08-A checkpoint

### `tests/unit/HuntFeature.test.tsx`

- 출발부터 첫 사냥 시도까지 실제 사용자 interaction
- Stage 08-A에서 Hunt RoleCompletion 조기 호출 금지
- 오답/점수/HP/EXP/랭킹/GAME OVER UI 없음

### 기존 Stage 07 guardrails

- `tests/unit/experienceReducer.test.ts`
- `tests/unit/experienceStorage.test.ts`
- `tests/integration/ExperienceOrchestrator.test.tsx`

공통 아침, 역할 순서, Perspective Bridge, Common Evening Integration, persistence 경계를 계속 보호한다.

---

## Verification

Stage 08-A 최종 검증 성공:

- GitHub Actions run: `32671722477`
- Workflow: `Project CI`
- Node.js: 24.19.0
- npm: 11.17.0
- install: PASS
- typecheck: PASS
- Vitest: PASS — 5 files / 17 tests
- production build: PASS — Vite 8.2.2 / 37 modules transformed

운영 문서와 package Stage 08-A metadata, CI 표시명까지 반영한 상태를 검증했다.

상세: `handoff/TEST_REPORT.md`

---

## Assets

최종 이미지 / 사운드는 아직 없다.

Stage 08-A는 CSS / 텍스트 prototype으로 직접 조작과 진행 의미를 검증할 수 있으므로 새 `handoff/ASSET_REQUESTS.md`는 만들지 않았다.

동물 종, 구체적 자연 환경, 최종 흔적 이미지, 인물 외형은 이후 역사·시각 맥락 검토 뒤 확정해야 한다.

---

## Next task

**Stage 08-B — 사냥 Vertical Slice 후반 구현.**

`docs/04_HUNT_PLAYFLOW.md` 기준 핵심 범위:

```text
장면 7  아직 끝나지 않았다 / 추적 상황
장면 8  더 추적할까, 돌아갈까
장면 9  자연의 위험
장면 10 통제된 변주
장면 11 오늘의 사냥 결과
장면 12 귀환 시작
장면 13 돌아가는 길 판단
장면 14 아침의 말 회상
장면 15 불빛 / 거처 복귀
→ Hunt RoleCompletion
→ Perspective Bridge
```

장면 16 Common Evening은 Hunt 전용 엔딩으로 만들지 않고 기존 공통 Integration 경계를 사용한다.

---

## Read first in the next session

Stage 08-B 새 개발 세션은 다음 순서로 읽는다.

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/02_EXPERIENCE_STRUCTURE.md`
7. `docs/03_HUNT_STORY.md`
8. `docs/04_HUNT_PLAYFLOW.md`
9. `docs/05_ROLE_EXPERIENCE_MAP.md`
10. `docs/06_TECH_BLUEPRINT.md`
11. `src/experience/contracts/role.ts`
12. `src/experience/contracts/time.ts`
13. `src/experience/experienceReducer.ts`
14. `src/experience/ExperienceOrchestrator.tsx`
15. `src/roles/hunt/huntTypes.ts`
16. `src/roles/hunt/huntContent.ts`
17. `src/roles/hunt/huntReducer.ts`
18. `src/roles/hunt/HuntFeature.tsx`
19. `tests/unit/huntReducer.test.ts`
20. `tests/unit/HuntFeature.test.tsx`
21. 기존 Stage 07 guardrail tests

## Stage 08-B first implementation rule

Stage 08-A의 `stage-08a-checkpoint`를 시작점으로 이어가되, **추적/위험/귀환 로직은 Hunt reducer 내부에만 추가한다.**

Hunt 결과는 숫자 점수가 아니라 공통 저녁에 의미 있게 전달할 수 있는 질적 `RoleCompletion.detail`과 `SharedSignal`로 설계한다.

성공과 실패 모두 정상적으로 귀환하고 같은 Perspective Bridge로 연결되어야 한다.
