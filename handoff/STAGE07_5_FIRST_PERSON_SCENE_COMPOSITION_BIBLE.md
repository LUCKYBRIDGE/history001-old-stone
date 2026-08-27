# Stage 07.5 — First-Person Scene Composition Bible v1

> 상태: **Design / Previsual Implementation Contract — 구현 선행 필수 문서**
>
> 이 문서는 새로운 Technical SSOT가 아니다.
>
> 소유권:
> - 관계/agency: `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - Hunt story: `docs/03_HUNT_STORY.md`
> - browser Scene/Beat: `docs/04_HUNT_PLAYFLOW.md`
> - technical/runtime: `docs/06_TECH_BLUEPRINT.md`
> - narrative staging grammar: `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
> - visual principles: `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
> - production execution/readiness: `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
>
> 목적: **각 장면을 구현하기 전에 무엇이 보이고, 어디에 있고, 어떻게 움직이며, 누구의 어떤 말이 언제 들리고, Player의 몸과 도구가 어떻게 이어지는지까지 잠근다.**
>
> 이 문서의 장면 구도가 Human/Project-owner에게 승인되기 전에는 해당 장면의 production asset 또는 Stage 08 수준 runtime 구현을 시작하지 않는다.

---

# 0. 이 문서가 해결하는 문제

최근 Human QA에서 확인된 핵심 문제는 다음이다.

- 이름/관계/인과는 전보다 좋아졌지만 **화면만 보고 지금 무슨 행동 중인지 충분히 읽히지 않음**
- Player 손/팔/도구가 행동의 일부보다 overlay/HUD처럼 보일 수 있음
- actor가 서 있는 위치만 바뀌고 실제 `걷기 / 멈춤 / 숙이기 / 바라보기 / 건네기`가 충분히 다른 몸으로 읽히지 않음
- 풍경이 장면의 원인/결과보다 배경판처럼 느껴짐
- 설명문과 버튼을 읽어야 현재 상황을 이해하게 됨
- 각 장면이 같은 Day 1의 같은 몸·사람·물건·공간이라고 느껴지는 continuity가 약함

따라서 앞으로의 기준은 다음이다.

# **Scene 먼저 설계 → Freeze-frame으로 이해 가능 여부 검증 → continuity 검증 → responsive crop 검증 → 그 뒤 구현**

---

# 1. Scene Composition Lock Gate

각 Scene/Beat는 구현 전에 아래 항목이 모두 정의되어야 한다.

```text
1. Scene/Beat ID
2. Dramatic purpose
3. Player knowledge at entry
4. Camera profile / eye line / look direction
5. Player body visibility
6. Left hand / right hand action
7. Held item position / grip / continuity
8. Actor identities and screen positions
9. Actor body pose / gaze / current action
10. Background community / non-player activity
11. World plate / foreground / occlusion / landmark
12. Light direction / time-of-day continuity
13. Ambient sound / local sound / dialogue source
14. Exact Player-facing dialogue
15. Dialogue timing relative to action
16. Player direct action
17. Immediate visual response
18. Curriculum cue timing and placement
19. UI/action affordance placement
20. Transition from previous Beat
21. Transition to next Beat
22. 4:3 / 16:10 / 16:9 crop safety
23. Historical fact vs reconstruction boundary
24. Production mode A/B/C
25. Required anchor/reference assets
26. Human acceptance criteria
```

하나라도 핵심 항목이 비어 있으면 구현으로 넘어가지 않는다.

---

# 2. Global First-Person Composition Contract

## 2.1 Master composition space

기준 논리 좌표:

```text
1600 × 900 / 16:9
```

문서에서는 편의를 위해 `%` 좌표를 함께 사용한다.

- x=0: 화면 왼쪽
- x=100: 화면 오른쪽
- y=0: 화면 위
- y=100: 화면 아래

4:3 crop을 고려한 핵심 수평 안전 구역:

```text
Essential Safe X ≈ 13% ~ 87%
```

핵심 contact, 얼굴/상체 방향, handaxe, 학습 target은 이 범위 안에서 이해 가능해야 한다.

## 2.2 Depth bands

```text
Foreground       0 ~ 2.0m 감각 — Player body / near grass / contact
Near midground   2 ~ 5m 감각 — 핵심 actor interaction
Midground        5 ~ 12m 감각 — 다른 actor / fire / shelter edge
Background       12m+ 감각 — terrain silhouette / distant group / landmark
```

실제 미터값을 역사 사실로 제시하는 것이 아니라 화면 공간 감각을 통일하기 위한 제작 기준이다.

## 2.3 Player body rule

Player 몸은 HUD가 아니다.

절대 규칙:

- 좌우 팔이 매 장면 대칭으로 고정되지 않음
- 행동과 무관하면 손/팔을 숨김
- 손이 보이면 반드시 `무엇을 하고 있는지` 설명해야 함
- 오른손 dominant continuity 유지
- 무릎은 seated/crouch에서만 의미 있게 등장
- 같은 Day 1 동안 손 크기, 팔 길이, 피부/오염 상태가 같은 사람으로 읽혀야 함
- production appearance는 reference pack 승인 전 세부 lock 금지

