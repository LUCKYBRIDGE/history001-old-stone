# 구석기 역사 체험 웹게임 — 개발 워크플로우 v5
## Design Reboot R2 / Stage 01 Deep Audit

이 문서는 새 프로젝트 헌법에 따라 **Stage 01부터 다시 정의한 설계와 이후 구현 순서**를 관리한다.

기존 Stage 07/08 코드와 테스트는 삭제하지 않지만 **Legacy Functional Prototype**으로 취급한다.

---

# 1. R2의 현재 핵심 정의

# **Embodied First-Person Historical Experience**

학생은

- 자기 몸이 자연스럽게 보이는 1인칭 시야로
- 반복 등장하는 공동체 사람들과 관계를 맺고
- 상황 속 위협과 가치 충돌을 느끼고
- 정답 없는 판단을 하며
- 그 선택의 흔적을 다른 사람/다른 관점에서 다시 보고
- 짧게 성찰한 뒤 역사 개념으로 연결한다.

전체 학습 루프:

# **Experience → Reflection → Historical Concept**

---

# 2. 네 가지 비타협 Gate

모든 Stage는 다음을 동시에 만족해야 한다.

## Historical Integrity

사실/재구성/게임 구분.

## Learner Safety & Accessibility

초등학생에게 불필요한 공포·멀미·접근성 장벽 없음.

## Learning Clarity

무엇을 보고 무엇을 할 수 있는지 이해 가능.

## Embodiment & Agency

몸과 판단이 세계 안에서 의미 있게 느껴짐.

몰입 때문에 앞의 세 기준을 희생하지 않는다.

---

# 3. 공통 품질 Gate

## Learning Invariant Gate

분기와 무관하게 핵심 역사 증거가 유지되는가?

## Embodied Gate

몸/시야/도구/광원 continuity가 있는가?

## Relationship Gate

반복 인물과 선택 기억이 있는가?

## Dilemma / Choice Fairness Gate

선택 전에 필요한 정보가 보이고 최소 두 선택이 합리적인가?

## Threat Gate

징후 → 사람 → 몸 → 관찰 → 판단 → recovery 순서인가?

## Clarity Gate

Primary Attention Target과 scaffold fallback이 있는가?

## Screen Treatment Gate

효과가 의미를 대신하지 않고 reduced effects가 동등한가?

## Perspective Gate

다른 사람의 몸으로 전환한다는 것을 이해할 수 있는가?

## Reflection Gate

플레이 경험이 역사 개념으로 연결되는가?

## Functional Gate

자동 테스트·build·checkpoint·접근성이 정상인가?

---

# 4. R2 Stage 01 — Project Constitution

상태: **Deep Audit 완료**

결과물:

- `docs/01_PROJECT_CORE.md` v6
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` v3
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` v2
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` v2
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` v1

핵심:

- Embodied First-Person
- Player Body Identity neutrality
- Relationship Memory
- Bounded Agency
- Persistent Consequence
- Reconverging Narrative
- Learning Invariants
- Choice Fairness
- Primary Attention
- Progressive Scaffolding
- Threat Intensity Ceiling
- Reduced Effects parity
- Reflection / Historical Concept

---

# 5. R2 Stage 02 — Experience Structure

상태: **Deep Audit 완료**

결과물:

- `docs/02_EXPERIENCE_STRUCTURE.md` v5

핵심:

- Shared Morning Event
- Perspective Morning Echo
- Perspective Orientation
- Perspective Recontextualization
- Micro Reflection
- Shared Reflection
- Common Evening
- Classroom Session Boundary
- Historical Concept Bridge

---

# 6. R2 Stage 03 — Hunt STORY

상태: **Deep Audit 완료**

결과물:

- `docs/03_HUNT_STORY.md` v5

핵심:

- R/H1/H2 관계
- Hunt Learning Invariants
- first-action scaffold
- 추적 딜레마
- Choice Fairness
- Threat build-up + recovery
- 다축 결과
- 관계 비난 금지
- 귀환/재회
- Micro Reflection seed

---

# 7. R2 Stage 04 — Hunt PLAYFLOW

