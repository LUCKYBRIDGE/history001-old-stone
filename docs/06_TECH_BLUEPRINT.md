# 구석기 역사 체험 웹게임
## Stage 06 — 기술 설계 v9 / Canonical Same-Day Socially Embodied Architecture

> 목적: Stage 01~05의 최신 R2 설계를 React/TypeScript 브라우저 앱으로 구현할 수 있도록 **최소하고 명시적이며 테스트 가능한 계약**을 고정한다.
>
> 기준선: `docs/00_CANONICAL_BASELINE.md`
>
> 이 문서는 이전 `06A_CURRICULUM_RUNTIME_CONTRACT.md`의 보정 내용을 본문에 흡수한 유일한 기술 SSOT다.

---

# 1. 기술 최상위 구조

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

Curriculum Anchor나 Social Immersion을 이유로 별도 범용 엔진 계층을 만들지 않는다.

---

# 2. 기술 스택

유지:

- React
- TypeScript
- Vite
- `useReducer` / local state
- 필요한 범위의 Context
- CSS / CSS variables
- Vitest
- React Testing Library
- user-event

Stage 07/08에서 추가하지 않을 것:

- 서버/로그인/DB
- WebGL/3D 엔진
- 범용 state machine 라이브러리
- 범용 NPC AI
- generic Scene/VFX/Curriculum/Social engine
- 대규모 Scene DSL
- procedural dialogue / procedural narrative

---

# 3. 시간 모델

```ts
export interface ExperienceSessionProgress {
  currentRole: RoleId | null;
  completedRoles: readonly RoleId[];
}

export interface SharedDayContext {
  experienceId: string;
  communityId: string;
  dayId: 'day-1';
  sharedMorningSeen: boolean;
}
```

규칙:

- `completedRoles` = 학생이 경험한 관점
- `dayId` = 세계 안의 같은 하루
- 역할 완료로 day 증가 금지
- role order가 바뀌어도 동일 day context
- 세 역할 + Common Evening 뒤에만 later-day phase 가능

---

# 4. Same-Day World Facts

필요한 만큼만 공유한다.

```ts
export interface SharedWorldFacts {
  dayId: string;
  communityId: string;
  sharedMorningId: string;
  motifIds: readonly string[];
  castIds: readonly CharacterId[];
}
```

현재 거처 형태 등은 실제 후속 구현 필요가 생길 때만 확장한다.

범용 world database를 만들지 않는다.

---

# 4A. Character Identity

R/H1/H2 같은 제작 ID와 Player-facing 이름을 분리한다.

```ts
export type CharacterId = string;

export interface CharacterIdentity {
  id: CharacterId;
  playerFacingName: string;
  reconstruction: true;
}
```

규칙:

- `id`는 state/test/persistence용 stable identity
- `playerFacingName`은 fictional reconstruction
- Player에 `r`, `h1`, `h2` 같은 내부 ID 노출 금지
- 이름을 실제 구석기 언어/실존 인물 증거처럼 취급 금지
- 정확한 외형/나이/성별은 별도 production decision 없이 이 타입이 강제하지 않음

Character sheet의 습관/과거 암시는 거대한 data-driven character engine으로 일반화하지 않는다. Stage 07.5에서는 명시적 scene authoring으로 충분하다.

---

# 5. Shared Day Event — World Truth와 사람의 기억을 분리한다

기존 Cross-Role Signal만으로는 `사건 발생`과 `누가 그 사건을 아는가`를 구분하기 어렵다.

최소 event 계약:

```ts
export type EventKnowledgeSource =
  | 'participant'
  | 'witness'
  | 'told';

export interface SharedDayEvent {
  id: string;
  dayId: 'day-1';
  participantIds: readonly CharacterId[];
  witnessIds: readonly CharacterId[];
  tags: readonly string[];
}

export interface CharacterEventKnowledge {
  characterId: CharacterId;
  eventId: string;
  source: EventKnowledgeSource;
}
```

핵심:

```text
World event happened
≠
Character participated
≠
Character witnessed
≠
Character was later told
```

Stage 07.5에서는 이 구조를 필요한 사건에만 적용한다.

예:

- 아침 도구 전달
- 귀환 말
- shared track observation
- cave/rock-shelter discovery
- late return

모든 click/beat를 event ledger에 넣지 않는다.

---

# 5A. Cross-Role Signal

`SharedSignal`은 후속 관점/Common Evening에서 필요한 **질적 요약 신호**로 유지한다.