## 2.4 Canonical handaxe continuity

Day 1 handaxe는 모든 Beat에서 **동일 물체**다.

잠금 항목:

- 자루 없음
- 금속 없음
- fictional canonical object
- 한국 구석기 실물 morphology reference 기반
- 한쪽 edge silhouette/표면 특징을 identity marker로 유지
- Player 오른손 grip orientation은 이유 없이 뒤집히지 않음

연속성:

```text
Aru hand
→ shared contact
→ Player right hand
→ held carry
→ crouch/observation에서도 유지
→ perspective proof에서 departing Player의 오른손에 동일 물체
```

## 2.5 Dialogue visual rule

금지:

- 머리 위 상시 nameplate
- 큰 RPG dialogue box
- actor를 가리는 말풍선
- 긴 설명 대사
- 모든 대사가 Player에게만 향함

기본:

- 1~2줄
- 실제 화자 방향과 화면 위치가 일치
- 첫 인식이 필요한 경우 speaker call-name은 작게 보조 가능
- off-screen dialogue는 화면 edge 방향성을 이용
- 대사가 없어도 몸 동작만으로 Beat의 핵심이 먼저 읽혀야 함

## 2.6 Player action affordance

현재 큰 하단 story panel을 최종 목표로 삼지 않는다.

목표:

- world frame 안에 통합
- 하단 중앙 또는 하단 1/3의 safe zone
- 최대 1줄
- 장면 핵심 contact/target을 가리지 않음
- action wording은 실제 몸 동작이어야 함

예:

```text
손을 내민다
몸을 낮춘다
누아가 보는 쪽을 본다
```

설명형 버튼 금지:

```text
주먹도끼의 특징을 확인한다
구석기 시대의 생활 모습을 알아본다
```

## 2.7 Sensory caption rule

화면으로 전달할 수 없는 감각만 짧게 보조한다.

가능:

- `불 냄새가 먼저 난다.`
- `발소리가 멎는다.`

금지:

- 화면에서 이미 보이는 행동을 긴 문장으로 다시 해설
- 인물의 역할/성격을 narration으로 설명

## 2.8 Lighting continuity

현재 first-five의 시간대는 같은 아침이다.

잠금:

- camp fire: 좌측/좌중앙의 따뜻한 국소광
- ambient dawn: 차갑고 낮은 전체광
- 출발 이후 fire warmth는 감소
- 이동 중 갑자기 정오/석양 색으로 바뀌지 않음
- cave/rock shelter는 방향광이 줄어들며 내부 대비가 커짐

REFERENCE-LOCK REQUIRED:

- 정확한 계절/식생 palette
- 상세 의복 재질
- 피부/머리 외형 세부

---

# 3. Continuity Ledger — First Five

| 요소 | S0 | S1 | S2 | S3 | S4/S5 | S7 | Perspective |
|---|---|---|---|---|---|---|---|
| Player camera | 거의 닫힘 | seated | seated close | rise/standing | walking→standing→crouch | standing→approach | Aru-side seated/standing camp view |
| Player right hand | 없음 | 일부/휴식 | handoff에 진입 | handaxe 보유 | carry / ground obs에서도 보유 | carry | 비어 있음 |
| Handaxe | offscreen | Aru 근처 | Aru→Player contact | Player | Player | Player | departing former-Player |
| Aru | camp | near fire | near contact | behind at camp | offscreen behind | offscreen | current POV owner |
| Damu | camp edge | preparing | background | ahead / moving | stop→crouch/shared obs | nearby | departing group |
| Nua | camp edge | scanning | background | outward attention | later attention shift | gaze source / nearby | departing group |
| Fire | sound/glow | near | near | receding | absent | absent | near again |
| Shelter | implied | visible | visible | receding | absent | absent | visible again |

연속성 위반은 장면 미학보다 우선해서 수정한다.

---

# 4. World Plate Families

## WP-CAMP-DAWN-A

사용:

- S1 Fire
- S2 Handoff
- S3 Join/Departure 직전
- Perspective Proof

잠금되는 공간 관계:

```text
shelter/material zone — screen left
fire — left-center
open departure direction — screen right / right-center
Aru interaction zone — center-left
Damu/Nua preparation zone — right midground
```

같은 family 내부에서 새 Beat마다 배경을 재생성하지 않는다.

## WP-DEPARTURE-PATH-A

사용:

- departure
- early travel

특징:

- 뒤쪽 camp가 처음에는 보임
- 이동하면 fire/shelter가 작아지고 foreground가 통과
- landmark seed 1개 이상 유지

## WP-GROUND-OBS-A

사용:

- Damu stop
- Player crouch/shared ground observation

같은 위치를 standing camera와 crouch camera로 본다.

## WP-ROCK-SHELTER-A

사용:

- Nua attention shift 이후 reveal
- cave notice
- cave inspect

