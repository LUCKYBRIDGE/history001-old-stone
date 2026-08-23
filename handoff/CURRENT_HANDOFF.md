# CURRENT_HANDOFF.md

## Previous work

Stage 01~05 설계 검증 리비전 이후 **Stage 06 기술 설계**를 완료했다.

새 canonical 기술 문서:

- `docs/06_TECH_BLUEPRINT.md`

현재 상위 기준 문서:

- `docs/01_PROJECT_CORE.md`
- `docs/02_EXPERIENCE_STRUCTURE.md`
- `docs/03_HUNT_STORY.md`
- `docs/04_HUNT_PLAYFLOW.md`
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v2
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md`
- `docs/06_TECH_BLUEPRINT.md`

## Stage 06에서 확정한 기술 구조

### 1. 기본 스택

- React
- TypeScript
- Vite
- 초기 상태 관리: React `useReducer` + 필요한 Context
- 초기 서버 / 로그인 / DB / API 없음
- Vitest + React Testing Library
- Hunt Vertical Slice 이후 Playwright E2E 확장

### 2. 상위 아키텍처

# **App → Experience Orchestrator → Common Experience / Role Features → Shared UI**

Common Shell은 다음만 담당한다.

- 전체 phase
- 공통 아침
- 현재 역할
- 완료 역할
- 역할 결과 보관
- Perspective Bridge
- Common Evening 진입
- 이후 큰 단계 연결

Common Shell은 역할별 내부 게임 루프를 모른다.

### 3. 역할 Feature 독립

- Hunt / Gather / Camp는 서로 직접 import하지 않는다.
- 각 역할은 자신의 내부 reducer / 상태 / 상호작용을 가질 수 있다.
- 공통 계약은 `시작 → 내부에서 자유롭게 플레이 → RoleCompletion 반환` 정도만 요구한다.
- Hunt의 Scene 구조가 Gather / Camp에 강제되지 않는다.

### 4. 같은 하루 시간 모델

학생의 실제 플레이 순서는 역사 세계의 시간 진행이 아니다.

예를 들어 학생이 Hunt를 먼저 끝냈다고 해서 Gather가 Hunt 이후 시간에서 시작하면 안 된다.

세 역할은 같은 날 병렬적인 관점이다.

공통 `DayMoment`는 역할 안에서 같은 하루의 시간대를 표현하는 의미 체계로만 사용한다.

### 5. 역할 순서

Production 경험은 세 역할 모두를 required role로 가진다.

역할 순서는 하드코딩하지 않는다.

`ExperiencePlan`으로 다음을 분리한다.

- required roles
- role order policy

개발·테스트용 Plan은 Hunt-only Vertical Slice 같은 부분 실행을 허용하되 production plan과 분리한다.

### 6. Common Morning / Perspective Bridge / Common Evening

- CommonMorning은 기본적으로 한 번만 실행한다.
- 각 역할 진입은 짧은 RoleEntry로 처리한다.
- 역할 하나를 끝내면 RoleCompletion을 저장하고 PerspectiveBridge로 연결한다.
- 모든 required roles 완료 후 완전한 CommonEvening Integration으로 들어간다.
- Common Evening은 점수표나 결과 모달이 아니다.

### 7. 전역 상태에 넣지 않을 것

- Hunt Scene ID
- Hunt 흔적 / 추적 내부 상태
- Gather 자원 영역 상태
- Camp 작업 상태
- 역할별 애니메이션 상태

이것들은 각 Feature 내부 상태다.

### 8. 범용 Scene Engine 금지

초기부터 모든 역할을 같은 `Scene[] + choices + success/failure` 구조로 만드는 공통 엔진을 만들지 않는다.

공통화는 NarrativeFrame, ActionButton, ChoiceList 같은 UI primitive 정도로 제한한다.

## Next task — Stage 07

다음 새 ChatGPT 개발 세션의 작업은 **최초 실행 가능한 앱 골격 구축**이다.

결과물은 문서가 아니라 실제 코드와 테스트다.

### 반드시 구현

1. Vite + React + TypeScript 프로젝트
2. `src/app/`
3. `ExperienceOrchestrator`
4. `ExperienceState` + reducer
5. `ExperiencePlan`
6. `RoleId` / Role Feature 계약
7. Role Registry
8. CommonMorning placeholder
9. PerspectiveBridge placeholder
10. CommonEvening Integration placeholder
11. Hunt / Gather / Camp Feature slot
12. production plan이 세 역할 모두를 요구하는 구조
13. 역할 순서를 하드코딩하지 않는 구조
14. 최소 localStorage adapter
15. 기본 unit / integration tests
16. CSS / 텍스트 기반 placeholder 화면

### Stage 07에서는 하지 않을 것

- Hunt 실제 PLAYFLOW 전체
- Gather 상세 구현
- Camp 상세 구현
- 며칠 변화 실제 콘텐츠
- 이동 실제 콘텐츠
- 최종 이미지 / 사운드
- 범용 게임엔진

## Stage 07 Acceptance Criteria

- 로컬 개발 서버 실행 가능
- production build 성공
- Common Shell / Role Features 물리적 분리
- Hunt-specific event가 Common reducer에 없음
- 세 역할 required 판정 가능
- 역할 순서 변경 가능
- CommonMorning 한 번 실행 상태
- RoleCompletion 저장 가능
- 모든 required roles 완료 판정 가능
- CommonEvening에 RoleCompletion 묶음 전달 가능
- reducer 기본 테스트 통과
- 역할 순서 테스트 통과
- reset 테스트 통과
- 외부 이미지 다운로드 없음

## Read first in the next session

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/06_TECH_BLUEPRINT.md`
6. `docs/01_PROJECT_CORE.md`
7. `docs/02_EXPERIENCE_STRUCTURE.md`
8. `docs/05_ROLE_EXPERIENCE_MAP.md`

Stage 07에서는 `docs/04_HUNT_PLAYFLOW.md`를 구현 명세로 사용하지 않는다. Hunt 실제 콘텐츠는 Stage 08에서 시작한다.

## Session end rules for Stage 07

코드 구현 후 반드시:

- typecheck
- unit / integration test
- production build

을 실행한다.

그리고 다음을 갱신한다.

- `PROJECT_STATUS.md`
- `CHANGELOG.md`
- `handoff/CURRENT_HANDOFF.md`
- `handoff/TEST_REPORT.md`
- 문제가 남으면 `handoff/KNOWN_ISSUES.md`

다음 세션이 과거 채팅 없이 저장소만 읽고 Stage 08로 이어갈 수 있어야 한다.
