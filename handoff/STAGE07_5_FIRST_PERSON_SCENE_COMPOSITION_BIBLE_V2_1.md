# Stage 07.5 — First-Person Scene Composition Bible v2.1

> 상태: **Project-owner Approved Composition Contract / Previsual Build Ready**
>
> 목적: Stage 07.5의 SC00~SC11을 실제 production asset/runtime 구현 전에 하나의 승인된 연출 계약으로 고정한다.
>
> 이 문서는 `STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`와 `STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`의 승인 내용을 단일 기준으로 통합한 v2.1이다.
>
> Technical SSOT는 계속 `docs/06_TECH_BLUEPRINT.md`다. 이 문서는 scene composition / previsual / visual production handoff 계약이다.

---

# 0. Approval State

Project-owner가 다음 7개 보정 방향을 승인했다.

1. SC03→SC04 terminology와 world movement 동시 진행
2. SC05 diagonal departure → forward settle
3. SC08~SC10 handaxe off-frame continuity
4. SC11 same-moment temporal synchronization
5. fixed bottom action HUD 금지
6. SC10 explicit animal spoor 기본 제외
7. Nua 4:3 crop tune

따라서 이 7개는 더 이상 후보가 아니라 **LOCKED**다.

현재 상태:

```text
Scene Composition Review = PASS
Project-owner Confirmation = PASS
Previsual Artifact Approval = NOT YET
Human Gameplay Gate = FAIL
Stage 08 = BLOCKED
```

---

# 1. Production Thesis

Stage 07.5의 화면은 설명문을 읽고 이해하는 교육 웹페이지가 아니다.

# **1초 정지 화면에서도 누가 무엇을 하는지, 내 몸이 어떤 상태인지, 같은 사람·도구·공간이 다음 행동으로 이어지는지 읽혀야 한다.**

구현 순서:

```text
Historical/Curriculum Anchor
→ Social/Narrative Purpose
→ Camera/Composition
→ Body/Contact Choreography
→ World/Actor Continuity
→ Responsive Safety
→ Previsual Artifact
→ Human Visual Review
→ Production Asset/Runtime
```

금지:

```text
이미지 먼저 생성
→ 이미지에 대사와 gameplay를 끼워 맞춤
```

---

# 2. Historical Framing

공식 모델:

# **Korean Paleolithic Educational Composite / Element-level Provenance**

Reference marker:

- `[H]` Historical anchor
- `[C]` Comparative reference
- `[R]` Reconstruction choice
- `[D]` Deferred / non-diagnostic

Chronology Coherence Gate:

- 특정 유적/시기의 구체 복원을 `구석기`라는 이유만으로 서로 합치지 않는다.
- Day 1은 특정 발굴 현장의 1:1 복원이 아니다.
- 근거가 약한 세부는 더 화려하게 invent하지 않고 intentionally non-diagnostic 처리한다.

---

# 3. Master Composition

Master logical frame:

```text
1600 × 900 / 16:9
```

Mandatory QA:

- 4:3
- 16:10
- 16:9

Essential horizontal safe zone:

```text
x 13~87
```

Contact/learning/action target은 4:3에서도 의미를 잃지 않는다.

---

# 4. Screen Axis / Spatial Grammar

Outbound axis:

```text
camp / fire / Aru = behind-left
route-forward = right / right-center
Damu / Nua = ahead
```

SC04~SC10:

- 이유 없는 mirror 금지
- Damu/Nua 좌우 위치 랜덤 교환 금지
- route landmark teleport 금지
- right-hand handaxe continuity 유지
- 180° axis crossing은 실제 camera turn 없이 금지

카메라가 돌아가면 Player가 실제로 시선을 돌리는 motion으로 보여준다.

---

# 5. Depth / Apparent Scale

Production consistency guide:

- near interaction: actor frame height 약 38~62%
- midground: 약 18~35%
- background: 약 5~16%

이는 역사적 신장/실측 거리값이 아니라 visual consistency 기준이다.

동일 actor가 같은 depth band에서 이유 없이 1.5배 이상 scale jump하면 FAIL.