`동굴`을 정답 아이콘처럼 중앙에 갑자기 생성하지 않는다.
환경 일부로 먼저 존재하지만 Player가 시선을 돌리기 전에는 composition/focus상 인식 target이 아니다.

---

# 5. SC00 — Sensory Orientation / 눈뜨기 전

## Purpose

세계가 Player 입력 이전부터 존재한다는 감각.

## Camera

- profile: `eyes-closed-seated`
- 화면 85~95% dark
- 완전한 검정이 아니라 좌하단/좌중단에 fire glow가 눈꺼풀 너머로 약하게 번짐
- camera movement 없음

## Player body

- 손/팔/무릎 보이지 않음
- first-person을 몸 이미지로 설명하지 않음

## World / image composition

직접 world plate를 선명하게 보여주지 않는다.

시각:

- warm diffuse glow: x 20~35 / y 55~80
- 나머지 dark cool tone

## Audio

레이어 순서:

1. 낮은 장작 crackle
2. 가까운 재료가 바닥에 놓이는 소리
3. 발걸음 1~2회
4. Player를 위한 설명이 아닌 짧은 생활 대화

## Dialogue

off-screen A:

> `그건 젖었어.`

off-screen B:

> `저쪽 걸 써.`

speaker name 표시하지 않음.

## Player action

> `눈을 뜬다`

## Transition

- 450~750ms eyelid/open exposure transition
- 갑자기 white flash 금지
- open 이후 바로 S1의 camp spatial layout과 연결

## Human acceptance

텍스트 없이도:

- 아직 눈을 뜨지 않았음
- 주변에 이미 사람이 있음
- 불 근처임

이 느껴져야 함.

---

# 6. SC01 — Fire / Living Community Presence

## Purpose

`나 + 핵심 NPC 3명` 세트가 아니라 이미 생활 중인 공동체.

## Camera

- profile: `seated-downward-neutral`
- horizon: y 43~47
- visual eye direction: fire/people 사이
- 약간 아래를 보는 seated feel

## Player body

- 무릎: 좌하단/우하단 가장자리에서 10~18% 정도만 노출
- 손: 필요 시 한 손의 일부만 허벅지 근처에 자연스럽게 보임
- 두 팔을 중앙에 세우지 않음

## World placement — 16:9 master

- temporary shelter/material zone: x 6~24 / y 42~74
- fire: x 27~34 / y 62~74
- Aru: x 40~48 / feet y 73~78
- Damu: x 67~75 / feet y 70~75
- Nua: x 80~86 / feet y 69~74
- background actor B1: x 20~26
- background actor B2: x 10~15

핵심 actor는 4:3에서도 잘리지 않게 한다.
Nua는 가장 우측이어도 head/body direction이 crop 후 남아야 한다.

## Actor actions

Aru:

- Player가 눈을 뜬 직후 바로 정면 staring 금지
- fire/material을 보다가 0.8~1.5초 사이 Player 쪽을 짧게 봄

Damu:

- 물건/몸을 준비하는 작은 행동
- Player를 기다리는 idle NPC 포즈 금지

Nua:

- 처음부터 바깥 방향으로 시선을 한 번 빼는 습관 seed

Background:

- B1 fire tending
- B2 material/shelter work

## Dialogue

B2 또는 background source:

> `아루.`

타이밍:

- 학생이 화면을 1초 이상 본 뒤
- Aru가 그 소리에 자연스럽게 반응

그 뒤 다른 짧은 work line 가능:

> `여기 둬.`

## UI

Persistent story paragraph 금지 목표.
필요 시 sensory caption 1줄만 허용.

Player action:

> `아루 쪽을 본다`

## Human acceptance

freeze-frame + 2초 관찰로:

- 공동체 생활 중
- Aru가 주변 사람 중 하나
- 다른 사람도 자기 행동 중

이 보여야 한다.

---

# 7. SC02 — Aru → Handaxe → Player Handoff

## Purpose

이 Beat는 교과 reveal보다 먼저 **사람 사이의 물리적 사건**이어야 한다.

## Production mode

# **Mode B — Unified Contact Keyframe 필수**

손·도구를 따로 생성한 뒤 억지로 합성하는 것을 기본 방식으로 사용하지 않는다.

## Camera

- profile: `handoff-close`
- seated eye height continuity 유지
- camera yaw는 S1 대비 ±5° 이내
- horizon 크게 바뀌지 않음

## Composition

Aru torso/head:

- x 38~47
- y 28~72

contact zone:

- x 49~59
- y 57~69

Player right forearm entry:

- lower-right x 76~90에서 들어와 contact zone으로 향함
- 화면 중앙을 세로로 가리지 않음

Handaxe:

- contact 순간 화면 높이의 약 9~14% 범위
- 지나치게 작아 stone chip처럼 보이지 않고, FPS weapon처럼 크지도 않음
- Aru의 hand + Player hand 양쪽과 실제 contact relation이 보임

## Three-beat contact choreography

### A. Offer

- Aru가 tool의 잡는 면/edge를 짧게 확인
- 상체가 Player 쪽으로 약간 기울어짐
- 손이 먼저 움직임

Dialogue:

> `손.`

### B. Shared contact

- Player 오른손이 palm/grip-ready 형태로 들어옴
- 150~350ms 정도 두 사람의 손과 도구가 동시에 접촉하는 beat
- handaxe가 공중에 떠 있지 않음

### C. Release

- Aru fingers/hand가 풀림
- Player grip이 닫힘
- 동일 object가 Player 쪽으로 8~15% 이동

## Player action

> `손을 내민다`

## UI

- action affordance는 contact zone을 가리지 않음
- dialogue는 Aru torso 가까운 upper-middle area 또는 접근성 caption line

## Historical integrity

- 이 구체 handoff 사건은 reconstruction
- handaxe morphology는 approved Korean Paleolithic reference 기반

## Human acceptance

설명문 없이 screenshot sequence A/B/C만 봐도:

> `저 사람이 내게 돌도구를 건넸다`

가 읽혀야 한다.

---

# 8. SC03 — Tool Ownership / Experience → Name

## Purpose

`아이템 획득 화면`이 아니라 방금 받은 물체가 내 손에 남았음을 확인.

## Camera

- S2와 같은 spatial axis
- camera가 갑자기 tool close-up studio shot으로 바뀌지 않음

## Player body / item

- Aru 손은 contact zone에서 빠져나감
- Player right hand가 lower-right~lower-center에서 handaxe를 자연스럽게 들어 확인
- 왼팔은 필요하지 않으면 화면 밖

권장 tool 위치:

- center x 56~67
- lower y 62~82

Aru:

- x 40~46에 그대로 있으나 attention intensity는 낮아짐

## Curriculum cue

Experience 뒤 등장.

표현:

```text
뗀석기
돌을 깨뜨리거나 떼어 만든 도구.
지금 손의 것은 대표적인 예인 주먹도끼.
```

정확한 canonical wording은 04/01E를 따른다.

배치:

- world 안 좌상단 또는 빈 negative-space zone
- 최대 화면 폭 28~32%
- hand/tool/contact 영역과 분리
- 베이지색 큰 별도 카드/페이지처럼 보이지 않음
- 2~4초 뒤 약화/축소 가능

## Transition to next

Player가 일어나는 동안 tool은 오른손에서 유지.
tool이 사라졌다가 다음 Scene에 갑자기 다시 나타나면 FAIL.

## Human acceptance

- `아루가 준 바로 그 물건`으로 느껴짐
- terminology가 사건 위에 붙은 이름이지 수업 페이지 전환처럼 느껴지지 않음

---

# 9. SC04 — Rise / Damu Already Moving / Nua Elsewhere

## Purpose

NPC를 버튼으로 활성화하는 것이 아니라 **이미 시작된 사람들의 움직임에 합류**.

## Camera transition

- seated → standing
- vertical camera rise는 450~700ms
- horizon y 44 → y 39~42
- 과도한 head bob 금지

## Player body

rise 중:

- 필요 시 한 손/무릎이 짧게 프레임 edge에 등장

standing 완료:

- 양팔 대부분 화면 밖
- handaxe 가진 오른손만 low-right에 20~35% 정도 부분 노출 가능

## Actor placement

Aru:

- x 34~42 / camp near fire

Damu:

- x 65~74
- 이미 one-step walking pose
- torso forward, 반대 팔/다리 swing으로 `걷는 중` 읽힘

Nua:

- x 79~86
- Damu/Player가 아니라 바깥 right-forward 방향을 봄
- head-only가 아니라 torso orientation도 8~15° 차이

## Dialogue

Damu:

> `가자.`

대사 전에 이미 1~2걸음 움직임이 보여야 한다.

## Player action

> `따라간다`

또는 rise와 합치면:

> `일어나 따라간다`

## Human acceptance

정지 screenshot만 봐도:

- Damu는 이동 중
- Nua는 다른 곳에 주의를 둠
- Aru는 camp에 남아 있음

이 구별돼야 한다.

---

# 10. SC05 — Departure / Camp Recedes

## Purpose

거리와 관계를 설명하지 않고 실제 공간 변화로 느끼게 함.

## Camera

- profile: `forward-neutral-walk`
- forward movement
- camera bob: 매우 약함, motion sickness 방지
- actor/world parallax가 camera bob보다 중요

## Composition at departure start

- Damu: x 55~63 / midground
- Nua: x 70~78 / slightly farther
- Player direction: screen center-right
- Aru: behind-left x 20~28
- fire: x 15~22
- shelter: x 4~18

## 2-stage spatial progression

### Stage A — edge of camp

camp still clearly visible.
Aru line:

> `해 지기 전에 와.`

source는 뒤쪽/left.

Damu는 완전히 돌아서 멈추지 않고 짧게:

> `알았어.`

### Stage B — actual departure

- fire apparent size 40~60% 감소
- Aru apparent size 감소
- shelter foreground occlusion으로 일부 가려짐
- background community voices 감소
- footstep/dry grass sound 증가

## Player body / tool

- right handaxe low-right
- walking 중에는 화면 10~18%만 차지
- tool이 화면 중앙 weapon view처럼 고정되지 않음

