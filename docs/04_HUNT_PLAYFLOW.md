# 구석기 역사 체험 웹게임
## Stage 04 — Hunt PLAYFLOW v8 / Scene-State + Curriculum Beats

> 목적: Hunt STORY v8을 실제 브라우저 상호작용으로 변환한다.
>
> 상위 기준:
> - `docs/00_CANONICAL_BASELINE.md`
> - `docs/03_HUNT_STORY.md`
> - `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`

---

# 1. Scene ≠ Beat

## Scene

Reducer/state에 올릴 가치가 있는 의미 단위.

Scene 변경 기준:

- 목표가 달라짐
- 직접 행동 가능성이 달라짐
- 위치/시간/결과/관계가 의미 있게 달라짐
- 후속 signal이 필요함

## Beat

같은 Scene 안의 표현 변화.

- actor stop / gaze
- sound drop
- 손 transition
- 대사 한 줄
- 짧은 terminology reveal
- focus/jolt/exposure

# **교과 용어 reveal을 무조건 별도 Scene으로 만들지 않는다.**

---

# 2. 주요 Scene 흐름

```text
S0 Role Orientation
S1 Fire / Current Shelter Presence
S2 Tool Handoff
S3 Departure
S4 Search / Observation
S5 Discovery / Approach
S6 Pursuit Dilemma
S7 Natural Shelter Discovery
S8 Threat Build-up
S9 Threat Response
S10 Hunt Result
S11 Return
S12 Firelight / Reunion
S13 Role Completion
```

학생에게 Scene ID는 노출하지 않는다.

Stage 07 Skeleton은 전체 Hunt가 아니라 S0~S4와 S7의 작은 proof다.

---

# 3. 공통 Scene Spec

