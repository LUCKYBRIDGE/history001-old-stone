# Stage 07.5 — Previsual Remediation Readiness Package

> 상태: **Design/Planning Ready / No Image Generation Yet**
>
> 목적: Project-owner가 승인한 Scene Composition Bible v2.1을 실제 Stage 07.5 Human-Gate 재검증용 rough previsual로 옮기기 전에, 필요한 anchor/shot/layer/crop/contact/continuity 산출물을 정확히 정의한다.
>
> 이 문서는 Stage 08 production spec이 아니다. Stage 08은 계속 Human Gate PASS 전 BLOCKED다.

---

# 0. Gate Position

현재 순서:

```text
Scene Composition Review PASS
→ Project-owner Confirmation PASS
→ Previsual Remediation Readiness (현재)
→ Rough Previsual Artifact Set
→ Project-owner Previsual Approval
→ Minimum Coherent Human-Gate Visual Proof
→ Human Visual QA
→ Human Gate PASS 여부
→ Stage 08 Visual Production Readiness
```

Rough previsual은 production final image가 아니다.

목표:

- composition 검증
- body/contact 검증
- screen direction 검증
- responsive crop 검증
- continuity 검증

금지:

- final face lock
- final clothing lock
- 대량 generation batch
- full Hunt Stage 08 확장
- production polishing으로 구조적 문제 가리기

---

# 1. Minimum Critical Previsual Set

모든 SC00~SC11을 처음부터 production-quality로 만들지 않는다.

Human Gate의 P1을 직접 검증하는 최소 critical set:

## PV-01 — SC01 Living Camp

검증:

- 공동체가 Player 중심 NPC 파티처럼 보이지 않는가
- Aru/Damu/Nua/B1/B2가 같은 물리 공간에 있는가
- shelter가 modern tent처럼 보이지 않는가
- 4:3에서 Nua attention seed가 남는가

필수 요소:

- WP-CAMP-DAWN-A rough
- Aru neutral
- Damu preparing
- Nua outward-scan seed
- B1/B2 ongoing activity
- Player seated knee/body edge
- fire local light

## PV-02 — SC02 Handoff

검증:

- Aru hand → handaxe → Player right hand contact
- tool size/grip/depth
- body가 HUD가 아닌가

Mode:

# Unified Contact Rough

필수:

- Aru torso/arm
- Player right arm
- DAY1-HANDAXE-v1
- contact geometry
- same camp background family

## PV-03 — SC03→04 Ownership / Movement Resume

검증:

- terminology가 world를 멈추지 않는가
- same handaxe ownership
- Damu starts moving while annotation remains
- action UI가 fixed bottom HUD처럼 보이지 않는가

필수 상태 2개:

A. SC03 readable annotation + tool inspect
B. Damu motion begins + annotation de-emphasis

## PV-04 — SC05 Departure Spatial Proof

검증:

- rear-left camp / forward-right route의 first-person 기하가 가능한가
- hard background replacement 없이 camp가 사라지는가
- split rock landmark가 공간 기억으로 읽히는가

필수 상태 3개:

A. C4D diagonal start
B. mid settle
C. C4F forward settle / camp mostly occluded

## PV-05 — SC06→07 Damu Stop / Player Crouch

검증:

- Damu first, Player second
- standing→crouch가 distinct
- left ground brace가 evidence pointer로 보이지 않는가
- ground evidence가 icon이 아닌가

필수 상태:

A. Damu stop, Player standing
B. Player crouching
C. shared ground view

## PV-06 — SC08→09 Nua Attention / Reveal

검증:

- Nua body acting만으로 attention shift가 읽히는가
- 4:3에서도 읽히는가
- Player pan으로 shelter가 reveal되는가
- handaxe off-frame 과정이 자연스러운가

필수 상태:

A. Nua neutral
B. head→shoulder→torso turn
C. Player pan mid
D. shelter reveal

## PV-07 — SC10 Rock Shelter Inspection

검증:

- natural opening depth
- left rock brace
- same handaxe re-entry
- Nua/Damu pose distinction
- explicit animal spoor 없이 uncertainty 성립

