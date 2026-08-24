# 구석기 역사 체험 웹게임
## 6단계 결과물 — 기술 설계 v2

> 목적: 여러 ChatGPT 개발 세션이 이어져도 교육·몰입·역할 경계가 무너지지 않도록 최소 기술 구조와 테스트 전략을 고정한다.
>
> 상위 기준: `AGENTS.md`, `docs/01_PROJECT_CORE.md`, `docs/02_EXPERIENCE_STRUCTURE.md`, `docs/05_ROLE_EXPERIENCE_MAP.md`, `docs/07_IMMERSION_NARRATIVE_BIBLE.md`.

---

# 1. 기술 구조

초기 구조는 계속 다음을 유지한다.

# **App → Experience Orchestrator → Common Experience / Role Features → Shared UI**

핵심:

1. Common Shell은 큰 체험 흐름만 책임진다.
2. Hunt / Gather / Camp는 독립 Feature다.
3. Common Shell은 역할 내부 장면/게임 규칙을 모른다.
4. Role Feature는 질적 `RoleCompletion`만 반환한다.
5. 학생의 플레이 순서와 세계 안 같은 하루의 시간은 분리한다.
6. 공통 저녁은 결과표가 아니라 Integration Feature다.
7. score / HP / EXP / ranking을 전역 기본 구조로 만들지 않는다.
8. 몰입을 위해 범용 게임엔진을 만들지 않는다.

---

# 2. 기술 스택

- React
- TypeScript
- Vite
- React `useReducer`
- 필요한 범위의 Context
- CSS Variables + 컴포넌트/Feature 단위 CSS
- Vitest
- React Testing Library
- `@testing-library/user-event`
- 핵심 몰입 경로에는 Playwright E2E 도입 권장

초기에는 서버, 로그인, DB, 원격 저장이 없다.

Redux/Zustand/XState/대형 UI 프레임워크는 실제 필요가 생기기 전까지 도입하지 않는다.

---

# 3. Player Experience와 Development Chrome 분리

Stage 09-A에서 개발용 메타 UI가 몰입을 깨는 위험이 확인됐다.

따라서 기술적으로 **학생용 체험 화면과 개발 정보 표시를 분리**한다.

## Player-facing 기본

보이는 것:

- 세계 상황
- 사람/대사
- 환경 단서
- 행동 가능한 요소
- 필요한 최소 진행 UI

보이지 않는 것:

- `Stage 09-C`
- `Vertical Slice`
- role id
- internal stage key
- SharedSignal
- 테스트 경로
- 개발 설명

## Development / Debug mode

필요할 때만 다음을 별도 surface에 표시할 수 있다.

- Experience phase
- active role
- role internal stage
- DayMoment
- RoleCompletion detail
- persistence 상태

구현 방식은 가장 단순한 것을 사용한다. 이를 위해 전역 debug framework를 만들지 않는다.

---

# 4. 시간 모델

학생의 플레이 순서 ≠ 세계 안 시간 순서.

## Experience Progress

- common morning 완료
- 어떤 역할을 완료했는지
- 현재 Perspective Bridge
- 모든 역할 완료 여부
- common evening 진입 여부

## In-world DayMoment

역할 내부 같은 하루의 시간 표현:

```ts
export type DayMoment =
  | 'morning'
  | 'late-morning'
  | 'midday'
  | 'afternoon'
  | 'dusk'
  | 'evening';
```

Hunt가 dusk에 끝났다고 Gather가 dusk에 시작하지 않는다.

---

# 5. Experience Phase

Common Shell은 큰 phase만 관리한다.

```ts
export type ExperiencePhase =
  | 'start'
  | 'common-morning'
  | 'role-entry'
  | 'role-playing'
  | 'perspective-bridge'
  | 'common-evening'
  | 'multi-day'
  | 'migration'
  | 'new-home'
  | 'concept-bridge'
  | 'complete';
```

몰입 강화를 이유로 역할 내부 Scene을 Common phase에 추가하지 않는다.