좋은 signal:

- `hunt-returned-late`
- `hunt-returned-with-food`
- `hunt-returned-empty-handed`
- `hunt-cave-shelter-noticed`
- `hunt-cave-shelter-inspected`
- `hunt-shared-carry`

금지:

- 모든 클릭 기록
- transient animation state
- role reducer step 전체 공유
- terminology cue open/close 상태 공유

교과 개념 자체보다 **후속 관점에서 의미가 달라지는 세계 사건**을 공유한다.

단, `sharedSignals`가 존재한다고 모든 character가 그 사실을 안다고 해석하지 않는다.

---

# 6. RoleCompletion

```ts
export interface RoleCompletion<TResultDetail = unknown> {
  roleId: RoleId;
  completed: true;
  sharedSignals: readonly SharedSignal[];
  detail: TResultDetail;
}
```

원칙:

- 역할 detail은 역할이 소유
- Common은 필요한 질적 signal만 읽음
- score/HP/EXP 없음
- perspective knowledge는 `sharedSignals`와 별도 의미

---

# 6A. Perspective Knowledge

각 관점은 자신이 알 수 있는 사건만 접근한다.

```ts
export interface PerspectiveKnowledge {
  characterId: CharacterId;
  knownEvents: readonly CharacterEventKnowledge[];
}
```

규칙:

- 이전 역할의 reducer/detail을 통째로 다음 역할에 주입 금지
- `World Truth`와 `Known Events`를 구분
- `told` knowledge는 실제 전달 사건 뒤에만 생성
- 교과 핵심 invariant는 특정 character knowledge에만 갇히지 않도록 다른 역할/공통 conceptualization에서 회수 가능

Stage 07.5에서는 selector/framework를 과설계하지 않는다. 필요한 scene에서 명시적으로 읽는 것으로 충분하다.

---

# 6B. Knowledge Transfer

다른 사람에게 정보를 전달하는 것 자체가 scene event가 될 수 있다.

예:

```text
Hunt가 cave를 직접 봄
→ return
→ “오는 길에 큰 바위 아래 넓은 곳이 있었어.”
→ Camp character가 told knowledge를 얻음
```

자동 전지적 동기화 금지.

---

# 7. Scene-State와 Beat

## Scene state

Reducer/state에 올릴 가치:

- 목표 변화
- 직접 행동 변화
- 위치/시간/결과/관계 변화
- 후속 signal 필요
- perspective knowledge가 실제로 바뀌는 사건

## Beat

별도 reducer state가 필요 없는 것:

- actor stop / gaze
- sound drop
- hand transition
- dialogue
- terminology reveal
- focus/jolt/exposure

# **Scene ≠ Beat**

NPC autonomy를 표현하기 위해 모든 작은 몸짓을 reducer state로 승격하지 않는다.

---

# 8. Curriculum Anchor IDs

```ts
export type CurriculumAnchorId =
  | 'paleolithic-chipped-stone'
  | 'handaxe'
  | 'fire-use'
  | 'temporary-shelter'
  | 'paleolithic-hut'
  | 'cave-or-rock-shelter'
  | 'mobile-livelihood';
```

의미:

- `paleolithic-chipped-stone` = 뗀석기 상위 개념
- `handaxe` = 대표적인 구체 예인 주먹도끼
- `temporary-shelter` = Stage 07의 중립적 현재 임시 거처 proof
- `paleolithic-hut` = Camp에서 경험 뒤 명명할 막집
- `cave-or-rock-shelter` = 동굴/바위 그늘 생활

학생에게 internal ID는 노출하지 않는다.

---

# 9. Terminology Reveal

한 cue가 상위 개념과 구체 예를 함께 연결할 수 있도록 복수 anchor를 허용한다.

```ts
export interface TerminologyReveal {
  anchorIds: readonly CurriculumAnchorId[];
  title: string;
  description: string;
  teacherSummary?: string;
}
```

Stage 07 도구 예:

```ts
{
  anchorIds: ['paleolithic-chipped-stone', 'handaxe'],
  title: '뗀석기',
  description:
    '돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다. 지금 손에 든 것은 그 대표적인 예인 주먹도끼다.',
  teacherSummary: '뗀석기 → 대표적인 예: 주먹도끼',
}
```

원칙:

- 경험 뒤 명명
- 1~2문장
- modal 아님
- 다음 행동과 공존
- 중요한 감정/위협 peak와 겹치지 않음
- 같은 개념 반복 설명 금지

