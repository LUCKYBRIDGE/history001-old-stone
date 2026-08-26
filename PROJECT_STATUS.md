# PROJECT_STATUS.md

## Current phase

# **R2 Stage 01~07 Curriculum Hardening 완료 / 자동검증 PASS / Teacher Browser Immersion·Curriculum QA 대기**

Stage 01~07 Curriculum Anchor Revision 이후 남아 있던 오개념 위험과 구현/문서 불일치를 다시 감사하고 보완했다.

핵심 방향은 유지한다.

# **Experience → Name → Reuse → Connect**

다만 이제 정확성 규칙을 더 강하게 적용한다.

- `뗀석기` = 상위 도구 개념
- `주먹도끼` = 대표적인 구체 예
- `동굴/바위 그늘` = 생활 공간의 한 형태
- `막집` = 또 다른 임시 거처 형태
- 구체 R/H1/H2 사건 = 역사적 조건 안의 재구성

---

# 현재 판정

- Stage 01 Project Core: **PASS / v8**
- Stage 01E Curriculum/Textbook Anchors: **PASS / HARDENED to v2**
- Stage 02 Experience Structure: **PASS / v8**
- Stage 03 Hunt Story: **PASS / v7**
- Stage 04 Hunt Playflow: **PASS / v7**
- Stage 05 Role Experience Map: **PASS / v7**
- Stage 06 Technical Blueprint: **PASS / v7**
- Stage 06A Curriculum Runtime Correction Contract: **NEW / v1**
- Immersion Narrative Bible: **PASS / v6**
- Stage 07 Skeleton: **IMPLEMENTED / MISCONCEPTION GUARDS HARDENED**
- Stage 07 automated verification: **PASS**
- Stage 07 human visual/immersion/curriculum QA: **NOT YET PERFORMED**
- Legacy Hunt v0.1: **preserved for regression comparison**

---

# 이번 감사에서 실제로 발견한 부족한 점

1. `뗀석기 · 주먹도끼` 병렬 표기가 두 용어를 동의어처럼 읽히게 할 수 있었음.
2. Stage 07에서 cave가 보이기 전에 현재 공동체 거처의 시각/서사 존재감이 약했음.
3. cave cue가 아직 직접 배우지 않은 `막집`을 비교 설명으로 끌어왔음.
4. `오늘 이 사람들이 특정 동굴 후보를 발견했다`는 재구성 사건과 교과서 사실의 구분이 Teacher surface에서 약했음.
5. Stage 06 v7 예시가 단일 `anchorId: handaxe` 모델을 사용해 최신 상·하위 개념 관계와 충돌했음.
6. human QA가 몰입 여부는 봤지만 핵심 오개념을 직접 묻는 Gate가 부족했음.

---

# 이번에 보완한 것

## Stage 01E v2

추가:

- Source Fidelity Matrix
- `뗀석기 → 대표적인 예: 주먹도끼` 계층 규칙
- Terminology Reveal Budget
- 막집/동굴 오개념 Guardrail
- Fact / Reconstruction 구분
- Misconception QA

## Stage 06A v1

`docs/06_TECH_BLUEPRINT.md` v7의 curriculum runtime 예시를 보완한다.

핵심:

```text
anchorIds: [paleolithic-chipped-stone, handaxe]
```

- 상위 개념과 구체 예를 동시에 내부 추적 가능
- student-facing internal ID 미노출
- `chipped-stone-term-revealed`와 `handaxe-term-revealed` evidence 분리
- 구체 cave discovery reconstruction metadata를 Teacher/Debug에서만 노출

## Stage 07 runtime

현재 기본 흐름:

```text
사냥 관점
→ 새벽 불 + 현재 임시 거처
→ R에게 돌도구를 받음
→ 뗀석기 명명
→ 지금 손의 대표적인 예 = 주먹도끼 연결
→ 같은 주먹도끼 held-item continuity
→ H1/H2와 출발
→ 현재 임시 거처가 뒤로 멀어짐
→ 몸 낮춰 관찰
→ 한동안 더 이동
→ 큰 바위 아래 자연 공간 발견
→ 가까이 가 장점/불확실성 확인
→ 동굴 / 바위 그늘 명명
→ 장소와 길 기억
→ 다른 관점 proof
```

