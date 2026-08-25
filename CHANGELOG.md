# CHANGELOG.md

## Design Reboot R2 — Emotional Realism / Horror / Role-True Perspective Refinement

### Trigger

Stage 01~06 Deep Audit 이후 방향을 다시 점검하면서 안전 기준이 지나치게 보수적으로 읽힐 수 있는 부분을 보정했다.

핵심 사용자 방향:

- 죄책감 자체는 나쁜 것이 아님
- 현실적인 후회·걱정·책임감이 관계에서 생길 수 있어야 함
- 공포게임 같은 순간도 역사적 상황을 강화한다면 허용 가능
- 빨간 화면 등 강한 효과도 적절한 위치에 사용 가능
- 역할 전환 시 현재 누구 관점인지 알려주면 충분
- 역할에 들어간 뒤에는 그 사람의 시야·몸·지식으로 스토리가 진행되어야 함
- 몰입이 역사적 개념 이해와 역사적 상상력으로 자연스럽게 이어져야 함

### Revised

- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — v3
  - Emotional Reality
  - 죄책감/후회/두려움/안도 허용
  - `Choice Fairness = 결과 평등` 해석 폐기
  - 현실적인 더 나쁜 결과 허용
  - 공포게임 같은 순간 허용
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` — v3
  - `Subtle by default. Strong when earned.`
  - `strong-accent` 예외적 허용
  - 짧은 red/dark accent, jolt, jump-like event 지원
  - 효과 최소화가 아니라 정확한 위치 배치가 목표
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` — v2
  - 안전 = 감정 제거가 아님
  - Historical Imagination을 핵심 학습 목표로 승격
  - 죄책감/후회의 교육적 허용 기준
  - 공포/위협 강도의 현실적 허용 범위
  - 역할 관점은 진입 시 명료화 후 role-true POV 유지
  - 강제 reflection 완화
- `docs/02_EXPERIENCE_STRUCTURE.md` — v6
  - Role-True Perspective
  - 관점 전환은 짧게 알려줄 수 있음
  - 역할 내부는 전지적 정보 없이 그 사람의 제한된 시야로 진행
  - `anchor 2개 이상` 같은 기계적 전환 규칙 완화
  - `Immersion → Historical Imagination → Understanding → Conceptualization`
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — v5
  - Emotional Reality Gate
  - Threat/Horror Gate
  - 강한 순간 effect 사용 기준
  - 다른 관점에서 죄책감/후회/이해가 생기는 구조 허용
- `AGENTS.md`
  - Role-True Perspective Guardrail
  - Emotional Reality Guardrail
  - Horror 허용
  - `strong-accent` 허용
- `docs/00_DEVELOPMENT_WORKFLOW.md` — v6
  - Stage 07에 role-true entry / emotional reaction / strong-accent prototype 검증 추가
- `PROJECT_STATUS.md`
- `handoff/CURRENT_HANDOFF.md`

### Key decisions

- **안전 = 감정 제거가 아니다.**
- 죄책감은 결과를 이해하면서 자연스럽게 생길 수 있다.
- 학생을 모욕·낙인하거나 죄책감으로 정답을 강요하는 구조만 피한다.
- 모든 선택이 동일하게 좋은 결과를 가질 필요는 없다.
- Choice Fairness는 결과 평등이 아니라 **결과의 납득 가능성**이다.
- Hunt에서 공포게임 같은 강한 순간을 사용할 수 있다.
- 고어/반복 jump scare/처치 루프보다 불확실성·취약함·판단을 강조한다.
- 화면 효과는 `none / subtle / accent / strong-accent`를 사용 가능하다.
- 강한 red/dark accent도 서사적으로 earned된 핵심 순간에는 허용한다.
- 역할 시작 시 현재 시점을 알려준 뒤에는 그 역할의 제한된 시야와 지식으로 플레이한다.
- 모든 역할 뒤 강제 reflection을 두지 않는다.
- 목표 학습 흐름은 **Immersion → Historical Imagination → Understanding → Conceptualization**이다.

### Next

# **R2 Stage 07 — Embodied Experience Skeleton**

먼저 Hunt 관점에서

- role entry
- 내 몸 + R/H1/H2
- 도구 전달
- 걷기/몸 낮추기
- 관계 반응
- subtle/accent/드문 strong-accent
- reduced effects
- 짧고 명료한 Perspective Bridge

를 브라우저에서 검증한다.

---

## Design Reboot R2 — Stage 01~06 Deep Audit

### Trigger

Embodied First-Person, 관계 기억, 비획일적 결과, 미세 화면 연출이 연속해서 추가된 뒤 **Stage 01부터 전체 foundation을 다시 감사**했다.

핵심 질문을 `더 몰입적인가?`에서 다음으로 확장했다.

