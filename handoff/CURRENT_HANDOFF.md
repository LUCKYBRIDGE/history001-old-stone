# CURRENT_HANDOFF.md

## Current responsibility completed

# **Design Reboot R2 — Stage 01~06 Deep Audit**

사용자 요구가 누적되며 다음이 프로젝트 핵심으로 확정됐다.

- 실제 사람 시야처럼 내 신체 일부가 풍경과 함께 보이는 1인칭
- 실제 주변 인물과 관계
- 위협/고민이 UI 문항보다 상황으로 먼저 다가옴
- 선택이 획일적 결론으로 무효화되지 않음
- 붉은 기운, 명암, blink, focus, micro motion 같은 작은 화면 연출

이번 세션에서는 이 요소들을 **Stage 01부터 다시 감사**해 몰입이 역사 학습·명료성·안전보다 앞서지 않도록 전체 foundation을 보완했다.

---

## 가장 중요한 새 결론

# **몰입은 목표가 아니라 학습 수단이다.**

모든 새 구현은 네 축을 동시에 만족한다.

1. Historical Integrity
2. Learner Safety & Accessibility
3. Learning Clarity
4. Embodiment & Agency

몰입 때문에 다른 세 축을 희생하지 않는다.

---

## Stage 01 canonical

### `docs/01_PROJECT_CORE.md` v6

새 핵심:

- Experience → Reflection → Historical Concept
- Learning Invariants / Narrative Variants
- Body Identity neutrality
- Choice Fairness
- Progressive Scaffolding
- Primary Attention
- Threat ceiling
- Perspective orientation
- Reduced-effects parity

### `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` v3

- 몸이 안 보이는 순간도 허용
- 몸을 많이 보여주는 것이 목표가 아님
- 역할 몸의 성/연령 고정관념 금지
- Embodied Fidelity Ladder
- uncanny/mismatch QA
- Primary Attention Target

### `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` v2

- Relationship Emotional Safety
- Choice Fairness Gate
- Learning Invariant 분기 독립
- Threat intensity ceiling
- 재수렴 뒤 의미 차이

### `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` v2

기본 순서:

```text
World / Actor
→ Body
→ Treatment
```

- flash보다 blink/fade
- Primary Attention 우선
- WCAG three-flashes threshold 초과 금지
- reduced effects parity
- 의미 중복 금지

### `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` v1 NEW

이번 Deep Audit의 핵심 상한선 문서.

- Learning Invariants
- Progressive Scaffold
- Cognitive Load / Primary Attention
- Body Identity neutrality
- Perspective clarity
- Relationship safety
- Threat ceiling
- Screen effect safety
- Reflection
- Teacher/Classroom readiness

---

## Stage 02~06 revised

### Stage 02 — `docs/02_EXPERIENCE_STRUCTURE.md` v5

추가:

- Learning Invariant coverage
- Perspective Orientation
- Micro Reflection
- Shared Reflection
- Classroom Session Boundary
- Historical Concept Bridge

### Stage 03 — `docs/03_HUNT_STORY.md` v5

추가:

- Hunt Learning Invariants
- first-action scaffold
- Choice Fairness
- body identity stereotype guardrail
- Threat ceiling + recovery
- 관계 비난 금지
- Micro Reflection seed

### Stage 04 — `docs/04_HUNT_PLAYFLOW.md` v5

모든 주요 Scene에:

- Primary Attention Target
- Learning Invariant contribution
- treatment budget
- scaffold fallback
- safety/accessibility note

을 추가.

### Stage 05 — `docs/05_ROLE_EXPERIENCE_MAP.md` v5

역할 차이를 외형보다

- 행동
- 장소
- 관계
- 딜레마
- 시간 감각
- 학습 증거

로 만든다.

### Stage 05A — v4

Deep Audit 결과와 남은 리스크 기록.

### Stage 06 — `docs/06_TECH_BLUEPRINT.md` v5

새 지원 대상:

- Learning Evidence
- AttentionSpec
- Progressive Scaffold
- Choice Fairness precondition
- Threat recovery
- Reduced Effects
- Perspective Orientation
- Reflection/Concept Bridge
- Player/Teacher/Debug separation
- Classroom checkpoint

과설계 금지 원칙은 유지한다.

---

## Immersion Bible

`docs/07_IMMERSION_NARRATIVE_BIBLE.md` v4

장면 제작 순서:

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

효과/대사를 먼저 만들고 의미를 나중에 붙이지 않는다.

---

## 현재 코드의 지위

현재 `src/` Hunt v0.1은 삭제하지 않는다.

# **Legacy Functional Prototype**

재사용 가능:

- React/TS/Vite
- Orchestrator
- reducer/test 기반
- qualitative result 철학
- non-combat guardrail
- CI

R2 Deep Audit와 충돌하는 player-facing 구조/state detail은 수정 가능.

---

## 다음 공식 작업

# **R2 Stage 07 — Embodied Experience Skeleton**

전체 Hunt를 바로 만들지 않는다.

최소 범위:

```text
Player/Teacher/Debug 분리
→ Embodied frame
→ 불 앞 내 손/무릎
→ R의 도구 전달
→ first-action scaffold
→ H1/H2와 출발
→ walking POV
→ crouch POV
→ subtle treatment on/off
→ 다른 Player Body Identity로 전환
→ orientation cue
→ 최소 Learning Evidence
→ checkpoint
```

---

## Stage 07에서 반드시 함께 검증할 것

### Embodiment

- 내 몸과 사람이 같은 공간처럼 보이는가?

### Clarity

- 첫 행동을 학생이 찾는가?

### Continuity

- 손/도구/사람이 장면 사이에 이어지는가?

### Treatment

- 효과가 보조적이며 과하지 않은가?

### Accessibility

- reduced effects에서도 동일하게 진행되는가?

### Perspective

- 다른 사람의 몸으로 바뀐 것을 이해하는가?

### Learning

- 최소 Learning Evidence가 실제 경험에서 생성되는가?

### Classroom

- teacher/debug 정보가 학생 화면과 분리되는가?
- 안정된 checkpoint에서 재시작 가능한가?

---

## 하지 않을 것

- 전체 Hunt를 한 번에 구현
- 기존 화면에 손/필터만 추가하고 완료 처리
- 최종 이미지 대량 제작
- 자유 3D/FPS
- NPC AI
- 범용 Scene/VFX Engine
- 성별로 역할을 구분
- 관계를 죄책감 유도로 사용
- screen effect로 위험/정답을 먼저 알려주기
- 몰입을 위해 행동 가능성을 숨기기

---

## 새 구현 세션 읽기 순서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
7. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
8. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
9. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
10. `docs/02_EXPERIENCE_STRUCTURE.md`
11. `docs/06_TECH_BLUEPRINT.md`
12. 구현 대상 코드/tests

Hunt 전체 구현 세션에서는 추가로 `03`, `04`, `05`, `07`을 읽는다.

---

## 현재 검증 상태

이번 변경은 설계/문서 리비전이다.

Runtime source는 변경하지 않았다.

PR CI로 기존 25 tests/typecheck/build가 깨지지 않았는지 최종 확인한 뒤 main에 반영한다.
