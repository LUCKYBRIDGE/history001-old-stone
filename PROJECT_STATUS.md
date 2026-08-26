# PROJECT_STATUS.md

## Current phase

# **R2 Stage 07.5 Relationship / Narrative Human-Gate Remediation**

현재 공식 기준선은 여전히:

# **Design Reboot R2 / Stage 07 Curriculum-Hardened Baseline**

이다.

다만 Stage 07의 최초 실제 Human QA가 수행되었고, 자동검증과 달리 사람의 실제 플레이에서는 P1 blocker가 확인됐다.

따라서 현재 상태는:

# **Stage 07 Automated PASS / Human Gate FAIL / Remediation In Progress**

이다.

`Stage 07.5`는 새로운 대형 production Stage가 아니라 **Stage 07 Human Gate를 통과하기 위한 작은 relationship/narrative/embodied remediation substage**다.

Stage 08 Hunt Embodied Vertical Slice는 계속 BLOCKED다.

---

# 1. GitHub 기준선

이 문서에 SHA/run 번호를 계속 갱신해 docs-only CI loop를 만들지 않는다.

최신 exact `main`, PR, branch, Actions 상태는 GitHub가 최종 진실 공급원이다.

이 remediation 작업은 최신 main에서 분기한:

```text
r2-stage07-5-relationship-narrative-proof
```

에서 진행한다.

기존 실험 branch:

```text
r2-human-qa-visual-composition-fix
```

는 merge하지 않고 reference/frozen experiment로 보존한다.

---

# 2. Human QA 실제 판정

초기 Stage 07 실제 Player 플레이에서 다음 P1 문제가 확인됐다.

## R2UX-001 — Embodied spatial problem / P1

- 팔/손이 자연스러운 몸보다 화면 중앙 HUD/도형처럼 읽힘
- 주먹도끼 grip/contact가 약함
- production replaceability에 직접 영향

## R2UX-002 — Relationship problem / P1

- R/H1/H2가 사람 관계보다 기능 silhouette로 읽힘
- 누가 도구를 건네고, 누가 함께 움직이고, 누가 무엇을 먼저 보는지가 약함

## R2UX-003 — Narrative causality problem / P1

- `왜 나가는가 → 누구와 움직이는가 → 함께 무엇을 발견하는가 → 이후 무엇이 남는가`의 causal spine이 runtime에서 약해짐
- canonical STORY/PLAYFLOW의 관계/감정 구조가 skeleton 구현에서 손실됨

## R2UX-004 — Curriculum presentation problem / P1

- `뗀석기 → 대표적인 예: 주먹도끼` 내용은 정확함
- 다만 naming cue가 별도 학습 카드처럼 보여 Experience → Name 흐름의 몰입을 끊음

## R2UX-005 — Visual composition / misconception risk / P1

- 사람 silhouette, current shelter icon-like 위험, depth/occlusion 부족
- final art 문제가 아니라 current proof 구조에서 먼저 줄여야 하는 blocker 존재

현재 확인된 P0는 없다.

# **P0/P1 미해결이므로 Human Gate PASS를 선언하지 않는다.**

---

# 3. Root-cause 판단

현재 문제는 canonical STORY가 빈약해서가 아니다.

`docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`, `docs/03_HUNT_STORY.md`, `docs/04_HUNT_PLAYFLOW.md`, `docs/07_IMMERSION_NARRATIVE_BIBLE.md`에는 이미 다음 관계 기능이 존재한다.

- R — 시작 관계 anchor / 도구 전달 / 귀환 모티프
- H1 — 함께 이동 / 피로 / 협력 / 위험
- H2 — 흔적·랜드마크 관찰 / 자연 거처 후보 반응 / 다른 판단 가능성

핵심 문제는:

# **Canonical → Runtime semantic loss**

다.

따라서 canonical을 대규모로 다시 쓰지 않고, 현재 Stage 07 runtime이 이미 존재하는 관계/인과를 실제 행동과 시선으로 proof하도록 수정한다.

---

# 4. Stage 07.5 Relationship Spine

캐릭터 설정집이나 호감도 시스템을 만들지 않는다.

최소 관계 spine:

```text
R
첫 인식: 불 가까이에서 먼저 나를 봄
공유 사건: 직접 돌도구를 건넴
callback: “해가 지기 전에 돌아와.” + 같은 아침을 R 쪽 자리에서 다시 봄

H1
첫 인식: 함께 나갈 준비 / 나를 기다림
공유 사건: 같이 이동하고 같은 지면 흔적을 살핌
callback seed: 이후 Hunt 위험/피로/운반에서 함께 겪은 사람

H2
첫 인식: 출발 전부터 주변을 살핌
공유 사건: 무언가를 먼저 보고 멈춤 → 플레이어가 그 시선을 따라봄
callback seed: 새 공간 판단과 다른 판단 가능성
```

관계는 점수가 아니라 사건 기억과 후속 의미다.

---

# 5. Stage 07.5 runtime proof 범위

