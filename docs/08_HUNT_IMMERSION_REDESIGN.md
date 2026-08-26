# 구석기 역사 체험 웹게임
## Hunt 전환 브리프 v4 / Legacy v0.1 → R2 Embodied Hunt

> **문서 지위: Legacy Transition Reference / Non-Canonical.**
>
> 최신 기준은 이 문서가 아니라 다음을 따른다.
> - `docs/00_CANONICAL_BASELINE.md`
> - `docs/01_PROJECT_CORE.md`
> - `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
> - `docs/02_EXPERIENCE_STRUCTURE.md`
> - `docs/03_HUNT_STORY.md`
> - `docs/04_HUNT_PLAYFLOW.md`
> - `docs/05_ROLE_EXPERIENCE_MAP.md`
> - `docs/06_TECH_BLUEPRINT.md`
> - `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
>
> 목적: 기존 Hunt v0.1에서 무엇을 보존하고 무엇을 폐기/재설계하는지 설명한다.

---

# 1. 기존 Hunt v0.1의 지위

# **Legacy Functional Prototype**

보존 가치:

- React + TypeScript + Vite 실행 기반
- Hunt-local reducer
- qualitative outcome 철학
- non-combat natural danger
- 귀환 뒤 completion
- Perspective Bridge 개념
- 자동 테스트/CI 기준선

새 R2와 충돌하면 수정 가능:

- Common Morning UI
- 카드형 player-facing 화면
- role entry UI
- Hunt stage 구조/표현
- result detail
- relationship/learning state
- Perspective Bridge 표현

`이미 구현되어 있다`는 이유로 새 설계를 약화하지 않는다.

---

# 2. 기존 v0.1의 핵심 결손

- 내 몸이 실제 시야에 존재하는 감각
- 같은 공간의 반복 인물
- 첫 행동의 신체적 상호작용
- 선택 전에 형성되는 실제 고민
- 위협의 징후/사람/몸 build-up
- 관계 기억
- 다축 결과
- Role-True limited POV
- screen treatment / reduced effects
- Curriculum Anchor
- Progressive Scaffold
- Historical Fact / Reconstruction 구분

따라서 단순 스타일 수정이 아니라 presentation/state/flow 일부를 다시 설계한다.

---

# 3. 현재 공식 구현 순서

## Stage 07 — Embodied Curriculum Skeleton

현재 proof 범위:

```text
Player / Teacher / Debug 분리
→ 사냥 관점 orientation
→ 새벽 불 + 현재 임시 거처
→ R의 도구 전달
→ 뗀석기 → 대표적인 예: 주먹도끼
→ held-item continuity
→ H1/H2와 출발
→ current shelter가 멀어짐
→ crouch observation
→ 한동안 이동
→ 자연 거처 후보 발견/살핌
→ 동굴/바위 그늘 용어 연결
→ 다른 사람 관점 전환 proof
```

판정:

# **Implementation Complete / Automated PASS / Human QA Pending**

다음 Gate:

# **Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

## Stage 08 — Hunt Embodied Vertical Slice

Human Gate 통과 뒤:

- 주먹도끼 실제 다용도 interaction
- 흔적 탐색/발견
- 접근/시도
- 추적 딜레마
- Threat/Horror
- 자연 거처 발견 consequence
- 다축 결과
- 귀환
- R/H1/H2 관계 회수
- Perspective Bridge

---

# 4. Hunt Learning Invariants

어떤 경로에서도:

1. 사냥은 흔적/환경 관찰에서 시작.
2. 발견은 성공을 보장하지 않음.
3. 먹을거리 확보는 불확실.
4. 뗀석기와 주먹도끼의 관계를 정확히 이해할 기회가 있음.
5. 주먹도끼를 사냥 전용 무기로 축소하지 않음.
6. 더 멀리 가면 시간·거리·피로·귀환 부담이 커질 수 있음.
7. 자연 속 인간도 위험할 수 있음.
8. 위험 대응은 관찰·거리·협력 중심.
9. 성공/빈손 모두 귀환까지 경험.
10. Hunt만으로 공동체 하루가 완성되지 않음.

---

# 5. 코드 재사용 판단

