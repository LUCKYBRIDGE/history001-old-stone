# CURRENT_HANDOFF.md

## Previous work

상위 기획 01~04를 GitHub canonical 문서로 정리한 뒤 Stage 05에서 **사냥·채집·머무는 세 역할의 핵심 경험 경계와 균형**을 확정했다.

현재 canonical 문서:

- `docs/01_PROJECT_CORE.md`
- `docs/02_EXPERIENCE_STRUCTURE.md`
- `docs/03_HUNT_STORY.md`
- `docs/04_HUNT_PLAYFLOW.md`
- `docs/05_ROLE_EXPERIENCE_MAP.md`

## Stage 05에서 확정한 핵심

### 사냥
- 핵심 질문: `오늘 먹을 것을 구하고 무사히 돌아갈 수 있을까?`
- 고유 경험: 탐색 / 추적 / 불확실한 성공 / 자연 위험 / 귀환
- 며칠 변화 신호: 사냥 범위가 점점 멀어짐

### 채집
- 핵심 질문: `주변에서는 언제까지 먹을 것을 찾을 수 있을까?`
- 고유 경험: 발견 / 반복 / 가까운 자원의 감소 / 탐색 범위 확대
- 며칠 변화 신호: 가까운 곳에서 찾을 수 있는 먹을거리가 줄어듦
- 사냥의 흔적 찾기나 성공/실패 구조를 소재만 바꿔 복제하지 않음

### 머무는 사람
- 핵심 질문: `떠난 사람들이 돌아올 때까지 우리는 무엇을 해야 할까?`
- 고유 경험: 생활 유지 / 우선순위 / 같은 장소에서의 시간 흐름 / 기다림 / 바깥 결과를 알 수 없는 불확실성
- 며칠 변화 신호: 밖에 나간 사람들이 더 늦게 돌아오며 기다림이 길어짐
- 이동·탐색 중심 역할이나 자원 경영 게임으로 만들지 않음

### 공통 경계
- 프로젝트의 핵심 단위는 `하나의 공동체가 보내는 하루`다.
- 공통 시스템은 역할을 연결하는 그릇이다.
- 공통 시스템이 역할별 핵심 플레이 문법을 결정해서는 안 된다.
- 역할 동등성은 동일 분량·동일 조작 수가 아니라, 각 역할이 전체 역사 이해에서 독립적인 의미를 갖는지로 판단한다.
- 공통 저녁은 역할별 성적표나 점수 비교가 아니라 서로 다른 하루의 결과가 다시 공동체로 합쳐지는 장면이다.

## Next task — Stage 06

다음 새 ChatGPT 세션의 핵심 작업은 **ChatGPT 채팅 중심 실제 개발을 위한 최소 기술 설계**다.

결과물:

- `docs/06_TECH_BLUEPRINT.md`

Stage 06에서는 01·02·04·05를 기준으로 다음을 설계한다.

- React + TypeScript 기반 브라우저 앱의 최소 구조
- 서버·로그인·DB 없이 시작하는 구조
- 공통 아침 / 역할 진입 / 장면 진행 / 시간 변화 / 역할 결과 / 공통 저녁의 공통 Shell
- Hunt / Gather / Camp 역할 Feature의 분리 원칙
- 역할별 플레이 문법이 공통 엔진에 의해 강제되지 않는 구조
- 테스트 전략
- 파일·디렉터리 구조
- 이미지 자산을 나중에 연결할 수 있는 구조
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

`docs/03_HUNT_STORY.md`는 필요할 때 사냥의 상세 맥락을 확인하는 보조 문서로 사용한다.
