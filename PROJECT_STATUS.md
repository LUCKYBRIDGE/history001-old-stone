# PROJECT_STATUS.md

## Current phase

# **R2 Stage 01~07 Sequential Audit 완료 / Stage 07 구현·자동검증 완료 / 실제 브라우저 교사 시각 QA 대기**

Stage 01부터 최근 변경을 의존 순서대로 다시 점검했고 Stage 01~06 canonical 문서를 재정렬했다. Stage 07 Embodied Experience Skeleton은 실제 코드로 구현됐다.

단, **자동 테스트 PASS = 몰입 완성**은 아니다.

현재 다음 Gate:

# **R2 Stage 07 — Teacher Browser Visual/Immersion QA**

이 Gate를 통과하기 전에는 Stage 08 Hunt Embodied Vertical Slice 전체 구현을 시작하지 않는다.

---

## 현재 판정

- Stage 01 Project foundation: **PASS / REVISED**
- Stage 02 Same-Day Experience Structure: **PASS / REVISED**
- Stage 03 Hunt Story: **PASS / REVISED**
- Stage 04 Hunt Playflow: **PASS / REVISED**
- Stage 05 Role Experience Map: **PASS / REVISED**
- Stage 06 Technical Blueprint: **PASS / REBUILT**
- Stage 07 Skeleton implementation: **IMPLEMENTED**
- Stage 07 automated verification: **PASS**
- Stage 07 human visual/immersion QA: **NOT YET PERFORMED**
- Legacy Hunt v0.1: **preserved for development comparison**

상세 감사:

- `docs/R2_STAGE01_07_SEQUENTIAL_AUDIT.md`

---

# Stage 01 최신 기준

- `docs/01_PROJECT_CORE.md` — v7
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — **v4**
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — v3
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` — v3
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` — v2

