# 구석기 역사 체험 웹게임
## 6단계 결과물 — ChatGPT 채팅 중심 기술 설계 v1

> 역할 관점: **교육용 인터랙티브 웹게임 소프트웨어 아키텍트 + 테크니컬 프로듀서 + 장기 세션 개발 운영 설계자**  
> 최상위 기준:
> - `AGENTS.md`
> - `docs/01_PROJECT_CORE.md`
> - `docs/02_EXPERIENCE_STRUCTURE.md`
> - `docs/04_HUNT_PLAYFLOW.md`
> - `docs/05_ROLE_EXPERIENCE_MAP.md`
> - `docs/05A_STAGE01-05_DESIGN_VALIDATION.md`
>
> 문서 목적: 여러 ChatGPT 채팅 세션이 순차적으로 구현해도 프로젝트의 교육적·게임플레이 구조가 무너지지 않도록 **최소 기술 구조, 모듈 경계, 상태 계약, 테스트 전략, 자산 연결 방식, 세션 간 코드 변경 규칙**을 확정한다.
>
> 문서 위계: 이 문서는 01~05의 기획을 구현 가능한 구조로 번역하는 기술 기준이다. 기술 편의를 이유로 상위 기획을 변경하지 않는다.
>
> 범위: Stage 07 앱 골격과 이후 역할 구현이 따라야 할 구조를 정한다. 실제 사냥·채집·머무는 콘텐츠 전체, 최종 UI 디자인, 최종 이미지·사운드, 배포 서비스, 정밀 애니메이션은 아직 구현하거나 확정하지 않는다.

---

# 1. Stage 06 최상위 기술 결론

이 프로젝트는 범용 게임엔진을 만드는 프로젝트가 아니다.

초기 기술 구조는 다음 네 층으로 나눈다.

# **App → Experience Orchestrator → Common Experience / Role Features → Shared UI**

핵심 원칙은 다음과 같다.

1. **Common Shell은 전체 하루의 흐름만 책임진다.**
2. **Hunt / Gather / Camp는 서로 다른 Feature로 독립한다.**
3. **Common Shell은 역할 내부의 플레이 루프를 알지 못한다.**
4. **역할 Feature는 완료 시 공통 경험에 필요한 의미 있는 결과만 반환한다.**
5. **학생이 역할을 플레이하는 순서와 게임 속 같은 하루의 시간은 별개다.**
6. **최종 체험은 세 역할 모두를 경험해야 완료된다.**
7. **공통 저녁은 결과표가 아니라 세 역할의 경험을 공동체 이해로 합치는 Integration Feature다.**
8. **점수·HP·EXP·랭킹을 전역 상태의 기본 구조로 만들지 않는다.**

---

# 2. 기술 스택

초기 구현은 다음을 기본으로 한다.

## Runtime

- **React**
- **TypeScript**
- **Vite**

## 상태 관리

- React `useReducer`
- 필요한 범위에서 React Context

초기에는 Redux, Zustand, XState 같은 외부 전역 상태 라이브러리를 사용하지 않는다.

이유:

- 프로젝트 규모가 아직 작다.
- 전역 상태가 복잡해지기 전에 실제 플레이를 검증해야 한다.
- 외부 상태 프레임워크가 역할별 플레이 구조를 하나의 상태기계 문법에 맞추게 만들 가능성을 줄인다.

역할 Feature 내부가 실제 구현 과정에서 복잡해져 별도 상태 모델이 필요해질 경우 **해당 Feature 내부에서만** 도입 필요성을 다시 검토한다.

## 스타일

- CSS Variables
- CSS Modules 또는 컴포넌트 단위 CSS

초기에는 Tailwind 등 추가 스타일 프레임워크를 필수 의존성으로 두지 않는다.

## 테스트

Stage 07부터:

- Vitest
- React Testing Library
- `@testing-library/user-event`

Stage 08 사냥 Vertical Slice 이후:

- Playwright 기반 핵심 E2E 테스트 추가를 권장한다.

## 서버

초기 버전에는 없다.

- 로그인 없음
- 계정 없음
- DB 없음
- 원격 저장 없음
- API 서버 없음

Vite 정적 빌드 결과만으로 실행 가능한 브라우저 앱을 목표로 한다.

---

# 3. 기술적으로 가장 중요한 시간 개념

## 학생의 플레이 순서 ≠ 게임 속 역사적 시간 순서

학생은 실제로

- 사냥을 먼저 하고
- 채집을 두 번째로 하고
- 머무름을 세 번째로

플레이할 수도 있다.

그러나 역사 세계 안에서는 세 역할이 **같은 날 동시에 진행된 관점**이다.