각 주요 Scene은 최소 다음을 정의한다.

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
Historical Fact / Reconstruction note
Callback
```

이 목록을 generic DSL로 만들 필요는 없다.

---

# 4. S0 — Role Orientation

목표:

- 현재 관점 명료화
- 긴 시대 설명 없이 시작

Player text:

> **사냥을 나선 사람의 관점**

행동:

> `눈을 뜬다`

Curriculum Anchor:

- 없음

---

# 5. S1 — Fire / Current Shelter Presence

Location:

- 현재 공동체 생활 거점

POV:

- 불 가까이 앉거나 웅크린 1인칭

Visible body:

- 손
- 무릎

World:

- 불
- 현재 임시 거처
- 주변 사람

Primary Attention:

- R

Beat:

1. fire warmth
2. 현재 임시 거처가 생활 공간으로 보임
3. R이 학생을 봄
4. 주변 사람들이 하루를 준비

Curriculum Anchor:

- 불
- 임시 거처의 생활 성격

Terminology Reveal:

- Stage 07에서는 아직 `막집`을 강제하지 않음

Historical Reconstruction:

- 이 구체 거처 배치와 R/H1/H2는 재구성

---

# 6. S2 — Tool Handoff

Primary Attention:

```text
R의 손 → 돌도구 → 내 손
```

Direct Action:

> `돌도구를 받는다`

Immediate Response:

- 상대 손에서 도구가 사라짐
- 내 몸에 같은 도구가 유지됨

Curriculum Anchors:

```text
paleolithic-chipped-stone
handaxe
```

Terminology Beat:

> **뗀석기**  
> 돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다. 지금 손에 든 것은 그 대표적인 예인 **주먹도끼**다.

Learning Evidence:

- `tool-received-in-embodied-context`
- `chipped-stone-term-revealed`
- `handaxe-term-revealed`

규칙:

- 전체 화면 modal 금지
- 1~2문장
- 행동 뒤 명명
- 즉시 퀴즈 금지

---

# 7. S3 — Departure

Goal:

- H1/H2와 출발
- 현재 거처와 거리 생김

Body:

- standing / walking
- 동일한 주먹도끼 유지

Beat:

- H1/H2 합류
- R의 “해가 지기 전에 돌아와.”
- 불·사람·현재 임시 거처가 점점 작아짐

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
- 도구 끝으로 주변 살피기

Stage 07은 embodied observation proof만 담당한다.

`tool-reused-in-living-action`은 실제 기능 행동이 구현된 Stage 08 이후에만 기록한다.

---

# 9. S5 — Discovery / Approach

Goal:

- 사람의 반응을 따라 흔적/대상 발견

Beat:

- H1 정지
- H2 시선 변화
- 소리 감소
- 학생이 직접 방향 확인

발견은 시스템 카드보다 사람/환경 반응으로 시작한다.

---

# 10. S6 — Pursuit Dilemma

반드시 선택 전에 보이는 정보:

- 낮아진 해
- 거처가 보이지 않음
- H1/H2 피로
- 이어지는 흔적 가능성
- 손에 들린 도구
- 아침 모티프

# **Choice Fairness = 결과 평등이 아니라 인과의 납득 가능성**

---

# 11. S7 — Natural Shelter Discovery

이 Scene은 자연 거처 생활을 설명 카드가 아니라 장소 판단으로 경험하는 이벤트다.

Entry:

```text
한동안 이동
→ 큰 바위 아래 어두운 공간
→ H2가 멈춤
→ 학생이 직접 봄
→ 가까이 감
```

Inspection:

- 입구
- 바닥
- 안쪽
- 바람
- 주변 길

정보:

- 넓이
- 비/바람을 피할 가능성
- 마른 바닥 일부
- 어두운 안쪽
- 다른 동물 이용 가능성
- 물/식량 거리 미확인

Relationship Beat:

> “안이 꽤 넓어.”

> “안쪽은 먼저 봐야 해.”

Curriculum Reveal:

> **동굴 / 바위 그늘**  
> 구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.

이 시점에 `막집` 비교 설명을 끌어오지 않는다.

Historical Reconstruction:

- 이 날 Hunt 인물들이 이 특정 공간을 발견하는 사건은 재구성

Learning Evidence:

- `natural-shelter-evaluated`
- `cave-shelter-term-revealed`

---

# 12. S8 — Threat Build-up

```text
이상 징후
→ 주변 사람 반응
→ 내 몸 정지
→ 직접 확인
→ screen/sound accent
```

동굴 안/밖 모두 가능.

동굴을 항상 공포 장소로 고정하지 않는다.

---

# 13. S9 — Threat Response

행동 후보:

- 같이 붙어 움직임
- 조용히 거리 만듦
- 안전한 방향 확인

결과:

- 점수 없음
- 거리/피로/관계/시간 변화 가능

Screen Treatment:

- 상황이 충분하면 accent/strong-accent 허용
- 반복 damage flash 금지

---

# 14. S10 — Hunt Result

다축 결과 예:

```text
foodOutcome
returnBurden
riskExperience
relationshipMemory
shelterDiscovery
```

학생에게 내부 ID를 노출하지 않는다.

---

# 15. S11 — Return

- 랜드마크와 기억으로 복귀
- 피로한 팔
- 주먹도끼 continuity
- R의 말 callback
- 새 장소 기억 가능
- 멀리 보이는 불

---

# 16. S12 — Firelight / Reunion

Goal:

- 사냥 결과보다 `사람들에게 돌아옴`을 감정적으로 회수

Variation:

- food secured / empty-handed
- late / earlier
- shelter candidate discovered / not discovered
- risk intensity
- relationship memory

새 장소 정보는 질문/대화의 씨앗이 되지만 즉시 이사 결론을 내리지 않는다.

---

# 17. S13 — Role Completion

qualitative signal 예:

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

# 18. Curriculum Anchor 분기 독점 방지

Hunt에서 자연 거처 후보를 못 본 학생도 전체 체험에서 `동굴/바위 그늘 생활` 개념을 만날 수 있어야 한다.

대체 경로:

- Gather에서 바위 그늘 이용
- Camp에서 다른 사람의 발견 이야기
- Common Evening/Conceptualization

---

# 19. Terminology Timing

공식 규칙:

- 경험 뒤 명명
- 한 순간 한 개념 묶음
- 1~2문장
- 중요한 감정/위협 peak와 겹치지 않음
- 반복 설명 금지

도구는 상위/하위 관계를 함께 명확히 한다.

---

# 20. Stage 07 Proof Boundary

Stage 07 실제 구현:

```text
S0 Orientation
→ S1 Fire + Current Shelter
→ S2 Tool Handoff + Terminology Beat
→ S3 Departure
→ S4 Crouch Observation
→ S7 Natural Shelter Notice/Inspection + Terminology Beat
→ Perspective Proof
```

Stage 05/06/08~13은 Stage 08 책임이다.

---

# 21. Stage 04 Acceptance Gate

- Scene/Beat가 구분되는가?
- `뗀석기 → 주먹도끼` 관계가 정확한가?
- current shelter가 cave보다 먼저 존재하는가?
- 실제 기능 사용 evidence를 너무 일찍 기록하지 않는가?
- natural shelter discovery가 설명보다 탐색/판단인가?
- cave cue에서 막집을 조기 비교하지 않는가?
- fact/reconstruction을 Teacher/Debug에서 구분 가능한가?
- threat가 world→actor→body→treatment 순서인가?
- 필수 Anchor가 한 분기에 갇히지 않는가?
- Player에 내부 ID/Stage가 노출되지 않는가?
