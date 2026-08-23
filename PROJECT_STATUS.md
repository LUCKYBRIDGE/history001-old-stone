# PROJECT_STATUS.md

## Current phase

상위 기획 문서 01~04를 GitHub canonical 문서로 정리한 단계다.

## Completed planning documents

- `docs/01_PROJECT_CORE.md` — 기본 아이디어·학습 방향 v3
- `docs/02_EXPERIENCE_STRUCTURE.md` — 전체 체험 구조 v2
- `docs/03_HUNT_STORY.md` — 사냥 역할 메인 서사 v2
- `docs/04_HUNT_PLAYFLOW.md` — 사냥 역할 실제 플레이 흐름 v2

04에서는 공통 아침 / 사냥 고유 플레이 / 공통 저녁의 경계를 분리하고, 사냥 Vertical Slice가 채집·머무는 역할의 기본 템플릿이 되지 않도록 정리했다.

## Development approach

- GitHub 저장소를 프로젝트의 기준 저장소로 사용한다.
- ChatGPT 채팅을 기획·개발·QA·아트 디렉션의 주 작업 환경으로 사용한다.
- 작업 책임 단위가 끝날 때 새 세션으로 전환한다.
- 새 세션은 저장소의 최신 문서·코드·인수인계를 먼저 읽는다.
- 일반 개발 세션에서는 이미지를 생성하지 않는다.
- 이미지의 맥락은 개발 초기부터 축적하고, 기능과 장면이 검증된 뒤 최종 자산을 제작한다.

## Next planned work

1. `docs/05_ROLE_EXPERIENCE_MAP.md` 작성
2. ChatGPT 채팅 중심 실제 개발을 위한 기술 설계
3. 웹앱 골격 구축
4. 사냥 Vertical Slice 개발·검증
5. 채집 설계·구현
6. 머무는 역할 설계·구현
7. 같은 하루 + 며칠 변화 통합
8. 이동·새 거처 구현
9. 최종 이미지·사운드 제작 및 적용
10. 학생 테스트 후 v1.0

## Workflow reference

전체 개발 단계와 산출물은 `docs/00_DEVELOPMENT_WORKFLOW.md`를 기준으로 한다.