---

# 10. Learning Evidence

학생 점수가 아니라 QA/자동검증 내부 증거다.

```ts
export interface LearningEvidence {
  id: string;
  sourceRole: RoleId;
}
```

Stage 07 권장 evidence:

- `tool-received-in-embodied-context`
- `chipped-stone-term-revealed`
- `handaxe-term-revealed`
- `embodied-observation-performed`
- `natural-shelter-evaluated`
- `cave-shelter-term-revealed`

Stage 08 이후 실제 생활 행동 뒤에만:

- `tool-reused-in-living-action`
- `handaxe-multiple-uses-experienced`

추가 가능.

# **receive/naming ≠ 다용도 사용 학습 완료**

---

# 11. Role Perspective Contract

```ts
export interface RolePerspectiveContext {
  roleId: RoleId;
  characterId: CharacterId;
  dayId: string;
}
```

`perspectiveLabel`을 Player-facing 역할 제목의 필수 계약으로 두지 않는다.

Player:

- 관점은 body/item/spatial continuity로 알아차리는 것을 우선
- 역할 시작 label은 필요한 경우에만 짧게 사용하며 제작 기능 설명 금지
- 역할 내부에서 다른 역할 사실을 전지적으로 보여주지 않음
- 교과 설명도 현재 경험과 연결된 범위만 짧게 제공

Teacher/Debug는 exact role/character ID를 볼 수 있다.

---

# 12. Embodied Presentation

```ts
export type BodyPose =
  | 'fire-rest'
  | 'receive-tool'
  | 'tool-inspect'
  | 'standing-with-tool'
  | 'walking-with-tool'
  | 'crouch-observe'
  | 'cave-inspect'
  | 'camp-fire-rest';

export interface BodyPresentation {
  pose: BodyPose;
  heldItem: 'stone-handaxe' | null;
  emotionalTone?: 'neutral' | 'alert' | 'hesitant' | 'relieved' | 'curious';
}
```

Stage 07은 CSS/DOM layout proof로 충분하다.

검증:

- body placement
- held-item continuity
- actor relation
- current shelter / cave spatial composition

몸/도구뿐 아니라 **어떤 character body인지**가 perspective transition에서 명시적으로 관리돼야 한다.

---

# 13. Held Item Continuity

```text
before RECEIVE_TOOL → null
RECEIVE_TOOL 이후 → stone-handaxe
perspective 전환 뒤 다른 사람 몸 → null 또는 해당 역할 item
```

Hunt 도구가 관점 전환 뒤 자동으로 다른 사람 몸에 붙지 않는다.

같은 물체가 멀리 다른 사람의 손에 보이는 것은 world object continuity이며, 현재 body held item과 다르다.

---

# 14. Current Temporary Shelter

Stage 07 proof에서 동굴 발견 전에 현재 공동체의 생활 공간 존재가 보여야 한다.

최소:

- 새벽 불 가까이에 비대칭 임시 구조물/덮개 primitive
- 출발 때 불·사람·현재 거처가 함께 멀어짐
- 학생에게 아직 `막집`을 강제 명명하지 않음

목적:

- `동굴 = 유일한 집` 오개념 방지
- 현재 생활 공간에서 출발했다는 spatial continuity
- 같은 장소에 남아 계속 생활하는 사람이 있다는 social continuity

Stage 07 placeholder가 현대 집/텐트 아이콘처럼 보이지 않는지 Human QA에서 확인한다.

---

# 15. Natural Shelter / Cave

Skeleton 상태는 step 자체로 충분하면 별도 generic model을 만들지 않는다.

필요 primitive:

- rock opening
- entrance/interior exposure difference
- dry ground cue
- optional animal sign
- actor position
- player body/held tool

필요 없는 것:

- 3D cave navigation
- procedural generation
- collision engine
- shelter simulator

누가 cave를 직접 보았는지는 필요한 경우 SharedDayEvent witness/participant로 기록한다.

---

# 16. Cave Terminology Guardrail

Student-facing:

> **동굴 / 바위 그늘**  
> 구석기 사람들은 이런 자연 공간도 생활 공간으로 이용했다.

이 시점에 아직 직접 경험하지 않은 `막집`을 비교 설명으로 끌어오지 않는다.

막집은 Camp에서 current temporary shelter를 실제로 다룬 뒤 명명한다.

---

# 17. Historical Reconstruction Metadata

두 층을 구분한다.

## Source-supported Fact

예:

- 주먹도끼라는 도구
- 동굴/바위 그늘 생활

## Reconstructed Event / Character

예:

- fictional Player-facing 이름
- R/H1/H2에 대응하는 구체 인물의 습관/shared past
- 특정 아침에 특정 사람이 도구를 건넴
- 이 Day 1 공동체의 구체 거처 배치/인원 구성
- Hunt 인물들이 특정 자연 거처 후보를 발견함
- 어떤 사람이 어떤 정보를 나중에 들음

Player는 관리 metadata를 보지 않는다.
Teacher/Debug에서 확인 가능하게 한다.

프로젝트 전체에 범용 reconstruction engine을 만들지는 않는다.

---

# 18. Relationship / Emotional Consequence

관계는 점수로 저장하지 않는다.

```ts
export type RelationshipMemoryId =
  | 'noticed-r-before-departure'
  | 'pressed-on-despite-fatigue'
  | 'stayed-close-under-danger'
  | 'shared-carry-burden'
  | 'returned-late'
  | 'shared-new-shelter-discovery';
```

이 타입은 필요한 초기 예시이며, 모든 관계를 하나의 거대 union으로 중앙집중화할 필요는 없다.

`guilt=true` 같은 감정 boolean은 기본적으로 만들지 않는다.

사건과 사람 반응이 감정을 만든다.

관계 memory는 가능한 한 `SharedDayEvent`와 연결된 질적 결과로 다룬다.

---

# 19. Choice Fairness

테스트 가능한 조건:

- 선택 전에 관련 observation 존재
- 결과가 앞선 정보와 연결
- 더 나쁜 결과 허용
- 학생 인격 score 없음
- 필수 교과 개념을 특정 선택 하나가 독점하지 않음
- 다른 character의 반응이 hidden moral score가 아니라 실제 event/knowledge에 연결

---

# 20. Screen Treatment

```ts
export type ScreenTreatmentIntensity =
  | 'none'
  | 'subtle'
  | 'accent'
  | 'strong-accent';
```

Stage 07 preset:

```ts
export type SkeletonTreatmentPreset =
  | 'none'
  | 'fire-warmth'
  | 'tool-focus'
  | 'standing-shift'
  | 'walking-air'
  | 'crouch-focus'
  | 'cave-exposure'
  | 'perspective-transition';
```

# **World/Actor → Body → Treatment**

---

# 21. Reduced Effects

Reduced Effects에서도 유지:

- body/item continuity
- terminology reveal
- cave/current shelter 정보
- actor 반응
- 선택/결과
- learning evidence
- character identity / knowledge meaning

줄여도 됨:

- sway
- jolt
- fade
- focus animation
- transition motion

---

# 22. Scaffold

범용 tutorial engine 없음.

```text
actor gesture / gaze
→ environmental cue
→ weak hotspot
→ short action label
→ explicit hint
```

Terminology Reveal과 Scaffold는 다른 개념이다.

Character habit과 NPC 행동이 가능한 곳에서는 tutorial text보다 먼저 cue 역할을 한다.

---

# 23. Player / Teacher / Debug

## Player

보이면 안 됨:

- Stage 번호
- reducer ID
- internal curriculum ID
- evidence ID
- reconstruction management metadata
- R/H1/H2 같은 authoring ID
- `observation anchor`, `return anchor` 같은 제작 기능
- debug toolbar

보일 수 있음:

- 필요한 경우의 최소 role orientation
- fictional Player-facing 이름
- 직접 행동
- 짧은 terminology reveal
- 세계/몸/사람

## Teacher

- current major step
- reset
- reduced effects
- curriculum summary
- fact/reconstruction note
- 필요한 경우 character authoring identity / Player-facing name mapping

## Debug

- exact step
- held item
- treatment
- evidence
- curriculum anchors
- reconstruction metadata
- character ID
- relevant event/knowledge state

---

# 24. Stage 07 / 07.5 Skeleton State

현재 Stage 07 baseline은 다음 계열 step을 사용한다.

```ts
export type SkeletonStep =
  | 'orientation'
  | 'fire'
  | 'receive-tool'
  | 'tool-reveal'
  | 'join'
  | 'depart'
  | 'crouch-proof'
  | 'travel'
  | 'h2-notice'
  | 'cave-notice'
  | 'cave-inspect'
  | 'perspective-proof';
```

Skeleton 전용.

Generic Scene DSL로 승격하지 않는다.

Social Immersion 보강 때문에 모든 NPC 행동을 새 step으로 만들지 않는다.

