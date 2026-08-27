# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Scene Composition Bible v2 / Project-owner Review**

장기 공식 기준선은 계속:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

이다.

현재 정확한 상태:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Historical Visual Reference Review Complete v1 / Scene Composition Bible v2 Consolidated / Implementation Frozen**

Stage 08은 계속 BLOCKED다.

최신 exact `main`, PR, branch, Actions 상태는 GitHub가 최종 진실 공급원이며 이 문서에 SHA/run 번호를 반복 기록하지 않는다.

---

# 1. Human QA가 확인한 P1

실제 Player Human QA에서 자동 테스트가 잡지 못한 문제가 반복 확인됐다.

- **R2UX-001 / Embodied spatial** — 팔/손이 몸보다 HUD처럼 읽히고 handaxe grip/contact가 약함
- **R2UX-002 / Relationship presence** — 주변 인물이 사람보다 기능 silhouette처럼 읽힘
- **R2UX-003 / Narrative causality** — 누구와 왜 움직이고 무엇을 같이 겪는지가 약함
- **R2UX-004 / Curriculum presentation** — 정확한 교과 내용도 별도 학습 카드처럼 보여 몰입을 끊음
- **R2UX-005 / Visual composition** — shelter / actor / body가 production 치환 가능한 구도로 충분히 읽히지 않음
- **R2UX-006 / Speaker ambiguity** — `한 사람`, `다른 한 사람`, `그 사람` 지칭이 인물 기억을 방해
- **R2UX-007 / Functional-role narration** — 제작 기능이 인물 정체성을 대신함
- **R2UX-008 / Action-scene legibility** — 현재 어떤 동작/상황인지 몸과 장면만으로 즉시 읽히지 않음
- **R2UX-009 / Previsual under-specification** — 대사, 손/팔, 도구, actor 위치, 풍경, camera, transition, responsive crop가 구현 전에 충분히 잠기지 않아 구현자가 장면 의미를 다시 발명하게 될 위험
- **R2UX-010 / Chronology coherence risk** — 서로 다른 구석기 단계·유적의 구체 복원 자료를 `구석기`라는 이유만으로 한 장면에 결합할 위험

현재 확인된 P0는 없다.

# **P1이 남아 있으므로 Human Gate PASS를 선언하지 않는다.**

---

# 2. 현재 previsual 설계 기준선

Project-owner review의 주 문서:

# `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE_V2.md`

v2는 다음을 통합한다.

- Scene Bible v1
- Scene Lock Decisions v1
- Historical Visual Reference Review v1

보조/감사 추적 문서:

- `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE.md`
- `handoff/STAGE07_5_SCENE_COMPOSITION_LOCK_DECISIONS.md`
- `handoff/STAGE07_5_HISTORICAL_VISUAL_REFERENCE_REVIEW.md`

이 문서들은 Technical SSOT가 아니다.

기술 SSOT는 계속:

- `docs/06_TECH_BLUEPRINT.md`

이다.

---

# 3. Historical Visual Reference Review에서 확인된 핵심

## Chronology Coherence Gate

특정 visual detail은 `구석기 자료`라는 이유만으로 사용할 수 없다.

반드시 확인:

- 어느 시기/연대인가
- 어느 지역/유적인가
- 다른 Day 1 핵심 anchor와 함께 두어도 되는가
- 특정 복원 세부인지 broad historical anchor인지

## 주먹도끼

- 국립중앙박물관 `신수19143` primary morphology anchor
- `신수18710` secondary proportion/material anchor
- `신수19143`은 전기 구석기 대표성이 강함
- Day 1 물체는 실제 유물 복제가 아니라 fictional canonical object

## current shelter

- 석장리 제3호 집터와 막집 복원은 후기 구석기 specific comparative reference
- Day 1 shelter의 1:1 template으로 사용하지 않음
- low-specificity / low / asymmetric temporary shelter로 유지
- 현대 텐트/집 icon 금지

## clothing

- 한국 구석기 가죽 사용의 직접 증거는 제한적
- 유라시아 봉제/섬유 자료는 comparative reference
- exact garment pattern은 잠그지 않음
- anti-modern / anti-fantasy constraints만 lock

## human appearance

- 한반도 구석기 인골 자료로 특정한 표준 얼굴을 일반화하기 어려움
- exact species/facial morphology lock 금지
- fictional, non-caricature cast 전략 유지

