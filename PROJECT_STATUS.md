# PROJECT_STATUS.md

## Current phase

상위 기획 문서 01~05를 GitHub canonical 문서로 정리했고, **Stage 01~05 전체 설계 검증 리비전까지 완료한 상태**다.

Stage 06 기술 설계에 진입할 수 있는 것으로 판정했다.

## Completed planning documents

- `docs/01_PROJECT_CORE.md` — 기본 아이디어·학습 방향 v3
- `docs/02_EXPERIENCE_STRUCTURE.md` — 전체 체험 구조 v2
- `docs/03_HUNT_STORY.md` — 사냥 역할 메인 서사 v2
- `docs/04_HUNT_PLAYFLOW.md` — 사냥 역할 실제 플레이 흐름 v2
- `docs/05_ROLE_EXPERIENCE_MAP.md` — 세 역할 핵심 경험 맵 v2
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — Stage 01~05 설계 검증 리포트

## Stage 01~05 검증 결과

전체 앱 방향은 유지한다.

- 프로젝트의 핵심 단위는 **하나의 공동체가 보내는 하루**다.
- 사냥·채집·머무는 역할은 동등하지만 같은 플레이 문법을 사용하지 않는다.
- 최종 체험의 기본값은 **한 학생이 세 역할을 모두 경험하는 것**이다.
- 역할 순서와 화면 전환 UX는 이후 프로토타입에서 검증하며 특정 역할 순서를 기술 구조에 하드코딩하지 않는다.
- 채집은 `주변 자원을 완전히 고갈시킨다`는 단순 인과가 아니라 **가까운 곳에서 먹을 것을 계속 똑같이 쉽게 얻을 수 없어 탐색 범위가 넓어지는 경험**으로 보정했다.
- 머무는 역할은 독립적인 이동 원인을 하나 더 만드는 역할이 아니라 **넓어진 바깥 생활 반경이 거처와 공동체 생활에 주는 시간·기다림의 부담**을 체험시키는 관점으로 보정했다.
- 공통 저녁은 결과표가 아니라 세 역할의 경험이 **공동체 이해로 합쳐지는 핵심 통합 장면**이다.
- 사냥의 자연 위험은 포식자 직접 등장에만 의존하지 않고 거리·시간·소리·지형 등 다양한 조건으로 표현할 수 있게 열어 둔다.

## Development approach

- GitHub 저장소를 프로젝트의 기준 저장소로 사용한다.
- ChatGPT 채팅을 기획·개발·QA·아트 디렉션의 주 작업 환경으로 사용한다.
- 작업 책임 단위가 끝날 때 새 세션으로 전환한다.
- 새 세션은 저장소의 최신 문서·코드·인수인계를 먼저 읽는다.
- 일반 개발 세션에서는 이미지를 생성하지 않는다.
- 이미지의 맥락은 개발 초기부터 축적하고, 기능과 장면이 검증된 뒤 최종 자산을 제작한다.

## Next planned work

1. `docs/06_TECH_BLUEPRINT.md` 작성 — ChatGPT 채팅 중심 실제 개발을 위한 최소 기술 설계
2. 웹앱 골격 구축
3. 사냥 Vertical Slice 개발·검증
4. 채집 STORY / PLAYFLOW 설계·구현
5. 머무는 역할 STORY / PLAYFLOW 설계·구현
6. 같은 하루 + 며칠 변화 통합
7. 이동·새 거처 구현
8. 최종 이미지·사운드 제작 및 적용
9. 학생 테스트 후 v1.0

## Stage 06 필수 Guardrail

- Common Shell과 Hunt / Gather / Camp Feature를 분리한다.
- Common Shell이 역할별 게임 루프를 규정하지 않는다.
- 세 역할 모두를 경험할 수 있는 진행 상태를 지원한다.
- 특정 역할 순서를 하드코딩하지 않는다.
- 공통 저녁을 단순 `RoleResult` 화면으로 축소하지 않는다.
- 역할 결과는 점수보다 이후 공통 경험에 필요한 의미 있는 상태만 전달한다.
- Hunt 구현 편의를 위해 Gather / Camp 구조를 Hunt에 맞추지 않는다.

## Do not start yet

- 채집·머무는 역할의 상세 장면을 기술 설계보다 먼저 구현하기
- 최종 이미지 대량 제작
- 최종 사운드 제작
- 이동·새 거처 상세 구현
- 학생 테스트

## Workflow reference

전체 개발 단계와 산출물은 `docs/00_DEVELOPMENT_WORKFLOW.md`를 기준으로 한다.

Stage 01~05의 최신 검증 결과는 `docs/05A_STAGE01-05_DESIGN_VALIDATION.md`를 함께 참고한다.
