# PROJECT_STATUS.md

## Current phase

# **R2 Stage 01~07 Curriculum Anchor Revision 구현 완료 / 자동검증 PASS / Teacher Browser Immersion·Curriculum QA 대기**

최근 추가된 Embodied First-Person / 관계 / 감정 / 공포 / 미세 화면 연출 설계에 사용자가 제공한 5학년 사회 교과서의 구석기 핵심 내용을 자연스럽게 연결하기 위해 Stage 01부터 Stage 07까지 다시 분석·수정했다.

핵심 방향:

# **Experience → Name → Reuse → Connect**

교과 개념을 먼저 설명하는 대신 체험 안에서 먼저 만나고, 핵심 용어를 짧게 짚은 뒤 실제 생활 행동과 후속 관점에서 다시 사용하고, 마지막에 교과서·실제 유물/유적과 연결한다.

---

# 현재 판정

- Stage 01 Project Core: **PASS / REVISED to v8**
- Stage 01E Curriculum/Textbook Anchors: **NEW / v1**
- Stage 02 Experience Structure: **PASS / REVISED to v8**
- Stage 03 Hunt Story: **PASS / REVISED to v7**
- Stage 04 Hunt Playflow: **PASS / REVISED to v7**
- Stage 05 Role Experience Map: **PASS / REVISED to v7**
- Stage 06 Technical Blueprint: **PASS / REVISED to v7**
- Immersion Narrative Bible: **REVISED to v6**
- Stage 07 Skeleton: **IMPLEMENTED / CURRICULUM PROOF EXPANDED**
- Stage 07 automated verification: **PASS**
- Stage 07 human visual/immersion/curriculum QA: **NOT YET PERFORMED**
- Legacy Hunt v0.1: **preserved for development comparison**

---

# 교과서 기준으로 추가된 핵심 Anchor

사용자가 제공한 사회 교과서 구석기 부분을 기준으로 다음을 공식 Curriculum Anchor로 추가했다.

- 뗀석기
- 주먹도끼
- 불의 이용
- 막집
- 동굴 / 바위 그늘 생활
- 먹을 것을 찾아 옮겨 다니는 생활
- 사냥 + 채집 + 생활 가공

구체 R/H1/H2 인물과 특정 날의 사건은 교과서 사실 자체가 아니라 **역사적 조건 안의 재구성 스토리**로 구분한다.

---

# Stage 01 최신 기준

- `docs/01_PROJECT_CORE.md` — **v8**
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — v4
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — v3
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` — v3
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` — v2
- `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md` — **v1 NEW**