---

# 6. ExperiencePlan

최종 production은 세 역할 모두를 요구한다.

```ts
export type RoleId = 'hunt' | 'gather' | 'camp';

export type RoleOrderPolicy =
  | { kind: 'free-order' }
  | { kind: 'configured'; order: readonly RoleId[] };

export interface ExperiencePlan {
  id: string;
  requiredRoles: readonly RoleId[];
  roleOrderPolicy: RoleOrderPolicy;
}
```

Development/Test Plan은 Hunt-only 같은 부분 실행을 허용한다.

Production Plan과 Dev/Test Plan을 혼동하지 않는다.

---

# 7. Common Morning의 기술 책임

Common Morning은 이제 단순 안내 컴포넌트가 아니라 **세계 진입 경험**이다.

하지만 Common Shell에 역할 내부 규칙을 넣지는 않는다.

Common Morning이 책임질 수 있는 것:

- 공통 장소/불/아침 분위기
- 공동체 사람들의 존재
- 오늘의 생활 문제를 상황으로 드러내기
- 최소한의 첫 행동
- 역할로 갈라지는 순간

Role-specific 사냥 흔적/채집 탐색/Camp 관리 규칙은 넣지 않는다.

---

# 8. Shared Immersion UI Primitive

역할 공통으로 재사용할 수 있는 것은 **표현 도구**뿐이다.

후보:

- `ExperienceFrame` — 전체 플레이 surface
- `AmbientLayer` — 배경/빛/환경 표현
- `DialogueLine` — 짧은 인물 대사
- `ObservationPrompt` — 짧은 관찰 유도
- `ActionChoice` — 행동 선택 UI
- `TransitionBeat` — 조작 없이 감정/공간 전환
- `DebugPanel` — development only

중요:

## **Shared UI는 역할의 규칙을 알지 않는다.**

예를 들어 `ClueTracker`, `HuntDangerMeter` 같은 Hunt 의미를 Shared UI에 넣지 않는다.

또한 `Scene Engine`을 만들지 않는다. 각 Role Feature가 자신의 흐름을 소유한다.

---

# 9. Role Feature 계약

기본 계약은 계속 단순하게 유지한다.

```ts
export interface SharedDayContext {
  experienceId: string;
  communityId: string;
  sharedMorningSeen: boolean;
}

export interface RoleFeatureProps<TResult = unknown> {
  dayContext: Readonly<SharedDayContext>;
  onComplete: (result: TResult) => void;
}
```

몰입에 필요한 `사람/관계` 정보가 실제 구현에서 공통 컨텍스트로 필요해질 경우, 먼저 공통성 여부를 검토한다.

Hunt 전용 동행자 상태를 Common에 올리지 않는다.

---

# 10. RoleCompletion

점수가 아니라 의미 있는 질적 신호를 전달한다.

```ts
export interface SharedSignal {
  id: string;
  sourceRole: RoleId;
  tags: readonly string[];
}

export interface RoleCompletion<TResultDetail = unknown> {
  roleId: RoleId;
  completed: true;
  sharedSignals: readonly SharedSignal[];
  detail: TResultDetail;
}
```

- `detail`은 Role Feature 소유
- Common Shell은 detail을 해석하지 않음
- Integration이 질적 signal을 서사로 변환

---

# 11. 몰입 연속성 데이터

몰입을 위해 모든 것을 전역 상태로 저장하지 않는다.

다음 기준을 적용한다.

## 역할 내부 상태로 둘 것

- Hunt에서 본 랜드마크
- 동행자의 Hunt 반응
- 선택한 추적 판단
- 역할 내부 감각/연출 state

## 공통으로 전달할 가능성이 있는 것

- 역할 완료 여부
- 공통 저녁에 의미 있는 질적 결과
- 다른 관점에서 회수해야 하는 최소 공동체 signal

`아침에 말한 사람이 누구인가` 같은 관계 정보가 세 역할에 실제로 공유되어야 할 때만 SharedDayContext 또는 Integration input 확장을 검토한다.

