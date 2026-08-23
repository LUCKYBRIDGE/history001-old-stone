# PROJECT_STATUS.md

## Current phase

현재 프로젝트는 **ChatGPT 채팅 중심 개발 워크플로우로 전환한 뒤, 상위 기획 문서를 GitHub canonical 문서로 정리하는 단계**다.

## Completed planning documents

다음 상위 기획 문서를 저장소의 canonical 문서로 등록했다.

- `docs/01_PROJECT_CORE.md` — 기본 아이디어·학습 방향 v3
- `docs/02_EXPERIENCE_STRUCTURE.md` — 전체 체험 구조 v2
- `docs/03_HUNT_STORY.md` — 사냥 역할 메인 서사 v2

`04` 사냥 실제 플레이 흐름은 새 01~03 체계에 맞춘 v2 리비전이 다음 핵심 작업이다.

## Current development approach

- GitHub 저장소를 프로젝트의 **Single Source of Truth**로 사용한다.
- ChatGPT 채팅을 기획·개발·QA·아트 디렉션의 주 작업 환경으로 사용한다.
- 세션은 길이 때문에만 바꾸지 않고 **작업 책임 단위가 끝날 때마다 새 세션으로 전환**한다.
- 새 세션은 과거 대화를 전제로 하지 않고 저장소의 문서·코드·인수인계를 먼저 읽는다.
- 이미지 생성은 일반 개발 세션에서 수행하지 않는다.
- 최종 이미지는 게임 기능과 장면이 검증된 뒤 별도 이미지 제작 파이프라인에서 만든다.

## Next planned work

1. 기존 `04 사냥 실제 플레이 흐름 v1`을 확보하고 새 01~03 원칙에 맞춰 `docs/04_HUNT_PLAYFLOW.md`로 리비전
2. `docs/05_ROLE_EXPERIENCE_MAP.md` 작성
3. ChatGPT 개발용 기술 설계 확정
4. 실제 웹앱 골격 구축
5. 사냥 Vertical Slice 개발·검증
6. 채집 설계·개발
7. 머무는 역할 설계·개발
8. 같은 하루 + 며칠 변화 통합
9. 이동·새 거처 구현
10. 시각 맥락·아트 방향 확정 후 최종 이미지 제작·적용
11. 학생 테스트 후 v1.0

## Do not start yet

- 최종 이미지 대량 제작
- 최종 사운드 제작
- 이동·새 거처 상세 구현
- 학생 테스트

위 작업은 앞 단계 검증이 끝난 뒤 진행한다.

## Workflow reference

전체 개발 단계와 산출물은 `docs/00_DEVELOPMENT_WORKFLOW.md`를 기준으로 한다.
