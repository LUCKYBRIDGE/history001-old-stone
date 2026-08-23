# PROJECT_STATUS.md

## Current phase

상위 기획 문서 01~05와 설계 검증 리비전을 완료했고, **Stage 06 기술 설계까지 완료한 상태**다.

다음 단계는 Stage 07 — 실제 실행 가능한 최소 웹앱 골격 구축이다.

## Completed planning / architecture documents

- `docs/01_PROJECT_CORE.md` — 기본 아이디어·학습 방향 v3
- `docs/02_EXPERIENCE_STRUCTURE.md` — 전체 체험 구조 v2
- `docs/03_HUNT_STORY.md` — 사냥 역할 메인 서사 v2
- `docs/04_HUNT_PLAYFLOW.md` — 사냥 역할 실제 플레이 흐름 v2
- `docs/05_ROLE_EXPERIENCE_MAP.md` — 세 역할 핵심 경험 맵 v2
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — Stage 01~05 설계 검증 리포트
- `docs/06_TECH_BLUEPRINT.md` — ChatGPT 채팅 중심 기술 설계 v1

## Stage 06에서 확정한 핵심

### 기술 스택

- React + TypeScript + Vite
- 초기 상태 관리: React `useReducer` + 필요한 범위의 Context
- 초기 서버 / 로그인 / DB / API 없음
- Vitest + React Testing Library 기반 테스트
- Hunt Vertical Slice 이후 Playwright E2E 확장 권장

### 핵심 아키텍처

- `App → Experience Orchestrator → Common Experience / Role Features → Shared UI`
- Common Shell은 전체 진행만 관리하고 역할별 게임 루프를 알지 않는다.
- Hunt / Gather / Camp는 독립 Feature다.
- Role Feature는 내부 플레이를 스스로 관리하고 완료 시 의미 있는 `RoleCompletion`만 공통 흐름에 전달한다.
- 역할 간 직접 import를 금지하고 결과 연결은 `RoleCompletion → Integration` 경로를 사용한다.

### 같은 하루를 보호하는 시간 모델

- **학생의 실제 플레이 순서와 게임 속 하루의 시간은 별개다.**
- 사냥·채집·머무름은 순차적으로 플레이하더라도 역사 세계에서는 같은 날 병렬적으로 진행된 관점이다.
- 역할 A가 오후에 끝났다는 이유로 역할 B가 오후부터 시작하지 않는다.
- 역할 내부 시간은 공통 `DayMoment` 의미 체계를 사용할 수 있지만 각 Feature의 관점 시간으로 관리한다.

### 세 역할 진행

- production 경험은 Hunt / Gather / Camp 세 역할 모두 완료해야 한다.
- 역할 순서는 코드에 하드코딩하지 않는다.
- `ExperiencePlan`으로 required roles와 순서 정책을 분리한다.
- 개발·테스트용 Plan은 Hunt-only 같은 부분 Vertical Slice를 허용할 수 있으나 production plan과 분리한다.

### Common Morning / Evening

- 공통 아침은 기본적으로 한 번만 실행한다.
- 역할마다 짧은 `RoleEntry`로 관점을 전환한다.
- 역할 완료 후 `PerspectiveBridge`를 통해 같은 하루의 다른 관점으로 연결한다.
- 완전한 `CommonEvening`은 세 역할의 경험을 공동체 이해로 합치는 Integration Feature이며 결과표가 아니다.

### 과설계 방지

- 범용 Scene Engine을 먼저 만들지 않는다.
- Hunt의 Scene 구조를 Gather / Camp에 강제하지 않는다.
- 점수 / 별 / 랭킹 / EXP를 공통 Role Result 계약에 넣지 않는다.
- Gather / Camp의 상세 PLAYFLOW가 나오기 전에 공통 자원·위험·성공률 필드를 미리 만들지 않는다.

## Development approach

- GitHub 저장소를 프로젝트의 기준 저장소로 사용한다.
- ChatGPT 채팅을 기획·개발·QA·아트 디렉션의 주 작업 환경으로 사용한다.
- 작업 책임 단위가 끝날 때 새 세션으로 전환한다.
- 새 세션은 저장소의 최신 문서·코드·인수인계를 먼저 읽는다.
- 일반 개발 세션에서는 이미지를 생성하지 않는다.
- 이미지의 맥락은 개발 초기부터 축적하고, 기능과 장면이 검증된 뒤 최종 자산을 제작한다.

## Next planned work

1. **Stage 07 — 최초 앱 골격 구축**
   - Vite + React + TypeScript 프로젝트
   - App Shell
   - ExperienceOrchestrator
   - ExperienceState / reducer
   - ExperiencePlan
   - Role 계약 / Role Registry
   - CommonMorning / PerspectiveBridge / CommonEvening placeholder
   - 세 Role Feature 슬롯
   - 최소 localStorage adapter
   - unit / integration tests
   - CSS / 텍스트 placeholder
2. Stage 08 — 사냥 Vertical Slice 개발
3. Stage 09 — 사냥 UX 검증·수정
4. 채집 STORY / PLAYFLOW 설계·구현
5. 머무는 역할 STORY / PLAYFLOW 설계·구현
6. 같은 하루 + 며칠 변화 통합
7. 이동·새 거처 구현
8. 최종 이미지·사운드 제작 및 적용
9. 학생 테스트 후 v1.0

## Stage 07 필수 Guardrail

- Hunt-specific 로직을 Common reducer에 넣지 않는다.
- 특정 역할 순서를 하드코딩하지 않는다.
- production plan은 세 역할 모두를 required role로 인식한다.
- CommonMorning은 한 번만 실행 가능한 상태 구조를 만든다.
- CommonEvening은 RoleResult 점수표가 아니라 Integration 지점으로 둔다.
- 역할 내부 Scene / interaction 상태는 전역 상태에 넣지 않는다.
- Gather / Camp를 Hunt 구조에 맞춰 placeholder부터 만들지 않는다.
- 외부 이미지 다운로드·최종 이미지 생성 없이 CSS / 텍스트 placeholder만 사용한다.

## Do not start yet

- Hunt 실제 PLAYFLOW 전체 구현(Stage 07 구조 검증 전)
- 채집·머무는 역할 상세 구현
- 최종 이미지 대량 제작
- 최종 사운드 제작
- 이동·새 거처 상세 구현
- 학생 테스트

## Workflow reference

전체 개발 단계와 산출물은 `docs/00_DEVELOPMENT_WORKFLOW.md`를 기준으로 한다.

Stage 07 구현 기준은 `docs/06_TECH_BLUEPRINT.md`를 최우선 기술 문서로 사용한다.
