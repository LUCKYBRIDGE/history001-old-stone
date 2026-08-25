# 구석기 역사 체험 웹게임
## Stage 06 — 기술 설계 v7 / Same-Day Embodied Role Architecture + Curriculum Anchors

> 목적: Stage 01~05의 최신 R2 설계를 React/TypeScript 브라우저 앱으로 구현할 수 있도록 **최소하고 명시적이며 테스트 가능한 계약**을 고정한다. 기존 Hunt v0.1은 Legacy Functional Prototype이며, 새 설계와 충돌하면 R2 계약을 우선한다.
>
> 상위 기준:
> - `AGENTS.md`
> - `docs/01_PROJECT_CORE.md`
> - `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
> - `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
> - `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`
> - `docs/01E_CURRICULUM_TEXTBOOK_ANCHORS.md`
> - `docs/02_EXPERIENCE_STRUCTURE.md`
> - `docs/03_HUNT_STORY.md`
> - `docs/04_HUNT_PLAYFLOW.md`
> - `docs/05_ROLE_EXPERIENCE_MAP.md`

---

# 1. 기술 최상위 구조

```text
App
→ Experience Orchestrator
→ Same-Day World / Integration
→ Common Experience / Role Features
→ Embodied Presentation
```

Curriculum Anchor는 별도 거대한 엔진 계층을 만들지 않는다.

기존 역할/프레젠테이션 구조 안에서 작은 명시적 계약으로 처리한다.

---

# 2. 기술 스택

유지:

- React
- TypeScript
- Vite
- `useReducer` / local component state
- 필요한 범위의 Context
- CSS / CSS variables
- Vitest
- React Testing Library
- `@testing-library/user-event`

Stage 07에서 추가하지 않을 것:

- 서버
- 로그인
- DB
- WebGL/3D 엔진
- 범용 state machine 라이브러리
- NPC AI
- generic VFX engine
- generic Curriculum Engine
- 대규모 Scene DSL

# **교과 연계가 추가됐다고 architecture를 과설계하지 않는다.**

---

# 3. 시간 모델 — Play Sequence와 World Time 분리

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

- `completedRoles`는 학생이 플레이한 관점.
- `dayId`는 세계 안의 같은 하루.
- 역할 완료로 `dayId` 증가 금지.
- 역할 순서를 바꿔도 동일 day context 전달.
- 세 역할 + Common Evening 후 later-days phase 시작 가능.

---

# 4. Same-Day World Facts

필요한 만큼만 공유한다.

예:

```ts
export interface SharedWorldFacts {
  dayId: string;
  communityId: string;
  sharedMorningId: string;
  motifIds: readonly string[];
  castIds: readonly string[];
  currentShelterKind?: 'temporary-open-shelter' | 'rock-overhang' | 'cave';
}
```

`currentShelterKind`는 실제 구현 필요가 생긴 뒤 도입해도 된다.

Stage 07에서 미리 범용 world database를 만들지 않는다.

---

# 5. Cross-Role Signal

기존 `SharedSignal` 형태를 우선 유지한다.

좋은 signal:

- `hunt-returned-late`
- `hunt-returned-with-food`
- `hunt-cave-shelter-noticed`
- `hunt-cave-shelter-inspected`
- `hunt-shared-carry`

금지:

- 모든 클릭 기록
- transient animation state
- role 내부 reducer step 전체 노출
- curriculum popup의 open/close 상태를 cross-role에 저장

# **교과 개념 자체를 signal로 공유하기보다, 후속 역할에서 의미가 달라지는 세계 사건만 공유한다.**

---

# 6. RoleCompletion은 단순하게 유지

```ts
export interface RoleCompletion<TResultDetail = unknown> {
  roleId: RoleId;
  completed: true;
  sharedSignals: readonly SharedSignal[];
  detail: TResultDetail;
}
```

원칙:

- 역할 내부 detail은 역할이 소유.
- Common은 필요한 질적 signal만 읽음.
- 점수/HP/EXP 추가 금지.
- Curriculum Anchor 때문에 전역 배열을 무분별하게 추가하지 않음.

---

# 7. Scene-State와 Cinematic / Curriculum Beat

## Scene state

Reducer/state에 올릴 가치:

- 목표가 달라짐
- 직접 행동 가능성이 달라짐
- 위치/시간/결과/관계가 의미 있게 달라짐
- 후속 signal이 필요함

## Beat

별도 reducer stage가 필요 없는 것:

- actor 정지
- gaze
- sound drop
- jolt/focus
- 손 transition
- 대사 한 줄
- **짧은 `뗀석기 / 주먹도끼` terminology reveal**
- 동굴 입구의 밝기/노출 변화

# **용어 reveal을 Scene Engine으로 만들지 않는다.**

---

# 8. Curriculum Anchor 최소 타입

Stage 07에서 필요한 경우 다음 정도면 충분하다.