---

# 6. Camera Family

| Camera | Scene | Lock |
|---|---|---|
| C0 | SC00 | eyes-closed seated, fixed |
| C1 | SC01 | seated neutral, horizon y43~47 |
| C2 | SC02 | seated handoff, C1 yaw ±5° |
| C3 | SC03 | seated inspect, same axis |
| C4 | SC04 | rise→standing route, horizon y39~42 |
| C4D | SC05 Stage A | left-biased diagonal departure view |
| C4F | SC05 Stage B | forward/right settled walking view |
| C5 | SC06 | standing stop, C4 height 유지 |
| C6 | SC07 | crouch ground, horizon y55~62 |
| C7 | SC08 | standing attention, C4 height 복귀 |
| C8 | SC09 | right pan 20~24° |
| C9 | SC10 | rock-shelter approach |
| C10 | SC11 | Aru camp-side same-moment view |

Motion target:

- seated→standing: 520~650ms
- standing→crouch: 420~600ms
- crouch→standing: 450~620ms
- Nua-follow pan: 450~580ms
- SC05 diagonal→forward settle: 650~1100ms, walking continuity 유지
- SC10 handaxe FOV re-entry: 250~400ms

Reduced effects:

- duration 축소 가능
- start/end pose + spatial relation 유지
- teleport/hard cut로 의미를 대체하지 않음

---

# 7. Player Body Contract

Global:

- body is not HUD
- right-dominant `[R]`
- 행동과 무관하면 손/팔 숨김
- 양팔 대칭 고정 금지
- 중앙 X 팔 금지
- seated/crouch에서만 무릎 의미 있게 노출
- 같은 Day 1 손 크기/팔 길이/오염 continuity 유지

Deferred:

- exact sex/age `[D]`
- exact skin tone `[D]`
- exact hair morphology `[D]`
- exact hominin species coding `[D]`

금지:

- caveman caricature
- fantasy barbarian styling
- modern accessory/seam
- 특정 현대 민족형을 선사 표준으로 제시

---

# 8. Canonical Handaxe Contract

Historical anchors:

- NMK `신수19143` `[H]`
- NMK `신수18710` `[H]`

Day 1 object:

- `DAY1-HANDAXE-v1` `[H+R]`
- fictional canonical object
- 자루 없음
- 금속 없음
- 지나치게 polished 하지 않음
- 실제 석기 두께감 유지
- 특정 실물 복제 아님

Production identity vocabulary:

- face-A
- face-B
- grip-base
- working-end

Player에게 용어 노출 금지.

Handoff:

- Aru가 grip-base를 Player 쪽으로 제공
- working-end를 Player palm에 밀어 넣지 않음

Player carry:

- right hand
- lower-right / outward
- FPS weapon center-lock 금지
- inventory spin 금지

SC08~SC10 LOCK:

```text
SC07: same handaxe visible lower-right
→ rise: right arm lowers naturally
→ handaxe exits FOV continuously
→ held state remains true
→ SC09: off-frame during environmental pan
→ SC10 approach: same arm/body motion returns
→ same handaxe re-enters lower-right in 250~400ms
```

어떤 단계에서도 inventory pop/re-equip animation처럼 보이면 FAIL.

---

# 9. World Families

## WP-CAMP-DAWN-A

SC01~SC04 + SC11.

Spatial identity:

- shelter/material zone left
- fire left-center
- Aru center-left
- Damu/Nua route-side right
- outbound opening right/right-center

## WP-DEPARTURE-PATH-A

SC05~SC06.

- same terrain family
- camp does not disappear by background replacement
- parallax + scale + occlusion + audio falloff
- landmark `LM-SPLIT-ROCK-01`

## WP-GROUND-OBS-A

SC06~SC07.

# 같은 장소를 standing/crouch 높이만 바꿔 본다.

## WP-ROCK-SHELTER-A

SC08~SC10.

- natural terrain-connected formation
- target was already in world
- system icon으로 spawn하지 않음

---

# 10. Environment Policy

Exact chronology가 좁혀지지 않았으므로:

# **chronologically non-diagnostic environment**