필수:

- foreground rock
- left hand contact
- opening light falloff
- same tool lower-right
- Nua/Damu positions

## PV-08 — SC11 Same-Moment Aru POV

검증:

- rewind/teleport가 아니라 SC05 Stage A의 반대편임을 알 수 있는가
- same people/tool/fire/shelter/light
- dialogue temporal sync

필수 pair:

A. SC05 Stage A reference frame
B. SC11 synchronized opposite-side frame

---

# 2. Anchor Package Before Any Rough Image

Previsual을 만들기 전 먼저 low-detail anchor sheets를 정의한다.

## A. DAY1-HANDAXE-v1

필수 views:

- face-A
- face-B
- edge
- grip-base / working-end orientation diagram
- Player right-hand carry orientation

역사 anchor:

- NMK 신수19143
- NMK 신수18710

Rough 단계 acceptance:

- silhouette identity 유지
- size class 유지
- no handle / metal

## B. HUNT-PLAYER-BODY-v1

현재 lock:

- right dominant
- forearm/hand proportion family
- no modern accessory
- gender/age non-diagnostic

필수 rough pose:

- seated rest
- reach
- hold inspect
- rise carry
- walk carry
- standing stop
- crouch brace
- rock brace

## C. ARU-v1

필수 rough pose:

- camp neutral
- recognition
- tool check
- offer
- release
- farewell

## D. DAMU-v1

- prepare
- walk
- reply while walking
- sudden stop
- lower/crouch
- shared observation
- shelter inspect

## E. NUA-v1

- camp outward scan
- walk
- travel neutral
- head turn
- shoulder/torso follow
- shelter inspect

## F. B1/B2

low-detail identity only.

목표:

- same background people across SC00~05
- not main cast card

---

# 3. World Rough Package

## WORLD-CAMP-DAWN-A

Must define:

- shelter/material zone
- fire
- camp ground plane
- outbound opening
- Aru zone
- Damu/Nua prep zone
- B1/B2 zones
- occluder candidates for departure

Must avoid:

- modern campsite composition
- symmetric tent silhouette
- stage-like character line-up

## WORLD-DEPARTURE-PATH-A

Must connect geometrically to camp.

Need:

- route-forward corridor
- left occluder progression
- split-rock landmark path
- camp sightline stages A/B/C

## WORLD-GROUND-OBS-A

Need one terrain patch supporting both:

- standing view
- crouch view

Do not generate two unrelated grounds.

## WORLD-ROCK-SHELTER-A

Need:

- distant silhouette
- approach state
- near entrance state
- foreground rock contact edge
- dark interior gradient

No modern room geometry.

---

# 4. Shotboard Contract

각 previsual card는 최소 다음 metadata를 가진다.

```text
PV ID
Scene/Beat
camera profile
world family
aspect ratio
Player body pose
held item state
actor positions
actor gaze/body direction
primary first-glance target
foreground/occlusion
light source
required dialogue timing
UI safe zone
action affordance safe position
previous continuity
next continuity
historical confidence
known risk
```

Rough라도 이 metadata 없이 그림만 만들지 않는다.

---

# 5. Aspect-Ratio Deliverables

각 critical PV는 최소:

- 1600×900 16:9 master
- 1440×900 16:10 crop proof
- 1024×768 4:3 crop proof

이 단계는 export 품질 테스트가 아니라 composition test다.

Crop acceptance:

- contact hand/object not lost
- Nua torso attention not cut
- action target not lost
- Player brace not cut into ambiguous stump
- curriculum annotation does not cover world target

---

# 6. Motion Proof Deliverables

정지 shot만으로 부족한 P1은 rough motion strip을 만든다.

## M-01 Handoff

4 frames:

```text
offer
→ reach
→ shared contact
→ release
```

## M-02 Departure

3 frames:

```text
diagonal camp-visible
→ settle mid
→ forward/camp occluded
```

## M-03 Damu Stop/Crouch

4 frames:

```text
walking
→ stop
→ Damu lowers / Player stands
→ Player crouches
```