## Landmark seed

WP-DEPARTURE-PATH-A에 하나의 반복 landmark를 둔다.

예:

- 갈라진 큰 바위
- 쓰러진 굵은 나무

정확한 자연물은 reference pack에서 lock.

## Human acceptance

- 같은 camp를 떠나고 있음
- 뒤에 남은 사람이 있음
- 실제로 거리가 생기고 있음

이 설명 없이 읽혀야 함.

---

# 11. SC06 — Damu Stops / Player Still Standing

## Purpose

가장 중요한 causal proof 중 하나.

# **Damu가 먼저 멈춘다. Player는 아직 몸을 낮추지 않았다.**

## Camera

- standing eye line 유지
- 이전 walking camera가 멎음
- ground를 아직 크게 내려다보지 않음

## Player body

- Player crouch 금지
- 양 무릎/양팔 중앙 노출 금지
- 오른손 handaxe low-right partial

## Actor

Damu:

- x 45~55
- walking stride → sudden stop
- 0.2~0.4초 후 상체가 아래/ground 쪽으로 기울기 시작
- 한 무릎 또는 low crouch로 내려감

Nua:

- x 68~78 / farther
- 아직 독립적인 scan 유지 가능

## Ground evidence

# 아직 target처럼 명확히 보이면 안 됨.

일반 ground texture와 구분이 어려워야 한다.

## Sound

- Damu footstep stop가 명확
- Player footsteps 1박 늦게 멎음

## Dialogue

Damu:

> `잠깐.`

대사는 stop 이후.

## Player action

> `다무 곁에 몸을 낮춘다`

## Human acceptance

설명 없이:

- 앞 사람이 갑자기 멈췄다
- 그 사람이 아래를 보려 한다
- 나는 아직 서 있다

가 읽혀야 함.

---

# 12. SC07 — Player Crouches / Shared Ground Observation

## Purpose

Player 행동 후에만 새 information이 시야에 들어옴.

## Camera

- profile: `crouch-downward`
- vertical drop + downward pitch
- horizon y 55~62
- ground occupies lower 55~65%

## Player body

right hand:

- handaxe는 버리지 않음
- lower-right edge, blade/object가 ground target을 가리지 않게 outward angle

left hand:

- 선택 1: left knee/ground brace
- 선택 2: 풀/작은 가지를 살짝 치움

# ground touch를 실제 direct action으로 만들 경우 left-hand contact를 Mode B keyframe 후보로 승격한다.

## Damu placement

- x 37~47
- Player보다 약간 앞/왼쪽
- crouched torso
- 몸을 옆으로 비켜 target 시야를 열어 줌
- pointer pose처럼 손가락으로 정답을 찍지 않음

## Ground target

- x 49~61
- y 69~82
- 눌린 풀 / 흐트러진 흙 / 작은 가지 변화
- footprint 아이콘처럼 과장된 검은 도장 금지

## Dialogue

visual read 이후 Damu:

> `봤어?`

## Player knowledge

이 Scene에서 처음 ground evidence가 명확해진다.

## Human acceptance

- Player가 몸을 낮춘 결과 지면이 달라 보임
- Damu와 같은 것을 함께 보고 있음
- handaxe continuity 유지

---

# 13. SC08 — Rise / Nua Attention Shift

## Purpose

Nua가 `관찰 기능 NPC`가 아니라 **먼저 무언가에 반응한 사람**으로 읽혀야 한다.

## Camera

- crouch → standing rise
- 다시 forward-neutral
- cave/rock shelter는 아직 target으로 제시하지 않음

## Actor composition

Damu:

- x 42~50 / neutral recovery

Nua:

- x 62~72 / midground
- initial body axis는 forward
- 300~550ms 사이 head → shoulder → torso 순으로 한쪽 방향으로 turn
- turn angle visual target: 20~35°

## Player body

- 손 대부분 frame 밖
- handaxe low-right 아주 부분적
- Nua를 읽는 장면에서 Player body가 시선을 빼앗지 않음

## Audio

- 주변 ambient를 10~20% 줄여 attention shift를 돕는 것은 가능
- supernatural sting 금지

## Dialogue

기본안:

- 없음

필요하면 매우 짧게:

> `...`

보다 몸짓을 우선.

## Player action

> `누아가 보는 쪽을 본다`

## Human acceptance

screenshot + 짧은 motion만으로:

> `누아가 뭔가 다른 곳을 보고 있다`

가 읽혀야 함.

---

# 14. SC09 — Follow Gaze / Rock Shelter Revealed

## Purpose

Player가 직접 방향을 바꿨기 때문에 새로운 공간을 발견.

## Camera

- horizontal pan 15~28°
- duration 350~650ms
- hard cut보다 continuity 우선

## Composition

Nua:

- pan 초기에 screen left/left-center edge에 일부 남겨 gaze source continuity 확보
- target reveal 후에는 frame 밖으로 나가도 됨

rock shelter/cave candidate:

