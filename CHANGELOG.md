# CHANGELOG.md

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
- 역할 개발 파이프라인을 다음으로 변경:

```text
Historical Core
→ Role Identity
→ STORY
→ Immersion Script
→ PLAYFLOW
→ Functional Prototype
→ Teacher Immersion Test
→ Student Test
→ Final Art/Sound
→ Final QA
```

### Next

- Stage 09-C — Hunt v0.2 immersive functional prototype 구현

---

## Stage 09-A — Teacher Playtest Preparation & First Critical Finding

### Added

- `handoff/HUNT_PLAYTEST_NOTES.md` 초기 플레이테스트 기록지
- `handoff/HUNT_PLAYTEST_OBSERVATIONS.md`

### Finding

`HUX-001 — 시작 직후 역할 몰입 부족`

교사 피드백:

> “시작부터 몰입을 하게 할 무언가가 부족하다. 내가 정말 해당 상황, 해당 인물이 된 것 같은 느낌이 들게 해야 한다.”

이 관찰이 Stage 09-B 전체 리비전의 직접 원인이 됨.

---

## Stage 08-B — Hunt Vertical Slice v0.1

### Added

- 추적 상황 / 추적 판단
- 자연 위험
- 비전투 위험 대응
- `food-secured` / `empty-handed`
- 귀환
- 모티프 회상
- 불빛
- `buildHuntCompletion.ts`
- real Hunt integration test

### Guardrails

- score / HP / EXP / ranking 없음
- 전투 시스템 없음
- danger response가 Hunt 성공을 채점하지 않음
- 성공/빈손 모두 귀환
- firelight 이전 RoleCompletion 금지
- Perspective Bridge 사용

### Verified

- Node.js 24.19.0
- npm 11.17.0
- 7 test files / 25 tests PASS
- production build PASS
- implementation CI: `32677132365`
- final recorded CI: `32677268699`

---

## Stage 08-A — Hunt Front Half

- 출발
- 흔적 탐색
- 단서 판단
- 발견
- 접근 판단
- 사냥 시도
- Hunt 내부 reducer/state 구축
- 첫 사냥 시도에서 역할을 조기 완료하지 않도록 Guardrail 확립

---

## Stage 07 — App Skeleton

- React + TypeScript + Vite
- App / AppShell
- ExperienceOrchestrator
- Common Morning / RoleEntry / Perspective Bridge / Common Evening Integration boundary
- Hunt / Gather / Camp Feature 경계
- ExperiencePlan
- localStorage adapter
- Vitest / React Testing Library
- GitHub Actions CI

---

## Stage 01~06 — Canonical Foundation

- Project Core
- Experience Structure
- Hunt STORY
- Hunt PLAYFLOW
- Role Experience Map
- Stage 01~05 validation
- Tech Blueprint
- GitHub SSOT / ChatGPT 책임 단위 개발 방식
