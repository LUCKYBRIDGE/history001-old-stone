# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Social Immersion / Human-Gate Remediation**

장기 공식 기준선은:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

이다.

현재 정확한 상태:

# **Original Stage 07 Implementation Complete / Automated PASS / Human Gate FAIL / Stage 07.5 Remediation In Progress**

Stage 08은 계속 BLOCKED다.

최신 exact `main`, PR, branch, Actions 상태는 GitHub가 최종 진실 공급원이며 이 문서에 SHA/run 번호를 반복 갱신하지 않는다.

---

# 1. Human QA가 바꾼 개발 방향

초기 Stage 07 실제 Player 플레이에서 자동 테스트가 잡지 못한 P1 blocker가 확인됐다.

## R2UX-001 — Embodied spatial / P1

- 팔/손이 몸보다 HUD/도형처럼 읽힘
- handaxe grip/contact가 약함

## R2UX-002 — Relationship presence / P1

- R/H1/H2가 사람보다 기능 silhouette처럼 읽힘

## R2UX-003 — Narrative causality / P1

- 왜 나가는지, 누구와 무엇을 같이 겪는지, 무엇이 이후에 남는지가 runtime에서 약함

## R2UX-004 — Curriculum presentation / P1

- `뗀석기 → 대표적인 예: 주먹도끼` 내용은 정확하지만 naming cue가 학습 카드처럼 몰입을 끊음

## R2UX-005 — Visual composition / misconception risk / P1

- current shelter / actor / body composition이 production asset으로 바로 치환하기 어려움

## R2UX-006 — Speaker / referent ambiguity / P1

- `한 사람`, `다른 한 사람`, `그 사람`처럼 읽어야 해서 누가 누구인지 즉시 알기 어려움

## R2UX-007 — Functional-role narration / P1

- `도구를 건네는 사람`, `같이 가는 사람`, `주변을 살피는 사람` 같은 제작 기능이 Player character identity를 대신함
- 화자를 더 명확히 해도 사람에게 이입되지 않는 상위 원인으로 확인

현재 확인된 P0는 없다.

# **P1 blocker가 남아 있으므로 Human Gate PASS를 선언하지 않는다.**

---

# 2. 이미 main에 반영된 remediation

- actor 위치에 dialogue 연결
- 역할 중심 Player 설명 축소
- `사냥을 나선 사람의 관점` 같은 Player role title 제거
- sensory opening 강화
- R/H1/H2 authoring metadata와 Player-facing identity 분리
- Social Immersion / Day 1 Character canonical 계약 추가
- Player는 외부인이 아니라 기존 공동체 구성원이라는 원칙 추가
- fictional naming policy 추가
- 한국어 dialogue = 의미 번역 convention 추가
- NPC autonomy / NPC-to-NPC interaction 원칙 추가
- World Truth ≠ Character Knowledge 추가
- Shared Day Event / participant / witness / told knowledge 최소 기술 계약 추가

---

# 3. 현재 설계 완료 / 구현 미완료 경계

Social Immersion canonical design은 정리됐지만 다음은 아직 runtime proof가 아니다.

# **Day 1 Community + Hunt First Five Minutes**

구체 implementation contract:

- `handoff/DAY1_COMMUNITY_HUNT_FIRST5_SCREENPLAY.md`

canonical browser contract:

- `docs/04_HUNT_PLAYFLOW.md` v9

Stage 07.5 provisional call-name:

```text
R  → 아루
H1 → 다무
H2 → 누아
```

이는 실제 구석기 이름 재현이 아니며 production final lock도 아니다.

---

# 4. 다음 runtime proof

다음 구현에서 우선 proof할 흐름:

```text
눈뜨기 전 ambient community life
→ 눈을 뜸
→ background people은 자기 일을 계속
→ 생활 속에서 아루 이름을 자연스럽게 들음
→ 아루의 손 → handaxe → 내 오른손
→ Experience 뒤 뗀석기 → 주먹도끼 naming
→ 다무/누아가 이미 움직이는 흐름에 합류
→ 아루: `해 지기 전에 와.`
→ 불/거처/사람 소리가 실제로 멀어짐
→ 다무의 행동 변화/정지
→ Player가 곁에 몸을 낮춤
→ 같은 지면 흔적을 직접 관찰
→ 누아 attention-shift seed
```

후속 existing Stage 07.5 proof:

```text
누아 attention을 Player가 직접 따라봄
→ 그 뒤 natural shelter target reveal
→ inspection
→ 동굴 / 바위 그늘 naming
→ Perspective Recontextualization Proof
```

---

# 5. 이번 proof가 하지 않는 것

Stage 07.5 first-five에서 다음을 확장하지 않는다.

- 전체 Hunt S5~S13 구현
- 본격 Pursuit Dilemma
- Threat/Horror 완성
- Hunt result
- 실제 Return/Reunion payoff
- 주먹도끼 실제 다용도 interaction
- production image 생성
- production final cast appearance
- generic NPC AI
- procedural dialogue
- relationship score/호감도

---

# 6. 기술 원칙

기술 SSOT는 `docs/06_TECH_BLUEPRINT.md` 하나다.

허용:

- explicit small state
- local Beat state
- SharedDayEvent
- participant/witness/knowledge
- qualitative relationship memory
- explicit variation

금지:

- generic Relationship Engine
- generic Dialogue Engine
- NPC AI
- personality/affection score
- procedural narrative
- 모든 Beat를 reducer Scene으로 승격

---

# 7. Curriculum / Historical Guardrail

학습 문법:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Naming / Conceptualization
```

```text
Experience → Name → Reuse → Connect
```

도구 위계:

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

역사적 안전성:

- fictional cast/name/dialogue/specific event는 Historical Reconstruction
- 한국어는 실제 선사 언어 복원이 아니라 의미 번역
- pseudo-primitive speech 금지
- 친족/족장/권력 구조를 근거 없이 사실화하지 않음
- current temporary shelter를 조기 `막집` 확정하지 않음
- cave/rock shelter를 유일한 집/업그레이드로 만들지 않음

---

# 8. 다음 Gate

runtime 구현 후:

```text
typecheck/tests/build
→ PR-head CI
→ merge
→ main CI
→ 사용자 실제 Player 재플레이
```

Human re-check 핵심:

1. 첫 5분 뒤 아루/다무/누아가 역할이 아니라 사람으로 구별되는가
2. 내가 이 공동체의 기존 구성원처럼 느껴지는가
3. NPC가 Player 없이도 살아 있는가
4. 아루 handoff가 item pickup이 아니라 사람 사이의 물리적 사건인가
5. 불/거처/사람 소리가 실제로 멀어지는가
6. 다무의 행동 때문에 내가 바닥을 같이 봤다고 느껴지는가
7. terminology cue가 여전히 학습 카드처럼 튀는가
8. 몸/도구가 여전히 HUD처럼 보이는가

# **자동 PASS는 Human PASS가 아니다.**

Stage 08 및 production visual은 이 Gate 전 시작하지 않는다.