LOCK:

- 이동 가능한 corridor
- 낮은 ground vegetation
- 일부 shrub/tree mass
- rock/terrain depth
- foreground/midground/background 구분

금지:

- manicured lawn
- tropical jungle stereotype
- 강한 단풍/폭설/꽃 만발처럼 exact season을 선언하는 motif

Deferred:

- exact season
- exact plant species
- exact canopy density
- exact climate palette

---

# 11. Current Temporary Shelter

Broad historical context `[H]` + fictional reconstruction `[R]`.

형태:

- low
- asymmetric
- ground/material zone과 이어짐
- temporary windbreak/awning/protective feel

금지:

- symmetric A-frame
- modern triangular camping tent
- square house + triangle roof
- central-door house icon
- taut uniform cloth
- standardized lumber

Deferred:

- exact posts
- exact covering material
- exact knots
- exact doorway
- Seokjangri exact geometry clone

---

# 12. Clothing / Human Appearance

Clothing:

- simple non-diagnostic overlapping covering 가능 `[R+C]`
- modern manufacturing feel 금지
- exact pattern/stitching `[D]`

Human appearance:

- fictional, naturalistic, non-caricature `[R]`
- exact species/facial morphology `[D]`
- exact modern ethnic stereotype 금지

인물 구별은 얼굴만이 아니라:

- pose
- silhouette
- repeated gesture
- movement pattern
- spatial behavior

으로 분산한다.

---

# 13. Character Continuity

## Aru

- camp-neutral-work
- brief recognition
- handaxe check
- offer-tool
- shared-contact/release
- departure watch/farewell

## Damu

- preparing
- already walking
- walking reply
- sudden stop
- lowering
- shared crouch/open view
- recovery
- rock-shelter inspection

## Nua

- camp outward scan
- departure walk
- travel-neutral
- head turn
- shoulder/torso turn
- rock-shelter inspection

금지:

- one standing silhouette를 위치만 바꿔 재사용
- Nua gaze-line만으로 body acting 대체
- Damu walking→stop→crouch를 translation만으로 표현

Nua responsive lock:

- core torso center x77~83
- decorative limb/edge만 x86 근처 허용
- 4:3에서 head→shoulder→torso attention chain 유지

---

# 14. Background Community

B1/B2는 SC00~SC05에서 같은 사람·같은 일의 연속성을 유지한다.

B1:

- fire/material work
- SC00 voice: `그건 젖었어.`

B2:

- shelter/material work
- SC00 voice: `저쪽 걸 써.`
- SC01: `아루.`

Player가 눈을 떠도 이들은 tutorial target처럼 멈추지 않는다.

---

# 15. UI / Affordance Contract

# **Fixed bottom HUD 금지.**

Action affordance는:

- 입력 가능 상태에서만 등장
- scene-specific safe position 사용
- primary body/contact/target을 가리지 않음
- 행동 시작 즉시 withdraw
- persistent footer 금지

대사:

- speaker-proximal small caption 우선
- 얼굴/손/target 가리지 않음
- SC11 own voice는 speaker label 없음
- 모든 장면에 fixed bottom subtitle bar 강제 금지

Curriculum annotation:

```text
preferred zone x15~41 / y7~23
```

- title + max 2 lines
- contextual annotation
- modal/full-width page card 금지
- world dimming 금지
- timer-only hide 금지

---

# 16. SC00 — Sensory Orientation

Purpose:

- world exists before input

Camera:

- C0
- 85~95% dark
- lower-left fire glow only

Body:

- hidden

Audio sequence:

```text
0.0 fire crackle
0.4~0.8 material sound
0.9~1.4 B1: 그건 젖었어.
1.5~2.2 B2: 저쪽 걸 써.
```

Action:

- `눈을 뜬다`
- 1.6s 이후 가능

Transition:

- eyelid/open exposure 450~750ms
- white flash 금지

Acceptance:

caption 없이 eyes-closed + nearby people + fire proximity가 느껴져야 함.

---

# 17. SC01 — Living Community Presence

Camera:

- C1 seated

Body:

- knees lower corners 10~18%
- resting hand optional
- no central arms

16:9 composition:

- shelter/material x6~24
- fire x27~34
- Aru x40~48
- Damu x65~74
- Nua core x77~83
- B1 x20~26
- B2 x10~15

Action:

- community keeps working
- Aru brief recognition only
- Damu prepares
- Nua has outward-scan seed

Dialogue:

- eyes-open 후 1.0~1.8s
- B2: `아루.`
- Aru attention response 100~250ms later

Action affordance:

- `아루 쪽을 본다`

Acceptance:

- NPC party가 아니라 ongoing life
- 이름을 card가 아니라 social call로 인식

---

# 18. SC02 — Aru → Handaxe → Player

Mode:

# **Mode B Unified Contact Keyframe**

Camera:

- C2

Composition:

- Aru torso/head x38~47
- contact x49~59 / y57~69
- Player right forearm lower-right x76~90
- handaxe height 9~14% frame

Choreography:

### A. Offer

- Aru checks edge/grip
- torso slight lean
- hand moves first
- 200~450ms 후: `손.`

### B. Player Reach

Action:

- `손을 내민다`

### C. Shared Contact

- Aru hand + handaxe + Player hand 동시에 contact
- 150~350ms readable overlap
- floating object 금지

### D. Release

- Aru fingers open
- Player grip closes
- object moves 8~15% Player-side

Acceptance:

silent A→D만 봐도 `건네받았다`가 읽혀야 함.

---

# 19. SC03 — Ownership / Experience → Name

Camera:

- C3
- studio close-up hard cut 금지

Tool:

- right hand lower-right/lower-center
- face-A visible
- working-end forward-left/up-left 20~35°
- wrist check 약 25°

Curriculum annotation:

```text
뗀석기
돌을 깨뜨리거나 떼어 만든 도구.
지금 손의 것은 대표적인 예인 주먹도끼.
```

LOCKED transition rule:

# **annotation이 떠 있는 동안 세계가 멈추지 않는다.**

Sequence:

```text
handoff complete
→ handaxe ownership visible
→ annotation appears
→ Player can read while same camp remains alive
→ Damu begins movement in background
→ Damu takes 1~2 steps
→ Damu: 가자.
→ action affordance: 일어나 따라간다
→ Player starts rise
→ annotation de-emphasizes and exits during world action
```

금지:

- `개념 확인`
- `학습 완료`
- `다음`
- modal/page break

Acceptance:

`아루가 준 물건`과 `그 경험에 이름이 붙음`이 동시에 유지.

---

# 20. SC04 — Rise / Damu Already Moving

Camera:

- C3→C4 520~650ms

Body:

- rise support edge brief
- standing arms mostly hidden
- handaxe partial low-right

Actors:

- Aru remains camp x34~42
- Damu x65~74, already moving
- Nua core x77~83, attention differs from Damu

Dialogue:

- Damu already 1~2 steps moving
- `가자.`

Action:

- `일어나 따라간다`

Acceptance:

freeze-frame에서 Damu moving / Nua elsewhere / Aru remains camp가 구별.

---

# 21. SC05 — Departure / Camp Recedes

Purpose:

- distance + relationship through space

## Stage A — Diagonal Departure LOCK

Camera:

- C4D
- slight left-biased diagonal view while body moves forward-right

Composition:

- Aru/fire/shelter remain peripheral left
- Damu/Nua forward-right
- no impossible rear-view-in-forward-frame

Dialogue:

- Aru: `해 지기 전에 와.`
- Damu, still walking: `알았어.`

## Stage B — Forward Settle LOCK

Camera:

- C4D→C4F 650~1100ms
- no hard cut

World:

- camp apparent size decreases
- left foreground occluder begins to cover shelter/fire
- Aru becomes smaller
- camp voices fall off
- route footstep prominence rises

Landmark:

`LM-SPLIT-ROCK-01`

- Stage A x72~82
- Stage B x55~68 with apparent scale growth

Body:

- same handaxe low-right 10~18% frame

Acceptance:

narration 없이 `같은 camp를 실제로 떠나고 있다`가 읽혀야 함.