따라서 다음과 같은 전역 시간 모델을 사용하면 안 된다.

```text
사냥 완료 → 전역 시간 오후
채집 시작 → 오후부터 시작
머무름 시작 → 밤부터 시작
```

이것은 전체 기획과 충돌한다.

대신 기술적으로 두 종류의 시간을 구분한다.

## A. Experience Progress

학생이 앱에서 어디까지 경험했는가.

예:

- 공통 아침 완료
- 사냥 관점 완료
- 채집 관점 완료
- 머무름 관점 완료
- 공통 저녁 진입 가능

## B. In-world Day Moment

각 역할 안에서 같은 하루의 어느 순간을 보고 있는가.

예:

```ts
export type DayMoment =
  | 'morning'
  | 'late-morning'
  | 'midday'
  | 'afternoon'
  | 'dusk'
  | 'evening';
```

`DayMoment`는 역할 Feature가 같은 하루의 시간대를 표현하기 위한 공통 의미 체계다.

하지만 **역할 A의 DayMoment가 역할 B의 시작 DayMoment를 결정하지 않는다.**

역할별 플레이는 같은 하루를 서로 다른 관점에서 다시 바라보는 것이다.

이 원칙은 Stage 07부터 코드 구조에 반영한다.

---

# 4. 전체 Experience Phase

Common Shell은 전체 콘텐츠의 세부 장면을 관리하지 않고 **큰 체험 단계만** 관리한다.

초기 타입 예시:

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

Stage 07에서는 실제로 필요한 앞부분만 구현해도 된다.

하지만 이후 기능을 추가할 때 `App.tsx`에 거대한 조건문을 계속 붙이는 방식은 피한다.

`ExperienceOrchestrator`가 phase 전환을 책임진다.

---

# 5. 세 역할 경험 순서를 하드코딩하지 않는다

현재 기획에서 확정한 것은 다음이다.

# **한 학생이 사냥·채집·머무는 세 역할을 모두 경험한다.**

그러나 최종 역할 순서는 아직 검증 전이다.

따라서 코드에는 다음처럼

```ts
if (huntDone) startGather();
if (gatherDone) startCamp();
```

와 같은 순서를 박지 않는다.

대신 Experience Plan을 둔다.

예시:

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

최종 production plan의 `requiredRoles`는 세 역할 모두다.

```ts
['hunt', 'gather', 'camp']
```

순서 정책은 추후 UX 테스트 결과로 바꿀 수 있어야 한다.

## 개발용 Plan

사냥 Vertical Slice를 개발할 때는 전체 앱 구조를 망가뜨리지 않고 Hunt만 테스트할 수 있어야 한다.

따라서 테스트·개발 환경에서는

```ts
requiredRoles: ['hunt']
```

같은 별도 `ExperiencePlan`을 주입할 수 있다.

이것은 production 경험을 Hunt-only로 만드는 것이 아니다.

# **Production Plan과 Dev/Test Plan을 분리한다.**

---

# 6. Common Shell의 책임

Common Shell은 다음만 책임진다.

## 책임

- 앱 시작
- 현재 Experience Phase
- 공통 아침
- 어떤 역할이 아직 남아 있는지
- 현재 어떤 Role Feature를 실행 중인지
- 완료한 역할 목록
- 역할 완료 결과 보관
- 다음 역할 진입 또는 관점 전환
- 모든 필수 역할 완료 여부 판단
- 공통 저녁 진입
- 이후 며칠 변화·이동 단계 연결
- 최소 로컬 저장·초기화

## 책임지지 않는 것

- 사냥 흔적 판정
- 사냥 성공 확률
- 추적 로직
- 채집 공간 반복 이용 로직
- 채집 결과 변화 규칙
- 머무름 우선순위 판단
- 불 관리 게임 규칙
- 역할별 위험 이벤트
- 역할별 직접 조작 방식
- 역할별 Scene 수
- 역할별 성공/실패 정의

다시 말하면:

# **Common Shell은 게임의 교통정리를 하지만 역할의 게임플레이를 설계하지 않는다.**

---

# 7. Role Feature 계약

각 역할은 Common Shell에서 실행할 수 있는 독립 Feature다.

최소 계약은 다음 형태를 권장한다.

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

역할은 `onComplete()`를 호출하기 전까지 자신의 내부 진행을 스스로 책임진다.

Common Shell이 역할 내부의

```text
scene 1 → scene 2 → choice → minigame → danger
```

구조를 알 필요가 없다.

---

# 8. Role Result는 점수가 아니라 의미 있는 신호다

역할 완료 결과를 다음처럼 만들지 않는다.