## M-04 Nua Attention

4 frames:

```text
neutral
→ head
→ shoulder/torso
→ Player pan begins
```

## M-05 Handaxe Off-frame / Re-entry

4 frames:

```text
SC07 visible
→ rise/lowering arm
→ SC09 off-frame
→ SC10 same tool re-entry
```

## M-06 Perspective Sync

paired timeline:

```text
SC05 Aru line
SC05 Damu distant reply
=
SC11 own Aru line
SC11 same distant Damu reply
```

---

# 7. UI Previsual Rules

Action affordance is not a permanent button bar.

For each PV:

- define one safe candidate position
- show hidden state and available state
- remove at action start

Preferred strategy:

- lower safe area only when free
- otherwise side/near-bottom corner
- do not cover hands/contact/actor feet/target

Curriculum annotation:

- only SC03 and SC10 critical
- small contextual annotation
- no full-width lesson card
- no world dim

Dialogue:

- speaker proximal
- scene-safe
- no generic lower-third unless accessibility fallback

---

# 8. Historical Readiness Check

Before rough production:

## Ready enough

- handaxe morphology reference
- natural shelter broad historical use
- fire broad use
- Korean Paleolithic composite framing
- chronology coherence policy
- anti-modern shelter policy
- anti-caricature human policy

## Still intentionally non-diagnostic

- exact garment construction
- exact skin/hair
- exact hominin face/species
- exact vegetation species
- exact season
- exact shelter post/cover/knots

Rough must not silently decide these as factual canon.

---

# 9. Previsual Acceptance Matrix

Each critical PV gets PASS/FAIL for:

| Axis | PASS condition |
|---|---|
| Action | 1-second glance reads current action |
| Embodied | body appears connected to current pose |
| Contact | touch/grip is physically traceable |
| Social | people read as individuals in shared life |
| Spatial | depth/direction/occlusion coherent |
| Continuity | same body/tool/people/world |
| Curriculum | cue names experience, does not replace it |
| UI | world remains primary |
| Responsive | 4:3/16:10/16:9 preserve meaning |
| Historical | no unsupported specific claim |

Any critical P1 FAIL blocks Previsual Approval.

---

# 10. Minimum Human-Gate Visual Proof After Previsual Approval

Previsual PASS 뒤에도 전체 Stage 08을 만들지 않는다.

Stage 07.5 Human-Gate proof implementation is limited to:

1. camp living presence
2. handaxe handoff/contact
3. ownership→naming→world movement
4. departure spatial progression
5. Damu stop/crouch shared observation
6. Nua attention→rock shelter reveal
7. rock shelter depth/body contact
8. same-moment Aru-side perspective proof

목적:

- 기존 R2UX-001/002/005/008/009/012~016 재검증

금지:

- Hunt chase/result expansion
- full return sequence
- full Gather/Camp production
- dozens of variants

---

# 11. Previsual Approval Boundary

Project-owner가 rough previsual을 실제로 보고 다음을 확인해야 PASS 가능:

- scene 자체로 행동이 읽힘
- 손/팔이 HUD가 아님
- same tool continuity
- actor individuality/continuity
- camp→travel 공간 연속성
- SC11 same-moment 이해
- responsive crop viability

문서만으로 Previsual PASS를 선언하지 않는다.

현재:

```text
Project-owner Scene Composition Confirmation = PASS
Readiness Package = READY
Rough Previsual Artifact Set = NOT YET
Previsual Approval = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

---

# 12. Next Execution Entry Point

다음 실제 작업은 **rough previsual artifact 제작 준비**다.

이미지 생성/제작을 시작하기 전에 필요한 입력:

- v2.1 scene contract
- this readiness package
- historical references
- anchor sheet definitions

그리고 production image batch가 아니라 다음 순서로 한 장면씩 진행한다.

```text
PV-01 camp rough
→ review
→ PV-02 handoff rough
→ review
→ PV-03~08
→ full previsual gate review
```

# **Anchor before Variation. Contact before Decoration. Scene before Polish.**
