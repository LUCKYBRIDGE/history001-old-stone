# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Visual Anchor Reference Lock**

장기 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

현재 정확한 상태:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Approved / Raster Media Adapter Integrated / Visual Continuity System Integrated / Approved Raster Assets 0 / Stage 08 BLOCKED**

최신 exact main/PR/Actions는 GitHub가 최종 진실 공급원이다.

---

# 1. Human QA에서 확인된 핵심 P1

- R2UX-001 Embodied spatial — 팔/손이 HUD처럼 읽힘
- R2UX-002 Relationship presence — 인물이 기능 silhouette처럼 읽힘
- R2UX-003 Narrative causality — 관계/공동행동 인과 약함
- R2UX-004 Curriculum presentation — 학습 카드처럼 보임
- R2UX-005 Visual composition — production 치환 가능한 구도 부족
- R2UX-006 Speaker ambiguity — 인물 기억 방해
- R2UX-007 Functional-role narration — 기능이 정체성 대체
- R2UX-008 Action-scene legibility — 몸/장면만으로 동작 즉시 파악 어려움
- R2UX-009 Previsual under-specification — 구현 전 camera/body/tool/world 미잠금
- R2UX-010 Chronology coherence risk — 서로 다른 시기/유적의 구체 복원 혼합 위험
- R2UX-011 SSOT drift — 상위 문서가 실제 main보다 과거 상태를 기술
- R2UX-012 Spatial geometry — SC05 departure 공간기하 불명확
- R2UX-013 Curriculum timing — SC03 terminology 뒤 world action 재개 시점 미잠금
- R2UX-014 Held-item continuity — SC08~10 handaxe off-frame continuity 미정
- R2UX-015 Perspective legibility — SC11 rewind/teleport 오해 가능
- R2UX-016 Screen treatment — fixed bottom action lane HUD화 위험
- R2UX-017 Hard story seam — copy overlay hard edge가 세로 분할처럼 보임
- R2UX-018 Final visual medium — CSS/SVG 사람·손·도구의 최종 몰입 품질 한계
- R2UX-019 Portrait composition — tablet/phone portrait가 단순 landscape crop으로 성립하지 않음
- R2UX-020 Raster candidate control — 생성 결과가 제작 브리프에서 벗어날 수 있음
- R2UX-021 Visual identity drift — 장면별 독립 생성 시 인물/배경/도구/스타일 일관성 붕괴 위험

현재 확인된 P0는 없다.

# **승인된 coherent raster proof가 아직 없으므로 Human Gate는 계속 FAIL이다.**

---

# 2. Project-owner latest direction

최종 raster 제작은 `좋은 장면 이미지 여러 장`을 만드는 방식이 아니다.

우선순위:

# **Consistency-first Anchor Production**

즉:

```text
style anchor
+ character identity anchors
+ Player body anchor
+ world geography anchors
+ recurring object/prop anchors
→ scene variants
```

순서로 제작한다.

---

# 3. Visual Continuity system

Primary art-production index:

- `handoff/STAGE07_5_VISUAL_CONTINUITY_INDEX.md`

Detailed contracts:

- `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
- `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
- `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`

Existing production contracts:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`
- `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
- `handoff/STAGE07_5_RASTER_ASSET_PRODUCTION_BRIEFS.md`

Machine-readable:

- `src/experience/production/stage075StyleAnchor.ts`
- `src/experience/production/stage075VisualContinuityRegistry.ts`
- `src/experience/production/stage075RasterManifest.ts`

---

# 4. Runtime approval gate

Raster scene asset은 자기 자신이 `approved`라고 해서 runtime에 표시되지 않는다.

필수:

```text
STYLE-GIR-V1 anchor-approved
+
required character/body/world/object/prop/light anchors anchor-approved
+
actual approved reference paths registered
+
scene raster approved
+
required responsive sources registered
↓
runtime render
```

`Stage075RasterMedia`가 이 Gate를 코드에서 강제한다.

---

# 5. Style Anchor

```text
STYLE-GIR-V1 = reference-pending
```

목표:

# **Grounded Illustrative Realism**

- 실제 해부/접촉/원근
- 약간 회화적/일러스트적인 surface treatment
- hyper-photoreal skin 금지
- movie/AAA poster grading 금지
- fantasy barbarian/caveman caricature 금지
- 사람/손/도구/배경 detail density 일치

