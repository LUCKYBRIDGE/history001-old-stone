# Stage 07.5 — First-Person Scene Composition Bible v2

> 상태: **Consolidated Previsual Design Contract / Project-owner Review Required**
>
> 목적: SC00~SC11을 실제 구현하기 전에 **대사, 1인칭 카메라, 내 손·팔·무릎, 주먹도끼, 아루·다무·누아, 배경 공동체, 풍경, 빛, 소리, UI, 전환, responsive crop, 역사적 근거 수준**을 한 문서 안에서 잠근다.
>
> 이 문서는 Technical SSOT가 아니다. runtime/type/system 계약은 계속 `docs/06_TECH_BLUEPRINT.md`가 유일한 Technical SSOT다.
>
> 이 v2는 previsual/visual implementation 단계에서 다음 문서를 통합한다.
>
> - `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE.md` v1
> - `handoff/STAGE07_5_SCENE_COMPOSITION_LOCK_DECISIONS.md`
> - `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
>
> 충돌 시 canonical docs가 우선한다.
>
> # **이 문서의 Project-owner Scene Review가 끝나기 전 runtime/CSS/production image 구현을 재개하지 않는다.**

---

# 0. Production Thesis

Stage 07.5의 목표는 아름다운 그림을 먼저 만드는 것이 아니다.

# **한 장면을 1초만 봐도 누가 무엇을 하고 있고, 내 몸이 어떤 상태이며, 같은 사람·도구·공간에서 다음 행동으로 이어지고 있음을 이해할 수 있어야 한다.**

기본 순서:

```text
Historical / Curriculum Anchor
→ Social / Narrative Purpose
→ Scene Composition
→ Body / Contact Choreography
→ Continuity
→ Responsive Safety
→ Reference Confidence
→ Project-owner Review
→ Implementation
```

금지되는 역순:

```text
AI image 생성
→ 이미지가 예쁘니 채택
→ 그 이미지에 gameplay/대사/손을 맞춤
```

---

# 1. Historical Model — Korean Paleolithic Educational Composite

Day 1은 특정 유적의 특정 날짜를 1:1 복원하지 않는다.

공식 production framing:

# **Korean Paleolithic Educational Composite / Element-level Provenance**

뜻:

- Day 1 사람/이름/사건은 fictional reconstruction
- 한국 구석기 생활의 broad curriculum anchor를 같은 하루의 체험으로 구성
- 구체 물체/생활 요소는 각각 자신만의 reference provenance를 가짐
- 특정 후기 구석기 유적의 복원 세부를 전기/중기 대표성이 강한 주먹도끼와 무비판적으로 섞지 않음
- 근거가 약한 외형은 `그럴듯하게 더 자세히`가 아니라 `비진단적으로 더 조심스럽게` 표현

## Reference Confidence Markers

각 visual decision은 다음 중 하나로 관리한다.

- `[H] Historical anchor` — 한국 구석기/교과/공공기관 자료로 강하게 지지
- `[C] Comparative reference` — 다른 지역/시기의 기술 가능성 참고
- `[R] Reconstruction choice` — Day 1 체험을 위한 창작 결정
- `[D] Deferred / non-diagnostic` — 근거 부족으로 일부러 세부를 확정하지 않음

---

# 2. Master Frame / Coordinate System

Master logical composition:

```text
1600 × 900 / 16:9
```

좌표:

- x=0 left
- x=100 right
- y=0 top
- y=100 bottom

Mandatory QA:

- 4:3
- 16:10
- 16:9

Essential horizontal safe zone:

```text
x ≈ 13 ~ 87
```

핵심 접촉, actor action, handaxe, curriculum target은 4:3에서도 의미를 잃지 않는다.

---

# 3. Screen Direction / 180° Axis

First-five outbound axis:

```text
camp / fire / Aru = behind-left
Player route-forward = right / right-center
Damu / Nua = ahead / right-midground
```

SC04~SC10:

- 이유 없는 mirror 금지
- Damu/Nua 좌우 자리 무작위 교환 금지
- right-hand handaxe continuity 유지
- route landmark teleport 금지
- 180° axis crossing 기본 금지

카메라 방향을 바꾸면 실제 pan/turn을 보여 준다.

---

# 4. Depth / Actor Apparent Scale

Production perspective guide:

- Near interaction 2~5m 감각: actor frame height 약 38~62%
- Midground 5~12m 감각: 약 18~35%
- Background 12m+ 감각: 약 5~16%

실제 역사 신장/거리 측정값이 아니라 2D consistency 기준이다.

동일 actor가 동일 depth band에서 이유 없이 1.5배 이상 scale jump하면 FAIL.

---

# 5. Camera State Family

| ID | Scene | Visual rule |
|---|---|---|
| C0 | SC00 | eyes-closed seated, fixed |
| C1 | SC01 | seated neutral, horizon y43~47 |
| C2 | SC02 | seated handoff, C1 yaw ±5° |
| C3 | SC03 | seated inspect, same axis |
| C4 | SC04~05 | standing route, horizon y39~42 |
| C5 | SC06 | standing stop, C4 height 유지 |
| C6 | SC07 | crouch ground, horizon y55~62 |
| C7 | SC08 | standing attention, C4 높이 복귀 |
| C8 | SC09 | right pan 20~24° |
| C9 | SC10 | shelter approach, opening scale growth |
| C10 | SC11 | Aru camp recontext, same WP-CAMP-DAWN-A |

Motion target:

- seated→standing 520~650ms
- standing→crouch 420~600ms
- crouch→standing 450~620ms
- Nua follow pan 450~580ms

Reduced-effects:

- duration 축소 가능
- start/end pose와 spatial relation은 유지
- teleport 금지

---

# 6. Player Body Contract

## Global

- body is not HUD
- right-dominant `[R]`
- 행동과 무관하면 손/팔 숨김
- 양팔 대칭 고정 금지
- 중앙 X자 팔 금지
- seated/crouch에서만 무릎이 의미 있게 등장
- 같은 Day 1 손 크기/팔 길이/오염 continuity 유지

## Appearance confidence

- final sex/age `[D]`
- exact skin/hair `[D]`
- species-specific facial morphology `[D]`
- fictional non-caricature human cast strategy `[R]`

금지:

- 과장된 `원시인` 눈썹뼈/턱/털
- 현대 특정 민족 얼굴을 당시 표준으로 제시
- fantasy barbarian styling

---

# 7. Canonical Handaxe Contract

Historical anchors:

- NMK `신수19143` `[H]`
- NMK `신수18710` `[H]`

Object:

- `DAY1-HANDAXE-v1` `[R+H]`
- fictional canonical object
- 자루 없음
- 금속 없음
- 두꺼운 실제 석기 비례
- 특정 실물 복제품 아님

Production identity vocabulary:

- `face-A`
- `face-B`
- `grip-base`
- `working-end`

Player에게 이 용어는 노출하지 않는다.

## Grip

Aru handoff:

- Player가 잡기 쉬운 `grip-base` 방향 제공
- working-end를 palm으로 밀어 넣지 않음

Player:

- right hand lower-right entry
- grip-base를 감쌈

SC03 inspect:

- face-A 주로 보임
- working-end forward-left/up-left 20~35°
- wrist check 약 25°
- inventory spin 금지

SC04~10:

- downward/outward carry
- screen-center weapon lock 금지
- face identity가 이유 없이 뒤집히지 않음

---

# 8. World Plate Families

## WP-CAMP-DAWN-A

사용:

- SC01
- SC02
- SC03
- SC04 departure start
- SC11

Spatial relation:

- shelter/material zone left
- fire left-center
- Aru center-left
- Damu/Nua preparation route side right
- open departure direction right/right-center

## WP-DEPARTURE-PATH-A

사용:

- SC05
- early travel
- SC06 entry

필수:

- camp 처음에는 뒤에 보임
- 실제 parallax/occlusion로 사라짐
- landmark `LM-SPLIT-ROCK-01`

## WP-GROUND-OBS-A

사용:

- SC06 standing view
- SC07 crouch view

# **같은 장소를 높이만 바꿔 본다.**

## WP-ROCK-SHELTER-A

사용:

- SC08 attention target off-focus state
- SC09 reveal
- SC10 inspect

rock shelter는 시스템이 새로 생성하는 icon이 아니라 원래 세계에 있었던 자연 지형이다.

---

# 9. Environment / Climate Visual Policy

Exact chronology가 한 시기로 좁혀지지 않았으므로:

# **chronologically non-diagnostic environment**

을 사용한다.

LOCK:

- 이동 가능한 open visual corridor
- 낮은 ground vegetation
- 일부 shrub/tree mass
- rock/terrain depth
- modern landscaped lawn 금지
- tropical jungle caricature 금지
- 강한 단풍/폭설/꽃 만발처럼 특정 계절을 선언하는 motif 금지

DEFER:

- exact season `[D]`
- exact tree/grass species `[D]`
- exact canopy density `[D]`
- exact climate condition `[D]`

후기 플라이스토세 화분 자료는 `[C]` 비교 자료이며 Day 1 exact palette로 사용하지 않는다.

---

# 10. Current Temporary Shelter Policy

Historical broad anchor:

- 구석기 이동 생활 / 강 근처 언덕 / 동굴 등 `[H]`

Seokjangri late-Paleolithic hut:

- `[C]` specific reconstruction reference
- Day 1 1:1 template 아님

Current shelter:

- low-specificity fictional temporary shelter `[R]`
- low
- asymmetric
- windbreak/awning/temporary protective feel
- ground/material zone과 이어짐

금지:

- symmetric A-frame
- modern triangular camping tent
- square house + triangle roof
- central doorway house icon
- taut uniform fabric tent
- standardized lumber

DEFER:

- exact posts
- exact covering material
- exact knots/stitching
- exact doorway
- Seokjangri geometry clone

---

# 11. Clothing / Covering Policy

Direct Korean Paleolithic clothing evidence가 제한적이므로 exact garment는 `[D]`.

Allowable reconstruction strategy `[R+C]`:

- simple overlapping body coverings
- hide/fiber possibility를 열어 둔 non-diagnostic material
- modern manufacturing 느낌 없는 edge
- child-appropriate coverage

금지:

- zipper / metal button
- machine stitch pattern
- modern T-shirt/pants pattern을 명백히 복제
- fantasy fur armor
- 모든 cast가 동일 fur cape uniform
- 특정 유럽 후기 구석기 garment reconstruction을 한국 Day 1의 정답으로 복제

---

# 12. Background Community Continuity

B1/B2는 SC00~SC05에서 같은 사람/같은 작업 흐름.

## B1 — fire tending `[R]`

SC00 offscreen:

> `그건 젖었어.`

SC01:

- fire/material zone에서 계속 작업

SC02:

- handoff 동안 움직임 priority 낮춤, disappear 금지

SC04~05:

- camp background에서 계속 작업하다 거리/occlusion로 작아짐

## B2 — shelter/material work `[R]`

SC00 offscreen:

> `저쪽 걸 써.`

SC01:

- 같은 voice가 자연스럽게 `아루.`
- Aru가 반응

SC02~05:

- 같은 material zone continuity

B1/B2는 tutorial target이 아니다.

---

# 13. UI Contract

## Action lane

기본:

```text
x 33~67
y 89~97
```

- primary action 1개
- 최대 1줄
- world를 아래로 밀어내는 별도 page 구조 금지

## Dialogue

- speaker-proximal small caption 우선
- 얼굴/손/target 가리지 않음
- own voice(SC11)는 speaker label 없음
- 모든 scene에 고정 bottom subtitle bar 강제 금지

## Sensory caption

- 비시각 감각만
- 최대 1줄

## Curriculum annotation

기본 zone:

```text
x 15~41
y 7~23
```

- small contextual annotation
- title + max 2 lines
- full-width card/modal 금지
- world dimming 금지
- 시간만으로 자동 hide 금지

## No-overlay zones

- SC02 x35~72 / y25~84
- SC03 x50~76 / y54~86
- SC04 x58~90 / y22~80
- SC05 x5~82 / y20~80
- SC06 x34~80 / y24~86
- SC07 x32~71 / y50~89
- SC08 x50~84 / y20~78
- SC09 x47~88 / y24~84
- SC10 x24~86 / y18~88
- SC11 x28~90 / y22~78

UI가 충돌하면 UI를 옮긴다. Scene을 축소하지 않는다.

---

# 14. Route Landmark

`LM-SPLIT-ROCK-01` `[R]`

갈라진 낮은 큰 바위.

SC05 Stage A:

- ahead-right x72~82

SC05 Stage B:

- x55~68
- apparent scale 증가

SC06:

- rear-left x8~22 일부

SC07 이후:

- primary frame 밖

Future Return:

- 같은 crack silhouette
- 같은 large face edge
- 같은 small-rock relationship

공간 기억 callback으로 재사용.

---

# 15. Lighting / Time Continuity

First-five는 같은 아침.

LOCK:

- ambient dawn = cool low overall light `[R]`
- fire = warm local light left/left-center `[H+R]`
- camp를 떠날수록 warm fire contribution 감소
- 이동 중 정오/석양으로 급변 금지
- rock shelter interior는 light falloff + contrast increase

Exact seasonal sun angle `[D]`.

---

# 16. Dialogue Timing Master

| Scene | Speaker | Line | Visual/action prerequisite |
|---|---|---|---|
| SC00 | B1 | `그건 젖었어.` | fire/material sounds already active |
| SC00 | B2 | `저쪽 걸 써.` | B1 생활 대화 뒤 |
| SC01 | B2 | `아루.` | eyes-open 후 1~1.8s world observation |
| SC02 | Aru | `손.` | tool check/offer motion started |
| SC04 | Damu | `가자.` | 이미 1~2걸음 이동 |
| SC05 | Aru | `해 지기 전에 와.` | group moving away |
| SC05 | Damu | `알았어.` | walking continues |
| SC06 | Damu | `잠깐.` | Damu footstep stopped |
| SC07 | Damu | `봤어?` | crouch + evidence 500~800ms visible |
| SC08 | — | **no dialogue** | body attention only |
| SC09 | — | **no reveal dialogue** | Player pan reveals space |
| SC10 | Nua | `안이 꽤 넓어.` | opening/cover/dry area visually read |
| SC10 | Damu | `안쪽은 먼저 봐야 해.` | interior darkness/uncertainty visible |
| SC11 | Aru own voice | `해 지기 전에 와.` | departing group visible |

대사는 역할 설명이 아니다.

---

# 17. SC00 — Sensory Orientation

## Purpose

세계가 Player input 전부터 존재.

## Knowledge

Student는 아직 아무 설명을 받지 않음.
Player-character는 이 생활 공간에 원래 속함.

## Camera

- C0
- 85~95% dark
- lower-left/left-center fire glow only
- no camera movement

## Body

- hidden

## World

- sharp world plate 미노출

## Audio

권장 pacing:

- 0.0 fire crackle
- 0.4~0.8 material placement
- 0.9~1.4 B1 line
- 1.5~2.2 B2 line

## Dialogue

B1:

> `그건 젖었어.`

B2:

> `저쪽 걸 써.`

names hidden.

## Action

`눈을 뜬다`

1.6s 이후 사용 가능.

## Transition

- eyelid/open exposure 450~750ms
- white flash 금지
- WP-CAMP-DAWN-A exact continuity

## Reference

- community life specifics `[R]`
- fire use broad `[H]`

## Human acceptance

caption 없이:

- eyes closed
- people already nearby
- fire proximity

가 느껴짐.

---

# 18. SC01 — Living Community Presence

## Purpose

NPC party가 아니라 ongoing communal life.

## Camera

- C1

## Body

- knees lower corners 10~18%
- optional one resting hand
- no central arms

## Composition 16:9

- current shelter/material x6~24 / y42~74
- fire x27~34 / y62~74
- Aru x40~48 / feet y73~78
- Damu x67~75 / feet y70~75
- Nua x80~86 / feet y69~74
- B1 x20~26
- B2 x10~15

## Actions

Aru:

- fire/material → brief Player recognition
- no immediate staring

Damu:

- preparing body/material

Nua:

- outward scan seed

B1/B2:

- keep working

## Dialogue

Eyes-open 1.0~1.8s after:

B2:

> `아루.`

Aru head/attention response 100~250ms later.

Optional work line beyond this proof should not be added without reason.

## Action affordance

`아루 쪽을 본다`

## Historical confidence

- mobile/small-group broad context `[H]`
- exact cast/layout `[R]`
- shelter exact form `[D+R]`
- clothing `[D+R]`

## First priority

living community + Aru response.

---

# 19. SC02 — Aru → Handaxe → Player Handoff

## Purpose

Curriculum before all else가 아니라 physical/social event.

## Mode

# **Mode B — Unified Contact Keyframe**

## Camera

- C2

## Composition

- Aru torso/head x38~47 / y28~72
- contact x49~59 / y57~69
- Player right forearm enters x76~90 lower-right
- handaxe height 9~14% of frame

## Choreography

### Beat A — offer

- Aru checks grip/edge
- torso slight lean
- hand moves first
- 200~450ms after motion:

> `손.`

### Beat B — Player reach

Action:

`손을 내민다`

- right palm enters
- grip-base approaches

### Beat C — shared contact

- Aru hand + handaxe + Player palm/fingers simultaneously contact
- 150~350ms readable overlap
- object not floating

### Beat D — release

- Aru fingers open
- Player grip closes
- same object shifts 8~15% Player-side

## UI

no-overlay SC02 zone obeyed.

## Reference

- handaxe morphology `[H]`
- exact handoff event `[R]`
- hand/cast appearance `[D+R]`

## Acceptance

silent A→D sequence only으로도 `도구를 건네받음`이 읽힘.

---

# 20. SC03 — Ownership / Experience → Name

## Purpose

item-acquired screen이 아니라 same-object ownership.

## Camera

- C3
- no studio close-up cut

## Body / Tool

- Aru hand leaves
- right hand holds handaxe lower-right/lower-center
- face-A visible
- working-end forward-left/up-left
- left arm hidden

Tool x56~67 / y62~82.

Aru x40~46, attention reduced.

## Curriculum annotation

```text
뗀석기
돌을 깨뜨리거나 떼어 만든 도구.
지금 손의 것은 대표적인 예인 주먹도끼.
```

canonical meaning must match 01E/04.

Behavior:

- appears after embodied ownership
- stays while readable
- does not disappear solely after 2~4 seconds
- next world action starts → de-emphasize
- next Scene → remove

## Action

transition/rise action should be world action, not `개념 확인`.

## Reference

terminology `[H]`, exact moment `[R]`.

## Acceptance

`아루가 준 바로 그 물건` + `그 경험에 이름이 붙음`.

---

# 21. SC04 — Rise / Damu Already Moving / Nua Elsewhere

## Purpose

people wait for me가 아니라 I join ongoing movement.

## Camera

- C3→C4
- 520~650ms rise target

## Body

rise:

- brief knee/support edge possible

standing:

- arms mostly hidden
- right handaxe partial low-right

## Actors

Aru x34~42 camp/fire.

Damu x65~74:

- one-step walking pose
- torso forward
- arm/leg opposition

Nua x79~86:

- outward/right-forward interest
- torso orientation differs 8~15°

## Dialogue

Damu moves 1~2 steps first:

> `가자.`

## Action

`일어나 따라간다`

## Screen axis

outbound right/right-center locked.

## Acceptance

freeze frame:

- Damu moving
- Nua elsewhere attention
- Aru remains camp

---

# 22. SC05 — Departure / Camp Recedes

## Purpose

distance + relationship through space.

## Camera

- C4
- weak bob only
- parallax stronger than bob

## Start composition

- Damu x55~63 midground
- Nua x70~78 slightly farther
- route center-right
- Aru behind-left x20~28
- fire x15~22
- shelter x4~18

## Stage A

camp clearly visible.

Aru behind/left:

> `해 지기 전에 와.`

Damu, still walking:

> `알았어.`

## Stage B

- fire apparent size -40~60%
- Aru smaller
- shelter partially occluded
- voices fade
- dry ground/grass footsteps rise

## Landmark

`LM-SPLIT-ROCK-01`:

- Stage A x72~82
- Stage B x55~68 larger

## Body

handaxe low-right 10~18% frame only.

## Environment confidence

terrain `[R]`; exact plants `[D]`.

## Acceptance

no narration needed to understand:

- leaving same camp
- someone stays behind
- actual distance increasing

---

# 23. SC06 — Damu Stops / Player Still Standing

## Purpose

causality proof: Damu first, Player later.

## Camera

- C5
- standing height unchanged
- bob/forward motion stops
- no premature down-look

## Body

- Player standing
- no knees
- handaxe low-right

## Damu

x45~55:

- walking stride
- sudden stop
- 0.2~0.4s later torso begins lowering

## Nua

x68~78 farther, scanning.

## Landmark

split rock rear-left x8~22 partial.

## Ground evidence

not yet target-readable.

## Audio / Dialogue

Damu footstep stops.
150~300ms later:

> `잠깐.`

## Action

`다무 곁에 몸을 낮춘다`

## Acceptance

silent short motion:

- Damu stopped/lowering
- Player still standing

---

# 24. SC07 — Player Crouches / Shared Ground Observation

## Purpose

Player action changes information access.

## Camera

- C5→C6
- 420~600ms
- ground lower 55~65%

## Left hand

# **ground brace locked**

- x18~31 / y76~93
- supports crouch
- does NOT point at evidence
- does NOT touch evidence
- does NOT clear grass to reveal answer

## Right hand

- same handaxe held aside lower-right x78~95
- target not occluded

## Damu

- x37~47
- crouched
- body shifts slightly aside to open shared view
- no pointing-answer pose

## Ground evidence

- x49~61 / y69~82
- pressed vegetation / disturbed soil / small twig change
- no footprint icon stamp

## Dialogue

Crouch complete.
Target readable 500~800ms.
Then:

> `봤어?`

No quiz reply.

## Production

`KF-GROUND-01` required contact candidate for left-hand brace.

## Reference

specific trace `[R]`; observational hunting behavior broad `[R/H curriculum context]`.

## Acceptance

body drop itself explains why ground became readable.

---

# 25. SC08 — Rise / Nua Attention Shift

## Purpose

Nua becomes a person reacting, not observation-function NPC.

## Camera

- C6→C7
- 450~620ms rise

## Body

- hands mostly hidden
- handaxe minimal/optional edge

## Damu

x42~50 neutral recovery.

## Nua

x62~72 midground.

Locked attention:

```text
head
→ shoulder
→ torso
```

right-forward ~25°.

Motion 300~550ms.

## Dialogue

# **none**

No `...` caption.

## Action affordance

Only after body change is readable:

`누아가 보는 쪽을 본다`

## Target

rock shelter not yet treated as discovered target.

## Acceptance

silent 800ms motion alone → `누아가 다른 곳에 주의를 돌림`.

---

# 26. SC09 — Follow Gaze / Rock Shelter Revealed

## Purpose

new space appears because Player looks.

## Camera

- C7→C8
- right pan 20~24°
- 450~580ms target

## Nua continuity

pan initial/final overlap:

- Nua remains left/left-center edge briefly
- body axis points into newly revealed zone

## Rock shelter

- final opening x60~77
- not exact center icon
- terrain-connected
- near grass/rock occluder adds depth

## Body

hands/tool may hide to prioritize environment.

## Dialogue

none at reveal.

## Action

`가까이 가 본다`

## Reference

natural shelter use broad `[H]`; exact cave `[R]`.

## Acceptance

Nua direction → Player pan → space reveal reads as one causal chain.

---

# 27. SC10 — Rock Shelter Inspection

## Purpose

`동굴=집 정답`이 아니라 protection + uncertainty.

## Camera

- C8→C9
- approach, no hard cut
- opening grows
- rock edge foreground occlusion

## Left hand

# **near-left rock brace required**

Sequence:

1. foreground edge enters
2. left hand contacts edge 0.5~1.2s
3. interior scan begins
4. hand releases/lowers

Not climbing.

## Right hand

- handaxe low-right
- no auto tool use
- no central X arms

## Actors

Nua:

- opening one side x58~68
- interior view, does not block Player

Damu:

- opposite x32~43 or slightly behind
- distinct pose from Nua

## World visual information order

1. rock cover / opening scale
2. some dry-looking ground
3. interior darkness
4. possible uncertainty cue

No modern room arrangement.

## Dialogue

Only after visual read:

Nua:

> `안이 꽤 넓어.`

Then after darkness read:

Damu:

> `안쪽은 먼저 봐야 해.`

These are scene reactions, not permanent character roles.

## Curriculum annotation

After visual inspection:

```text
동굴 / 바위 그늘
구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.
```

contextual, small.

## Production

`KF-CAVE-BRACE-01` required contact variation.

## Reference

natural shelter `[H]`; exact place/event/dialog `[R]`.

## Acceptance

simultaneously:

- shelter potential
- natural origin
- dark uncertainty

---

# 28. SC11 — Perspective Recontextualization / Aru-side

## Purpose

same event becomes social meaning without meta explanation.

## Method

# **Actual same moment from Aru POV locked.**

Not echo / dream / memory hallucination.

## Transition

- dark/blink 600~800ms
- fire crackle becomes near
- no `관점 전환` title

## Camera

- C10
- same WP-CAMP-DAWN-A family
- camp-side position
- looks outbound route direction

## Aru body

- hands/arms hidden until final appearance reference lock
- do not reuse former Player hand

## Departing group

- route right/mid-background
- Damu/Nua spacing continuity
- former Player located where prior outgoing Player would be
- former Player **right hand holds same canonical handaxe**

## Fire / shelter

same geometry/spatial relation as SC01/05.

## Dialogue

Departing group first visible.
Then current POV own voice:

> `해 지기 전에 와.`

- near/center own voice
- no speaker label

## UI

No:

- `아루의 관점`
- `같은 아침`
- `관점 전환 완료`

## Reference

perspective/event `[R]`; same-day rule canonical.

## Acceptance

without meta text:

`아까 불가에 남은 사람 쪽에서 내가 떠나는 모습을 보는 것 같다`

라는 추론 가능.

If fail → composition fix first, explanatory title later only as accessibility fallback.

---

# 29. Body Pose Sheet v2

| Pose | Scene | Left | Right | Tool | Body |
|---|---|---|---|---|---|
| P0-hidden | SC00 | hidden | hidden | none | hidden |
| P1-seated-rest | SC01 | optional edge | optional edge | none | knees partial |
| P2-receive-reach | SC02 | hidden | reaches | shared contact | seated |
| P3-held-inspect | SC03 | hidden | holds | face-A visible | seated |
| P4-rise-carry | SC04 | brief support only | low-right | partial | rise→stand |
| P5-walk-carry | SC05 | hidden | low-right | partial | walking |
| P6-standing-stop | SC06 | hidden | low-right | partial | **standing** |
| P7-crouch-ground | SC07 | **ground brace** | held aside | partial | crouched |
| P8-attention-neutral | SC08 | hidden | minimal | optional edge | standing |
| P9-env-look | SC09 | hidden | hidden preferred | may hide | standing/pan |
| P10-cave-brace | SC10 | **rock brace** | low-right | visible | lean/stand |
| P11-aru-side | SC11 | hidden | hidden | none | POV only |

---

# 30. Actor Pose Requirements v2

## Aru

- A1 camp-neutral-work
- A2 brief-player-recognition
- A3 handaxe-check
- A4 offer-tool
- A5 shared-contact/release
- A6 departure-watch/farewell
- A7 POV-owner invisible-body state

## Damu

- D1 preparing
- D2 already-walking
- D3 walking-reply
- D4 sudden-stop
- D5 lowering
- D6 shared-crouch/open-view
- D7 recovery-standing
- D8 rock-shelter inspection

## Nua

- N1 camp-outward-scan
- N2 departure-walk
- N3 travel-neutral
- N4 head-turn
- N5 shoulder/torso-turn
- N6 rock-shelter inspection

금지:

- one standing silhouette reused with position changes only
- gaze line only substituting Nua N4→N5
- Damu D2→D4→D6 represented by translation alone

---

# 31. Required Visual Asset / Reference Manifest

## Historical object

- `DAY1-HANDAXE-v1` — READY anchor

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

Final face/clothing specifics remain deferred.

## Player

- HUNT-PLAYER-BODY-v1

Final appearance deferred; pose/proportion consistency required.

## Contact keyframes

- KF-HANDOFF-01 — mandatory
- KF-GROUND-01 — required brace contact candidate
- KF-CAVE-BRACE-01 — required contact variation

---

# 32. Historical Visual Confidence Matrix

| Visual | Confidence | Production rule |
|---|---|---|
| chipped stone / handaxe concept | H | strong educational anchor |
| handaxe morphology | H+R | Korean objects inform fictional canonical tool |
| mobile communal life | H+R | broad fact + fictional exact group |
| fire use | H | broad anchor |
| current shelter existence/form | R/D | low-specificity only |
| Seokjangri exact hut | C | comparison only, do not clone |
| natural cave/rock shelter use | H+R | broad fact + fictional place |
| clothing existence/covering | C+R | plausible, exact form deferred |
| exact Korean Paleolithic garment | D | do not claim |
| human face/species morphology | D+R | fictional non-caricature cast |
| exact vegetation/season | D | non-diagnostic environment |
| B1/B2 activities/dialogue | R | fictional social staging |
| Aru/Damu/Nua names | R | fictional translated call-names |

---

# 33. Responsive Composition Tests

## 16:9

master.

## 16:10

- extra vertical area does not enlarge body arbitrarily
- action lane not overlap actor feet/contact

## 4:3

must retain:

- SC02 Aru upper body + handaxe + Player hand
- SC03 tool inspect
- SC04 Damu movement / Nua direction
- SC05 camp-behind + people-ahead relation
- SC06 Damu stop
- SC07 Damu + ground evidence + Player brace
- SC08 Nua turn
- SC09 gaze-source + shelter relationship at least during transition
- SC10 opening/contact/actors
- SC11 departing group + handaxe

If crop fails:

- adjust object-position/layer anchor
- do not shrink all actors indiscriminately

---

# 34. Human Previsual QA Gate

Every critical Scene must pass:

## A. 1-second freeze-frame

Can identify current situation/action.

## B. 800ms silent motion

Sound and caption OFF.

Distinguishable:

- Aru offer/release
- Damu walking
- Damu sudden stop
- Damu lowering
- Player crouch
- Nua body turn

## C. No-caption

Core action remains understandable.

## D. No-audio

Audio is reinforcement, not sole evidence.

## E. Reduced-effects

Start/end pose/contact/depth still carry meaning.

## F. Contact

SC02:

```text
Aru hand → handaxe → Player hand
```

visually traceable.

SC07:

- left brace clearly Player body support
- not evidence pointer

SC10:

- left rock contact establishes depth

## G. Direction

SC08→09:

Nua turn → Player pan → reveal direction consistent.

## H. No-overlay

UI does not cover primary action/contact/target.

## I. Continuity

same:

- body
- handaxe
- people
- camp
- route axis
- landmark
- morning light family

## J. Historical integrity

- no site/date conflation disguised as fact
- no late-Paleolithic hut clone presented with early-handaxe scene as one excavated reality
- no exact garment claim without evidence
- no stereotyped caveman morphology
- no exact vegetation claim without chronology

---

# 35. First-Glance Priority

| Scene | First visual priority |
|---|---|
| SC00 | fire glow / living audio context |
| SC01 | ongoing community + Aru response |
| SC02 | Aru hand → handaxe → my hand |
| SC03 | handaxe now in my hand |
| SC04 | Damu already moving / Nua elsewhere |
| SC05 | people ahead + camp behind |
| SC06 | Damu suddenly stopped/lowering |
| SC07 | shared ground evidence |
| SC08 | Nua body attention turn |
| SC09 | newly revealed natural shelter |
| SC10 | opening depth + dark uncertainty |
| SC11 | departing group + same handaxe |

If UI/text wins first glance, composition FAIL.

---

# 36. Still Intentionally Deferred

Project-owner review should NOT try to invent answers for these yet:

- exact season
- exact plant species
- exact temporary shelter construction/material/knots
- exact clothing pattern/stitching
- exact skin tone
- exact hair morphology/style
- exact hominin species visual coding
- final cast face
- Hunt Player exact age/sex
- final audio production

These are not unfinished by accident.

# **They are intentionally non-diagnostic because current evidence/chronology does not justify stronger claims.**

---

# 37. Project-owner Review Questions

Before Previsual Approval, review SC00~SC11 with these questions.

1. Screen-right outbound direction feels coherent across all scenes?
2. Aru/Damu/Nua spatial placement is memorable without function labels?
3. SC02 handoff contact is physically believable?
4. SC03 terminology can be read without turning into a lesson page?
5. SC04 Damu moving / Nua elsewhere is immediately distinct?
6. SC05 camp really recedes rather than background simply changing?
7. Split-rock landmark aids spatial memory without becoming game marker?
8. SC06 Player is clearly still standing?
9. SC07 left-hand brace makes crouch embodied without pointing at answer?
10. SC08 has enough body acting to need no dialogue?
11. SC09 gaze-follow reveal is causal rather than system reveal?
12. SC10 left rock contact improves scale/depth without clutter?
13. SC10 two lines occur after visual evidence, not before?
14. SC11 actual Aru POV is understandable without `아루 관점` title?
15. 4:3 crop preserves critical actions?
16. current shelter avoids modern tent silhouette?
17. clothing/human/environment remain plausible without pretending uncertain details are facts?
18. whole sequence feels like one morning, same people, same tool, same world?

---

# 38. Approval / Implementation Boundary

Current status after this v2:

```text
Scene composition specification = consolidated
Historical visual reference confidence = reviewed
Project-owner Scene Review = REQUIRED
Previsual Approval = NOT YET
Human Gameplay Gate = FAIL
Stage 08 = BLOCKED
```

After Project-owner review:

```text
v2 review notes
→ unresolved P1 composition fixes
→ Previsual Approval
→ Visual Production Readiness
→ minimum coherent asset + runtime implementation
→ Human Visual QA
```

# **구현은 이제 설계를 찾는 과정이 아니라, 이 v2를 충실하게 현실화하는 과정이어야 한다.**
