# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Project-owner Scene Composition Review**

장기 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

현재 정확한 상태:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Historical Visual Reference Review Complete v1 / Scene Bible v2 Consolidated / Scene Review Corrections Prepared / Project-owner Confirmation Pending / Implementation Frozen**

Stage 08은 계속 BLOCKED다.

최신 exact main/PR/Actions는 GitHub가 최종 진실 공급원이다.

---

# 1. 기존 Human QA P1

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

현재 확인된 P0는 없다.
Human Gate는 계속 FAIL이다.

---

# 2. 이번 Scene Review에서 확인한 추가 항목

## P1

### R2UX-011 / SSOT drift

`00_CANONICAL_BASELINE`과 `AGENTS.md` 일부 current-state 문구가 실제 main보다 뒤처져 있었다.

조치:

- Canonical Baseline v5로 현재 Stage 07.5 상태 재정렬
- AGENTS current Gate 재정렬

### R2UX-012 / Spatial geometry

SC05에서 `route-forward`와 `rear-left camp`가 동시에 보이는 first-person 공간 관계가 불명확했다.

조치:

- departure Stage A = left-biased diagonal composition
- Stage B = camera forward settle
- camp는 scale + parallax + occlusion + audio falloff로 실제로 사라짐

### R2UX-013 / Curriculum timing

SC03 terminology 후 SC04 world action 재개 시점이 미정이었다.

조치:

- terminology가 떠 있는 동안 Damu movement가 다시 시작
- 별도 `개념 확인/다음` action 금지
- SC04 `일어나 따라간다`가 다음 실제 행동

### R2UX-014 / Held-item continuity

SC08~09에서 handaxe가 화면 밖으로 사라지는 물리 과정이 없었다.

조치:

- rise 중 오른팔이 자연스럽게 lower-right FOV 밖으로 내려감
- held state는 계속 true
- SC10 approach 중 같은 tool이 250~400ms에 걸쳐 자연스럽게 재진입

### R2UX-015 / Perspective legibility

SC11이 same-moment Aru-side인지 rewind/teleport인지 혼동될 수 있었다.

조치:

- SC11 = SC05 Stage A와 temporal sync match
- 동일 group spacing / walking phase / handaxe / fire / shelter
- Aru own voice `해 지기 전에 와.`
- 먼 Damu `알았어.`까지 같은 순서로 재현
- flashback/rewind/meta title 금지

### R2UX-016 / Screen treatment

공통 bottom action lane이 fixed HUD처럼 재현될 위험.

조치:

- action affordance는 입력 가능할 때만 등장
- Scene-specific safe placement
- 행동 시작 즉시 withdraw
- persistent footer 금지

## P2

### R2UX-017 / Threat timing

SC10에서 explicit animal trace를 기본으로 넣으면 natural shelter가 자동 공포 장소로 고정될 수 있음.

조치:

- Stage 07.5 기본 production에서는 explicit animal spoor 제외
- darkness/unknown depth/uneven floor로 uncertainty 유지
- 필요 시 Stage 08 Threat Build-up에서 검토

### R2UX-018 / Responsive crop

SC01/04 Nua가 4:3 우측 crop에 가까움.

조치:

- torso center x77~83 권장
- decorative limb만 x86까지 허용

---

# 3. Review 문서

현재 주 검토 문서:

- `handoff/STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`

Scene Bible 기준:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`

Historical review:

- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

Review report는 Bible v2의 P1/P2를 닫는 correction contract다.
Project-owner 확인 후 Bible v2.x로 통합한다.

---

# 4. Scene별 현재 판정

| Scene | Review status |
|---|---|
| SC00 | PASS with timing clarification |
| SC01 | PASS with crop tune |
| SC02 | PASS / critical contact scene |
| SC03 | P1 correction locked |
| SC04 | PASS with crop tune |
| SC05 | P1 spatial correction locked |
| SC06 | PASS |
| SC07 | PASS |
| SC08 | P1 held-item correction locked |
| SC09 | PASS after off-frame continuity rule |
| SC10 | P1 tool re-entry correction locked |
| SC11 | P1 temporal-sync correction locked |

설계 수정 방향은 정해졌지만 Project-owner Confirmation은 아직 아니다.

---

# 5. Historical Visual Model

공식 framing:

# **Korean Paleolithic Educational Composite / Element-level Provenance**

Markers:

- [H] Historical anchor
- [C] Comparative reference
- [R] Reconstruction choice
- [D] Deferred / non-diagnostic

Chronology Coherence Gate 유지.

현재 deferred:

- exact season / plant species
- exact temporary shelter construction/material/knots
- exact garment pattern/stitching
- exact skin/hair/species morphology
- final cast faces
- Hunt Player exact age/sex
- final audio production

---

# 6. Implementation Freeze

Project-owner confirmation 전 하지 않는다.

- runtime/CSS remediation
- production image generation
- asset production
- Stage 08 Hunt expansion
- final cast lock
- exact clothing/vegetation을 근거 없이 확정

현재 runtime은 causal/social prototype이며 final composition이 아니다.

---

# 7. 현재 다음 Gate

# **Project-owner Scene Composition Confirmation**

확인 대상:

1. SC03 terminology와 world movement를 동시에 진행하는 방향
2. SC05 diagonal departure → forward settle 공간 설계
3. SC08~10 handaxe off-frame continuity
4. SC11 same-moment temporal sync
5. action affordance fixed-HUD 금지
6. SC10 explicit animal trace 기본 제외
7. Nua 4:3 crop tune

확인 뒤:

```text
Project-owner Confirmation
→ Bible v2.x consolidation
→ Previsual Approval
→ Visual Production Readiness
→ minimum coherent production set
→ runtime + asset implementation
→ Human Visual QA
```

# **자동 PASS는 Human PASS가 아니며, Scene Review도 Human Gameplay PASS가 아니다.**
