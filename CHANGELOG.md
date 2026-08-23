# CHANGELOG.md

## Unreleased

### Added

- GitHub Single Source of Truth 운영 원칙
- `AGENTS.md` 프로젝트 작업 지침
- `PROJECT_STATUS.md` 현재 진행 상태
- `docs/00_DEVELOPMENT_WORKFLOW.md` ChatGPT 채팅 중심 전체 개발 워크플로우
- `handoff/CURRENT_HANDOFF.md` 세션 간 인수인계 문서
- `docs/01_PROJECT_CORE.md` — 기본 아이디어·학습 방향 v3 canonical 문서
- `docs/02_EXPERIENCE_STRUCTURE.md` — 구석기 전체 체험 구조 v2 canonical 문서
- `docs/03_HUNT_STORY.md` — 사냥 역할 메인 서사 v2 canonical 문서
- `docs/04_HUNT_PLAYFLOW.md` — 사냥 역할 실제 플레이 흐름 v2 canonical 문서
- `docs/05_ROLE_EXPERIENCE_MAP.md` — 세 역할 핵심 경험 맵 v1 canonical 문서

### Changed

- 기존 Codex 중심 개발 계획에서 **ChatGPT 채팅 중심 개발 방식**으로 전환
- 세션 전환 기준을 ‘대화 길이’가 아니라 ‘작업 책임 완료’로 변경
- 세션 간 `LATEST_BUILD.zip` 전달 대신 GitHub 최신 소스를 기준으로 사용
- 이미지 생성은 일반 개발 세션에서 분리하고, 시각 맥락을 초기부터 축적한 뒤 Functional Complete 이후 본격 제작하는 구조로 변경
- 사냥 PLAYFLOW를 01 v3·02 v2·03 v2에 맞춰 리비전
- 공통 아침 / 사냥 고유 플레이 / 공통 저녁의 경계를 명확히 분리
- 사냥 플레이 문법을 채집·머무는 역할의 표준 템플릿으로 사용하지 않는 개발 경계 추가
- 사냥 끝에서 이동 생활 결론을 완성하지 않고 `더 멀리 감`이라는 변화 신호만 남기도록 조정
- Stage 05에서 사냥·채집·머무는 역할의 핵심 질문, 행동, 감정선, 역사적 의미, 고유 경험, 침범 금지 영역을 확정
- 역할 동등성을 동일 분량이 아니라 `각 역할이 빠지면 전체 역사 이해의 한 축이 사라지는가`로 판단하도록 기준 강화
- 공통 시스템은 역할을 연결하는 Shell이고, 역할별 플레이 문법은 각 Feature가 독립적으로 책임진다는 기술 설계 경계 확정
- 며칠 변화 신호를 `사냥은 더 멀리 / 채집은 가까운 자원 감소 / 머무름은 기다림 증가`로 정렬
- 다음 핵심 작업을 `06_TECH_BLUEPRINT` 작성으로 갱신