---

# 22. SC06 — Damu Stops / Player Still Standing

Camera:

- C5
- standing height maintained
- forward bob stops
- premature down-look 금지

Player:

- standing
- no knees
- handaxe low-right

Damu:

- sudden stop
- 0.2~0.4s 후 torso begins lowering

Nua:

- farther ahead, scanning

Dialogue:

- footstep stops
- 150~300ms 후 `잠깐.`

Action:

- `다무 곁에 몸을 낮춘다`

Acceptance:

silent motion에서 Damu first / Player still standing이 명확.

---

# 23. SC07 — Shared Ground Observation

Camera:

- C5→C6 420~600ms

Left hand:

- ground brace x18~31 / y76~93
- body support only
- evidence pointing/touch 금지

Right hand:

- same handaxe lower-right x78~95
- target occlusion 금지

Damu:

- crouched x37~47
- body shifts aside to open shared view

Evidence:

- x49~61 / y69~82
- pressed vegetation / disturbed soil / small twig change
- footprint icon stamp 금지

Dialogue:

- crouch complete
- target readable 500~800ms
- Damu: `봤어?`

No quiz reply.

Acceptance:

Player body drop 자체가 정보 접근 변화의 원인이 되어야 함.

---

# 24. SC08 — Rise / Nua Attention Shift

Camera:

- C6→C7 450~620ms

Player handaxe continuity LOCK:

- SC07 lower-right visible
- rise 중 right arm lowers naturally
- same tool exits lower-right FOV continuously
- held state remains true

Nua:

- core torso x62~72 if travel composition allows; responsive normalized core must remain inside 4:3 safe region
- head→shoulder→torso right-forward ~25°
- motion 300~550ms

Dialogue:

# none

Action:

- body change가 먼저 읽힌 뒤 `누아가 보는 쪽을 본다`

Acceptance:

silent 800ms만으로 attention change가 읽혀야 함.

---

# 25. SC09 — Follow Gaze / Rock Shelter Reveal

Camera:

- C7→C8
- right pan 20~24° / 450~580ms

Nua continuity:

- pan initial/final overlap에서 Nua가 left/left-center edge에 잠시 남음
- body axis가 reveal zone을 향함

Rock shelter:

- final opening x60~77
- terrain-connected
- near grass/rock occluder
- system icon처럼 center spawn 금지

Player body/tool:

- handaxe remains held but off-frame
- no inventory disappearance/re-equip

Dialogue:

- none at reveal

Action:

- `가까이 가 본다`

Acceptance:

Nua turn → Player pan → space reveal가 한 인과로 읽혀야 함.

---

# 26. SC10 — Rock Shelter Inspection

Camera:

- C8→C9 continuous approach
- opening scale grows
- foreground rock edge increases

Left hand:

# near-left rock brace required

Sequence:

1. foreground edge enters
2. left hand contacts edge 0.5~1.2s
3. interior scan begins
4. hand releases/lowers

Right hand / handaxe LOCK:

- off-frame held state continues from SC09
- approach/body shift causes right forearm to re-enter
- same handaxe returns lower-right over 250~400ms
- no inventory pop
- no auto tool use

Actors:

- Nua opening-side, does not block Player
- Damu opposite/slightly behind, distinct pose

World read order:

1. rock cover/opening scale
2. dry-looking ground portion
3. interior darkness
4. uncertain depth / uneven natural floor

LOCKED uncertainty rule:

# Stage 07.5 기본 장면에는 explicit animal spoor를 넣지 않는다.

금지 기본 요소:

- 발자국 강조
- 뼈
- 배설물
- 발톱 자국
- monster cue

Dialogue only after visual read:

- Nua: `안이 꽤 넓어.`
- darkness read 후 Damu: `안쪽은 먼저 봐야 해.`

Curriculum annotation:

```text
동굴 / 바위 그늘
구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.
```

Acceptance:

- natural shelter potential
- natural origin
- dark uncertainty
- same held tool/body

가 동시에 납득되어야 함.

---

# 27. SC11 — Perspective Recontextualization / Aru-side

