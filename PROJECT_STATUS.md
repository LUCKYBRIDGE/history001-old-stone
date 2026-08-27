# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Continuous Action / Human-Gate Remediation**

장기 공식 기준선은 계속:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

이다.

현재 정확한 상태:

# **Stage 07.5 Social Runtime Integrated / Automated PASS / Human Recheck FAIL / Continuous Action Remediation In Progress**

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

Root cause:

- Visual production / asset composition
- Embodied spatial
- Interaction / action legibility
- Screen treatment / scene continuity

해석:

- 이름/대사/인과만 추가해서는 해결되지 않는다.
- 현재 actor primitive가 위치만 달라질 뿐 `걷기`, `도구 전달`, `멈춤`, `쪼그림`, `시선 전환`이 서로 다른 몸의 실루엣으로 충분히 보이지 않는다.
- story prose + button이 행동을 대신 설명하는 비중이 아직 높다.
- production art를 대량 제작하기 전에 placeholder만으로도 action silhouette와 공간 깊이가 읽혀야 한다.

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

# 3. Stage 07.5 First-Five Social Runtime — 구현 완료 범위

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

---

# 4. 현재 remediation — Continuous Action / Scene Composition

현재 수정의 목적은 이미지 자산 제작이 아니다.

# **Production art 없이도 현재 동작과 상황이 먼저 읽히는 previsual staging**

을 만든다.

우선 proof 대상:

1. **아루 handoff**
   - 아루의 몸이 Player 쪽으로 기울어짐
   - 도구를 든 팔이 실제 contact point로 뻗음
   - Player 오른손도 그 순간에만 프레임으로 들어옴
   - 주변 인물/배경은 시각적 우선순위에서 내려감

2. **다무 movement**
   - `이동 중 → 갑자기 멈춤 → 몸을 낮춤 → 지면을 같이 봄`이 서로 다른 silhouette로 보여야 함
   - ground evidence는 Player crouch 이후에만 보이는 기존 causal invariant 유지

3. **누아 attention shift**
   - gaze line만이 아니라 머리/상체/팔 방향이 함께 바뀌어야 함
   - Player가 방향을 따라보기 전 target 미노출 유지

4. **Departure spatial continuity**
   - 불/거처/남은 사람과 실제로 멀어지는 depth 변화
   - 앞서 걷는 두 사람의 이동 자세
   - foreground/midground/background 분리

5. **Player body**
   - 필요한 동작에 필요한 팔/무릎만 보임
   - 고정 FPS HUD처럼 두 팔이 항상 화면을 점유하지 않음

6. **Story/UI hierarchy**
   - 설명문은 장면 해설이 아니라 보조 감각 정보로 축소
   - dialogue/action control이 scene보다 시각적으로 강해지지 않음

---

# 5. 현재 remediation이 하지 않는 것

Human Gate 전에는 다음으로 확장하지 않는다.

- Stage 08 전체 Hunt
- production image generation
- final cast appearance/name lock
- 본격 Pursuit Dilemma
- Threat/Horror 완성
- Hunt result / Return / Reunion payoff
- generic NPC AI
- generic Dialogue / Relationship engine
- relationship score/호감도

이미지를 생성해 현재 구조 문제를 덮지 않는다.

---

# 6. 다음 Gate

Continuous Action composition 코드가 자동검증을 통과하면 사용자 실제 Player 재플레이가 다시 필요하다.

Human re-check 핵심:

1. 설명문을 읽기 전에 아루가 도구를 건네는 장면임을 알 수 있는가
2. 다무가 걷는 중인지, 멈춘 것인지, 몸을 낮춘 것인지 구별되는가
3. 누아가 다른 방향에 주의를 돌린 순간이 시각적으로 읽히는가
4. 출발 후 뒤의 불/거처/사람에게서 멀어진 느낌이 있는가
5. Player 팔/도구가 HUD가 아니라 행동 중 몸처럼 보이는가
6. 장면이 `실루엣 + 설명문 + 버튼` 정지 페이지보다 연속 사건에 가까워졌는가
7. 그래도 production visual이 없어서 Human Gate 판단 자체가 불가능한 수준인지

7번이 YES라면 Gate 설계를 다시 검토한다. 그 경우 무작정 Stage 08 전체 production으로 점프하지 않고 **Human Gate용 최소 production visual set**의 필요성을 별도 결정한다.

# **자동 PASS는 Human PASS가 아니다.**