학습 흐름:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Naming / Conceptualization
```

핵심 교과 흐름:

```text
Experience
→ Name
→ Reuse
→ Connect
```

---

# Stage 02 — v8

유지:

# **Student Play Order ≠ In-World Time**

추가:

- Curriculum Anchor를 세 역할에 분산
- 한 역할이 교과 설명을 독점하지 않음
- 뗀석기/주먹도끼는 Hunt에서 첫 명명 후 Gather/Camp에서 다른 생활 의미로 재사용 가능
- 동굴 발견은 후속 역할에서 의미를 달리해 회수 가능한 same-day event
- 필수 교과 개념은 특정 분기 하나에 갇히지 않음

---

# Stage 03 — Hunt Story v7

새 핵심 흐름:

```text
새벽 불
→ R과 도구 전달
→ 뗀석기/주먹도끼 짧은 명명
→ 출발
→ 관찰/추적
→ 거리·시간 고민
→ 넓은 동굴/바위 공간 발견 가능
→ 입구/바닥/안쪽/위험을 살핌
→ 위협/공포
→ 다축 결과
→ 귀환
→ 불/재회
```

동굴은 자동 `새 집`이 아니다.

- 넓음
- 비바람을 피할 가능성
- 마른 바닥

같은 장점과

- 어두운 안쪽
- 다른 동물 흔적 가능성
- 물/먹을거리 거리 미확인

같은 불확실성을 함께 본다.

---

# Stage 04 — PLAYFLOW v7

유지:

# **Scene ≠ Beat**

추가:

- Curriculum terminology reveal도 대부분 Beat
- `뗀석기/주먹도끼`를 받은 후 짧게 명명
- Cave / Natural Shelter Discovery Scene
- cave inspection 후 짧은 `동굴/바위 그늘 생활` 연결
- 핵심 교과 개념을 선택 분기 하나가 독점하지 않는 규칙

---

# Stage 05 — Role Map v7

## Hunt

- 주먹도끼 첫 만남/명명
- 거리/추적/위험
- 동굴/바위 그늘 발견 가능

## Gather

- 채집
- 땅파기/두들기기 등 도구의 생활 사용
- 가까운 자원의 한계

## Camp

- 불 유지/음식 익히기
- 막집 생활과 손질
- 동굴 등 새 거처 후보에 대한 공동체 재평가

# **주먹도끼 = 사냥 무기**로 축소하지 않는다.

---

# Stage 06 — Tech Blueprint v7

추가된 최소 계약:

- `CurriculumAnchorId`
- 짧은 `TerminologyReveal`
- receive evidence와 실제 기능 사용 evidence 구분
- cave/natural shelter presentation proof
- `cave-inspect` body pose
- `cave-exposure` treatment

추가하지 않은 것:

- generic Curriculum Engine
- 교과서 DB
- 3D cave engine
- item stats/inventory system

---

# Stage 07 — 현재 실제 구현

package version:

```text
0.0.0-r2-stage07-curriculum
```

기본 Player 흐름:

```text
사냥을 나선 사람의 관점
→ 눈을 뜬다
→ 새벽 불
→ R에게 돌도구를 받는다
→ '뗀석기 · 주먹도끼' 짧은 cue
→ 주먹도끼를 손에 유지
→ H1/H2와 출발
→ 몸을 낮춰 흔적 관찰
→ 큰 바위 아래 어두운 공간 발견
→ 가까이 가 동굴/바위 그늘을 살핌
→ 장점과 불확실성을 동시에 확인
→ '동굴 · 바위 그늘' 짧은 교과 연결
→ 같은 날 다른 사람 관점 proof
```

이것은 최종 Hunt가 아니라 **layout / interaction / curriculum-anchor proof**다.

---

# 자동 검증

PR #13 implementation head 검증:

- run: `32841962496`
- Node: 24.19.0
- npm: 11.17.0
- install: PASS
- typecheck: PASS
- test files: **8 / 8 PASS**
- tests: **33 / 33 PASS**
- production build: PASS

새 Skeleton tests: **8 tests**

검증 내용:

- Player에 dev chrome 미노출
- 도구 전달 전에는 용어 cue 없음
- 도구를 받은 뒤 뗀석기/주먹도끼 cue 노출
- held-tool continuity
- body pose 변화
- cave 발견/살핌
- cave를 정답 문제로 만들지 않음
- 동굴/바위 그늘 cue timing
- perspective transition
- teacher reduced effects
- debug evidence 분리

---

# 자동 검증이 증명하지 않은 것

- 주먹도끼 cue가 실제 화면에서 얼마나 자연스러운가
- cue가 교과서 카드처럼 튀지 않는가
- 손/팔/도구 비율이 자연스러운가
- cave가 실제 넓은 공간처럼 느껴지는가
- cave의 보호 가능성과 불확실성이 시각적으로 읽히는가
- 초등학생이 `내가 발견한 곳`처럼 기억하는가
- 실제로 뗀석기/주먹도끼 개념이 기억에 연결되는가

따라서 현재 다음 Gate는:

# **R2 Stage 07 — Teacher Browser Visual / Immersion / Curriculum QA**

이다.

이 Gate 통과 전 Stage 08 Hunt Embodied Vertical Slice 전체 구현을 시작하지 않는다.

---

# 다음 human QA 핵심 질문

1. `뗀석기/주먹도끼` cue가 너무 설명문처럼 튀지 않는가?
2. 도구를 받은 뒤 내 손의 물건으로 느껴지는가?
3. cave 발견이 `동굴 설명`보다 실제 장소 발견처럼 느껴지는가?
4. 넓음/마른 바닥/어둠/위험 가능성을 자연스럽게 읽을 수 있는가?
5. `동굴/바위 그늘` cue가 탐색 뒤에 나오는가?
6. 막집과 동굴을 둘 다 생활 공간으로 이해할 수 있는 장기 설계가 보이는가?
7. 교과 연계가 몰입을 깨지 않는가?

---

# 이후 미완료

- Stage 07 human QA
- Stage 08 Hunt Embodied Vertical Slice
- 실제 주먹도끼 기능 사용 interaction
- Stage 09 Teacher Immersion QA
- Stage 10 Student Pilot
- Stage 11 Gather
- Stage 12 Camp
- Stage 13 Three-Perspective Integration
- Stage 14 Multi-day Change
- Stage 15 Migration / New Home
- Stage 16 Historical Conceptualization
- final Player Body / Cast / visual / audio production
