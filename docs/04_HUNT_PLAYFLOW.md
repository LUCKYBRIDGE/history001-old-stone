# 구석기 역사 체험 웹게임
## Stage 04 — Hunt PLAYFLOW v7 / Scene-State + Curriculum Anchor Beats

> 목적: Hunt STORY v7을 실제 브라우저 상호작용으로 변환한다. `Scene`을 무조건 페이지/컴포넌트로 만들지 않고 **상태·행동의 의미 단위**로 정의하며, 시선·정적·대사·용어 reveal·화면 효과는 같은 Scene 안의 `Beat`로 처리한다.
>
> 상위 기준:
> - `docs/03_HUNT_STORY.md`
> - `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`

---

# 1. Scene ≠ Beat

## Scene

Reducer/state에 올릴 가치가 있는 의미 단위.

Scene이 바뀌는 기준:

- 목표가 달라짐
- 직접 행동 가능성이 달라짐
- 위치가 의미 있게 달라짐
- 결과/관계/거리/시간이 달라짐
- 후속 분기에 필요한 상태가 생김

## Beat

같은 Scene 안에서 일어나는 표현 변화.

예:

- R이 나를 봄
- 손이 올라옴
- 주먹도끼가 화면 중앙에 들어옴
- 짧은 `뗀석기 / 주먹도끼` terminology reveal
- H1이 멈춤
- 소리가 줄어듦
- cave 입구가 보임
- vignette / jolt
- 대사 한 줄

# **교과 용어 reveal도 무조건 별도 Scene으로 만들지 않는다.**

---

# 2. 주요 Scene 흐름

권장 의미 흐름:

```text
S0 Role Orientation
S1 Fire / Morning Presence
S2 Tool Handoff
S3 Departure
S4 Search / Observation
S5 Discovery / Approach
S6 Pursuit Dilemma
S7 Cave / Shelter Discovery
S8 Threat Build-up
S9 Threat Response
S10 Hunt Result
S11 Return
S12 Firelight / Reunion
S13 Role Completion
```

이 번호는 스토리 의미를 위한 기획 ID이며 학생에게 노출하지 않는다.

Stage 07 Skeleton은 이 전체를 구현하지 않고 **S0~S4 + S7의 작은 proof**를 선택적으로 검증한다.

---

# 3. 공통 Scene Spec

각 주요 Scene은 최소한 다음을 정의한다.

```text
Scene ID
Purpose
Location
World time/light
Role-true POV
Visible body / held item
Cast position
Primary attention target
Direct action
Immediate world response
Relationship / consequence memory
Curriculum Anchor
Terminology Reveal
Learning Evidence
Screen Treatment
Scaffold fallback
Accessibility / reduced-effects
Callback
```

모든 항목을 복잡한 데이터 DSL로 만들라는 뜻은 아니다.

문서/테스트에서 의미를 놓치지 않기 위한 체크다.

---

# 4. S0 — Role Orientation

목표:

- 현재 누구의 관점인지 명료하게 알림
- 장문의 시대 설명 없이 시작

Player text 예:

> **사냥을 나선 사람의 관점**

> 아직 완전히 밝지 않다.

행동:

> `눈을 뜬다`

Curriculum Anchor:

- 없음. 시작부터 용어 목록을 띄우지 않는다.

---

# 5. S1 — Fire / Morning Presence

Location:

- 현재 공동체 거처

POV:

- 불 가까이에 앉거나 웅크린 1인칭

Visible body:

- 손
- 무릎

World:

- 불
- 임시 덮개/막집 흔적
- 주변 사람

Primary Attention:

- R

Beat:

1. 불의 따뜻한 색
2. R이 학생을 봄
3. 주변에서 사람들이 하루를 준비

Curriculum Anchor:

- 불
- 임시 거처의 성격

Terminology Reveal:

- 아직 `막집`을 강제하지 않아도 됨.

Learning Evidence 후보:

- `fire-experienced-as-living-center`

---

# 6. S2 — Tool Handoff

Location:

- 같은 불 앞

Primary Attention:

```text
R의 손 → 돌도구 → 내 손
```

Direct Action:

> `돌도구를 받는다`

Immediate Response:

- 도구가 상대 손에서 사라짐
- 내 오른손/몸에 같은 도구가 유지됨

Curriculum Anchor:

- 뗀석기
- 주먹도끼

Terminology Beat:

도구를 **받은 뒤** 짧게 표시.

예:

> **뗀석기 · 주먹도끼**
> 돌을 깨뜨리거나 떼어 만든 대표적인 도구

규칙:

- 전체 화면 모달 금지
- 1~2문장
- 수초 뒤 사라지거나 다음 행동과 공존
- 즉시 퀴즈 금지

Learning Evidence:

- `tool-received-in-embodied-context`
- `handaxe-term-revealed`

---

# 7. S3 — Departure

