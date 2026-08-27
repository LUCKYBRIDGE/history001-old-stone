# Stage 07.5 — Project-owner Scene Composition Review

> 상태: **Design/Architecture Review Complete / Project-owner Confirmation Pending / Previsual Approval NOT YET**
>
> 대상:
> - `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`
> - `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
> - `docs/04_HUNT_PLAYFLOW.md`
> - current canonical guardrails
>
> 목적: SC00~SC11을 production/runtime 구현 전에 다시 읽고, **구현자가 추가로 해석해야 하는 부분·물리적으로 모호한 공간관계·몰입을 깨뜨릴 수 있는 UI/transition·continuity 위험**을 제거한다.
>
> 이 문서는 Human Gameplay PASS가 아니다. 실제 브라우저 Human Gate는 계속 별도다.

---

# 0. Review Result

전체 판정:

# **P0 없음 / P1 6개 확인 / 모두 설계 수준에서 수정 방향 확정 / Project-owner 확인 필요**

확인된 P1:

1. `R2UX-011 / SSOT drift` — 상위 canonical/AGENTS의 현재 상태가 실제 main보다 뒤처짐.
2. `R2UX-012 / Spatial geometry` — SC05에서 forward first-person camera와 rear-left camp visibility의 물리 관계가 불명확.
3. `R2UX-013 / Curriculum timing` — SC03 terminology → SC04 movement 사이가 정지 학습 카드처럼 굳을 위험.
4. `R2UX-014 / Held-item continuity` — SC08~SC09에서 handaxe를 숨길 수 있다는 표현만 있어 SC10에서 inventory pop처럼 재등장할 위험.
5. `R2UX-015 / Perspective legibility` — SC11이 같은 순간의 Aru-side POV임을 장면 자체로 증명하는 sync cue가 부족.
6. `R2UX-016 / Screen treatment` — 공통 고정 하단 action lane이 다시 HUD/button-bar처럼 읽힐 위험.

추가 P2:

- `R2UX-017` — SC10의 explicit animal trace를 Stage 07.5에서 사용하면 Stage 08 threat를 성급하게 암시할 수 있음.
- `R2UX-018` — SC04 Nua의 x79~86 배치는 4:3에서 동작 실루엣이 약해질 수 있어 safe-center를 약간 안쪽으로 두는 편이 안전.

---

# 1. Global Correction Decisions

## C1 — Action affordance는 fixed HUD가 아니다

기존 `x33~67 / y89~97`은 **기본 탐색 범위**로만 취급한다.

잠금:

- action affordance는 입력 가능할 때만 등장
- Scene/Beat 사이에 상시 남지 않음
- 행동 시작 즉시 fade/withdraw
- world bottom bar처럼 화면 폭을 차지하지 않음
- actor/contact/held item/body와 겹치면 scene-specific 위치로 이동
- 동일 위치 고정이 body HUD처럼 반복되면 FAIL
- keyboard/Enter/Space 접근성은 visual 위치와 별개로 유지 가능

금지:

- 모든 Scene에서 같은 bottom-center 큰 버튼
- world와 분리된 persistent footer
- action text가 장면의 의미를 먼저 설명

Scene-specific 우선:

- SC00: dark field lower-center, 작고 단독
- SC01: lower-center/right empty zone
- SC02: contact zone 밖 lower-center-left
- SC04/05: route target/feet를 피한 lower-center
- SC06/07: Damu/evidence/body brace 밖의 empty zone
- SC08/09: Nua gaze path / revealed shelter를 피함
- SC10: rock contact/opening/actors를 피함

---

# 2. SC00 Review — Sensory Orientation

판정: **PASS with timing clarification**

문제:

- action `눈을 뜬다`가 1.6s 이후 가능하다고 되어 있으나 B2 line window가 1.5~2.2s까지다.
- 구현자가 action을 2.2s까지 막거나, 반대로 B2 대사를 끊을 수 있다.

Lock:

```text
0.0      fire crackle
0.4~0.8  material sound
0.9~1.4  B1: 그건 젖었어.
1.5~2.2  B2: 저쪽 걸 써.
1.6      action affordance may become available
```

Player가 1.6~2.2s 사이 입력하면:

- eyelid/open transition은 즉시 시작 가능
- B2 음성은 잘리지 않고 같은 world audio로 이어짐
- 눈을 뜬 뒤에도 대사의 마지막 부분이 자연스럽게 들릴 수 있음

즉 input agency를 위해 강제 대기시키지 않고, world audio도 입력 때문에 끊지 않는다.

Reduced-effects에서도 audio continuity는 동일.

---

# 3. SC01 Review — Living Community Presence

판정: **PASS**

유지:

- Aru direct stare 금지
- B1/B2 ongoing work
- B2의 `아루.`가 name acquisition trigger
- Damu preparing / Nua outward scan

P2 crop tune:

- Nua body center 목표를 x78~83으로 두고 rightmost decorative limb만 x86까지 허용
- 4:3 crop에서도 head→torso direction이 남아야 함

이 조정은 인물을 축소하는 것이 아니라 anchor center를 약간 안쪽으로 두는 방식.

---

# 4. SC02 Review — Handoff

판정: **PASS / critical production scene**

유지:

```text
Aru motion starts
→ Aru: 손.
→ Player action
→ Player right hand enters
→ shared contact
→ release
```

추가 lock:

- `손.`이 뜬 뒤 Player arm이 자동으로 끝까지 들어오지 않음
- 입력 전에는 reach-ready 시작점까지만 가능
- 입력 후 contact가 완성됨

즉 action affordance가 단순 next 버튼이 아니라 handoff choreography의 causal trigger가 된다.

Contact acceptance:

- Aru fingers
- handaxe grip-base
- Player palm/fingers

세 층이 동시에 읽혀야 한다.

---

# 5. SC03 Review — Ownership / Experience → Name

판정: **P1 correction locked**

기존 위험:

- terminology annotation 이후 `transition/rise action should be world action`만 있어 정확한 종료/다음 action이 미정.
- 구현자가 annotation을 별도 정지 학습 카드로 만들 수 있다.

새 흐름:

```text
handoff release complete
→ Player briefly inspects same handaxe
→ terminology annotation appears
→ 0.8~1.4s later background에서 Damu movement/footstep begins
→ annotation remains readable but visual emphasis drops slightly
→ Damu becomes visibly already-moving
→ SC04 begins
→ Damu: 가자.
→ Player action: 일어나 따라간다
```

SC03에는 별도 `확인`, `다음`, `개념 확인` action을 두지 않는다.

Terminology annotation은 **world motion이 다시 시작되는 동안 공존**해야 한다.

Annotation removal:

- SC04 Player action이 시작되면 fade out
- timer-only auto hide 금지

---

# 6. SC04 Review — Rise / Damu Already Moving

판정: **PASS with crop tune**

Lock:

- Damu 1~2 steps already moving before `가자.`
- Nua는 Damu와 같은 목표를 바라보지 않음
- Aru remains camp-side

Nua:

- torso center x77~83 preferred
- head/shoulder direction right-forward
- 4:3에서 최소 head + shoulder + torso orientation이 남음

Player action:

# **`일어나 따라간다` 유지**

이 action이 SC03 학습 cue 뒤 첫 실제 world action이다.

---

# 7. SC05 Review — Departure / Camp Recedes

판정: **P1 spatial correction required and locked**

문제:

`camp = behind-left`와 `Player camera = route-forward`를 문자 그대로 구현하면, 뒤에 있는 Aru/fire/shelter와 앞의 Damu/Nua를 한 first-person frame에서 동시에 보여 주기 어렵다.

따라서 `behind-left`는 단순 screen coordinate가 아니라 **world-space rear-left relation**으로 정의하고, departure start에만 diagonal composition을 사용한다.

## Stage A — diagonal departure start

Camera:

- Player는 막 일어나 이동 방향을 잡는 순간
- route-forward 기준보다 **left-biased yaw 8~12°**
- 뒤를 완전히 돌아보는 shot은 아님

World relation:

- camp/Aru/fire = rear-left but still peripheral/side-back visible
- Damu/Nua = forward-right
- Player movement vector = right/right-forward

이 순간 한 frame에:

```text
left/peripheral: Aru + fire + shelter edge
center/right: route + Damu/Nua
```

이 동시에 가능하다.

Aru:

> `해 지기 전에 와.`

Damu remains walking:

> `알았어.`

## Stage B — camera settles forward

Over 0.8~1.5s:

- camera yaw eases right/forward 8~12°
- Player continues walking
- camp slips further left
- fire/shelter shrink + foreground occlusion 증가
- no hard cut
- no backward glance button

Final:

- Damu/Nua ahead
- camp mostly out of frame left/rear
- landmark ahead-right → center-right

# **거리감은 scale + parallax + occlusion + audio falloff의 조합으로 만든다.**

금지:

- forward shot인데 물리적으로 완전히 뒤에 있는 camp를 UI처럼 화면 왼쪽에 붙여 두기
- camp size만 숫자처럼 줄이기
- background plate를 갑자기 교체

---

# 8. SC06 Review — Damu Stops

판정: **PASS**

핵심 유지:

- camera standing height
- Damu stop first
- Player not crouched
- evidence not readable yet
- split rock rear-left partial

추가:

- Damu lowering은 `잠깐.` 이후가 아니라 stop 후 시작 가능하되, Player action 전 완전한 shared crouch pose까지 가지 않는다.
- Player가 입력하지 않으면 Damu는 low-observation pose에서 기다릴 수 있음.

이는 NPC가 freeze tutorial target이 되는 것을 줄이면서 causal order를 유지한다.

---

# 9. SC07 Review — Shared Ground Observation

판정: **PASS**

유지:

- Player left hand = body support only
- evidence touch/point 금지
- handaxe remains right hand
- Damu opens shared view

추가 acceptance:

- left brace contact와 evidence 사이 최소 시각 간격 확보
- 학생이 brace hand를 `흔적을 만지는 손`으로 오해하면 FAIL

Stage 07.5에서는 explicit answer marker/outline/glow 금지.

---

# 10. SC08 Review — Nua Attention Shift

판정: **P1 held-item continuity correction locked**

기존 `handaxe minimal/optional edge`만으로는 tool이 갑자기 사라질 수 있다.

새 choreography:

```text
SC07 crouch: handaxe visible lower-right
→ Player rises
→ right wrist/forearm naturally lowers while standing up
→ handaxe exits lower-right FOV through continuous motion
→ held state remains true
→ Nua attention becomes visual priority
```

즉 handaxe를 숨기는 것이 아니라 **내 오른팔이 시야 아래로 내려간다.**

금지:

- opacity 0로 순간 삭제
- state상 tool removal
- handaxe-free standing pose로 asset swap

SC08에는 dialogue 없음 유지.

---

# 11. SC09 Review — Gaze Follow / Shelter Reveal

판정: **PASS after continuity rule**

Handaxe:

- physically still held below/right outside current FOV
- Player right arm does not need to re-enter during pan

Pan:

- Nua remains source edge long enough to establish direction
- then shelter becomes primary

Rock shelter reveal:

- no UI marker
- no name cue yet
- no dialogue

Action:

`가까이 가 본다`

이 action이 shelter approach를 시작한다.

---

# 12. SC10 Review — Rock Shelter Inspection

판정: **P1 tool re-entry correction + P2 uncertainty cleanup**

## Handaxe re-entry

SC09 action 이후 approach 중:

```text
right arm remains low/outside FOV
→ body slows near opening
→ Player leans/adjusts balance
→ right forearm + same handaxe re-enter lower-right over 250~400ms
→ left hand reaches near-left rock edge
```

즉 SC10 첫 frame에서 tool이 갑자기 생성되지 않는다.

## Left contact

left rock brace 유지.

- 0.5~1.2s contact
- no climbing
- contact establishes near depth

## Uncertainty cue

Stage 07.5에서는 **explicit animal footprint/bone/feces/claw mark 같은 animal trace를 기본 production set에 넣지 않는다.**

현재 uncertainty는:

- dark interior
- unknown depth
- limited sightline
- uneven natural floor

로 충분하다.

Animal-use evidence가 필요하면 Stage 08 Threat Build-up에서 별도 scene logic과 함께 검토한다.

이렇게 해야 natural shelter discovery가 곧바로 `공포 동굴`로 고정되지 않는다.

Dialogue order 유지:

1. visual space read
2. Nua: `안이 꽤 넓어.`
3. darkness/depth read
4. Damu: `안쪽은 먼저 봐야 해.`
5. curriculum annotation

---

# 13. SC11 Review — Aru-side Recontextualization

판정: **P1 perspective legibility correction locked**

문제:

현재 v2는 같은 camp/handaxe/own voice를 규정하지만, 학생이 `시간이 되감겼다`, `캠프로 순간이동했다`라고 볼 여지가 남는다.

따라서 SC11을 SC05 Stage A와 **temporal sync match**로 고정한다.

## Entry timing

SC11은 새로운 시점의 임의 순간이 아니라:

# **SC05 Stage A의 `해 지기 전에 와.` 직전 0.5~1.0초와 동일한 world moment**

을 사용한다.

## Match requirements

SC05 Stage A와 동일:

- departing group spacing
- Damu walking phase
- Nua relative position
- former Player right-hand handaxe orientation
- split-rock distant placement if visible
- fire state
- shelter geometry
- morning light

Camera만 Aru의 당시 위치로 이동한다.

## Dialogue sync

Aru POV own voice:

> `해 지기 전에 와.`

0.4~1.0s later, departing Damu from distance:

> `알았어.`

SC05에서 이미 들었던 **같은 대사 순서와 같은 world action**이 반대편에서 재현된다.

B1/B2 ambient work도 camp-side에 남아 있어 같은 공동체 공간임을 보조한다.

## Former Player identification

former Player는:

- Damu/Nua와 같은 departing group
- SC05에서 Player가 차지했을 법한 relative slot
- right hand에 same `DAY1-HANDAXE-v1`

으로 읽힌다.

금지:

- 별도 meta title
- flashback sepia
- 기억 echo filter
- rewind VFX
- `아루 관점` 설명 카드

목표는:

> 같은 사건의 반대편

이지:

> 과거 회상

이 아니다.

---

# 14. Scene-by-Scene Disposition

| Scene | Review status | Required change |
|---|---|---|
| SC00 | PASS* | input/audio overlap clarify |
| SC01 | PASS* | Nua crop center tune |
| SC02 | PASS | input causes final reach/contact |
| SC03 | P1 FIX LOCKED | no lesson-stop action; Damu movement resumes under annotation |
| SC04 | PASS* | Nua crop tune |
| SC05 | P1 FIX LOCKED | diagonal departure camera + forward settle |
| SC06 | PASS | low-observation wait state clarification |
| SC07 | PASS | brace/evidence separation acceptance |
| SC08 | P1 FIX LOCKED | continuous handaxe exit from FOV |
| SC09 | PASS* | handaxe physically held off-frame |
| SC10 | P1 FIX LOCKED | continuous handaxe re-entry; no explicit animal trace by default |
| SC11 | P1 FIX LOCKED | temporal sync match with SC05 Stage A |

`PASS*` = minor clarification/tune included in this review.

---

# 15. Review Acceptance Matrix

Previsual Approval 후보가 되려면 아래 설계가 모두 반영되어야 한다.

- [x] screen axis locked
- [x] camera state family locked
- [x] SC05 physically plausible departure geometry defined
- [x] handoff contact chain defined
- [x] terminology does not require lesson-stop screen
- [x] handaxe off-frame continuity defined
- [x] SC10 tool re-entry defined
- [x] SC11 temporal sync defined
- [x] Nua attention direction defined
- [x] ground brace does not point to evidence
- [x] action affordance no longer treated as fixed HUD
- [x] explicit Stage 07.5 animal trace removed from default production requirement
- [x] chronology / site-specificity guardrails retained
- [x] 4:3 safety tune identified

Still pending:

- [ ] Project-owner accepts/rejects this review direction
- [ ] corrections consolidated into Bible v2.x after acceptance
- [ ] Previsual Approval recorded

---

# 16. What This Review Does NOT Approve

아직 승인하지 않는 것:

- runtime implementation
- CSS remediation
- production image generation
- final cast appearance
- exact clothing reconstruction
- exact vegetation/season
- Human Gameplay PASS
- Stage 08

---

# 17. Next Gate

현재 안전한 순서:

```text
Project-owner Scene Review report
→ Project-owner confirmation
→ Bible v2.x consolidation
→ Previsual Approval
→ Visual Production Readiness
→ minimum coherent production set
→ runtime/asset implementation
→ Human Visual QA
```

Project-owner confirmation 전에는 implementation freeze를 유지한다.
