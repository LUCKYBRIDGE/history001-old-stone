# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Relationship / Narrative Human-Gate Remediation**

공식 baseline은 계속:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT는 계속:

- `docs/06_TECH_BLUEPRINT.md`

현재 정확한 판정:

# **Stage 07 Automated PASS / Initial Human QA FAIL / P1 remediation in progress**

Stage 08은 아직 시작하지 않는다.

---

# 1. 왜 Stage 07.5인가

Stage 07의 첫 실제 Player Human QA에서 자동 테스트가 잡지 못하는 P1 문제가 확인됐다.

- first-person 팔/손이 몸보다 HUD처럼 보임
- 주먹도끼 contact/grip 약함
- R/H1/H2가 관계 인물보다 silhouette/function처럼 보임
- 현재 runtime에서 canonical Hunt의 관계·인과·callback이 충분히 살아나지 않음
- terminology cue가 학습 웹페이지 느낌을 강화
- current shelter / actor / body composition에 production-replaceability blocker 존재

따라서 Stage 08로 넘어가지 않고 작은 remediation proof를 수행한다.

`Stage 07.5`는 새 대형 Stage나 production milestone이 아니다.

---

# 2. 현재 작업 branch

```text
r2-stage07-5-relationship-narrative-proof
```

최신 `main`에서 생성했다.

기존:

```text
r2-human-qa-visual-composition-fix
```

는 merge하지 않는다.

이 branch는 old runtime 계약 위에 CSS부터 고치려던 실험이므로 frozen reference로만 둔다. 필요한 CSS 아이디어는 새 relationship/narrative structure가 정해진 뒤 선택적으로만 이식한다.

---

# 3. 현재 확정 Relationship Spine

## R

- first recognition: 불 가까이에서 먼저 플레이어를 봄
- shared incident: 돌도구를 직접 건넴
- motif: “해가 지기 전에 돌아와.”
- proof callback: Perspective Proof에서 같은 아침을 R 쪽 자리에서 다시 봄
- 후속 Stage 08 payoff: 실제 귀환/재회

## H1

- first recognition: 같이 나갈 준비 / 플레이어를 기다림
- shared incident: 같이 이동하고 같은 지면 흔적을 살핌
- 후속 Stage 08 payoff seed: 피로·위험·운반을 함께 겪는 사람

## H2

- first recognition: 이동 전부터 주변을 살핌
- shared incident: 무언가를 먼저 보고 멈춤
- player causality: 플레이어가 H2의 시선을 직접 따라본 뒤에만 자연 거처 후보가 드러남
- 후속 Stage 08 payoff seed: 다른 판단 가능성

관계는 호감도/점수 시스템이 아니다.

---

# 4. 현재 Stage 07.5 Player flow

```text
사냥 관점
→ 새벽 불 / 현재 임시 거처 / 오늘 먹을 것을 찾아 나갈 Need
→ R이 먼저 나를 봄
→ 내가 R을 봄
→ R의 손에서 돌도구를 받음
→ 같은 도구가 내 오른손에 남음
→ 뗀석기 상위 개념 + 지금 손의 대표적인 예 = 주먹도끼
→ H1/H2 합류
→ R: “해가 지기 전에 돌아와.”
→ R + 불 + current shelter가 함께 멀어짐
→ H1이 속도를 늦추고 나를 기다림
→ H1 곁에 몸을 낮춰 같은 지면 흔적을 봄
→ 다시 셋이 걸음을 맞춤
→ H2가 먼저 멈추고 한 방향을 봄
→ 아직 cave 미노출
→ 플레이어가 H2의 시선을 따라봄
→ 그 뒤 바위 아래 자연 거처 후보가 드러남
→ 사람들과 가까이 감
→ 넓음/마름/보호 가능성 + 어둠/동물/거리 불확실성을 함께 확인
→ 동굴 / 바위 그늘 naming
→ 같은 Day 1 아침, 도구를 건넨 사람 쪽 자리에서 출발 사건을 다시 봄
```

Perspective Proof는 Camp role = R을 확정하는 결정이 아니다.

---

# 5. 핵심 runtime invariant

가장 중요한 신규 invariant:

# **H2가 먼저 멈추고 플레이어가 그 시선을 따라보기 전에는 cave target이 렌더링되지 않는다.**

