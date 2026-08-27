# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Scene Composition Bible v2 / Project-owner Review**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Historical Visual Reference Review Complete v1 / Scene Composition Bible v2 Consolidated / Implementation Frozen**

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
13. `handoff/DAY1_COMMUNITY_HUNT_FIRST5_SCREENPLAY.md`
14. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`

감사/근거 추적이 필요할 때:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE.md` v1
- `handoff/STAGE07_5_SCENE_COMPOSITION_LOCK_DECISIONS.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

위 handoff 문서는 Technical SSOT가 아니다.

---

# 2. 지금까지의 Human 판단

첫 구현/재플레이에서 다음이 확인됐다.

- 관계/이름/인과는 초기보다 개선
- 하지만 현재 화면만으로 동작/상황을 즉시 읽기 어려움
- 손/팔/도구가 실제 몸보다 HUD처럼 보임
- actor pose/거리/풍경이 충분히 하나의 물리적 공간으로 묶이지 않음
- 설명문/버튼이 장면을 대신 설명하는 비중이 큼

프로젝트 오너의 현재 기준:

> 각 장면의 대사, 1인칭에서 보이는 손/팔/도구, 인물, 이미지 배치, 풍경, continuity를 세세하게 설계한 다음 구현한다.

따라서 현재 runtime/CSS는 prototype으로만 유지한다.

---

# 3. Bible v2의 역사적 framing

# **Korean Paleolithic Educational Composite / Element-level Provenance**

Day 1은 특정 유적 특정 날짜의 1:1 복원이 아니다.

visual decision마다:

- `[H]` Historical anchor
- `[C]` Comparative reference
- `[R]` Reconstruction choice
- `[D]` Deferred / non-diagnostic

를 구분한다.

새 Gate:

# **Chronology Coherence Gate**

`구석기 자료`라는 이유만으로 서로 다른 시기/유적의 구체 세부를 한 장면에 합치지 않는다.

---

# 4. Historical Visual Review 핵심

## Handaxe

- NMK 신수19143 primary morphology
- NMK 신수18710 secondary proportion/material
- specific artifact clone 아님
- same fictional Day 1 object

## Shelter

- Seokjangri specific hut = 후기 구석기 comparative reference
- current Day 1 shelter의 1:1 template 아님
- Day 1 shelter = low-specificity asymmetric temporary protection reconstruction

## Clothing

- exact Korean Paleolithic garment는 근거가 부족
- anti-modern / anti-fantasy constraints만 확정
- exact pattern/stitching deferred

## Human appearance

- 한반도 구석기 인골로 표준 얼굴을 일반화하기 어려움
- fictional non-caricature cast
- exact species/facial morphology deferred

## Environment

- 후기 플라이스토세 식생 자료는 특정 연대/지역의 comparative data
- exact Day 1 species/season으로 사용 금지
- chronologically non-diagnostic environment

---

# 5. Stage 07.5 Scene 목록

```text
SC00 Sensory Orientation
SC01 Fire / Living Community Presence
SC02 Aru → Handaxe → Player Handoff
SC03 Tool Ownership / Experience → Name
SC04 Rise / Damu Already Moving / Nua Elsewhere
SC05 Departure / Camp Recedes
SC06 Damu Stops / Player Still Standing
SC07 Player Crouches / Shared Ground Observation
SC08 Rise / Nua Attention Shift
SC09 Follow Gaze / Rock Shelter Revealed
SC10 Rock Shelter Inspection
SC11 Perspective Recontextualization / Aru-side Proof
```

Bible v2가 각 scene의:

- camera
- body
- hand
- tool
- actor
- background
- world
- light
- sound
- dialogue
- timing
- UI
- transition
- responsive crop
- reference confidence
- acceptance

을 한 문서에서 정의한다.

---

# 6. 핵심 locked decisions

## Screen axis

```text
camp/fire/Aru = behind-left
outbound route = right/right-center
Damu/Nua = ahead
```

## Camera

C0~C10 family.

## Route landmark

`LM-SPLIT-ROCK-01` — 갈라진 낮은 큰 바위.

## Handaxe

- right hand
- grip-base
- face-A continuity
- no inventory spin/FPS lock

## SC07

- Player left hand = ground brace
- evidence pointing/touch 금지

## SC08/09

- Nua right-forward ~25° body turn
- Player right pan 20~24°
- no dialogue at turn/reveal

## SC10

- left hand rock brace required
- Nua: `안이 꽤 넓어.`
- Damu: `안쪽은 먼저 봐야 해.`

## SC11

- actual same moment from Aru-side POV
- memory echo 아님
- own voice `해 지기 전에 와.`
- no `아루의 관점` meta title

## Curriculum cue

- contextual annotation
- timer-only auto hide 금지
- no large beige/modal card

---

# 7. Project-owner Scene Review

현재 다음 Gate.

Bible v2의 SC00~SC11을 **구현하지 않은 설계 상태에서 먼저 검토**한다.

필수 확인:

1. 대사 자연스러움
2. 각 순간 누가 무엇을 하는지
3. Player 몸이 왜 보이는지
4. 손/팔 위치
5. handaxe grip/contact
6. actor 위치/pose/gaze
7. camp→route→ground→rock shelter spatial continuity
8. background life continuity
9. camera movement
10. action UI가 scene을 가리지 않는지
11. curriculum cue가 몰입을 끊지 않는지
12. 4:3/16:10/16:9 crop
13. 역사적 사실/비교/재구성/보류의 구분
14. SC11 perspective 이해 가능성

Review에서 P1이면 v2 수정.

---

# 8. Previsual QA

Project-owner review 후에도 다음이 필요하다.

- 1-second freeze frame
- 800ms silent motion
- no-caption
- no-audio
- reduced-effects
- contact
- direction
- no-overlay
- responsive crop
- same body/tool/world continuity
- chronology coherence
- anti-anachronism
- anti-caricature

자동 테스트로 Human PASS를 선언하지 않는다.

---

# 9. Implementation Freeze

현재 하지 말 것:

- 새 runtime/CSS remediation
- production image generation
- Stage 08 전체 Hunt
- final cast face lock
- exact garment/vegetation을 근거 없이 확정

# **Project-owner Scene Review + Previsual Approval 전에는 implementation branch를 만들지 않는다.**

---

# 10. 다음 순서

```text
Bible v2 consolidated
→ Project-owner Scene Composition Review
→ v2 correction if needed
→ Previsual Approval
→ Visual Production Readiness
→ minimum coherent asset + runtime implementation
→ Human Visual QA
```

Human Gate는 계속 FAIL이며 Stage 08은 BLOCKED다.
