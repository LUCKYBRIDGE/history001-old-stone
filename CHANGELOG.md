# CHANGELOG.md

## Unreleased

### Added

- GitHub Single Source of Truth 운영 원칙
- `AGENTS.md` 프로젝트 작업 지침
- `PROJECT_STATUS.md` 현재 진행 상태
- `docs/00_DEVELOPMENT_WORKFLOW.md` ChatGPT 채팅 중심 전체 개발 워크플로우
- `handoff/CURRENT_HANDOFF.md` 세션 간 인수인계 문서

### Changed

- 기존 Codex 중심 개발 계획에서 **ChatGPT 채팅 중심 개발 방식**으로 전환
- 세션 전환 기준을 ‘대화 길이’가 아니라 ‘작업 책임 완료’로 변경
- 세션 간 `LATEST_BUILD.zip` 전달 대신 GitHub 최신 소스를 기준으로 사용
- 이미지 생성은 일반 개발 세션에서 분리하고, 시각 맥락을 초기부터 축적한 뒤 Functional Complete 이후 본격 제작하는 구조로 변경