```ts
export type CurriculumAnchorId =
  | 'paleolithic-chipped-stone'
  | 'handaxe'
  | 'fire-use'
  | 'temporary-shelter'
  | 'cave-or-rock-shelter'
  | 'mobile-livelihood';
```

이 타입은 QA/문서 대응을 위한 안정 ID다.

학생에게 그대로 노출하지 않는다.

---

# 9. Terminology Reveal 최소 모델

범용 튜토리얼/백과사전 시스템을 만들지 않는다.

Stage 07에서는 component-local presentation으로 충분하다.

예:

```ts
export interface TerminologyReveal {
  anchorId: CurriculumAnchorId;
  title: string;
  description: string;
}
```

예시:

```ts
{
  anchorId: 'handaxe',
  title: '뗀석기 · 주먹도끼',
  description: '돌을 깨뜨리거나 떼어 만든 대표적인 도구',
}
```

원칙:

- student-facing text는 짧음.
- reveal은 행동 뒤에 나타남.
- 다음 행동을 막는 modal이 아님.
- 필요하면 `aria-live="polite"` 등으로 접근성 고려.

---

# 10. Learning Evidence

Learning Evidence는 학생 점수가 아니라 QA용 증거다.

```ts
export interface LearningEvidence {
  id: string;
  sourceRole: RoleId;
}
```

Stage 07 권장 evidence:

- `tool-received-in-embodied-context`
- `handaxe-term-revealed`
- `embodied-observation-performed`
- `natural-shelter-evaluated`

Stage 08 이후 실제 기능적 도구 사용이 구현되면:

- `tool-reused-in-living-action`
- `handaxe-multiple-uses-experienced`

를 추가할 수 있다.

# **도구를 단지 받았다는 사실을 ‘자르기/땅파기까지 학습했다’고 과장하지 않는다.**

---

# 11. Role-True Perspective Contract

```ts
export interface RolePerspectiveContext {
  roleId: RoleId;
  perspectiveLabel: string;
  dayId: string;
}
```

Player:

- 역할 시작 시 perspective label 짧게 노출 가능.
- 내부에서는 다른 역할 사실을 전지적으로 보여주지 않음.
- 교과 설명도 현재 경험과 연결된 범위만 짧게 노출.

---

# 12. Embodied Presentation

```ts
export type BodyPose =
  | 'fire-rest'
  | 'receive-tool'
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

Stage 07은 CSS shape/silhouette로 충분하다.

검증 대상:

- body placement
- held-item continuity
- actor relation
- cave/world spatial composition

---

# 13. Held Item Continuity

주먹도끼는 Scene이 바뀌어도 의미 없이 사라지면 안 된다.

Stage 07 규칙:

```text
before RECEIVE_TOOL → null
RECEIVE_TOOL 이후 → stone-handaxe
perspective 전환 후 다른 사람 몸 → null 또는 그 역할의 별도 item
```

다른 역할의 몸으로 바뀌는 순간 Hunt 도구가 자동으로 계속 붙어 있으면 안 된다.

---

# 14. Natural Shelter / Cave 상태

Stage 07 proof에 필요한 최소 상태:

```ts
export type ShelterObservation =
  | 'not-seen'
  | 'noticed'
  | 'inspected';
```

또는 Skeleton step 자체로 충분하면 별도 필드를 만들지 않아도 된다.

Stage 08 이후 실제 결과에 필요할 때만 signal을 확장한다.

# **Skeleton proof를 위해 generic shelter simulation을 만들지 않는다.**

---

# 15. Cave Scene Presentation

필요한 primitive:

- cave/rock opening shape
- entrance vs interior exposure difference
- dry ground cue
- optional animal-sign cue
- actor 위치
- player hand/body

필요 없는 것:

- 3D cave navigation
- procedural cave generation
- collision engine
- inventory system

---

# 16. Relationship / Emotional Consequence

관계는 점수로 저장하지 않는다.

예:

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

세계 사건과 사람 반응이 감정을 만든다.

---

# 17. Choice Fairness

테스트 가능한 조건:

- 선택 전에 관련 observation이 존재.
- 결과가 앞선 정보와 연결.
- 더 나쁜 결과도 허용.
- 학생 인격을 score로 평가하지 않음.
- 필수 교과 개념을 특정 선택 하나만 독점하지 않음.

특히 Cave:

- 직접 발견하지 않은 경로에서도 `동굴/바위 그늘 생활` 개념을 전체 체험 어디선가 보장.

---

# 18. Screen Treatment Contract

```ts
export type ScreenTreatmentIntensity =
  | 'none'
  | 'subtle'
  | 'accent'
  | 'strong-accent';
