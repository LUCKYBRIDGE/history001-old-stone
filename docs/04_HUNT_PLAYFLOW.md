# 구석기 역사 체험 웹게임
## Stage 04 — Hunt PLAYFLOW v9 / Socially Embodied Scene-State + Curriculum Beats

> 목적: `docs/03_HUNT_STORY.md`의 Hunt 서사를 실제 브라우저 상호작용으로 변환하되, Player가 역할 설명을 읽는 것이 아니라 **이미 살아오던 공동체의 사람·몸·공간·기억 속에서 사건을 겪도록** 한다.
>
> 상위 기준:
> - `docs/00_CANONICAL_BASELINE.md`
> - `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - `docs/03_HUNT_STORY.md`
> - `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
> - `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
>
> Stage 07.5 상세 staging/screenplay는 `handoff/DAY1_COMMUNITY_HUNT_FIRST5_SCREENPLAY.md`를 implementation contract로 참고한다. 해당 handoff는 이 canonical을 덮지 않는다.

---

# 1. Scene ≠ Beat

## Scene

Reducer/state에 올릴 가치가 있는 의미 단위다.

Scene 변경 기준:

- 목표가 달라짐
- 직접 행동 가능성이 달라짐
- 위치/시간/결과/관계가 의미 있게 달라짐
- 후속 shared event / signal이 필요함

## Beat

같은 Scene 안의 표현 변화다.

- actor stop / gaze
- NPC-to-NPC 짧은 대화
- sound drop
- 손 transition
- 짧은 dialogue
- terminology reveal
- focus/jolt/exposure
- 이름이 생활 속에서 불리는 순간

# **모든 대사·시선·이름·교과 reveal을 reducer state로 만들지 않는다.**

---

# 2. 주요 Scene 흐름

```text
S0 Sensory Orientation
S1 Fire / Living Community Presence
S2 Tool Handoff
S3 Departure
S4 Search / Shared Observation
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

Stage 07.5는 전체 Hunt가 아니라 **S0~S4 + S7 일부 + Perspective Proof의 social/embodied causal proof**다.

---

# 3. Character naming in this proof

R/H1/H2는 authoring ID다.

Stage 07.5 screenplay/runtime 검증에서는 다음 provisional call-name을 사용할 수 있다.

```text
R  → 아루
H1 → 다무
H2 → 누아
```

규칙:

- 실제 구석기 언어/실존 인명이라고 주장하지 않음
- Historical Reconstruction
- production final lock 아님
- 이름 머리 위 상시 nameplate 금지
- `아루 = 도구 주는 사람`, `다무 = 동행자`, `누아 = 관찰자` 같은 기능 설명 금지
- 이름은 다른 사람의 부름, 짧은 subtitle, 반복 사건으로 기억시킴

Player 자신은 Stage 07.5에서 이름을 화면에 고정하지 않는다.

---

# 4. 공통 Scene Spec

각 주요 Scene은 필요한 범위에서 다음을 정의한다.

```text
Scene ID
Purpose
Location
World time/light
Role-true POV / character knowledge
Visible body / held item
Cast position + ambient activity
Primary attention target
Direct action
Immediate world response
Shared day event / relationship memory
Curriculum Anchor
Terminology Reveal
Learning Evidence
Screen Treatment
Scaffold fallback
Accessibility / reduced-effects
Historical Fact / Reconstruction note
Callback
```

이 목록을 generic Scene DSL로 구현하지 않는다.

---

# 5. S0 — Sensory Orientation

목표:

- 역할명이나 시대 설명 없이 `내가 이곳에서 눈을 뜬다`를 먼저 느끼게 함
- 세계가 Player 입력 이전부터 존재한다는 감각을 만듦

Player-facing 금지:

- `사냥을 나선 사람의 관점`
- `당신은 사냥꾼입니다`
- 학습 목표
- 캐릭터 소개 카드

가능한 시작:

```text
거의 닫힌 시야
→ 불빛
→ 장작 소리
→ 발소리
→ Player에게 설명하려는 것이 아닌 NPC-to-NPC 짧은 대화
```

예:

> `그건 젖었어.`
>
> `저쪽 걸 써.`

Direct Action:

> `눈을 뜬다`

Curriculum Anchor:

- 없음

---

# 6. S1 — Fire / Living Community Presence

Location:

- 현재 공동체 생활 거점

POV:

- 불 가까이 앉거나 웅크린 1인칭

