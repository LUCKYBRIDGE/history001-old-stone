# CURRENT_HANDOFF.md

## Previous work

ChatGPT 채팅 중심 개발 방식과 GitHub Single Source of Truth 운영체계를 확정했고, 현재까지 확정된 상위 기획 3문서를 저장소의 canonical 문서로 등록했다.

추가된 canonical 문서:

- `docs/01_PROJECT_CORE.md`
- `docs/02_EXPERIENCE_STRUCTURE.md`
- `docs/03_HUNT_STORY.md`

## Current status

현재 상위 기획 기준은 GitHub 저장소에서 바로 읽을 수 있다.

- 01 기본 아이디어·학습 방향 v3 → `docs/01_PROJECT_CORE.md`
- 02 전체 체험 구조 v2 → `docs/02_EXPERIENCE_STRUCTURE.md`
- 03 사냥 메인 서사 v2 → `docs/03_HUNT_STORY.md`

다음 핵심 작업은 기존 `04 사냥 실제 플레이 흐름 v1`을 새 01~03 원칙에 맞춰 리비전하는 것이다.

## Next task

다음 새 ChatGPT 세션에서는 다음 순서로 진행한다.

1. `AGENTS.md`, `PROJECT_STATUS.md`, `docs/00_DEVELOPMENT_WORKFLOW.md`, 이 파일을 먼저 읽는다.
2. `docs/01_PROJECT_CORE.md`, `docs/02_EXPERIENCE_STRUCTURE.md`, `docs/03_HUNT_STORY.md`를 상위 기준으로 읽는다.
3. 기존 `04 사냥 실제 플레이 흐름 v1`을 확보한다.
4. 기존 04의 장점을 유지하면서 공통 아침 / 사냥 고유 플레이 / 공통 저녁의 경계를 명확히 하고, 사냥 플레이 문법이 다른 역할의 표준이 되지 않도록 리비전한다.
5. 최종 결과를 `docs/04_HUNT_PLAYFLOW.md`로 확정한다.

## Important decisions

- 개발의 주 작업 환경은 ChatGPT 채팅이다.
- 새 채팅은 작업 책임 단위마다 만든다.
- 프로젝트의 장기 기억은 GitHub 문서와 코드에 둔다.
- 일반 개발 세션에서는 이미지 생성·외부 이미지 임의 다운로드를 하지 않는다.
- 이미지는 기능 검증 후 별도 이미지 제작 파이프라인으로 만든다.
- 이미지의 맥락은 개발 초기부터 `VISUAL_CONTEXT_BIBLE` 등에 축적한다.
- 사냥은 전체 게임의 중심이 아니라 세 관점 중 먼저 구체화된 하나의 관점이다.

## Read first in the next session

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/02_EXPERIENCE_STRUCTURE.md`
7. `docs/03_HUNT_STORY.md`
