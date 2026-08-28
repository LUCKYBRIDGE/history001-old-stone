# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Visual Anatomy Reference Lock**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

새 세션 bootstrap:

- `handoff/NEXT_SESSION_START_HERE.md`
- `handoff/SESSION_PROMPT_TEMPLATE.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Approved / Responsive Raster + Visual Continuity + Anatomy/Contact Gates Integrated / Visual Identity-Layering-Derivation Policy Locked / Visual Anchor Review Board Integrated / STYLE-GIR-V1 Controlled Packet Production-Ready / Approved Raster Assets 0 / Stage 08 BLOCKED**

최신 exact repository HEAD와 CI는 GitHub가 최종 진실 공급원이다.

---

# 1. 새 세션 시작 시 반드시 읽을 것

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. `handoff/NEXT_SESSION_START_HERE.md`
7. `handoff/STAGE07_5_VISUAL_CONTINUITY_INDEX.md`
8. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
9. `handoff/STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md`
10. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
11. `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
12. `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
13. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
14. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
15. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
16. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
17. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`

STYLE-GIR-V1 실제 후보 제작 시 추가로:

- `handoff/STAGE07_5_STYLE_GIR_V1_REFERENCE_PACKET.md`

Historical reference audit가 필요할 때:

- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`
- `handoff/STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`

handoff 문서는 Technical SSOT가 아니다.

---

# 2. Already approved / do not reopen by default

- Scene Composition Bible v2.1 = Project-owner approved.
- Scene Composition Design = PASS.
- Project-owner Scene Confirmation = PASS.
- SC03→04 curriculum/world timing, SC05 departure geometry, SC08~10 handaxe continuity, SC11 same-moment sync, HUD avoidance 등은 이미 lock됨.
- final Player visual은 `raster-first Hybrid Embodied Composite`로 간다.
- CSS/SVG/DOM 사람·손·도구는 final art가 아니다.
- L/TP/PP는 필요 시 별도 composition derivative를 가질 수 있지만, 같은 master crop이 기본값이다.

새 세션이 다시 Scene Review 단계로 돌아가면 안 된다.

---

# 3. Current production truth

Final Player-facing visual:

# **raster-first Hybrid Embodied Composite + Anchor-conditioned Continuity + Anatomy-locked Master Derivation**

Style target:

# **Grounded Illustrative Realism**

정확한 visual continuity priority:

```text
P0 hero + Player identity           = HARD LOCK
P1 contact + recurring hero object = HARD LOCK
P2 world structure + world light   = STRONG LOCK
P3 flyaway/fold/pebble/grass/smoke = harmless variation allowed
```

생성/파생 우선순위:

```text
same moment + same camera direction
→ crop / zoom / pan from same master

coverage/resolution insufficient
→ controlled outpaint / upscale from same master

camera direction materially changes
→ Angle Master from same world/topology/landmark/light references

