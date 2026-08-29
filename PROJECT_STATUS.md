# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Visual Anatomy Reference Lock**

장기 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

현재 정확한 상태:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Approved / Responsive Raster + Visual Continuity + Anatomy/Contact Gates Integrated / Visual Identity-Layering-Derivation Policy Locked / Functional Anatomy + Exact Canonical Ratio Policy Locked / Visual Anchor Review Board Integrated / STYLE-GIR-V1 Controlled Packet Production-Ready / Approved Raster Assets 0 / Stage 08 BLOCKED**

최신 exact main/PR/Actions는 GitHub가 최종 진실 공급원이다.

---

# 1. Current blocking truth

현재 raster production에서 명시적으로 관리하는 핵심 위험:

- R2UX-021 Visual identity drift — 장면별 독립 생성 시 인물/배경/도구/스타일 일관성 붕괴 위험
- R2UX-022 Anatomy/proportion drift — 동일인물의 canonical head/body·팔·다리·손·발 비율이 view/pose/portrait마다 달라질 위험
- R2UX-023 Contact geometry drift — 손/도구/바위/지면 접촉을 장면별로 별도 해결하면서 물리 관계가 깨질 위험

현재 확인된 P0 runtime defect는 없다.

# **승인된 visual/anatomy master와 coherent raster proof가 아직 없으므로 Human Gate는 계속 FAIL이다.**

---

# 2. Project-owner direction

최종 raster 제작은 `좋은 장면 이미지 여러 장`을 독립 생성하는 방식이 아니다.

핵심 production lineage:

```text
STYLE-GIR-V1
→ recurring object scale anchor
→ structural scaffold
→ one canonical body / identity master
→ appearance / garment lock
→ turnaround / limb / action derivatives
→ measured exact proportion contract
→ contact geometry master
→ state / angle derivatives
→ crop-first responsive framing
```

정확한 continuity 허용오차:

```text
P0 hero / Player identity              = HARD LOCK
P1 contact / recurring hero object    = HARD LOCK
P2 major world structure / lighting   = STRONG LOCK
P3 flyaway/fold/pebble/grass/smoke 등 = harmless variation allowed
```

핵심 production rules:

# **Do not regenerate what can be derived from an approved master.**

# **Choose proportions freely before approval; inherit them exactly after approval.**

예를 들어 승인된 canonical character가 7.2등신이면 이후 underlying body가 6.8 또는 7.5등신으로 바뀌면 안 된다. 다만 pose, perspective, foreshortening, camera distance/crop 때문에 화면상 투영 비율이 달라 보이는 것은 허용한다. 검증은 distorted frame의 겉보기 등신을 새 비율로 재정의하는 방식이 아니라 canonical structural scaffold와 normalized ratio contract를 기준으로 한다.

같은 순간·같은 시선 방향의 확대/portrait는 crop/zoom/pan을 먼저 사용한다. source coverage/resolution이 부족하면 같은 master에서 outpaint/upscale하고, 실제 카메라 방향이 크게 달라질 때만 같은 world master/topology/landmark/light를 참조한 Angle Master를 만든다.

장면 이미지를 먼저 만들고 나중에 손·팔·발·등신을 수정하는 방식은 금지한다.

Scene Composition Bible v2.1은 이미 Project-owner 승인 PASS다. 현재 작업은 Scene Bible 재설계가 아니다.

---

# 3. Primary visual-production contracts

새 세션 bootstrap:

- `handoff/NEXT_SESSION_START_HERE.md`
- `handoff/SESSION_PROMPT_TEMPLATE.md`

Art-production 진입점:

- `handoff/STAGE07_5_VISUAL_CONTINUITY_INDEX.md`
- `handoff/STAGE07_5_STYLE_GIR_V1_REFERENCE_PACKET.md`

핵심 상세 계약:

- `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
- `handoff/STAGE07_5_FUNCTIONAL_ANATOMY_AND_STYLIZED_PROPORTION_POLICY.md`
- `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
- `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
- `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
- `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`

Machine-readable:

- `src/experience/production/stage075StyleAnchor.ts`
- `src/experience/production/stage075VisualProductionPolicy.ts`
- `src/experience/production/stage075VisualContinuityRegistry.ts`
- `src/experience/production/stage075AnatomyRegistry.ts`
- `src/experience/production/stage075AnchorReviewBundle.ts`
- `src/experience/production/stage075RasterManifest.ts`

---

# 4. Dev-only review surfaces