```text
S0 Role Orientation
→ S1 Fire / R first recognition / 생활 Need
→ S2 R handoff
→ Experience 뒤 뗀석기 → 주먹도끼 naming
→ S3 H1/H2와 합류
→ R: “해가 지기 전에 돌아와.”
→ 불 + R + current shelter가 함께 멀어짐
→ S4 H1과 함께 지면 관찰
→ travel continuity
→ H2가 먼저 멈추고 한 방향을 봄
→ 플레이어가 그 시선을 따라봄
→ 그 뒤에만 자연 거처 후보가 보임
→ 사람들과 가까이 가서 장점/불확실성 확인
→ 동굴 / 바위 그늘 naming
→ Perspective Proof: 같은 Day 1 아침을 도구를 건넨 사람 쪽 자리에서 재해석
```

Perspective Proof는 Camp 역할의 정체성을 R로 영구 확정하는 결정이 아니다.

---

# 6. Stage 08에 남기는 것

Stage 07.5에서 다음을 구현하지 않는다.

- 실제 사냥감 Discovery / Approach 전체
- Pursuit Dilemma
- 본격 피로 누적
- Threat / Horror
- Hunt result
- 실제 Return / Reunion
- 늦은 귀환/빈손/성공 variation
- 죄책감/후회/성취 payoff
- 주먹도끼 실제 다용도 interaction
- cave discovery의 장기 consequence

즉 Stage 07.5는 전체 Hunt가 아니라 관계와 인과가 실제 browser experience로 성립하는지 확인하는 proof다.

---

# 7. Curriculum / Historical Guardrail

교과 문법은 유지한다.

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

- `뗀석기 = 주먹도끼` 금지
- current temporary shelter를 Stage 07에서 바로 `막집`으로 단정하지 않음
- 동굴 / 바위 그늘을 유일한 집이나 자동 새 집으로 만들지 않음
- R/H1/H2 및 구체 사건은 Historical Reconstruction

---

# 8. Runtime architecture 원칙

기술 SSOT는 계속 `docs/06_TECH_BLUEPRINT.md` 하나다.

Stage 07.5에서는 generic engine을 만들지 않는다.

금지:

- Relationship Engine
- Dialogue Engine
- NPC AI
- 호감도/성격 점수
- generic Scene DSL

허용:

- 기존 `useReducer`에 필요한 최소 scene state 추가
- 관계 사건을 Debug/QA용 qualitative signal로만 기록
- actor stop/gaze 같은 Beat는 불필요하게 reducer state로 승격하지 않음
- world visibility가 실제로 달라지는 causal boundary는 명시적 state로 표현

현재 핵심 invariant:

# **H2가 먼저 멈추고 플레이어가 그 방향을 직접 보기 전에는 자연 거처 후보를 렌더링하지 않는다.**

---

# 9. Visual remediation 원칙

기존 `r2-human-qa-visual-composition-fix`를 merge하지 않는다.

그 branch에서 검토 가치가 있던 방향만 현재 narrative 구조 위에 최소 선택 이식한다.

- world와 story의 시각적 분리 완화
- beige textbook-card 느낌 축소
- 팔을 중앙 HUD/X 형태가 아니라 frame edge에서 들어오는 foreground geometry로 완화
- handaxe silhouette/readability 보완
- actor-specific relationship beat의 시각적 차이
- current shelter의 tent/house icon 위험 완화

이것은 final art가 아니다.

Production image 생성은 계속 금지한다.

---

# 10. 자동검증

자동 테스트는 다음만 검증한다.

- R을 보기 전 도구 handoff 진행 불가
- handoff 뒤에만 terminology reveal
- 같은 handaxe continuity
- H1 shared-observation causal order
- H2 stop/gaze 이전 cave 미노출
- 플레이어가 H2 시선을 따라본 뒤 cave 노출
- cave inspection 뒤 curriculum reveal
- perspective proof에서 Hunt handaxe가 새 POV body에 잘못 붙지 않음
- Player에 reconstruction/relationship internal ID 미노출
- Debug에 필요한 qualitative relationship signal 노출

자동 테스트가 다음을 PASS 선언하지 않는다.

- R이 정말 익숙한 사람처럼 느껴지는가
- H1/H2가 실제 동행자처럼 느껴지는가
- 몸/도구가 실제로 자연스러운가
- 몰입되는가

이 항목은 Human QA 책임이다.

---

# 11. 다음 Gate

현재 순서:

```text
Stage 07.5 runtime + tests
→ PR exact-head CI
→ merge
→ main CI
→ Player 자연 재플레이
→ Teacher 확인
→ 4:3 / 16:10 / 16:9 Human QA
→ unresolved R2UX 재판정
```

Human Gate PASS 여부는 실제 사용자 확인 기반이다.

PASS 전에는:

- Stage 08 전체 Hunt 구현 금지
- production image 대량 생성 금지
- Visual Production Readiness 완료로 간주 금지

---

# 12. Human Gate PASS 이후

PASS 이후에도 바로 Stage 08 production으로 점프하지 않는다.

```text
Human Gate PASS
→ Visual Production Readiness Gate
→ Historical / Visual Reference Pack
→ Player Body / R/H1/H2 / Handaxe anchors
→ Camera / Composition Profiles
→ contact keyframe roughs
→ responsive crop proof
→ 필요한 최소 Stage 06 visual runtime contract
→ Minimum Coherent Production Asset Set
→ Stage 08
```

최종 목표는 웹페이지를 읽는 것이 아니라 같은 하루를 사람·몸·물건·공간의 관계 속에서 기억하게 만드는 것이다.