```ts
{
  score: 840,
  stars: 3,
  foodPoints: 20
}
```

공통 저녁과 며칠 변화에 필요한 것은 **질적인 경험 상태**다.

공통 계약은 최소화한다.

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

## 원칙

- `detail`은 역할 Feature가 소유한다.
- Common Shell은 `detail`을 해석하지 않는다.
- Common Shell은 결과를 저장하고 Integration 단계로 전달한다.
- 실제 공통 저녁이 어떤 결과를 어떤 이야기로 바꿀지는 `experience/integration` 층이 맡는다.

역할별 결과 타입은 해당 역할 STORY / PLAYFLOW가 확정되었을 때 구체화한다.

Gather / Camp의 상세 결과를 Stage 06에서 미리 상상해 강제로 정의하지 않는다.

---

# 9. 공통 아침은 한 번, 관점 진입은 역할별로

최종 체험에서 공통 아침의 설명을 세 번 반복하지 않는다.

기술적으로 다음을 구분한다.

## CommonMorning

전체 체험에서 기본적으로 한 번 실행한다.

역할이 나뉘는 공동체의 아침을 보여준다.

## RoleEntry

각 역할에 들어갈 때 필요한 짧은 관점 전환이다.

예:

- 사냥하는 사람들과 함께 나간다.
- 주변에서 먹을 것을 찾는 사람들의 관점으로 전환한다.
- 머무는 곳에 남는 관점으로 전환한다.

`RoleEntry`는 공통 아침 전체를 재생하는 장치가 아니다.

---

# 10. Perspective Bridge를 둔다

한 역할을 끝낸 뒤 바로 최종 공통 저녁을 확정적으로 보여주면 세 역할을 순차 경험하는 구조와 충돌할 수 있다.

따라서 기술적으로 다음 경계를 둔다.

# **Role Feature → Perspective Bridge → 다음 Role 또는 Common Evening**

`PerspectiveBridge`의 기능:

- 방금 경험한 역할이 같은 하루의 한 관점임을 확인
- 역할 결과를 저장
- 아직 보지 않은 다른 관점이 있음을 연결
- 최종 공통 저녁을 미리 결과표처럼 소비하지 않게 함

Hunt의 `귀환 / 불빛 / 사람들에게 돌아오는 순간` 같은 역할 고유 감정은 Hunt Feature 안에 유지할 수 있다.

하지만 세 역할 결과가 실제로 하나의 생활 의미로 합쳐지는 **완전한 Common Evening Integration**은 모든 필수 역할을 경험한 뒤 실행하는 것을 기본 구조로 한다.

이 구분은 실제 UX 테스트에서 조정할 수 있지만, 기술적으로 두 개를 분리해 두어야 한다.

---

# 11. Common Evening은 Integration Feature다

공통 저녁을 다음과 같이 만들지 않는다.

```text
사냥 성공: O
채집: 7개
불 유지: 성공
총점: 90
```

공통 저녁의 입력은 역할 결과들이지만 출력은 **성적표가 아니라 하나의 공동체 하루에 대한 이해**다.

권장 구조:

```ts
export interface CommonEveningInput {
  roleResults: Readonly<Partial<Record<RoleId, RoleCompletion>>>;
  dayContext: Readonly<SharedDayContext>;
}
```

`CommonEvening`은 결과를 단순 표로 렌더링하는 컴포넌트가 아니다.

향후 `experience/integration/`에서 결과를 내러티브 맥락으로 합성한다.

예:

- 누군가는 빈손으로 돌아왔을 수 있음
- 누군가는 먹을 것을 가져옴
- 누군가는 하루 동안 거처를 이어감
- 모두의 결과가 다시 같은 불 주변에서 만남

Common Evening의 구체 콘텐츠는 이후 전체 통합 단계에서 발전시킨다.

Stage 07에서는 **통합 지점이 존재하고 역할 결과를 전달받는 것**까지만 확인하면 충분하다.

---

# 12. 전역 상태 모델

초기 상태는 작게 유지한다.

예시:

```ts
export interface ExperienceState {
  phase: ExperiencePhase;
  planId: string;
  commonMorningCompleted: boolean;
  currentRole: RoleId | null;
  completedRoles: readonly RoleId[];
  roleResults: Partial<Record<RoleId, RoleCompletion>>;
}
```

필요한 파생값은 상태에 중복 저장하지 않는다.

예:

```ts
const allRequiredRolesCompleted = plan.requiredRoles.every(
  roleId => state.completedRoles.includes(roleId)
);
```

## 전역 상태에 넣지 않을 것

