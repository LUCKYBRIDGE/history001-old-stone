# CURRENT_HANDOFF.md

## Previous work

**Stage 08-B — 사냥 Vertical Slice 후반 구현을 완료했다.**

Stage 08-A 전반부에 추적·자연 위험·결과·귀환을 이어 붙여 **Hunt Vertical Slice v0.1**을 출발부터 공동체 복귀까지 완결했다.

전체 Hunt 흐름:

```text
공통 아침
→ Hunt RoleEntry
→ 출발
→ 흔적 탐색
→ 단서 판단
→ 발견
→ 접근 판단
→ 사냥 시도
→ 추적 상황
→ 추적/귀환 판단
→ 자연 위험
→ 위험에서 벗어남
→ 먹을 것 확보 또는 빈손
→ 귀환 시작
→ 돌아가는 길 판단
→ “해가 지기 전에 돌아와.” 회상
→ 불빛
→ 공동체 복귀
→ Hunt RoleCompletion
→ Perspective Bridge
```

다음 공식 단계는 **Stage 09-A — 교사 직접 플레이**다.

---

## Current runnable state

권장 환경:

- Node.js 24
- npm 11 이상
- `.nvmrc` 제공
- `package.json` version: `0.0.0-stage08b`

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

## Final verification

Stage 08-B 코드, package metadata, 운영 문서를 포함한 최종 검증 성공:

- GitHub Actions run: `32677268699`
- Workflow: `Project CI`
- OS: Ubuntu 24.04.4 LTS
- Node.js: 24.19.0
- npm: 11.17.0
- install: PASS
- typecheck: PASS
- Vitest: PASS — **7 files / 25 tests**
- production build: PASS — Vite 8.2.2 / 38 modules transformed

상세: `handoff/TEST_REPORT.md`

---

## Hunt v0.1 implementation

핵심 파일:

- `src/roles/hunt/HuntFeature.tsx`
- `src/roles/hunt/huntTypes.ts`
- `src/roles/hunt/huntContent.ts`
- `src/roles/hunt/huntReducer.ts`
- `src/roles/hunt/buildHuntCompletion.ts`
- `src/roles/hunt/hunt.css`

Hunt의 stage / clue / approach / tracking / danger / result / return 상태는 모두 Hunt 내부 구현이다. Common reducer는 Hunt 내부 진행을 모른다.

### Stage 08-B internal stages

```text
tracking-situation
→ tracking-choice
→ danger-cue
→ danger-choice
→ danger-resolved
→ hunt-result
→ return-start
→ return-choice
→ motif-recall
→ firelight
```

### Tracking judgment

세 선택은 정답 퀴즈가 아니다.

- 조금 더 흔적을 따라간다.
- 여기서 돌아가는 쪽을 생각한다.
- 주변과 해의 위치를 한 번 더 확인한다.

더 추적하는 경우 Hunt 내부의 `distanceBurden`과 `DayMoment`가 더 부담스러운 상태로 이동한다. 이 값은 Gather/Camp 시작 시간에 영향을 주지 않는다.

### Natural danger

위험은 모든 후반 경로에서 경험한다. 목적은 전투가 아니라 **자연 속 인간의 취약함 + 주변 판단 + 협력**이다.

허용된 대응:

- 서로 가까이 움직임
- 조용히 거리 둠
- 더 안전한 방향을 살핌

없는 구조:

- 공격 / 처치
- 적 HP
- 전투 승리
- 위험 대응 점수

위험 대응 선택 자체는 Hunt 성공/실패를 결정하지 않는다.

### Hunt outcome

최종 질적 결과:

- `food-secured`
- `empty-handed`

성공/빈손은 서로 다른 게임 엔딩이 아니다. 둘 다 같은 귀환 흐름을 거친다.

### Return / motif / firelight

결과 뒤 목표가 `획득`에서 `귀환`으로 바뀐다.

학생은 큰 바위 / 물 흐름 / 능선 같은 자연 단서 중 하나를 기준으로 돌아갈 방향을 짧게 확인한다. 길찾기 실패 GAME OVER는 없다.

귀환 중 다시:

> **“해가 지기 전에 돌아와.”**

가 등장한다. 불빛 장면의 핵심은 사냥 성공보다 `돌아왔다.`는 안도와 공동체 감각이다.

---

## RoleCompletion contract

Hunt는 `firelight`에 도달한 뒤 사용자가 `불 주변 사람들에게 합류하기`를 실행했을 때만 완료한다.

