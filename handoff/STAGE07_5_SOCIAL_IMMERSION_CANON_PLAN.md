# Stage 07.5 — Social Immersion & Day 1 Character Canon Plan

> 상태: 설계/적용 계획. **새 SSOT가 아니다.**
>
> 목적: 실제 Human QA에서 반복 확인된 `사람은 보이지만 관계가 느껴지지 않음`, `역할 설명처럼 읽힘`, `누가 누구인지 기억되지 않음`, `웹페이지를 읽는 느낌` 문제를 구조적으로 해결하기 위해 기존 canonical 문서의 소유권에 맞춰 Social Immersion 결정을 적용한다.
>
> 기준 main: `e7959dc38659acb0d085280fd3a9d8b70ab672b7`
>
> 선행 완료: PR #24 `Remove role-centric Player narration from Stage 07` 병합 및 main CI PASS.

---

# 1. 왜 지금 이 작업이 우선인가

현재 자동화는 curriculum ordering, handaxe continuity, Player/Teacher/Debug boundary, same-day perspective proof를 검증한다. 그러나 실제 Human QA에서는 다음이 반복 실패했다.

- 화면에 사람이 있어도 `같이 살아온 사람`으로 느껴지지 않음
- R/H1/H2 제작 기능이 Player-facing character identity로 새어 나옴
- 화자 위치를 명확히 해도 `이 사람은 이 역할`이라는 기능적 인상이 남음
- NPC가 Player를 위한 안내 장치처럼 보임
- 관계가 shared event보다 설명문으로 전달됨
- Perspective 전환이 관계적 재해석보다 `다른 사람 화면`으로 읽힐 위험이 큼

따라서 다음 단계는 production visual이 아니라 **Social Continuity + Persistent Memory + Limited Knowledge + Embodied Presence**를 먼저 강화하는 것이다.

---

# 2. 이번 단계의 핵심 정의

## 2.1 Player는 외부인이 아니다

Player character는 구석기 세계에 처음 들어온 현대 학생이 아니다.

# **Player character는 이 Day 1 이전부터 이 공동체에서 살아온 사람이다.**

학생만 처음 이 몸과 관계에 들어온다.

따라서 Player-facing 문장은 주변 세계를 관광객에게 설명하는 문법을 피한다.

나쁜 예:

- `저 사람은 너와 함께 사는 사람이다.`
- `이 사람은 주변을 살피는 역할이다.`

좋은 방향:

- 익숙한 이름이 자연스럽게 대사에서 불림
- Player가 이미 아는 장소/사람처럼 행동함
- 학생이 반복 행동·위치·기억을 통해 그 관계를 따라잡음

---

## 2.2 Authoring ID와 Player identity를 분리한다

내부 R/H1/H2는 유지할 수 있다.

```text
R  = authoring / state / test identity
H1 = authoring / state / test identity
H2 = authoring / state / test identity
```

하지만 Player에는 다음을 노출하지 않는다.

- R/H1/H2
- `도구를 건네는 사람`
- `같이 가는 사람`
- `주변을 살피는 사람`
- `귀환 anchor`
- `관찰 담당`

# **기능은 제작자 메타데이터이고, 사람은 Player가 기억하는 개별 존재다.**

---

# 3. Fictional Naming Policy

핵심 반복 인물에는 짧은 가상 이름을 부여하는 방향을 기본으로 한다.

조건:

- 초등학생이 한두 번 듣고 구분할 수 있음
- 서로 음운적으로 충분히 다름
- 특정 현대 민족/국가의 실제 이름처럼 강하게 고정되지 않음
- `우가`, `우구` 같은 원시인 희화화 금지
- 실제 구석기 이름이라고 주장하지 않음
- 이름은 **Historical Reconstruction**임을 Teacher/Debug에서 구분 가능

현재 `아루/마루/누아`는 예시 후보일 뿐 이 문서에서 최종 lock하지 않는다.