Goal:

- 사람들과 출발
- 거처와 거리 생김

Body:

- standing / walking
- 동일한 주먹도끼 유지

Beat:

- H1/H2 합류
- R의 “해가 지기 전에 돌아와.”
- 불이 점점 작아짐

Curriculum Anchor:

- 이동 생활의 몸 감각
- 불/거처가 귀환 기준이 되는 경험

Learning Evidence:

- `same-tool-continuity-after-departure`

---

# 8. S4 — Search / Observation

Goal:

- 공격보다 관찰이 먼저임을 체험

Body:

- crouch
- 손/무릎
- 주먹도끼

Direct Actions 후보:

- 눌린 풀 보기
- 흙 만지기
- 가지 치우기
- 도구 끝으로 지면 주변을 살피기

Curriculum Anchor:

- 주먹도끼가 전시 유물이 아니라 실제 행동 도구임

Terminology:

- 이미 명명했으므로 반복 카드 불필요

Learning Evidence:

- `embodied-observation-performed`
- `tool-reused-in-living-action` — 실제 기능 행동을 구현한 뒤 사용

---

# 9. S5 — Discovery / Approach

Goal:

- 사람의 반응을 따라 사냥감/흔적 발견

Beat:

- H1 정지
- H2 시선 변화
- 소리 감소
- 학생이 직접 방향 확인

Curriculum Anchor:

- 사냥은 단순 공격이 아니라 관찰과 협력의 과정

---

# 10. S6 — Pursuit Dilemma

Goal:

- 더 갈지 돌아갈지 실제 고민

반드시 먼저 보이는 정보:

- 낮아진 해
- 거처가 보이지 않음
- H1/H2 피로
- 이어지는 흔적 가능성
- 손에 들린 도구
- 아침 모티프

Choice Fairness:

- 선택 결과는 같을 필요 없음
- 선택 전에 판단 근거가 충분히 보여야 함

---

# 11. S7 — Cave / Shelter Discovery

이 Scene은 **동굴 생활 교과 개념을 자연스럽게 체험하는 핵심 이벤트**다.

Trigger 후보:

- 더 멀리 추적함
- 주변 확인 선택
- 특정 route/랜드마크

단, 한 경로만 필수 역사 개념을 독점하지 않도록 다른 경로에서도 동굴/바위 그늘 개념은 후속 역할 또는 다른 장면에서 보장한다.

## Entry Beat

```text
바위 면
→ 그 아래 검은 틈
→ H2가 멈춤
→ 학생이 가까이 봄
```

시작부터 `동굴` label을 크게 띄우지 않는다.

## Inspection Actions

- `입구를 살핀다`
- `바닥을 살핀다`
- `안쪽을 본다`
- `주변 길을 돌아본다`

## Information

학생이 직접 확인할 수 있는 것:

- 넓이
- 비/바람을 피할 가능성
- 마른 바닥 일부
- 어두운 안쪽
- 동물 흔적 가능성
- 물/식량과의 거리 미확인

## Relationship Beat

H1/H2가 서로 다른 부분을 본다.

예:

> “안이 꽤 넓어.”

> “안쪽은 먼저 봐야 해.”

## Curriculum Reveal

탐색 후 짧게:

> **구석기 사람들은 동굴이나 바위 그늘도 생활 공간으로 이용했다.**

이 문구는 `여기가 새 집이다`라는 판정이 아니다.

## Consequence Memory

- `cave-shelter-noticed`
- `cave-shelter-inspected`
- `cave-shelter-seemed-useful`
- `cave-animal-sign-seen`

## Learning Evidence

- `natural-shelter-evaluated`

---

# 12. S8 — Threat Build-up

위험은 다음 순서로 만든다.

```text
이상 징후
→ 주변 사람 반응
→ 내 몸 정지
→ 직접 확인
→ 화면/소리 accent
```

동굴 안 또는 바깥 모두 가능하지만 동굴을 항상 공포 장소로 고정하지 않는다.

Curriculum Anchor:

- 불/거처/협력이 왜 중요했는지를 후속적으로 강화할 수 있음

---

# 13. S9 — Threat Response

Direct Actions 후보:

- 같이 붙어 움직임
- 조용히 거리 만듦
- 안전한 방향 확인

결과:

- 성공/실패 점수 없음
- 거리/피로/관계/시간 변화 가능

Screen Treatment:

- 상황이 충분하면 accent/strong-accent 허용
- 반복 red damage flash 금지

---

# 14. S10 — Hunt Result

다축 결과:

```text
foodOutcome
returnBurden
riskExperience
relationshipMemory
shelterDiscovery
```

예:

- food-secured
- empty-handed
- returned-late
- tracked-far
- cave-shelter-inspected
- stayed-close-under-danger

학생에게 내부 ID를 노출하지 않는다.

---

# 15. S11 — Return

Goal:

