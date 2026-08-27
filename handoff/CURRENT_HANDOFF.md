# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Visual Anatomy Reference Lock**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Approved / Raster Media Adapter Integrated / Visual Continuity + Anatomy Gate Integrated / Approved Raster Assets 0 / Stage 08 BLOCKED**

최신 exact repository HEAD와 CI는 GitHub가 최종 진실 공급원이다.

---

# 1. 세션 시작 시 반드시 읽을 것

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
7. `docs/03_HUNT_STORY.md`
8. `docs/04_HUNT_PLAYFLOW.md`
9. `docs/06_TECH_BLUEPRINT.md`
10. `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
11. `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`
12. `docs/07B_FIRST_PERSON_VISUAL_PRODUCTION_SPEC.md`
13. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
14. `handoff/STAGE07_5_VISUAL_CONTINUITY_INDEX.md`
15. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
16. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
17. `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
18. `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
19. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
20. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
21. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
22. `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`
23. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`

감사/근거 추적 시:

- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
- `handoff/STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`

handoff 문서는 Technical SSOT가 아니다.

---

# 2. Current production truth

Final Player-facing visual:

# **raster-first Hybrid Embodied Composite + Anchor-conditioned Continuity + Anatomy-locked Derivation**

DOM/CSS/SVG geometry는 previsual/debug/UI 보조로만 유지한다.

가장 중요한 원칙:

- same character = same skeleton/proportion master,
- same Player body = same hand/forearm/body master,
- same handaxe = same morphology/scale fingerprint,
- same world = same geography/light master,
- contact scene = approved body/object/world masters + contact geometry,
- L/TP/PP = different framing, not different bodies/worlds.

Human Gate는 계속 FAIL이다.

---

# 3. Visual Continuity + Anatomy System

Art-production entry:

- `STAGE07_5_VISUAL_CONTINUITY_INDEX.md`

New anatomy/contact contracts:

- `STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
- `STAGE07_5_CONTACT_GEOMETRY_MASTER.md`

Machine-readable:

- `src/experience/production/stage075StyleAnchor.ts`
- `src/experience/production/stage075VisualContinuityRegistry.ts`
- `src/experience/production/stage075AnatomyRegistry.ts`
- `src/experience/production/stage075RasterManifest.ts`

Tests:

- `tests/integration/Stage075VisualContinuityRegistry.test.ts`
- `tests/integration/Stage075AnatomyRegistry.test.ts`
- `tests/integration/Stage075RasterMedia.test.tsx`

---

# 4. Runtime approval dependency

Scene raster 자체가 `approved`여도 바로 runtime에 노출되지 않는다.

```text
STYLE-GIR-V1 approved
+
all required visual anchors approved
+
all required anatomy/proportion contracts approved
+
required contact geometry contract approved where applicable
+
approved master/reference paths stored
+
scene raster approved
+
L/TP/PP sources registered
↓
runtime render allowed
```

즉 final scene asset은 upstream body/character/object/world masters를 우회할 수 없다.

---

# 5. Player body master

Required:

```text
PLAYER-HUNT-BODY-V1
PLAYER-HUNT-BODY-PROP-V1
```

Master packet must include:

- right/left palm and dorsum,
- right forearm relaxed/reaching,
- right hand gripping DAY1-HANDAXE-V1,
- left ground brace,
- left rock brace,
- seated edge,
- crouch relationship,
- walking-carry,
- receive-tool first-person view.

Measured production ratios use normalized local units and are locked after review. Do not invent them as historical facts.

---

# 6. Character anatomy masters

Required:

```text
ARU-IDENTITY-V1  + ARU-PROP-V1
DAMU-IDENTITY-V1 + DAMU-PROP-V1
NUA-IDENTITY-V1  + NUA-PROP-V1
```

Each hero packet requires:

- front/back,
- 3/4 left/right,
- strict side left/right,
- seated,
- crouched,
- walking,
- relevant contact/reach pose,
- hand close-up,
- head silhouette strip,
- skeleton landmark overlay,
- normalized H=1.00 proportion record.

A new pose derives from the approved skeleton; it does not redesign the body.

---

# 7. Contact geometry masters

```text
SC02-HANDOFF-GEO-V1       reference-pending
SC07-GROUND-BRACE-GEO-V1 reference-pending
SC10-ROCK-BRACE-GEO-V1   reference-pending
```

SC02:

```text
Aru hand
→ same DAY1-HANDAXE-V1
→ Player right hand
```

Offer / Shared / Release must be one continuous transfer family.

SC07:

- Damu lowers first,
- Player remains standing in SC06,
- Player then crouches,
- left hand braces ground,
- right hand keeps same handaxe.

SC10:

- left hand braces same approved rock edge,
- right hand keeps same handaxe,
- anatomy/world shape may not deform to make contact possible.

---

# 8. Reject codes

Anatomy:

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
```

Contact:

```text
GEO-CONTACT-DEPTH
GEO-CONTACT-POINT
GEO-CONTACT-TOPOLOGY
GEO-OBJECT-SCALE
GEO-LIMB-SCALE
GEO-CAMERA
GEO-CROP
GEO-TEMPORAL
```

Hero/contact asset에 unresolved ANAT/GEO drift가 있으면 P1 reject다.

---

# 9. Immediate lock order

```text
0. STYLE-GIR-V1 reference packet
1. DAY1-HANDAXE-V1 morphology + scale packet
2. PLAYER-HUNT-BODY-V1 master packet
3. PLAYER-HUNT-BODY-PROP-V1 measured contract
4. ARU-IDENTITY-V1 turnaround packet
5. ARU-PROP-V1 measured contract
6. SC02-HANDOFF-GEO-V1 contact skeleton/geometry
7. SC02 unified contact L/TP/PP candidate
8. DAMU-IDENTITY-V1 + DAMU-PROP-V1
9. NUA-IDENTITY-V1 + NUA-PROP-V1
10. world/contact families
```

SC02 final raster는 0~6이 승인되기 전 제작하지 않는다.

---

# 10. Current asset truth

```text
Approved Raster Assets = 0
Approved Style Anchor = 0
Approved Anatomy Contracts = 0
Approved Contact Geometry Contracts = 0
```

이전 자유 생성 후보는 production contract 이탈로 repository에 넣지 않았다.

---

# 11. Current Gate

# **Visual Anatomy Reference Lock**

다음 행동은 장면 이미지를 늘리는 것이 아니다.

1. Style packet을 실제로 잠근다.
2. Handaxe master morphology/scale를 잠근다.
3. Player body/hand master를 만들고 실제 비율을 측정·기록한다.
4. Aru turnaround master와 skeleton/proportion record를 잠근다.
5. SC02 contact skeleton/geometry를 잠근다.
6. 그 뒤에만 SC02 L/TP/PP final candidate를 만든다.

Human Gate = FAIL, Stage 08 = BLOCKED 유지.