Visible body:

- 자연스럽게 보이는 손/무릎 일부

World:

- 불
- 현재 임시 거처
- 아루/다무/누아
- 최소 1~2개의 background community activity

핵심 규칙:

- 모두가 Player를 동시에 바라보지 않음
- background actor는 Player가 눈을 떠도 자기 일을 계속함
- Player는 사람을 처음 소개받는 관광객처럼 행동하지 않음

가능한 Beat:

1. fire warmth
2. background actor가 불/재료/거처 관련 자기 행동을 계속
3. 아루와 짧은 eye contact
4. 다른 사람이 `아루.`라고 자연스럽게 부름
5. 아루가 반응하여 학생이 이름과 사람을 연결

Curriculum Anchor:

- 불
- 임시 거처의 생활 성격

Terminology Reveal:

- 아직 `막집`을 강제 명명하지 않음

Historical Reconstruction:

- 구체 공동체 배치
- 가상 이름
- 이 아침의 행동/대화

---

# 7. S2 — Tool Handoff

Primary physical event:

```text
아루의 손
→ canonical handaxe
→ 내 오른손
```

아루는 교과 개념을 설명하지 않는다.

가능한 짧은 말:

> `손.`

Direct Action:

> `손을 내민다`

Immediate Response:

- 아루 손에서 같은 도구가 사라짐
- transfer contact가 보임
- 내 오른손에 동일 도구가 유지됨

Curriculum Anchors:

```text
paleolithic-chipped-stone
handaxe
```

Terminology Beat:

> **뗀석기**  
> 돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다. 지금 손에 든 것은 그 대표적인 예인 **주먹도끼**다.

규칙:

- Experience 뒤 naming
- 전체 화면 modal 금지
- 1~2문장
- 아루가 교과 문장을 말하지 않음
- 즉시 퀴즈 금지
- 다음 world action과 공존

Learning Evidence:

- `tool-received-in-embodied-context`
- `chipped-stone-term-revealed`
- `handaxe-term-revealed`

Shared Day Event:

- `aru-handaxe-handoff`

---

# 8. S3 — Departure

Goal:

- Player가 정지 NPC들을 활성화하는 것이 아니라 사람들의 흐름에 합류해 나감
- 현재 생활 거점과 실제 거리가 생김

Body:

- standing / walking
- 동일 handaxe continuity

Beat:

1. 다무는 이미 준비했거나 몇 걸음 움직이기 시작함
2. 누아는 Player보다 다른 지형/바깥쪽을 보고 있을 수 있음
3. 다무: `가자.`
4. Player가 일어나 따라감
5. 뒤쪽 아루: `해 지기 전에 와.`
6. 필요하면 다무가 `알았어.`처럼 짧게 답함
7. 불·사람·현재 임시 거처가 점점 작아지고 가려짐

중요:

- 모든 대사가 Player에게만 향하지 않음
- `해 지기 전에 와`는 퀘스트 UI가 아니라 일상적 관계 말
- 후반 dusk / return / Camp waiting에서 callback

Shared Day Event:

- `aru-return-line`
- `departed-from-fire-together`

Learning Evidence:

- `same-tool-continuity-after-departure`

---

# 9. S4 — Search / Shared Observation

Goal:

- 공격보다 관찰이 먼저임을 체험
- `다무는 관찰을 돕는 NPC`라고 읽는 대신 실제 함께 걷고 멈춘 사건을 만듦

Travel continuity:

- 불이 작아짐
- 사람 목소리가 줄어듦
- 거처가 시야에서 사라짐
- landmark 하나 이상을 지남

Relationship Beat:

```text
다무가 앞서 걷음
→ Player가 뒤처지면 속도를 조금 낮춤
→ 갑자기 다무의 발소리가 멎음
→ 다무가 몸을 낮춤
→ `잠깐.`
→ Player가 곁에 몸을 낮춤
→ 다무가 몸을 비켜 같이 볼 수 있게 함
→ Player가 직접 눌린 풀/흙/가지 변화를 봄
```

Direct Actions 후보:

- 곁에 몸을 낮춘다
- 눌린 풀을 본다
- 흙을 만진다
- 가지를 치운다

주먹도끼는 자연스러운 위치에서 continuity를 유지한다.

Stage 07.5에서는 단순 관찰만으로 `tool-reused-in-living-action`을 기록하지 않는다.

Shared Day Event:

- `player-damu-shared-ground-observation`

---