---

# 25. Stage 07.5 Social Immersion Acceptance

1. Player에 dev chrome 없음.
2. Player-facing 역할 기능 설명이 없음.
3. 현재 body/관점이 body/item/world continuity로 이해 가능.
4. 새벽 불과 current temporary shelter가 같은 세계에 존재.
5. Player가 눈을 뜨기 전에도 일부 world/social beat가 존재 가능.
6. 핵심 인물이 authoring ID가 아니라 개별 사람으로 Player에게 보임.
7. 특정 아침에 돌도구를 받음.
8. 도구를 받은 뒤 `뗀석기 → 주먹도끼` 관계를 정확히 명명.
9. 동일 도구가 내 몸에 유지.
10. 출발 뒤 current shelter가 멀어짐.
11. 다른 사람과 shared observation 가능.
12. 한동안 이동한 뒤 natural shelter 후보 발견.
13. cave가 자동 새 집 판정 아님.
14. inspect 뒤 `동굴/바위 그늘` 짧은 연결.
15. perspective transition에서 다른 body로 item이 잘못 전이되지 않음.
16. 다른 body가 알 수 없는 사건을 자동으로 알지 않음.
17. reduced effects parity.
18. Teacher/Debug에서 fact/reconstruction 및 authoring identity 구분.
19. Player에 internal anchor/evidence/reconstruction/event metadata 없음.

---

# 26. 자동 테스트 전략

검증:

- player no dev chrome
- no Player-facing R/H1/H2 authoring labels
- tool receive
- terminology hierarchy/timing
- multiple internal anchor IDs
- held-item continuity
- body pose
- current temporary shelter before cave
- cave notice → inspect
- no premature `막집` comparison
- fact/reconstruction Teacher note
- perspective transition
- role/character body item boundary
- explicit known/unknown event behavior when implemented
- reduced effects
- debug-only internal evidence/event metadata

자동 테스트가 증명하지 않는 것:

- 이름/사건 때문에 사람이 실제 기억되는지
- NPC가 Player 없이도 살아 있는 것처럼 느껴지는지
- 손/도구 비율 자연스러움
- current shelter가 역사적으로/시각적으로 납득되는지
- cave 공간감
- terminology cue가 실제 몰입을 덜 깨는지
- 관점 전환을 설명 없이 실제로 이해하는지
- 학생 개념 이해/오개념

Human QA가 책임진다.

---

# 27. Persistence

Stage 07 Skeleton은 짧으므로 모든 beat 저장 금지.

Stage 07.5의 social event도 모든 순간을 persistence하지 않는다.

Stage 08 이후 stable checkpoint가 필요할 때만 다음 중 필요한 최소값을 저장한다.

- role progress
- 필요한 SharedSignal
- 필요한 SharedDayEvent
- perspective knowledge transfer 결과

전체 대화 로그/모든 시선/모든 animation state 저장 금지.

---

# 28. Common Evening / Later-Day 확장

향후 completion/event signal:

- cave discovery
- actual tool use
- late return
- shared danger
- knowledge transfer

등을 후속 표현에 사용할 수 있다.

Multi-day에서는:

- 자원 감소
- 거리 증가
- current shelter burden
- new shelter candidate

를 결합한다.

Generic simulation engine은 만들지 않는다.

---

# 29. Stage 06 Acceptance Gate

- same-day world time 계약 유지
- Character identity와 Player-facing fictional name이 분리되는가?
- World event / participant / witness / told knowledge를 최소 계약으로 구분하는가?
- `sharedSignals`를 전지적 character knowledge로 오해하지 않는가?
- 다른 관점이 이전 역할의 detail을 통째로 상속하지 않는가?
- Curriculum Anchor가 최소 타입/QA 수준인가?
- `뗀석기 → 주먹도끼` 위계가 runtime에서도 보존되는가?
- Terminology Reveal이 local Beat인가?
- receive/naming과 실제 기능 사용 evidence가 분리되는가?
- current shelter / 막집 / cave 용어가 분리되는가?
- natural shelter proof를 2D DOM/CSS로 구현 가능한가?
- fact/reconstruction을 Player와 관리 surface에서 분리 가능한가?
- Player/Teacher/Debug가 분리되는가?
- reduced effects parity가 있는가?
- Legacy Hunt baseline을 보존하는가?
- generic NPC/social engine 과설계가 없는가?

이 문서가 Stage 06 기술 SSOT다.
