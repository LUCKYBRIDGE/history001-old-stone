# CURRENT_HANDOFF.md

## Current phase

# **R2 Stage 07.5 Social Immersion / Human-Gate Recheck**

공식 baseline:

- `docs/00_CANONICAL_BASELINE.md`

기술 SSOT:

- `docs/06_TECH_BLUEPRINT.md`

현재 정확한 판정:

# **Stage 07.5 First-Five Runtime Integrated / Automated PASS / Human Gate FAIL·Recheck Pending**

Stage 08은 BLOCKED다.

최신 exact repository HEAD와 CI는 GitHub가 최종 진실 공급원이다.

---

# 1. 지금 무엇이 끝났는가

Social Immersion canonical + Day 1 Community + Hunt First Five Minutes screenplay가 runtime까지 통합됐다.

핵심 Player flow:

```text
눈뜨기 전에도 공동체 생활 소리/대화가 이어짐
→ 눈을 뜸
→ background people은 자기 일을 계속
→ 장면 속 부름으로 `아루`를 자연스럽게 인식
→ 아루: `손.`
→ 아루 손 → handaxe → 내 오른손
→ 그 뒤 뗀석기 → 대표적인 예: 주먹도끼 naming
→ 다무는 이미 움직이며 `가자.`
→ 누아는 독립적으로 바깥을 살핌
→ 출발
→ 아루: `해 지기 전에 와.`
→ 다무: `알았어.`
→ 불/거처/사람에게서 멀어짐
→ 다무가 먼저 멈춰 `잠깐.`
→ 아직 ground evidence 없음
→ 내가 다무 곁에 몸을 낮춤
→ 그 뒤 ground evidence reveal
→ 다무: `봤어?`
→ 다시 이동
→ 누아 attention shift
→ cave는 아직 없음
→ 내가 누아가 보는 방향을 확인
→ 그 뒤 natural shelter reveal
→ inspection / 동굴·바위 그늘 naming
→ 같은 아침 Perspective Recontextualization
```

상세 screenplay:

- `handoff/DAY1_COMMUNITY_HUNT_FIRST5_SCREENPLAY.md`

---

# 2. provisional character identity

Stage 07.5 Human QA용 call-name:

```text
R  → 아루
H1 → 다무
H2 → 누아
```

규칙:

- 실제 선사 언어/실존 인명 복원 아님
- Historical Reconstruction
- production final lock 아님
- Player 자신의 이름은 고정하지 않음
- Player에 R/H1/H2 authoring ID 노출 금지
- `아루 — 도구를 주는 사람` 같은 기능 카드 금지
- 이름 상시 nameplate 금지

Teacher/Debug에서는 authoring mapping과 reconstruction 경계를 확인할 수 있다.

---

# 3. 이번 runtime의 핵심 causal invariants

## 도구

```text
아루의 행동
→ Player가 손을 내밂
→ same handaxe가 Player 오른손으로 이동
→ 그 뒤 terminology
```

## 다무 / ground observation

```text
다무가 먼저 멈춤
→ `잠깐.`
→ 아직 ground target 없음
→ Player가 곁에 몸을 낮춤
→ 다무가 몸을 비킴
→ 그 뒤에만 눌린 풀/흙/가지 evidence
```

## 누아 / natural shelter

```text
누아 attention shift
→ Player가 알아차림
→ cave target은 아직 없음
→ Player가 직접 그 방향을 봄
→ 그 뒤에만 natural shelter reveal
```

즉 기본 문법은:

# **Person / World change → Player perception/action → New information**

이다.

---

# 4. Social Immersion 원칙

- Player는 구석기 세계의 외부 관광객이 아니라 기존 공동체 구성원
- NPC는 Player만을 위해 정지한 tutorial object가 아님
- background actor는 자기 일을 할 수 있음
- NPC-to-NPC dialogue 허용
- Character = 이름 + 몸의 습관 + shared event + memory + callback
- 관계는 호감도 점수가 아님
- 한국어 dialogue는 학생에게 전달되는 의미 번역
- pseudo-primitive speech 금지
- World Truth와 Character Knowledge를 분리

범용 NPC AI / Dialogue Engine / Relationship Engine은 만들지 않는다.

---

# 5. Automated verification

통합 runtime은 PR-head와 merge 후 main에서:

```text
install
→ typecheck
→ tests
→ production build
```

를 통과했다.

자동검증은 causal/state invariant만 증명한다.

자동화가 증명하지 않는 것:

- 아루/다무/누아가 실제 사람처럼 느껴지는가
- 이름이 자연스러운가
- background community가 살아 있는 세계처럼 보이는가
- handaxe contact가 시각적으로 자연스러운가
- body가 HUD가 아닌가
- dialogue/curriculum cue가 몰입을 깨지 않는가
- 전체 장면이 여전히 웹페이지/slideshow처럼 느껴지는가

# **이 항목은 Human QA가 소유한다.**

---

# 6. 지금 다음 행동 — 사용자 Player 재플레이

새 코드 작업을 시작하기 전에 사용자 실제 Player 재플레이가 필요하다.

Player:

```text
http://localhost:5173/
```

Teacher:

```text
http://localhost:5173/?teacher=1
```

Debug는 원인이 필요할 때만:

```text
http://localhost:5173/?debug=1
```

재플레이에서 먼저 볼 것:

1. 눈을 뜨기 전부터 세계가 이미 진행 중인 느낌이 드는가
2. 눈을 뜬 뒤 주변 사람들이 나 때문에 만들어진 NPC가 아니라 자기 일을 하는 사람처럼 보이는가
3. 아루/다무/누아를 설명 카드 없이 구별하고 기억할 수 있는가
4. 아루에게 돌을 `받았다`는 물리적·관계적 감각이 생기는가
5. 다무와 함께 바닥을 봤다는 공동 행동감이 있는가
6. 누아의 행동 때문에 내 시선이 이동했다는 인과가 있는가
7. 불/거처/사람에게서 멀어지는 공간감이 있는가
8. terminology cue가 교육 카드처럼 튀는가
9. 팔/손/주먹도끼가 HUD처럼 보이는가
10. 여전히 `검은 실루엣 + 설명문 + 버튼` 웹페이지인가

사용자가 자연어로 느낀 점을 말하면 R2UX 형식으로 변환한다. 체크리스트 문장으로 다시 작성하라고 요구하지 않는다.

---

# 7. Human recheck 후 분기

## 관계/인과는 좋아졌지만 시각 몰입이 여전히 낮다

다음 작업:

# **Continuous Scene / Action Composition Remediation**

즉 문장이나 이름을 더 붙이는 것이 아니라:

- 정지 화면 전환 감소
- actor movement continuity
- world depth/occlusion
- hand/contact staging
- text/button dominance 감소
- embodied action continuity

를 proof한다.

## 관계/서사 자체가 여전히 기능적으로 느껴진다

Character/shared-event/callback을 다시 수정한다.

## P1이 충분히 해소됐다

사용자 확인을 근거로 Human Gate 상태를 갱신하고 그 다음에 Visual Production Readiness로 간다.

# **Human Gate PASS를 자동으로 선언하지 않는다.**

---

# 8. 아직 하지 말 것

Human Gate 전:

- Stage 08 전체 Hunt 구현 금지
- production image/mass image generation 금지
- final cast lock 금지
- NPC AI 금지
- relationship score 금지

PASS 이후에도 바로 이미지 생성이 아니라:

```text
Visual Production Readiness
→ reference / identity / composition / technical handoff
→ Stage 08 production
```

순서를 따른다.