- x 62~82
- y 38~80
- 정중앙 icon처럼 배치하지 않음
- 주변 지형과 이어진 실제 공간

foreground:

- near rock/grass occlusion 1개 이상

## Player body

- 환경을 읽는 데 방해되면 손/도구 완전히 숨겨도 됨

## Dialogue

처음 reveal 순간 설명 대사 없음.

## Player action

> `가까이 가 본다`

## Human acceptance

- 누아의 attention → 내 gaze turn → 공간 발견 causal chain이 느껴짐
- cave가 시스템이 생성한 퀘스트 marker처럼 보이지 않음

---

# 15. SC10 — Rock Shelter Inspection

## Purpose

`동굴 = 집` 정답 암기가 아니라 보호 가능성과 불확실성을 동시에 읽음.

## Camera

- profile: `cave-forward-dark`
- approach하면서 opening scale 증가
- entry edge/rock occluder가 frame 일부를 가림

## Player body

기본:

- right hand handaxe low-right

필요한 경우:

- left hand가 rock edge를 짚는 contact beat

이 contact를 사용하면 **Mode B 또는 locked contact variation**으로 제작.

## Actor placement

Nua:

- opening 한쪽 x 58~68
- 안쪽을 보되 Player 시야를 막지 않음

Damu:

- 반대쪽 x 32~43 또는 뒤쪽
- 두 사람이 동일한 pose로 서 있지 않음

## World information

보여야 할 것:

- 일부 마른 바닥
- 머리 위 두꺼운 rock cover
- 안쪽 darkness
- possible animal trace / uncertainty cue

보이면 안 되는 것:

- 완성된 집 내부처럼 정돈된 공간
- 자동 안전 표시
- `정답: 동굴` UI

## Dialogue

visual inspection 이후에만:

Nua 또는 적절한 인물:

> `안이 꽤 넓어.`

다른 인물:

> `안쪽은 먼저 봐야 해.`

특정 역할 기능과 영구 결합하지 않는다.

## Curriculum cue

Player가 공간을 충분히 본 뒤:

```text
동굴 / 바위 그늘
구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.
```

작은 contextual annotation.

## Human acceptance

- 보호 가능성
- 어두운 안쪽의 불확실성
- 자연 공간

세 가지가 동시에 읽혀야 함.

---

# 16. SC11 — Perspective Recontextualization / Aru-side Proof

## Purpose

`이제 아루 관점입니다`라고 설명하지 않고 **같은 아침의 의미를 다시 느끼게 함**.

## Transition

- short dark/blink or audio bridge
- fire sound가 다시 가까워짐
- 500~900ms

## Camera

- WP-CAMP-DAWN-A 동일 family
- camp 쪽 viewpoint
- 이전 Player가 떠났던 방향을 바라봄

## Player/Aru body

- handaxe 없음
- 손이 꼭 보일 필요 없음
- 만약 손을 보이면 S0~S10 Player hand와 동일 hand asset을 재사용하면 안 됨. 현재 POV owner가 다르기 때문.
- Aru body appearance anchor가 아직 production-lock 전이면 손을 숨기는 것이 안전

## Departing group

화면 right/mid-background:

- 3명 group
- 그중 former Player의 오른손에 동일 canonical handaxe가 보여야 함
- Damu/Nua silhouette continuity 유지

## Fire / shelter

- S1과 같은 위치 관계
- 동일 fire/shelter family
- `다른 세계`처럼 재생성 금지

## Dialogue / memory

이 장면의 핵심 line:

> `해 지기 전에 와.`

표현은 두 방식 중 하나를 Human QA에서 선택:

A. 현재 Aru가 실제로 그 말을 하는 순간을 다시 보여 줌
B. 이미 말한 직후의 echo/memory로 들림

# production lock 전 A/B를 확정해야 한다.

## UI

금지:

- `같은 아침`
- `아루의 관점`
- `관점 전환 완료`

같은 메타 제목을 Player 화면의 핵심 설명으로 사용하는 것.

필요한 경우 접근성용 숨은/보조 레이블은 별도 처리.

## Human acceptance

학생이 설명 없이:

> `아까 돌을 건넨 사람 쪽에서 내가 떠나는 모습을 보는 것 같다`

라고 알아차릴 가능성이 충분해야 한다.

---

# 17. Dialogue Timing Sheet

