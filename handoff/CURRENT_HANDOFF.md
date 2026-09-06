# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Visual Anatomy Reference Lock**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

최신 exact repository HEAD와 CI는 GitHub가 최종 진실 공급원이다.

---

# 1. Current exact state

```text
Scene Composition v2.1            APPROVED
Serial anchor queue               ENFORCED
STYLE-GIR-V1                      reference-pending
STYLE approved slots              1 / 5
human-mid                         APPROVED / REGISTERED
first-person-hand                 ACTIVE / NEXT
world                             BLOCKED
material                          BLOCKED
responsive-pair                   BLOCKED
Approved scene raster assets      0
Human Gate                        FAIL
Stage 08                          BLOCKED
```

승인된 style reference:

```text
public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp
```

현재 단일 global production target:

# **`STYLE-GIR-V1 / first-person-hand`**

---

# 2. Do not reopen

기본적으로 다시 논의하지 않는다.

- Scene Composition Bible v2.1 = Project-owner approved
- Scene Composition Design = PASS
- Project-owner Scene Confirmation = PASS
- final Player visual = `raster-first Hybrid Embodied Composite`
- CSS/SVG/DOM 사람·손·도구 = final art 아님
- crop-first responsive framing
- exact canonical ratio inheritance
- serial master derivation
- contact geometry gate

새 세션이 Scene Review 또는 `human-mid` 제작으로 되돌아가면 안 된다.

---

# 3. Approved human rendering tier

`GIR-HUMAN-MID-001 r03`가 승인됐다.

```text
technicalCleanliness = PASS
structuralAnatomy = PASS
styleBoundary = PASS
extractionViability = PASS
historicalRestraint = PASS
driftCodes = []
```

이 reference가 잠그는 것:

```text
functional anatomy / believable weight
+
painterly broad skin planes
+
hair mass / silhouette
+
broad garment/material folds
+
clean extraction-oriented silhouette
-
photographic pore field
-
individual hair simulation
-
photographic shallow DOF / bokeh / lens language
-
AAA poster / fantasy barbarian / cartoon-chibi
```

이 reference가 잠그지 않는 것:

- Aru/Damu/Nua identity
- Player identity
- handaxe morphology
- canonical Day 1 world geography
- 특정 역사 인물/민족/복식 사실

r01/r02는 rejected history다.

```text
r01 → historical restraint fail
r02 → SID-PHOTO / SID-LENS / SID-EDGE
r03 → approved
```

---

# 4. Current active job

Machine-readable:

- `src/experience/production/stage075FirstPersonHandProductionJob.ts`

Job Card:

- `handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md`

Required style reference:

- `public/assets/stage075/anchors/STYLE-GIR-V1/human-mid.webp`

목표:

```text
anonymous first-person hand
+ wrist
+ enough forearm to judge continuity
+ rough non-diagnostic stone contact
```

검수:

```text
technicalCleanliness
handAnatomy
styleBoundary
contactReadability
extractionViability
historicalRestraint
```

주요 reject:

```text
ANAT-FINGER
ANAT-WRIST
ANAT-HAND-SCALE
GEO-CONTACT-POINT
SID-PHOTO
SID-LENS
SID-EDGE
SID-DETAIL
SID-COMPOSITE
```

절대 하지 않을 것:

- 또 다른 `human-mid` 인물 portrait를 생성
- first-person-hand에서 Player identity를 확정
- rough stone을 `DAY1-HANDAXE-V1`로 확정
- 손가락 오류를 crop으로 숨김
- photo-macro hand rendering

---

# 5. Identity / anatomy law

Continuity priority:

```text
P0 hero + Player identity           = HARD LOCK
P1 contact + recurring hero object = HARD LOCK
P2 world structure + world light   = STRONG LOCK
P3 flyaway/fold/pebble/grass/smoke = harmless variation allowed
```

신체비율 법칙:

# **approval 전 비율 선택은 자유, approval 후 exact canonical ratio inheritance.**

예:

```text
canonical body = 7.2 heads
→ all derivatives use same underlying 7.2 body
```

원근/foreshortening/pose/FOV/crop으로 화면상 비율이 달라 보이는 것은 허용한다.
실제 underlying body를 6.8/7.5 등으로 바꾸는 것은 금지한다.

---

# 6. Derivation law

# **Do not regenerate what can be derived from an approved master.**

```text
same moment + same camera direction
→ crop / zoom / pan

coverage insufficient
→ controlled outpaint / upscale

materially different camera direction
→ Angle Master from same World Master/topology/light

actual state changes
→ State Master derivative

contact-heavy interlocked state
→ unified contact derivative if necessary
```

---

# 7. Later anchor lineage — do not start yet

STYLE-GIR-V1 5/5 완료 후:

```text
DAY1-HANDAXE-V1
face-a canonical morphology seed
→ face-b
→ side
→ metric/normalized scale
```

그다음 Player:

```text
structural-scaffold
→ canonical-body
→ hand/arm/foot/ankle/action derivatives
→ measured exact proportion contract
```

Aru:

```text
structural-scaffold
→ canonical-identity
→ turnaround/action derivatives
→ measured exact proportion contract
```

독립 생성 여러 장을 비슷하게 맞추는 방식은 금지한다.

---

# 8. Current reading order

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. `handoff/NEXT_SESSION_START_HERE.md`
7. `handoff/STAGE07_5_VISUAL_CONTINUITY_INDEX.md`
8. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
9. `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
10. `handoff/STAGE07_5_FUNCTIONAL_ANATOMY_AND_STYLIZED_PROPORTION_POLICY.md`
11. `handoff/STAGE07_5_SERIAL_ANCHOR_PRODUCTION_QUEUE.md`
12. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
13. `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
14. `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
15. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
16. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
17. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
18. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
19. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
20. `handoff/STAGE07_5_STYLE_GIR_V1_FIRST_PERSON_HAND_JOB_CARD.md`

---

# 9. Dev review surfaces

```text
?anchors=1
?previsual=1
?raster=1
```

`?anchors=1`에서 현재 보여야 할 값:

```text
STYLE-GIR-V1 1/5
human-mid = approved reference
first-person-hand = NEXT production target
```

---

# 10. Next action

다음 실제 작업은 하나뿐이다.

# **`STYLE-GIR-V1 / first-person-hand` 후보 1개 제작 → 검수 → 기준 미달이면 reject/revise → 통과한 경우에만 canonical 등록.**

다른 STYLE slot이나 handaxe/Player/Aru를 동시에 제작하지 않는다.