```text
?anchors=1   Visual Anchor Review Board
?previsual=1 Scene Previsual Harness
?raster=1    Raster Integration Slots
```

`?anchors=1`이 현재 Gate의 주 검토 화면이다.

여기서 다음을 한 화면에서 확인한다.

- exact canonical body lineage / ratio-lock policy
- required slot의 `Derived from` parent lineage
- STYLE-GIR-V1 상태
- priority visual anchors 상태
- anatomy/contact contract 상태
- required master/reference slots
- controlled candidate instruction / review focus / reject code
- planned candidate path와 approved reference path의 구분
- approved path 개수
- downstream scene raster dependency

---

# 5. Runtime approval gate

Raster scene asset은 자기 자신이 `approved`라고 해서 runtime에 표시되지 않는다.

필수:

```text
STYLE-GIR-V1 anchor-approved
+
required character/body/world/object/prop/light anchors anchor-approved
+
required anatomy/proportion contracts contract-approved
+
required contact geometry contract-approved where applicable
+
actual approved master/reference paths registered
+
scene raster approved
+
required responsive sources registered
↓
runtime render
```

`Stage075RasterMedia` / raster manifest가 이 Gate를 코드에서 강제한다.

STYLE-GIR-V1은 추가로 **5개 required slot 전부가 approved path를 가져야 하고**, `stage075StyleAnchor.ts`의 approved reference set과 bundle의 approved path set이 정확히 일치해야 Gate가 열린다. 한두 개 reference path만 등록해서 style Gate를 우회할 수 없다.

---

# 6. First actual reference bundles

현재 machine-readable bundle:

- `src/experience/production/stage075AnchorReviewBundle.ts`

첫 네 packet:

```text
0. STYLE-GIR-V1
1. DAY1-HANDAXE-V1
2. PLAYER-HUNT-BODY-V1
3. ARU-IDENTITY-V1
```

현재 모든 required slot의 approved path count = 0.

### STYLE-GIR-V1

Required slots:

- `human-mid`
- `first-person-hand`
- `world`
- `material`
- `responsive-pair`

운영 원칙:

- 앞의 네 style sample은 anonymous/non-diagnostic exploration으로 Aru/Damu/Nua, DAY1-HANDAXE-V1, WORLD-CAMP-DAWN-A를 조기 lock하지 않는다.
- `responsive-pair`는 동일 source moment에서 파생한다.
- STYLE-GIR proof는 actor/world integration 검토를 위해 contextual background를 포함할 수 있다.
- STYLE-GIR proof가 reusable actor cutout을 의미하지는 않는다.
- 실제 Project-owner 승인 전에는 `reference-pending`, approved slots `0/5`를 유지한다.