핵심:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Conceptualization
```

- 역할 시작 시 현재 관점을 명료하게 알려줄 수 있음
- 역할 내부는 그 인물이 보고/듣고/아는 범위만 사용
- 죄책감·후회·두려움·안도 등 현실적 감정 허용
- Choice Fairness = 결과 평등이 아니라 인과의 납득 가능성
- `Subtle by default. Strong when earned.`

---

# Stage 02 — v7 Same-Day Role-True Perspective

핵심 추가:

# **Student Play Order ≠ In-World Time**

Hunt → Gather → Camp 순서로 플레이해도 세 개의 다른 날이 아니다.

- 같은 공동체의 같은 Day 1
- 역할 완료는 학생의 관점 진행 상태
- 역할 완료가 세계 시간을 하루씩 전진시키지 않음
- cross-role signal은 다른 역할의 과거를 소급 변경하지 않음
- Common Evening은 세 관점 뒤 한 번
- multi-day 변화는 그 뒤에만 진행

runtime `SharedDayContext`에도 `dayId: 'day-1'`을 추가했다.

---

# Stage 03 — Hunt Story v6

강화:

- Hunt Role-True limited POV
- R/H1/H2 반복 관계
- 추적 욕구와 귀환 부담 충돌
- 공포게임 같은 짧은 강한 순간 허용
- 죄책감/후회/성취/안도 허용
- strong-accent 가능
- multi-axis result
- Hunt 종료에서 Camp 내부 사실을 미리 설명하지 않음

---

# Stage 04 — Hunt Playflow v6

가장 중요한 구조 수정:

# **Scene ≠ Beat**

- Scene: 목표/행동/state/location/consequence의 의미 단위
- Beat: 같은 Scene 안의 actor stop/gaze/sound/focus/jolt/dialogue 변화

모든 연출을 reducer stage/component로 만들지 않는다.

Stage 07 범위도 전체 Hunt와 분리했다.

---

# Stage 05 — Role Experience Map v6

세 역할 문법을 다시 분리했다.

## Hunt

거리 / 추적 / 위험 / 공포 / 귀환

## Gather

가까운 관찰 / 반복 탐색 / 공간 기억 / 탐색 범위 확대

## Camp

불 / 생활 유지 / 같은 공간의 시간 변화 / 부재 / 기다림 / 재회

Hunt의 위협/추적 climax를 Gather/Camp에 복제하지 않는다.

---

# Stage 06 — Technical Blueprint v6

기술 기준:

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

핵심:

- session progress / world time 분리
- 기존 단순 RoleCompletion 보존
- Scene state / cinematic Beat 분리
- Stage 07 Skeleton은 작은 local state
- `strong-accent` 지원
- reduced-effects parity
- Player / Teacher / Debug 분리
- generic Scene/NPC/VFX engine 금지

---

# Stage 07 — 실제 구현 상태

새 구현:

- `src/experience/skeleton/R2EmbodiedSkeleton.tsx`
- `src/experience/skeleton/r2EmbodiedSkeleton.css`

기본 앱 흐름:

```text
사냥을 나선 사람의 관점
→ 눈을 뜬다
→ 새벽 불
→ 익숙한 사람 R
→ 돌도구를 받는다
→ H1/H2와 합류
→ “해가 지기 전에 돌아와.”
→ 거처를 떠남
→ 몸을 낮춰 지면 관찰
→ 같은 날 다른 사람 관점으로 전환
```

현재는 최종 이미지가 아닌 **CSS/DOM embodied layout proof**다.

검증하는 것:

- body pose 변화
- 손/도구 continuity
- 사람과 몸의 같은 viewport 공간감
- fire-warmth
- standing/walking/crouch treatment
- perspective transition
- reduced effects
- Learning Evidence

---

# Player / Teacher / Debug 분리

기본 앱:

- **Player surface**
- Stage 번호/내부 state/debug toolbar 노출 없음

개발 환경 비교 경로:

- `?legacy=1` — 기존 Hunt v0.1
- `?teacher=1` — teacher controls
- `?debug=1` — exact internal debug

기존 AppShell의

- `Stage 08-B · Hunt Vertical Slice v0.1`
- prototype footer

를 기본 player 화면에서 제거했다.

---

# 자동 검증

첫 CI에서는 새 `SharedDayContext.dayId` 계약에 Legacy Hunt test fixture 한 곳이 누락되어 typecheck가 실패했다.

원인:

```text
HuntFeature.test.tsx fixture
→ dayId 누락
```

수정 후 검증:

- Node: 24.19.0
- npm: 11.17.0
- install: PASS
- typecheck: PASS
- test files: **8 / 8 PASS**
- tests: **31 / 31 PASS**
- production build: PASS

성공 run:

- `32822273986`

---

# Stage 07에서 아직 증명하지 않은 것

자동 테스트는 다음을 증명하지 않는다.

- CSS placeholder가 실제 사람 시야처럼 자연스러운가
- 손/팔 위치와 비율이 사람 눈에 어색하지 않은가
- R/H1/H2가 실제 주변 사람처럼 느껴지는가
- 도구 전달이 관계 형성 순간으로 체감되는가
- 걷기/crouch 움직임이 과하거나 어색하지 않은가
- perspective label이 몰입을 깨지 않는가
- 실제 브라우저에서 treatment 강도가 적절한가
- 초등학생에게 역사적 상상력이 생기는가

따라서 현재 Stage 07은:

# **Implementation Complete / Automated PASS / Human Immersion QA Pending**

이다.

---

# 다음 작업

## 바로 다음

**R2 Stage 07 Teacher Browser Visual/Immersion QA**

확인:

1. 첫 화면 몰입
2. 손/몸 위치
3. R/H1/H2 공간감
4. 도구 전달
5. 걷기/몸 낮추기
6. treatment 강도
7. reduced effects
8. 관점 전환 명료성
9. 개발 메타데이터 미노출

## 그 다음

QA 통과 시:

# **R2 Stage 08 — Hunt Embodied Vertical Slice**

아직 시작하지 않는다.

---

# 이후 미완료

- Stage 07 human QA
- Stage 08 Hunt Embodied Vertical Slice
- Stage 09 Teacher Immersion QA
- Stage 10 Student Pilot
- Stage 11 Gather
- Stage 12 Camp
- Stage 13 Three-Perspective Integration
- Stage 14 Multi-day Change
- Stage 15 Migration / New Home
- Stage 16 Historical Conceptualization
- Player Body Continuity Sheet
- Cast Continuity Sheet
- final visual/audio production
