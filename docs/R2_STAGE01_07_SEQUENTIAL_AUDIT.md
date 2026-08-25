# R2 Stage 01~07 Sequential Audit

> 상태: **완료 — Curriculum Anchor Revision까지 반영**
>
> 목적: Design Reboot R2의 Embodied First-Person, 관계·감정·공포·화면 연출에 이어 사용자가 제공한 5학년 사회 교과서의 구석기 핵심 내용을 Stage 01부터 Stage 07까지 다시 의존 순서대로 검증하고, 모순·누락·과설계·몰입 저하 위험을 수정한다.

---

# 1. 최종 공통 판정 기준

각 Stage는 다음을 동시에 만족해야 한다.

- 상위 헌법과 충돌하지 않는가
- Role-True limited POV가 유지되는가
- Embodied First-Person이 시각 장식이 아니라 행동/공간 계약인가
- 관계·공포·죄책감·후회가 역사적 상황에서 자연스럽게 생기는가
- Choice Fairness가 결과 평등이 아니라 인과의 납득 가능성인가
- Student Play Order와 In-World Time이 분리되는가
- 교과서 핵심 사실을 누락하거나 왜곡하지 않는가
- 교과 용어를 숨기지 않되 설명이 경험보다 먼저 나오지 않는가
- 핵심 유물/생활 요소가 반복 경험으로 의미를 얻는가
- 필수 교과 개념이 특정 선택 분기에만 갇히지 않는가
- 역사 사실과 재구성 사건을 구분하는가
- 구현 계약이 React/TypeScript 수준에서 작고 테스트 가능한가
- generic Scene/NPC/VFX/Curriculum engine 과설계를 만들지 않는가
- Legacy Hunt v0.1과 R2 runtime 경계가 명확한가

교과 연결 최상위 문법:

# **Experience → Name → Reuse → Connect**

---

# 2. 교과서 기준으로 공식화한 구석기 Anchor

사용자가 제공한 5학년 사회 교과서의 구석기 부분을 기준으로 다음을 전체 경험의 Curriculum Anchor로 고정했다.

- 뗀석기
- 주먹도끼
- 불의 이용
- 막집
- 동굴 / 바위 그늘 생활
- 먹을 것을 찾아 옮겨 다니는 생활
- 사냥·채집·생활 가공

역사/교과 사실과 프로젝트 재구성을 구분한다.

## 교과 사실

- 뗀석기 사용
- 주먹도끼의 다용도성
- 불 사용
- 막집 생활
- 동굴/바위 그늘 이용
- 이동 생활

## 재구성

- R/H1/H2라는 인물
- 특정 아침 R이 도구를 건넴
- 특정 Hunt에서 넓은 동굴을 발견함
- 특정 대사·감정·선택 결과

---

# 3. Stage 01 감사

## 판정

# **PASS / REVISED TO v8**

이전 감사에서 해결한 것:

- Role-True limited POV
- Embodied body continuity
- Emotional Reality
- Choice Fairness
- Screen Treatment
- Historical Integrity / Safety / Clarity

이번 Curriculum Audit에서 새로 발견한 것:

- `도구`라는 추상 표현만으로는 교과서의 `뗀석기/주먹도끼`와 직접 연결이 약함
- `막집`만 강조하면 동굴/바위 그늘 생활이 약해질 수 있음
- 몰입을 위해 용어를 지나치게 숨기면 체험 기억과 교과서 용어가 연결되지 않을 수 있음
- 반대로 용어를 먼저 설명하면 몰입이 깨질 수 있음

수정:

- Project Core v8
- 신규 `01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
- `Experience → Name → Reuse → Connect`
- 뗀석기/주먹도끼/불/막집/동굴·바위 그늘/이동 생활을 Learning Invariant로 구체화
- Historical Fact / Reconstructed Event 분리

---

# 4. Stage 01A~01D 교차검증

## Embodied First-Person

교과서 Anchor가 들어와도 학생 시야의 중심은:

```text
내 몸
+ 실제 물건
+ 사람
+ 공간
+ 행동
```

이어야 한다.

주먹도끼가 `아이템 카드`로 나타났다 몸에서 사라지면 FAIL.

## Relationship / Agency

R이 도구를 건네는 이유는 교과 설명이 아니라 생활 관계 속 행동이다.

## Screen Treatment

용어 cue를 강조하려고 과한 flash/glow를 쓰지 않는다.

## Learning / Historical Integrity

- 핵심 용어는 정확하게
- 재구성 사건은 사실처럼 단정하지 않음
- terminology reveal은 학생의 다음 행동을 막지 않음

판정:

# **PASS / NO CONSTITUTIONAL CONFLICT**

---

# 5. Stage 01E 감사

신규 Curriculum Anchor 헌법의 핵심:

- 뗀석기/주먹도끼는 최소 한 번 명확하게 명명
- 도구를 먼저 받고 이름을 나중에 알게 함
- 주먹도끼는 이후 생활 사용으로 다용도성을 강화
- 막집과 동굴/바위 그늘을 경쟁 정답으로 만들지 않음
- 동굴 발견은 장소를 평가하는 사건
- 실제 유물/유적은 체험 뒤 증거 연결

판정:

# **REQUIRED / PASS**

---

# 6. Stage 02 감사

## 판정

# **PASS / REVISED TO v8**

기존 핵심 유지:

# **Student Play Order ≠ In-World Time**

추가 발견:

- Hunt가 모든 교과 개념을 설명하면 Gather/Camp 역할 의미가 약해짐
- 동굴 발견이 Hunt 특정 분기에만 있으면 경로에 따라 핵심 주거 개념을 놓칠 수 있음
- Hunt cave discovery가 같은 날 Camp의 이미 지난 과거를 바꾸면 시간 모델 위반

수정:

- Curriculum Anchor를 역할별 생활 문법에 분산
- 필수 개념은 특정 분기가 독점하지 않음
- `hunt-cave-shelter-noticed / inspected` 같은 signal은 후속 표현에만 사용
- Common Evening과 later-day에서 이동/거처 문제를 통합

코드 계약:

- 같은 역할 day context `dayId: 'day-1'`
- role order가 바뀌어도 동일 dayId 테스트로 잠금

---

# 7. Stage 03 Hunt STORY 감사

## 판정

# **PASS / REVISED TO v7**

최신 서사:

```text
새벽 불
→ R과 관계
→ 주먹도끼 전달
→ 뗀석기/주먹도끼 짧은 명명
→ 동행 출발
→ 흔적 관찰
→ 추적/시간/거리 딜레마
→ 넓은 동굴/바위 공간 발견 가능
→ 생활 공간 가능성과 위험을 함께 평가
→ Threat/Horror
→ 다축 결과
→ 귀환
→ 불/재회
```

핵심 수정:

- 주먹도끼 = 사냥 무기 한 종류로 축소하지 않음
- 도구가 관계 장면에서 먼저 등장
- 동굴 = 좋은 새 집 자동 판정 금지
- 동굴 = 공포 던전 자동 판정 금지
- 넓이/마른 바닥/바람 회피 가능성과 어둠/동물 흔적/자원 거리 불확실성을 함께 봄
- 발견 정보가 후속 공동체 고민의 씨앗이 됨

---

# 8. Stage 04 Hunt PLAYFLOW 감사

## 판정

# **PASS / REVISED TO v7**

기존:

# **Scene ≠ Beat**

추가:

- terminology reveal도 대부분 Beat
- Tool Handoff 뒤 `뗀석기 · 주먹도끼` cue
- cave / natural shelter discovery를 의미 있는 Scene으로 추가
- cave 입구/바닥/안쪽/주변 길 inspection
- inspection 뒤 `동굴 · 바위 그늘` cue
- 핵심 교과 개념은 한 분기가 독점하지 않음

Stage 07 proof 경계도 다음으로 확장:

```text
Role Orientation
→ Fire
→ Tool Handoff
→ Handaxe Terminology Reveal
→ Join / Departure
→ Crouch Observation
→ Cave / Natural Shelter Discovery
→ Cave Inspection / Terminology Reveal
→ Perspective Transition
```

전체 Hunt는 여전히 Stage 08 책임이다.

---

# 9. Stage 05 Role Map 감사

## 판정

# **PASS / REVISED TO v7**

Curriculum Anchor를 역할별 문법과 연결했다.

## Hunt

- 주먹도끼 첫 만남/명명
- 거리/추적/위험
- 동굴/바위 그늘 발견 가능

## Gather

- 뿌리/열매 채집
- 땅파기/두들기기 등 도구 재사용
- 가까운 자원 부족

## Camp

- 불 유지/음식 익히기
- 막집 생활/손질
- 새 동굴 후보의 공동체적 재평가

핵심:

# **같은 개념이 역할마다 다른 몸·행동·감정 의미로 다시 등장한다.**

---

# 10. Stage 05A Design Validation 감사

기존 v4는 Deep Audit 시점 결론만 갖고 있어 최신 Curriculum Anchor 방향과 충돌 위험이 있었다.

수정:

- v5 Curriculum Anchor Audit
- 오개념 위험 명시
- 몰입 저하 위험 명시
- Stage 01~05 전체 curriculum final gate 추가

판정:

# **PASS / REVISED TO v5**

---

# 11. Stage 06 Technical Blueprint 감사

## 판정

# **PASS / REVISED TO v7**

새 최소 계약:

- `CurriculumAnchorId`
- local `TerminologyReveal`
- `tool-received-in-embodied-context`
- `handaxe-term-revealed`
- `natural-shelter-evaluated`
- 실제 기능 사용 evidence와 receive evidence 분리
- `cave-inspect` body pose
- `cave-exposure` treatment

명시적 비과설계:

- generic Curriculum Engine 없음
- 교과서 DB 없음
- 3D cave navigation 없음
- generic shelter simulation 없음
- handaxe item stats 없음

---

# 12. Stage 07 Runtime 감사 / 구현

## 판정

# **IMPLEMENTED / AUTOMATED PASS / HUMAN QA PENDING**

기본 Player 흐름:

```text
사냥 관점
→ 새벽 불
→ R이 돌도구를 건넴
→ 학생이 받음
→ '뗀석기 · 주먹도끼' 짧은 cue
→ 같은 주먹도끼를 손에 유지
→ H1/H2와 출발
→ 몸을 낮춰 흔적 관찰
→ 큰 바위 아래 어두운 공간 발견
→ 가까이 가 cave/rock-shelter inspect
→ 보호 가능성과 불확실성을 함께 확인
→ '동굴 · 바위 그늘' 짧은 cue
→ 장소와 길을 기억
→ 같은 날 다른 사람 관점 proof
```

실제 runtime 보완:

- `tool-reveal` step
- `cave-notice` step
- `cave-inspect` step
- handaxe Curriculum Cue
- cave Curriculum Cue
- cave DOM/CSS 공간 proof
- held-item continuity
- cave exposure treatment
- Teacher curriculum summary
- Debug anchor/evidence

package:

```text
0.0.0-r2-stage07-curriculum
```

---

# 13. Stage 07 Automated Verification

Implementation-head CI:

# **run `32841962496` — PASS**

- Node 24.19.0
- npm 11.17.0
- install PASS
- typecheck PASS
- **8 test files / 33 tests PASS**
- production build PASS

Skeleton tests: 8 tests.

검증:

- terminology가 행동 전 나오지 않음
- receive 후 handaxe cue
- held item continuity
- crouch observation
- cave discovery / inspection
- cave를 정답 퀴즈로 만들지 않음
- cave terminology timing
- perspective transition
- teacher reduced effects parity
- debug-only evidence

---

# 14. 발견한 주요 오개념 위험과 조치

## 위험 1

`주먹도끼 = 사냥 무기`

### 조치

Gather/Stage08에서 땅파기·두들기기·자르기/손질 등 생활 사용을 확장.

## 위험 2

`막집과 동굴 중 하나가 정답 집`

### 조치

둘을 환경 조건에 따른 생활 공간으로 병렬 설계.

## 위험 3

`동굴 = 더 발전된 좋은 집`

### 조치

보호 가능성과 어둠/위험/자원 거리 불확실성을 함께 평가.

## 위험 4

`게임 속 동굴 = 실제 금굴 유적의 특정 역사 사건`

### 조치

실제 유적은 후속 evidence connection. Story는 재구성으로 명시.

---

# 15. 현재 Human Gate

자동 테스트가 증명하지 못하는 것:

- handaxe cue가 실제로 몰입을 크게 깨지 않는가
- 도구가 내 손의 물건처럼 느껴지는가
- cave가 넓고 단단한 자연 공간처럼 보이는가
- cave의 보호 가능성과 미지 위험이 화면에서 함께 읽히는가
- `동굴 · 바위 그늘` cue가 너무 교과서 카드처럼 보이지 않는가
- 초등학생이 경험을 교과 용어와 실제로 연결하는가

다음 공식 Gate:

# **R2 Stage 07 Teacher Browser Visual / Immersion / Curriculum QA**

기록:

- `handoff/R2_EMBODIED_PLAYTEST_PROTOCOL.md`

Stage 08은 이 Gate 통과 전 시작하지 않는다.

---

# 16. 최종 감사 결론

## Stage 01

**PASS / v8**

## Stage 02

**PASS / v8**

## Stage 03

**PASS / v7**

## Stage 04

**PASS / v7**

## Stage 05

**PASS / v7**

## Stage 05A

**PASS / v5**

## Stage 06

**PASS / v7**

## Stage 07

**IMPLEMENTED / AUTOMATED PASS / HUMAN QA PENDING**

핵심 결론:

# **교과서 내용을 스토리 위에 올리는 것이 아니라, 교과서의 유물·생활 조건을 학생이 먼저 몸으로 살게 한 뒤 그 경험에 이름을 붙이는 구조로 Stage 01~07을 재정렬했다.**