상태: **Deep Audit 완료**

결과물:

- `docs/04_HUNT_PLAYFLOW.md` v5

모든 주요 Scene에:

- POV
- body/held item
- actors
- Primary Attention Target
- direct action
- response
- relationship/consequence
- Learning Invariant contribution
- screen treatment budget
- scaffold fallback
- safety/accessibility note
- callback

을 요구한다.

---

# 8. R2 Stage 05 — Role Experience Map

상태: **Deep Audit 완료**

결과물:

- `docs/05_ROLE_EXPERIENCE_MAP.md` v5
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` v4

핵심:

- 역할별 body grammar
- 역할별 관계/딜레마
- 역할별 Learning Invariants
- 성/연령 고정관념 금지
- 역할별 screen treatment 차별화
- 역할별 reflection

---

# 9. R2 Stage 06 — Technical Blueprint

상태: **Deep Audit 완료**

결과물:

- `docs/06_TECH_BLUEPRINT.md` v5

기술 지원 대상:

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
- 자유 3D/FPS
- 범용 Scene Engine
- 범용 VFX Engine

---

# 10. Legacy Prototype의 위치

기존 코드에서 재사용 가능:

- React/TypeScript/Vite
- Experience Orchestrator
- reducer/test 기반
- qualitative RoleCompletion 철학
- non-combat guardrail
- CI

재설계 가능:

- Common Morning
- player-facing 화면
- Hunt scene presentation
- role result detail
- relationship/learning data
- Perspective Bridge
- teacher/debug surface

기존 코드가 새 설계를 제한하면 새 설계를 우선한다.

---

# 11. R2 Stage 07 — Embodied Experience Skeleton

# **다음 공식 구현 단계**

목표:

전체 Hunt를 먼저 만들지 않고 **몸·사람·명료성·효과·관점 전환·학습 계약이 실제 브라우저에서 성립하는지** 검증한다.

## 07-A — Surface Separation

- Player / Teacher / Debug surface 분리
- player 화면에서 Stage/internal state 제거

## 07-B — Embodied Frame

- 최소 `EmbodiedExperienceFrame` 또는 동등 구조
- body pose preset 3~5개
- R/H1/H2 actor presentation

## 07-C — Cold Open

- 불 앞 내 손/무릎
- R
- 돌도구 전달
- Primary Attention Target
- first-action scaffold fallback
- `fire-warmth`

## 07-D — Movement / Observation

- H1/H2와 출발
- walking POV
- crouch POV
- body continuity

## 07-E — Treatment / Accessibility

최소 2~3개:

- `fire-warmth`
- `crouch-shift`
- `threat-attention` 또는 attention prototype
- `blink-perspective-transition`

동시에:

- reduced effects
- prefers-reduced-motion 대응

## 07-F — Perspective Prototype

- 같은 actor/불을 anchor로 다른 Player Body Identity 전환
- 필요 시 한 줄 orientation

## 07-G — Learning / Teacher

- 최소 Learning Evidence prototype
- teacher checkpoint/restart 또는 최소 teacher surface

## 07-H — Verification

자동:

- typecheck
- unit/integration
- player/teacher/debug separation
- reduced effects parity
- first action progression
- perspective transition

직접 플레이:

- 내 몸이 자연스러운가?
- 첫 행동을 찾는가?
- R이 사람처럼 기억되는가?
- 효과가 불편하지 않은가?
- 다른 몸으로 바뀐 것을 이해하는가?

### Stage 07 완료 질문

> **최종 아트가 없어도 `구석기 배경을 보는 웹`이 아니라 내 몸과 사람이 같은 공간에 있다는 느낌이 성립하는가?**

> **동시에 학생이 무엇을 해야 하는지 이해하고, 효과를 줄여도 같은 경험과 학습이 가능한가?**

NO라면 전체 Hunt를 만들지 않고 Skeleton부터 수정한다.

---

# 12. R2 Stage 08 — Hunt Embodied Vertical Slice

Stage 07 승인 뒤.

## 08-A — Search / Discovery

- 거처가 멀어짐
- 흔적 탐색
- scaffold
- actor reaction
- 발견 전 정적

## 08-B — Dilemma / Threat

- 접근/시도
- 추적 딜레마
- choice fairness
- threat build-up
- recovery

## 08-C — Consequence / Return

- 다축 결과
- body state
- landmark return
- R callback
- reunion variants
- Perspective Bridge

## 08-D — Learning Coverage

- Hunt Learning Invariants 자동/수동 검증
- Micro Reflection

결과:

# **Hunt Embodied Vertical Slice vNext**

---

# 13. R2 Stage 09 — Teacher Immersion + Clarity QA

실제 교사 플레이.

측정:

- 첫 행동 이해
- 몸/공간 continuity
- 기억되는 인물
- 관계
- 실제 딜레마
- choice fairness
- 위협 강도
- effect discomfort
- reduced effects
- 관점 전환 이해
- 선택 회수
- reflection 연결

문제는 HUX ID로 기록.

---

# 14. R2 Stage 10 — Student Pilot

소규모 학생 테스트.

질문:

- 설명 없이 첫 행동을 이해하는가?
- 몸이 자연스러운가?
- 기억하는 사람이 있는가?
- 선택 전에 실제로 고민하는가?
- `정답을 맞혔다`보다 `판단했다`고 느끼는가?
- 위협이 과하지 않은가?
- 역할 전환을 이해하는가?
- 효과를 불편해하지 않는가?
- 자기 플레이를 근거로 역사 이유를 말하는가?

---

# 15. R2 Stage 11 — Gather

순서:

Historical review
→ Role Body Identity
→ Learning Invariants
→ 반복 인물/관계
→ STORY
→ Embodied Script
→ PLAYFLOW
→ Prototype
→ Teacher QA
→ Student QA

Hunt UI를 복제하지 않는다.

---

# 16. R2 Stage 12 — Camp

특히:

- R 등 shared cast 관점 전환
- 불 가까운 몸
- 같은 공간의 시간 변화
- 생활 유지
- 떠난 사람의 부재
- 기다림과 귀환

을 검증한다.

---

# 17. R2 Stage 13 — Three-Perspective Integration

- Perspective Bridge 최종화
- shared cast continuity
- relationship/consequence signals
- Learning Evidence 통합
- Common Evening variants
- Shared Reflection

공통 저녁은 결과표가 아니다.

---

# 18. R2 Stage 14 — Multi-day Change

- 역할별 부담 변화
- 제한적 관계 기억 누적
- Learning Invariants 유지
- 한 장소 생활의 부담 누적

---

# 19. R2 Stage 15 — Migration / New Home

- 이동 고민
- 무엇을 챙길지
- 떠나는 몸의 경험
- 함께 걷는 사람
- 새 장소 탐색
- 새 불

이동은 앞선 경험의 결론이어야 한다.

---

# 20. R2 Stage 16 — Historical Concept Bridge

학생이 실제 장면을 근거로

- 뗀석기/도구
- 불
- 먹을거리 확보
- 역할/협력
- 생활 공간
- 이동 생활

을 개념화한다.

Teacher-facing에서는 사실/재구성/게임 장치를 구분할 수 있어야 한다.

---

# 21. Final Art / Audio Pipeline

기능·Embodied·Clarity·Safety Gate 이후 진행.

필수 선행:

- Player Body Continuity Sheet
- Cast Continuity Sheet
- POV / Camera Bible
- Historical / Visual Context Bible
- Art Direction Bible
- Asset Spec
- Audio Context Map

최종 이미지 단위:

# **POV composition = environment + body + actor + action + light + gaze**

---

# 22. 모든 새 세션 읽기 순서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
7. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
8. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
9. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
10. 해당 Stage 문서
11. 실제 개발이면 관련 코드/tests

---

# 23. 현재 공식 다음 단계

# **R2 Stage 07 — Embodied Experience Skeleton**

기존 Hunt 전체 구현보다 먼저 **몸·관계·명료성·화면효과·접근성·관점 전환·학습 계약**을 작은 브라우저 골격에서 검증한다.
