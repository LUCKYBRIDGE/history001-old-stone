# CURRENT_HANDOFF.md

## Previous work

**Stage 07 — 최초 실행 가능한 웹앱 골격 구축을 완료했다.**

Stage 06의 `docs/06_TECH_BLUEPRINT.md`를 기술 계약으로 사용해 React + TypeScript + Vite 앱, Experience Orchestrator, 세 Role Feature 슬롯, 공통 경험 연결, localStorage, 테스트 환경을 실제 코드로 만들었다.

실제 Hunt / Gather / Camp 콘텐츠는 아직 구현하지 않았다.

## Current runnable state

권장 개발 런타임:

- Node.js 24
- npm 11 이상
- `.nvmrc` 제공
- `package.json`에 engine / package manager 기대 버전 명시

저장소 루트에서:

```bash
npm install
npm run dev
```

검증 명령:

```bash
npm run typecheck
npm test
npm run build
```

GitHub Actions에서도 동일한 install → typecheck → test → build 경로를 검증했다.

## Verification status

Stage 07 최종 CI 성공:

- Node.js 24.19.0
- npm 11.17.0
- dependency install: 성공
- typecheck: 성공
- Vitest: 성공 — 4 test files / 12 tests
- production build: 성공 — Vite 8.2.2
- GitHub Actions run: `32667661692`

상세: `handoff/TEST_REPORT.md`

검증용 임시 PR #1, #2는 CI 확인에만 사용했으며 **merge하지 않고 closed** 처리했다. 검증 브랜치는 최종적으로 main과 같은 기준으로 되돌린다.

## Stage 07 implemented

### App / Shell

- `src/main.tsx`
- `src/app/App.tsx`
- `src/app/AppShell.tsx`

최종 디자인이 아닌 CSS / 텍스트 placeholder 화면이다.

### Experience

- `src/experience/ExperienceOrchestrator.tsx`
- `src/experience/experienceReducer.ts`
- `src/experience/experienceTypes.ts`
- `src/experience/experiencePlans.ts`

Stage 07 phase:

```text
start
→ common-morning
→ role-entry
→ role-playing
→ perspective-bridge
→ 다음 role 또는 common-evening
```

### Contracts

- `src/experience/contracts/role.ts`
- `src/experience/contracts/time.ts`

공통 Role 계약은 최소한으로 유지한다.

`RoleCompletion`은:

- role id
- completed
- qualitative shared signals
- role-owned detail

만 전달한다.

score / HP / EXP / rank / stars를 공통 계약에 넣지 않았다.

### Role Registry / Features

- `src/roles/registry.ts`
- `src/roles/hunt/HuntFeature.tsx`
- `src/roles/gather/GatherFeature.tsx`
- `src/roles/camp/CampFeature.tsx`

세 Feature는 서로 직접 import하지 않는다.

현재 세 파일은 서로 독립된 **개발용 placeholder**다.

특히 Gather / Camp는 Hunt reducer나 Scene 모델을 상속하지 않는다.

### Common Experience

- `src/experience/common/CommonMorning/CommonMorning.tsx`
- `src/experience/common/RoleEntry/RoleEntry.tsx`
- `src/experience/common/PerspectiveBridge/PerspectiveBridge.tsx`
- `src/experience/common/CommonEvening/CommonEvening.tsx`
- `src/experience/integration/buildCommonEveningModel.ts`

`CommonMorning`은 한 번만 실행한다.

`PerspectiveBridge`는 역할 하나가 끝난 뒤 같은 하루의 다른 관점으로 넘어가는 경계다.

`CommonEvening`은 점수표가 아니라 모든 required RoleCompletion을 공동체 하루로 합칠 Integration 지점이다.

### Persistence

- `src/persistence/experienceStorage.ts`

`localStorage` schema version 1.

저장하는 진행:

- Experience phase
- common morning 완료
- completed roles
- role completion results

checkpoint 중심으로 저장한다.

역할 내부 Scene / animation / 임시 UI 상태는 저장하지 않는다.

### Shared UI / styles

- `src/ui/ActionButton/ActionButton.tsx`
- `src/ui/ScreenRegion/ScreenRegion.tsx`
- `src/styles/tokens.css`
- `src/styles/global.css`

기본 44px 터치 영역, keyboard focus, reduced-motion 대응만 포함한다.

최종 아트는 없다.

## ExperiencePlan rule

Production Plan:

```ts
requiredRoles: ['hunt', 'gather', 'camp']
```

현재 기본 configured order는 Hunt → Gather → Camp지만 **순서는 reducer에 하드코딩되어 있지 않다.**

`ExperiencePlan.roleOrderPolicy`를 바꾸면 역할 Feature나 Common reducer를 수정하지 않고 순서를 변경할 수 있다.

