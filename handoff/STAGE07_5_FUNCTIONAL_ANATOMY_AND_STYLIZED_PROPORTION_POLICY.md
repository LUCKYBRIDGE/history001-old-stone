# Stage 07.5 — Functional Anatomy & Stylized Proportion Policy

Status: **SPEC LOCKED / PRODUCTION POLICY**

Purpose: define exactly how human/body proportions are chosen and preserved in Stage 07.5 without forcing photographic 6-head / 7-head / 8-head conventions.

This policy clarifies the body-proportion rules in:

- `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
- `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
- `src/experience/production/stage075VisualProductionPolicy.ts`

Technical runtime SSOT remains `docs/06_TECH_BLUEPRINT.md`.

---

# 1. Core decision

The project does **not** use real-world adult head-count proportion targets as a production requirement.

Forbidden assumptions:

```text
"adult must be 7.5 heads tall"
"realistic means 6/7/8-head proportion"
"portrait realism requires fashion-illustration limb length"
```

No hero character and no Player body is rejected merely because its approved design is not a conventional 6-head, 7-head, or 8-head human figure.

The governing rule is:

# **Functional anatomy is mandatory. Photographic proportion convention is not.**

And:

# **Once a canonical body proportion is approved, that exact proportion becomes identity.**

Example:

```text
If an approved fictional character measures 7.2 heads tall in the canonical neutral master,
7.2 is thereafter the canonical head/body fingerprint for that identity.
A later 6.8-head or 7.5-head underlying body is not harmless variation; it is identity drift.
```

The project is flexible about **which** proportion is selected, but strict about preserving that selected proportion afterward.

---

# 2. What must be physically believable

Regardless of stylization, the following are hard requirements:

- joints bend in mechanically plausible directions,
- shoulders, elbows, wrists, hips, knees, ankles and fingers articulate coherently,
- limb segments can physically reach the shown contact point,
- hands can actually grip the shown object,
- feet/legs can support the shown center of mass,
- crouch / stand / walk transitions preserve balance,
- foreshortening comes from camera geometry rather than arbitrary limb stretching,
- contact pressure, overlap and depth are plausible,
- left/right limb ownership remains coherent,
- the same body does not change skeletal ratios from scene to scene.

This is **functional anatomy**.

---

# 3. What may be stylized

The canonical design may intentionally use non-photographic body proportions, including:

- a relatively larger or smaller head,
- shorter or longer torso,
- shorter or longer limbs,
- slightly emphasized hands or feet,
- broader or narrower shoulder-to-pelvis relationship,
- compact or elongated body silhouette,
- character-specific mass distribution.

These choices are allowed when all of the following remain true:

1. the body still moves and contacts objects plausibly;
2. the design remains inside `STYLE-GIR-V1` rather than becoming chibi/cartoon caricature;
3. the proportions are intentional and recorded in the approved master;
4. every later view/pose derives from the same proportion master;
5. camera framing does not silently alter the underlying proportions.

Stylization freedom exists **before approval**. After approval, the selected canonical ratio set is immutable unless the Project-owner explicitly opens a new identity revision.

---

# 4. No universal head-count target, but exact per-character lock

Do **not** assign a required `heads tall` value before the identity/body master is selected.

The workflow is:

```text
structural scaffold
→ canonical body/identity master
→ project-owner approval
→ measure the approved design once
→ record normalized production ratios
→ lock one canonical proportion fingerprint
→ derive all later views/poses from that same fingerprint
```

If a useful descriptive head-count is recorded after approval, it becomes part of that approved fictional design's canonical metadata.

Example:

```text
ARU canonical head-count = 7.2
```

means:

```text
front / back / 3Q / side / seated / walking / handoff
all use the same underlying 7.2 canonical body structure.
```

It does **not** mean every rendered silhouette must measure 7.2 heads directly on screen. Perspective, pose, foreshortening, crop, partial occlusion and camera pitch can change the visible projection. Those effects must come from the same underlying canonical scaffold rather than from redesigning the body.

A derivative must never create a new head-count merely because the generated image happens to look better at that proportion.

---

# 5. Structural scaffold vs canonical identity

A skeleton/body scaffold does not itself define visual identity.

## Structural scaffold locks

- joint landmarks,
- segment relationships,
- reach envelope,
- hand/foot scale family,
- center-of-mass logic,
- intended canonical proportion silhouette.

## Canonical identity master locks

- face/head identity,
- hair silhouette,
- body mass distribution,
- exact canonical body proportions,
- garment silhouette,
- overall character silhouette.

Production order for a hero character:

```text
STRUCTURAL SCAFFOLD
→ CANONICAL IDENTITY MASTER
→ APPEARANCE / GARMENT LOCK
→ TURNAROUND DERIVATIVES
→ MOTION / CONTACT DERIVATIVES
→ measured proportion contract
```

Production order for Player:

```text
PLAYER STRUCTURAL SCAFFOLD
→ PLAYER NEUTRAL BODY MASTER
→ hand/arm/foot/ankle reference derivatives
→ action derivatives
→ measured proportion contract
```

