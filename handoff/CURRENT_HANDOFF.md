# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 01~07 Curriculum Hardening 완료 / 34 tests PASS / Teacher Browser Immersion·Curriculum·Misconception QA 대기**

이번 세션은 PR #13 이후 남은 교과 의미 오류와 proof 빈칸을 보완했다.

핵심 교과 문법:

# **Experience → Name → Reuse → Connect**

추가 정확성 규칙:

# **Category → Representative Example**

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

`뗀석기`와 `주먹도끼`를 동의어처럼 병렬 표시하지 않는다.

---

# 1. 가장 먼저 읽을 최신 문서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/01_PROJECT_CORE.md`
4. `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md` — **v2**
5. `docs/06_TECH_BLUEPRINT.md` — v7
6. `docs/06A_CURRICULUM_RUNTIME_CONTRACT.md` — **v1 NEW / 06 v7 curriculum 예시 보완**
7. `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`
8. 해당 Stage STORY/PLAYFLOW

---

# 2. 이번에 발견/수정한 핵심 문제

## A. 뗀석기 / 주먹도끼 관계

이전:

```text
뗀석기 · 주먹도끼
```

문제:

두 용어가 같은 말처럼 읽힐 수 있음.

현재:

```text
뗀석기
돌을 깨뜨리거나 떼어 만든 도구.
지금 손에 든 것은 그 대표적인 예인 주먹도끼.
```

Debug evidence도 분리:

- `chipped-stone-term-revealed`
- `handaxe-term-revealed`

## B. 현재 거처 존재감

이전 Stage 07은 cave가 강하게 보이지만 현재 공동체 거처의 시각 존재감이 약했다.

현재:

- 새벽 불 근처에 current temporary shelter proof
- 출발 때 불/사람/임시 거처가 함께 멀어짐
- cave 발견 전에 이미 다른 생활 공간이 존재함을 체감

목적:

`구석기 사람 = 동굴 생활만 함` 오개념 방지.

## C. Cave cue

이전:

cave cue에서 아직 직접 배우지 않은 `막집`을 비교 설명.

현재:

```text
동굴 / 바위 그늘
구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.
```

`막집`은 Camp에서 실제 임시 거처를 보고/손질한 뒤 명명하는 것을 우선.

## D. 사실 / 재구성

교과서가 뒷받침:

- 동굴/바위 그늘 생활.

프로젝트 재구성:

- 오늘 H1/H2와 이동하다 특정 거처 후보를 발견한 사건.

Teacher/Debug에서:

```text
역사적 재구성: 이 날 이 사람들이 이 거처 후보를 발견하는 구체 사건
```

을 확인 가능.

---

# 3. Stage 07 현재 Player flow

```text
사냥을 나선 사람의 관점
→ 새벽 불 + 현재 임시 거처
→ R에게 돌도구를 받음
→ 뗀석기 명명
→ 지금 손의 대표적 예 = 주먹도끼
→ held-tool continuity
→ H1/H2와 출발
→ 현재 거처가 멀어짐
→ 몸 낮춰 지면 관찰
→ 한동안 더 이동
→ 큰 바위 아래 자연 공간 발견
→ 가까이 가 입구/바닥/어둠/불확실성 확인
→ 동굴 / 바위 그늘 명명
→ 장소와 길 기억
→ 같은 날 다른 사람 관점 proof
```

Stage 07은 전체 Hunt가 아니다.

---

# 4. 자동 검증

PR #14 implementation head run:

# **32913702140 — PASS**

- Node 24.19.0
- npm 11.17.0
- install PASS
- typecheck PASS
- **8 test files / 34 tests PASS**
- production build PASS

`R2EmbodiedSkeleton.test.tsx`: **9 tests**

추가 coverage:

- current temporary shelter before cave
- chipped-stone category / handaxe example hierarchy
- dual internal curriculum anchors
- no premature `막집` in cave cue
- Teacher reconstruction marker
- Debug curriculum/reconstruction evidence

---

# 5. 개발 URL

- Player: `http://localhost:5173/`
- Teacher: `http://localhost:5173/?teacher=1`
- Debug: `http://localhost:5173/?debug=1`
- Legacy Hunt: `http://localhost:5173/?legacy=1`

---

# 6. 다음 공식 작업

# **Stage 07 Human Visual / Immersion / Curriculum / Misconception QA**

반드시 확인:

- 현재 임시 거처가 `집 아이콘`처럼 보이지 않고 생활 공간 proof로 읽히는가
- 손/도구/NPC 공간감
- `뗀석기 → 주먹도끼`가 실제 학생에게 이해되는가
- terminology cue가 몰입을 과하게 깨지 않는가
- cave가 설명 카드가 아니라 발견한 공간처럼 보이는가
- 동굴을 유일한 거처로 오해하지 않는가
- Teacher가 fact/reconstruction을 구분할 수 있는가
- reduced-effects parity

프로토콜:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

---

# 7. 의도적으로 Stage 07에서 완료하지 않은 것

다음을 아직 완료라고 부르지 않는다.

- 주먹도끼 실제 땅파기/두들기기/자르기
- 반복 사용으로 다용도성 체감
- 막집 정식 명명/거처 손질
- 불의 여러 기능 실제 체험
- cave discovery의 실제 consequence
- Camp의 cave 재평가
- 전체 Hunt embodied vertical slice

이 항목은 Stage 08 이후 책임이다.

---

# 8. 다음 개발 Guardrail

- `주먹도끼 = 사냥 무기`로 축소 금지.
- `뗀석기 = 주먹도끼` 동의어 처리 금지.
- `동굴 = 구석기의 집` 단일 정답화 금지.
- cave 발견 즉시 이사 확정 금지.
- 구체 R/H1/H2 사건을 실제 기록으로 표현 금지.
- curriculum cue를 위협/감정 climax 위에 덮지 않음.
- generic curriculum/item/shelter engine을 만들지 않음.
