# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Previsual Browser Review**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition v2.1 Project-owner Approved / Dev-only Previsual Harness Integrated / Project-owner Previsual Browser Review Pending**

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

현재 Player runtime/CSS는 causal/social prototype이며 final composition이 아니다.

---

# 3. Project-owner Approved Scene Contract

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

# 4. Dev-only Previsual Harness

승인된 v2.1을 이미지 생성 없이 브라우저에서 검토할 수 있는 neutral composition harness가 `main`에 통합되어 있다.

개발 모드:

```text
http://localhost:5173/?previsual=1
```

구성:

- PV-01~PV-08 선택
- PV별 1~3개 핵심 frame 선택
- 16:9 / 16:10 / 4:3 frame 전환
- 4:3 / 16:10 safe zone overlay
- element label on/off
- camera note
- dialogue timing
- frame continuity checks
- PV acceptance criteria
- SC05/SC11 same-moment linkage

관련 코드:

- `src/experience/previsual/stage075PrevisualSpec.ts`
- `src/experience/previsual/Stage075PrevisualHarness.tsx`
- `src/styles/stage075PrevisualHarness.css`
- `tests/integration/Stage075PrevisualHarness.test.tsx`

이 route는 DEV에서만 활성화되며 Player production runtime을 대체하지 않는다.

---

# 5. Critical PV Set

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

주요 검증점:

- 사람/도구/세계 위치가 1초 정지 화면에서도 읽히는가
- 손/팔이 HUD가 아니라 행동 정보로 읽히는가
- 접촉점이 4:3에서도 유지되는가
- scene axis가 뒤집히지 않는가
- handaxe가 사라졌다 생기지 않는가
- action UI가 fixed HUD가 되지 않는가
- SC11이 rewind가 아니라 same-moment opposite-side POV로 읽히는가

---

# 6. Historical Framing

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

# 7. Previsual vs Production

현재 harness는 rough composition review 도구다.

현재 가능:

- wire/rough composition review
- camera/pose/contact proof
- crop proof
- same-moment proof
- continuity review

현재 금지:

- production image batch
- final art polishing
- runtime production integration
- Stage 08 expansion
- final cast/garment/environment specific lock

# **실제 production image 생성은 별도 명시적 작업으로 취급한다.**

---

# 8. Current Gate

# **Project-owner Previsual Browser Review**

현재:

```text
Scene Composition Design = PASS
Project-owner Scene Confirmation = PASS
Previsual Readiness = READY
Dev-only Previsual Harness = INTEGRATED
Automated Harness Verification = PASS
Project-owner Previsual Browser Review = PENDING
Previsual Approval = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 행동:

1. 최신 `main`을 받는다.
2. `npm run dev` 실행.
3. `?previsual=1`로 PV-01~PV-08을 본다.
4. 각 PV에서 16:9 → 16:10 → 4:3을 전환한다.
5. 어색한 구도/동작 인과/접촉/crop 문제를 그대로 기록한다.
6. 해당 feedback을 spec/harness에 먼저 수정한다.
7. Project-owner가 Previsual PASS를 선언하기 전 production visual 제작으로 넘어가지 않는다.

자동 테스트나 문서 승인만으로 Human PASS를 선언하지 않는다.