Method:

# **SC05 Stage A와 같은 실제 순간의 opposite-side POV**

Memory echo / dream / rewind가 아니다.

Transition:

- dark/blink 600~800ms
- fire crackle becomes near
- meta title 없음

Camera:

- C10
- same WP-CAMP-DAWN-A geometry
- Aru-side position
- outbound route direction

Temporal Sync LOCK:

SC11 must reproduce SC05 Stage A:

- same Damu/Nua spacing
- same walking phase family
- former Player same relative group slot
- former Player right hand holds same handaxe orientation
- same fire/shelter geometry
- same morning light family

Dialogue:

1. departing group visible
2. current POV own voice: `해 지기 전에 와.`
3. same delay family as SC05
4. distant Damu: `알았어.`

No UI/meta text:

- `아루의 관점`
- `같은 아침`
- `과거로 돌아감`
- `관점 전환 완료`

Acceptance:

without title, student can infer:

`아까 불가에 남은 쪽에서 내가 떠나는 모습을 보고 있다.`

If not, composition/sync를 먼저 수정한다. 설명 title은 accessibility fallback 최후 수단.

---

# 28. Body Pose Sheet

| Pose | Scene | Left | Right | Tool | Body |
|---|---|---|---|---|---|
| P0-hidden | SC00 | hidden | hidden | none | hidden |
| P1-seated-rest | SC01 | optional | optional | none | knees partial |
| P2-receive-reach | SC02 | hidden | reaches | shared contact | seated |
| P3-held-inspect | SC03 | hidden | holds | face-A | seated |
| P4-rise-carry | SC04 | brief support | low-right | partial | rise→stand |
| P5-walk-carry | SC05 | hidden | low-right | partial | walking |
| P6-standing-stop | SC06 | hidden | low-right | partial | standing |
| P7-crouch-ground | SC07 | ground brace | held aside | partial | crouched |
| P8-rise-attention | SC08 | hidden | lowering out | exits FOV | rise→stand |
| P9-env-look | SC09 | hidden | off-frame | held off-frame | standing/pan |
| P10-cave-brace | SC10 | rock brace | re-enters low-right | same tool | lean/stand |
| P11-aru-side | SC11 | hidden | hidden | none in current POV | POV only |

---

# 29. Route Landmark

`LM-SPLIT-ROCK-01` `[R]`

- low large split rock
- Stage A ahead-right
- Stage B nearer/larger
- SC06 rear-left partial
- later Return에서 같은 crack silhouette/face/small-rock relation 재사용

랜드마크는 objective marker/glow outline이 아니다.

---

# 30. Lighting Continuity

First-five = same morning.

LOCK:

- ambient dawn cool/low
- fire warm local left/left-center
- camp를 떠날수록 warm fire contribution 감소
- rock shelter interior = natural light falloff
- sudden noon/sunset shift 금지

Exact seasonal sun angle `[D]`.

---

# 31. Dialogue Timing Master

| Scene | Speaker | Line | Prerequisite |
|---|---|---|---|
| SC00 | B1 | `그건 젖었어.` | world sound already active |
| SC00 | B2 | `저쪽 걸 써.` | B1 생활 대화 뒤 |
| SC01 | B2 | `아루.` | eyes-open 1~1.8s |
| SC02 | Aru | `손.` | offer motion started |
| SC04 | Damu | `가자.` | already moving 1~2 steps |
| SC05 | Aru | `해 지기 전에 와.` | Stage A group moving away |
| SC05 | Damu | `알았어.` | walking continues |
| SC06 | Damu | `잠깐.` | footstep stops first |
| SC07 | Damu | `봤어?` | crouch + target readable |
| SC08 | — | none | body attention only |
| SC09 | — | none | Player pan reveal |
| SC10 | Nua | `안이 꽤 넓어.` | opening/space read |
| SC10 | Damu | `안쪽은 먼저 봐야 해.` | darkness/uncertainty read |
| SC11 | Aru own voice | `해 지기 전에 와.` | synchronized group visible |
| SC11 | Damu distant | `알았어.` | same timing relationship as SC05 |

