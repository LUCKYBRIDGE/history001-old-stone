# TEST_REPORT.md

## Scope

Stage 07 — 최초 실행 가능한 React + TypeScript 웹앱 골격 검증.

검증 대상:

- dependency install
- TypeScript typecheck
- Vitest unit / integration tests
- Vite production build
- Stage 07 architecture guardrails

## Environment

최종 성공 검증은 GitHub Actions Ubuntu runner에서 수행했다.

- OS: Ubuntu 24.04.4 LTS
- Node.js: 24.19.0
- npm: 11.17.0
- Vite: 8.2.2
- Vitest: 4.1.10
- Workflow: `.github/workflows/ci.yml`
- Successful run ID: `32667498541`

## Commands executed

```bash
npm install --no-audit --no-fund
npm run typecheck
npm test
npm run build
```

## Results

### dependency install

**PASS**

- 106 packages installed

### typecheck

**PASS**

Command:

```bash
npm run typecheck
```

Implementation:

```bash
tsc --noEmit
```

### unit / integration test

**PASS**

- Test files: 4 passed / 4
- Tests: 12 passed / 12

Files:

- `tests/unit/experienceReducer.test.ts` — 6 tests
- `tests/unit/experienceStorage.test.ts` — 2 tests
- `tests/unit/HuntFeature.test.tsx` — 1 test
- `tests/integration/ExperienceOrchestrator.test.tsx` — 3 tests

검증 내용:

1. 앱 렌더링
2. start → Common Morning
3. Common Morning 완료 → Role Entry
4. Role Feature completion 반환
5. completion 상위 ExperienceState 반영
6. Perspective Bridge 진행
7. 역할 순서 변경 가능
8. 세 required role 완료 구분 및 판정
9. 세 RoleCompletion이 Common Evening Integration으로 전달
10. duplicate role completion 방지
11. localStorage checkpoint round-trip / invalid data 안전 무시
12. reset
13. Hunt placeholder result에 score / hp / xp 기본 필드 없음
14. Common Evening이 총점 / 랭킹 결과표로 렌더링되지 않음

### production build

**PASS**

Command:

```bash
npm run build
```

실행 내용:

```bash
tsc --noEmit && vite build
```

결과:

- 34 modules transformed
- `dist/index.html` 생성
- CSS bundle 생성
- JS bundle 생성
- Vite build 완료

## Initial CI failure and correction

첫 CI는 Node 22.23.2 / npm 10.9.8 환경에서 dependency install 도중 npm Arborist 내부 오류로 실패했다.

```text
Cannot read properties of null (reading 'edgesOut')
```

이 시점에는 typecheck / test / build가 실행되지 않았다.

CI 런타임을 Node 24로 변경한 뒤:

- Node 24.19.0
- npm 11.17.0

환경에서 dependency install부터 production build까지 모두 통과했다.

따라서 최종 판정은 성공 런 `32667498541`을 기준으로 한다.

## Architecture verification

### PASS — Common Shell / Role Feature separation

- `src/experience/`와 `src/roles/*` 물리적 분리
- Common reducer에 Hunt-specific event 없음
- Role Feature가 ExperienceOrchestrator를 import하지 않음

### PASS — Role order is configurable

- `ExperiencePlan.roleOrderPolicy`
- 테스트에서 Gather → Camp → Hunt 순서 적용 확인

### PASS — all required roles

- production plan은 Hunt / Gather / Camp 모두 required
- `areAllRequiredRolesCompleted`로 완료 판정

### PASS — same-day time separation

- Experience progress와 `DayMoment` 계약 분리
- 역할 완료 순서가 다음 Role의 역사적 시작 시간을 갱신하는 전역 로직 없음

### PASS — Common Evening Integration boundary

- `RoleCompletion → buildCommonEveningModel → CommonEvening`
- 역할 detail을 Common Shell에서 해석하지 않음
- score table 없음

### PASS — Hunt does not become the engine

- Hunt / Gather / Camp는 각각 별도 Feature component
- Gather / Camp가 Hunt reducer / type / Scene 구조를 import하지 않음
- 범용 Scene Engine 없음

### PASS — UI baseline

- CSS / text placeholder only
- 최종 이미지 / 사운드 없음
- 핵심 버튼 44px 이상
- keyboard focus 표시
- reduced-motion 처리

## Final Stage 07 test verdict

**PASS**

Stage 07 Acceptance Criteria 중 구현 및 자동 검증 대상은 현재 코드/CI에서 충족했다.

실제 Hunt 교육 경험·UX의 품질 검증은 Stage 08/09 범위다.