```

Stage 07 preset 후보:

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

Cave는 빨간 위험 화면보다 **입구와 안쪽의 명암 차**가 우선이다.

---

# 19. Reduced Effects

Reduced Effects에서도 유지:

- body/item continuity
- terminology reveal
- cave 정보
- actor 반응
- 선택/결과
- learning evidence

줄여도 되는 것:

- sway
- jolt
- fade
- focus animation
- transition motion

---

# 20. Scaffold

범용 tutorial engine 없음.

순서:

```text
actor gesture / gaze
→ environmental cue
→ weak hotspot
→ short action label
→ explicit hint
```

Terminology Reveal은 scaffold가 아니다.

개념명을 알려주는 것과 `무엇을 눌러야 하는지`를 알려주는 것은 별개다.

---

# 21. Player / Teacher / Debug 분리

## Player

보이면 안 됨:

- Stage 번호
- reducer ID
- internal curriculum ID
- evidence ID
- debug toolbar

보일 수 있음:

- role orientation
- 직접 행동
- 짧은 terminology reveal
- 세계/몸/사람

## Teacher

- 현재 major step
- reset
- reduced effects
- 필요하면 experienced curriculum anchors 요약

## Debug

- exact step
- held item
- treatment
- evidence
- curriculum reveal state

---

# 22. Stage 07 Skeleton 모델 — Revised

Stage 07 전용 상태 예:

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

이 타입은 Skeleton 전용이다.

향후 generic Scene DSL로 승격하지 않는다.

---

# 23. Stage 07 직접 구현 Acceptance

Stage 07이 실제 코드로 증명해야 하는 것:

1. Player surface에 개발 chrome 없음.
2. `사냥을 나선 사람의 관점` 명료함.
3. R에게 돌도구를 받음.
4. 도구가 내 몸에 붙음.
5. **도구를 받은 뒤 `뗀석기 / 주먹도끼`를 짧게 명명함.**
6. terminology reveal이 몰입을 완전히 막는 modal이 아님.
7. departure 후 held item continuity 유지.
8. crouch observation 가능.
9. **넓은 동굴/바위 그늘을 발견하고 살피는 proof 존재.**
10. cave가 자동 `새 집` 판정을 내리지 않음.
11. cave inspection 뒤 `동굴/바위 그늘 생활`의 짧은 교과 연결 가능.
12. perspective transition proof.
13. reduced effects에서도 같은 정보 유지.
14. Debug evidence가 학생 화면에 노출되지 않음.

---

# 24. 자동 테스트 전략

## Stage 07 tests

검증:

- player surface no dev chrome
- tool receive
- terminology reveal timing
- handaxe held-item continuity
- body pose transitions
- cave notice → cave inspect progression
- natural-shelter evidence
- perspective transition
- teacher reduced effects
- debug evidence only

자동 테스트가 증명하지 않는 것:

- 실제 손 비율 자연스러움
- cave가 실제 공간처럼 느껴지는 정도
- 용어 reveal이 감각적으로 덜 거슬리는지
- 학생이 역사적 상상력을 실제로 형성하는지

이것은 Human QA가 책임진다.

---

# 25. Persistence

Stage 07 Skeleton은 짧으므로 모든 beat 저장 금지.

Stage 08 이후 stable checkpoint가 필요할 때만 저장.

Cave observation도 단지 proof 단계라면 persistence 불필요.

---

# 26. Common Evening / Later-Day 확장

향후 역할 completion signal로:

- cave discovery
- tool use
- late return

등을 후속 표현에 사용 가능.

여러 날의 변화가 시작되면:

- 자원 감소
- 거리 증가
- current shelter burden
- new shelter candidate

를 결합할 수 있다.

이때도 generic simulation engine은 만들지 않는다.

---

# 27. 하지 않을 것

- generic Curriculum Engine
- 교과서 전체 DB
- 장문의 glossary modal 시스템
- 모든 유물에 item rarity/collection UI
- cave 3D 탐험 엔진
- 범용 shelter simulator
- 주먹도끼 inventory stats
- quiz-first learning loop
- Stage 07에서 전체 Hunt 구현

---

# 28. Stage 06 Acceptance Gate

- same-day world time 계약이 유지되는가?
- Curriculum Anchor가 최소 타입/QA 수준으로 구현 가능한가?
- terminology reveal이 작은 presentation beat인가?
- 뗀석기/주먹도끼를 행동 뒤 명명할 수 있는가?
- held-item continuity가 기술적으로 보존되는가?
- 실제 기능 사용과 단순 receive evidence를 구분하는가?
- cave/natural shelter proof를 2D DOM/CSS로 만들 수 있는가?
- cave를 generic engine 없이 상태/표현할 수 있는가?
- 핵심 교과 개념이 특정 분기에만 갇히지 않는가?
- Player/Teacher/Debug가 분리되는가?
- reduced effects에서 의미가 유지되는가?
- Legacy Hunt baseline을 보존하는가?

이 문서는 R2 Stage 07 Curriculum Anchor Skeleton revision의 직접 구현 입력이다.