기존 구조의 문제는 cave가 먼저 화면에 나타난 뒤 텍스트가 `H2도 보고 멈춘다`고 설명하는 순서였다.

새 구조는:

```text
H2 stop / gaze
→ player action
→ world reveal
```

이다.

즉 사람의 행동이 실제 발견의 원인이 된다.

---

# 6. 구현 원칙

유지:

- React + TypeScript + Vite
- `useReducer`
- explicit small state
- curriculum evidence
- Player / Teacher / Debug separation

추가:

- Stage 07 proof에 필요한 최소 relationship qualitative signals

예:

```text
r-recognized
r-tool-handoff-shared
r-return-motif-heard
h1-shared-ground-observation
h2-gaze-followed
```

이 signal은 Debug/QA용이며 Player에는 노출하지 않는다.

추가하지 않음:

- Relationship Engine
- affection score
- personality score
- Dialogue Engine
- NPC AI
- generic Scene DSL

---

# 7. Visual proof 변경

새 relationship structure 위에서 Human QA blocker를 줄이는 최소 CSS layer를 추가한다.

목적:

- world와 story가 별도 웹페이지 section처럼 느껴지는 문제 완화
- beige curriculum card 축소
- 중앙 X 팔/HUD 느낌 완화
- H1/H2 relationship-active beat의 visual focus 차이
- handaxe readability 보완
- current shelter icon-like 위험 완화

이 CSS는 production art가 아니다.

production image는 만들지 않는다.

---

# 8. 테스트

현재 integration tests는 다음 causal invariant를 검증하도록 강화했다.

- Experience before terminology
- R handoff 뒤 same handaxe continuity
- R return motif가 departure에 존재
- H1 shared observation
- H2가 먼저 멈춤
- H2 gaze-follow 전 cave DOM 없음
- gaze-follow 뒤 cave DOM 등장
- companion judgments 뒤 cave terminology
- perspective callback은 같은 Day 1
- new POV body에 Hunt handaxe가 잘못 붙지 않음
- Player에는 reconstruction/relationship ID 없음
- Debug에서만 qualitative relationship signals 확인

자동 test는 `사람처럼 느껴지는가`, `몰입되는가`를 판정하지 않는다.

---

# 9. 아직 Stage 08에 남긴 것

- 실제 사냥감 발견/접근
- Pursuit Dilemma
- 본격 피로와 시간 압박
- Threat/Horror
- Hunt result
- Return
- R reunion
- 죄책감/후회/성취 payoff
- 주먹도끼 실제 다용도 interaction
- cave consequence

Stage 07.5에 넣지 않는다.

---

# 10. 다음 실행 순서

```text
runtime/tests/docs remediation
→ PR
→ exact PR-head CI
→ merge
→ main CI
→ 사용자 Player 자연 재플레이
→ Teacher 확인
→ 4:3 / 16:10 / 16:9 확인
→ R2UX P1 재판정
```

Human Gate PASS는 사용자의 실제 재플레이 확인 전 선언하지 않는다.

---

# 11. 재플레이 때 가장 먼저 볼 것

1. 첫 20~30초에 사람들과 하루를 시작하는 느낌이 드는가
2. R이 `설명 NPC`가 아니라 아침에 도구를 건넨 사람으로 기억되는가
3. H1과 실제로 같이 행동했다고 느껴지는가
4. cave를 시스템이 보여준 게 아니라 H2의 행동을 보고 내가 발견했다고 느껴지는가
5. 팔/도구가 여전히 HUD처럼 보이는가
6. terminology cue가 여전히 웹 학습 카드처럼 튀는가
7. Perspective Proof에서 `아까 그 사람/아까 나`의 관계가 바로 이해되는가

P0/P1이 남으면 Human Gate는 계속 FAIL이다.

---

# 12. Human Gate PASS 이후

```text
Visual Production Readiness
→ reference pack
→ Player Body / R/H1/H2 / Handaxe anchors
→ camera/composition profiles
→ contact keyframe rough
→ responsive crop proof
→ 필요한 최소 Stage 06 visual runtime 계약
→ Minimum Coherent Production Asset Set
→ Stage 08
```

production 이미지 대량 생성부터 시작하지 않는다.
