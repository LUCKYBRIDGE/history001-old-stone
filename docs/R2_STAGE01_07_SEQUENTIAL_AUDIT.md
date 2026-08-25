# R2 Stage 01~07 Sequential Audit

> 상태: 진행 중 — Stage 01~06 감사/수정 완료, Stage 07 구현 검증 진행 중
>
> 목적: 최근 Design Reboot R2 변경이 누적된 뒤 Stage 01부터 Stage 07까지 의존 순서대로 재검증하고, 각 단계의 오류·모순·누락·과설계를 수정한다.

## 공통 판정 기준

- 상위 문서와 충돌하지 않는가
- 같은 개념이 다른 문서에서 다른 의미로 쓰이지 않는가
- 학습 목표가 몰입 장치와 실제로 연결되는가
- role-true limited POV가 유지되는가
- 감정/공포/죄책감이 역사적 상황에서 발생하며 조작적 도덕 채점으로 변질되지 않는가
- 선택 결과가 납득 가능하고 뒤에서 회수되는가
- Embodied First-Person이 시각 장식이 아니라 행동/공간 계약인가
- screen treatment가 장면 의미에 종속되는가
- 구현 계약이 React/TypeScript 수준에서 명시적이고 테스트 가능한가
- 범용 엔진 과설계를 만들지 않는가
- 최신 R2와 Legacy Hunt v0.1의 경계가 명확한가

---

# Stage 01 감사

## 판정

**PASS / REVISED**

### 발견

- 01A가 이전 Deep Audit의 관점 전환 anchor 규칙을 과도하게 유지했다.
- Role-True limited POV가 시각 계약에 직접 포함되지 않았다.
- 몸 상태가 피로/긴장 중심이라 망설임·후회·안도와 연결이 약했다.

### 수정

`docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` → v4

- 역할 진입 시 짧은 관점 표시 허용
- 역할 내부는 해당 인물이 보고/듣고/아는 범위만 사용
- 타 장소/타인의 속마음/미래 결과 전지적 노출 금지
- continuity anchor 개수 강제 제거
- 망설임/후회/안도의 embodied cue 추가
- strong-accent / reduced-effects 최신 원칙 반영

### 남은 리스크

실제 손/몸/배경 자산의 uncanny·광원·원근은 Stage 07 이후 시각 QA가 필요하다.

---

# Stage 02 감사

## 판정

**PASS / REVISED**

### 발견

- 학생 역할 플레이 순서가 세계 시간 진행처럼 읽힐 여지가 있었다.
- cross-role signal이 잘못 쓰이면 과거 사건을 소급 변경할 위험이 있었다.
- Common Evening / multi-day 진입 시점이 더 강하게 고정될 필요가 있었다.

### 수정

`docs/02_EXPERIENCE_STRUCTURE.md` → v7

- `Student Play Order ≠ In-World Time`
- Same-Day Snapshot Rule
- Stable World Facts / Cross-Role Presentation Signals 분리
- cross-role 과거 소급 변경 금지
- Common Evening은 세 관점 뒤 한 번
- Day 1 multi-perspective 뒤에만 later-days 시간 전진

### 남은 리스크

Legacy runtime의 `SharedDayContext`가 얕아 Stage 06/07에서 `dayId` 계약을 코드로 내려야 했다.

---

# Stage 03 감사

## 판정

**PASS / REVISED**

### 발견

Hunt STORY v5에 최신 Project Core v7보다 오래된 과보수 문구가 남아 있었다.

- 붉은/강한 accent 사실상 배제
- 장시간 긴장을 지나치게 빠르게 회복시키는 규칙
- 죄책감을 거의 금지처럼 읽히게 하는 관계 규칙
- Hunt 종료에서 다른 관점 정보가 섞일 여지

### 수정

`docs/03_HUNT_STORY.md` → v6

- Hunt 전체를 Role-True limited POV로 재고정
- R/H1/H2 관계를 실제 감정 원인으로 강화
- 기대/흥분/공포/후회/죄책감/안도 감정선 허용
- `Choice Fairness = 결과 평등이 아니라 인과의 납득 가능성`
- Threat/Horror에 드문 strong-accent, jolt, dark/red peripheral accent 허용
- food 결과 외 return timing / distance / danger / carry / relationship / emotional callback 강화
- 늦은 귀환에서 R의 말이 실제 죄책감/후회를 만들 수 있게 설계
- Hunt 중 Camp 내부 사실을 전지적으로 설명하지 않음

### 남은 리스크

구체 위협 동물/사냥 방식/도구 형태는 역사·지역 검토 뒤 확정해야 한다.

---

# Stage 04 감사

## 판정

**PASS / REVISED**

### 발견

기존 PLAYFLOW는 서사 beat까지 번호가 세분화되어 개발자가 actor stop / sound change / focus shift를 각각 reducer stage나 컴포넌트로 만들 가능성이 있었다.

### 수정

`docs/04_HUNT_PLAYFLOW.md` → v6

핵심 구분:

- **Scene** — 목표/행동/state/location/time/consequence가 의미 있게 바뀌는 단위
- **Beat** — 같은 Scene 안의 actor stop/gaze/sound/treatment/dialogue 변화

추가:

- 주요 Scene 16항목 계약
- Stage 07 정확한 구현 범위 잠금
- Threat를 한 Scene 안의 여러 Beat로 구성
- treatment `none/subtle/accent/strong-accent`
- multi-axis result
- relationship memory / learning evidence 후보

### Stage 07 Skeleton 범위

```text
Role orientation
→ 새벽 불
→ 도구 전달
→ 동행 합류
→ 첫 출발
→ 몸 낮춰 관찰 proof
→ 짧은 Perspective transition proof
```

