# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Previsual Remediation Readiness**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Project-owner Approved / Previsual Readiness Ready / Rough Previsual NOT YET / Implementation Frozen**

Stage 08은 BLOCKED다.

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
14. `handoff/STAGE07_5_PREVISUAL_REMEDIATION_READINESS.md`

감사/근거 추적 시:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`
- `handoff/STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`
- `handoff/STAGE07_5_PROJECT_OWNER_SCENE_REVIEW_SUMMARY.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

handoff 문서는 Technical SSOT가 아니다.

---

# 2. Human QA Truth

실제 Player replay에서:

- 관계/이름/인과는 초기보다 개선됨
- 그러나 행동/상황이 몸과 장면만으로 즉시 읽히지 않음
- 손/팔/주먹도끼 HUD 느낌
- actor pose/거리/풍경 continuity 부족
- 설명문/버튼 의존도가 큼

따라서 Human Gate는 계속 FAIL이다.

현재 runtime/CSS는 causal/social prototype이며 final composition이 아니다.

---

# 3. Project-owner Approval

Project-owner가 Scene Review 핵심 7개를 승인했다.

LOCK:

1. SC03 terminology while world resumes
2. SC05 diagonal departure → forward settle
3. SC08~10 same held handaxe off-frame continuity
4. SC11 same SC05 Stage A moment from Aru-side
5. fixed bottom action HUD 금지
6. SC10 default explicit animal spoor 제외
7. Nua 4:3 crop tune

판정:

# **Project-owner Scene Composition Confirmation = PASS**

승인 통합본:

- `STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`

---

# 4. v2.1 Core Locks

## Screen direction

```text
camp/fire/Aru = behind-left
route = right/right-center
Damu/Nua = ahead
```

## Handaxe

```text
Aru hand → handaxe → Player right hand
```

same DAY1-HANDAXE-v1 유지.

SC08~10:

```text
visible
→ right arm lowers
→ tool exits FOV continuously
→ held state remains true
→ SC10 same tool re-enters continuously
```

## SC05

```text
C4D diagonal camp-visible
→ walking settle
→ C4F forward
→ camp exits through scale/parallax/occlusion/audio falloff
```

## SC11

SC05 Stage A와 exact same world moment.

- same group spacing
- same walking phase family
- same handaxe
- same camp/fire/shelter
- same morning light
- same dialogue order

## UI

- persistent bottom button bar 없음
- actionable 순간에만 표시
- action 시작 즉시 withdraw

---

# 5. Historical Framing

# **Korean Paleolithic Educational Composite / Element-level Provenance**

- [H] Historical anchor
- [C] Comparative reference
- [R] Reconstruction choice
- [D] Deferred / non-diagnostic

Chronology Coherence Gate 유지.

Still deferred:

- exact season/plants
- exact shelter construction/material/knots
- exact garment pattern/stitching
- exact skin/hair/species morphology
- final cast face
- Hunt Player exact age/sex
- final audio

근거 없이 채우지 않는다.

---

# 6. Previsual Remediation Package

현재 주 실행 문서:

- `STAGE07_5_PREVISUAL_REMEDIATION_READINESS.md`

Minimum critical PV set:

```text
PV-01 SC01 living camp
PV-02 SC02 handoff
PV-03 SC03→04 naming + world resume
PV-04 SC05 departure spatial proof
PV-05 SC06→07 stop/crouch
PV-06 SC08→09 Nua attention/reveal
PV-07 SC10 rock shelter inspection
PV-08 SC11 same-moment Aru POV
```

각 PV는:

- shot metadata
- body/tool/actor/world continuity
- 16:9/16:10/4:3 proof
- 필요한 motion strip
- historical confidence
- acceptance condition

을 가져야 한다.

---

# 7. Previsual vs Production

Rough previsual은 Stage 08 production batch가 아니다.

현재 가능:

- wire/rough composition
- camera/pose/contact proof
- crop proof
- motion strip
- visual continuity review

현재 금지:

- production image batch
- final art polishing
- runtime production integration
- Stage 08 expansion
- final cast/garment/environment specific lock

# **실제 production image 생성은 별도 명시적 작업으로 취급한다.**

---

# 8. Current Gate

# **Rough Previsual Artifact Build / Project-owner Review**

현재:

```text
Scene Composition Design = PASS
Project-owner Confirmation = PASS
Previsual Readiness = READY
Rough Previsual Artifact Set = NOT YET
Previsual Approval = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 순서:

```text
rough previsual artifacts
→ Project-owner Previsual Review
→ P1 correction if any
→ Previsual Approval
→ minimum coherent Stage07.5 Human-Gate visual proof implementation
→ Human Visual QA
→ Human Gate PASS 여부
→ Stage 08 Visual Production Readiness
```

자동 테스트나 문서 승인만으로 Human PASS를 선언하지 않는다.
