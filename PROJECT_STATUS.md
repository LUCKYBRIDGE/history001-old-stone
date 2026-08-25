# PROJECT_STATUS.md

## Current phase

# **Design Reboot R2 — Stage 01~06 Deep Audit 완료. 다음 공식 단계는 R2 Stage 07 — Embodied Experience Skeleton.**

기존 Hunt v0.1은 기능적으로 동작하지만 새 설계의 최종 기준이 아니다.

현재 판정:

- Legacy Hunt v0.1: **Functional Prototype / preserved**
- R2 Stage 01~06 Deep Audit: **canonical design baseline**
- Embodied First-Person runtime: **not yet implemented**
- Relationship / consequence runtime: **not yet implemented**
- Learning Invariant / scaffold runtime: **not yet implemented**
- Reduced-effects / teacher surface runtime: **not yet implemented**

---

## 이번 Deep Audit을 다시 한 이유

R2에서 다음 요소가 빠르게 추가됐다.

- 몸이 보이는 1인칭
- 실제 주변 인물과 관계
- 체감형 위협/고민
- 비획일적 결과
- 색/명암/focus/blink/micro motion

방향은 유효하지만 서로 결합할수록 새로운 리스크가 생겼다.

확인한 핵심 리스크:

1. 몰입이 역사적 정확성/학습 목표보다 앞설 위험
2. 분기에 따라 학생별 핵심 역사 학습이 달라질 위험
3. diegetic UI를 과도하게 추구해 학생이 행동을 찾지 못할 위험
4. 1인칭 몸이 성별/연령 역할 고정관념을 만들 위험
5. 관계가 죄책감/도덕 채점으로 변질될 위험
6. 위협/화면 효과가 초등학생에게 과할 위험
7. 관점 전환이 `다른 사람의 몸`보다 혼란으로 느껴질 위험
8. 몰입 후 reflection/역사 개념화가 약해질 위험

이를 Stage 01부터 다시 보완했다.

---

## R2 Stage 01 — Project Constitution

### 완료 문서

- `docs/01_PROJECT_CORE.md` — v6
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — v3
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — v2
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` — v2
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` — v1 NEW

### 네 가지 비타협 기준

1. Historical Integrity
2. Learner Safety & Accessibility
3. Learning Clarity
4. Embodiment & Agency

몰입이 다른 세 기준을 침해하면 몰입 연출을 줄인다.

### 새 핵심 개념

- Learning Invariants / Narrative Variants
- Player Body Identity neutrality
- Progressive Scaffolding
- Primary Attention Target
- Perspective Orientation
- Relationship Emotional Safety
- Threat Intensity Ceiling
- Choice Fairness
- Reduced Effects parity
- Experience → Reflection → Historical Concept

---

## R2 Stage 02 — Experience Structure v5

추가/강화:

- Shared Morning Event
- Perspective Morning Echo
- Perspective Orientation Rule
- Micro Reflection
- Shared Reflection
- Learning Invariant coverage
- Classroom Session Boundary
- Historical Concept Bridge

관점 전환은 몰입적이어야 하지만 학생이 현재 누구의 몸인지 이해할 수 있어야 한다.

---

## R2 Stage 03 — Hunt STORY v5

유지:

- R / H1 / H2
- 도구 전달
- 흔적 탐색
- 추적 딜레마
- 자연 위험
- 다축 결과
- 귀환/재회

강화:

- Hunt Learning Invariants
- first-action scaffold
- body identity stereotype guardrail
- Choice Fairness
- Threat ceiling + recovery
- relationship blame 금지
- Micro Reflection seed

---

## R2 Stage 04 — Hunt PLAYFLOW v5

각 주요 Scene 필수 항목:

- POV
- body / held item
- actor positions
- Primary Attention Target
- environment / sound
- direct action
- immediate response
- relationship / consequence
- Learning Invariant contribution
- screen treatment budget
- scaffold fallback
- safety/accessibility note
- callback

---

## R2 Stage 05 — Role Experience Map v5

세 역할의 차이를 몸 외형이 아니라 다음으로 만든다.

- 행동
- 장소
- 관계
- 딜레마
- 시간 감각
- 학습 증거

성별/연령을 역할 분업의 기본값으로 사용하지 않는다.

`docs/05A_STAGE01-05_DESIGN_VALIDATION.md` v4에서 Deep Audit 결과를 정리했다.

---

## R2 Stage 06 — Technical Blueprint v5

새 기술 지원 대상:

