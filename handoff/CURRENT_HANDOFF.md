# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 01~07 Curriculum Anchor Revision 완료 / Stage 07 자동검증 PASS / Teacher Browser Visual·Immersion·Curriculum QA 대기**

이번 리비전은 사용자가 제공한 5학년 사회 교과서의 구석기 내용을 바탕으로 `뗀석기·주먹도끼·불·막집·동굴/바위 그늘·이동 생활`을 기존 몰입형 설계에 자연스럽게 통합한 작업이다.

---

# 1. 새 세션이 가장 먼저 알아야 할 것

프로젝트의 교과 연계 핵심 문법:

# **Experience → Name → Reuse → Connect**

교과 개념을 먼저 강의하지 않는다.

예:

```text
R에게 돌도구를 받음
→ 내 손에 들어옴
→ '뗀석기 · 주먹도끼'를 짧게 명명
→ 이후 손에 계속 남음
→ 실제 생활 행동에 재사용
→ 후속 개념화에서 실제 유물과 연결
```

---

# 2. 최신 canonical 문서

- `docs/01_PROJECT_CORE.md` — **v8**
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — v4
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — v3
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` — v3
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` — v2
- `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md` — **v1 NEW**
- `docs/02_EXPERIENCE_STRUCTURE.md` — **v8**
- `docs/03_HUNT_STORY.md` — **v7**
- `docs/04_HUNT_PLAYFLOW.md` — **v7**
- `docs/05_ROLE_EXPERIENCE_MAP.md` — **v7**
- `docs/06_TECH_BLUEPRINT.md` — **v7**
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — **v6**

---

# 3. 교과서 기반 구석기 Anchor

공식적으로 보존:

- 뗀석기
- 주먹도끼
- 불의 이용
- 막집
- 동굴 / 바위 그늘 생활
- 먹을 것을 찾아 옮겨 다니는 생활
- 사냥·채집·생활 가공

주의:

- R/H1/H2는 교과서 사실이 아니라 재구성 인물.
- 특정 날 동굴을 발견하는 사건도 재구성.
- 체험을 실제 특정 유적의 사건이라고 주장하지 않음.

---

# 4. Stage 07 현재 기본 Player 흐름

```text
사냥을 나선 사람의 관점
→ 새벽 불
→ R이 돌도구를 내밂
→ 학생이 받음
→ '뗀석기 · 주먹도끼' 짧은 cue
→ 주먹도끼를 내 손에 유지
→ H1/H2와 출발
→ 몸을 낮춰 지면 관찰
→ 앞쪽 큰 바위 아래 어두운 공간 발견
→ 가까이 감
→ 넓은 입구 / 마른 바닥 일부 / 어두운 안쪽 / 위험 가능성 확인
→ '동굴 · 바위 그늘' 짧은 교과 cue
→ 장소와 길을 기억
→ 같은 날 다른 사람 관점 proof
```

Stage 07은 전체 Hunt가 아니다.

---

# 5. 동굴 Event 설계 의도

동굴을 다음처럼 만들지 않는다.

- `동굴 발견!` 보상 카드
- 무조건 좋은 새 집
- 무조건 무서운 던전
- 막집과 경쟁하는 정답 문제

학생은 먼저:

- 넓은가
- 바닥은 어떤가
- 비/바람을 피할 수 있나
- 안쪽은 얼마나 어두운가
- 다른 동물 흔적 가능성은 있나
- 물/먹을거리와 거리는 어떤가

를 생각한다.

그 뒤 짧게 `동굴/바위 그늘도 생활 공간으로 이용` 개념을 연결한다.

---

# 6. 역할별 교과 연결

## Hunt

- 주먹도끼 첫 만남/명명
- 이동 거리
- 동굴/바위 그늘 발견

## Gather

- 뿌리/열매 채집
- 땅파기/두들기기 등 도구 재사용
- 가까운 자원 한계

## Camp

- 불 유지 / 음식 익히기
- 막집 생활/손질
- 동굴 등 새 거처 후보를 공동체 문제로 재평가

---

# 7. 자동검증

implementation head run:

# **32841962496 — PASS**

환경:

- Node 24.19.0
- npm 11.17.0

결과:

- install PASS
- typecheck PASS
- **8 test files / 33 tests PASS**
- production build PASS

Stage 07 Skeleton tests는 8개다.

새로 직접 검증하는 것:

- 도구를 받기 전에는 terminology cue 없음
- 받은 뒤 `뗀석기 · 주먹도끼` cue
- held-tool continuity
- crouch observation
- cave notice / inspection
- cave가 정답 문제로 변하지 않음
- `동굴 · 바위 그늘` cue timing
- Teacher reduced effects에서도 교과 정보 유지
- Debug evidence 분리

---

# 8. 개발 비교 URL

개발 서버 기준:

- Player: `http://localhost:5173/`
- Legacy Hunt: `http://localhost:5173/?legacy=1`
- Teacher: `http://localhost:5173/?teacher=1`
- Debug: `http://localhost:5173/?debug=1`

query 기반 개발 경로는 production product UI가 아니다.

---

# 9. package

```text
0.0.0-r2-stage07-curriculum
```

---

# 10. 아직 증명하지 않은 것

자동 테스트는 다음을 증명하지 않는다.

- 용어 cue가 실제로 몰입을 덜 깨는가
- 손/주먹도끼 비율이 자연스러운가
- cave가 진짜 넓고 튼튼한 공간처럼 느껴지는가
- cave의 장점/불확실성이 시각적으로 읽히는가
- 학생이 `내가 발견한 곳`으로 기억하는가
- 주먹도끼 개념이 체험 기억과 실제로 연결되는가

---

# 11. 다음 공식 작업

# **R2 Stage 07 Teacher Browser Visual / Immersion / Curriculum QA**

확인:

1. 시작부터 웹페이지보다 실제 시야처럼 느껴지는가?
2. 주먹도끼를 건네는 장면이 사람과의 상호작용처럼 느껴지는가?
3. `뗀석기 · 주먹도끼` cue가 너무 교과서 카드처럼 튀지 않는가?
4. cue 뒤에도 같은 도구가 내 손의 물건처럼 유지되는가?
5. cave 발견이 설명보다 장소 발견처럼 느껴지는가?
6. cave가 넓음/보호 가능성/어둠/불확실성을 함께 전달하는가?
7. `동굴 · 바위 그늘` cue가 탐색 뒤 자연스럽게 붙는가?
8. reduced effects에서도 정보가 유지되는가?
9. 다른 관점 전환이 명료한가?

관찰 기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

Stage 07 human Gate 통과 전 Stage 08을 시작하지 않는다.

---

# 12. Stage 08에서 이어갈 것

- 주먹도끼의 실제 기능적 사용
- 사냥 흔적 탐색
- 발견/접근
- 추적 딜레마
- Threat/Horror
- cave 발견이 실제 분기/후속 signal로 이어지는 구조
- 다축 결과
- 귀환/죄책감/안도
- 재회

Legacy Hunt v0.1은 비교/회귀 기준으로 계속 보존한다.