운영 Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_REFERENCE_PACKET.md`

### DAY1-HANDAXE-V1

Required:

- face-A / face-B
- side/thickness
- scale reference
- Aru grip
- Player grip

### PLAYER-HUNT-BODY-V1

독립 이미지 묶음으로 만들지 않는다.

```text
structural-scaffold
→ canonical-body
→ right/left palm+dorsum
→ forearm
→ right/left foot+ankle
→ receive-reach
→ handaxe-grip
→ ground-brace
→ rock-brace
→ crouch
→ walk-carry
```

`canonical-body`는 `structural-scaffold`의 derivative이며, 이후 모든 limb/action slot은 `canonical-body`를 parent로 가진다.

모든 visible hand/arm/foot/ankle는 동일한 exact canonical Player body fingerprint를 상속한다.

### ARU-IDENTITY-V1

독립 front/back/side 생성 묶음으로 만들지 않는다.

```text
structural-scaffold
→ canonical-identity (full-body 3/4)
→ front
→ back
→ opposite 3/4
→ side-left / side-right
→ seated
→ offer-handaxe
→ hand-reference
```

모든 derivative는 같은 canonical face/head/body/garment identity와 exact canonical proportion fingerprint를 상속한다.

Reusable hero/Player/item master는 기본적으로 transparent alpha 또는 extraction-safe neutral source + transparent derivative로 관리한다.

---

# 7. Style / Object / Body lock

현재:

```text
STYLE-GIR-V1                reference-pending (controlled packet ready, approved 0/5)
DAY1-HANDAXE-V1             reference-pending
PLAYER-HUNT-BODY-V1         reference-pending
PLAYER-HUNT-BODY-PROP-V1    reference-pending
```

STYLE-GIR-V1 exact boundary:

```text
functional believable anatomy / weight / perspective / contact
+
illustratively simplified surfaces / clean reusable silhouette
-
photographic pore-field / individual-hair field / lens language / beauty skin / AAA grading
```

자동 reject 방향:

- normal viewing에서 pore-field/beauty-photo rendering이 지배
- hair가 mass/silhouette보다 photographic individual-strand field로 보임
- bokeh/lens flare/chromatic aberration/sensor-film noise를 art language로 bake-in
- shallow photographic DOF가 reusable silhouette를 녹임
- actor/background detail tier 불일치
- reusable alpha asset에 눈에 보이는 halo/background contamination

추가 핵심 규칙:

- hyper-photoreal / AAA poster / cartoon-chibi / fantasy barbarian 금지
- 6/7/8등신 같은 textbook target을 realism gate로 강제하지 않음
- canonical master 승인 후에는 실제 head/body 및 segment ratio를 정확히 측정해 P0 identity로 고정
- handaxe morphology와 scale을 먼저 잠가 Player grip 기준으로 사용
- Player hand/palm/finger/wrist/forearm/foot/ankle 비율을 canonical body에서 측정 후 고정
- portrait fitting을 위해 손/팔/발/머리-몸 비율을 임의 확대·축소하지 않음

---

# 8. Character anatomy anchors

현재:

```text
ARU-IDENTITY-V1  reference-pending
ARU-PROP-V1      reference-pending
DAMU-IDENTITY-V1 reference-pending
DAMU-PROP-V1     reference-pending
NUA-IDENTITY-V1  reference-pending
NUA-PROP-V1      reference-pending
```

Hero character는 portrait 한 장이나 독립 turnaround 여러 장으로 승인하지 않는다.

필수 production lineage:

```text
structural scaffold
→ one canonical identity master
→ derived turnaround/action family
→ measured exact proportion contract
```

Measured contract 최소:

- `canonical-head-count`
- `head-height/H`
- `shoulder-width/H`
- `shoulder-y/H`
- `pelvis-y/H`
- `knee-y/H`
- `arm-span/H`
- `upper-arm/H`
- `forearm/H`
- `hand-length/H`
- `thigh/H`
- `shin/H`
- `foot-length/H`

Numeric ratio는 approved canonical master에서 측정한 production lock이며 고고학적 인구집단 사실 주장이 아니다.

비율을 어떤 값으로 설계할지는 approval 전 자유지만, approval 후에는 exact underlying ratio가 P0 identity다. 같은 인물의 canonical 7.2등신을 다른 view에서 underlying 6.8등신으로 바꾸는 것은 `ANAT-HEAD-BODY` + P0 identity failure다.

---

# 9. Contact geometry contracts

현재:

```text
SC02-HANDOFF-GEO-V1       reference-pending
SC07-GROUND-BRACE-GEO-V1 reference-pending
SC10-ROCK-BRACE-GEO-V1   reference-pending
```

SC02 topology:

```text
Aru hand
→ same DAY1-HANDAXE-V1
→ Player right hand
```

Offer → Shared Contact → Release가 하나의 연속 동작이어야 한다.

SC07:

- Damu가 먼저 낮아짐
- Player는 SC06에서는 아직 서 있음
- Player가 직접 crouch
- 왼손은 지면 지지
- 오른손 handaxe ownership 유지

SC10:

- 왼손이 같은 rock-shelter edge를 짚음
- 오른손은 같은 handaxe 유지
- 바위/팔 anatomy를 contact에 맞춰 임의 변형하지 않음

접촉 부위를 투명 layer 여러 개로 억지 분리했을 때 topology가 깨지면 unified contact raster를 사용한다.

---

# 10. Anatomy / Geometry reject families

```text
ANAT-HAND-SCALE
ANAT-FINGER
ANAT-WRIST
ANAT-ARM-LENGTH
ANAT-SHOULDER
ANAT-TORSO
ANAT-PELVIS
ANAT-LEG-LENGTH
ANAT-FOOT-SCALE
ANAT-HEAD-BODY
ANAT-COM
ANAT-FOV
ANAT-POSE-ID