- Embodied Scene Presentation
- Player Body Identity
- Cast Anchor
- Relationship Memory
- Multi-axis Consequence
- Learning Evidence
- AttentionSpec
- Progressive Scaffold
- Narrative Variant Selector
- Choice Fairness precondition
- Threat build-up / recovery
- Screen Treatment / Reduced Effects
- Perspective Orientation
- Reflection / Concept Bridge
- Player / Teacher / Debug surface
- Classroom checkpoint

과설계 금지:

- 범용 NPC AI
- 대규모 대화 트리
- FPS/3D engine 선행
- 범용 Scene Engine
- 범용 VFX Engine

---

## Common immersion bible

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — v4

이제 장면 제작 순서를 다음으로 고정한다.

```text
Learning Evidence
→ Situation
→ Primary Attention
→ Body / Actor
→ Action / Decision
→ Response / Consequence
→ Treatment
→ Scaffold
→ Callback
→ Safety / Accessibility
```

---

## 외부 기준과의 정합성 확인

Deep Audit에서는 다음을 참고해 원칙을 보강했다.

- K–6 몰입형 학습에서 reflection/scaffolding의 중요성
- serious-game에서 intuitive navigation이 cognitive load를 줄인다는 설계 원칙
- body ownership/perspective-taking에서 시점/몸 congruence의 중요성
- WCAG 2.2 flashing / motion 접근성 기준

이 프로젝트는 HMD VR이 아니므로 효과를 그대로 보장한다고 가정하지 않는다. 실제 효과는 브라우저 teacher/student QA로 검증한다.

---

## Legacy runtime baseline

현재 `src/`의 Hunt는 기존 v0.1이다.

보존 가치:

- React + TypeScript + Vite
- Experience Orchestrator
- role boundary
- reducer/tests
- non-combat danger
- qualitative completion
- CI

기존 기준선:

- 7 test files
- 25 tests
- typecheck PASS
- production build PASS

이번 Deep Audit은 문서 설계 변경이며 runtime은 아직 새 R2를 구현하지 않았다.

---

## Next official task — R2 Stage 07

# **Embodied Experience Skeleton**

전체 Hunt를 바로 만들지 않는다.

### P0 — Surface / Embodied

1. Player / Teacher / Debug surface 분리
2. Embodied frame
3. body pose preset 3~5개
4. R/H1/H2 최소 actor continuity
5. Cold Open
6. R의 도구 전달

### P1 — Clarity / Motion

7. Primary Attention cue
8. first-action scaffold fallback
9. walking POV
10. crouch POV
11. body continuity

### P2 — Treatment / Accessibility

12. `fire-warmth`
13. `crouch-shift`
14. `threat-attention` 또는 attention prototype
15. `blink-perspective-transition`
16. reduced effects / prefers-reduced-motion

### P3 — Perspective / Learning

17. 다른 Player Body Identity로 전환
18. orientation cue
19. 최소 Learning Evidence prototype
20. stable checkpoint / teacher restart

### P4 — Verification

21. 자동 테스트
22. 브라우저 교사 QA

### 완료 질문

> **최종 아트 없이도 내 몸과 사람이 같은 공간에 있다는 느낌이 드는가?**

> **학생이 첫 행동과 관점 전환을 이해하는가?**

> **효과를 줄여도 같은 정보·선택·학습이 유지되는가?**

NO라면 Hunt 전체로 가지 않고 Skeleton부터 수정한다.

---

## Current unfinished work

- R2 Stage 07 Embodied Experience Skeleton
- R2 Stage 08 Hunt Embodied Vertical Slice
- R2 Stage 09 Teacher Immersion + Clarity QA
- R2 Stage 10 Student Pilot
- R2 Stage 11 Gather
- R2 Stage 12 Camp
- R2 Stage 13 Three-Perspective Integration
- R2 Stage 14 Multi-day Change
- R2 Stage 15 Migration / New Home
- R2 Stage 16 Historical Concept Bridge
- Historical / Visual Context Bible
- Player Body Continuity Sheets
- Cast Continuity Sheets
- POV / Camera Bible
- final visual/audio production

---

## Do not do next

- 기존 Hunt v0.1 화면에 손 그림/효과만 붙이고 완료 처리
- 전체 Hunt를 한 번에 재구축
- 최종 이미지 대량 제작
- 자유 3D/FPS 전환
- NPC AI 시스템 구축
- Gather/Camp를 Hunt UI 복사로 구현
- 화면 효과를 먼저 만들고 의미를 나중에 붙이기
- 몰입을 이유로 학생에게 중요한 조작을 숨기기

새 구현은 반드시 Stage 01 v6~01D와 Stage 06 v5를 기준으로 한다.