> **더 몰입적인 동시에 역사적으로 안전하고, 초등학생이 이해하기 쉽고, 정서·접근성 측면에서 안전하며, 실제로 구현 가능한가?**

### Added

- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
  - Historical Integrity
  - Learner Safety & Accessibility
  - Learning Clarity
  - Learning Invariants / Narrative Variants
  - Progressive Scaffolding
  - Cognitive Load / Primary Attention Target
  - Player Body Identity neutrality
  - Perspective clarity
  - Relationship Emotional Safety
  - Threat Intensity Ceiling
  - Screen effect safety / WCAG three-flashes ceiling
  - Choice Fairness
  - Experience → Reflection → Historical Concept
  - Teacher / Classroom readiness
- `docs/R2_STAGE01_DEEP_AUDIT_REPORT.md`
  - 감사에서 발견한 리스크와 보완 이유
  - 외부 설계 원칙과의 대조
  - 남은 runtime 검증 리스크

### Rebuilt / Revised

- `docs/01_PROJECT_CORE.md` — v6
  - 몰입을 단독 최상위 목표가 아니라 학습 수단으로 재정의
  - 4 non-negotiable axes
  - Learning Invariants / Narrative Variants
  - Reflection / Historical Concept 강화
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — v3
  - 몸이 항상 보여야 한다는 해석 제거
  - Player Body Identity 성/연령 고정관념 방지
  - Embodied Fidelity Ladder
  - uncanny / mismatch QA
  - Primary Attention Target
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — v2
  - Relationship Emotional Safety
  - Choice Fairness Gate
  - Threat ceiling / recovery
  - Learning Invariant 분기 독립
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` — v2
  - `World/Actor → Body → Treatment`
  - flash보다 blink/fade 우선
  - Primary Attention 우선
  - reduced-effects parity
  - 의미 중복 금지
- `docs/02_EXPERIENCE_STRUCTURE.md` — v5
  - Perspective Orientation
  - Micro / Shared Reflection
  - Learning Invariant coverage
  - Classroom Session Boundary
- `docs/03_HUNT_STORY.md` — v5
  - Hunt Learning Invariants
  - first-action scaffold
  - Choice Fairness
  - Threat ceiling + recovery
  - 관계 비난 금지
- `docs/04_HUNT_PLAYFLOW.md` — v5
  - Scene별 Primary Attention / Learning contribution / treatment / scaffold / safety 계약
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v5
  - 역할 차이를 성별보다 행동·공간·관계·딜레마·학습 증거로 정의
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — v4
  - R2 Deep Audit 결과와 남은 리스크 기록
- `docs/06_TECH_BLUEPRINT.md` — v5
  - Learning Evidence
  - AttentionSpec
  - Progressive Scaffold
  - Choice Fairness precondition
  - Threat recovery
  - Reduced Effects
  - Perspective Orientation
  - Reflection / Concept Bridge
  - Player / Teacher / Debug surface
  - Classroom checkpoint
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — v4
  - 장면 제작 순서를 `Learning Evidence → Situation → Primary Attention → Body/Actor → Action → Response → Treatment → Scaffold → Callback → Safety`로 재정의
- `docs/08_HUNT_IMMERSION_REDESIGN.md` — v3
  - 최신 canonical 구현 명세가 아니라 Legacy Hunt → R2 전환 브리프로 지위 조정
- `AGENTS.md`
- `README.md`
- `PROJECT_STATUS.md`
- `docs/00_DEVELOPMENT_WORKFLOW.md` — v5
- `handoff/CURRENT_HANDOFF.md`
- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

### Key decisions

- **Immersion is a means, not the curriculum.**
- 분기는 역사 사실을 바꾸지 않고 개인 경험을 변주한다.
- Hunt/Gather/Camp 몸을 성별 분업과 하드코딩하지 않는다.
- 관계는 판단의 무게를 만들되 죄책감/도덕 채점으로 사용하지 않는다.
- 중요한 선택은 필요한 정보가 사전에 관찰 가능해야 한다.
- 위협은 비그래픽 긴장 + recovery를 기본으로 한다.
- 화면 효과는 Primary Attention과 학습을 방해하지 않는다.
- reduced effects는 동등한 학습 경로다.
- 관점 전환은 필요하면 짧은 orientation 문장을 허용한다.
- 몰입 뒤 Reflection과 Historical Concept Bridge가 필수다.

### Next

# **R2 Stage 07 — Embodied Experience Skeleton**

전체 Hunt보다 먼저 몸·사람·첫 행동 명료성·screen treatment/reduced effects·관점 전환·Learning Evidence·teacher/checkpoint를 작은 브라우저 골격에서 검증한다.

---

## Design Reboot R2 — Subtle Screen Treatment Foundation

### Trigger

추가 방향성 검토에서 대형 애니메이션/이펙트보다 다음과 같은 **작은 화면 변화**도 몰입 설계의 정식 언어로 사용해야 한다는 요구를 반영했다.

- 화면이 따뜻하거나 붉게 물드는 색 변화
- 새벽/해질녘 명암 변화
- 자연스러운 blink
- 짧은 focus/blur 변화
- 미세 sway
- 순간적인 motion stop

### Added

- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
  - Environment / Body / Event / Transition treatment 구분
  - red wash / blink / vignette / blur-focus / micro-motion 원칙
  - `none / subtle / accent` Effect Intensity Budget
  - reduced-effects 접근성 원칙
  - 역할별 treatment 예시
  - CSS/DOM 기반 lightweight implementation 방향

### Revised

- `AGENTS.md`
  - 01C를 Stage 01 헌법 위계에 추가
  - Subtle Screen Treatment Guardrail 추가
  - 범용 VFX 엔진 과설계 금지
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — v2
  - 몸 상태와 screen treatment 연계
  - blink 기반 관점 전환 허용
  - `상황/몸/사람이 먼저 → 효과는 보조` 원칙 추가
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — v3
  - Perceptual Treatment를 몰입 층으로 추가
  - Screen Treatment Gate 추가
- `docs/06_TECH_BLUEPRINT.md` — v4
  - `ScreenTreatmentPresentation` 개념
  - lightweight `ScreenTreatmentLayer`
  - CSS 기반 color/exposure/vignette/focus/micro-motion/blink
  - reduced-effects fallback / 테스트 전략
- `PROJECT_STATUS.md`
  - R2 Stage 07에 treatment prototype을 정식 범위로 추가
- `handoff/CURRENT_HANDOFF.md`
  - 다음 구현 세션의 treatment 요구와 금지사항 반영

### Key decision

화면 효과는 상태 의미를 생성하지 않는다.

```text
세계/사람/몸에서 상황이 먼저 성립
→ 작은 화면 treatment가 감각을 보조
```

금지:

- 위험마다 진한 전체 화면 red flash
- HP damage 효과 같은 붉은 펄스
- 반복 flashing
- 지속적 강한 shake/blur/zoom
- 효과 하나에 필수 정보 의존

---

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
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
- `handoff/ASSET_REQUESTS.md`
- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

### Rebuilt

- `AGENTS.md`
- `docs/00_DEVELOPMENT_WORKFLOW.md` — v3
- `docs/01_PROJECT_CORE.md` — v5
- `docs/02_EXPERIENCE_STRUCTURE.md` — v4
- `docs/03_HUNT_STORY.md` — v4
- `docs/04_HUNT_PLAYFLOW.md` — v4
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v4
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — v3
- `docs/06_TECH_BLUEPRINT.md` — v3
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — v2
- `docs/08_HUNT_IMMERSION_REDESIGN.md` — v2
- `README.md`
- `PROJECT_STATUS.md`
- `handoff/CURRENT_HANDOFF.md`

### Key architectural decision

```text
App
→ Experience Orchestrator
→ World Continuity / Integration
→ Common Experience / Role Features
→ Embodied Presentation UI
```

범용 NPC AI / 대규모 대화 트리 / 자유 3D FPS / 범용 Scene Engine은 도입하지 않음.

### Role perspective decision

Hunt / Gather / Camp는 같은 캐릭터가 세 업무를 하는 것이 아니다.

**같은 공동체의 같은 하루를 서로 다른 구성원의 몸과 눈으로 경험한다.**

### Result decision

큰 플롯은 재수렴할 수 있지만 사람 반응·관계·몸 상태·시간/거리·물건·위험 경험·Perspective Bridge·Common Evening은 선택 기억에 따라 달라질 수 있다.

---

## Stage 09-B — Immersion & Narrative Foundation Revision

### Added

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`

### Revised

- `AGENTS.md`
- `README.md`
- `docs/00_DEVELOPMENT_WORKFLOW.md` — v2
- `docs/01_PROJECT_CORE.md` — v4
- `docs/02_EXPERIENCE_STRUCTURE.md` — v3
- `docs/03_HUNT_STORY.md` — v3
- `docs/04_HUNT_PLAYFLOW.md` — v3
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v3
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — v2
- `docs/06_TECH_BLUEPRINT.md` — v2
- `handoff/HUNT_PLAYTEST_NOTES.md` — v2
- `handoff/HUNT_PLAYTEST_OBSERVATIONS.md`

### Key decision

- Hunt v0.1은 **Functional Complete**이지만 **Immersion Complete가 아님**.
- 역할 완료 정의를 Functional / Immersion / Production으로 분리.

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
- Hunt 내부 reducer/state
- 첫 사냥 시도에서 역할을 조기 완료하지 않도록 Guardrail 확립

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
- GitHub SSOT / ChatGPT 책임 단위 개발 방식