GEO-CONTACT-DEPTH
GEO-CONTACT-POINT
GEO-CONTACT-TOPOLOGY
GEO-OBJECT-SCALE
GEO-LIMB-SCALE
GEO-CAMERA
GEO-CROP
GEO-TEMPORAL
```

Hero/contact asset에 unresolved `ANAT-*` 또는 `GEO-*`가 있으면 P1 reject다. `ANAT-HEAD-BODY` 또는 body fingerprint drift가 다른 몸으로 읽히는 경우 P0 identity failure도 함께 적용한다.

---

# 11. World / responsive continuity

```text
WORLD-CAMP-DAWN-A       reference-pending
WORLD-DEPARTURE-PATH-A  reference-pending
WORLD-GROUND-OBS-A      reference-pending
WORLD-ROCK-SHELTER-A    reference-pending
LM-SPLIT-ROCK-01        reference-pending
PROP-TEMP-SHELTER-A     reference-pending
```

원칙:

# **same world, many cameras / same body, many poses / crop first, derive only when crop fails**

동일 장소·동일 순간·동일 camera direction:

```text
same high-resolution master → crop / zoom / pan
```

coverage/resolution 부족:

```text
same master → controlled outpaint / upscale
```

camera direction materially changes:

```text
same world master + topology + landmark + light → Angle Master derivative
```

실제 action/world state changes:

```text
approved masters → state derivative
```

L / TP / PP는 다른 인물/다른 세계가 아니다. 같은 사건을 우선 같은 source master에서 framing한다.

Portrait 때문에 anatomy, exact canonical ratio, world-space 위치를 임의 변형하면 안 된다.

작은 풀, 돌, 구름, 연기, 옷주름 같은 P3 variation은 허용한다. 주요 landmark/route/shelter/fire/terrain/light 같은 P2 contradiction은 허용하지 않는다.

---

# 12. Current raster asset state

Manifest:

```text
DAY1-HANDAXE-V1                 pending
HUNT-SC02-HANDOFF-KEYFRAME-V1 pending
HUNT-SC01-CAMP-WORLD-V1       pending
```

Approved Raster Asset count:

# **0**

실패한 자유 생성 후보는 production contract 이탈 시 repository에 넣지 않는다.

---

# 13. Immediate lock order

```text
0. STYLE-GIR-V1 reference packet
1. DAY1-HANDAXE-V1 morphology + scale packet
2. PLAYER-HUNT-BODY-V1 structural scaffold + canonical body + derivatives
3. PLAYER-HUNT-BODY-PROP-V1 measured exact anatomy/proportion contract
4. ARU-IDENTITY-V1 structural scaffold + canonical identity + derivatives
5. ARU-PROP-V1 measured exact anatomy/proportion contract
6. SC02-HANDOFF-GEO-V1 contact skeleton/geometry master
7. SC02 unified contact state master + crop-first L/TP/PP proof
8. DAMU-IDENTITY-V1 + DAMU-PROP-V1
9. NUA-IDENTITY-V1 + NUA-PROP-V1
10. world/contact families expansion
```

SC02 final art는 0~6이 승인되기 전 만들지 않는다.

STYLE-GIR-V1의 **production packet 준비와 visual identity/layering/derivation + functional anatomy/exact canonical ratio 기준 lock은 완료**되었지만 reference lock은 아직 `0/5`다. 따라서 1번으로 넘어가지 않는다.

---

# 14. Current Gate

# **Visual Anatomy Reference Lock**

현재:

```text
Scene Composition Design = PASS
Project-owner Scene Confirmation = PASS
Responsive Raster Contract = READY
Visual Identity/Layering/Derivation Policy = SPEC LOCKED
Functional Anatomy / Stylized Proportion Policy = SPEC LOCKED
Exact Canonical Ratio Inheritance = SPEC LOCKED
Raster Media Adapter = INTEGRATED
Visual Continuity Registry = INTEGRATED
Anatomy/Contact Registry = INTEGRATED
Visual Anchor Review Board = INTEGRATED + PARENT LINEAGE VISIBLE
STYLE-GIR-V1 Controlled Packet = PRODUCTION READY
Style Anchor = REFERENCE PENDING (0/5 approved)
Character/Player Anchors = REFERENCE PENDING
Anatomy Contracts = REFERENCE PENDING
Contact Geometry Contracts = REFERENCE PENDING
World/Object Anchors = REFERENCE PENDING
Approved Raster Assets = 0
Player Raster Replacement = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 실제 visual-production 행동은 `handoff/STAGE07_5_STYLE_GIR_V1_REFERENCE_PACKET.md`, exact derivation/anatomy contracts, `?anchors=1`을 기준으로 STYLE-GIR-V1의 controlled references를 제작·검토하는 것이다. 이 상태 업데이트 자체는 어떤 image도 승인하지 않는다.

# **장면 수보다 동일인물·동일 Player body·exact canonical ratio·모체 파생·접촉·세계 구조 일관성을 우선한다.**
