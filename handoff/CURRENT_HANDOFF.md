# CURRENT_HANDOFF.md

## Previous work

상위 기획 01~05를 다시 검증하고 Stage 06 진입 전에 필요한 설계 리비전을 완료했다.

현재 canonical 문서:

- `docs/01_PROJECT_CORE.md`
- `docs/02_EXPERIENCE_STRUCTURE.md`
- `docs/03_HUNT_STORY.md`
- `docs/04_HUNT_PLAYFLOW.md`
- `docs/05_ROLE_EXPERIENCE_MAP.md` — v2
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md`

## Stage 01~05 설계 검증 판정

# **GO TO STAGE 06**

01~04의 중심 구조는 유지했다.

05는 v2로 리비전했다.

### 리비전 1 — 세 역할 경험 방식

- 최종 체험의 기본값은 **한 학생이 사냥·채집·머무는 세 관점을 모두 경험하는 것**이다.
- 같은 아침과 설명을 세 번 반복하지 않는다.
- 역할을 하나씩 경험하면서 같은 하루의 빈칸을 다른 관점으로 채운다.
- 역할 순서와 전환 UX는 프로토타입에서 검증하되 기술 구조에 특정 역할 순서를 하드코딩하지 않는다.

### 리비전 2 — 채집의 변화 표현

- `가까운 자원을 완전히 고갈시킨다`는 역사적 인과를 단정하지 않는다.
- 핵심 경험은 **가까운 곳에서 먹을 것을 계속 똑같이 쉽게 얻을 수 없어 더 넓게 살펴보게 되는 변화**다.
- 구체적인 감소 상황은 필요 시 `[재구성]`·`[게임]`으로 관리한다.

### 리비전 3 — 머무는 역할의 며칠 변화 기능

- 머무는 역할에 별개의 `독립 이동 원인`을 억지로 배정하지 않는다.
- 사냥·채집의 생활 반경이 넓어지면서 **돌아오는 시간이 늦어지고 기다림과 불확실성이 커지는 공동체적 부담**을 거처 쪽에서 체험시킨다.

### 유지한 핵심

- 사냥·채집·머무는 역할은 같은 공동체의 동등한 세 관점이다.
- 공통 시스템은 역할을 연결하는 그릇이다.
- 공통 시스템이 역할별 핵심 플레이 문법을 결정해서는 안 된다.
- 공통 저녁은 역할별 성적표가 아니라 서로 다른 하루가 공동체 생활로 합쳐지는 핵심 통합 장면이다.
- 사냥은 `탐색 / 추적 / 불확실한 성공 / 자연 위험 / 귀환`을 담당한다.
- 채집은 `주변 발견 / 반복 이용 / 이전과 다른 결과 / 탐색 범위 확대`를 담당한다.
- 머무는 사람은 `생활 유지 / 우선순위 / 같은 장소에서의 시간 흐름 / 기다림 / 귀환 맞이`를 담당한다.

## Next task — Stage 06

다음 새 ChatGPT 세션의 핵심 작업은 **ChatGPT 채팅 중심 실제 개발을 위한 최소 기술 설계**다.

결과물:

- `docs/06_TECH_BLUEPRINT.md`

Stage 06에서는 다음을 설계한다.

- React + TypeScript 기반 브라우저 앱의 최소 구조
- 서버·로그인·DB 없이 시작하는 구조
- Common Shell / Hunt Feature / Gather Feature / Camp Feature의 경계
- 세 역할 경험 진행 상태
- 특정 역할 순서를 하드코딩하지 않는 구조
- 공통 아침 / 역할 진입 / 시간 변화 / 역할 결과 / 공통 저녁의 연결
- 공통 저녁을 단순 결과표로 축소하지 않는 구조
- 역할별 플레이 문법이 공통 엔진에 의해 강제되지 않는 구조
- 테스트 전략
- 파일·디렉터리 구조
- 추후 이미지 자산 연결 구조
- 여러 새 ChatGPT 개발 세션이 이어서 작업하기 위한 코드 변경·인수인계 규칙

Stage 06에서는 아직 전체 게임 콘텐츠를 구현하지 않는다.

## Important decisions

- 개발의 주 작업 환경은 ChatGPT 채팅이다.
- 새 채팅은 작업 책임 단위마다 만든다.
- 프로젝트의 장기 기억은 GitHub 문서와 코드에 둔다.
- 일반 개발 세션에서는 이미지 생성·외부 이미지 임의 다운로드를 하지 않는다.
- 이미지는 기능 검증 후 별도 이미지 제작 파이프라인으로 만든다.
- 이미지의 맥락은 개발 초기부터 `VISUAL_CONTEXT_BIBLE` 등에 축적한다.
- 채집과 머무는 역할의 STORY를 만들 때는 사냥 세부 문서를 기본 입력으로 삼지 않아 모방 위험을 줄인다.

## Read first in the next session

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/02_EXPERIENCE_STRUCTURE.md`
7. `docs/04_HUNT_PLAYFLOW.md`
8. `docs/05_ROLE_EXPERIENCE_MAP.md`
9. `docs/05A_STAGE01-05_DESIGN_VALIDATION.md`

`docs/03_HUNT_STORY.md`는 필요할 때 사냥의 상세 맥락을 확인하는 보조 문서로 사용한다.
