# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Project-owner Scene Composition Review**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Bible v2 Consolidated / Project-owner Review Corrections Prepared / Confirmation Pending / Implementation Frozen**

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
13. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`
14. `handoff/STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`

감사 추적이 필요할 때:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE.md`
- `handoff/STAGE07_5_SCENE_COMPOSITION_LOCK_DECISIONS.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

handoff 문서는 Technical SSOT가 아니다.

---

# 2. 지금까지의 Human 판정

실제 Player replay에서:

- 관계/이름/인과는 초기보다 개선
- 그러나 동작/상황이 몸과 장면만으로 즉시 읽히지 않음
- 손/팔/주먹도끼 HUD 느낌
- actor pose/거리/풍경 continuity 부족
- 설명문/버튼 의존도가 큼

따라서 Human Gate는 계속 FAIL이다.

현재 runtime/CSS는 prototype으로만 유지한다.

---

# 3. 현재 previsual 기준

주 문서:

- `STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`

Review corrections:

- `STAGE07_5_PROJECT_OWNER_SCENE_REVIEW.md`

공식 visual framing:

# **Korean Paleolithic Educational Composite / Element-level Provenance**

- [H] Historical anchor
- [C] Comparative reference
- [R] Reconstruction choice
- [D] Deferred / non-diagnostic

Chronology Coherence Gate 유지.

---

# 4. 이번 Scene Review의 핵심 발견

## SSOT drift

상위 canonical/AGENTS가 실제 main보다 과거 상태를 일부 기술하고 있었다.

조치:

- Canonical Baseline v5로 갱신
- AGENTS current Stage/Gate 갱신

## SC03→04

문제:

- terminology beat 뒤에 world가 정지할 위험

결정:

```text
handoff
→ handaxe inspect
→ terminology annotation
→ annotation이 떠 있는 동안 Damu movement begins
→ Damu already moving
→ 가자.
→ Player: 일어나 따라간다
```

별도 `개념 확인/다음` 버튼 없음.

## SC05

문제:

- forward camera에서 rear-left camp를 동시에 보이는 공간기하 불명확

결정:

```text
Stage A: left-biased diagonal departure view
→ Aru/fire/shelter peripheral left
→ Damu/Nua forward-right
→ farewell dialogue
→ Stage B: camera eases forward/right
→ camp exits left via parallax/occlusion
```

hard cut/background replacement 금지.

## SC08~10 handaxe

결정:

```text
SC07 visible lower-right
→ rise 중 right arm lowers naturally
→ tool exits FOV continuously
→ held state remains true
→ SC09 pan 동안 off-frame
→ SC10 approach/body adjustment
→ same handaxe re-enters lower-right over 250~400ms
```

inventory pop 금지.

## SC11

결정:

SC11은 SC05 Stage A와 같은 world moment의 반대편.

동일하게 유지:

- group spacing
- walking phase
- handaxe orientation
- fire/shelter
- morning light

Aru own voice:

> `해 지기 전에 와.`

그 뒤 먼 Damu:

> `알았어.`

rewind/flashback/meta-title 금지.

## Action UI

- fixed bottom HUD 금지
- 입력 가능할 때만 표시
- scene-specific safe placement
- action 시작 즉시 withdraw
- persistent footer 금지

---

# 5. Scene 판정

```text
SC00 PASS + timing clarification
SC01 PASS + 4:3 crop tune
SC02 PASS / critical contact
SC03 P1 correction locked
SC04 PASS + crop tune
SC05 P1 correction locked
SC06 PASS
SC07 PASS
SC08 P1 correction locked
SC09 PASS after continuity rule
SC10 P1 correction locked
SC11 P1 correction locked
```

현재 review 방향은 설계상 정리됐지만 Project-owner confirmation 전에는 Previsual Approval로 올리지 않는다.

---

# 6. SC10 추가 결정

Stage 07.5 기본 production에서는 explicit animal spoor를 넣지 않는다.

현재 uncertainty는:

- dark interior
- unknown depth
- limited sightline
- uneven natural floor

로 표현한다.

동물 흔적/위협은 필요할 경우 Stage 08 Threat Build-up에서 별도 인과와 함께 검토한다.

---

# 7. 아직 Deferred

- exact season
- exact vegetation species
- exact temporary shelter construction/material/knots
- exact clothing pattern/stitching
- exact skin/hair/species morphology
- final cast face
- Hunt Player exact age/sex
- final audio production

근거 없이 채우지 않는다.

---

# 8. 지금 하지 말 것

Project-owner confirmation 전:

- runtime/CSS remediation
- production image generation
- production asset 제작
- Stage 08 전체 Hunt 구현
- final cast lock
- generic NPC/relationship/dialogue engine

---

# 9. 현재 다음 행동

# **Project-owner Scene Composition Confirmation**

확인할 핵심 7개:

1. SC03 terminology와 world movement 동시 진행
2. SC05 diagonal departure composition
3. SC08~10 off-frame handaxe continuity
4. SC11 same-moment temporal sync
5. action affordance fixed-HUD 금지
6. SC10 explicit animal trace 기본 제외
7. Nua 4:3 crop tune

확인되면:

```text
Bible v2.x consolidation
→ Previsual Approval
→ Visual Production Readiness
→ minimum coherent asset set
→ runtime/asset implementation
→ Human Visual QA
```

Human Gate는 계속 FAIL이고 Stage 08은 BLOCKED다.
