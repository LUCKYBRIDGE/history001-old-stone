# CHANGELOG.md

## Design Reboot R2 — Stage 01~06 Embodied First-Person Foundation

### Trigger

후속 방향성 검토에서 다음 요구를 프로젝트 최상위 구조로 승격했다.

- 실제 사람의 시야처럼 눈앞 풍경과 내 신체 일부가 함께 보여야 함
- 주변 인물과 실제 관계를 맺어야 함
- 위협/고민이 UI 문항이 아니라 상황으로 다가와야 함
- 선택이 하나의 획일적 결론으로 무효화되지 않아야 함

기존 Stage 09 UX 수정 범위를 넘어 **개발 이전 Stage 01부터 Design Reboot R2**를 수행.

### Added

- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
  - 환경 + 내 몸 + 물건 + 사람 + 행동을 하나의 POV composition으로 정의
  - 자세/행동별 자연스러운 body visibility
  - Player Body Continuity
  - Cinematic First-Person Interactive Scene
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
  - Relationship Memory
  - Threat build-up
  - 가치 충돌형 딜레마
  - Bounded Agency
  - Persistent Consequence
  - Reconverging Narrative
  - Perspective Recontextualization
- `handoff/ASSET_REQUESTS.md`
  - Player Body Continuity Sheet
  - Cast Continuity Sheet
  - POV/Camera 기준
  - Hunt body pose/POV 자산 요구
- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`
  - 몸/관계/위협/고민/결과/관점 전환 QA

### Rebuilt

- `AGENTS.md`
  - Embodied First-Person / Relationship / Agency를 최상위 Guardrail로 승격
  - 기존 Hunt v0.1을 Legacy Functional Prototype으로 명시
- `docs/00_DEVELOPMENT_WORKFLOW.md` — v3
  - R2 Stage 01~06 재정의
  - 다음 구현을 `R2 Stage 07 — Embodied Experience Skeleton`으로 변경
- `docs/01_PROJECT_CORE.md` — v5
  - 몸이 보이는 1인칭, 관계 기억, 비획일적 결과를 프로젝트 헌법에 반영
- `docs/02_EXPERIENCE_STRUCTURE.md` — v4
  - Shared Morning Event / Perspective Morning Echo
  - 역할 전환을 다른 사람의 몸으로 이동하는 구조로 재정의
  - 관계/결과가 반영되는 Common Evening
- `docs/03_HUNT_STORY.md` — v4
  - R/H1/H2 반복 관계 인물
  - 실제 딜레마와 threat build-up
  - 다축 Hunt outcome
- `docs/04_HUNT_PLAYFLOW.md` — v4
  - Scene마다 POV / body / actor / action / consequence / callback 정의
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v4
  - 역할별 서로 다른 body grammar와 관계/딜레마
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — v3
  - R2 재검증
- `docs/06_TECH_BLUEPRINT.md` — v3
  - Embodied Scene Presentation
  - Player Body Identity
  - Cast Anchor
  - Relationship Memory
  - Multi-axis Consequence
  - Narrative Variant Selector
  - Threat Build-up Beat
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — v2
  - Embodied/Relationship/Dilemma/Threat/Consequence/Perspective Gate 강화
- `docs/08_HUNT_IMMERSION_REDESIGN.md` — v2
  - 기존 v0.1에서 새 embodied Hunt로 전환하는 구현 브리프
- `README.md`
- `PROJECT_STATUS.md`
- `handoff/CURRENT_HANDOFF.md`

### Key architectural decision

기본 player-facing 기술 방향:

```text
App
→ Experience Orchestrator
→ World Continuity / Integration
→ Common Experience / Role Features
→ Embodied Presentation UI
```

단, 범용 NPC AI / 대규모 대화 트리 / 자유 3D FPS / 범용 Scene Engine은 도입하지 않음.

### Role perspective decision

Hunt / Gather / Camp는 같은 캐릭터가 세 업무를 하는 것이 아니다.

**같은 공동체의 같은 하루를 서로 다른 구성원의 몸과 눈으로 경험한다.**

### Result decision

큰 플롯은 재수렴할 수 있지만 다음은 선택 기억에 따라 달라질 수 있다.

- 사람 반응
- 관계
- 몸 상태
- 시간/거리
- 들고 있는 것
- 위험 경험
- Perspective Bridge
- Common Evening

### Next

# **R2 Stage 07 — Embodied Experience Skeleton**

먼저 `내 몸 + 사람 + 환경 + 도구 전달 + 짧은 시점 전환`이 브라우저에서 자연스러운지 검증한 뒤 Hunt 전체를 구현한다.

---

## Stage 09-B — Immersion & Narrative Foundation Revision

### Added

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
  - 즉시 상황 진입
  - 몸/감각
  - 관계
  - 생활 필요
  - 행동으로 드러나는 정보
  - 선택 결과감
  - 시간·공간 연속성
  - 감정/모티프 회수
  - Opening / Embodiment / Relationship / Continuity / Learning Gate
- `docs/08_HUNT_IMMERSION_REDESIGN.md`
  - Hunt v0.2의 강화된 플롯
  - Cold Open
  - `같이 가자`
  - 기다리는 사람
  - 거처가 멀어지는 공간 연속성
  - 발견 전 정적
  - 랜드마크 회수
  - 같은 불의 아침/저녁 의미 변화
  - Stage 09-C 구현 우선순위

### Revised

- `AGENTS.md` — 역할 빙의와 몰입을 최상위 Guardrail로 승격
- `README.md` — 프로젝트를 역할 몰입형 역사 체험으로 명확화
- `docs/00_DEVELOPMENT_WORKFLOW.md` — v2, 전체 미래 개발 계획 개편
- `docs/01_PROJECT_CORE.md` — v4, `상황 → 행동 → 결과/감각 → 개념화` 학습 흐름 강화
- `docs/02_EXPERIENCE_STRUCTURE.md` — v3, Common Morning을 Cold Open으로 재정의
- `docs/03_HUNT_STORY.md` — v3, 관계·플롯·감정 회수 강화
- `docs/04_HUNT_PLAYFLOW.md` — v3, 설명 카드형 진행에서 행동/세계 반응 중심으로 개편
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v3, Hunt/Gather/Camp 각각의 고유 몰입 문법 추가
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — v2, HUX-001 이후 초기 설계 재검증
- `docs/06_TECH_BLUEPRINT.md` — v2, Player-facing / Debug 분리와 몰입 테스트 전략 추가
- `handoff/HUNT_PLAYTEST_NOTES.md` — v2, 첫 30초·관계·연속성·모티프 중심 QA로 확장
- `handoff/HUNT_PLAYTEST_OBSERVATIONS.md` — HUX-001을 프로젝트 수준 핵심 문제로 승격

### Key decision

- Hunt v0.1은 **Functional Complete**이지만 **Immersion Complete가 아님**.
- 앞으로 역할 완료 정의를 Functional / Immersion / Production으로 분리.

---

## Stage 09-A — Teacher Playtest Preparation & First Critical Finding

- `handoff/HUNT_PLAYTEST_NOTES.md` 초기 플레이테스트 기록지
- `handoff/HUNT_PLAYTEST_OBSERVATIONS.md`
- `HUX-001 — 시작 직후 역할 몰입 부족`

---

## Stage 08-B — Hunt Vertical Slice v0.1

- 추적 상황 / 추적 판단
- 자연 위험 / 비전투 위험 대응
- `food-secured` / `empty-handed`
- 귀환 / 모티프 / 불빛
- `buildHuntCompletion.ts`
- real Hunt integration test
- 7 test files / 25 tests PASS
- final recorded CI: `32677268699`

---

## Stage 08-A — Hunt Front Half

- 출발
- 흔적 탐색
- 단서 판단
- 발견
- 접근 판단
- 사냥 시도
- Hunt 내부 reducer/state

---

## Stage 07 — App Skeleton

- React + TypeScript + Vite
- App / AppShell
- ExperienceOrchestrator
- Common / Role Feature 경계
- ExperiencePlan
- localStorage adapter
- Vitest / React Testing Library
- GitHub Actions CI

---

## Stage 01~06 — Original Canonical Foundation

- Project Core
- Experience Structure
- Hunt STORY
- Hunt PLAYFLOW
- Role Experience Map
- Stage 01~05 validation
- Tech Blueprint