- R2 Learning Invariant를 지원하는가?
- Embodied presentation을 방해하지 않는가?
- 관계/결과 확장에 과결합이 없는가?
- Common/Role 경계를 유지하는가?
- 새 구조보다 단순하게 재사용 가능한가?

YES면 재사용.
NO면 기존 코드라는 이유로 유지하지 않는다.

---

# 6. State migration

필요한 최소 상태만 추가한다.

후보:

- body pose / gaze
- R/H1/H2 continuity key
- relationship memory
- observation state before choice
- return timing / burden
- Curriculum Anchor / Learning Evidence
- treatment / reduced effects

금지:

- generic Scene state machine
- 모든 actor state 전역화
- 모든 클릭 저장
- 관계 점수화
- generic Curriculum Engine

---

# 7. 화면 전환

기존:

```text
제목
→ 설명
→ 버튼
→ 다음 카드
```

새 기본:

```text
세계/사람이 먼저 보임
→ 몸/시선으로 직접 살핌
→ 필요한 정보 형성
→ 판단/행동
→ 사람/세계 반응
→ 상태/관계가 뒤에서 회수
```

---

# 8. Curriculum migration

도구:

```text
돌도구를 먼저 받음
→ 뗀석기 상위 개념 명명
→ 현재 손의 대표적인 예 = 주먹도끼
→ 실제 다용도 사용은 Stage 08 이후
```

거처:

```text
Stage 07 current temporary shelter 존재
→ Camp에서 실제 생활/손질
→ 그 뒤 '막집' 명명

자연 거처 후보 발견/평가
→ 그 뒤 '동굴 / 바위 그늘' 연결
```

`뗀석기 · 주먹도끼`를 관계 설명 없이 병렬 동의어처럼 사용하지 않는다.

---

# 9. Threat migration

```text
ambient
→ anomaly
→ companion reaction
→ body reaction
→ player observation
→ response choice
→ consequence / recovery
```

기존 비전투 철학은 보존하되, 공포·강한 긴장 자체를 금지하지 않는다.

---

# 10. Result migration

기존:

- food-secured
- empty-handed

은 한 축으로 유지.

추가 가능한 축:

- return timing
- distance burden
- danger exposure
- carry burden
- relationship memories
- shelter discovery

Common Evening/재회는 작은 명시적 variant 규칙으로 변주한다.

---

# 11. 관계와 죄책감

R/H1/H2는 AI NPC가 아니다.

필요:

- 동일 인물 continuity
- 장면별 위치/시선
- 명시적 소수 반응
- 소수 Relationship Memory

중요:

# **관계 때문에 죄책감·후회·걱정이 생기는 것은 허용된다.**

예:

- 늦게 돌아왔고 누군가 오래 기다렸음
- 위험한 선택 때문에 동행자가 힘들어짐

다만:

- 학생 인격을 나쁜 사람으로 판정하지 않음
- 호감도/도덕 점수 없음
- 죄책감만으로 숨은 정답 강요 금지

---

# 12. Screen Treatment migration

# **Subtle by default. Strong when earned.**

후보:

- fire-warmth
- crouch-focus
- threat-attention
- return-firelight
- perspective transition
- 드문 strong-accent

효과를 줄여도 정보/진행/학습은 유지한다.

---

# 13. Perspective migration

Perspective Bridge는 단순 `다음 역할` 메뉴가 아니다.

- 같은 Day 1
- 다른 사람의 몸
- 새 역할의 limited POV

를 명료하게 전달한다.

필요하면 짧은 orientation 문장을 사용한다.

---

# 14. Fact / Reconstruction

Fact:

- 도구/불/거처/이동 생활 등 source-supported 조건

Reconstruction:

- R/H1/H2
- 특정 아침 도구 전달
- 특정 자연 거처 후보 발견
- 구체 대사/감정/선택 결과

Player를 관리 라벨로 방해하지 않는다.
Teacher/Debug에서 구분한다.

---

# 15. 이 문서의 한계

이 문서는 최신 Scene specification이 아니다.

역할:

# **Legacy Hunt에서 R2 Hunt로 무엇을 가져가고 무엇을 버릴지 안내하는 역사적 전환 참고 자료**

최신 구현 판단은 canonical baseline과 Stage 01~07 문서를 따른다.
