# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Visual Anatomy Reference Lock**

장기 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

현재 정확한 상태:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Approved / Responsive Raster + Visual Continuity + Anatomy/Contact Gates Integrated / Visual Anchor Review Board Integrated / Approved Raster Assets 0 / Stage 08 BLOCKED**

최신 exact main/PR/Actions는 GitHub가 최종 진실 공급원이다.

---

# 1. Current blocking truth

현재 raster production에서 명시적으로 관리하는 핵심 위험:

- R2UX-021 Visual identity drift — 장면별 독립 생성 시 인물/배경/도구/스타일 일관성 붕괴 위험
- R2UX-022 Anatomy/proportion drift — 손·팔·어깨·몸통·다리 비율이 장면/포즈/portrait마다 바뀔 위험
- R2UX-023 Contact geometry drift — 손/도구/바위/지면 접촉을 장면별로 별도 해결하면서 물리 관계가 깨질 위험

현재 확인된 P0는 없다.

# **승인된 anatomy master와 coherent raster proof가 아직 없으므로 Human Gate는 계속 FAIL이다.**

---

# 2. Project-owner direction

최종 raster 제작은 `좋은 장면 이미지 여러 장`을 만드는 방식이 아니다.

우선순위:

# **Consistency-first + Anatomy-first Anchor Production**

```text
style anchor
+ object scale anchor
+ Player body skeleton/proportion master
+ character turnaround/proportion masters
+ world geography anchors
+ contact geometry masters
→ scene variants
```

장면 이미지를 먼저 만들고 나중에 손·팔·비율을 수정하는 방식은 금지한다.

Scene Composition Bible v2.1은 이미 Project-owner 승인 PASS다. 현재 작업은 Scene Bible 재설계가 아니다.

---

# 3. Primary visual-production contracts

새 세션 bootstrap:

- `handoff/NEXT_SESSION_START_HERE.md`
- `handoff/SESSION_PROMPT_TEMPLATE.md`

Art-production 진입점:

- `handoff/STAGE07_5_VISUAL_CONTINUITY_INDEX.md`

핵심 상세 계약:

- `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
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

- STYLE-GIR-V1 상태
- priority visual anchors 상태
- anatomy/contact contract 상태
- required master/reference slots
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

현재 approved slot count는 0이다.

### STYLE-GIR-V1

필수 예:

- human mid-shot
- first-person hand
- world sample
- material sample
- landscape/portrait equivalence

### DAY1-HANDAXE-V1

필수 예:

- face-A / face-B
- side/thickness
- scale reference
- Aru grip
- Player grip

### PLAYER-HUNT-BODY-V1

필수 예:

- right/left palm + dorsum
- neutral forearm
- receive reach
- handaxe grip
- ground brace
- rock brace
- crouch edge
- walk carry

### ARU-IDENTITY-V1

필수 예:

- front/back
- 3/4 left/right
- strict side left/right
- seated
- offer-handaxe
- hand reference

---

# 7. Style / Object / Body lock

현재:

```text
STYLE-GIR-V1                reference-pending
DAY1-HANDAXE-V1             reference-pending
PLAYER-HUNT-BODY-V1         reference-pending
PLAYER-HUNT-BODY-PROP-V1    reference-pending
```

핵심 규칙:

- Style = Grounded Illustrative Realism
- hyper-photoreal / AAA poster / cartoon-chibi / fantasy barbarian 금지
- handaxe morphology와 scale을 먼저 잠가 Player grip 기준으로 사용
- Player hand/palm/finger/wrist/forearm 비율을 master packet에서 측정 후 고정
- portrait fitting을 위해 손/팔을 임의 확대·축소하지 않음

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

Hero character는 portrait 한 장으로 승인하지 않는다.

필수 master packet 방향:

- front/back
- 3/4 left/right
- strict side left/right
- seated/crouched/walking
- relevant reach/contact pose
- hand close-up
- head silhouette
- skeleton landmark overlay
- normalized proportion record (`H = 1.00`)

Numeric ratio는 approved master에서 측정한 production lock이며 고고학적 인구집단 사실 주장이 아니다.

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
- 바위/팔 anatomy를 접촉에 맞춰 임의 변형하지 않음

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

Hero/contact asset에 unresolved `ANAT-*` 또는 `GEO-*`가 있으면 P1 reject다.

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

# **same world, many cameras / same body, many poses**

L / TP / PP는 다른 인물/다른 세계가 아니다. 같은 사건을 다른 framing으로 보여준다.

Portrait 때문에 anatomy를 늘이거나 줄이면 안 된다.

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
2. PLAYER-HUNT-BODY-V1 reference packet
3. PLAYER-HUNT-BODY-PROP-V1 measured anatomy contract
4. ARU-IDENTITY-V1 turnaround packet
5. ARU-PROP-V1 measured anatomy contract
6. SC02-HANDOFF-GEO-V1 contact skeleton/geometry master
7. SC02 unified contact L/TP/PP candidate
8. DAMU-IDENTITY-V1 + DAMU-PROP-V1
9. NUA-IDENTITY-V1 + NUA-PROP-V1
10. world/contact families expansion
```

SC02 final art는 0~6이 승인되기 전 만들지 않는다.

---

# 14. Current Gate

# **Visual Anatomy Reference Lock**

현재:

```text
Scene Composition Design = PASS
Project-owner Scene Confirmation = PASS
Responsive Raster Contract = READY
Raster Media Adapter = INTEGRATED
Visual Continuity Registry = INTEGRATED
Anatomy/Contact Registry = INTEGRATED
Visual Anchor Review Board = INTEGRATED
Style Anchor = REFERENCE PENDING
Character/Player Anchors = REFERENCE PENDING
Anatomy Contracts = REFERENCE PENDING
Contact Geometry Contracts = REFERENCE PENDING
World/Object Anchors = REFERENCE PENDING
Approved Raster Assets = 0
Player Raster Replacement = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 세션 첫 행동은 `handoff/NEXT_SESSION_START_HERE.md`와 `?anchors=1`을 기준으로 **STYLE-GIR-V1 첫 reference packet을 실제로 준비·검토하는 것**이다.

# **장면 수보다 모체·뼈대·비율·접촉·세계 일관성을 우선한다.**
