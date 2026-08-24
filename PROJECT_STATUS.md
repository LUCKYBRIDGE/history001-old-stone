# PROJECT_STATUS.md

## Current phase

**Stage 08-B — 사냥 Vertical Slice 후반 구현 완료. Hunt Vertical Slice v0.1 기능 구현·검증 완료.**

현재 실제 Hunt 역할은 공통 아침과 RoleEntry 이후 출발부터 귀환까지 플레이할 수 있고, **불빛을 보고 공동체로 복귀한 뒤에만** `RoleCompletion`을 반환한다.

전체 흐름:

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

다음 공식 단계는 **Stage 09-A — 교사 직접 플레이**다.

---

## Stage 08-B implemented

### Hunt 내부 후반 상태

`src/roles/hunt/` 내부에서만 다음 상태를 추가했다.

- `tracking-situation`
- `tracking-choice`
- `danger-cue`
- `danger-choice`
- `danger-resolved`
- `hunt-result`
- `return-start`
- `return-choice`
- `motif-recall`
- `firelight`

Common `ExperienceState`나 Common reducer에는 Hunt 내부 stage/event를 추가하지 않았다.

### 추적 판단

학생은 다음 가운데 판단한다.

- 조금 더 흔적을 따라간다.
- 여기서 돌아가는 쪽을 생각한다.
- 주변과 해의 위치를 한 번 더 확인한다.

어느 선택도 용기/겁, 정답/오답으로 채점하지 않는다. 더 추적하면 Hunt 내부의 거리·시간 부담이 커진다.

### 자연의 위험

자연 위험은 반드시 경험하지만 전투로 구현하지 않았다.

위험 신호 prototype:

- 낯선 울음소리
- 가까운 수풀의 큰 움직임
- 지금까지와 다른 큰 흔적

대응 prototype:

- 사람들과 가까이 붙어 움직이기
- 소리를 줄이고 조용히 거리 두기
- 더 안전해 보이는 방향 살피기

공격 / 처치 / 적 HP / 전투 승패 / 위험 대응 점수는 없다. 위험 대응 선택은 사냥 성공/실패를 채점하는 입력으로 사용하지 않는다.

### 사냥 결과

결과는 같은 하루의 두 질적 상태다.

- `food-secured` — 공동체에 가져갈 먹을 것이 생김
- `empty-handed` — 오늘 가져갈 사냥감 없이 돌아감

두 결과 모두 정상적으로 귀환한다.

### 귀환 / 모티프 / 불빛

사냥 결과 뒤 목표를 `먹을 것을 구한다`에서 `사람들이 있는 곳으로 돌아간다`로 전환한다.

귀환은 대형 길찾기 게임이 아니다. 큰 바위 / 물 흐름 / 능선 같은 자연 단서 중 하나를 기준으로 방향을 확인한다. GAME OVER는 없다.

해 질 무렵 다시:

> **“해가 지기 전에 돌아와.”**

가 나타나고, 마지막 불빛 장면에서는 성공/빈손 어느 경로도 `돌아왔다.`는 안도와 공동체 복귀를 확인한다.

---

## Hunt RoleCompletion

추가 파일:

- `src/roles/hunt/buildHuntCompletion.ts`

Hunt는 `firelight` 전에는 완료 결과를 만들지 않는다.

공통으로 전달하는 질적 신호:

- 사냥 결과: 먹을 것 확보 또는 빈손
- 자연 위험 경험
- 공동체로 귀환
- 거리 부담

Hunt 상세 상태는 `RoleCompletion.detail`에서 Hunt가 소유하고 Common Shell은 이를 해석하지 않는다.

기본 결과에는 score / HP / EXP / ranking / stars가 없다.

---

## Common architecture preserved

```text
App
↓
Experience Orchestrator
↓
Common Experience / Role Features
↓
Shared UI
```

유지된 Guardrail:

- Common reducer에 Hunt-specific event 없음
- Hunt / Gather / Camp 직접 import 없음
- Hunt 내부 stage를 `ExperienceState`로 올리지 않음
- 범용 Scene Engine 없음
- Gather / Camp를 Hunt 구조에 맞추지 않음
- 역할 플레이 순서와 같은 하루의 역사적 시간 분리
- Common Morning 한 번만 실행
- 실제 Hunt 완료 후 Perspective Bridge 사용
- Common Evening은 Hunt 엔딩이 아니라 Integration 경계
- score / HP / EXP / ranking 없음
- 자연 위험 전투화 없음

---

## Tests

현재 전체 자동 테스트:

- Test files: **7**
- Tests: **25**

Hunt 관련:

- `tests/unit/huntReducer.test.ts` — 8
- `tests/unit/buildHuntCompletion.test.ts` — 2
- `tests/unit/HuntFeature.test.tsx` — 3
- `tests/integration/HuntVerticalSlice.test.tsx` — 1

기존 공통 reducer / persistence / Orchestrator tests도 모두 통과한다.

---

## Final verification

최종 GitHub Actions 성공:

- Run: **`32677268699`**
- Workflow: `Project CI`
- OS: Ubuntu 24.04.4 LTS
- Node.js: 24.19.0
- npm: 11.17.0
- install: PASS
- typecheck: PASS
- tests: PASS — **7 files / 25 tests**
- production build: PASS — Vite 8.2.2, **38 modules transformed**

Stage 08-B 코드, `package.json` Stage 08-B metadata, 운영 문서가 반영된 상태를 검증했다.

상세: `handoff/TEST_REPORT.md`

---

## Current unfinished work

Hunt Vertical Slice v0.1 기능 구현은 완료됐지만 다음은 아직 아니다.

- Stage 09 교사/학생 UX 검증과 수정
- 최종 Hunt 대사·텍스트 다듬기
- 구체 동물 종 / 자연 환경의 역사·시각 확정
- Hunt 최종 이미지 / 사운드
- Gather STORY / PLAYFLOW / 구현
- Camp STORY / PLAYFLOW / 구현
- 실제 세 역할 Common Evening narrative integration
- 며칠 변화
- 이동 / 새 거처
- 최종 시각 자산 체계

현재는 CSS / 텍스트 prototype으로 기능·UX 검증이 가능하므로 새 최종 자산 요청은 만들지 않았다.

---

## Next planned work

### Stage 09-A — 교사 직접 플레이

브라우저에서 Hunt v0.1을 처음부터 끝까지 플레이하며 다음을 관찰한다.

- 지루한 구간
- 너무 긴 설명
- 이해하기 어려운 조작
- 의미 없는 선택
- 사냥 성공 편중
- 빈손도 정상적인 하루로 느껴지는지
- 귀환 의미가 충분한지
- 자연 위험이 전투보다 취약함/판단으로 느껴지는지
- 다른 사람들의 존재가 느껴지는지
- `“해가 지기 전에 돌아와.”`의 의미 변화가 느껴지는지

교사 관찰 메모 이후 **Stage 09-B — Hunt UX 분석**에서 문제를 `유지 / 축소 / 수정 / 삭제`로 분류하고 `docs/07_HUNT_UX_REVIEW.md`를 만든다.