Style reference packet이 승인되기 전 scene raster는 final approval 불가.

---

# 6. Character / Player Body Anchors

```text
ARU-IDENTITY-V1     reference-pending
DAMU-IDENTITY-V1    reference-pending
NUA-IDENTITY-V1     reference-pending
PLAYER-HUNT-BODY-V1 reference-pending
```

캐릭터 일관성은 얼굴만 의미하지 않는다.

- face proportion
- hair silhouette
- body proportion/mass
- garment silhouette
- hands
- movement identity
- responsive identity equivalence

를 포함한다.

---

# 7. World anchors

```text
WORLD-CAMP-DAWN-A       reference-pending
WORLD-DEPARTURE-PATH-A  reference-pending
WORLD-GROUND-OBS-A      reference-pending
WORLD-ROCK-SHELTER-A    reference-pending
LM-SPLIT-ROCK-01        reference-pending
PROP-TEMP-SHELTER-A     reference-pending
```

원칙:

# **same world, many cameras**

장면마다 `구석기 배경`을 새로 생성하지 않는다.
Camp→Route→Ground→Rock Shelter가 하나의 Day 1 geography로 연결된다.

---

# 8. Object anchor

```text
DAY1-HANDAXE-V1 = reference-pending
```

Lock packet:

- face-A / face-B
- side/thickness
- grip-base / working-end
- scale
- major flake-scar fingerprint
- Aru grip
- Player right-hand grip

SC02→SC11에서 같은 물체여야 한다.

---

# 9. Generation protocol

모든 후보는 Generation Job Card를 사용한다.

기록:

- target asset / scene / beat / L-TP-PP family
- parent asset / derivation mode
- 실제 제공한 approved anchor reference files
- camera/body/contact/object/light contract
- only allowed changes
- must-not-change
- historical confidence
- drift code / severity

Production continuity에서 독립 text-to-image를 반복하지 않는다.

---

# 10. Responsive composition

```text
L  = Landscape
TP = Tablet Portrait
PP = Phone Portrait
N  = Near-square fallback
```

Portrait는 단순 crop이 아니라 필요 시 dedicated recomposition을 사용한다.
하지만 같은 순간의:

- 인물
- 세계 지리
- 도구
- 광원
- 사건 상태

는 동일해야 한다.

---

# 11. Current raster asset state

Manifest:

```text
DAY1-HANDAXE-V1                 pending
HUNT-SC02-HANDOFF-KEYFRAME-V1 pending
HUNT-SC01-CAMP-WORLD-V1       pending
```

Approved Raster Asset count:

# **0**

이전 자유 생성 후보는 제작 계약 이탈로 모두 REJECT되었으며 repository에 넣지 않았다.

---

# 12. Immediate Anchor Lock Order

```text
0. STYLE-GIR-V1 reference packet
1. DAY1-HANDAXE-V1 master packet
2. PLAYER-HUNT-BODY-V1 hand/forearm packet
3. ARU-IDENTITY-V1 packet
4. DAMU-IDENTITY-V1 packet
5. NUA-IDENTITY-V1 packet
6. WORLD-CAMP-DAWN-A packet
7. fire/shelter supporting anchors
8. route/landmark/ground/rock-shelter anchors
```

장면 SC02 제작은 필요한 upstream anchors가 실제로 승인된 뒤 시작한다.

---

# 13. Current Gate

# **Visual Anchor Reference Lock**

현재:

```text
Scene Composition Design = PASS
Project-owner Scene Confirmation = PASS
Responsive Raster Contract = READY
Raster Media Adapter = INTEGRATED
Visual Continuity Registry = INTEGRATED
Style Anchor = REFERENCE PENDING
Character Anchors = REFERENCE PENDING
World Anchors = REFERENCE PENDING
Object Anchor = REFERENCE PENDING
Approved Raster Assets = 0
Player Raster Replacement = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 순서:

```text
STYLE-GIR-V1 test/reference packet
→ style review/lock
→ DAY1-HANDAXE master packet
→ Player hand/body packet
→ Aru identity packet
→ anchor paths registry registration
→ SC02 unified contact L/TP/PP
→ Damu/Nua/world anchor expansion
→ minimum coherent Stage07.5 raster proof
→ cross-device Human Visual QA
→ Human Gate PASS 여부
→ Stage 08
```

# **장면 수보다 anchor 일관성을 우선한다.**
