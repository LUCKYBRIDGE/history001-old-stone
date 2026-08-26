# R2_EMBODIED_PLAYTEST_PROTOCOL.md

## 공식 Gate

# **Stage 07 Teacher Browser Visual / Immersion / Curriculum / Misconception QA**

목적: Stage 07 Skeleton이 실제 사람의 눈으로 보았을 때 **몸·공간·관계·교과 개념·역사적 상상력**으로 작동하는지 확인한다.

현재 Stage 07은 CSS/DOM proof이며 최종 아트가 아니다.

따라서 `예쁘다/안 예쁘다`보다 다음을 본다.

- 몸과 세계가 같은 공간처럼 느껴지는가
- 사람이 기능 버튼보다 실제 주변인처럼 느껴지는가
- current temporary shelter가 현대 집/텐트 아이콘처럼 보이지 않는가
- 교과 용어가 체험 뒤 자연스럽게 붙는가
- 핵심 개념 위계가 정확한가
- 자연 거처 후보가 실제 장소 발견처럼 느껴지는가
- 사실과 재구성의 경계를 교사가 이해할 수 있는가
- 현재 placeholder 구도가 production visual로 치환 가능한가
- responsive crop에서도 body/contact/학습 target이 유지될 수 있는가

## 이 Gate가 증명하는 것 / 증명하지 않는 것

이 Gate는 **교사/프로젝트 오너의 proxy Human QA**다.

증명하려는 것:

- 현재 Stage 07 browser proof에 명백한 몰입·공간·관계·교과·오개념 문제가 없는지
- 다음 visual production 단계로 넘길 수 있는 구조인지
- production asset으로 교체해도 body/contact/crop 구조가 성립할 가능성이 있는지

아직 증명하지 않는 것:

- 실제 초등학생 집단의 학습 효과
- 실제 학생의 장기 기억/개념 전이
- production-quality 이미지의 최종 자연스러움
- Stage 08 전체 Hunt의 완성도

실제 학생 이해는 후속 **Student Pilot** 책임이다.
자동 테스트나 이 Teacher Human Gate만으로 `학생 학습 검증 완료`를 선언하지 않는다.

---

# 1. 실행

Player:

```text
http://localhost:5173/
```

Teacher:

```text
http://localhost:5173/?teacher=1
```

Debug:

```text
http://localhost:5173/?debug=1
```

Legacy 비교:

```text
http://localhost:5173/?legacy=1
```

첫 자연 플레이에서는 Debug를 보지 않는다.

기본 순서:

```text
Player 자연 플레이
→ Teacher 확인
→ 필요한 경우에만 Debug
→ 필요 시 Legacy 비교
```

---

# 2. 현재 Stage 07 흐름

```text
사냥을 나선 사람의 관점
→ 눈을 뜬다
→ 새벽 불 + 현재 임시 거처
→ R을 봄
→ 돌도구를 받음
→ '뗀석기' 상위 개념 명명
→ 지금 손의 대표적인 예가 '주먹도끼'임을 연결
→ 같은 주먹도끼를 손에 유지
→ H1/H2와 출발
→ 불/사람/current shelter가 멀어짐
→ 몸 낮춰 지면 관찰
→ 한동안 더 이동
→ 큰 바위 아래 자연 거처 후보 발견
→ 가까이 가 입구/바닥/안쪽을 살핌
→ 장점과 불확실성 확인
→ '동굴 / 바위 그늘' 짧은 연결
→ 다른 사람 관점 proof
```

---

# 3. Gate A — Role / First-Person / Body

1~5점.

1. 첫 화면부터 웹 문서보다 역할 진입처럼 느껴지는가?
2. 내 손/무릎/도구가 자연스러운 시야 일부인가?
3. 자세 변화가 화면 교체보다 내 몸 변화처럼 느껴지는가?
4. 도구가 받은 뒤 같은 물건으로 이어지는가?
5. 다른 관점 전환에서 다른 사람의 몸이라는 것이 명료한가?

High FAIL:

- 손/팔 위치 때문에 오히려 몸이 없는 것보다 부자연스러움
- 역할보다 UI가 먼저 보임
- 손/도구가 화면 아래 고정 HUD처럼 떠 보임

---

# 4. Gate B — R / H1 / H2 관계

1. R이 설명 NPC보다 익숙한 사람처럼 느껴지는가?
2. 돌도구 전달이 관계 장면인가?
3. H1/H2가 동행자로 읽히는가?
4. 사람의 시선/움직임이 자연스럽게 주의를 이끄는가?
5. 대사가 튜토리얼 암송처럼 느껴지지 않는가?

---

# 5. Gate C — Current Temporary Shelter

핵심 질문:

# **동굴을 보기 전에도 이미 사람들이 생활하는 장소가 존재한다고 느끼는가?**

확인:

- 불과 현재 거처가 같은 생활 공간처럼 보이는가?
- current shelter가 현대식 집 아이콘처럼 보이지 않는가?
- 삼각 텐트 아이콘처럼 단순하게 읽히지 않는가?
- 나뭇가지/덮개로 임시로 세운 불완전한 구조처럼 보이는가?
- 출발할 때 불·사람·거처가 함께 멀어지는가?
- 아직 `막집` 용어를 배우지 않아도 공간의 임시성이 느껴지는가?

Stage 07에서는 이 silhouette만으로 `막집 학습 완료` 판정 금지.

---

# 6. Gate D — 뗀석기 → 주먹도끼

핵심 질문:

# **도구를 먼저 경험하고, 그다음 상위 개념과 구체 예의 관계를 이해하는가?**

확인:

- 받기 전에는 `뗀석기/주먹도끼`가 먼저 튀어나오지 않는가?
- 받은 뒤 `뗀석기`라는 이름이 붙는가?
- `지금 손에 든 것은 대표적인 예인 주먹도끼`라는 관계가 이해되는가?
- cue가 너무 길거나 커서 R과의 장면을 끊지 않는가?
- cue 뒤에도 같은 도구가 손에 남는가?
- 주먹도끼가 사냥 무기 하나로만 느껴지지 않는가?

직접 오개념 질문:

> 뗀석기와 주먹도끼는 완전히 같은 말일까?

> 모든 뗀석기가 주먹도끼일까?

목표:

- `뗀석기` = 상위 개념
- `주먹도끼` = 대표적인 예

Stage 07에서는 다용도 실제 사용 이해까지 요구하지 않는다.

---

# 7. Gate E — Natural Shelter Discovery

핵심 질문:

# **`동굴에서 살았다`는 문장을 보기 전에 왜 이런 자연 공간을 생활에 이용했을지 느껴지는가?**

확인:

1. 한동안 이동했다는 거리감이 있는가?
2. 바위 아래 공간이 설명 label보다 먼저 발견 대상으로 보이는가?
3. 입구가 넓다는 느낌이 드는가?
4. 일부 마른 바닥/보호 가능성이 읽히는가?
5. 안쪽의 어둠/불확실성도 느껴지는가?
6. 다른 동물이 이용했을 가능성을 경계하게 되는가?
7. 물/먹을거리 거리 같은 미확인 조건이 남는가?
8. `여기 머물 수도 있겠다`와 `더 확인해야겠다`가 동시에 생기는가?
9. 탐색 뒤에만 `동굴 / 바위 그늘` 용어가 붙는가?
10. `여기가 정답 집`처럼 느껴지지 않는가?

---

# 8. Gate F — 주거 오개념

직접 확인:

> 구석기 사람들은 동굴에서만 살았을까?

> 막집에서만 살았을까?

> 오늘 발견한 곳은 무조건 새 집이 되는 걸까?

원하는 이해:

- 여러 생활 공간 가능
- 환경/상황에 따라 이용 방식이 달라짐
- 자연 거처 후보 발견과 실제 이동 결정은 다름

`막집` 정식 명명은 Camp 후속 책임이다.

---

# 9. Gate G — Fact / Reconstruction

Teacher URL에서 확인한다.

Teacher가 구분할 수 있어야 한다.