actual action/world/body state changes
→ state derivative
```

핵심:

# **Do not regenerate what can be derived from an approved master.**

유지:

- believable anatomy / contact / depth
- restrained illustrative surface treatment
- same detail density across human/hand/tool/world
- hero characters remain the same approved people
- every visible Player hand/arm/foot/ankle remains one approved Player body family
- reusable actor/body/item master is transparent or extraction-safe

금지:

- hyper-photoreal pore-field / beauty-photo skin
- photographic individual-hair field as the dominant hair treatment
- bokeh/lens flare/chromatic aberration/sensor-film-noise art language
- shallow photographic DOF that destroys reusable silhouette
- cartoon/chibi anatomy
- fantasy barbarian/caveman caricature
- AAA poster grading
- 사람만 사진처럼 보이고 배경만 회화적인 style mismatch
- viewport 때문에 hand/arm/foot를 non-uniform stretch/compress

---

# 4. Visual Anchor Review Board — integrated

Dev-only:

```text
http://localhost:5173/?anchors=1
```

기타 dev surface:

```text
?previsual=1
?raster=1
```

`?anchors=1`은 현재 Gate의 주 검토 화면이다.

보여주는 것:

- STYLE-GIR-V1
- priority visual anchors
- anatomy/contact contracts
- first required master/reference slots
- controlled candidate mode / instruction / review focus / reject code
- planned candidate path와 approved reference path의 구분
- approved master/reference path count
- downstream raster dependencies

---

# 5. First Anchor Review Bundles

Machine-readable:

- `src/experience/production/stage075AnchorReviewBundle.ts`
- `src/experience/production/stage075VisualProductionPolicy.ts`

현재 첫 네 bundle:

```text
0. STYLE-GIR-V1
1. DAY1-HANDAXE-V1
2. PLAYER-HUNT-BODY-V1
3. ARU-IDENTITY-V1
```

현재 모든 required slot의 approved path count = 0.

Planned path convention:

```text
public/assets/stage075/anchors/<ANCHOR-ID>/<slot>.webp
```

실제 파일이 승인되기 전 path를 승인 상태처럼 등록하지 않는다.

### STYLE-GIR-V1 packet preparation

운영 packet:

- `handoff/STAGE07_5_STYLE_GIR_V1_REFERENCE_PACKET.md`

현재 정확한 상태:

```text
Packet definition = PRODUCTION READY
Identity/layering/derivation policy = SPEC LOCKED
Required slots = 5
Approved slots = 0/5
STYLE-GIR-V1 = reference-pending
```

5개 slot:

```text
human-mid
first-person-hand
world
material
responsive-pair
```

통제 원칙:

- 앞의 네 style sample은 anonymous/non-diagnostic exploration으로 Aru/Damu/Nua, DAY1-HANDAXE-V1, WORLD-CAMP-DAWN-A를 조기 lock하지 않는다.
- STYLE-GIR proof는 actor/world integration을 보기 위해 contextual background를 포함할 수 있다. 이것은 reusable character cutout policy와 별개다.
- reusable hero/Player/item masters later default to transparent alpha or extraction-safe source + transparent derivative.
- `responsive-pair`는 같은 anonymous source moment에서 파생해 L/portrait equivalence를 확인한다. 같은 master crop이 충분하면 crop을 우선한다.
- 각 slot은 Review Board에서 controlled instruction, review focus, reject code를 직접 확인한다.
- STYLE-GIR-V1은 5/5 required approved path가 모두 등록되고 `stage075StyleAnchor.ts`의 approved reference set과 정확히 일치해야만 `anchor-approved`가 유효하다.
- 한 장 또는 일부 reference만 등록해서 style Gate를 우회할 수 없다.

---

# 6. Player body / anatomy master

Required:

```text
PLAYER-HUNT-BODY-V1
PLAYER-HUNT-BODY-PROP-V1
```

Master packet 최소 방향:

- right/left palm and dorsum
- right/left forearm neutral
- forearm reaching
- right hand gripping DAY1-HANDAXE-V1
- left ground brace
- left rock brace
- crouch body edge
- walking-carry
- receive-tool
- visible foot/ankle neutral/action references if final scenes expose feet

모든 Player hand/arm/foot/ankle는 하나의 approved body family에서 파생한다.

비율은 approved master에서 측정해 production ratio로 잠근다.
고고학적 집단 평균 사실처럼 임의 숫자를 발명하지 않는다.

Portrait 때문에 손/팔/발을 임의 확대·축소하지 않는다.

---

# 7. Character anatomy masters

```text
ARU-IDENTITY-V1  + ARU-PROP-V1
DAMU-IDENTITY-V1 + DAMU-PROP-V1
NUA-IDENTITY-V1  + NUA-PROP-V1
```

Hero packet은 얼굴 한 장이 아니다.

최소:

- front/back
- 3/4 left/right
- strict side left/right
- seated/crouched/walking
- relevant reach/contact pose
- hand reference
- head silhouette
- skeleton landmark overlay
- H=1.00 normalized proportion record

새 pose는 approved identity/skeleton에서 파생한다. 몸과 얼굴을 다시 설계하지 않는다.

허용:

- expression
- gaze
- minor hair flyaway
- cloth wrinkle
- dirt/wear with continuity
- perspective foreshortening

불허:

- 다른 사람처럼 보이는 face/hair/body/garment reset

P0 identity failure = D3 reject.

---

# 8. Contact geometry masters

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

Offer → Shared Contact → Release는 한 continuous transfer family다.

SC07:

- Damu lowers first
- Player remains standing in SC06
- Player then crouches
- left hand braces ground
- right hand keeps same handaxe

SC10:

- left hand braces same approved rock edge
- right hand keeps same handaxe
- anatomy/world shape를 contact에 맞춰 변형하지 않는다.

Separate alpha layer가 contact topology를 계속 깨면 contact cluster는 unified raster로 묶는다.

---

# 9. Reject codes

Style packet 주요 reject:

```text
SID-PHOTO
SID-3D
SID-POSTER
SID-FANTASY
SID-CARTOON
SID-TEXTBOOK
SID-FOG
SID-DETAIL
SID-LIGHT
SID-COLOR
SID-COMPOSITE
SID-EDGE
SID-LENS
```

Identity:

```text
CID-FACE
CID-HAIR
CID-BODY
CID-GARMENT
CID-HAND
CID-FOOT
CID-MOTION
CID-AGE
CID-STYLE
CID-CROP
```

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

Hero/Player identity failure is P0/D3. Hero/contact unresolved ANAT/GEO drift is P1/D3. Harmless P3 microvariation is D0/D1 and does not justify regeneration by itself.

---

# 10. Runtime approval dependency

Scene raster 자체가 `approved`여도 바로 runtime에 노출되지 않는다.

```text
STYLE-GIR-V1 approved
+
all required visual anchors approved
+
all required anatomy/proportion contracts approved
+
required contact geometry approved
+
approved master/reference paths stored
+
scene raster approved
+
required responsive sources registered
↓
runtime render allowed
```

Upstream master를 우회할 수 없다.

Style Gate 자체도 다음을 모두 만족해야 한다.

```text
STYLE-GIR-V1 status = anchor-approved
+
5/5 required bundle slots have approvedPath
+
style approvedReferencePaths exactly match those five approved paths
```

---

# 11. Immediate lock order

```text
0. STYLE-GIR-V1 reference packet
1. DAY1-HANDAXE-V1 morphology + scale packet
2. PLAYER-HUNT-BODY-V1 master packet
3. PLAYER-HUNT-BODY-PROP-V1 measured contract
4. ARU-IDENTITY-V1 turnaround packet
5. ARU-PROP-V1 measured contract
6. SC02-HANDOFF-GEO-V1 contact skeleton/geometry
7. SC02 unified-contact state master + crop-first L/TP/PP proof
8. DAMU-IDENTITY-V1 + DAMU-PROP-V1
9. NUA-IDENTITY-V1 + NUA-PROP-V1
10. world/contact families
```

SC02 final raster는 0~6이 승인되기 전 제작하지 않는다.

현재 0번의 **packet definition/production controls와 identity/layering/derivation 기준만 준비 완료**되었다. STYLE-GIR-V1 reference lock 자체는 아직 0/5이므로 1번으로 넘어가지 않는다.

---

# 12. What the next visual-production session should actually do

1. latest `main` / CI 확인
2. 필독 문서 읽기
3. `STAGE07_5_VISUAL_IDENTITY_LAYERING_AND_DERIVATION_CONTRACT.md` 기준 확인
4. `stage075AnchorReviewBundle.ts`, `STAGE07_5_STYLE_GIR_V1_REFERENCE_PACKET.md`, `?anchors=1` 확인
5. 현재 Gate가 유지되는지 확인
6. STYLE-GIR-V1 controlled references 제작/검토
7. candidate는 packet 전체의 style consistency + P0/P1/P2/P3 policy로 비교
8. 실패 후보는 reject하고 repository에 억지로 넣지 않음
9. Project-owner가 실제 candidate를 승인한 뒤에만 approved path/status 등록
10. branch → PR → CI → merge
11. exact main SHA / main CI 확인

이미지 생성이 필요할 경우 full game scene이 아니라 anchor bundle candidate만 생성한다.

---

# 13. Do not repeat

- Scene Bible을 다시 처음부터 설계하지 말 것
- 장면마다 독립적으로 Aru/Damu/Nua/world를 text-to-image하지 말 것
- Player hand/arm/foot를 장면마다 새 body처럼 생성하지 말 것
- `same X as before` 프롬프트만으로 consistency를 맡기지 말 것
- same-angle close-up/portrait를 불필요하게 재생성하지 말 것
- UI/대사/버튼을 scene raster에 bake-in하지 말 것
- 미관이 좋다는 이유로 identity/anatomy/contact/history drift를 통과시키지 말 것
- P3 미세 차이를 없애려고 끝없이 재생성하지 말 것
- portrait 대응을 anatomy 변형으로 해결하지 말 것
- 승인되지 않은 raster를 runtime에 연결하지 말 것
- CI PASS를 Human PASS로 간주하지 말 것
- Stage 08로 넘어가지 말 것

---

# 14. Current asset truth

```text
Visual Identity/Layering/Derivation Policy = SPEC LOCKED
STYLE-GIR-V1 Packet Definition = PRODUCTION READY
STYLE-GIR-V1 Approved Slots = 0/5
Approved Raster Assets = 0
Approved Style Anchors = 0
Approved Anatomy Contracts = 0
Approved Contact Geometry Contracts = 0
```

이전 자유 생성 후보는 production contract 이탈로 repository에 넣지 않았다.

---

# 15. Current Gate

# **Visual Anatomy Reference Lock**

다음 실제 visual-production 산출물:

# **STYLE-GIR-V1 controlled reference packet + packet-level review**

Human Gate = FAIL.
Stage 08 = BLOCKED.

# **GitHub main이 과거 채팅 기억보다 우선한다.**
