# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Scene Composition Hardening / Design Lock**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 판정:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition Design Lock In Progress / Implementation Frozen**

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
14. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE.md`
15. `handoff/STAGE07_5_SCENE_COMPOSITION_LOCK_DECISIONS.md`

Scene Composition Bible과 Lock Decisions는 구현 계약이며 Technical SSOT가 아니다.

---

# 2. 왜 지금 구현을 멈췄는가

실제 Human replay에서 social/narrative causality는 전보다 좋아졌지만 다음 P1이 남았다.

- 현재 무슨 동작인지 화면만으로 잘 안 읽힘
- 손/팔/주먹도끼가 실제 몸보다 HUD/overlay처럼 보임
- actor pose와 장면 연출이 어색함
- 풍경과 actor가 같은 물리 공간처럼 충분히 이어지지 않음
- 설명문/버튼을 읽어야 상황을 이해하는 비중이 높음
- 장면별 camera/body/tool/actor/world continuity가 구현 전에 충분히 잠기지 않았음

프로젝트 오너의 현재 원칙:

> **각 장면의 대사, 1인칭 시점에서 보이는 내 손/팔/도구, 인물, 이미지 배치, 풍경, 일관성을 세세하게 설계한 뒤 구현한다.**

따라서 지금은 runtime/CSS를 더 고치는 단계가 아니다.

---

# 3. 현재 Stage 07.5 Scene 목록

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

각 Scene은 camera / body / hand / tool / actor / environment / light / sound / dialogue / UI / transition / responsive crop / historical boundary / acceptance를 먼저 가져야 한다.

---

# 4. 이미 잠긴 Social Immersion 원칙

- Player는 외부 관광객이 아니라 기존 공동체 구성원
- provisional call-name: `아루 / 다무 / 누아`
- R/H1/H2는 authoring ID일 뿐 Player 역할 label이 아님
- 한국어 대사는 실제 선사 언어 복원이 아니라 의미 번역
- pseudo-primitive speech 금지
- NPC는 Player에게만 반응하는 tutorial object가 아님
- NPC-to-NPC interaction 허용
- 관계 = shared event / memory / callback
- `World Truth ≠ Character Knowledge`
- Player 자신의 이름은 고정하지 않아 self-projection 유지

---

# 5. Scene Lock Decisions v1에서 새로 확정한 것

## 공간 방향

```text
camp/fire/Aru = behind-left
outbound route = screen right/right-center
Damu/Nua = ahead
```

SC04~SC10에서 이유 없는 좌우 mirror/180° crossing 금지.

## route landmark

- `LM-SPLIT-ROCK-01`
- 갈라진 낮은 큰 바위
- fictional Day 1 route landmark
- Return에서 같은 object로 callback 예정

## handaxe

- same canonical object
- right-hand dominant grip
- grip-base를 Player가 잡음
- inspect에서 face-A 위주
- working-end는 forward-left/up-left 방향
- inventory spin / FPS weapon lock 금지

## SC07

- 왼손은 지면을 짚어 crouch를 지지
- evidence를 가리키거나 직접 만지지 않음

## SC08/09

- Nua = right-forward 약 25° body turn
- Player = right 20~24° pan
- 그 뒤 rock shelter reveal
- SC08 dialogue 없음

## SC10

- 왼손 near-left rock edge brace 필수
- Nua: `안이 꽤 넓어.`
- Damu: `안쪽은 먼저 봐야 해.`

## SC11

- Perspective 방식 A
- 같은 실제 순간을 Aru POV에서 다시 경험
- memory echo 아님
- own voice: `해 지기 전에 와.`
- Aru 손/팔은 reference lock 전 기본 숨김

## background actors

- B1 fire tending
- B2 material/shelter work
- SC00~SC05에서 같은 사람/같은 작업 continuity

## curriculum cue

- 큰 교육 카드 금지
- contextual annotation
- 시간만으로 자동 hide 금지
- 다음 world action까지 읽을 수 있게 유지

---

# 6. 추가 QA Gate

Scene Review는 다음을 모두 포함한다.

1. 1-second freeze-frame test
2. 800ms silent motion test
3. no-audio test
4. no-caption test
5. reduced-effects test
6. first-glance priority test
7. no-overlay test
8. contact continuity test
9. 4:3 / 16:10 / 16:9 crop test
10. same-body / same-tool / same-world continuity test

자동 테스트로 `몰입됨`을 선언하지 않는다.

---

# 7. 아직 Reference Lock이 필요한 것

현재 근거 없이 확정하지 않는다.

- exact season
- exact vegetation species/palette
- exact clothing construction/material/stitching
- detailed skin/hair appearance
- final age/sex reading
- exact temporary shelter reconstruction/material system
- final face/cast appearance
- final sound production

Current shelter는 reference lock 전에도 다음을 금지한다.

- 대칭 A-frame tent
- 현대 캠핑 텐트형 삼각형
- 집+삼각지붕 icon
- 중앙 출입문이 강조된 house silhouette

---

# 8. 다음 작업

# **다음 작업은 runtime 구현이 아니다.**

```text
Scene Bible v1
+ Lock Decisions v1
→ Historical Visual Reference Review
→ REFERENCE-LOCK REQUIRED 항목 결정
→ Scene Composition Bible v2 통합
→ Project-owner Scene Composition Review
→ Previsual Approval
→ runtime + asset implementation
→ Human Visual QA
```

특히 다음 세션에서 먼저 해야 할 것은:

1. reference가 필요한 시각 항목별 source review 계획 수립
2. shelter / clothing / vegetation / body appearance에서 무엇을 실제로 lock할지 결정
3. Bible v1 + Lock Decisions를 단일 Bible v2로 통합
4. v2의 SC00~SC11을 Project-owner review용으로 요약

---

# 9. 지금 하지 말 것

- 새 runtime/CSS remediation
- production image generation
- Stage 08 전체 Hunt 구현
- final cast lock
- generic NPC AI
- generic relationship/dialogue engine
- 새로운 Scene을 추가해 현재 proof 범위를 흐리기

# **Bible v2 + Reference Lock + Project-owner Review 전에는 구현 branch를 만들지 않는다.**

Human Gate는 계속 FAIL이며, 자동 PASS는 Human PASS가 아니다.