## environment

- 후기 플라이스토세 고환경 자료는 특정 시기/지역 자료
- current Day 1 exact season/species palette로 직접 적용하지 않음
- chronology non-diagnostic environment 사용

---

# 4. Production Historical Model

Stage 07.5 production framing:

# **Korean Paleolithic Educational Composite / Element-level Provenance**

뜻:

- fictional Day 1
- broad Korean Paleolithic curriculum anchors
- visual element마다 provenance와 uncertainty를 관리
- 특정 유적의 구체 복원을 서로 다른 시기의 자료와 무비판적으로 합치지 않음
- 근거가 약한 detail은 intentionally non-diagnostic 처리

Reference confidence marker:

- `[H]` Historical anchor
- `[C]` Comparative reference
- `[R]` Reconstruction choice
- `[D]` Deferred / non-diagnostic

---

# 5. Bible v2에서 잠긴 핵심

## Screen axis

```text
camp/fire/Aru = behind-left
outbound route = right/right-center
Damu/Nua = ahead
```

SC04~SC10 mirror/180° crossing 금지.

## Camera

C0~C10 camera family와 seated/rise/standing/crouch/pan/approach transition timing 정의.

## handaxe

- same canonical object
- right-hand grip-base
- face-A continuity
- working-end orientation
- no inventory spin
- no FPS weapon lock

## Player body

- action-relevant body only
- SC06 still standing
- SC07 left ground brace
- SC10 left rock brace
- central X arms 금지

## actors

Aru/Damu/Nua 각각 Scene별 pose family 정의.

## background community

B1/B2를 SC00~SC05에서 같은 사람/같은 작업으로 유지.

## world

- WP-CAMP-DAWN-A
- WP-DEPARTURE-PATH-A
- WP-GROUND-OBS-A
- WP-ROCK-SHELTER-A
- `LM-SPLIT-ROCK-01`

## dialogue

SC00~SC11 exact line/timing prerequisite 정리.

## curriculum

- contextual annotation
- modal/page-card 금지
- timer-only auto hide 금지

## perspective

SC11 = actual same moment from Aru-side POV.
Memory echo가 아님.

---

# 6. QA Gate

Previsual Approval 전 최소:

1. 1-second freeze-frame
2. 800ms silent-motion
3. no-caption
4. no-audio
5. reduced-effects
6. contact
7. direction
8. no-overlay
9. same-body/tool/world continuity
10. 4:3 / 16:10 / 16:9 crop
11. chronology coherence
12. site-specificity
13. clothing anti-anachronism
14. hominin anti-caricature
15. environment overclaim prevention

자동 테스트로 `몰입됨`을 선언하지 않는다.

---

# 7. 아직 의도적으로 Deferred

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

이는 빠진 설계가 아니라 현재 근거 수준에 맞춘 의도적 제한이다.

---

# 8. Implementation Freeze

# **Project-owner Scene Composition Review + Previsual Approval 전에는 runtime/CSS/production image 작업을 재개하지 않는다.**

현재 코드의 Social Runtime / Continuous Action layer는 prototype이며 final composition으로 취급하지 않는다.

금지:

- 이미지부터 생성
- CSS부터 추가 remediation
- Stage마다 독립 이미지를 만들고 continuity를 나중에 맞춤
- 특정 유적 복원을 broad 구석기 사실처럼 복제
- reference uncertainty를 art detail로 감춤

---

# 9. 현재 다음 Gate

현재 다음 작업은:

# **Project-owner Scene Composition Review**

v2의 SC00~SC11을 검토한다.

검토 포인트:

- 대사
- camera
- 손/팔/무릎
- handaxe grip
- actor 위치/자세/시선
- background activity
- landscape/world plate
- light/sound
- UI
- transition
- responsive crop
- historical confidence

검토에서 P1이 나오면 v2를 수정한다.

통과 후:

```text
Project-owner Scene Review
→ Previsual Approval
→ Visual Production Readiness
→ minimum coherent asset + runtime implementation
→ Human Visual QA
```

---

# 10. Stage 08

계속 BLOCKED다.

Scene Design Review PASS도 Human Gameplay PASS가 아니다.

# **자동 PASS는 Human PASS가 아니며, 설계 완료는 구현 완료가 아니다.**
