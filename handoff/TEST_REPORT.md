# TEST_REPORT.md

## Scope

Stage 08-B — Hunt Vertical Slice v0.1 기능 검증.

검증 대상:

- dependency install
- TypeScript typecheck
- Stage 07/08-A architecture guardrails
- Hunt 추적 판단
- 비전투 자연 위험
- 성공/빈손 질적 결과
- 귀환 판단 / 모티프 / 불빛
- 귀환 완료 후 RoleCompletion
- 실제 Hunt → Perspective Bridge → Common Evening Integration 경계
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
- Stage 08-B implementation successful run: `32677132365`
- `.nvmrc`: Node 24
- `package.json`: `0.0.0-stage08b`
- engines: Node >= 24 / npm >= 11

---

## Commands

```bash
npm install --no-audit --no-fund
npm run typecheck
npm test
npm run build
```

---

## Results — implementation run 32677132365

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

- Test files: 7 passed / 7
- Tests: 25 passed / 25

Breakdown:

- `tests/unit/experienceReducer.test.ts` — 6
- `tests/unit/experienceStorage.test.ts` — 2
- `tests/unit/huntReducer.test.ts` — 8
- `tests/unit/buildHuntCompletion.test.ts` — 2
- `tests/unit/HuntFeature.test.tsx` — 3
- `tests/integration/ExperienceOrchestrator.test.tsx` — 3
- `tests/integration/HuntVerticalSlice.test.tsx` — 1

### production build

**PASS**

```bash
tsc --noEmit && vite build
```

Vite result:

- Vite 8.2.2
- 38 modules transformed
- `dist/index.html` generated
- CSS / JS bundles generated

---

## Stage 08-B behavior verification

### PASS — tracking judgment

- 사냥 시도 직후 역할 완료가 아니라 `tracking-situation`으로 이동
- 학생이 더 추적 / 귀환 고려 / 주변·시간 재확인 가운데 판단
- 더 추적하는 경우 Hunt 내부 거리 부담과 DayMoment 증가
- Common global time에는 영향 없음

### PASS — natural danger is not combat

- 모든 후반 경로에서 자연 위험 신호 경험
- 위험 대응은 함께 움직이기 / 거리 두기 / 안전 방향 살피기
- 위험 대응 선택은 Hunt 성공/실패를 채점하지 않음
- 공격 / 처치 / 적 HP / 전투 점수 구조 없음

### PASS — both outcomes are normal

- `food-secured` 경로 존재
- `empty-handed` 경로 존재
- 두 경로 모두 `hunt-result` 이후 동일한 귀환 구조 사용
- 빈손도 실패 화면이나 GAME OVER가 아님

### PASS — return is part of Hunt completion

- 사냥 결과 뒤 목표가 귀환으로 전환
- return landmark를 선택하기 전에는 귀환 진행 불가
- 잘못된 방향 GAME OVER 없음
- `“해가 지기 전에 돌아와.”` 모티프를 귀환 중 다시 확인
- firelight에서 `돌아왔다.`는 공동체 복귀 확인

### PASS — qualitative RoleCompletion

- `buildHuntCompletion`은 `firelight` 전에는 null
- 결과 / 자연 위험 / 공동체 귀환 / 거리 부담의 SharedSignal 전달
- Hunt 세부 결과는 Hunt-owned `detail`
- score / HP / EXP 기본 필드 없음

### PASS — real integration boundary

`tests/integration/HuntVerticalSlice.test.tsx`가 실제 다음 경로를 검증한다.

```text
Common Morning
→ real HuntFeature
→ firelight
→ Hunt RoleCompletion
→ Perspective Bridge
→ Common Evening
```

Hunt-only development plan에서 Common Evening으로 들어가더라도 Common Evening은 총점/랭킹 결과표가 아니다.

---

## Existing architecture verification

### PASS — Common Shell / Role Feature separation

- Common `experienceReducer`에 Hunt-specific event 없음
- Hunt state는 `src/roles/hunt/` 내부
- Gather / Camp가 Hunt reducer/type을 import하지 않음
- Role Feature가 ExperienceOrchestrator를 import하지 않음

### PASS — role order remains configurable

- 기존 `ExperiencePlan.roleOrderPolicy` 테스트 통과

### PASS — same-day time separation

- Hunt DayMoment는 Hunt 내부 같은 하루 표현
- Hunt 완료 순서가 다른 역할 시작 시간을 변경하지 않음

### PASS — Common Evening Integration boundary

- Hunt는 Perspective Bridge로 복귀
- Common Evening은 Hunt 전용 엔딩이 아님
- Common Shell이 Hunt `detail`을 직접 해석하지 않음

### PASS — prohibited systems absent

- 범용 Scene Engine 없음
- score / HP / EXP / ranking 없음
- 전투 시스템 없음
- 최종 이미지 / 사운드 없음

---

## Runtime note retained

Stage 07 첫 CI의 Node 22 / npm 10.9.8 Arborist `edgesOut` 문제 때문에 프로젝트는 계속 Node 24 / npm 11을 개발 기준으로 유지한다.

---

## Current verdict

**Stage 08-B implementation: PASS**

기능 구현 커밋은 GitHub Actions run `32677132365`에서 install → typecheck → 25 tests → production build를 모두 통과했다.

운영 문서 갱신 커밋을 동일 CI로 다시 검증한 뒤 최종 successful run ID를 이 문서에 기록한다.