먼저 문서와 prototype으로 필요성을 증명한다.

---

# 12. 사운드/이미지 자산 연결

최종 자산은 이후 제작하지만 기술 구조는 다음을 고려한다.

## Asset 의미

자산은 장식이 아니라 다음 역할을 할 수 있다.

- 장소 식별
- 시간 변화
- 거리 변화
- 관계 인물 식별
- 상호작용 단서
- 모티프 회수

## 구현 원칙

- asset key를 역할/장면 코드와 명확히 연결
- 최종 자산이 없어도 CSS/placeholder로 기능 검증 가능
- 오디오 자동재생 제한을 고려해 첫 사용자 상호작용 이후 활성화
- mute / volume 접근성을 고려
- 중요한 정보를 소리 하나에만 의존하지 않음
- 이미지 하나에만 필수 조작 정보를 숨기지 않음

---

# 13. 접근성은 몰입과 충돌하지 않는다

- 버튼/상호작용 영역은 초등학생이 클릭하기 충분한 크기
- 색만으로 상태를 전달하지 않음
- 소리 신호는 시각적 보조 제공
- 긴 텍스트를 피하되 필요한 내용은 읽을 수 있게 유지
- reduced motion 선호를 고려
- 키보드 포커스가 필요한 기본 웹 접근성을 유지

몰입을 이유로 조작법을 숨겨 학생이 막히게 하지 않는다.

---

# 14. 테스트 전략 v2

## Unit

- reducer guardrail
- 결과 계약
- 역할 내부 주요 선택 효과

## Integration

- Common Morning → Role Feature → RoleCompletion → Perspective Bridge
- role order
- persistence
- Common Evening integration

## Player-facing UI tests

Stage 09-C부터 추가할 것:

- 개발 메타 문자열이 기본 학생 화면에 없음
- 첫 행동이 실제 user-event로 가능
- Hunt의 핵심 모티프가 적절한 시점에 나타남
- 빈손/성공 모두 귀환

## E2E / Immersion smoke

Playwright 도입 시 최소 경로:

- 앱 진입 → Cold Open → Hunt 출발 → 불빛 → Perspective Bridge
- 기본 viewport에서 진행 막힘 없음
- debug UI 기본 비노출

자동화가 `몰입감을 느꼈다`를 증명할 수는 없다. 그 부분은 교사/학생 플레이테스트가 책임진다.

---

# 15. Persistence

초기 persistence는 안정된 checkpoint만 저장한다.

저장 후보:

- completed common morning
- completed roles
- current common phase
- role completion result

짧은 애니메이션/대사 중간 상태까지 무리하게 저장하지 않는다.

개인정보를 저장하지 않는다.

---

# 16. Stage 09-C 기술 변경 원칙

Hunt v0.2 몰입 구현에서 우선순위:

1. Player-facing / debug surface 분리
2. Common Morning Cold Open
3. Shared UI를 표현 primitive 수준에서만 보완
4. HuntFeature의 서사 연속성 강화
5. 기존 Hunt reducer의 핵심 의미를 가능한 한 재사용
6. 필요할 때만 Hunt 내부 state 추가
7. Common reducer 변경은 최소화

하지 않을 것:

- 몰입용 범용 Scene Engine
- NPC 시스템 프레임워크
- 대화 트리 엔진
- 전역 퀘스트 시스템
- 오디오 엔진 과설계

---

# 17. 기술 Acceptance Criteria

- 기존 아키텍처 경계 유지
- 학생 화면에서 개발 메타 UI 분리 가능
- Common Morning이 몰입형 Cold Open을 담을 수 있음
- Shared UI가 역할 규칙을 소유하지 않음
- Hunt v0.2가 기존 질적 RoleCompletion을 유지
- 동일 하루 시간 모델 유지
- score/HP/EXP/ranking 구조 없음
- 자동 테스트 + 교사 몰입 테스트를 별도 품질 게이트로 유지
