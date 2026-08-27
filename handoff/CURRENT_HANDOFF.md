# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Social Immersion / Human-Gate Remediation**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 정확한 판정:

# **Original Stage 07 Automated PASS / Human Gate FAIL / First-Five Social Runtime Not Yet Implemented**

Stage 08은 BLOCKED다.

---

# 1. 새 세션에서 가장 먼저 알아야 할 것

최초 실제 Player Human QA에서 다음이 반복 확인됐다.

- 팔/손이 몸보다 HUD처럼 읽힘
- handaxe grip/contact 약함
- R/H1/H2가 사람보다 기능 silhouette로 읽힘
- speaker를 명확히 해도 `이 사람은 이런 역할`이라는 기능 서술 때문에 이입이 생기지 않음
- 큰 학습 cue + 설명 + 버튼 구조가 역사 체험보다 교육 웹페이지처럼 보임
- 관계와 서사 callback이 현재 runtime에서 약함

따라서 현재 문제를 production image로 덮지 않는다.

---

# 2. 이미 main에 반영된 설계 결정

- Player는 구석기에 처음 들어온 현대 관광객이 아니라 이 공동체의 기존 구성원
- R/H1/H2는 authoring ID
- Player-facing 인물은 이름·습관·shared event·callback으로 기억
- fictional name은 Historical Reconstruction
- 한국어 dialogue는 실제 선사 언어 재현이 아니라 학생을 위한 의미 번역
- `우가우가`식 pseudo-primitive speech 금지
- NPC는 Player가 없어도 자기 행동/대화를 가질 수 있음
- NPC-to-NPC interaction 허용/권장
- World Truth ≠ Character Knowledge
- Shared Day Event는 participant / witness / told knowledge를 구분
- relationship은 호감도 숫자가 아니라 event memory와 callback

---

# 3. Stage 07.5 provisional naming

현재 first-five screenplay/runtime proof용 call-name:

```text
R  → 아루
H1 → 다무
H2 → 누아
```

주의:

- 실제 선사 언어/실존 인명 재현이 아님
- production final lock 아님
- Human QA 후 바꿀 수 있음
- Player 자신의 이름은 이 proof에서 고정 표시하지 않음
- 이름 머리 위 상시 nameplate 금지
- 이름 + 기능 설명 카드 금지

상세 naming/community contract:

- `handoff/DAY1_COMMUNITY_HUNT_FIRST5_SCREENPLAY.md`

---

# 4. Day 1 Community 핵심

Player + 핵심 NPC 3명만 있는 RPG party처럼 보이면 실패다.

Stage 07.5 proof에서는 최소:

- 아루 / R
- 다무 / H1
- 누아 / H2
- ambient background actor 1~2명

을 활용한다.

background actor는:

- 불/재료/거처 관련 자기 일을 함
- Player가 눈을 떠도 자기 일을 계속함
- Player에게 모두 말을 걸지 않음
- NPC끼리 짧게 대화할 수 있음

정확한 공동체 규모/혈연/권력 구조는 lock하지 않는다.

---

# 5. 각 핵심 인물의 기억 구조

## 아루

- 습관: 물건을 건네기 전 잡는 면/날을 짧게 확인, 걱정할수록 말이 짧음
- first-five: 눈맞춤 → handaxe handoff → `해 지기 전에 와.`
- callback: dusk / return / waiting recontextualization

## 다무

- 습관: 먼저 움직이지만 다른 사람이 늦으면 속도를 줄임, 발견하면 몸을 비켜 같이 보게 함
- first-five: `가자.` → 같이 걷기 → `잠깐.` → shared ground observation
- callback: fatigue / danger / carry / return

## 누아

- 습관: 대화 중에도 다른 지형/소리에 주의가 이동, 바로 정답을 확신하지 않음
- first-five: 이동 중 다른 방향 attention seed
- callback: 후속 natural shelter / alternate judgment

이 내용은 Player 설명문으로 노출하지 않는다.

---

# 6. First Five Minutes 구현 순서

canonical browser contract:

- `docs/04_HUNT_PLAYFLOW.md` v9

상세 screenplay:

- `handoff/DAY1_COMMUNITY_HUNT_FIRST5_SCREENPLAY.md`

우선 구현:

```text
눈뜨기 전 ambient life
→ 눈을 뜸
→ background actors는 자기 행동 계속
→ 다른 사람의 부름 속에서 `아루` 이름을 자연스럽게 들음
→ 아루: `손.`
→ Player right hand handoff
→ Experience 뒤 뗀석기 → 대표적인 예: 주먹도끼 naming
→ 다무: `가자.` / 이미 이동 시작
→ 누아는 외부를 봄
→ Player가 흐름에 합류
→ 아루: `해 지기 전에 와.`
→ 불/거처/사람 소리가 실제로 멀어짐
→ 다무가 속도를 바꾸고 멈춤
→ `잠깐.`
→ Player가 곁에 몸을 낮춤
→ 다무가 몸을 비켜 같이 지면을 봄
→ 누아 attention-shift seed
```

그 다음 existing proof:

```text
Player가 누아의 attention을 직접 follow
→ 그 뒤 natural shelter target reveal
→ inspection
→ 동굴 / 바위 그늘 naming
→ Perspective Recontextualization Proof
```

---

# 7. 가장 중요한 causal invariants

## 사람 → Player → 세계

나쁜 순서:

```text
시스템이 target/정답 먼저 보여줌
→ NPC가 그것을 설명
```

좋은 순서:

```text
사람의 몸/행동 변화
→ Player가 알아차림
→ 직접 action
→ 그 뒤 world information
```

## Knowledge

World event가 발생했다고 모든 캐릭터가 자동으로 알지 않는다.

- 직접 봄
- 같이 겪음
- 나중에 들음

을 구분한다.

## Naming

Experience before Name.

```text
아루 손 → handaxe → 내 오른손
→ 뗀석기
→ 대표적인 예: 주먹도끼
```

---

# 8. Runtime 구현 시 하지 말 것

- Stage 08 전체 Hunt로 점프
- production image 생성
- R/H1/H2를 Player에 표시
- `아루 — 도구를 주는 사람` 같은 role card
- 이름 상시 nameplate
- 긴 캐릭터 소개
- 아루가 교과 문단을 말하게 함
- 범용 Dialogue Engine
- NPC AI
- Relationship/affection score
- 모든 screenplay Beat를 reducer state로 승격
- cave target을 누아 attention-follow 전에 미리 렌더링
- role/perspective 제목을 Player에 되살림

---

# 9. 자동 테스트에서 추가해야 할 것

최소:

- opening role/perspective title 없음
- background autonomous beat 최소 하나 존재
- Player surface에 R/H1/H2 authoring ID 없음
- `아루/다무/누아`와 기능 label이 같이 소개되지 않음
- handoff가 terminology보다 먼저
- 같은 handaxe continuity
- `aru-return-line` departure 전에 존재
- 다무 stop/body change가 shared observation보다 먼저
- Player direct observation 뒤 ground evidence
- 누아 attention follow 전 후속 target 미노출
- Teacher/Debug에서 fictional naming + reconstruction mapping 확인 가능

자동 test는 사람 같은 느낌/몰입감 자체를 PASS 선언하지 않는다.

---

# 10. Human Re-check

runtime + CI 이후 사용자 실제 Player 재플레이가 필수다.

먼저 볼 것:

1. 첫 5분 뒤 아루/다무/누아가 사람으로 기억되는가
2. 내가 이 공동체에 원래 있던 사람처럼 느껴지는가
3. NPC가 Player가 없어도 살아 있는가
4. handaxe 전달이 item pickup이 아니라 사람 사이 접촉처럼 느껴지는가
5. 출발 뒤 불/거처/사람 기척이 실제로 멀어지는가
6. 다무가 멈춰서 나도 같이 바닥을 봤다는 인과가 느껴지는가
7. role title 없이 현재 상황을 이해할 수 있는가
8. terminology cue가 여전히 교육 카드처럼 튀는가
9. 몸/도구가 HUD처럼 보이는가

P1이 남으면 production visual로 덮지 않는다.

# **Human Gate PASS는 사용자 실제 재플레이 확인 전 선언하지 않는다.**

---

# 11. 그 다음

Human Gate PASS 전:

- Stage 08 금지
- mass image generation 금지

PASS 이후에도 바로 이미지 생성이 아니라:

```text
Visual Production Readiness
→ Historical/Visual Reference
→ Cast/Body/Tool/Scene anchors
→ responsive/contact/occlusion readiness
→ Stage 08 production
```

순서다.
