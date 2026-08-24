# PROJECT_STATUS.md

## Current phase

**Stage 09-A — 교사 직접 플레이 진행 단계.**

Hunt Vertical Slice v0.1의 기능 구현과 자동 검증은 Stage 08-B에서 완료됐다. 이제 새 기능을 먼저 추가하지 않고, 실제 브라우저 플레이를 통해 **이해도·조작·리듬·역사적 의미·귀환의 감정**을 관찰한다.

현재 Stage 09-A 상태:

- **플레이테스트 프로토콜/기록지 준비 완료**
- **실제 교사 플레이 관찰은 아직 미실시**
- 따라서 Stage 09-A 자체를 `완료`로 판정하지 않는다.

플레이테스트 기준 문서:

- `handoff/HUNT_PLAYTEST_NOTES.md`

---

## Hunt Vertical Slice v0.1 baseline

현재 실제 Hunt 흐름:

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
→ 더 추적할지 / 돌아갈지 판단
→ 자연의 위험 신호
→ 비전투 위험 대응
→ 오늘의 사냥 결과
→ 귀환 시작
→ 돌아가는 길 판단
→ “해가 지기 전에 돌아와.” 회상
→ 불빛 / 공동체 복귀
→ Hunt RoleCompletion
→ Perspective Bridge
```

Hunt는 **불빛을 보고 공동체로 복귀한 뒤에만** `RoleCompletion`을 반환한다.

질적 결과:

- `food-secured` — 공동체에 가져갈 먹을 것이 생김
- `empty-handed` — 오늘 가져갈 사냥감 없이 돌아감

두 결과 모두 정상적으로 귀환한다.

---

## Stage 09-A playtest packet

새 파일:

- `handoff/HUNT_PLAYTEST_NOTES.md`

이 문서에 다음을 고정했다.

### 실행 절차

```bash
git switch main
git pull
nvm use
npm install
npm run dev
```

### Round 1 — 자연스러운 첫 플레이

- 결과를 의도적으로 만들지 않음
- 정답을 찾으려 하지 않음
- 막힘, 재독, 지루함, 감정 변화 자체를 기록
- 플레이 도중 코드를 수정하지 않음

### Round 2 — 성공/빈손 결과 비교

첫 플레이와 다른 질적 결과를 의도적으로 한 번 더 확인해 다음을 비교한다.

- 먹을 것 확보가 `게임 승리`처럼 과장되는가
- 빈손이 `플레이 실패`처럼 느껴지는가
- 두 결과가 모두 동일한 귀환 의미로 연결되는가

### 장면별 관찰

공통 아침부터 Perspective Bridge까지 장면별로 다음을 기록한다.

- 이해/조작
- 리듬
- 감정/역사적 의미
- 실제 관찰 메모

### 핵심 UX 관찰 영역

- 탐색과 직접 조작
- 선택의 의미
- 자연 위험
- 성공과 빈손
- 귀환과 공동체
- 텍스트와 리듬

### 전체 판정 10개

사냥 역할이 의도한 핵심 이해가 실제로 얼마나 살아 있는지 1~5점과 근거로 기록한다.

### 문제 로그

문제마다 `HUX-001` 같은 ID를 부여하고 다음을 분리한다.

- 관찰 사실
- 사용자에게 생긴 문제
- 심각도
- 재현 가능 여부

Stage 09-A에서는 바로 해결책을 확정하지 않는다.

---

## Stage 09-A completion criteria

다음을 모두 만족해야 Stage 09-A를 완료로 전환한다.

- [ ] Hunt v0.1을 처음부터 Perspective Bridge까지 최소 1회 실제 플레이
- [ ] 자연스러운 첫 플레이 결과 기록
- [ ] `food-secured` / `empty-handed` 두 결과 비교
- [ ] 장면별 관찰표 작성
- [ ] 핵심 UX 질문에 근거 기록
- [ ] 전체 판정 10개 작성
- [ ] 발견 문제에 HUX ID 부여
- [ ] 플레이 도중 즉시 코드 수정하지 않음

---

## Automated baseline — Stage 08-B

Stage 09-A에 들어오기 전 기능 기준선은 이미 자동 검증되어 있다.

최종 Stage 08-B GitHub Actions 성공:

- Run: `32677268699`
- Workflow: `Project CI`
- OS: Ubuntu 24.04.4 LTS
- Node.js: 24.19.0
- npm: 11.17.0
- install: PASS
- typecheck: PASS
- tests: PASS — **7 files / 25 tests**
- production build: PASS — Vite 8.2.2 / **38 modules transformed**

최종 Stage 08-B HEAD 자체도 이후 CI run `32677370024`에서 success를 확인했다.

상세: `handoff/TEST_REPORT.md`

---

## Architecture guardrails still active

```text
App
↓
Experience Orchestrator
↓
Common Experience / Role Features
↓
Shared UI
```

Stage 09에서도 다음을 유지한다.

- Common reducer에 Hunt-specific event를 넣지 않는다.
- Hunt / Gather / Camp끼리 직접 import하지 않는다.
- Hunt 내부 stage를 `ExperienceState`로 올리지 않는다.
- 범용 Scene Engine을 만들지 않는다.
- Gather / Camp를 Hunt의 플레이 문법에 맞추지 않는다.
- 학생의 역할 플레이 순서와 같은 하루의 역사적 시간을 연결하지 않는다.
- score / HP / EXP / ranking을 기본 구조에 넣지 않는다.
- 자연 위험을 전투 시스템으로 만들지 않는다.
- Common Evening을 Hunt 전용 엔딩이나 점수표로 만들지 않는다.

---

## Current unfinished work

- **Stage 09-A 실제 교사 플레이와 관찰 기록**
- Stage 09-B Hunt UX 분석
- Stage 09-C 승인된 UX 수정
- 최종 Hunt 대사·텍스트 다듬기
- 구체 동물 종 / 자연 환경의 역사·시각 확정
- Hunt 최종 이미지 / 사운드
- Gather STORY / PLAYFLOW / 구현
- Camp STORY / PLAYFLOW / 구현
- 실제 세 역할 Common Evening narrative integration
- 며칠 변화
- 이동 / 새 거처
- 최종 시각 자산 체계

---

## Next planned work

### 현재 해야 할 일 — Stage 09-A 실제 플레이

`handoff/HUNT_PLAYTEST_NOTES.md`를 열어 둔 상태에서 Hunt v0.1을 브라우저로 직접 플레이하고 **관찰값만 기록**한다.

### 그 다음 — Stage 09-B

Stage 09-A 기록이 채워진 뒤 새 QA 세션에서:

1. 각 HUX 문제의 근거를 검토한다.
2. 문제를 `유지 / 축소 / 수정 / 삭제`로 분류한다.
3. 교육적 의미와 UX 비용을 함께 평가한다.
4. `docs/07_HUNT_UX_REVIEW.md`를 작성한다.
5. 실제 수정은 Stage 09-C로 넘긴다.

**Stage 09-A 실제 관찰 없이 Stage 09-B를 완료했다고 간주하지 않는다.**
