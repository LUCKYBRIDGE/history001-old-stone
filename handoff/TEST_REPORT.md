# TEST_REPORT.md

## Scope

Stage 08-A — 사냥 Vertical Slice 전반 구현 검증.

검증 대상:

- dependency install
- TypeScript typecheck
- 기존 Stage 07 architecture guardrails
- Hunt 내부 reducer 진행
- Hunt 실제 UI interaction
- Hunt 조기 RoleCompletion 방지
- Vite production build

---

## Environment

GitHub Actions Ubuntu runner:

- OS: Ubuntu 24.04.4 LTS
- Node.js: 24.19.0
- npm: 11.17.0
- Vite: 8.2.2
- Vitest: 4.1.10
- Workflow: `.github/workflows/ci.yml` (`Project CI`)
- Final successful run: `32671722477`
- `.nvmrc`: Node 24
- `package.json` engines: Node >= 24 / npm >= 11

---

## Commands

```bash
npm install --no-audit --no-fund
npm run typecheck
npm test
npm run build
```

---

## Results

### dependency install

**PASS**

- 106 packages installed

### typecheck

**PASS**

```bash
tsc --noEmit
```

### tests

**PASS**

- Test files: 5 passed / 5
- Tests: 17 passed / 17

Breakdown:

- `tests/unit/experienceReducer.test.ts` — 6
- `tests/unit/experienceStorage.test.ts` — 2
- `tests/unit/huntReducer.test.ts` — 4
- `tests/unit/HuntFeature.test.tsx` — 2
- `tests/integration/ExperienceOrchestrator.test.tsx` — 3

### production build

**PASS**

```bash
tsc --noEmit && vite build
```

Vite result:

- Vite 8.2.2
- 37 modules transformed
- `dist/index.html` generated
- CSS/JS bundles generated

---

## Stage 08-A behavior verification

### PASS — Hunt state remains role-internal

- `huntReducer` exists under `src/roles/hunt/`
- Common `experienceReducer` unchanged in gameplay responsibility
- Common reducer has no Hunt clue/approach/attempt events

### PASS — departure

- 공동체의 여러 일 중 사냥 역할로 출발
- `“해가 지기 전에 돌아와.”` 모티프 존재

### PASS — clue search direct interaction

- 학생이 주변 지점을 직접 관찰
- 단서가 없는 지점도 neutral observation으로 처리
- 오답 counter 없음
- 제한시간 없음
- GAME OVER 없음

### PASS — clue judgment

- 최소 관찰 전에는 다음 단계로 이동하지 않음
- 실제 찾은 단서만 선택 가능
- 정답/오답 UI 없음

### PASS — discovery / approach judgment

- 발견과 성공을 분리
- 기다림 / 접근 / 현재 조건 시도 준비의 세 판단 제공
- 각 선택을 점수나 평가 문구로 채점하지 않음

### PASS — hunt attempt direct interaction

- 학생이 실제 사냥 시도를 실행
- 조작 성공을 곧바로 최종 사냥 성공으로 만들지 않음
- 접근 판단에 따라 서로 다른 질적 상황으로 이어짐

### PASS — Stage 08-A boundary

- 첫 사냥 시도 후 `stage-08a-checkpoint`
- `HuntFeature`가 `onComplete`를 호출하지 않음
- Stage 08-B의 추적·위험·귀환을 건너뛰지 않음

### PASS — prohibited systems absent

자동 UI 테스트에서 다음이 나타나지 않음을 확인:

- 점수
- HP
- EXP
- 랭킹
- GAME OVER

범용 Scene Engine도 추가하지 않았다.

---

## Existing architecture verification

### PASS — Common Shell / Role Feature separation

- Hunt / Gather / Camp 독립
- 역할 간 직접 import 없음
- Role Feature → ExperienceOrchestrator 역방향 import 없음

### PASS — Role order remains configurable

- `ExperiencePlan.roleOrderPolicy` 유지
- 기존 reorder test 통과

### PASS — Common Morning / Perspective Bridge / Common Evening guardrails

- 기존 integration tests 전부 통과
- Common Morning 단일 실행 구조 유지
- Common Evening score table 없음

### PASS — localStorage guardrail

- 기존 checkpoint round-trip / malformed data tests 통과
- Hunt 중간 scene state를 공통 persistence에 억지로 올리지 않음

---

## Prior environment issue retained for reference

Stage 07 첫 CI에서 Node 22 / npm 10.9.8의 npm Arborist `edgesOut` 내부 오류가 있었고, Node 24 / npm 11로 변경한 뒤 해결됐다.

현재 `.nvmrc`, `package.json.engines`, `packageManager` 설정은 그대로 유지한다.

---

## Final verdict

**Stage 08-A: PASS**

운영 문서와 package version(`0.0.0-stage08a`), CI 표시명(`Project CI`)까지 반영된 커밋을 GitHub Actions run `32671722477`에서 검증했다.

- install: PASS
- typecheck: PASS
- 5 test files / 17 tests: PASS
- production build: PASS

Stage 08-A의 구현 및 자동 검증 대상은 충족했다. 실제 Hunt 후반부와 최종 RoleCompletion은 의도적으로 Stage 08-B에 남겨 두었다.
