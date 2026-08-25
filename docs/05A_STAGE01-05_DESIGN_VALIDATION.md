# 구석기 역사 체험 웹게임
## Stage 01~05 설계 재검증 v5 / Curriculum Anchor Audit

> 목적: Embodied First-Person, 관계·감정·공포·미세 연출 위에 교과서의 구석기 핵심 개념을 추가한 뒤, Stage 01~05가 **몰입·교과 연계·역사적 정확성·분기 설계·구현 가능성**을 동시에 만족하는지 재검증한다.
>
> 기준 자료: 사용자가 제공한 5학년 사회 교과서의 구석기 부분. 교과서가 직접 뒷받침하는 사실과 프로젝트가 체험을 위해 재구성한 사건을 구분한다.

---

# 1. 최종 결론

## **PASS AFTER REVISION**

교과서 핵심을 추가하면서 가장 큰 위험은 `몰입형 역사 체험`이 다시 `교과서 내용을 보여주고 문제를 푸는 게임`으로 회귀하는 것이었다.

이를 피하기 위해 다음을 상위 원칙으로 확정했다.

# **Experience → Name → Reuse → Connect**

- 먼저 세계 안에서 만난다.
- 핵심 용어는 짧고 정확하게 짚는다.
- 같은 물건/공간/행동을 다시 경험한다.
- 마지막에 교과 개념·실제 유물/유적과 연결한다.

신규 헌법:

- `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`

---

# 2. 이번 감사에서 보존한 교과서 핵심

전체 체험에서 다음을 Learning Invariant로 본다.

- 뗀석기
- 주먹도끼
- 불의 이용
- 막집
- 동굴 / 바위 그늘 생활
- 먹을 것을 찾아 옮겨 다니는 생활
- 사냥·채집·생활 가공

단, 다음은 역사 사실 자체가 아니라 재구성이다.

- R/H1/H2라는 구체 인물
- R이 특정 날 주먹도끼를 건네는 사건
- Hunt 도중 특정 동굴을 발견하는 사건
- 그날의 대사·감정·선택 결과

판정: **SOURCE / RECONSTRUCTION BOUNDARY PASS**

---

# 3. Stage 01 Core v8 검증

확인한 문제:

1. 기존 Learning Invariant의 `도구` 표현이 너무 추상적이었음.
2. 막집만 강조하면 동굴/바위 그늘 생활이 약해질 수 있었음.
3. 교과 용어를 너무 숨기면 체험 기억과 교과서 용어가 연결되지 않을 수 있었음.
4. 반대로 용어를 많이 넣으면 몰입이 깨질 수 있었음.

보완:

- 뗀석기/주먹도끼를 명시적 Anchor로 승격.
- 막집 + 동굴/바위 그늘을 주거 다양성으로 함께 고정.
- `Experience → Name → Reuse → Connect` 도입.
- Historical Fact와 Reconstructed Event 구분.
- 실제 유물/유적은 체험 뒤 evidence connection으로 사용.

판정: **PASS / v8**

---

# 4. Stage 01A~01D 재확인

기존 원칙과 Curriculum Anchor가 충돌하는지 확인했다.

## Embodied First-Person

교과 용어가 들어와도 화면의 중심은 여전히

```text
내 몸 + 물건 + 사람 + 공간 + 행동
```

이다.

`주먹도끼`를 카드로 띄우고 몸에서 사라지게 하면 FAIL.

## Relationship / Agency

R이 도구를 건네는 이유는 `용어를 가르치기 위해서`가 아니라 생활 관계 속 행동이어야 한다.

## Screen Treatment

교과 cue를 강조하기 위해 과한 glow/flash를 사용하지 않는다.

## Learning Clarity / Safety / Historical Integrity

- 핵심 용어는 정확하게.
- 재구성 장면을 사실처럼 단정하지 않음.
- 학생이 용어를 모른다고 행동을 막지 않음.

판정: **PASS / NO CONSTITUTIONAL CONFLICT**

---

# 5. Stage 01E Curriculum Anchor 검증

신규 규칙의 핵심:

- `뗀석기/주먹도끼`는 최소 한 번 명확히 짚음.
- 도구를 받은 뒤 이름을 붙임.
- 주먹도끼의 다용도성은 이후 실제 사용으로 강화.
- 막집과 동굴/바위 그늘을 경쟁 정답으로 만들지 않음.
- 동굴 발견은 장소 평가 event.
- 실제 전곡리 주먹도끼·동굴 유적은 후속 증거 연결.

판정: **REQUIRED / PASS**

---

# 6. Stage 02 Experience Structure v8 검증

발견한 위험:

- Hunt가 모든 구석기 용어를 설명하면 다른 역할이 약해짐.
- 동굴 발견을 Hunt의 한 분기에만 두면 필수 개념 coverage가 경로에 따라 사라질 수 있음.
- 새 동굴 발견이 같은 날 다른 역할의 과거를 소급 변경할 수 있음.

보완:

- 교과 Anchor를 세 역할에 분산.
- 필수 개념은 특정 분기 하나가 독점하지 않음.
- cave discovery는 후속 표현에만 영향을 주는 cross-role signal 후보.
- Student Play Order ≠ In-World Time 유지.
- Common Evening과 later-day에서 개념과 이동 이유를 통합.

판정: **PASS / v8**

---

# 7. Stage 03 Hunt STORY v7 검증

강화된 핵심 서사:

```text
불 앞의 관계
→ 주먹도끼 전달
→ 짧은 명명
→ 이동
→ 흔적/추적
→ 거리와 시간 압박
→ 동굴/바위 공간 발견 가능
→ 보호 가능성과 위험 가능성 평가
→ 위협/결과
→ 귀환
→ 재회
```

검증 결과:

- 주먹도끼가 설명용 artifact가 아니라 관계/몸의 물건으로 기능함.
- `주먹도끼 = 무기`로 축소하지 않음.
- 동굴을 자동 좋은 집으로 만들지 않음.
- 동굴을 자동 공포 던전으로 만들지 않음.
- 새 장소 발견이 이동 생활의 장기 씨앗이 됨.

판정: **PASS / v7**

---

# 8. Stage 04 PLAYFLOW v7 검증

핵심 보완:

- terminology reveal을 대부분 Beat로 처리.
- Tool Handoff 이후에만 `뗀석기 · 주먹도끼` cue.
- Cave / Natural Shelter Discovery를 의미 있는 Scene으로 추가.
- 학생이 cave 입구/바닥/안쪽/주변 길을 실제로 살필 수 있게 설계.
- cave inspection 후에만 `동굴 · 바위 그늘` 교과 연결.
- Scene state 폭발 방지 원칙 유지.

판정: **PASS / v7**

---

# 9. Stage 05 Role Map v7 검증

역할별 Curriculum Anchor가 고유 플레이 문법과 맞는지 확인했다.

## Hunt

- 주먹도끼 first encounter
- 이동/위험
- 동굴 발견 가능

## Gather

- 뿌리·열매 채집
- 땅파기·두들기기 같은 생활 도구 사용
- 가까운 자원 부족

## Camp

- 불 유지/음식 익히기
- 막집 생활/손질
- 새 동굴 후보의 공동체적 재평가

좋은 점:

- 같은 주먹도끼가 역할마다 다른 의미를 가질 수 있음.
- 의·식·주가 Common Evening에서 하나의 생활로 다시 만날 수 있음.

판정: **PASS / v7**

---

# 10. 오개념 위험 검증

명시적으로 막은 오개념:

- `구석기 사람은 모두 동굴에서 살았다.`
- `구석기 사람의 집은 막집 하나였다.`
- `주먹도끼는 사냥용 무기였다.`
- `동굴은 막집보다 발전된 집이다.`
- `동굴을 발견하면 바로 이사했다.`
- `게임 속 특정 하루가 실제 전곡리/금굴에서 있었던 사실이다.`

대신 목표 이해:

- 환경과 이동 상황에 따라 다양한 생활 공간을 이용할 수 있었음.
- 도구는 여러 생활 행동에 사용됨.
- 이동은 자원·거리·거처·위험을 포함한 생활 조건과 연결됨.

판정: **PASS WITH HUMAN QA REQUIRED**

---

# 11. 몰입 저하 위험 검증

새 교과 요소 때문에 발생할 수 있는 UX 위험:

1. 용어 cue가 너무 크거나 오래 남음.
2. cave cue가 `학습 정답 공개`처럼 보임.
3. 주먹도끼 이름을 알려준 뒤 행동보다 읽기가 중심이 됨.
4. cave 설명 텍스트가 공간 자체보다 더 강함.

대응:

- 짧은 terminology cue.
- 행동 뒤 reveal.
- Primary Attention은 몸/사람/공간 우선.
- Stage 07 Human QA에서 실제 체감 검증.

판정: **AUTOMATABLE PART PASS / HUMAN UX PENDING**

---

# 12. Stage 01~05 Final Gate

다음 질문에 모두 YES여야 한다.

- 교과서 핵심 사실이 누락되지 않는가?
- 핵심 용어를 실제로 한 번은 명확히 짚는가?
- 교과 설명이 경험보다 먼저 나오지 않는가?
- 주먹도끼가 몸과 행동 속에 반복되는가?
- 막집과 동굴/바위 그늘을 모두 다루는가?
- 동굴 발견이 실제 장소 판단처럼 설계되는가?
- 교과 개념이 특정 선택 하나에 갇히지 않는가?
- 역할마다 다른 생활 의미가 있는가?
- 실제 자료와 재구성 사건을 구분하는가?
- 몰입/관계/감정/공포 설계가 교과 연계 때문에 약해지지 않는가?

## 최종 판정

# **Stage 01~05: PASS AFTER CURRICULUM ANCHOR REVISION**

다음 책임은 Stage 06 기술 계약과 Stage 07 실제 browser proof다.