# 10. S5 — Discovery / Approach

Goal:

- 사람의 행동 변화와 Player의 직접 관찰을 통해 흔적/대상을 발견

규칙:

- 시스템 배너가 먼저 `흔적 발견`을 선언하지 않음
- 다른 사람이 정답을 먼저 말하지 않음
- 누아/다무가 항상 같은 역할 기능을 수행할 필요 없음

가능한 흐름:

```text
actor stop/gaze/body change
→ Player가 변화 알아차림
→ 직접 방향/지면 확인
→ 흔적 또는 대상 인식
```

Stage 08 책임.

---

# 11. S6 — Pursuit Dilemma

선택 전에 설명 카드보다 world state로 보이는 정보:

- 낮아진 해
- 보이지 않는 거처
- 함께 온 사람들의 몸 상태
- 이어지는 흔적 가능성
- 손의 주먹도끼
- 아침의 `해 지기 전에 와.`

사람 사이에 판단 차이가 있을 수 있다.

예:

> `조금만 더.`

다른 사람이 해를 보고:

> `늦어.`

누구도 항상 정답 NPC가 아니다.

# **Choice Fairness = 결과 평등이 아니라 인과의 납득 가능성**

Stage 08 책임.

---

# 12. S7 — Natural Shelter Discovery

이 Scene은 자연 거처 생활을 설명 카드가 아니라 장소 판단으로 경험하는 이벤트다.

Stage 07.5 causal entry:

```text
한동안 이동
→ 누아의 attention/body direction이 먼저 달라짐
→ Player가 그 변화를 알아차림
→ Player가 직접 그 방향을 봄
→ 그 뒤에만 큰 바위 아래 어두운 공간이 target으로 드러남
→ 가까이 감
```

# **누아가 멈췄다는 이유만으로 Player knowledge에 cave 정보가 자동 추가되지 않는다. Player가 실제로 봐야 한다.**

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

사람 반응 후보:

> `안이 꽤 넓어.`

> `안쪽은 먼저 봐야 해.`

이 대사를 특정 authoring 기능과 영구 결합하지 않는다.

Curriculum Reveal:

> **동굴 / 바위 그늘**  
> 구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.

이 시점에 `막집` 비교 설명을 끌어오지 않는다.

Historical Reconstruction:

- 이 날 이 사람들이 이 특정 공간을 발견한 사건
- 누가 먼저 멈추고 어떤 말을 했는지

Learning Evidence:

- `natural-shelter-evaluated`
- `cave-shelter-term-revealed`

Shared Day Event는 participant/witness/knowledge를 구분한다.

---

# 13. S8 — Threat Build-up

```text
이상 징후
→ 주변 사람 반응
→ 내 몸 정지
→ 직접 확인
→ screen/sound accent
```

동굴 안/밖 모두 가능하다.

동굴을 항상 공포 장소로 고정하지 않는다.

Stage 08 책임.

---

# 14. S9 — Threat Response

행동 후보:

- 같이 붙어 움직임
- 조용히 거리 만듦
- 안전한 방향 확인

결과:

- 점수 없음
- 거리/피로/관계/시간 변화 가능
- 누가 누구에게 가까이 붙었는지 shared memory가 될 수 있음

Stage 08 책임.

---

# 15. S10 — Hunt Result

다축 결과 예:

```text
foodOutcome
returnBurden
riskExperience
sharedRelationshipMemory
shelterDiscovery
```

학생에게 내부 ID를 노출하지 않는다.

Stage 08 책임.

---

# 16. S11 — Return

귀환은 지도 숫자보다 공간 기억으로 느낀다.

```text
익숙한 landmark 재등장
→ 생활 흔적
→ 멀리 같은 불빛
→ 사람 소리
→ 현재 거처
```

- 피로한 몸
- handaxe continuity
- 아침 귀환 말 callback
- 같이 돌아가는 사람 상태

아침의 불은 생활 배경, 저녁의 불은 사람들에게 돌아간다는 증거가 된다.

Stage 08 책임.

---

# 17. S12 — Firelight / Reunion

Goal:

- 사냥 결과보다 `사람들에게 돌아옴`을 감정적으로 회수

Variation:

- food secured / empty-handed
- late / earlier
- shelter candidate discovered / not discovered
- risk intensity
- shared relationship memory

아루가 `걱정 담당 NPC`처럼 결과를 설명하지 않는다.

가능한 표현:

- 먼저 일어남
- Player의 손보다 얼굴을 먼저 봄
- 침묵
- `왔네.` 같은 짧은 말

새 장소 정보는 질문/대화의 씨앗이 되지만 즉시 이사 결론을 내리지 않는다.

Stage 08 책임.

---

# 18. S13 — Role Completion

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

# 19. Perspective Proof / Recontextualization

Stage 07.5에서 다른 자리 proof를 할 때 Player에게:

- `이제 아루의 관점입니다`
- `아침에 도구를 건넨 사람의 관점`

같은 정답 제목을 먼저 보여주지 않는다.

대신:

```text
몸/손 상태 변화
→ 아까 손에 있던 handaxe가 없음
→ 같은 불/거처의 다른 위치
→ 멀어지는 세 사람
→ 그중 한 사람 오른손에 같은 handaxe
→ 방금 들었던 귀환 말/공간 관계
→ 학생이 같은 아침의 반대편임을 스스로 연결
```

이 proof가 Camp role = 아루를 영구 확정하는 것은 아니다.

---

# 20. Curriculum Anchor 분기 독점 방지

Hunt에서 자연 거처 후보를 못 본 학생도 전체 체험에서 `동굴/바위 그늘 생활` 개념을 만날 수 있어야 한다.

대체 경로:

- Gather에서 바위 그늘 이용
- Camp에서 전달받은 발견 이야기
- Common Evening/Conceptualization

이때 다른 사람이 본 사실을 현재 POV가 전지적으로 자동 소유하지 않는다.

---

# 21. Terminology Timing

공식 규칙:

- 경험 뒤 명명
- 한 순간 한 개념 묶음
- 1~2문장
- 중요한 감정/위협 peak와 겹치지 않음
- 반복 설명 금지

도구는 상위/하위 관계를 정확히 함께 연결한다.

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

---

# 22. Stage 07.5 First-Five Proof Boundary

다음 순서를 우선 구현한다.

```text
눈뜨기 전 ambient life
→ 눈을 뜸
→ background actors는 자기 행동을 계속
→ 생활 속에서 아루 이름을 들음
→ 아루 handaxe handoff
→ Experience 뒤 뗀석기 → 주먹도끼 naming
→ 다무/누아가 이미 움직이는 흐름에 합류
→ 아루: `해 지기 전에 와.`
→ 불/거처/사람 소리가 실제로 멀어짐
→ 다무가 먼저 속도를 바꾸고 멈춤
→ Player가 곁에 몸을 낮춤
→ 함께 지면 변화를 직접 관찰
→ 누아 attention-shift seed
```

그 뒤 기존 Stage 07.5 proof:

```text
Player가 누아의 attention을 직접 따라봄
→ 그 뒤 natural shelter target reveal
→ inspection
→ 동굴 / 바위 그늘 naming
→ Perspective Proof
```

Stage 08의 S5/S6/S8~S13 전체 구현은 여전히 시작하지 않는다.

---

# 23. Stage 04 Acceptance Gate

- Scene/Beat가 구분되는가?
- 역할 제목 없이 첫 20~30초가 성립하는가?
- 세계가 Player 입력 전부터 생활 중인 것처럼 보이는가?
- 핵심 인물을 기능 label이 아니라 이름/행동/사건으로 구별하는가?
- NPC-to-NPC interaction이 최소 일부 존재하는가?
- Player가 공동체의 기존 구성원처럼 행동하는가?
- 아루 handoff가 interpersonal contact event인가?
- `뗀석기 → 주먹도끼` 관계가 정확한가?
- current shelter가 cave보다 먼저 존재하는가?
- 다무의 행동 변화가 Player 관찰보다 먼저인가?
- 실제 기능 사용 evidence를 너무 일찍 기록하지 않는가?
- 누아 attention change 뒤 Player가 직접 보기 전 cave target을 미리 보여주지 않는가?
- natural shelter discovery가 설명보다 탐색/판단인가?
- cave cue에서 막집을 조기 비교하지 않는가?
- fact/reconstruction을 Teacher/Debug에서 구분 가능한가?
- threat가 world→person→body→treatment 순서인가?
- World Truth와 character knowledge를 구분하는가?
- Player에 authoring ID/Stage/internal evidence가 노출되지 않는가?

# **이 Gate를 자동 테스트만으로 PASS 선언하지 않는다. 관계 식별·세계 독립성·몰입감은 실제 Human QA가 확인한다.**
