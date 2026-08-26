# 구석기 역사 체험 웹게임
## Stage 06 — 기술 설계 v8 / Canonical Same-Day Embodied Architecture

> 목적: Stage 01~05의 최신 R2 설계를 React/TypeScript 브라우저 앱으로 구현할 수 있도록 **최소하고 명시적이며 테스트 가능한 계약**을 고정한다.
>
> 기준선: `docs/00_CANONICAL_BASELINE.md`
>
> 이 v8은 이전 `06A_CURRICULUM_RUNTIME_CONTRACT.md`의 보정 내용을 본문에 흡수한다. 이후 기술 SSOT는 이 문서 하나다.

---

# 1. 기술 최상위 구조

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

Curriculum Anchor는 별도 엔진 계층을 만들지 않는다.

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
- NPC AI
- generic Scene/VFX/Curriculum engine
- 대규모 Scene DSL

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
  castIds: readonly string[];
}
```

현재 거처 형태 등은 실제 후속 구현 필요가 생길 때만 확장한다.

범용 world database를 만들지 않는다.

---

# 5. Cross-Role Signal

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

---

# 7. Scene-State와 Beat

## Scene state

Reducer/state에 올릴 가치:

- 목표 변화
- 직접 행동 변화
- 위치/시간/결과/관계 변화
- 후속 signal 필요

## Beat

별도 reducer state가 필요 없는 것:

- actor stop / gaze
- sound drop
- hand transition
- dialogue
- terminology reveal
- focus/jolt/exposure

# **Scene ≠ Beat**

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
  perspectiveLabel: string;
  dayId: string;
}
```

Player:

- 역할 시작 시 label 짧게 노출 가능
- 역할 내부에서 다른 역할 사실을 전지적으로 보여주지 않음
- 교과 설명도 현재 경험과 연결된 범위만 짧게 제공

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

---

# 13. Held Item Continuity

```text
before RECEIVE_TOOL → null
RECEIVE_TOOL 이후 → stone-handaxe
perspective 전환 뒤 다른 사람 몸 → null 또는 해당 역할 item
```

Hunt 도구가 관점 전환 뒤 자동으로 다른 사람 몸에 붙지 않는다.

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

## Reconstructed Event

예:

- R이 특정 아침에 도구를 건넴
- 이 Day 1 공동체의 구체 거처 배치
- Hunt 인물들이 특정 자연 거처 후보를 발견함

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

`guilt=true` 같은 감정 boolean은 기본적으로 만들지 않는다.

사건과 사람 반응이 감정을 만든다.

---

# 19. Choice Fairness

테스트 가능한 조건:

- 선택 전에 관련 observation 존재
- 결과가 앞선 정보와 연결
- 더 나쁜 결과 허용
- 학생 인격 score 없음
- 필수 교과 개념을 특정 선택 하나가 독점하지 않음

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

---

# 23. Player / Teacher / Debug

## Player

보이면 안 됨:

- Stage 번호
- reducer ID
- internal curriculum ID
- evidence ID
- reconstruction management metadata
- debug toolbar

보일 수 있음:

- role orientation
- 직접 행동
- 짧은 terminology reveal
- 세계/몸/사람

## Teacher

- current major step
- reset
- reduced effects
- curriculum summary
- fact/reconstruction note

## Debug

- exact step
- held item
- treatment
- evidence
- curriculum anchors
- reconstruction metadata

---

# 24. Stage 07 Skeleton State

```ts
export type SkeletonStep =
  | 'orientation'
  | 'fire'
  | 'receive-tool'
  | 'tool-reveal'
  | 'join'
  | 'depart'
  | 'crouch-proof'
  | 'cave-notice'
  | 'cave-inspect'
  | 'perspective-proof';
```

Skeleton 전용.

Generic Scene DSL로 승격하지 않는다.

---

# 25. Stage 07 Acceptance

1. Player에 dev chrome 없음.
2. 현재 역할 관점 명료.
3. 새벽 불과 current temporary shelter가 같은 세계에 존재.
4. R에게 돌도구를 받음.
5. 도구를 받은 뒤 `뗀석기 → 주먹도끼` 관계를 정확히 명명.
6. 동일 도구가 내 몸에 유지.
7. 출발 뒤 current shelter가 멀어짐.
8. crouch observation 가능.
9. 한동안 이동한 뒤 natural shelter 후보 발견.
10. cave가 자동 새 집 판정 아님.
11. inspect 뒤 `동굴/바위 그늘` 짧은 연결.
12. perspective transition proof.
13. reduced effects parity.
14. Teacher/Debug에서 fact/reconstruction 구분.
15. Player에 internal anchor/evidence/reconstruction metadata 없음.

---

# 26. 자동 테스트 전략

검증:

- player no dev chrome
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
- reduced effects
- debug-only internal evidence

자동 테스트가 증명하지 않는 것:

- 손/도구 비율 자연스러움
- current shelter가 역사적으로/시각적으로 납득되는지
- cave 공간감
- terminology cue가 실제 몰입을 덜 깨는지
- 학생 개념 이해/오개념

Human QA가 책임진다.

---

# 27. Persistence

Stage 07 Skeleton은 짧으므로 모든 beat 저장 금지.

Stage 08 이후 stable checkpoint가 필요할 때만 저장한다.

---

# 28. Common Evening / Later-Day 확장

향후 completion signal:

- cave discovery
- actual tool use
- late return

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
- generic engine 과설계가 없는가?

이 문서가 Stage 06 기술 SSOT다.
