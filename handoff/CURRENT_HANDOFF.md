# CURRENT_HANDOFF.md

## Current phase

**Stage 09-A — 교사 직접 플레이 진행 단계.**

Stage 08-B에서 **Hunt Vertical Slice v0.1**의 기능 구현과 자동 검증을 완료했다.

이번 세션에서는 Stage 09-A를 실제로 수행할 수 있도록 다음 플레이테스트 기준 문서를 새로 만들었다.

- `handoff/HUNT_PLAYTEST_NOTES.md`

중요:

**플레이테스트 준비는 완료됐지만 실제 교사 플레이 관찰은 아직 수행되지 않았다. 따라서 Stage 09-A는 아직 완료가 아니다.**

---

## Hunt v0.1 current flow

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

Hunt는 `firelight` 전에는 완료되지 않는다.

결과는 수치 점수가 아니라:

- `food-secured`
- `empty-handed`

의 질적 상태이며, 두 경우 모두 같은 귀환 구조를 거친다.

---

## Current runnable state

권장 환경:

- Node.js 24
- npm 11 이상
- `.nvmrc` 제공
- `package.json` version: `0.0.0-stage08b`

Stage 09-A 실행 권장 순서:

```bash
git switch main
git pull
nvm use
npm install
npm run dev
```

Vite가 출력한 로컬 주소를 브라우저에서 연다.

---

## Stage 09-A playtest procedure

기준 파일:

- `handoff/HUNT_PLAYTEST_NOTES.md`

### Round 1 — 자연스러운 첫 플레이

- 결과를 의도하지 않는다.
- 정답을 찾는 방식으로 플레이하지 않는다.
- 막힘, 재독, 망설임, 지루함, 감정 변화를 기록한다.
- 플레이 도중 코드를 수정하지 않는다.

### Round 2 — 두 결과 비교

첫 플레이와 반대되는 질적 결과를 한 번 확인한다.

확인 목적:

- 먹을 것 확보가 승리 화면처럼 느껴지는지
- 빈손이 게임 실패처럼 느껴지는지
- 두 결과 모두 귀환이 중요하게 느껴지는지

현재 prototype 결과 비교용 예시는 `handoff/HUNT_PLAYTEST_NOTES.md`에 별도로 기록해 두었다. 첫 플레이 전에는 보지 않는 것을 권장한다.

---

## Stage 09-A observation priorities

반드시 기록할 것:

1. **지루한 구간**
2. **설명이 너무 긴 곳**
3. **조작이 이해되지 않는 곳**
4. **선택은 있지만 의미가 약한 곳**
5. **정답 퀴즈처럼 보이는 선택**
6. **사냥 성공 편중 여부**
7. **빈손도 정상적인 하루로 느껴지는지**
8. **자연 위험이 전투보다 취약함/판단으로 느껴지는지**
9. **귀환이 사냥 결과만큼 중요하게 느껴지는지**
10. **다른 사람들과 공동체의 존재가 느껴지는지**
11. **`“해가 지기 전에 돌아와.”`의 의미 변화가 느껴지는지**

---

## Observation format

`handoff/HUNT_PLAYTEST_NOTES.md`에는 다음 구조가 있다.

- 세션 기본 정보
- 공통 아침부터 Perspective Bridge까지 장면별 관찰표
- 탐색/조작 질문
- 선택 의미 질문
- 자연 위험 질문
- 성공/빈손 질문
- 귀환/공동체 질문
- 텍스트/리듬 질문
- 핵심 역사 경험 10개 1~5점 평가
- `HUX-001` 형식의 문제 로그
- 자유 메모

관찰 사실과 해석을 분리한다.

예:

```text
사실: 흔적 탐색 화면에서 무엇을 해야 할지 약 10초 멈춤.
해석: 관찰 버튼들이 모두 비슷해 직접 눌러 보라는 의미가 약할 수 있음.
```

Stage 09-A에서는 수정 방식을 확정하지 않는다.

---

## Stage 09-A completion criteria

다음을 모두 충족해야 Stage 09-A 완료로 바꾼다.

- [ ] Hunt v0.1 처음부터 Perspective Bridge까지 최소 1회 실제 플레이
- [ ] 자연스러운 첫 플레이 결과 기록
- [ ] `food-secured` / `empty-handed` 비교
- [ ] 장면별 관찰표 작성
- [ ] 핵심 UX 관찰 질문에 근거 작성
- [ ] 전체 판정 10개 작성
- [ ] 발견 문제에 HUX ID 부여
- [ ] 플레이 중 즉시 코드 수정하지 않음

---

## Automated baseline to preserve

Stage 08-B 기능 기준선:

- GitHub Actions final documented run: `32677268699`
- final Stage 08-B HEAD additional success run: `32677370024`
- Node.js 24.19.0
- npm 11.17.0
- install PASS
- typecheck PASS
- Vitest PASS — **7 files / 25 tests**
- production build PASS — Vite 8.2.2 / **38 modules transformed**

상세: `handoff/TEST_REPORT.md`

Stage 09-A는 관찰 단계이므로 이 기준선을 임의로 바꾸는 코드 수정은 하지 않는다.

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

## Next task

### 지금 할 일 — Stage 09-A 실제 교사 플레이

`handoff/HUNT_PLAYTEST_NOTES.md`를 사용해 실제 관찰값을 채운다.

### 관찰 완료 후 — Stage 09-B Hunt UX 분석

새 QA 세션에서 실제 Stage 09-A 기록을 입력으로 사용한다.

1. HUX 문제의 근거를 확인한다.
2. `유지 / 축소 / 수정 / 삭제`로 분류한다.
3. 핵심 교육 의미가 약해지는지 검토한다.
4. `docs/07_HUNT_UX_REVIEW.md`를 작성한다.
5. 승인된 수정만 Stage 09-C 개발 세션으로 넘긴다.

**실제 플레이 기록 없이 Stage 09-B 결과를 추정해 작성하지 않는다.**

---

## Read first in the next QA session

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `handoff/HUNT_PLAYTEST_NOTES.md`
6. `docs/01_PROJECT_CORE.md`
7. `docs/02_EXPERIENCE_STRUCTURE.md`
8. `docs/03_HUNT_STORY.md`
9. `docs/04_HUNT_PLAYFLOW.md`
10. `docs/05_ROLE_EXPERIENCE_MAP.md`
11. `docs/06_TECH_BLUEPRINT.md`
12. Hunt current code/tests