| Beat | Speaker | Line | Action before line | Line timing | Action after line |
|---|---|---|---|---|---|
| S0 | offscreen A | `그건 젖었어.` | 생활 소리 이미 진행 | eye-closed | 다른 actor 응답 |
| S0 | offscreen B | `저쪽 걸 써.` | A line | 0.4~1.2s 후 | Player가 계속 듣음 |
| S1 | background | `아루.` | Player가 눈뜸 / 생활 계속 | Aru 소개가 아니라 work context | Aru head turn |
| S2 | 아루 | `손.` | tool 확인 + 손 뻗기 시작 | contact 전 | Player hand enters |
| S4 | 다무 | `가자.` | 이미 walking 시작 | 이동 중 | Player joins |
| S5 | 아루 | `해 지기 전에 와.` | group departure 시작 | behind/left source | Damu reply / 계속 걷기 |
| S5 | 다무 | `알았어.` | 걷는 중 | 멈추지 않음 | forward continuation |
| S6 | 다무 | `잠깐.` | footsteps stop + body lowers | stop 이후 | Player chooses crouch |
| S7 | 다무 | `봤어?` | Player crouch + target visible | visual read 이후 | continue travel |
| S10 | 누아/상황별 | `안이 꽤 넓어.` | opening 직접 봄 | inspection 중 | second caution line |
| S10 | 다무/상황별 | `안쪽은 먼저 봐야 해.` | darkness/uncertainty visible | first line 이후 | curriculum naming later |
| S11 | 아루 | `해 지기 전에 와.` | departing group visible | A/B 방식 lock 필요 | perspective meaning closes |

대사는 actor 기능을 설명하지 않는다.

---

# 18. Body / Hand / Tool Pose Sheet

| Pose ID | Scene | Left hand | Right hand | Handaxe | Knee/body | Key requirement |
|---|---|---|---|---|---|---|
| `P0-hidden` | S0 | hidden | hidden | none | hidden | eyes closed sensory start |
| `P1-seated-rest` | S1 | optional low edge | optional low edge | none | knees partial | no HUD symmetry |
| `P2-receive-reach` | S2 | hidden | reaches from lower-right | shared contact | seated | contact chain readable |
| `P3-held-inspect` | S3 | mostly hidden | holds near lower-center/right | visible | seated→rise | same object |
| `P4-rise-carry` | S4 | brief support only | low-right carry | visible partial | standing transition | body exits frame after rise |
| `P5-walk-carry` | S5 | hidden/edge | low-right carry | partial | standing | no FPS weapon lock |
| `P6-standing-stop` | S6 | hidden | low-right | partial | **Player still standing** | do not pre-crouch |
| `P7-crouch-ground` | S7 | brace/part grass | handaxe held aside | visible partial | crouched | target not occluded |
| `P8-attention-neutral` | S8 | hidden | minimal/hidden | optional partial | standing | Nua gets visual priority |
| `P9-env-look` | S9 | hidden | hidden preferred | may hide | standing | environment gets priority |
| `P10-cave-inspect` | S10 | optional rock brace | handaxe low-right | visible | standing/lean | depth/contact |
| `P11-aru-side` | S11 | preferably hidden pre-anchor | hidden | none | camp POV | do not reuse former Player hand |

---

# 19. Actor Pose / Behavior Sheet

## Aru

Required Stage 07.5 poses:

```text
A1 camp-neutral-work
A2 brief-player-recognition
A3 handaxe-check
A4 offer-tool
A5 release-tool
A6 departure-watch / short farewell
A7 perspective-owner position
```

Do not substitute one standing silhouette for all seven.

## Damu

```text
D1 preparing
D2 already-walking
D3 walking-reply
D4 sudden-stop
D5 lower-to-ground
D6 shared-crouch / body-shift-to-open-view
D7 recovery-standing
D8 cave-inspection stance
```

## Nua

```text
N1 camp-outward-scan
N2 departure-walk
N3 travel-neutral
N4 head-turn-seed
N5 shoulder/torso attention-shift
N6 rock-shelter inspection
```

핵심:

- N4→N5는 `gaze line` 하나로 대체하지 않는다.
- D2→D4→D6는 위치 이동만으로 대체하지 않는다.

---

# 20. Image / Asset Composition Plan

## Unified contact keyframes — mandatory candidates

1. `KF-HANDOFF-01` — Aru hand + canonical handaxe + Player right hand
2. `KF-GROUND-01` — Player crouch + nearby ground interaction (left-hand contact를 실제 구현할 경우)
3. `KF-CAVE-BRACE-01` — rock-edge touch를 실제 구현할 경우

## Layered reusable families

- `WORLD-CAMP-DAWN-A`
- `WORLD-DEPARTURE-PATH-A`
- `WORLD-GROUND-OBS-A`
- `WORLD-ROCK-SHELTER-A`

Actor anchor families:

- `ARU-v1`
- `DAMU-v1`
- `NUA-v1`

Player body anchor:

- `HUNT-PLAYER-BODY-v1`

Tool:

- `DAY1-HANDAXE-v1`

이 ID들은 production manifest naming contract 후보이며 실제 파일/런타임 타입을 추가할 때는 06과 07B 규칙을 따른다.

---

# 21. Responsive Composition Contract

## 16:9

master composition.

## 16:10

- vertical space가 늘어도 body를 과도하게 크게 확대하지 않음
- story/action affordance가 actor feet/contact를 덮지 않음

## 4:3

가장 엄격한 crop test.

필수:

- handoff contact x 49~59 zone 유지
- Aru face/upper body + Player hand + handaxe 동시 가시
- Damu/Nua 둘 다 핵심 Beat에서 의미를 잃지 않음
- cave reveal target 유지
- perspective proof departing group + handaxe 유지

4:3 때문에 실패하면 `object-position`/layer placement를 조정하지, 핵심 actor를 무작정 작게 만들지 않는다.

