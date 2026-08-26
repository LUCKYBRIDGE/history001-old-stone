# TEST_REPORT.md

## Current scope

# **R2 Curriculum Gap Hardening + Stage 07 misconception/regression verification**

PR:

- PR #14 — `Harden curriculum semantics and Stage 07 misconception guards`

---

# 1. 변경 목적

PR #13 이후 자동 테스트는 통과했지만 교과 의미 측면에서 다음 잔여 위험이 확인됐다.

- `뗀석기 · 주먹도끼`가 동의어처럼 읽힐 수 있음.
- cave가 보이기 전에 현재 공동체의 임시 거처 존재감이 약함.
- cave cue가 아직 직접 배우지 않은 `막집`을 먼저 비교 설명함.
- 교과서 사실과 특정 날 cave discovery 재구성 사건의 Teacher 구분이 약함.
- Stage 06 v7 단일 `anchorId` 예시가 최신 계층 관계와 충돌.

---

# 2. 구현/계약 변경

## Curriculum hierarchy

Student cue:

```text
뗀석기
돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다.
지금 손에 든 것은 그 대표적인 예인 주먹도끼다.
```

Internal anchors:

```text
paleolithic-chipped-stone
handaxe
```

Evidence:

- `tool-received-in-embodied-context`
- `chipped-stone-term-revealed`
- `handaxe-term-revealed`

## Current shelter proof

- cave 발견 전에 현재 임시 거처 visual proof 존재.
- 출발 시 현재 거처가 함께 멀어짐.

## Cave cue

Student:

```text
동굴 / 바위 그늘
구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.
```

아직 직접 명명하지 않은 `막집`을 cave cue에 넣지 않는다.

## Reconstruction metadata

Teacher/Debug only:

```text
역사적 재구성: 이 날 이 사람들이 이 거처 후보를 발견하는 구체 사건
```

## Technical supplement

- `docs/06A_CURRICULUM_RUNTIME_CONTRACT.md` NEW
- Stage 06 v7 curriculum example 중 충돌 부분을 보완.

---

# 3. GitHub Actions verification

Implementation head:

# **run `32913702140` — PASS**

환경:

- Node: **24.19.0**
- npm: **11.17.0**

Steps:

- Install dependencies — PASS
- Typecheck — PASS
- Test — PASS
- Production build — PASS

Vitest:

# **8 test files / 34 tests PASS**

구성:

- `huntReducer.test.ts` — 8
- `R2EmbodiedSkeleton.test.tsx` — **9**
- `HuntFeature.test.tsx` — 3
- `ExperienceOrchestrator.test.tsx` — 3
- `experienceReducer.test.ts` — 6
- `buildHuntCompletion.test.ts` — 2
- `HuntVerticalSlice.test.tsx` — 1
- `experienceStorage.test.ts` — 2

Production build:

- Vite 8.2.2
- 40 modules transformed
- build PASS

---

# 4. Stage 07 integration coverage

현재 9개 integration test가 다음을 검증한다.

1. Player role-true entry / no dev chrome.
2. cave보다 먼저 current temporary shelter가 존재.
3. 도구를 받은 뒤에만 terminology reveal.
4. `뗀석기`가 상위 개념, `주먹도끼`가 대표적인 예로 설명됨.
5. 두 curriculum anchor가 내부적으로 모두 연결됨.
6. handaxe held-item continuity.
7. embodied observation 뒤 cave discovery로 이동.
8. cave가 정답 문제로 변하지 않음.
9. cave를 살핀 뒤에만 `동굴 / 바위 그늘` 용어 cue 노출.
10. cave cue가 `막집`을 조기 설명하지 않음.
11. cave 장점과 불확실성을 함께 제시.
12. perspective transition 뒤 Hunt held item 제거.
13. Teacher reduced effects에서도 curriculum content 유지.
14. Teacher에서 구체 cave discovery를 reconstruction으로 표시.
15. Debug에서 exact anchor/evidence/reconstruction metadata만 노출.

한 테스트가 여러 계약을 함께 확인하므로 항목 수와 test count는 동일하지 않다.

---

# 5. Legacy regression

기존 Hunt v0.1 기준선도 유지된다.

- Hunt reducer front/back contract PASS
- food-secured / empty-handed completion PASS
- firelight 이후 Perspective Bridge PASS
- same-day `dayId` integration PASS
- storage PASS
- score / HP / EXP / ranking 없음

---

# 6. 자동 검증이 증명하는 것

- TypeScript 정합성
- Student cue hierarchy 문구가 기대대로 렌더링됨
- cave 전 current shelter proof 존재
- held-item continuity
- cave discovery/inspection progression
- cave cue timing
- no premature `막집` in cave cue
- Teacher reconstruction marker
- reduced effects path
- Player/Teacher/Debug separation
- Legacy regression
- production build

---

# 7. 자동 검증이 증명하지 않는 것

- current shelter shape가 실제로 막집/임시 거처처럼 자연스러운가
- current shelter가 현대 `집 아이콘`처럼 보이지 않는가
- 손/팔/주먹도끼 비율이 실제 1인칭 시야처럼 자연스러운가
- `뗀석기 → 주먹도끼` cue가 몰입을 얼마나 깨는가
- 학생이 상·하위 관계를 실제로 이해하는가
- 학생이 주먹도끼를 사냥 전용 무기로 오해하지 않는가
- cave가 넓고 보호 가능한 자연 공간처럼 느껴지는가
- 학생이 동굴을 유일한 구석기 거처로 오해하지 않는가
- Teacher가 교과서 사실과 재구성 사건을 충분히 구분하는가

이 항목은 Stage 07 Human QA가 책임진다.

---

# 8. Current verdict

### Curriculum semantic hardening

# **PASS / IMPLEMENTED**

### Automated verification

# **PASS — run 32913702140 / 8 files / 34 tests**

### Human visual / immersion / curriculum / misconception QA

# **PENDING**

### Stage 08 authorization

# **BLOCKED UNTIL HUMAN GATE PASSES**

---

# 9. 의도적으로 아직 evidence를 만들지 않은 것

다음은 Stage 07 완료 범위가 아니다.

- 실제 땅파기/두들기기/자르기 interaction
- `handaxe-multiple-uses-experienced`
- 막집 정식 명명/손질
- 불의 여러 기능 실제 체험
- cave consequence / Camp recontextualization

이 항목을 현재 자동 테스트 PASS를 근거로 완료라고 주장하지 않는다.