전체 Hunt는 Stage 07 범위가 아니다.

---

# Stage 05 감사

## 판정

**PASS / REVISED**

### 발견

- Hunt가 먼저 구체화되어 Gather/Camp가 Hunt식 선택·위협·결과 문법을 복제할 위험이 있었다.
- same-day 시간 규칙이 역할 맵에 충분히 강하지 않았다.
- 역할별 감정 문법이 최신 Emotional Reality 수준까지 분리되지 않았다.

### 수정

`docs/05_ROLE_EXPERIENCE_MAP.md` → v6

## Hunt

- 거리/추적/자연 위험/귀환
- 기대·흥분·공포·후회·죄책감·안도
- rare strong-accent 가능

## Gather

- 가까운 관찰/반복 탐색/공간 기억/범위 확대
- 집중·작은 만족·답답함·불확실성·아쉬움
- Hunt식 공포 climax를 복제하지 않음

## Camp

- 같은 장소/불/생활 유지/부재/시간/재회
- 책임감·걱정·불안·기다림·안도
- `모르기 때문에 기다린다`가 핵심 제한 시점

공통:

- same-day guardrail
- role-specific treatment
- cross-role signal 최소화
- Common Evening 한 번

---

# Stage 06 감사

## 판정

**PASS / REBUILT**

### 발견

기존 기술 문서 v5의 좋은 요소는 많았지만 최근 설계 변화와 불일치가 생겼다.

- `SharedDayContext`가 same-day world identity를 명시하지 않음
- `strong-accent` 타입 미지원
- Perspective Bridge anchor가 과도하게 규정됨
- Choice Fairness가 결과 평등에 가깝게 오해될 수 있음
- Scene/Beat 분리가 기술 계약에 없음
- Stage 07에서 필요한 코드 범위보다 추상 타입 후보가 많음
- Player/Teacher/Debug 분리는 문서에만 있고 current runtime은 dev chrome을 player에게 노출

### 수정

`docs/06_TECH_BLUEPRINT.md` → v6

- 세션 진행과 세계 시간 분리
- `dayId: 'day-1'` same-day identity
- 기존 단순 `RoleCompletion` 유지
- Scene state / cinematic Beat 분리
- Skeleton 전용 작은 `SkeletonStep` 권장
- Role-True Perspective contract
- 최소 BodyPresentation / Cast Anchor
- Emotional consequence는 점수보다 memory/callback
- Choice Fairness = causal plausibility
- LearningEvidence는 QA용
- `strong-accent` 지원
- reduced-effects resolver
- Player/Teacher/Debug 기본 분리
- 기본 앱 R2 Skeleton / 개발 `?legacy=1` 비교 경로
- Stage 07 테스트 범위 명시

### 코드로 선반영

`src/experience/contracts/role.ts`

- `SharedDayContext.dayId: 'day-1'` 추가

`src/experience/ExperienceOrchestrator.tsx`

- Legacy 경로에도 `dayId` 전달

---

# Stage 07 감사 / 구현

## 현재 판정

**IMPLEMENTED / AUTOMATED VERIFICATION IN PROGRESS**

### 기존 코드에서 발견한 문제

- 기본 `AppShell`에 `Stage 08-B · Hunt Vertical Slice v0.1` 노출
- player 기본 화면에 `현재 단계: ...` 개발 toolbar 노출
- 최신 R2 기본 경험이 아니라 Legacy Hunt가 기본 App
- Player/Teacher/Debug 분리 미구현
- Embodied First-Person skeleton 미구현

### 구현한 Skeleton

새 파일:

- `src/experience/skeleton/R2EmbodiedSkeleton.tsx`
- `src/experience/skeleton/r2EmbodiedSkeleton.css`

실제 흐름:

```text
사냥 관점 진입
→ 새벽 불 앞
→ R을 봄
→ 돌도구 받기
→ H1/H2와 합류
→ 거처 이탈
→ 몸을 낮춰 지면 관찰
→ 같은 날 다른 사람 관점 진입 proof
```

구현 증거:

- 몸 pose가 step에 따라 바뀜
- 돌도구가 받은 뒤 손에 지속됨
- R/H1/H2와 body가 같은 viewport 안에 존재
- `fire-warmth / standing-shift / walking-air / crouch-focus / perspective-transition`
- reduced-effects 지원
- Player 기본 surface에는 dev metadata 없음
- Teacher surface에 reduced-effects/reset/major step
- Debug surface에 exact step/treatment/evidence
- LearningEvidence:
  - `tool-used-in-context`
  - `embodied-observation-performed`

### App 변경

- 기본 앱 → R2 Stage 07 Skeleton
- 개발 `?legacy=1` → 기존 Hunt v0.1
- 개발 `?teacher=1` → teacher surface
- 개발 `?debug=1` → debug surface
- `AppShell`의 legacy header/footer 제거
- package version → `0.0.0-r2-stage07`

### 테스트 추가

`tests/integration/R2EmbodiedSkeleton.test.tsx`

검증:

- player surface에 dev chrome 없음
- tool continuity
- standing/walking/crouch pose
- perspective proof
- teacher reduced-effects
- debug-only evidence/state

기존 App integration test도 R2 기본 surface 기준으로 갱신했다.

### 아직 증명하지 않은 것

자동 테스트/DOM skeleton만으로는 다음을 증명하지 않는다.

- 실제 사람 눈처럼 자연스러운가
- placeholder body proportions가 충분히 몰입적인가
- 교사가 실제 브라우저에서 조작할 때 장면 리듬이 좋은가
- 최종 이미지/사운드에서 continuity가 유지되는가
- 실제 초등학생에게 몰입/역사적 상상력이 생기는가

이 항목은 CI 후 실제 브라우저 교사 QA로 넘긴다.
