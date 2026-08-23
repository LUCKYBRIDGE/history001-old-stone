# PROJECT_STATUS.md

## Current phase

**Stage 07 — 최초 실행 가능한 웹앱 골격 구축 완료.**

React + TypeScript + Vite 기반의 최소 앱이 실제로 설치·타입 검사·테스트·production build 가능한 상태이며, 다음 단계는 **Stage 08-A — 사냥 Vertical Slice 전반 구현**이다.

## Completed planning / architecture documents

- `docs/01_PROJECT_CORE.md` — 기본 아이디어·학습 방향 v3
- `docs/02_EXPERIENCE_STRUCTURE.md` — 전체 체험 구조 v2
- `docs/03_HUNT_STORY.md` — 사냥 역할 메인 서사 v2
- `docs/04_HUNT_PLAYFLOW.md` — 사냥 역할 실제 플레이 흐름 v2
- `docs/05_ROLE_EXPERIENCE_MAP.md` — 세 역할 핵심 경험 맵 v2
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — Stage 01~05 설계 검증 리포트
- `docs/06_TECH_BLUEPRINT.md` — ChatGPT 채팅 중심 기술 설계 v1

## Stage 07 implemented

### 실행 기반

- React + TypeScript + Vite 앱
- Vitest + React Testing Library + `@testing-library/user-event`
- `npm run dev`
- `npm run typecheck`
- `npm test`
- `npm run build`
- GitHub Actions CI: install → typecheck → test → production build

### 상위 앱 구조

```text
App
↓
ExperienceOrchestrator
↓
Common Experience / Role Features
↓
Shared UI
```

구현 디렉터리:

- `src/app/`
- `src/experience/`
- `src/roles/hunt/`
- `src/roles/gather/`
- `src/roles/camp/`
- `src/ui/`
- `src/persistence/`
- `src/styles/`
- `tests/unit/`
- `tests/integration/`

### Experience Orchestrator

현재 Stage 07에서 연결된 큰 단계:

- `start`
- `common-morning`
- `role-entry`
- `role-playing`
- `perspective-bridge`
- `common-evening`

Common reducer는 역할별 Scene이나 상호작용을 알지 않는다.

### ExperiencePlan / 역할 순서

- Production Plan의 required roles: `hunt`, `gather`, `camp`
- 역할 순서는 `ExperiencePlan.roleOrderPolicy`에서 설정
- reducer 내부에 Hunt → Gather → Camp 순서를 박아 두지 않음
- 테스트에서 Gather → Camp → Hunt 순서 설정이 실제로 동작함을 검증
- 학생의 실제 플레이 순서는 같은 하루의 역사적 시간 진행과 분리됨

### Role Feature Contract

공통 계약:

- `RoleId`
- `SharedDayContext`
- `SharedSignal`
- `RoleCompletion`
- `RoleFeatureProps`
- `RoleRegistry`

`RoleCompletion.detail`은 역할 Feature가 소유하며 Common Shell이 해석하지 않는다.

기본 계약에는 score / HP / EXP / rank / stars가 없다.

### Role placeholders

- `HuntFeature`
- `GatherFeature`
- `CampFeature`

세 Feature는 서로 직접 import하지 않고 각각 독립된 슬롯이다.

현재 세 Feature는 구조 검증용 placeholder이며 실제 게임 플레이는 구현되지 않았다.

### Common experience

- `CommonMorning` — 전체 경험에서 한 번만 실행되는 공통 아침
- `RoleEntry` — 역할별 관점 진입
- `PerspectiveBridge` — 같은 하루의 다른 관점으로 연결
- `CommonEvening` — 세 역할 결과를 공동체 하루로 합칠 Integration 진입점

Common Evening은 역할별 점수표가 아니다.

### Persistence

`src/persistence/experienceStorage.ts`

- `localStorage` 사용
- schema version 1
- plan ID 검증
- 공통 아침 완료, 역할 완료, 공통 저녁 진입 같은 안정적 checkpoint 저장
- 역할 내부 임시 UI / Scene 진행은 저장하지 않음
- reset 시 로컬 진행 제거
- 개인정보 저장 없음

### Shared UI / 접근성 기본

- `ActionButton`
- `ScreenRegion`
- 핵심 버튼 최소 44px 터치 영역
- 키보드 focus 표시 유지
- `prefers-reduced-motion` 대응
- CSS / 텍스트 placeholder만 사용
- 최종 이미지 / 사운드 없음

## Stage 07 verification

GitHub Actions 검증 성공:

- Node.js: 24.19.0
- npm: 11.17.0
- dependency install: 성공
- typecheck: 성공
- test: 성공 — 4 files / 12 tests
- production build: 성공 — Vite 8.2.2

상세 기록: `handoff/TEST_REPORT.md`

## Architecture guardrails still active

- Hunt-specific event를 Common reducer에 넣지 않는다.
- 역할 Feature끼리 직접 import하지 않는다.
- Gather / Camp를 Hunt Scene 구조에 맞추지 않는다.
- 역할 내부 상태를 공통 ExperienceState로 끌어올리지 않는다.
- 학생의 실제 플레이 순서를 역사 속 시간 순서로 취급하지 않는다.
- Production 경험은 세 역할 모두 완료해야 Common Evening Integration으로 연결한다.
- Common Evening을 점수 / 결과표 UI로 바꾸지 않는다.
- 범용 Scene Engine을 만들지 않는다.
- 점수 / HP / EXP / 랭킹을 기본 계약에 넣지 않는다.

## Current placeholders

아직 실제 콘텐츠가 없는 부분:

- Hunt 실제 PLAYFLOW
- Gather STORY / PLAYFLOW
- Camp STORY / PLAYFLOW
- Perspective Bridge 최종 대사·연출
- Common Evening 최종 Integration 콘텐츠
- 며칠 변화
- 이동·새 거처
- 이미지·사운드

## Next planned work

### Stage 08-A — 사냥 Vertical Slice 전반 구현

범위:

**공통 아침 → 역할 진입 → 출발 → 흔적 탐색 → 발견 → 사냥 시도**

단, Stage 07 공통 구조는 유지하고 실제 Hunt 상태·Scene·상호작용은 `src/roles/hunt/` 내부에서 소유한다.

Stage 08-A 시작 전 새 개발 세션은 `handoff/CURRENT_HANDOFF.md`에 지정된 문서와 코드를 먼저 읽는다.

## Do not start implicitly

- Stage 08-B 사냥 후반까지 한 번에 확장
- Gather / Camp 상세 구현
- 며칠 변화 / 이동 실제 콘텐츠
- 최종 이미지 / 사운드
- 범용 게임엔진
- 점수 / HP / EXP / 랭킹 / 업적

## Workflow reference

전체 개발 단계는 `docs/00_DEVELOPMENT_WORKFLOW.md`를 따른다.

기술 경계는 `docs/06_TECH_BLUEPRINT.md`가 계속 기준이다.
