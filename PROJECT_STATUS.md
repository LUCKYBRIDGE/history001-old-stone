# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Previsual Browser Review**

장기 공식 기준선:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

현재 정확한 상태:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Historical Visual Reference Review Complete / Scene Composition v2.1 Approved / Dev-only Previsual Harness Integrated / Project-owner Browser Review Pending / Stage 08 BLOCKED**

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

현재 확인된 P0는 없다.

# **P1 시각/몰입 문제가 실제 production-like proof로 재검증되지 않았으므로 Human Gate는 계속 FAIL이다.**

---

# 2. Project-owner Scene Review

Project-owner가 다음 7개 correction direction을 승인했다.

1. SC03→04 terminology + world movement 동시 진행
2. SC05 diagonal departure → forward settle
3. SC08~10 handaxe off-frame continuity
4. SC11 SC05 Stage A same-moment temporal sync
5. fixed bottom action HUD 금지
6. SC10 explicit animal spoor 기본 제외
7. Nua 4:3 crop tune

판정:

# **Project-owner Scene Composition Confirmation = PASS**

승인 통합본:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`

---

# 3. Dev-only Previsual Harness

현재 `main`에는 승인된 v2.1을 브라우저에서 검토하기 위한 dev-only harness가 통합되어 있다.

개발 모드 진입:

```text
?previsual=1
```

예:

```text
http://localhost:5173/?previsual=1
```

목적:

- production image 없이 구도 검증
- 16:9 / 16:10 / 4:3 crop 전환
- Player body / actor / handaxe / shelter / target / UI 배치 확인
- PV frame별 camera/dialogue/continuity/acceptance 확인
- SC05↔SC11 same-moment match 확인

이 harness는 Player runtime이 아니며 production art도 아니다.

---

# 4. Machine-readable Critical PV Set

현재 harness가 직접 표현하는 최소 critical set:

1. PV-01 SC01 living camp
2. PV-02 SC02 handoff
3. PV-03 SC03→04 ownership/naming/movement resume
4. PV-04 SC05 departure spatial proof
5. PV-05 SC06→07 stop/crouch proof
6. PV-06 SC08→09 Nua attention/reveal
7. PV-07 SC10 rock shelter inspection
8. PV-08 SC11 same-moment Aru POV

Machine-readable spec:

- `src/experience/previsual/stage075PrevisualSpec.ts`

Browser harness:

- `src/experience/previsual/Stage075PrevisualHarness.tsx`

---

# 5. Locked Composition Highlights

- 1600×900 16:9 master + 4:3/16:10 mandatory proof
- outbound axis: camp/Aru behind-left, route right/right-center, Damu/Nua ahead
- DAY1-HANDAXE-v1 right-hand continuity
- SC02 Unified Contact: Aru hand → handaxe → Player hand
- SC03 terminology annotation while world resumes
- SC05 diagonal departure then camera forward settle
- SC06 Player still standing when Damu stops
- SC07 left ground brace; no evidence pointing
- SC08 Nua head→shoulder→torso attention turn
- SC09 Player pan reveals natural shelter
- SC08~10 same held handaxe exits/re-enters FOV continuously
- SC10 left rock brace + no default explicit animal spoor
- SC11 exact same SC05 Stage A moment from Aru-side POV
- action affordance appears only when actionable; persistent footer forbidden

---

# 6. Still Deferred

- exact season
- exact vegetation species
- exact temporary shelter construction/material/knots
- exact garment pattern/stitching
- exact skin tone
- exact hair morphology/style
- exact hominin species visual coding
- final cast faces
- Hunt Player exact age/sex
- final audio production

이는 미완성 누락이 아니라 현재 evidence boundary다.

---

# 7. Production Boundary

현재 하지 않는다.

- production image batch
- runtime/CSS production integration
- Stage 08 Hunt expansion
- final cast/garment/vegetation lock
- generic asset/animation engine 선행

# **실제 production image 생성은 별도 명시적 작업으로 취급한다.**

현재 허용되는 시각 검토는 dev-only neutral previsual harness까지다.

---

# 8. Current Gate

# **Project-owner Previsual Browser Review**

현재 판정:

```text
Scene Composition Design = PASS
Project-owner Scene Confirmation = PASS
Previsual Readiness Package = READY
Dev-only Previsual Harness = INTEGRATED
Automated Harness Verification = PASS
Project-owner Previsual Browser Review = PENDING
Previsual Approval = NOT YET
Human Gate = FAIL
Stage 08 = BLOCKED
```

다음 순서:

```text
Project-owner가 ?previsual=1 검토
→ PV-01~PV-08에서 어색한 구도/인과/P1 기록
→ harness/spec 조정
→ Project-owner Previsual Approval
→ minimum coherent Stage07.5 Human-Gate visual proof 계획
→ 별도 승인 후 필요한 production-like visual 제작/통합
→ Human Visual QA
→ Human Gate PASS 여부
→ Stage 08 Visual Production Readiness
```

# **자동 PASS는 Human PASS가 아니며, Harness PASS도 Visual PASS가 아니다.**
