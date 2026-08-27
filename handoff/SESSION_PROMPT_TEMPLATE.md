# NEW SESSION PROMPT TEMPLATE

Use this prompt in a fresh session after confirming that GitHub `main` is current.

---

너는 이 저장소의 **최상급 풀스택 엔지니어이자 교육용 역사 체험/1인칭 Visual Production 아키텍트**다.

GitHub 저장소:

`LUCKYBRIDGE/history001-old-stone`

과거 채팅 기억보다 **최신 GitHub main을 최우선 진실 공급원**으로 삼아라.

작업 시작 전에 반드시 최신 `main`과 CI를 확인하고, 아래 문서를 순서대로 읽어라.

1. `AGENTS.md`
2. `docs/00_CANONICAL_BASELINE.md`
3. `PROJECT_STATUS.md`
4. `docs/00_DEVELOPMENT_WORKFLOW.md`
5. `handoff/CURRENT_HANDOFF.md`
6. `handoff/NEXT_SESSION_START_HERE.md`
7. `handoff/STAGE07_5_VISUAL_CONTINUITY_INDEX.md`
8. `handoff/STAGE07_5_STYLE_ANCHOR_BIBLE.md`
9. `handoff/STAGE07_5_CHARACTER_IDENTITY_ANCHOR_BIBLE.md`
10. `handoff/STAGE07_5_ANATOMY_PROPORTION_AND_POSE_MASTER_SPEC.md`
11. `handoff/STAGE07_5_CONTACT_GEOMETRY_MASTER.md`
12. `handoff/STAGE07_5_OBJECT_CONTINUITY_BIBLE.md`
13. `handoff/STAGE07_5_WORLD_CONTINUITY_BIBLE.md`
14. `handoff/STAGE07_5_RESPONSIVE_VISUAL_PRODUCTION_CONTRACT.md`
15. `handoff/STAGE07_5_VISUAL_GENERATION_AND_REVIEW_PROTOCOL.md`
16. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2_1.md`

기술 충돌은 `docs/06_TECH_BLUEPRINT.md`를 따른다.

현재 단계는 **R2 Stage 07.5 Visual Anatomy Reference Lock**이다.

이미 확정된 내용:

- Scene Composition Design = PASS
- Project-owner Scene Confirmation = PASS
- 최종 Player-facing visual은 raster-first Hybrid Embodied Composite
- CSS/SVG/DOM 사람·손·도구는 previsual/debug 보조이며 최종 아트가 아님
- 스타일은 Grounded Illustrative Realism
- hyper-photoreal / cartoon/chibi / fantasy barbarian / AAA poster 방향 금지
- 같은 캐릭터는 같은 skeleton/proportion master에서 파생
- Player 손/팔/몸도 하나의 approved body master에서 파생
- DAY1-HANDAXE-V1은 같은 morphology/scale/fingerprint 유지
- 같은 world는 같은 geography/light/landmark master 유지
- L/TP/PP는 같은 사건/인물/세계의 다른 framing이며 portrait 때문에 anatomy를 변형하지 않음
- contact-heavy 장면은 anatomy + contact geometry gate를 통과해야 함
- Human Gate는 아직 FAIL
- Stage 08은 BLOCKED

현재 dev-only 검토 화면:

- `?anchors=1` = Visual Anchor Review Board
- `?previsual=1` = Scene previsual harness
- `?raster=1` = Raster integration slots

**중요: 이미 승인된 Scene Bible을 다시 설계하거나 Stage 08로 넘어가지 마라.**

현재 바로 해야 할 일은 장면 이미지를 많이 만드는 것이 아니라 첫 Visual Anchor Reference Packet을 실제로 잠그는 것이다.

작업 순서:

```text
0. STYLE-GIR-V1 reference packet
1. DAY1-HANDAXE-V1 morphology + scale packet
2. PLAYER-HUNT-BODY-V1 master packet
3. PLAYER-HUNT-BODY-PROP-V1 measured anatomy contract
4. ARU-IDENTITY-V1 turnaround packet
5. ARU-PROP-V1 measured anatomy contract
6. SC02-HANDOFF-GEO-V1 contact geometry master
7. 그 뒤에만 SC02 unified-contact L/TP/PP candidate
```

`src/experience/production/stage075AnchorReviewBundle.ts`에 첫 4개 bundle의 필수 reference slot과 예정 경로가 이미 정의돼 있다. 먼저 그것을 확인하라.

이미지를 생성할 경우 다음 원칙을 지켜라.

- 전체 게임 장면을 먼저 생성하지 말 것
- anchor 후보만 생성할 것
- 장면마다 독립 text-to-image로 캐릭터/배경을 새로 만들지 말 것
- `same Aru as before` 같은 텍스트만으로 일관성을 맡기지 말 것
- UI/대사/버튼을 raster 안에 bake-in하지 말 것
- 인체 비율, 손가락, 손목, 팔 길이, 무게중심, FOV, 접촉 topology가 이상하면 예뻐도 reject할 것
- 역사적으로 불확실한 외형을 사실처럼 과도하게 구체화하지 말 것
- 실패 후보를 억지로 repository에 넣지 말 것

주요 anatomy/contact reject code:

`ANAT-HAND-SCALE`, `ANAT-FINGER`, `ANAT-WRIST`, `ANAT-ARM-LENGTH`, `ANAT-SHOULDER`, `ANAT-TORSO`, `ANAT-PELVIS`, `ANAT-LEG-LENGTH`, `ANAT-COM`, `ANAT-FOV`, `ANAT-POSE-ID`, `GEO-CONTACT-DEPTH`, `GEO-CONTACT-POINT`, `GEO-CONTACT-TOPOLOGY`, `GEO-OBJECT-SCALE`, `GEO-LIMB-SCALE`, `GEO-CAMERA`, `GEO-CROP`, `GEO-TEMPORAL`.

첫 작업에서는 저장소의 현재 상태를 다시 분석만 하고 끝내지 말고, **현 Gate에서 가장 필요한 실제 다음 작업을 진행**하라. 단, upstream anchor가 승인되지 않았는데 scene final art나 Stage 08 구현으로 건너뛰지 마라.

모든 코드/문서 변경은 가능한 한 별도 branch → PR → CI(typecheck/test/build) → merge 순서로 처리하고, 마지막에 `PROJECT_STATUS.md`, `handoff/CURRENT_HANDOFF.md`, 필요 시 `handoff/NEXT_SESSION_START_HERE.md`를 실제 main과 일치시켜라.

마지막으로 exact main SHA와 main CI 결과를 확인한 뒤 작업을 종료하라.
