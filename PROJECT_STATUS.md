# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Scene Composition Hardening / Design Lock**

장기 공식 기준선은 계속:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

이다.

현재 정확한 상태:

# **Social Runtime Integrated / Automated PASS / Human Gate FAIL / Scene Composition Design Lock In Progress / Implementation Frozen**

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

최근 Human 방향 결정:

> **각 장면의 대사, 1인칭 시점에서 보이는 내 손/팔/도구, 인물, 이미지 배치, 풍경, continuity를 아주 세세하게 먼저 설계하고 그 다음 구현한다.**

현재 확인된 P0는 없다.

# **P1이 남아 있으므로 Human Gate PASS를 선언하지 않는다.**

---

# 2. 현재 설계 기준선

현재 반드시 함께 읽는 Stage 07.5 previsual 문서:

1. `handoff/STAGE07_5_FIRST_PERSON_SCENE_COMPOSITION_BIBLE.md`
2. `handoff/STAGE07_5_SCENE_COMPOSITION_LOCK_DECISIONS.md`

두 문서는 Technical SSOT가 아니다.

기술 SSOT는 계속:

- `docs/06_TECH_BLUEPRINT.md`

이다.

Scene Bible v1은 전체 장면 상세 구도 계약이고, Lock Decisions v1은 v1 안에 남은 선택지/미정 항목을 닫는 hardening addendum이다.

실제 구현 전에 둘을 하나의 **Scene Composition Bible v2**로 통합한다.

---

# 3. 이번 hardening에서 확정한 핵심 결정

## 공간축

- outbound 진행 방향 = screen right / right-center
- camp / fire / Aru = behind-left
- SC04~SC10 사이 이유 없는 좌우 mirror / 180° axis crossing 금지

## 반복 landmark

- `LM-SPLIT-ROCK-01` — 갈라진 낮은 큰 바위
- outbound spatial memory와 후속 Return callback에 같은 object 사용

## handaxe

- same fictional canonical object
- right-hand dominant grip 유지
- `grip-base`를 오른손이 잡음
- inspect 시 face-A가 주로 보이고 working-end는 forward-left/up-left 방향
- inventory spin / FPS weapon lock 금지

## SC07

- Player 왼손은 지면을 짚어 crouch를 지지
- 흔적을 가리키거나 직접 만져 정답을 알려주지 않음

## SC08→SC09

- Nua가 right-forward 약 25°로 실제 몸을 돌림
- Player가 오른쪽 20~24° pan
- 그 뒤에만 rock shelter가 reveal target이 됨

## SC10

- Player 왼손이 near-left rock edge를 짧게 짚음
- Nua: `안이 꽤 넓어.`
- Damu: `안쪽은 먼저 봐야 해.`
- 두 대사는 해당 scene의 반응일 뿐 영구 역할 label이 아님

## SC11

- Perspective 방식 A로 lock
- memory echo가 아니라 **같은 실제 순간을 Aru POV에서 다시 경험**
- `해 지기 전에 와.`는 현재 POV owner의 own voice
- `아루의 관점` 메타 제목 금지

## background community

- B1/B2를 SC00~SC05에서 같은 사람/같은 작업 흐름으로 유지
- B1 fire tending, B2 material/shelter work
- Player 입력마다 새 crowd처럼 재배치하지 않음

## curriculum cue

- 큰 beige 학습 카드 금지
- contextual annotation
- 시간만으로 2~4초 뒤 자동 삭제하지 않음
- 다음 world action까지 읽을 수 있게 유지

---

# 4. 추가한 Composition QA

기존 freeze-frame test에 더해 다음을 요구한다.

- **800ms silent motion test** — 소리/대사 없이 walking, stop, lower, crouch, attention turn, handoff가 구별되는가
- **No-audio test** — 소리가 없어도 핵심 인과가 읽히는가
- **No-caption test** — 설명문 없이 행동이 읽히는가
- **Reduced-effects test** — motion 축소 상태에서도 start/end pose와 contact로 의미가 남는가
- **First-glance priority test** — 1초 안에 장면의 첫 시선 대상이 명확한가
- **No-overlay test** — contact/actor/target 위에 UI를 얹어 장면을 가리지 않는가

---

# 5. 아직 Reference Lock이 필요한 항목

의도적으로 아직 확정하지 않는다.

- exact season
- exact vegetation species/palette
- exact clothing construction/material/stitching
- detailed skin/hair appearance
- Hunt Player의 final age/sex reading
- exact temporary shelter reconstruction/material system
- final face/cast appearance
- final sound production

이는 설계 미완성이 아니라 **자료 검토 없이 확정하면 역사적 재구성을 사실처럼 굳힐 위험이 있기 때문에 보류**한다.

다만 current shelter는 지금도 다음 silhouette를 금지한다.

- 대칭 A-frame tent
- 현대 캠핑 텐트형 정삼각형
- 네모 집 + 삼각 지붕 icon
- 정면 출입문이 강조된 house icon

---

# 6. 현재 runtime의 위치

현재 Stage 07.5 runtime은:

- social/narrative causal prototype
- Continuous Action previsual prototype

일 뿐이다.

현재 코드를 final composition으로 간주하지 않는다.

자동 테스트는 causal/state invariant를 검증하지만 다음은 증명하지 못한다.

- 실제 사람처럼 보이는가
- 손/팔/도구가 몸의 행동처럼 보이는가
- 장면 연출이 자연스러운가
- 시각적 몰입이 충분한가
- 같은 공간/사람/물건 continuity가 자연스러운가

---

# 7. Implementation Freeze

# **새 runtime / CSS / production image 작업을 일시 중지한다.**

금지:

- CSS부터 만들고 장면 의미를 나중에 맞추기
- 이미지를 먼저 생성하고 gameplay를 이미지에 맞추기
- Scene마다 독립적으로 이미지를 생성
- final art quality로 잘못된 camera/body composition을 덮기
- Lock Decision을 무시하고 runtime에서 새 선택지를 발명하기

---

# 8. 다음 작업 순서

현재 다음 Gate는 Human Gameplay Recheck가 아니다.

```text
Scene Bible v1
+ Scene Lock Decisions v1
→ Historical Visual Reference Review
→ REFERENCE-LOCK REQUIRED 항목 정리
→ Scene Composition Bible v2 통합
→ Project-owner Scene Composition Review
→ Previsual Approval
→ runtime + asset implementation
→ Human Visual QA
```

특히 Bible v2에는 한 문서 안에 다음이 들어가야 한다.

- camera states
- screen direction
- Player hand/body poses
- handaxe grip/orientation
- actor coordinates / pose / gaze
- background continuity
- route landmark
- world plate / occlusion
- exact dialogue / timing
- curriculum cue behavior
- UI no-overlay zones
- responsive composition
- contact keyframes
- historical visual reference 결과
- Human acceptance matrix

# **Bible v2 + Reference Lock + Project-owner Review 전에는 구현 branch를 만들지 않는다.**

---

# 9. Stage 08

계속 BLOCKED다.

Stage 07.5 설계가 잠겨도 즉시 전체 Stage 08 Hunt 구현으로 점프하지 않는다.

```text
Scene Composition Lock
→ Visual Production Readiness
→ minimum coherent production set
→ Human visual/continuity QA
→ 이후 확장
```

순서를 유지한다.

# **자동 PASS는 Human PASS가 아니며, 설계 완료도 Human Gameplay PASS가 아니다.**