## Source-supported Fact

- 뗀석기 사용
- 주먹도끼라는 대표적 도구
- 동굴/바위 그늘 생활

## Reconstructed Event

- R/H1/H2라는 구체 인물
- 이 Day 1의 거처 배치
- R이 이 아침에 이 도구를 건네는 사건
- 이 사람들이 이 자연 거처 후보를 발견하는 사건

Player에서는 `역사적 재구성:` 관리 문구가 보이면 FAIL.

---

# 10. Gate H — 교과서 느낌 vs 역사 체험

질문:

> 용어가 나올 때 갑자기 수업 문제를 푸는 느낌이 들었나?

> 아니면 방금 경험한 것의 이름을 알게 된 느낌이었나?

점수:

- 5: 이름 붙이기가 경험을 강화
- 4: 거의 자연스러움
- 3: 조금 튐
- 2: 설명 화면 느낌이 큼
- 1: 몰입이 크게 끊김

3 이하면 Stage 08 전에 cue 크기/문장/타이밍 수정.

---

# 11. Gate I — Historical Imagination

정답을 먼저 알려주지 않고 묻는다.

- 왜 이런 돌도구를 손에 들고 나갔을 것 같나?
- 왜 이 자연 공간이 머물기에 쓸 만해 보였나?
- 왜 바로 옮기지 않고 더 확인해야 할까?
- 왜 현재 거처로 다시 돌아가야 할까?

목표는 교과서 문장 복창이 아니라 당시 생활 조건에 근거한 설명이다.

이 질문은 **교사/프로젝트 오너가 현재 체험이 그런 추론을 유도할 수 있는 구조인지 점검하는 proxy 질문**이다.
실제 학생이 같은 방식으로 이해하는지는 Student Pilot에서 별도로 검증한다.

---

# 12. Gate J — Screen Treatment / Accessibility

확인:

- fire warmth가 과한가?
- tool focus가 terminology cue와 겹쳐 과도한가?
- walking sway가 멀미/장난감 느낌인가?
- cave exposure가 공간 깊이를 돕는가?
- 어두운 영역이 필요한 정보를 숨기는가?
- reduced effects에서도 의미가 유지되는가?

---

# 13. Gate K — Player / Teacher / Debug 분리

Player에서 없어야 함:

- Stage 번호
- exact step ID
- evidence ID
- curriculum anchor internal ID
- reconstruction management note
- debug toolbar
- legacy label

Teacher/Debug는 명시적 URL에서만 보인다.

---

# 14. Gate L — Visual Production Replaceability / Responsive Composition

이 Gate는 **현재 placeholder가 예쁜가**가 아니라 **production asset으로 교체 가능한 구조인가**를 본다.

확인:

1. R의 손 → 주먹도끼 → 내 손 handoff 동선이 하나의 접촉 장면으로 재구성 가능한가?
2. 현재 body/tool placement가 화면 아래 고정 HUD를 전제로 하지 않는가?
3. handoff/contact 핵심 영역 위에 버튼·용어 카드가 겹치지 않는가?
4. 4:3 / 16:10 / 16:9에서 핵심 body/contact/학습 target을 살릴 수 있는가?
5. shelter/cave처럼 중요한 world target이 단순 center crop 하나에 의존하지 않는가?
6. Scene 내부 Beat가 `완성 이미지 한 장씩 교체`하는 slideshow 구조를 강제하지 않는가?
7. depth/occlusion을 넣을 여지가 있는가, 아니면 모든 것이 평면 sticker처럼 고정되어 있는가?
8. 손/도구가 보이지 않아도 되는 장면에 억지로 HUD형 body를 남기지 않는가?

High FAIL:

- 핵심 contact가 production image로 교체하려면 Scene 구조 자체를 다시 설계해야 함
- 4:3에서 핵심 접촉/학습 target을 동시에 보존할 수 없음
- 손/도구가 독립 HUD여야만 현재 flow가 성립함
- 모든 Beat가 독립 full-frame 이미지 교체를 요구함

