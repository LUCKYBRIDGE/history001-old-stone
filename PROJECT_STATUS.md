# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Scene Composition Design Lock**

장기 공식 기준선은 계속:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

이다.

현재 정확한 상태:

# **Stage 07.5 Social Runtime Integrated / Automated PASS / Human Recheck FAIL / Scene Composition Bible In Progress**

Stage 08은 계속 BLOCKED다.

최신 exact `main`, PR, branch, Actions 상태는 GitHub가 최종 진실 공급원이며 이 문서에 SHA/run 번호를 반복 기록하지 않는다.

---

# 1. Human QA가 확인한 P1 문제

실제 Player Human QA와 재플레이에서 자동 테스트가 잡지 못한 P1 문제가 확인됐다.

- **R2UX-001 / Embodied spatial** — 팔/손이 몸보다 HUD처럼 읽히고 handaxe grip/contact가 약함
- **R2UX-002 / Relationship presence** — R/H1/H2가 사람보다 기능 silhouette처럼 읽힘
- **R2UX-003 / Narrative causality** — 누구와 왜 움직이고 무엇을 같이 겪는지가 runtime에서 약함
- **R2UX-004 / Curriculum presentation** — 정확한 교과 내용도 별도 학습 카드처럼 보여 몰입을 끊음
- **R2UX-005 / Visual composition** — current shelter / actor / body가 production 치환 가능한 구도로 충분히 읽히지 않음
- **R2UX-006 / Speaker ambiguity** — `한 사람`, `다른 한 사람`, `그 사람` 지칭이 인물 기억을 방해
- **R2UX-007 / Functional-role narration** — 제작 기능이 인물 정체성을 대신함
- **R2UX-008 / Action-scene legibility** — Social Runtime은 이전보다 나아졌지만, 현재 구조와 placeholder 시각물만으로는 `무슨 동작 중인지`, `어떤 상황인지`가 몸과 장면에서 즉시 읽히지 않으며 연출도 어색하고 부족함

R2UX-008 직접 Human 피드백:

> **“전보다는 낫지만 많이 부족해. 시각적으로 이미지가 제대로 안 만들어졌고, 연출도 부족하고 어색한 상태야. 현재 어떤 동작 중인지, 어떤 상황인지가 현재 구조, 이미지들로는 몰입이 안돼.”**

추가 Human 방향 결정:

> **각 장면의 대사, 1인칭 시점에서 보이는 내 손/팔/도구, 인물, 이미지 배치, 풍경, continuity를 아주 세세하게 먼저 설계하고 그 다음 구현한다.**

Root cause:

- Visual production / asset composition
- Embodied spatial
- Interaction / action legibility
- Screen treatment / scene continuity
- **Previsual design completeness 부족**

해석:

- 이름/대사/인과만 추가해서는 해결되지 않는다.
- CSS로 먼저 장면을 만들고 나중에 의미를 맞추는 방식도 중단해야 한다.
- 각 Scene의 camera/body/tool/actor/world/dialogue/transition/crop/continuity가 먼저 잠겨야 한다.
- production image도 scene composition 승인 전에 만들지 않는다.

현재 확인된 P0는 없다.

# **P1이 남아 있으므로 Human Gate PASS를 선언하지 않는다.**

---

# 2. main에 이미 통합된 Social Immersion 계약

현재 canonical/runtime 공통 방향:

- Player는 구석기에 처음 온 관광객이 아니라 이미 이 공동체에서 살아온 사람
- R/H1/H2는 authoring ID이며 Player-facing identity와 분리
- Stage 07.5 provisional call-name: `아루 / 다무 / 누아`
- 이름은 실제 선사 언어 복원이 아닌 fictional reconstruction / translation handle
- Player 자신의 이름은 고정하지 않아 self-projection 유지
- 한국어 대사는 실제 선사 언어 복원이 아니라 학생을 위한 의미 번역
- pseudo-primitive speech 금지
- 이름+기능 소개 카드 및 상시 nameplate 금지
- NPC는 Player에게만 반응하지 않고 자기 행동과 NPC-to-NPC interaction을 가질 수 있음
- 관계는 호감도 점수가 아니라 shared event / memory / callback으로 유지
- `World Truth ≠ Character Knowledge`

기술 SSOT는 계속 `docs/06_TECH_BLUEPRINT.md` 하나다.

---

# 3. Stage 07.5 First-Five Social Runtime — 현재 prototype 범위

현재 runtime은 다음 causal proof를 갖는다.