이름은 NPC label이 아니라 관계 기억을 가능하게 하는 장치다.

금지:

```text
[아루]
도구를 건네는 사람
```

권장:

```text
멀리서 누군가 이름을 부름
→ 해당 인물이 고개를 돌림
→ 학생이 자연스럽게 이름과 얼굴/위치를 연결
```

---

# 4. Language Convention

게임의 한국어 대사는 선사시대 실제 언어 재현이 아니다.

# **알 수 없는 실제 언어의 의미를 학생이 이해할 수 있도록 현대 한국어로 번역해 제시한다.**

따라서 다음 방식은 금지한다.

- `우가! 우우! (같이 가자)`
- 단순 괴성/의성어를 원시 언어처럼 제시
- 구석기 사람이 정교한 언어를 사용하지 못했다는 인상을 주는 연출

Player 대사는 짧고 상황 의존적으로 쓴다.

예:

- `가자.`
- `잠깐.`
- `저기.`
- `늦어.`
- `돌아가자.`
- `왔네.`

서로 이미 아는 내용을 장황하게 설명하는 현대식 exposition dialogue를 피한다.

---

# 5. Character Memory Sheet 계약

핵심 반복 인물마다 장황한 설정집 대신 최소 다섯 항목을 가진다.

```text
1. Player-facing name
2. 반복 습관 / embodied habit
3. Player와 공유된 과거의 작은 암시
4. 오늘의 shared event
5. 후반 callback
```

성격 label은 Player-facing으로 쓰지 않는다.

금지:

- `다정한 사람`
- `용감한 사람`
- `관찰력이 좋은 사람`

대신 반복 행동으로 느끼게 한다.

예:

- 걱정할수록 말을 줄임
- 먼저 걷지만 Player가 늦으면 기다림
- 대화 중에도 시선이 먼 곳으로 빠짐
- 위험 때 말없이 거리를 좁힘

# **성격은 설명하는 데이터가 아니라 반복 행동에서 추론되는 인상이다.**

---

# 6. NPC Autonomy

NPC는 Player를 위해서만 존재하지 않는다.

필수 원칙:

- Player가 눈을 뜨기 전에도 생활 소리/대화/행동이 존재할 수 있음
- Player가 등장했다고 모두 Player를 바라보지 않음
- NPC끼리 짧은 대화·의견 차이·도움·무시·기다림이 가능
- 모든 대사가 Player에게 정보를 전달할 필요가 없음
- 일부 background actor는 이름 없이 자기 생활 행동만 수행 가능

목표:

# **Player가 세계의 중심이 아니라 이미 움직이고 있던 공동체에 속한 한 사람처럼 느끼게 한다.**

---

# 7. Day 1 Community Sheet

다음 canonicalization 단계에서 Day 1 공동체를 정의한다.

## 핵심 반복 인물

- R 계열: 이름/습관/shared history/오늘 사건/callback
- H1 계열: 이름/습관/shared history/오늘 사건/callback
- H2 계열: 이름/습관/shared history/오늘 사건/callback

## Player

- 기존 공동체 구성원
- Hunt는 오른손 dominant 유지
- 정확한 성별/나이/얼굴은 production reference 전까지 과도하게 lock하지 않음

## Background community

정확한 역사적 집단 규모를 사실로 가르치지 않는 fictional Day 1 구성.

가능한 생활 행동:

- 불 관리
- 재료/먹을거리 정리
- 덮개/현재 거처 손질
- 휴식
- 다른 사람과 짧은 대화

핵심 인물 3명만 존재하는 RPG party처럼 보이지 않게 한다.

---

# 8. Shared Memory Ledger

관계를 수치화하지 않는다.

금지:

- 호감도 +5
- 신뢰도 72
- 관계 레벨

내부적으로는 사건 기반 memory signal을 사용한다.

예:

```text
morning-fire-together
r-gave-player-handaxe
r-return-line
h1-waited-for-player
h1-shared-track
h2-looked-away
h2-found-rock-shelter
player-pushed-farther
returned-late
returned-with-food
returned-empty
```

Memory는 이후 다음을 바꿀 수 있다.

- 시선
- 침묵
- 대사
- 누가 먼저 움직이는가
- 기다림
- 귀환 반응
- 다음 관점에서 같은 사건의 의미

# **관계 = 기억된 사건의 후속 의미**라는 01B 원칙을 실제 runtime 계약으로 연결한다.

---

# 9. Limited Knowledge Contract

# **World Truth ≠ Character Knowledge**

각 인물은 자신이 직접 보거나 전달받은 것만 안다.

예:

- Hunt가 자연 거처 후보를 봤다고 Camp 관점이 자동으로 알지 않음
- 저녁에 Hunt 인물이 말했거나 다른 증거가 전달되면 Camp가 알 수 있음
- 같은 사건도 역할에 따라 정보량·감정·해석이 다름

필요한 기술 모델은 `docs/06_TECH_BLUEPRINT.md`가 소유한다.

최소 개념:

```text
World Event
Character Witness / Participant
Shared Memory
Knowledge Transfer
Perspective-specific Known Events
```

거대한 관계 AI/시뮬레이션 엔진은 Stage 07.5에서 만들지 않는다.

---

# 10. Cross-Perspective Relationship Contract

Perspective Shift의 목적은 `다른 사람을 플레이한다`고 설명하는 것이 아니다.

목표:

# **같은 사건이 다른 사람에게 어떤 의미였는지 뒤늦게 깨닫게 한다.**

예: 아침 도구 전달

```text
Hunt body:
내 손에 돌도구가 들어옴

다른 body:
내 손에는 돌도구가 없음
멀리 떠나는 사람의 오른손에 같은 돌이 있음
같은 불이 가까이 있음
내 입에서 아침의 귀환 말이 나옴
```

Player가 설명 제목보다 body/object/spatial continuity로 관점을 알아차리는 것을 우선한다.

---

# 11. Temporal / Spatial Social Pressure

시간과 거리를 HUD 숫자보다 세계 변화로 느끼게 한다.

시간:

- 빛의 각도
- 그림자
- 소리
- 불의 상대적 밝기
- 사람의 짧은 말 `늦어.`

거리:

- 처음에는 거처/불/사람 소리가 보이고 들림
- 점점 작아짐
- 결국 보이지 않음
- 랜드마크를 지나침
- 귀환 때 같은 랜드마크를 다시 봄

아침의 관계 대사가 뒤에서 시간/거리 압박으로 재사용돼야 한다.

---

# 12. Historical Condition = Narrative Engine

교과 요소를 별도 설명 카드로만 처리하지 않는다.

```text
불       → 유지/보호/귀환 anchor
뗀석기   → 손에 남는 생활 도구
공동체   → 서로 기다리고 부담을 나누는 관계
이동     → 거리와 귀환 비용
자연 거처 → 보호 가능성과 위험의 동시 판단
먹을거리 → 필요하지만 결과를 보장하지 않는 불확실성
```

# **역사 조건 자체가 gameplay condition과 감정의 원인이 되어야 한다.**

---

# 13. Scene Writing Grammar

Player-facing scene 기본 문법을 다음으로 강화한다.

```text
World / Person Action
→ Player Perception
→ Short Dialogue (필요할 때)
→ Direct Player Action
→ World / Person Response
→ Memory
→ Later Callback
```

피할 것:

```text
역할 설명
→ 긴 서술
→ 대사 설명
→ 버튼
```

NPC가 먼저 움직이고 Player가 알아차리는 순서를 우선한다.

---

# 14. Hunt First 5 Minutes Proof

canonicalization 이후 runtime 변경 전에 screenplay 수준으로 먼저 확정한다.

최소 검증 범위:

1. 눈을 뜨기 전에도 공동체 생활이 이미 진행 중
2. 모두가 Player를 바라보지 않음
3. 핵심 인물 이름 하나 이상이 자연스러운 대사/반응으로 식별됨
4. 도구 전달은 기능 설명 없이 손→물체→내 손 contact
5. `뗀석기 → 대표적 예: 주먹도끼` hierarchy 유지
6. 다른 핵심 인물이 Player를 기다리거나 먼저 움직임
7. 또 다른 핵심 인물은 Player와 무관하게 주변을 보거나 다른 행동을 함
8. NPC-to-NPC interaction 최소 1회
9. 출발 전 귀환 motif
10. 실제로 불/거처/사람 소리가 멀어짐
11. 첫 흔적은 NPC 설명이 아니라 행동/정지/시선→Player 직접 관찰

이 proof가 Human QA에서 사람/공간/시간 관계를 만들지 못하면 Stage 08로 가지 않는다.

---

# 15. Canonical 문서 소유권

이 계획을 새 SSOT로 승격하지 않는다.

다음 적용 PR에서 결정 소유권을 지킨다.

## `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`

소유:

- Player는 기존 공동체 구성원
- Authoring ID ≠ Player identity
- fictional naming 원칙
- character habit/shared memory/callback
- NPC autonomy
- 관계 숫자화 금지

## `docs/03_HUNT_STORY.md`

소유:

- Hunt 핵심 인물의 구체 Day 1 character memory sheet
- Hunt shared history 암시
- 오늘의 shared event/callback
- Hunt 첫 관계/감정 spine

## `docs/05_ROLE_EXPERIENCE_MAP.md`

소유:

- 같은 사람/사건의 Hunt/Gather/Camp 의미 차이
- waiting/absence/return의 cross-role 의미
- 관점별 정서 차이

## `docs/06_TECH_BLUEPRINT.md`

유일한 Technical SSOT로서 소유:

- CharacterId
- SharedEvent / SharedMemory
- Witness / Participant
- Perspective Knowledge
- Knowledge Transfer
- persistence/serialization 경계

## `docs/07_IMMERSION_NARRATIVE_BIBLE.md`

소유:

- translated dialogue convention
- action-first character writing
- NPC-to-NPC interaction
- no exposition-of-role
- sensory/time/distance/callback scene grammar

---

# 16. 이번 단계에서 확정하지 않는 것

- 실제 구석기 언어 형태
- 특정 민족/언어계통을 암시하는 이름
- 정확한 Player 성별/나이/얼굴
- 최종 character art
- 최종 공동체 인원수의 역사적 사실화
- Stage 08 전체 Hunt 구현
- production image generation
- 대규모 AI NPC 시스템

---

# 17. Human QA Acceptance

자동화로 PASS 선언할 수 없는 항목:

- 이름을 외워야 해서가 아니라 사건 때문에 인물이 기억되는가
- NPC가 역할 담당자가 아니라 사람처럼 느껴지는가
- Player가 이 공동체에 원래 속해 있었다는 느낌이 드는가
- NPC가 Player가 없어도 살고 있을 것처럼 느껴지는가
- 아침 대사가 나중에 관계/시간 압박으로 다시 의미를 갖는가
- 관점 전환에서 설명을 읽기 전에 누구 쪽인지 감각적으로 추론되는가

Stage 07 Human Gate는 계속 FAIL/PENDING으로 유지한다.

---

# 18. 실행 순서

```text
PR #24 merge + main CI PASS
↓
Social Immersion Canon Plan (this document)
↓
01B / 03 / 05 / 06 / 07 canonicalization
↓
Day 1 Community Sheet + core character naming review
↓
Hunt First 5 Minutes screenplay
↓
Technical minimal contract implementation
↓
Stage 07.5 runtime vertical slice
↓
Automated regression
↓
Human replay
↓
Human Gate decision
↓
Visual Production Readiness
↓
Stage 08
```

# **다음 실제 구현보다 먼저 canonicalization을 완료한다.**
