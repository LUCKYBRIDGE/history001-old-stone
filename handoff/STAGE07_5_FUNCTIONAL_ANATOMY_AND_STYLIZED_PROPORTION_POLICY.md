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

# **Once a canonical body proportion is approved, that proportion becomes identity.**

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

---

# 4. No universal head-count target

Do **not** assign a required `heads tall` value before the identity/body master is selected.

The workflow is:

```text
structural scaffold
→ canonical body/identity master
→ project-owner approval
→ measure the approved design
→ record normalized production ratios
→ derive all later views/poses from those ratios
```

If a useful descriptive head-count is recorded after approval, it is only a measurement of that approved fictional design. It is not a target that the design must conform to and not a historical claim.

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
- canonical body proportions,
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

After approval, record the chosen body's own normalized ratios.

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

For Player first-person limbs, use local reference units such as palm length and foot length where more practical.

These numbers are **derived from the approved master**, never invented first and imposed on it.

---

# 7. Identity priority

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
- shoulder/pelvis width family,
- upper-arm/forearm relationship,
- thigh/shin relationship,
- hand and foot scale family,
- body-mass distribution,
- underlying skeletal silhouette.

If a candidate looks like the same face placed on a different body, it is a P0 identity failure.

---

# 8. Player embodiment priority

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

A Player hand that becomes larger only because a scene needs readability is not acceptable unless the difference is explained by camera/FOV and remains geometrically coherent.

---

# 9. Stylization boundary

Allowed:

- intentionally compact body,
- intentionally larger readable head,
- slightly emphasized hands/feet,
- non-photographic silhouette proportions,
- simplified surface anatomy.

Reject:

- chibi proportions,
- bobble-head caricature,
- rubber-hose limbs,
- impossible joint placement,
- superhero/fashion-illustration anatomy imposed only to look impressive,
- scene-by-scene proportion redesign,
- limb stretching/compression to fit portrait layout,
- a different head/body ratio between front and side turnaround views.

The boundary is not `realistic head count`; the boundary is **functional anatomy + stable identity + STYLE-GIR-V1 coherence**.

---

# 10. Review decision rule

When reviewing a body candidate, ask in this order:

1. Does it read as the same approved person/body?
2. Are its joints, reach, balance and contacts functional?
3. Does it preserve the approved canonical proportion fingerprint?
4. Does camera/FOV explain apparent foreshortening?
5. Does it remain inside STYLE-GIR-V1?

Do **not** ask whether the figure is sufficiently close to a textbook 7-head or 8-head adult.

---

# 11. Approval effect

This policy does not approve any body, character, STYLE-GIR reference, or scene raster.

Current Gate remains unchanged:

```text
STYLE-GIR-V1 = reference-pending
Approved raster assets = 0
Human Gate = FAIL
Stage 08 = BLOCKED
```

The next actual visual work must use this policy when structural scaffolds and canonical body/identity masters are produced.
