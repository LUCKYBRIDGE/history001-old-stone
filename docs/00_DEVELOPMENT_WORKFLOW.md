# 구석기 역사 체험 웹게임 — 개발 워크플로우 v6
## Design Reboot R2 / Sequential Stage 01~07

이 문서는 **설계 → 작은 proof → 사람 QA → 다음 Vertical Slice** 순서를 관리한다.

기존 Hunt v0.1은 삭제하지 않고 Legacy Functional Prototype으로 보존한다.

---

# 1. 개발 원칙

큰 기능을 한 번에 만들지 않는다.

```text
Historical / Experience design
→ role STORY
→ embodied PLAYFLOW
→ technical contract
→ small browser proof
→ automated verification
→ teacher visual/immersion QA
→ larger vertical slice
→ student pilot
```

문서 PASS와 runtime PASS를 구분한다.

자동 테스트 PASS와 사람 몰입 PASS도 구분한다.

---

# 2. Stage 01 — Project Constitution

상태:

# **PASS / REVISED**

최신:

- Project Core v7
- Embodied First-Person v4
- Relationship/Agency v3
- Screen Treatment v3
- Learning/Safety/Historical Integrity v2

핵심:

- Role-True limited POV
- Emotional Reality
- Historical Imagination
- `Subtle by default. Strong when earned.`
- Choice Fairness = causal plausibility

---

# 3. Stage 02 — Same-Day Experience Structure

상태:

# **PASS / REVISED**

최신: v7

핵심:

# **Student Play Order ≠ In-World Time**

- Hunt/Gather/Camp는 같은 Day 1
- role completion은 play progress
- cross-role signal이 과거를 소급 변경하지 않음
- Common Evening은 세 관점 뒤 한 번
- multi-day는 그 뒤

---

# 4. Stage 03 — Hunt STORY

상태:

# **PASS / REVISED**

최신: v6

핵심:

- Hunt limited POV
- R/H1/H2 관계
- 추적 욕구 / 시간 / 거리 / 사람 충돌
- 공포/죄책감/후회/안도 허용
- rare strong-accent
- multi-axis result
- 귀환/재회까지가 Hunt

---

# 5. Stage 04 — Hunt PLAYFLOW

상태:

# **PASS / REVISED**

최신: v6

핵심:

# **Scene ≠ Beat**

Scene:

- 목표/행동/state/location/consequence 변화

Beat:

- actor stop/gaze/sound/focus/jolt/dialogue

연출 beat를 모두 stage enum으로 만들지 않는다.

---

# 6. Stage 05 — Three Role Map

상태:

# **PASS / REVISED**

최신: v6

역할 고유 문법:

- Hunt — 거리/추적/위험/공포/귀환
- Gather — 가까운 관찰/반복/공간 기억/범위 확대
- Camp — 불/생활 유지/시간/부재/기다림/재회

Hunt 문법을 다른 역할에 복제하지 않는다.

---

# 7. Stage 06 — Technical Blueprint

상태:

# **PASS / REBUILT**

최신: v6

구조:

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

원칙:

- `dayId`로 same-day identity
- simple RoleCompletion 보존
- Skeleton local state
- body/held item continuity
- relationship memory는 점수 없음
- strong-accent 지원
- reduced effects
- Player/Teacher/Debug 분리
- no generic Scene/NPC/VFX engine

---

# 8. Stage 07 — Embodied Experience Skeleton

## 구현 상태

# **Implementation Complete / Automated PASS / Human QA Pending**

package:

```text
0.0.0-r2-stage07
```

기본 앱:

```text
사냥 관점
→ 새벽 불
→ 도구 전달
→ 동행 합류
→ 출발
→ crouch observation
→ perspective transition proof
```

개발 경로:

- `/` — Player
- `?teacher=1` — Teacher
- `?debug=1` — Debug
- `?legacy=1` — Legacy Hunt v0.1

자동 검증 기준선:

- 8 test files
- 31 tests
- typecheck PASS
- build PASS

---

# 9. Stage 07 Human Gate

다음 공식 작업이다.

교사가 브라우저에서 직접 확인:

- first-person body placement
- 사람과 몸의 공간감
- tool handoff
- walking/crouch
- treatment
- reduced effects
- perspective transition
- dev chrome 미노출

기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

핵심 FAIL이 있으면 Stage 08로 가지 않는다.

---

# 10. Stage 08 — Hunt Embodied Vertical Slice

상태:

# **NOT STARTED / BLOCKED BY STAGE 07 HUMAN GATE**

예정 범위:

- 실제 흔적 탐색
- 발견
- 접근/시도
- 추적 딜레마
- Threat/Horror
- multi-axis result
- 귀환
- emotional callbacks
- 재회

전체 Hunt v6 STORY/PLAYFLOW를 실제 embodied runtime으로 변환한다.

---

# 11. Stage 09 — Teacher Immersion QA

Stage 08 Hunt 전체를 교사가 플레이하며:

- 역할 빙의
- 관계
- 공포/죄책감의 자연스러움
- 결과 변주
- 귀환
- historical imagination

을 검증한다.

---

# 12. Stage 10 — Student Pilot

초등학생 소규모 파일럿.

관찰:

- 조작 이해
- 몰입
- 공포/불편
- 선택 이유
- 기억되는 사람
- 역사적 상상력
- 오개념

---

# 13. Stage 11 — Gather

Hunt QA를 그대로 복제하지 않는다.

Gather의 고유 문법으로 STORY → PLAYFLOW → proof → QA 순서 진행.

---

# 14. Stage 12 — Camp

Camp 고유 문법:

- same place
- fire/life maintenance
- absence
- waiting
- reunion

으로 별도 구현/QA.

---

# 15. Stage 13 — Three-Perspective Integration

세 역할을 same-day 구조로 통합.

- cross-role signals
- perspective recontextualization
- Common Evening

검증.

---

# 16. Stage 14 — Multi-day Change

Day 1 multi-perspective 완료 뒤에만 시작.

- 자원/거리/부담 변화
- 이전 경험과 비교

---

# 17. Stage 15 — Migration / New Home

이동은 정답 버튼이 아니라 누적 경험에서 생긴 공동체 판단으로 구성.

---

# 18. Stage 16 — Historical Conceptualization

플레이 경험을 교과 개념과 연결한다.

목표:

```text
경험을 설명문으로 덮기
```

가 아니라

```text
이미 생긴 이해에 역사 개념의 이름을 붙이기
```

다.

---

# 19. 완료 상태 정의

## Functional Complete

- 실행
- typecheck
- tests
- build

## Embodied Complete

- 몸/시야/공간 관계 사람 QA PASS

## Relationship/Agency Complete

- 관계/선택/결과가 사람 QA에서 체감

## Immersion Complete

- 교사/학생 관찰에서 역할 빙의와 historical imagination 확인

## Production Complete

- 역사 검토
- 최종 art/audio
- accessibility
- classroom QA

완료 상태를 섞어 말하지 않는다.

---

# 20. 코드 변경 세션 종료 Gate

최소:

```text
npm install
npm run typecheck
npm test
npm run build
```

GitHub Actions의 exact final HEAD도 확인한다.

문서:

- PROJECT_STATUS
- CHANGELOG
- CURRENT_HANDOFF
- TEST_REPORT

필요 시:

- KNOWN_ISSUES
- ASSET_REQUESTS

---

# 21. 현재 바로 다음 작업

# **Stage 07 Teacher Browser Visual/Immersion QA**

Stage 08 구현을 먼저 시작하지 않는다.