```text
ambient community life
→ 아루 handaxe handoff
→ Experience 뒤 뗀석기 / 주먹도끼 naming
→ 다무/누아와 출발
→ 아루 귀환 모티프
→ 다무 stop
→ Player crouch
→ 그 뒤 ground evidence
→ 누아 attention shift
→ Player follow
→ 그 뒤 natural shelter reveal
```

자동 테스트는 이 causal order와 Teacher/Debug metadata를 검증한다.

하지만 자동 테스트는 다음을 판정하지 않는다.

- 실제 사람처럼 보이는가
- 걷기/멈춤/쪼그림이 몸으로 구분되는가
- handoff contact가 자연스러운가
- 장면이 연속된 행동으로 느껴지는가
- 몰입되는가

최근 Continuous Action previsual remediation도 prototype일 뿐 final scene design으로 취급하지 않는다.

---

# 4. 현재 최우선 작업 — Scene Composition Bible

# **추가 runtime 구현을 일시 중지한다.**

현재 최우선 산출물:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE.md`

이 문서는 현재 Stage 07.5의 모든 주요 Beat에 대해 최소 다음을 잠근다.

```text
Scene/Beat purpose
Camera profile / eye line / look direction
Player body visibility
Left/right hand action
Held handaxe position / grip / continuity
Aru/Damu/Nua position / pose / gaze / action
Background community activity
World plate / landscape / foreground / occlusion
Light / sound / dialogue source
Exact dialogue + timing
Player direct action
Immediate visual response
Curriculum cue placement
UI/action affordance placement
Previous/next transition
4:3 / 16:10 / 16:9 crop safety
Historical fact / reconstruction boundary
Production Mode A/B/C
Required visual/reference anchors
Human acceptance criteria
```

# **장면 설계가 먼저 잠기고, 구현은 그 뒤에 한다.**

---

# 5. Scene Composition Lock Gate

다음 구현 branch를 만들기 전에:

1. Scene Composition Bible 작성 완료
2. 장면별 손/팔/도구/인물/풍경/대사/전환 continuity 검토
3. Human/Project-owner가 주요 composition 방향 확인
4. source review가 필요한 visual 항목을 `REFERENCE-LOCK REQUIRED`로 분리
5. unresolved Scene-level P1 정리
6. 그 뒤에만 runtime/asset implementation 시작

금지:

- CSS부터 만들고 의미를 나중에 맞추기
- AI 이미지부터 생성하고 gameplay를 이미지에 맞추기
- 장면마다 독립적으로 image를 생성해 continuity를 잃기
- final art quality로 잘못된 camera/body composition을 덮기

---

# 6. 현재 Scene Composition 설계 대상

현재 Stage 07.5 전체 Beat:

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

각 Beat는 freeze-frame만 봐도 핵심 action/situation이 읽혀야 한다.

---

# 7. 아직 하지 않는 것

Scene Composition Lock 전에는 다음을 하지 않는다.

- 새 runtime/CSS remediation
- production image generation
- Stage 08 전체 Hunt 구현
- final cast appearance/name lock
- 본격 Pursuit Dilemma
- Threat/Horror 완성
- Hunt result / Return / Reunion payoff
- generic NPC AI
- generic Dialogue / Relationship engine
- relationship score/호감도

Scene Composition Lock 이후에도 Stage 08 전 Visual Production Readiness Gate는 별도로 필요하다.

---

# 8. 다음 Gate

현재 다음 Gate는 **Human Gameplay Recheck가 아니라 Scene Composition Review**다.

먼저 설계 문서에서 다음을 확인한다.

1. 각 장면의 camera가 이전/다음 장면과 이어지는가
2. 내 손/팔/무릎이 왜 보이는지 장면마다 이유가 있는가
3. handaxe가 같은 물건으로 계속 이어지는가
4. Aru/Damu/Nua가 각 장면에서 어디에 있고 무엇을 하는지 명확한가
5. 풍경/거처/불/랜드마크가 같은 공간으로 이어지는가
6. 대사가 행동 전에 설명하지 않고 행동과 함께 발생하는가
7. curriculum cue가 장면을 덮지 않는가
8. 4:3 / 16:10 / 16:9에서 핵심 contact/actor/target이 유지되는가
9. 아직 역사 자료가 필요한 외형을 근거 없이 lock하지 않았는가
10. Scene screenshot만 보고 현재 행동/상황을 설명할 수 있는가

이 review가 통과된 다음에만 구현 branch로 이동한다.

# **자동 PASS는 Human PASS가 아니며, 설계 완료도 Human Gameplay PASS가 아니다.**