- 랜드마크와 기억으로 거처 복귀

Body:

- 피로한 팔
- 동일한 주먹도끼 continuity

Callback:

- R의 말
- 새 동굴 기억
- 불빛

Curriculum Anchor:

- 이동 거리
- 거처의 중요성
- 불

---

# 16. S12 — Firelight / Reunion

Goal:

- `사냥 결과`보다 `사람들에게 돌아옴`을 감정적으로 회수

가능한 variation:

- food secured / empty-handed
- late / earlier
- cave discovered / not discovered
- risk intensity

동굴 memory가 있으면:

> “오는 길에 큰 바위 아래 넓은 곳이 있었어.”

후속 질문:

- 물은 가까운가?
- 바닥은 어땠는가?
- 위험 흔적은 없었는가?

즉시 이사 결정 금지.

---

# 17. S13 — Role Completion

RoleCompletion은 qualitative signal만 전달한다.

예:

```text
hunt-food-secured
hunt-returned-empty-handed
hunt-returned-late
hunt-natural-risk-experienced
hunt-cave-shelter-noticed
hunt-cave-shelter-inspected
hunt-returned-to-community
```

점수/HP/EXP 없음.

---

# 18. Curriculum Anchor가 분기를 독점하지 않게 한다

동굴 발견이 선택 분기라면 모든 학생이 그 장면을 보지 않을 수 있다.

따라서 `동굴/바위 그늘 생활`이라는 핵심 개념은 전체 경험에서 다른 경로로도 보장한다.

예:

- Hunt에서 직접 발견
- Gather에서 바위 그늘을 잠시 이용
- Camp/Common Evening에서 다른 사람이 발견한 장소를 이야기

# **필수 개념은 분기 하나에 가두지 않는다.**

---

# 19. Terminology Timing 원칙

명확히 짚을 용어:

- 뗀석기
- 주먹도끼
- 막집
- 동굴/바위 그늘 생활

단, 한 Scene에 몰아서 설명하지 않는다.

`막집`은 Camp/통합에서 더 자연스럽게 명명할 수 있다.

---

# 20. Scaffold

학생이 행동을 못 찾으면:

```text
사람의 시선/손짓
→ 환경 cue
→ 약한 hotspot
→ 짧은 행동 문구
→ 명확한 hint
```

동굴 Scene에서도 `동굴을 클릭하세요`보다

- H2 시선
- 입구의 밝기 차
- 바닥 흔적

같은 세계 cue를 우선한다.

---

# 21. Reduced Effects

Reduced Effects에서도 유지해야 하는 것:

- 인물 위치
- 도구 continuity
- curriculum reveal text
- cave 입구/안쪽 정보
- 위험 원인
- 선택과 결과

줄일 수 있는 것:

- sway
- jolt
- focus
- transition animation

---

# 22. Stage 07 Skeleton Boundary — Revised

Stage 07에서 전체 Hunt를 구현하지 않는다.

다만 새 Curriculum Anchor 설계가 실제 브라우저에서 자연스러운지 검증하기 위해 다음 proof를 포함한다.

```text
Role Orientation
→ Fire
→ Tool Handoff
→ 짧은 뗀석기/주먹도끼 reveal
→ Join / Departure
→ Crouch Observation
→ Cave / Natural Shelter Discovery proof
→ Perspective Transition proof
```

Stage 07에서 증명할 것:

- 용어 reveal이 몰입을 깨지 않는가?
- 주먹도끼가 몸에 계속 붙어 있는가?
- cave가 카드가 아니라 실제 공간처럼 읽히는가?
- “살기 괜찮아 보인다”는 판단이 설명 없이 생길 수 있는가?

Stage 07에서 아직 증명하지 않을 것:

- 전체 사냥 분기
- 실제 threat/horror climax
- 최종 주먹도끼 사용 애니메이션
- 실제 이사 결정

---

# 23. Stage 04 Acceptance Gate

- Scene과 Beat가 구분되는가?
- terminology reveal을 별도 거대 state로 만들지 않는가?
- 주먹도끼가 receive 이후 held item으로 유지되는가?
- `뗀석기/주먹도끼`를 짧고 정확하게 명명하는가?
- 사냥 전 관찰이 직접 행동인가?
- 동굴 발견이 공간 탐색 Scene으로 존재하는가?
- 학생이 동굴의 장점/불확실성을 직접 확인하는가?
- 동굴이 자동 정답 거처가 아닌가?
- 분기가 핵심 교과 개념을 독점하지 않는가?
- 위험과 screen treatment가 세계 사건 뒤에 오는가?
- 결과가 다축 qualitative state인가?
- 귀환과 공동체가 끝까지 남는가?
- Stage 07 범위가 전체 Hunt로 팽창하지 않는가?

이 Gate를 통과한 PLAYFLOW만 Stage 05~07의 입력으로 사용한다.