테스트에서 Gather → Camp → Hunt 순서를 검증했다.

학생의 실제 플레이 순서가 역할 안의 `DayMoment` 또는 역사 속 시간의 다음 시점을 결정해서는 안 된다.

## Architecture boundaries — do not break

1. Common Shell / reducer에 Hunt-specific action을 추가하지 않는다.
2. Hunt / Gather / Camp끼리 직접 import하지 않는다.
3. Role Feature → ExperienceOrchestrator 역방향 import를 만들지 않는다.
4. Shared UI가 특정 Role을 알게 하지 않는다.
5. 역할 내부 Scene / minigame 상태를 `ExperienceState`로 올리지 않는다.
6. Hunt의 플레이 리듬을 범용 Scene Engine으로 만들지 않는다.
7. Gather / Camp를 Hunt 구조 복사본으로 시작하지 않는다.
8. RoleCompletion 기본 계약에 score / HP / EXP / ranking을 넣지 않는다.
9. Common Evening을 역할 수치를 나란히 보여주는 결과표로 만들지 않는다.
10. 플레이 순서와 같은 하루의 역사적 시간을 연결하지 않는다.

## Tests to preserve

### `tests/unit/experienceReducer.test.ts`

- start → common morning → role entry
- qualitative role completion 저장
- duplicate role completion 방지
- 세 required role 완료 판정
- configured role order 변경
- reset

### `tests/unit/experienceStorage.test.ts`

- 같은 plan의 checkpoint round-trip
- 잘못된 저장 데이터 안전 무시

### `tests/unit/HuntFeature.test.tsx`

- Hunt placeholder가 공통 RoleCompletion 반환
- score / hp / xp가 기본 결과에 없음

### `tests/integration/ExperienceOrchestrator.test.tsx`

- App 렌더
- CommonMorning 한 번
- 세 역할 진입 및 completion 반환
- PerspectiveBridge
- 세 역할 결과 → CommonEvening
- 역할 순서 변경

## Current placeholders

다음은 의도적으로 미구현 상태다.

- Hunt 출발 / 흔적 탐색 / 발견 / 사냥 시도 / 추적 / 위험 / 귀환
- Gather 실제 STORY / PLAYFLOW
- Camp 실제 STORY / PLAYFLOW
- Perspective Bridge 최종 텍스트 / 연출
- Common Evening 실제 내러티브 Integration
- 며칠 변화
- 이동 / 새 거처
- 최종 이미지 / 사운드

## Known issues

현재 Stage 07 완료를 막는 알려진 코드 문제는 없다.

첫 CI에서 Node 22에 포함된 npm 10.9.8의 Arborist `edgesOut` 내부 오류로 dependency install이 실패했지만, Node 24 / npm 11로 변경한 뒤 동일 프로젝트 install/typecheck/test/build가 모두 성공했다.

재발 방지를 위해 `.nvmrc`, `package.json.engines`, `package.json.packageManager`로 개발 런타임을 명시했다.

## Next task

**Stage 08-A — 사냥 Vertical Slice 전반 구현.**

범위:

```text
공통 아침
→ Hunt RoleEntry
→ 출발
→ 흔적 탐색
→ 발견
→ 사냥 시도
```

Common Morning은 Stage 07 공통 컴포넌트를 유지하고, Hunt 고유 상태와 상호작용은 `src/roles/hunt/` 내부에서 구현한다.

Stage 08-B 범위인 추적 판단 / 자연 위험 / 성공·실패 / 귀환 / 최종 Common Evening까지 임의로 확장하지 않는다.

## Read first in the next session

다음 새 Stage 08-A 세션은 순서대로 읽는다.

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/02_EXPERIENCE_STRUCTURE.md`
7. `docs/03_HUNT_STORY.md`
8. `docs/04_HUNT_PLAYFLOW.md`
9. `docs/05_ROLE_EXPERIENCE_MAP.md`
10. `docs/06_TECH_BLUEPRINT.md`
11. `src/experience/contracts/role.ts`
12. `src/experience/experiencePlans.ts`
13. `src/experience/experienceReducer.ts`
14. `src/experience/ExperienceOrchestrator.tsx`
15. `src/roles/registry.ts`
16. `src/roles/hunt/HuntFeature.tsx`
17. Stage 07 tests

## Stage 08-A first implementation rule

Hunt를 구현하기 전에 `docs/04_HUNT_PLAYFLOW.md`의 Stage 08-A 범위를 Hunt Feature 내부 상태/화면/상호작용 단위로 매핑하되, 그 매핑을 Common reducer나 Gather / Camp 계약으로 승격하지 않는다.