- 사냥감 위치
- 추적 단계
- 채집 영역별 자원 상태
- 캠프의 개별 작업 상태
- 역할별 애니메이션 상태
- 모든 Scene ID

이들은 역할 Feature 내부 상태다.

---

# 13. 상태 변경은 명시적인 Event로 한다

Common Shell reducer에서는 다음 수준의 이벤트만 허용한다.

예:

```ts
export type ExperienceEvent =
  | { type: 'START_EXPERIENCE' }
  | { type: 'COMPLETE_COMMON_MORNING' }
  | { type: 'ENTER_ROLE'; roleId: RoleId }
  | { type: 'COMPLETE_ROLE'; result: RoleCompletion }
  | { type: 'CONTINUE_FROM_PERSPECTIVE_BRIDGE' }
  | { type: 'ENTER_COMMON_EVENING' }
  | { type: 'RESET_EXPERIENCE' };
```

Common reducer에

```text
HUNT_TRACK_FOUND
HUNT_ATTACK_FAILED
GATHER_BERRY_FOUND
CAMP_FIRE_LOW
```

같은 이벤트를 넣지 않는다.

그런 이벤트는 각 Feature 내부에서만 처리한다.

---

# 14. 권장 디렉터리 구조

Stage 07에서 다음 구조를 기본으로 한다.