`buildHuntCompletion.ts`가 공통으로 넘기는 질적 signal:

- 사냥 결과: 먹을 것 확보 또는 빈손
- 자연 위험 경험
- 공동체 복귀
- 거리 부담

Hunt-owned `detail`:

- huntOutcome
- attemptOutcome
- trackingChoice
- dangerCue
- dangerResponse
- returnLandmark
- distanceBurden
- returnedToCommunity

Common Shell은 이 detail을 해석하지 않는다.

---

## Architecture boundaries — preserve

1. Common Shell / reducer에 Hunt-specific action을 추가하지 않는다.
2. Hunt / Gather / Camp끼리 직접 import하지 않는다.
3. Role Feature → ExperienceOrchestrator 역방향 import를 만들지 않는다.
4. Shared UI가 Hunt의 플레이 규칙을 알게 하지 않는다.
5. Hunt 내부 stage / tracking / danger / result / return 상태를 `ExperienceState`로 올리지 않는다.
6. Hunt reducer를 범용 Scene Engine으로 일반화하지 않는다.
7. Gather / Camp를 Hunt reducer 복사본으로 시작하지 않는다.
8. RoleCompletion 기본 계약에 score / HP / EXP / ranking을 넣지 않는다.
9. 자연 위험을 전투/적 HP/보스 구조로 확장하지 않는다.
10. Common Evening을 Hunt 전용 엔딩이나 결과표로 만들지 않는다.
11. 학생의 플레이 순서와 같은 하루의 역사적 시간을 연결하지 않는다.

---

## Tests to preserve

현재 전체 자동 테스트는 **7 files / 25 tests**다.

### Hunt

- `tests/unit/huntReducer.test.ts` — 8
- `tests/unit/buildHuntCompletion.test.ts` — 2
- `tests/unit/HuntFeature.test.tsx` — 3
- `tests/integration/HuntVerticalSlice.test.tsx` — 1

중요 Guardrail:

- 더 추적하면 거리/시간 부담 존재
- danger response가 성공/실패 채점이 아님
- food-secured / empty-handed 모두 정상
- return landmark 없이 귀환 진행 불가
- firelight 전 RoleCompletion 금지
- 성공/빈손 모두 같은 Perspective Bridge로 복귀
- 실제 Hunt-only dev plan에서 Common Evening Integration 경계까지 연결
- score / HP / EXP / ranking / GAME OVER / combat choice 없음

### Existing common tests

- `tests/unit/experienceReducer.test.ts` — 6
- `tests/unit/experienceStorage.test.ts` — 2
- `tests/integration/ExperienceOrchestrator.test.tsx` — 3

공통 아침, 역할 순서 변경, Perspective Bridge, Common Evening Integration, persistence 경계를 계속 보호한다.

---

## Assets

최종 이미지 / 사운드는 아직 없다.

Hunt v0.1 기능·UX는 CSS / 텍스트 prototype으로 직접 플레이할 수 있다. 따라서 Stage 08-B에서는 새 `handoff/ASSET_REQUESTS.md`를 만들지 않았다.

구체 동물 종, 환경, 흔적 외형, 인물 외형은 역사·시각 맥락 검토 후 별도 공정에서 확정한다.

---

## Next task — Stage 09-A

**교사가 브라우저에서 Hunt v0.1을 직접 플레이하고 관찰 메모를 남긴다. 이 단계에서는 새 기능을 먼저 추가하지 않는다.**

관찰할 것:

- 지루한 구간
- 설명이 너무 긴 곳
- 이해하기 어려운 조작
- 선택은 있는데 의미가 약한 곳
- 사냥 성공에 지나치게 끌리는지
- 빈손 결과도 정상적인 하루로 느껴지는지
- 귀환이 실제로 중요하게 느껴지는지
- 자연 위험이 전투보다 취약함/판단으로 느껴지는지
- 동행자와 공동체의 존재가 느껴지는지
- `“해가 지기 전에 돌아와.”`의 의미 변화가 느껴지는지

교사 관찰 메모를 만든 후 **Stage 09-B — Hunt UX 분석** 새 QA 세션에서 문제를 `유지 / 축소 / 수정 / 삭제`로 분류하고 `docs/07_HUNT_UX_REVIEW.md`를 작성한다.

승인된 수정만 Stage 09-C 개발 세션에서 반영한다.

---

## Read first in the next QA session

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
11. Hunt current code/tests
12. Stage 09-A 교사 플레이 관찰 메모