대사가 행동을 설명하는 기능문이 되면 FAIL.

---

# 32. Required Previsual Asset/Reference Manifest

## Historical object

- DAY1-HANDAXE-v1

## World families

- WORLD-CAMP-DAWN-A
- WORLD-DEPARTURE-PATH-A
- WORLD-GROUND-OBS-A
- WORLD-ROCK-SHELTER-A

## Landmark

- LM-SPLIT-ROCK-01

## Actor anchors

- ARU-v1
- DAMU-v1
- NUA-v1
- B1-v1
- B2-v1

## Player

- HUNT-PLAYER-BODY-v1

## Contact keyframes

- KF-HANDOFF-01
- KF-GROUND-01
- KF-CAVE-BRACE-01

Final face/clothing specifics remain deferred.

---

# 33. Responsive Requirements

4:3 must retain:

- SC02 Aru + handaxe + Player hand contact
- SC03 tool inspect
- SC04 Damu motion + Nua direction
- SC05 people-ahead + camp-left relation during Stage A
- SC06 Damu stop
- SC07 Damu + evidence + Player brace
- SC08 Nua attention body change
- SC09 gaze-source/reveal continuity during transition
- SC10 opening + contact + actors
- SC11 departing group + handaxe

Crop failure 시:

- anchor/object-position 조정
- 모든 actor를 무작정 축소하지 않음

---

# 34. Previsual QA Gate

Critical Scene마다:

1. 1-second freeze-frame
2. 800ms silent-motion
3. no-caption
4. no-audio
5. reduced-effects
6. contact
7. direction
8. no-overlay
9. same body/tool/world continuity
10. 4:3 / 16:10 / 16:9 crop
11. chronology coherence
12. anti-anachronism
13. anti-caricature
14. environment overclaim prevention

특히:

SC02:

```text
Aru hand → handaxe → Player hand
```

SC05:

```text
camp peripheral-left → forward settle → camp physically exits
```

SC08~10:

```text
same held handaxe visible → continuously off-frame → continuously re-enters
```

SC11:

```text
SC05 Stage A temporal synchronization
```

이 네 개는 P1 regression 핵심이다.

---

# 35. First-Glance Priority

| Scene | First visual priority |
|---|---|
| SC00 | fire glow / living audio |
| SC01 | ongoing community + Aru response |
| SC02 | Aru hand → handaxe → my hand |
| SC03 | same handaxe now in my hand |
| SC04 | Damu already moving / Nua attention differs |
| SC05 | movement ahead + camp left/peripheral receding |
| SC06 | Damu suddenly stops, Player still standing |
| SC07 | shared ground observation |
| SC08 | Nua body attention turn |
| SC09 | natural shelter revealed by Player pan |
| SC10 | opening depth + dark uncertainty + body contact |
| SC11 | departing group + same handaxe + synchronized dialogue |

If UI/text wins first glance → FAIL.

---

# 36. Deferred — Do Not Invent Yet

- exact season
- exact vegetation species
- exact temporary shelter construction/material/knots
- exact garment pattern/stitching
- exact skin tone
- exact hair morphology/style
- exact hominin species visual coding
- final cast faces
- Hunt Player exact age/sex
- final audio production

Deferred는 빠진 설계가 아니라 evidence boundary다.

---

# 37. Implementation Boundary

Current approved state:

```text
Scene Composition Design = PASS
Project-owner Confirmation = PASS
Previsual Artifact Set = NOT YET BUILT
Previsual Approval = NOT YET
Human Gameplay Gate = FAIL
Stage 08 = BLOCKED
```

다음 순서:

```text
v2.1 approved contract
→ Previsual Remediation Readiness
→ rough/non-production previsual artifacts
→ Project-owner Previsual Review
→ if PASS: Human-Gate minimum coherent visual proof implementation
→ Human Visual QA
→ Human Gate PASS 여부 판정
→ only then Stage 08 Visual Production Readiness
```

# **Stage 07.5 previsual rough는 Stage 08 production batch가 아니다.**

# **실제 production image 생성은 별도 명시적 작업으로 취급한다.**
