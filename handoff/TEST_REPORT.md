# TEST_REPORT.md

## Current scope

# **R2 Canonical Baseline + Stage 07 Curriculum-Hardened Browser Proof Verification**

Canonical Unification PR:

- PR #15 — `Unify R2 canonical baseline and Stage 07 contracts`
- status: **MERGED**
- integrated SHA: `e40208b0d6e8fbf3a2949af2ef1fbaf6704b6849`

---

# 1. Canonical / Runtime 범위

## Canonical

- `docs/00_CANONICAL_BASELINE.md` 기준선
- Stage 01 Project Core v9
- Stage 01E Curriculum Anchors v3
- Stage 02 v9
- Stage 03 v8
- Stage 04 v8
- Stage 05 v8
- Stage 05A v6
- Stage 06 v8 — **single tech SSOT**
- 이전 `06A` supplement는 Stage 06 v8에 흡수 후 삭제
- Immersion Bible v7
- Legacy/Audit 문서는 non-canonical

## Runtime

- package `0.0.0-r2-stage07-curriculum-hardened`
- embodied first-person Stage 07 skeleton
- current temporary shelter primitive
- `뗀석기 → 대표적인 예: 주먹도끼` terminology hierarchy
- held-item continuity
- cave / rock-shelter discovery and inspection proof
- Player / Teacher / Debug separation
- Teacher/Debug reconstruction metadata
- reduced-effects path

---

# 2. 최종 통합 검증

`main` exact SHA:

```text
e40208b0d6e8fbf3a2949af2ef1fbaf6704b6849
```

GitHub Actions:

# **run `32926565326` — completed / success**

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

---

# 3. Stage 07 자동 coverage

현재 integration suite가 다음 계약을 검증한다.

1. Player role-true entry / no dev chrome.
2. Player에 reconstruction management metadata 없음.
3. cave 전 current temporary shelter 존재.
4. current shelter가 비대칭 임시 구조 primitive를 사용.
5. 도구 handoff 뒤에만 terminology reveal.
6. `뗀석기` = 상위 개념 / `주먹도끼` = 대표적인 예.
7. 두 curriculum anchor 내부 연결.
8. chipped-stone / handaxe evidence 분리.
9. handaxe held-item continuity.
10. departure에서 current shelter가 distant state로 전환.
11. embodied observation 뒤 natural shelter discovery.
12. cave가 정답 문제로 변하지 않음.
13. inspect 뒤에만 `동굴 / 바위 그늘` cue.
14. cave cue에 아직 경험하지 않은 `막집` 조기 설명 없음.
15. cave의 장점과 불확실성을 함께 제시.
16. perspective transition 뒤 Hunt held item 제거.
17. Teacher reduced-effects에서도 curriculum content 유지.
18. Teacher가 공동체 배치 / tool handoff / cave discovery reconstruction을 구분 가능.
19. Debug에서 exact anchor/evidence/reconstruction metadata 노출.

한 test가 여러 계약을 함께 확인하므로 항목 수와 test count는 동일하지 않다.

---

# 4. Same-Day regression

- **Student Play Order ≠ In-World Time**
- Hunt/Gather/Camp 동일 `dayId`
- Common Morning once
- Perspective Bridge
- Common Evening integration

---

# 5. Legacy regression

Legacy Hunt v0.1 기준선도 유지된다.

- Hunt reducer front/back contracts
- food-secured / empty-handed completion
- firelight 이후 Perspective Bridge
- qualitative result
- storage baseline
- score / HP / EXP / ranking 없음

---

# 6. 자동검증이 증명하는 것

- repository 설치 가능
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
- legacy Hunt regression
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

이 항목은 Human QA가 책임진다.

---

# 8. Current verdict

### Canonical baseline

# **INTEGRATED / PASS**

### Stage 07 implementation

# **IMPLEMENTATION COMPLETE**

### Automated verification

# **PASS — main run 32926565326 / 8 files / 35 tests**

### Human visual / immersion / curriculum / misconception QA

# **PENDING**

### Stage 08 authorization

# **BLOCKED UNTIL HUMAN GATE PASSES**

---

# 9. 의도적으로 아직 미완료

- 주먹도끼 실제 땅파기/두들기기/자르기·손질 interaction
- `handaxe-multiple-uses-experienced`
- Camp의 current shelter 생활/손질 + `막집` 정식 명명
- 불의 여러 기능 실제 체험
- 전체 Hunt embodied vertical slice
- cave consequence / Camp recontextualization
- Student Pilot

---

# 10. 보고서 유지 규칙

이 파일은 **가장 최근에 main에 통합되어 검증된 안정 baseline**을 기록한다.

문서 자체를 갱신하면 새 SHA가 생기므로, 갱신 커밋의 exact-head CI와 이후 main push CI는 GitHub 실행 결과와 최종 작업 응답에서 확인한다. 다음 기능 변경 시에는 그 기능 baseline이 main에 통합된 뒤 이 보고서를 교체한다.
