# TEST_REPORT.md

## Current scope

# **R2 Canonical Unification + Stage 07 curriculum-hardened browser proof verification**

Primary integration PR:

- PR #15 — `Unify R2 canonical baseline and Stage 07 contracts`

---

# 1. 검증한 변경 범위

## Canonical

- `docs/00_CANONICAL_BASELINE.md` 신설
- AGENTS / README / workflow 기준 통일
- Stage 01 Project Core v9
- Stage 01E v3
- Stage 02 v9
- Stage 03 v8
- Stage 04 v8
- Stage 05 v8
- Stage 05A v6
- Stage 06 v8 단일 기술 SSOT
- Stage 06A supplement 삭제 / Stage 06 v8에 흡수
- Immersion Bible v7
- Legacy/Audit 문서 non-canonical 지위 명확화

## Runtime

- package `0.0.0-r2-stage07-curriculum-hardened`
- current shelter를 비대칭 임시 구조물 CSS proof로 변경
- Teacher reconstruction note 범위 통일
- Player reconstruction metadata 미노출 유지

## Tests

- current shelter primitive 구조/거리 state
- Player reconstruction metadata 미노출
- Teacher의 community/tool handoff/cave reconstruction 경계
- 기존 curriculum hierarchy / same-day / legacy regression

---

# 2. Canonical/runtime exact-head verification

GitHub Actions:

# **run `32926520525` — PASS**

검증한 exact PR head:

```text
e40208b0d6e8fbf3a2949af2ef1fbaf6704b6849
```

이 head는 PR #15에서 그대로 main으로 fast-forward되었고 별도 merge content가 생성되지 않았다.

환경:

- Node: **24.19.0**
- npm: **11.17.0**

Steps:

- Install dependencies — PASS
- Typecheck — PASS
- Test — PASS
- Production build — PASS

Vitest:

# **8 test files / 35 tests PASS**

구성:

- `huntReducer.test.ts` — 8
- `R2EmbodiedSkeleton.test.tsx` — **10**
- `HuntFeature.test.tsx` — 3
- `ExperienceOrchestrator.test.tsx` — 3
- `experienceReducer.test.ts` — 6
- `buildHuntCompletion.test.ts` — 2
- `HuntVerticalSlice.test.tsx` — 1
- `experienceStorage.test.ts` — 2

Production build:

- Vite 8.2.2
- **41 modules transformed**
- build PASS

참고:

- 앞선 consolidated run `32926349166`도 동일 기능 범위에서 PASS.
- PR #15 main fast-forward 뒤 main push CI도 PASS가 확인됐다.
- 이 정적 보고서 이후 상태 문구만 최종화하는 docs-only commit은 저장소 정상 CI를 별도로 거친다.
- 최신 exact main SHA/run은 GitHub repository/Actions 상태가 최종 기준이며, run ID를 이 파일에 계속 다시 쓰는 recursive docs-only CI loop는 만들지 않는다.

---

# 3. Stage 07 integration coverage

현재 suite가 다음 계약을 검증한다.

1. Player role-true entry / no dev chrome.
2. Player에 reconstruction management metadata 없음.
3. cave 전 current temporary shelter 존재.
4. shelter가 비대칭 cover/poles/opening primitive를 사용.
5. 도구 handoff 뒤에만 terminology reveal.
6. `뗀석기` = 상위 개념 / `주먹도끼` = 대표적인 예.
7. 두 curriculum anchor 내부 연결.
8. chipped-stone/handaxe evidence 분리.
9. handaxe held-item continuity.
10. departure에서 current shelter distant state.
11. embodied observation 뒤 natural shelter discovery.
12. cave가 정답 문제로 변하지 않음.
13. inspect 뒤에만 `동굴 / 바위 그늘` cue.
14. cave cue에 `막집` 조기 설명 없음.
15. cave 장점과 불확실성을 함께 제시.
16. perspective transition 뒤 Hunt held item 제거.
17. Teacher reduced-effects에서도 curriculum content 유지.
18. Teacher가 공동체 배치 / tool handoff / cave discovery reconstruction을 구분.
19. Debug에서 exact anchor/evidence/reconstruction metadata 노출.

한 test가 여러 계약을 함께 확인하므로 항목 수와 test count는 동일하지 않다.

---

# 4. Same-Day regression

- Student Play Order ≠ In-World Time
- Hunt/Gather/Camp 동일 `dayId`
- Common Morning once
- Perspective Bridge
- Common Evening integration

모두 유지.

---

# 5. Legacy regression

기존 Hunt v0.1 기준선 유지:

- Hunt reducer front/back contracts
- food-secured / empty-handed completion
- firelight 이후 Perspective Bridge
- qualitative result
- storage baseline
- score / HP / EXP / ranking 없음

---

# 6. 자동검증이 증명하는 것

- TypeScript 정합성
- canonical terminology와 runtime cue 일치
- current shelter markup/state
- tool hierarchy/timing/evidence
- body/held-item state continuity
- cave discovery/inspection progression
- Player/Teacher/Debug separation
- reconstruction metadata separation
- reduced effects path
- same-day regression
- legacy regression
- production build

---

# 7. 자동검증이 증명하지 않는 것

- current shelter가 실제로 현대 집/텐트 아이콘처럼 보이지 않는가
- 손/팔/주먹도끼 비율이 실제 1인칭 시야처럼 자연스러운가
- R/H1/H2가 실제 주변 사람처럼 느껴지는가
- terminology cue가 몰입을 얼마나 끊는가
- 학생이 `뗀석기 → 주먹도끼` 위계를 실제로 이해하는가
- 학생이 주먹도끼를 사냥 전용으로 오해하지 않는가
- cave가 넓고 보호 가능한 자연 공간처럼 느껴지는가
- 학생이 동굴/막집을 단일 정답 거처로 오해하지 않는가
- Teacher가 Fact / Reconstruction을 실제로 충분히 이해하는가

Human QA가 책임진다.

---

# 8. Current verdict

### Canonical unification

# **PASS / INTEGRATED**

### Stage 07 implementation

# **IMPLEMENTATION COMPLETE**

### Automated verification

# **PASS — 8 files / 35 tests on canonical/runtime exact head**

### Human Visual / Immersion / Curriculum / Misconception QA

# **PENDING**

### Stage 08 authorization

# **BLOCKED UNTIL HUMAN GATE PASSES**

---

# 9. 의도적으로 아직 미완료

- 주먹도끼 실제 땅파기/두들기기/자르기·손질 interaction
- `handaxe-multiple-uses-experienced`
- Camp current shelter 생활/손질 + `막집` 정식 명명
- 불의 여러 기능 실제 체험
- 전체 Hunt embodied vertical slice
- cave consequence / Camp recontextualization
- Student Pilot