동굴 cue는 더 이상 아직 배우지 않은 `막집`을 끌어와 비교하지 않는다.

Teacher/Debug에서는:

> `역사적 재구성: 이 날 이 사람들이 이 거처 후보를 발견하는 구체 사건`

을 확인할 수 있다.

---

# 교과서 기반 Anchor

사용자가 제공한 5학년 사회 교과서 구석기 부분을 기준으로 유지한다.

- 뗀석기
- 주먹도끼
- 불의 이용
- 막집
- 동굴 / 바위 그늘 생활
- 먹을 것을 찾아 옮겨 다니는 생활
- 사냥·채집·생활 가공

주의:

- 주먹도끼를 사냥 전용 무기로 축소하지 않음.
- 모든 뗀석기를 주먹도끼라고 하지 않음.
- 동굴을 구석기의 유일한 집으로 만들지 않음.
- 막집을 구석기의 유일한 집으로 만들지 않음.
- cave 발견 즉시 이사하는 서사를 정답처럼 만들지 않음.

---

# 자동 검증

PR #14 implementation head:

- run: **32913702140**
- Node: 24.19.0
- npm: 11.17.0
- install: PASS
- typecheck: PASS
- test files: **8 / 8 PASS**
- tests: **34 / 34 PASS**
- production build: PASS

Stage 07 Skeleton integration tests: **9 tests**

새로 직접 잠근 계약:

- cave 발견 전 현재 임시 거처 존재
- 뗀석기 상위 개념 / 주먹도끼 대표 예 관계
- 두 curriculum anchor 내부 연결
- held-tool continuity
- cave까지 이동 거리감
- cave를 정답 문제로 만들지 않음
- cave cue에서 막집 조기 설명 금지
- Teacher에서 재구성 사건 표시
- Debug evidence / anchor 분리

---

# 자동 검증이 아직 증명하지 않는 것

- 손/팔/주먹도끼 비율이 실제 시야처럼 자연스러운가
- 현재 임시 거처 silhouette가 역사적으로/시각적으로 납득되는가
- 뗀석기 → 주먹도끼 cue가 몰입을 얼마나 끊는가
- cave가 넓고 보호 가능한 실제 공간처럼 느껴지는가
- 학생이 두 용어의 관계를 실제로 이해하는가
- 학생이 구석기 주거 형태를 하나로 고정해서 오해하지 않는가
- Teacher가 사실/재구성 구분을 충분히 이해하는가

이 항목은 Human Gate 책임이다.

---

# 다음 공식 Gate

# **R2 Stage 07 — Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

필수 확인:

1. 첫 화면 역할 진입
2. body/item spatial relation
3. R/H1/H2 존재감
4. 현재 임시 거처 존재감
5. `뗀석기 → 주먹도끼` 계층 이해
6. cue가 몰입을 과하게 깨지 않는지
7. cave discovery의 거리/발견감
8. cave 장점과 불확실성
9. `동굴/바위 그늘` cue timing
10. fact / reconstruction 구분
11. reduced effects parity
12. 주요 오개념 없음

기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

Stage 07 human Gate 통과 전 Stage 08 전체 Hunt 확장을 시작하지 않는다.

---

# 의도적으로 아직 미완성인 것

- 주먹도끼의 실제 땅파기/두들기기/자르기 interaction
- 반복 사용 뒤 다용도성 체감
- Camp에서 막집 정식 명명과 거처 손질
- 불의 여러 기능을 실제 생활 행동으로 체험
- cave 발견이 후속 선택/위험/귀환에 남기는 consequence
- Camp에서 같은 cave 정보를 다른 입장에서 재평가
- Stage 08 Hunt Embodied Vertical Slice
- Stage 09 Teacher Immersion QA
- Stage 10 Student Pilot
- Gather / Camp / Three-Perspective Integration
- Multi-day Change / Migration / Historical Conceptualization
- final Player Body / Cast / visual / audio production