이 Gate PASS는 production visual 자연스러움을 증명하지 않는다.
**production 시작 전에 현재 구조를 버리고 다시 만들 가능성을 낮추는 readiness proof**다.

---

# 15. 관찰 기록 형식

```text
ID: R2UX-001
위치:
관찰 사실:
학생/교사 반응:
심각도: P0 / P1 / P2
재현 여부:
Root cause category:
해석:
최소 수정 가설:
회귀 위험:
교과/역사/관점 영향:
수정 후 다시 사람이 확인할 항목:
```

관찰 사실과 해결책을 분리한다.

Root cause category:

- Embodied spatial problem
- Narrative problem
- Relationship problem
- Curriculum timing problem
- Misconception risk
- Historical integrity problem
- Perspective problem
- Screen treatment problem
- Interaction problem
- Technical architecture problem
- Visual production / asset composition problem

심각도:

## P0

- 몰입 완전 파괴
- 교과 개념 왜곡
- 안전/접근성 문제
- Player에 내부 관리 정보 노출처럼 명백한 경계 위반

## P1

- 이해/관계/역할 해석에 실질적 영향
- production replaceability를 막는 구조적 visual 문제

## P2

- 미세 visual/narrative polish
- Stage 08 전 필수 차단까지는 아닌 개선점

원칙:

- P0/P1은 해결 또는 명시적 재검증 없이 Human Gate PASS 불가
- P2는 deferred polish로 넘길 수 있으나 기록한다
- 한 문제 때문에 전체 아키텍처를 갈아엎지 않고 최소 수정 우선

---

# 16. Human Gate PASS 기준

다음이 모두 만족돼야 한다.

- 역할 진입 명료
- body/tool spatial relation 큰 문제 없음
- R과 도구 전달이 실제 상호작용처럼 읽힘
- current shelter가 명백한 현대 집/텐트 아이콘처럼 보이지 않음
- `뗀석기 → 주먹도끼` 위계가 이해됨
- terminology cue가 몰입을 크게 깨지 않음
- held-item continuity
- 자연 거처 후보가 실제 공간처럼 읽힘
- 장점과 불확실성이 함께 전달됨
- 주거 형태 핵심 오개념 없음
- Teacher가 Fact / Reconstruction을 구분 가능
- reduced effects parity
- Perspective transition 명료
- 기본 Player에 개발/관리 정보 없음
- production replaceability에 P0/P1 blocker 없음
- 4:3 / 16:10 / 16:9에서 핵심 contact/학습 target을 유지할 구도 여지가 있음
- 현재 Scene/Beat 구조가 full-frame slideshow를 강제하지 않음

추가 판정 규칙:

# **P0/P1 미해결 = Human Gate FAIL**

P2만 남은 경우에는:

- deferred polish로 명시하고
- Stage 08 Visual Production Readiness 또는 후속 Visual QA에서 다시 확인할 수 있다.

Human Gate PASS는:

- Student Pilot PASS가 아니며
- production visual QA PASS가 아니며
- Stage 08 Complete가 아니다.

PASS 전 Stage 08 전체 Hunt 확장 금지.

---

# 17. Stage 08로 넘길 것

Human Gate 통과 뒤 실제 구현/검증:

- Visual Production Readiness Gate
- Historical / Visual Reference Pack
- Player Body / R/H1/H2 / Handaxe anchor 승인
- handoff / crouch / cave approach composition rough
- 4:3 / 16:10 / 16:9 crop proof
- Stage 06 v9 minimal visual runtime contract
- 주먹도끼의 땅파기/두들기기/자르기·손질
- 반복 사용 뒤 다용도성 이해
- 흔적 탐색/사냥/추적 딜레마
- Threat/Horror
- 자연 거처 후보가 선택/귀환/후속 역할에 남기는 consequence
- Camp에서 current shelter 생활/손질 뒤 `막집` 명명
- Camp에서 자연 거처 후보 재평가

# **Human Gate PASS 직후 production image 대량 생성 금지.**

먼저 `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`의 Visual Production Readiness Gate를 통과한다.