---

# 22. Visual Continuity QA Matrix

각 Scene 전환마다 사람이 직접 확인한다.

## S1 → S2

- 같은 camp인가
- Aru가 같은 사람 위치/광원을 유지하는가
- camera가 teleport하지 않는가

## S2 → S3

- 같은 handaxe인가
- Aru 손에서 사라진 순간 Player 손에 같은 물체가 남는가

## S3 → S4

- Player가 실제로 일어난 느낌인가
- handaxe가 유지되는가
- Damu/Nua 위치 관계가 납득 가능한가

## S4 → S5

- 사람들과 같은 방향으로 출발했는가
- camp가 뒤로 이동하는가

## S5 → S6

- 갑자기 전혀 다른 숲/길로 teleport하지 않는가
- Damu walking pose가 stop pose로 이어지는가

## S6 → S7

- **Player camera가 이때 처음 낮아지는가**
- ground target이 이때 처음 명확해지는가

## S7 → S8

- 다시 일어나는 camera transition이 있는가
- handaxe continuity가 유지되는가

## S8 → S9

- Nua의 gaze 방향과 camera pan 방향이 일치하는가

## S9 → S10

- 같은 rock shelter를 가까이 본 것인가
- opening geometry가 다른 장소처럼 변하지 않는가

## S10 → S11

- transition은 perspective recontextualization임을 장면 자체로 이해 가능하게 하는가
- 같은 morning camp family인가

---

# 23. Scene-Level Human Acceptance Test

각 Scene은 최소 다음 테스트를 통과해야 한다.

## A. 1-second freeze-frame test

장면을 1초만 봤을 때 최소 다음 중 하나를 설명할 수 있어야 한다.

- 누가 누구에게 무엇을 건네는지
- 누가 걷고 있는지
- 누가 멈췄는지
- 내가 서 있는지/쪼그린지
- 누가 다른 방향을 보고 있는지
- 내가 무엇을 발견하려는지

## B. No-caption test

Player-facing 설명문을 숨겨도 핵심 행동을 이해할 수 있어야 한다.

## C. Contact test

handoff에서:

```text
Aru hand → handaxe → Player right hand
```

경로를 눈으로 따라갈 수 있어야 한다.

## D. Direction test

Nua attention shift에서:

- Nua body orientation
- Player camera turn
- revealed environment

방향이 논리적으로 이어져야 한다.

## E. Continuity test

같은 사람/도구/장소가 다음 Beat에서 다른 asset처럼 느껴지지 않아야 한다.

## F. Crop test

4:3 / 16:10 / 16:9 모두 핵심 사건 유지.

---

# 24. Historical / Reconstruction Boundaries

## Historical anchor로 사용할 수 있는 것

- 구석기 뗀석기 사용
- handaxe는 뗀석기의 대표적인 예
- 자연 공간인 동굴/바위 그늘 이용 가능
- 불 이용
- 구체 handaxe morphology는 승인된 한국 구석기 실물 reference 기반

## Reconstruction

- 아루/다무/누아라는 이름
- 이 세 사람이 같은 아침에 이 순서로 행동한 사건
- 누가 어떤 말을 했는지
- 누가 먼저 멈췄는지
- 특정 camp layout
- 특정 route / landmark
- Player가 오른손잡이라는 production continuity attribute

## Reference review 뒤에만 lock

- exact clothing construction
- exact hairstyle
- detailed skin/hair appearance
- exact season/vegetation
- exact temporary shelter reconstruction

---

# 25. Implementation Freeze Rule

이 문서가 추가된 뒤 다음 원칙을 적용한다.

# **새로운 장면 구현보다 장면 설계 승인 우선.**

현재 Stage 07.5 runtime은 Human QA용 prototype으로 유지한다.

다음 구현 작업 전에:

1. 이 Scene Composition Bible 검토
2. 사용자/프로젝트 오너가 주요 scene composition 방향 승인
3. unresolved scene-level P1 정리
4. reference가 필요한 visual 항목 분리
5. 그 뒤 runtime/asset implementation branch 생성

특히 금지:

- CSS를 먼저 만들고 장면 의미를 나중에 맞추기
- AI image를 먼저 생성하고 그 이미지에 gameplay를 맞추기
- scene마다 독립 이미지 생성
- final asset quality로 잘못된 camera/body composition을 덮기

---

# 26. Stage 08 확장 규칙

현재 문서는 Stage 07.5 proof를 상세 설계한다.

Stage 08의 S5~S13도 구현 전에 **동일한 수준의 Scene Composition Sheet**를 먼저 작성한다.

즉 전체 Hunt의 앞으로의 순서는:

```text
Story / Relationship Canon
→ Scene / Beat Canon
→ Scene Composition Bible
→ Reference Lock
→ Previsual Approval
→ Runtime + Asset Implementation
→ Human Visual QA
```

이다.

# **Implementation은 설계를 발견하는 단계가 아니라, 승인된 장면을 정확하게 구현하는 단계가 되어야 한다.**