```text
history001-old-stone/
│
├─ AGENTS.md
├─ PROJECT_STATUS.md
├─ CHANGELOG.md
├─ docs/
├─ visual/
├─ handoff/
│
├─ src/
│  ├─ app/
│  │  ├─ App.tsx
│  │  └─ AppShell.tsx
│  │
│  ├─ experience/
│  │  ├─ ExperienceOrchestrator.tsx
│  │  ├─ experienceReducer.ts
│  │  ├─ experienceTypes.ts
│  │  ├─ experiencePlans.ts
│  │  │
│  │  ├─ contracts/
│  │  │  ├─ role.ts
│  │  │  └─ time.ts
│  │  │
│  │  ├─ common/
│  │  │  ├─ CommonMorning/
│  │  │  ├─ PerspectiveBridge/
│  │  │  └─ CommonEvening/
│  │  │
│  │  └─ integration/
│  │
│  ├─ roles/
│  │  ├─ registry.ts
│  │  ├─ hunt/
│  │  │  ├─ HuntFeature.tsx
│  │  │  ├─ huntReducer.ts
│  │  │  ├─ huntTypes.ts
│  │  │  ├─ components/
│  │  │  └─ __tests__/
│  │  ├─ gather/
│  │  └─ camp/
│  │
│  ├─ ui/
│  │  ├─ NarrativeFrame/
│  │  ├─ ActionButton/
│  │  ├─ ChoiceList/
│  │  └─ ScreenRegion/
│  │
│  ├─ persistence/
│  │  └─ experienceStorage.ts
│  │
│  ├─ styles/
│  │  ├─ tokens.css
│  │  └─ global.css
│  │
│  ├─ main.tsx
│  └─ vite-env.d.ts
│
├─ public/
│  └─ assets/
│     ├─ approved/
│     └─ audio/
│
├─ tests/
│  └─ e2e/
│
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

`visual/`은 최종 이미지 자체가 아니라 이미지 제작 맥락·명세를 두는 저장소다.

---

# 15. 의존성 방향

코드가 시간이 지나며 서로 얽히는 것을 방지하기 위해 다음 방향을 지킨다.

```text
ui
↑
experience/contracts
↑
roles/*       experience/common/*
       \       /
        registry
           ↑
ExperienceOrchestrator
           ↑
          app
```

정확한 import 방향 원칙:

## 허용

- `roles/hunt` → `ui`
- `roles/hunt` → `experience/contracts`
- `experience/common` → `ui`
- `ExperienceOrchestrator` → `roles/registry`
- `ExperienceOrchestrator` → `experience/common`

## 금지

- Hunt → Gather import
- Hunt → Camp import
- Gather → Hunt import
- Camp → Hunt import
- Role Feature → `ExperienceOrchestrator` import
- Shared UI → 특정 역할 import
- Common Shell → 역할 내부 reducer import

역할 간 정보를 연결해야 할 때는 직접 import가 아니라 **RoleCompletion → Integration** 경로를 사용한다.

---

# 16. 범용 Scene Engine을 만들지 않는다

초기 개발에서 가장 주의할 기술적 함정이다.

다음과 같은 거대한 공통 JSON 엔진을 먼저 만들지 않는다.

```text
Scene {
  text
  choices
  minigame
  danger
  success
  failure
  nextScene
}
```

이런 구조는 Hunt에는 잘 맞아 보여도 Gather와 Camp를 같은 플레이 문법으로 밀어 넣을 가능성이 높다.

## 허용되는 공통화

- 텍스트 표시 컴포넌트
- 선택 버튼
- 화면 전환 효과
- 공통 접근성 처리
- 기본 narrative frame
- 간단한 정적 sequence helper

## 공통화하지 않는 것

- 역할의 전체 진행 규칙
- 선택 수
- 위험 이벤트 구조
- 성공/실패 구조
- 역할마다 반드시 `Scene[]` 배열을 가져야 한다는 규칙

Hunt가 자체 reducer를 쓰고, Gather는 공간 상태 모델을 쓰고, Camp는 시간·우선순위 모델을 써도 된다.

# **역할의 기술 구조가 달라도 되는 것이 이 프로젝트에서는 정상이다.**

---

# 17. Role Registry

Common Shell은 역할 컴포넌트를 직접 조건문으로 관리하지 않는다.

예시:

```ts
export interface RoleModule {
  id: RoleId;
  Component: React.ComponentType<RoleFeatureProps>;
}

export const roleRegistry: Record<RoleId, RoleModule> = {
  hunt: huntModule,
  gather: gatherModule,
  camp: campModule,
};
```

Stage 07에서 Gather / Camp는 실제 콘텐츠 구현 없이 **등록 가능한 빈 Feature Slot 또는 개발 placeholder** 수준으로 둘 수 있다.

단, placeholder가 사냥식 구조를 미리 강제해서는 안 된다.

---

# 18. 로컬 저장

초기 서버가 없으므로 브라우저 `localStorage`를 사용할 수 있다.

목적:

- 새로고침으로 전체 체험 진행이 완전히 사라지는 것을 방지
- 교실 환경에서 짧은 브라우저 문제로 진행을 잃는 위험 감소

## 저장 대상

- Experience Phase
- 완료 역할
- 역할 완료 결과
- 공통 아침 완료 여부

## 저장하지 않을 것

- 학생 이름
- 학번
- 개인정보
- 계정 정보

## 저장 시점

모든 클릭마다 저장하지 않는다.

안정적인 checkpoint에서 저장한다.

- 공통 아침 완료
- 역할 하나 완료
- 공통 저녁 완료
- 이후 큰 단계 완료

초기 Stage 07에서는 최소 저장 어댑터만 만들고 역할 내부 중간 Scene resume는 이후 실제 필요가 확인되면 추가한다.

## 버전

저장 데이터에는 schema version을 둔다.

예:

```ts
interface PersistedExperience {
  version: 1;
  state: ExperienceState;
}
```

버전이 맞지 않으면 안전하게 새 체험으로 시작한다.

---

# 19. 새 체험 시작 / 초기화

공용 기기에서 이전 학생의 진행이 남을 수 있다.

따라서 앱에는 기술적으로 명확한 Reset 경로가 있어야 한다.

- `새 체험 시작`
- `처음부터 다시 하기`

같은 UX는 이후 결정하되, reducer에는 `RESET_EXPERIENCE`를 둔다.

초기화는 서버 데이터가 아니라 로컬 진행 상태만 제거한다.

---

# 20. UI 공통 원칙

Stage 07은 최종 디자인 단계가 아니지만 다음은 처음부터 지킨다.

## 입력

- 마우스 사용 가능
- 터치 사용 가능
- 키보드 접근 가능

## 터치 영역

핵심 상호작용의 클릭/터치 영역은 작은 아이콘에만 묶지 않는다.

최소 약 44px 수준의 충분한 터치 영역을 기본 원칙으로 한다.

## 텍스트

- 긴 문단을 한 화면에 과도하게 배치하지 않음
- 핵심 행동과 상황 문구 분리
- 초등학생이 읽을 수 있는 충분한 크기

## 애니메이션

- 내용 이해를 방해하는 장식 애니메이션 금지
- `prefers-reduced-motion` 고려

## 색상

상태를 색 하나만으로 전달하지 않는다.

## 포커스

키보드 focus 표시를 제거하지 않는다.

---

# 21. 이미지 자산 연결 구조

Stage 07~13 개발 세션에서는 최종 이미지를 만들지 않는다.

## 개발 중

- CSS
- 단순 도형
- 텍스트 placeholder
- 교사가 승인한 임시 자산이 있는 경우에만 해당 파일

을 사용한다.

필요한 이미지가 생기면

`handoff/ASSET_REQUESTS.md`

에 기록한다.

## 최종 자산

승인된 파일은 이후

```text
public/assets/approved/
```

아래에 둔다.

이미지 파일 경로를 각 역할 컴포넌트 곳곳에 문자열로 직접 하드코딩하는 방식은 최소화한다.

최종 아트 단계에서는 `visual/ASSET_MANIFEST.json`을 기준으로 자산 ID와 파일을 연결할 수 있는 얇은 asset resolver를 추가한다.

Stage 07에서 완전한 Asset Management System을 만들지는 않는다.

---

# 22. Visual Context는 코드와 분리한다

이미지 제작을 위한 역사·서사적 맥락은 코드 주석으로만 남기지 않는다.

다음 문서가 장기 기준이다.

```text
visual/VISUAL_CONTEXT_BIBLE.md
visual/VISUAL_CONTINUITY_MAP.md
visual/ART_DIRECTION_BIBLE.md
visual/ASSET_SPEC.md
visual/ASSET_MANIFEST.json
```

역할 코드가 바뀌어 장면 의미가 달라지면 해당 시각 맥락 문서를 이후 단계에서 같이 업데이트한다.

---

# 23. 테스트 전략

테스트의 목적은 코드 coverage 숫자를 높이는 것이 아니라 **기획 Guardrail이 기술 변경으로 깨지지 않게 하는 것**이다.

## A. Reducer 단위 테스트

Stage 07부터 최소 다음을 테스트한다.

### 공통 흐름

- 시작 → 공통 아침
- 공통 아침 완료 → 역할 진입 가능
- 역할 완료 결과 저장
- 동일 역할 중복 완료 방지 또는 명확한 정책
- 필수 역할이 모두 끝나기 전에는 production plan에서 최종 Common Evening이 완료 상태로 가지 않음
- 모든 필수 역할 완료 → Common Evening 진입 가능
- reset 동작

### 역할 순서

- Hunt → Gather → Camp 순서만 되는 것이 아님
- Gather → Camp → Hunt 같은 순서도 상태 모델상 가능

이 테스트가 있어야 역할 순서가 코드에 몰래 하드코딩되는 것을 막을 수 있다.

## B. Common Shell 통합 테스트

실제 역할 대신 테스트용 fake role을 주입한다.

검증:

- CommonMorning은 한 번만 실행
- 역할 하나 완료 후 PerspectiveBridge로 이동
- 다음 미완료 역할로 이동 가능
- 모든 역할 결과가 CommonEvening에 전달됨
- Common Shell이 Hunt 결과 내부 필드를 직접 읽지 않음

## C. Role Feature 테스트

각 역할은 자신의 테스트를 가진다.

Hunt 테스트는 Hunt 문서 기준으로 작성하고 Gather / Camp 테스트를 Hunt 테스트 복사본으로 만들지 않는다.

## D. E2E

Hunt Vertical Slice가 실제로 구현되면 Playwright를 도입한다.

최초 필수 E2E:

- Hunt 성공 경로 → 귀환
- Hunt 실패 경로 → 귀환
- 두 결과 모두 정상적으로 공통 흐름에 결과 전달

세 역할이 완성되면:

- 세 역할 순서 변경 경로
- 세 역할 완료 → Common Evening
- 며칠 변화
- 이동
- 새 거처

까지 확장한다.

---

# 24. 역사·교육 Guardrail을 테스트 가능하게 만든다

다음 규칙은 단순 문서 문장이 아니라 코드 리뷰 체크 항목으로 사용한다.

## Guardrail 1

**역할 완료 결과에 `score`, `stars`, `rank`, `xp`가 기본 계약으로 들어가면 설계를 재검토한다.**

## Guardrail 2

Common Shell에 Hunt-specific action이 추가되면 위치가 잘못된 것인지 먼저 검토한다.

## Guardrail 3

Gather / Camp 구현 시 Hunt 컴포넌트 복사부터 시작하지 않는다.

## Guardrail 4

공통 저녁 UI가 세 역할 수치를 나란히 보여주는 결과표로 변하면 기획 충돌로 간주한다.

## Guardrail 5

학생의 실제 플레이 순서 때문에 같은 하루의 역사적 시간대가 연속 진행되면 설계 오류다.

## Guardrail 6

역할 하나를 건너뛰어도 production 경험이 완료된다면 현재 Stage 05 원칙과 충돌한다.

---

# 25. 의존성 추가 규칙

ChatGPT 개발 세션이 편의를 위해 라이브러리를 무분별하게 추가하지 않도록 한다.

새 dependency 추가 전 질문:

1. 브라우저 기본 기능이나 React로 충분히 구현할 수 없는가?
2. 이 라이브러리가 실제 사용자 경험을 개선하는가?
3. 아직 검증되지 않은 문제를 미리 해결하려는 것은 아닌가?
4. 역할별 플레이 문법을 특정 프레임워크 방식으로 강제하지 않는가?

단순 구현 편의만을 위해 큰 의존성을 추가하지 않는다.

---

# 26. ChatGPT 개발 세션의 코드 변경 규칙

새 개발 세션은 작업 시작 전에 반드시 다음을 확인한다.

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/06_TECH_BLUEPRINT.md`
6. 이번 작업에 직접 관련된 기획 문서
7. 현재 코드와 테스트

## 작업 범위 규칙

- 한 세션에서는 정해진 Feature 또는 기술 책임만 수정한다.
- 관련 없는 리팩터링을 동시에 하지 않는다.
- 다음 단계 기능을 미리 구현하지 않는다.
- 상위 기획의 의미를 코드 편의 때문에 바꾸지 않는다.
- 기존 구조와 충돌이 발견되면 임의로 우회하기보다 `KNOWN_ISSUES` 또는 handoff에 기록한다.

## 종료 전

실제 코드 변경 세션은 최소 다음을 수행한다.

- typecheck
- unit/integration test
- production build

가능한 script 예:

```text
npm run typecheck
npm test
npm run build
```

실제 package script 이름은 Stage 07에서 확정한다.

---

# 27. GitHub 문서 갱신 규칙

개발 세션 종료 시 필요에 따라 다음을 갱신한다.

- `PROJECT_STATUS.md`
- `CHANGELOG.md`
- `handoff/CURRENT_HANDOFF.md`
- `handoff/TEST_REPORT.md`
- `handoff/KNOWN_ISSUES.md`
- `handoff/ASSET_REQUESTS.md`

다음 세션이 과거 채팅을 읽지 않아도 작업할 수 있어야 한다.

코드 안의 TODO만으로 인수인계를 대신하지 않는다.

---

# 28. Stage 07에서 실제로 구현할 범위

Stage 07의 목표는 **게임 콘텐츠 제작이 아니라 구조가 실행되는지 검증하는 것**이다.

## 반드시 구현

1. Vite + React + TypeScript 프로젝트
2. 기본 App Shell
3. `ExperienceOrchestrator`
4. `ExperienceState` + reducer
5. `ExperiencePlan`
6. Role ID / Role 계약
7. Role Registry
8. CommonMorning placeholder
9. PerspectiveBridge placeholder
10. CommonEvening integration placeholder
11. 세 Role Feature를 연결할 수 있는 슬롯
12. production plan이 세 역할을 모두 요구하는 구조
13. 순서를 하드코딩하지 않는 상태 구조
14. 최소 localStorage adapter
15. 기본 unit / integration tests
16. CSS 기반 placeholder 화면

## 아직 구현하지 않음

- Hunt 실제 PLAYFLOW 전체
- Gather STORY / PLAYFLOW
- Camp STORY / PLAYFLOW
- 며칠 변화 실제 콘텐츠
- 이동 실제 콘텐츠
- 최종 이미지
- 최종 사운드
- 정교한 애니메이션

---

# 29. Stage 07 Acceptance Criteria

다음이 모두 충족되어야 Stage 07을 완료로 본다.

## 실행

- 로컬 개발 서버 실행 가능
- production build 성공

## 구조

- Common Shell과 Role Feature 디렉터리가 분리됨
- Hunt-specific 로직이 Common reducer에 없음
- Gather / Camp가 Hunt 구조를 상속하거나 복사해야만 동작하는 구조가 아님

## 역할 진행

- production plan은 Hunt / Gather / Camp 모두를 required role로 인식
- 역할 완료 순서를 상태 구조가 강제하지 않음
- CommonMorning 완료 상태가 한 번만 저장됨
- 역할 완료 결과를 공통 상태로 전달 가능
- 모든 필수 역할 완료 여부를 계산 가능
- CommonEvening에 역할 결과 묶음을 전달 가능

## 테스트

최소 다음 테스트 통과:

- reducer 기본 phase 전환
- 역할 완료 저장
- 순서 변경 가능
- all roles complete 판정
- reset

## 시각

- 외부 이미지 다운로드 없음
- 최종 이미지 생성 없음
- CSS / 텍스트 placeholder로 실행 확인 가능

---

# 30. Stage 07 이후 Hunt Vertical Slice 구현 원칙

Stage 08에서 Hunt를 만들 때 다음을 지킨다.

Hunt는

```text
roles/hunt/
```

안에서 자체 상태와 상호작용을 구현한다.

Common Shell에 사냥 Scene ID를 추가하지 않는다.

Hunt 완료 시만 공통 계약으로 결과를 전달한다.

성공과 실패 모두 `onComplete()`로 정상 종료할 수 있어야 한다.

실패 경로가 `GameOver`로 빠지지 않는다.

---

# 31. Gather / Camp를 보호하는 아키텍처 원칙

아직 상세 PLAYFLOW가 없기 때문에 지금 구조를 만들 때 가장 중요한 것은 **빈 공간을 남기는 것**이다.

Gather가 나중에

- 공간 상태
- 반복 방문
- 이전과 다른 결과

를 중심으로 설계되어도 수용할 수 있어야 한다.

Camp가 나중에

- 같은 장소
- 우선순위
- 시간 흐름
- 기다림

을 중심으로 설계되어도 수용할 수 있어야 한다.

따라서 `RoleFeature` 계약은

```text
시작할 수 있다
→ 내부에서 자유롭게 플레이한다
→ 완료 결과를 돌려준다
```

정도만 요구한다.

# **역할 내부가 어떻게 플레이되는지는 공통 기술 계약에 넣지 않는다.**

---

# 32. 현재 확정하지 않는 기술 결정

다음은 실제 필요가 확인될 때 결정한다.

- 최종 배포 플랫폼
- PWA 설치 지원
- 완전 오프라인 지원
- 분석/통계 수집
- 교사용 관리자 화면
- 학생 결과 저장 서버
- 멀티 사용자 기능
- 클라우드 DB
- 복잡한 세이브 슬롯
- 이미지 CDN
- 애니메이션 프레임워크
- 사운드 라이브러리
- 국제화

지금 구현하면 과설계가 될 가능성이 높다.

---

# 33. 기술적으로 피해야 할 대표적 실패 형태

## 실패 A — Hunt Engine이 전체 게임이 됨

```text
CommonSceneEngine
 ├ HuntScene
 ├ GatherScene = HuntScene 이름 변경
 └ CampScene = HuntScene 이름 변경
```

금지한다.

---

## 실패 B — 결과가 수치화됨

```text
huntFood: 8
gatherFood: 5
campScore: 9
```

이 수치의 합으로 하루 성공 여부를 판단하는 구조를 기본으로 만들지 않는다.

---

## 실패 C — 실제 플레이 순서가 역사 시간으로 처리됨

```text
사냥: 오전
채집: 오후
캠프: 밤
```

금지한다.

세 역할은 같은 하루를 병렬적으로 보여주는 관점이다.

---

## 실패 D — Common Evening이 결과 모달이 됨

공통 저녁을 `ResultsDialog` 하나로 끝내지 않는다.

이 장면은 프로젝트의 핵심 내러티브 Integration 지점이다.

---

## 실패 E — 아직 없는 역할을 미리 추측해 공통 계약을 크게 만듦

Gather / Camp 상세 기획 전에

```text
resourceCount
riskMeter
stamina
successRate
```

같은 공통 필드를 만들어 역할에 강요하지 않는다.

---

# 34. Stage 06 완료 판정

이 기술 설계가 성공한 상태는 다음과 같다.

- 상위 기획 01~05의 의미를 기술 구조가 훼손하지 않는다.
- Stage 07에서 실제 앱 골격을 바로 만들 수 있다.
- Hunt를 먼저 구현해도 Gather / Camp가 Hunt에 종속되지 않는다.
- 학생이 세 역할 모두를 경험하는 진행을 수용한다.
- 역할 순서를 바꿀 수 있다.
- 같은 하루의 시간과 플레이 순서를 혼동하지 않는다.
- Common Evening의 교육적 중요성을 기술적으로 보호한다.
- 최종 이미지 없이도 기능 검증을 진행할 수 있다.
- 여러 ChatGPT 세션이 저장소만 읽고 이어서 개발할 수 있다.

---

# 35. 다음 단계로 넘기는 핵심 명세

다음 Stage 07 개발 세션은 이 문서를 기준으로 **실제 실행 가능한 앱 골격**을 만든다.

Stage 07에서 가장 먼저 검증할 질문은 이것이다.

# **“사냥을 아직 구현하지 않아도, 세 역할을 서로 다른 Feature로 담을 수 있는 공통 앱 구조가 실제로 작동하는가?”**

이 질문에 코드와 테스트로 `예`라고 답한 뒤에야 Hunt Vertical Slice 구현으로 넘어간다.

---

# 36. Stage 06 핵심 문장

# **“공통 구조는 하루를 연결하고, 역할 Feature는 각자의 경험을 소유한다.”**

그리고 가장 중요한 기술 Guardrail은 다음이다.

# **“먼저 구현한 Hunt가 전체 앱의 엔진이 되지 않게 한다.”**