Do not independently generate a packet of front/side/back/action images and then try to average them into one person.

---

# 6. Canonical proportion fingerprint

After approval, record the chosen body's exact normalized ratios.

For hero characters, use `H = 1.00` as the whole-body normalization unit and record at minimum:

```text
head-height / H
shoulder-width / H
shoulder-y / H
pelvis-y / H
knee-y / H
arm-span / H
upper-arm / H
forearm / H
hand-length / H
thigh / H
shin / H
foot-length / H
```

Optionally record a descriptive canonical head-count:

```text
canonical-head-count = H / head-height
```

For Player first-person limbs, use local reference units such as palm length and foot length where more practical.

These numbers are **derived from the approved master once**, never invented first and never re-measured into a different canonical fingerprint for each derivative.

Rule:

# **One identity → one canonical proportion fingerprint.**

If a derivative implies a different underlying ratio set, the derivative is wrong. The master is not silently updated to match it.

---

# 7. Canonical ratio vs apparent projected ratio

This distinction is mandatory.

## Canonical ratio

The underlying body structure stored in the approved scaffold/master.

Examples:

- canonical head/body ratio,
- upper-arm/forearm ratio,
- thigh/shin ratio,
- hand/forearm ratio,
- foot/leg ratio.

These are P0 identity locks and remain unchanged.

## Apparent projected ratio

What can be measured directly from a particular rendered frame after:

- perspective,
- foreshortening,
- pose,
- camera pitch/yaw,
- crop,
- partial occlusion.

Apparent projected measurements may differ without implying a new body.

Therefore review must not say:

```text
"this seated image measures only 6.8 heads on screen, so redefine the character as 6.8 heads"
```

Instead review asks:

```text
"does this image remain geometrically explainable as the same approved canonical scaffold under this pose/camera?"
```

If yes, the identity is intact. If no, reject the derivative as proportion drift.

---

# 8. Identity priority

For Aru / Damu / Nua, body proportion is part of P0 identity.

The same character may change:

- pose,
- expression,
- gaze,
- foreshortening,
- camera distance,
- cloth wrinkle,
- small hair flyaways.

The same character may **not** change:

- canonical head/body relationship,
- canonical head-count if recorded,
- shoulder/pelvis width relationship,
- upper-arm/forearm relationship,
- thigh/shin relationship,
- hand and foot scale relationship,
- body-mass distribution,
- underlying skeletal silhouette.

If a candidate looks like the same face placed on a different body, it is a P0 identity failure.

A 7.2-head canonical character becoming an underlying 6.8-head body is explicitly a P0 failure even if the face is otherwise identical.

---

# 9. Player embodiment priority

`PLAYER-HUNT-BODY-V1` is one body, not a collection of unrelated first-person limbs.

The following must all derive from the same approved Player structural/body master:

- right hand,
- left hand,
- wrists,
- forearms,
- visible upper arms,
- knees/legs when visible,
- right foot,
- left foot,
- ankles,
- recurring wrist/ankle garment edges.

The Player may use stylized proportions, but once its canonical hand/arm/leg/foot ratios are approved, those ratios are exact identity locks.

A Player hand that becomes larger only because a scene needs readability is not acceptable unless the difference is fully explained by camera/FOV projection and the underlying canonical hand/arm relationship remains unchanged.

---

# 10. Stylization boundary

Allowed before canonical approval:

- intentionally compact body,
- intentionally larger readable head,
- slightly emphasized hands/feet,
- non-photographic silhouette proportions,
- simplified surface anatomy.

Allowed after approval:

- pose change,
- perspective/foreshortening,
- camera-distance change,
- expression and surface-level variation that does not change the canonical scaffold.

Reject after approval:

- canonical head-count drift,
- canonical normalized-ratio drift,
- chibi proportions,
- bobble-head caricature,
- rubber-hose limbs,
- impossible joint placement,
- superhero/fashion-illustration anatomy imposed only to look impressive,
- scene-by-scene proportion redesign,
- limb stretching/compression to fit portrait layout,
- a different head/body ratio between front and side turnaround views.

The boundary is not `realistic head count`; the boundary is **functional anatomy + exact canonical identity + STYLE-GIR-V1 coherence**.

---

# 11. Review decision rule

When reviewing a body candidate, ask in this order:

1. Does it read as the same approved person/body?
2. Does it inherit the exact canonical proportion fingerprint?
3. Are its joints, reach, balance and contacts functional?
4. Does camera/FOV/pose explain any apparent projected-ratio difference?
5. Does it remain inside STYLE-GIR-V1?

Do **not** ask whether the figure is sufficiently close to a textbook 7-head or 8-head adult.

Do **not** accept a new underlying ratio simply because the derivative looks plausible in isolation.

---

# 12. Approval effect

This policy does not approve any body, character, STYLE-GIR reference, or scene raster.

Current Gate remains unchanged:

```text
STYLE-GIR-V1 = reference-pending
Approved raster assets = 0
Human Gate = FAIL
Stage 08 = BLOCKED
```

The next actual visual work must use this policy when structural scaffolds and canonical body/identity masters are produced.
