# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Social Immersion / Human-Gate Recheck**

장기 공식 기준선은 계속:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

이다.

현재 정확한 상태:

# **Stage 07.5 First-Five Social Runtime Integrated / Automated PASS / Human Gate FAIL·Recheck Pending**

Stage 08은 계속 BLOCKED다.

최신 exact `main`, PR, branch, Actions 상태는 GitHub가 최종 진실 공급원이며 이 문서에 SHA/run 번호를 반복 기록하지 않는다.

---

# 1. 왜 Stage 07.5를 수행했는가

실제 Player Human QA에서 자동 테스트가 잡지 못한 P1 문제가 확인됐다.

- **R2UX-001 / Embodied spatial** — 팔/손이 몸보다 HUD처럼 읽히고 handaxe grip/contact가 약함
- **R2UX-002 / Relationship presence** — R/H1/H2가 사람보다 기능 silhouette처럼 읽힘
- **R2UX-003 / Narrative causality** — 누구와 왜 움직이고 무엇을 같이 겪는지가 runtime에서 약함
- **R2UX-004 / Curriculum presentation** — 정확한 교과 내용도 별도 학습 카드처럼 보여 몰입을 끊음
- **R2UX-005 / Visual composition** — current shelter / actor / body가 production 치환 가능한 구도로 충분히 읽히지 않음
- **R2UX-006 / Speaker ambiguity** — `한 사람`, `다른 한 사람`, `그 사람` 지칭이 인물 기억을 방해
- **R2UX-007 / Functional-role narration** — `도구를 건네는 사람`, `같이 가는 사람`, `주변을 살피는 사람` 같은 제작 기능이 인물 정체성을 대신함

현재 확인된 P0는 없다.

# **P1이 실제 플레이에서 해소됐는지 아직 확인하지 않았으므로 Human Gate PASS를 선언하지 않는다.**

---

# 2. main에 통합된 Social Immersion 계약

현재 canonical/runtime 공통 방향:

- Player는 구석기에 처음 온 관광객이 아니라 **이미 이 공동체에서 살아온 사람**
- R/H1/H2는 authoring ID이며 Player-facing identity와 분리
- Stage 07.5 provisional call-name:

```text
R  → 아루
H1 → 다무
H2 → 누아
```

- 위 이름은 실제 구석기 이름 복원이 아닌 **fictional reconstruction / translation handle**
- Player 자신의 이름은 고정하지 않아 self-projection 유지
- 한국어 대사는 실제 선사 언어 복원이 아니라 학생을 위한 의미 번역
- pseudo-primitive speech 금지
- 이름+기능 소개 카드 및 상시 nameplate 금지
- NPC는 Player에게만 반응하지 않고 자기 행동과 NPC-to-NPC interaction을 가질 수 있음
- 관계는 호감도 점수가 아니라 shared event / memory / callback으로 유지
- `World Truth ≠ Character Knowledge`
- 직접 참여 / 목격 / 나중에 들음을 구분

기술 SSOT는 계속 `docs/06_TECH_BLUEPRINT.md` 하나다.

---

# 3. Stage 07.5 First-Five Runtime — 구현 완료 범위

현재 Player runtime은 다음 proof를 갖는다.

```text
눈뜨기 전 ambient community dialogue
→ 눈을 뜸
→ background community는 자기 일을 계속
→ 생활 속 부름으로 `아루` 이름을 들음
→ 아루: `손.`
→ 아루 손 → canonical handaxe → Player 오른손
→ Experience 뒤 뗀석기 → 대표적인 예: 주먹도끼 naming
→ 다무는 이미 움직이며 `가자.`
→ 누아는 Player가 아닌 바깥 환경에 attention
→ 흐름에 합류
→ 아루: `해 지기 전에 와.`
→ 다무: `알았어.`
→ 불/거처/사람에게서 멀어짐
→ 다무가 먼저 멈추고 `잠깐.`
→ 이때 ground evidence는 아직 보이지 않음
→ Player가 다무 곁에 몸을 낮춤
→ 그 뒤에만 눌린 풀/흙/가지 evidence가 나타남
→ 다무: `봤어?`
→ 다시 이동
→ 누아의 attention shift
→ 이때 cave target은 아직 보이지 않음
→ Player가 누아가 보는 방향을 직접 확인
→ 그 뒤에만 natural shelter target reveal
→ inspection
→ 동굴 / 바위 그늘 naming
→ 같은 아침 Perspective Recontextualization Proof
```

상세 장면 계약:

- `handoff/DAY1_COMMUNITY_HUNT_FIRST5_SCREENPLAY.md`

canonical browser contract:

- `docs/04_HUNT_PLAYFLOW.md`

---

# 4. 자동검증 상태

Stage 07.5 runtime은 PR-head와 merge 후 main에서 다음 pipeline을 통과했다.

```text
install
→ typecheck
→ tests
→ production build
```

자동 테스트는 최소 다음 invariant를 검증한다.

- opening에 role/perspective exposition 없음
- ambient community beat 존재
- 아루 이름이 기능 label 없이 장면 안에서 등장
- handoff가 terminology보다 먼저
- 동일 handaxe continuity
- 다무가 이미 움직이고 누아는 별도 attention을 가짐
- 아루의 귀환 말과 다무의 응답
- 다무 stop 전후 causal order
- Player가 몸을 낮추기 전 ground evidence 없음
- Player action 뒤 ground evidence 등장
- 누아 attention follow 전 cave 없음
- Teacher/Debug에서만 fictional-name ↔ authoring-ID mapping 확인
- Debug Shared Day Events / relationship signals / learning evidence

# **자동 테스트는 `사람처럼 느껴지는가`, `몰입되는가`를 판정하지 않는다.**

---

# 5. 현재 다음 Gate — 사용자 Human Recheck

지금부터 새 기능을 더 붙이는 것보다 **실제 Player 재플레이가 먼저**다.

우선 확인:

1. 눈뜨기 전부터 세계가 이미 움직이고 있던 느낌이 드는가
2. 눈을 뜬 뒤 주변 사람들이 Player 때문에 정지된 NPC처럼 보이지 않는가
3. `아루`, `다무`, `누아`를 기능 설명 없이 서로 다른 사람으로 기억할 수 있는가
4. 아루 handoff가 item pickup보다 사람 사이의 물리적 사건처럼 느껴지는가
5. 다무와 누아가 각각 `역할 담당 NPC`가 아니라 행동이 다른 사람처럼 느껴지는가
6. 다무가 멈췄기 때문에 나도 몸을 낮춰 바닥을 보게 됐다는 인과가 느껴지는가
7. 누아가 먼저 뭔가에 주의를 돌리고 내가 그 방향을 봤기 때문에 새 공간을 발견했다고 느껴지는가
8. 불/거처/사람에게서 실제로 멀어지는 공간감이 있는가
9. terminology cue가 여전히 교육용 카드처럼 튀는가
10. 팔/손/주먹도끼가 여전히 HUD처럼 보이는가
11. 전체가 여전히 `검은 실루엣 + 설명문 + 버튼` 웹페이지처럼 느껴지는가

특히 11번이 FAIL이면 다음 remediation은 **문장 추가가 아니라 continuous scene/action composition**으로 올라간다.

---

# 6. 아직 하지 않는 것

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

Curriculum guardrail도 유지한다.

```text
Immersion
→ Historical Imagination
→ Understanding
→ Naming / Conceptualization
```

```text
Experience → Name → Reuse → Connect
```

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

# **다음 상태 변경은 사용자 실제 재플레이 결과를 R2UX로 재판정한 뒤 결정한다.**
