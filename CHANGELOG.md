# CHANGELOG.md

## Stage 08-A — Hunt front-half Vertical Slice

### Added

- `src/roles/hunt/huntTypes.ts` — Hunt 전반부 내부 stage / clue / approach / attempt outcome 타입
- `src/roles/hunt/huntContent.ts` — Hunt 전반부 prototype 관찰 지점·단서·접근 선택·질적 결과 문구
- `src/roles/hunt/huntReducer.ts` — Hunt 전용 내부 reducer
- `src/roles/hunt/hunt.css` — Hunt 역할 전용 prototype 스타일
- `tests/unit/huntReducer.test.ts` — Hunt 내부 상태 Guardrail 4 tests
- 실제 Hunt 전반부 상호작용: 출발 → 흔적 탐색 → 단서 판단 → 발견 → 접근 판단 → 사냥 시도
- Stage 08-A 개발 체크포인트

### Changed

- `HuntFeature` placeholder를 실제 Stage 08-A interaction으로 교체
- `HuntFeature` 테스트를 실제 user-event 경로 2 tests로 확장
- Hunt 내부에서 `DayMoment`를 morning → late-morning → midday로 사용
- 첫 사냥 시도 뒤 Hunt를 조기 완료하지 않고 Stage 08-B를 기다리도록 변경
- AppShell의 단계 표기를 Stage 08-A로 갱신
- 앱 시작 설명을 현재 Hunt 전반부 prototype 상태에 맞게 갱신
- `package.json` version을 `0.0.0-stage08a`로 갱신
- GitHub Actions workflow 표시명을 단계 종속적인 `Stage 07 CI`에서 `Project CI`로 변경
- 다음 핵심 작업을 **Stage 08-B 사냥 Vertical Slice 후반 구현**으로 갱신

### Verified

- Node.js 24.19.0 / npm 11.17.0
- install PASS
- typecheck PASS
- Vitest 5 files / 17 tests PASS
- Vite production build PASS
- Stage 08-A implementation run: `32671525020`

---

## Unreleased / Stage 07 and earlier

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
- `docs/05_ROLE_EXPERIENCE_MAP.md` — 세 역할 핵심 경험 맵 canonical 문서
- `docs/05A_STAGE01-05_DESIGN_VALIDATION.md` — Stage 01~05 설계 검증 리포트
- `docs/06_TECH_BLUEPRINT.md` — ChatGPT 채팅 중심 기술 설계 v1
- Stage 07 React + TypeScript + Vite 실행 앱 골격
- `src/app/` App / AppShell
- `src/experience/` ExperienceOrchestrator / reducer / ExperiencePlan / 계약 / Common Experience / Integration
- `src/roles/hunt`, `src/roles/gather`, `src/roles/camp` 독립 Role Feature placeholder
- `src/roles/registry.ts` Role Registry
- `src/persistence/experienceStorage.ts` schema-versioned localStorage adapter
- `src/ui/` 최소 Shared UI primitive
- `tests/unit/`, `tests/integration/` Stage 07 Guardrail 테스트
- `.github/workflows/ci.yml` install → typecheck → test → build 자동 검증
- `handoff/TEST_REPORT.md` 실행 검증 기록

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
- Stage 01~05 전체 설계 검증을 수행하고 Stage 06 진입 가능 판정
- `docs/05_ROLE_EXPERIENCE_MAP.md`를 v2로 리비전
- 최종 체험의 기본값을 **한 학생이 사냥·채집·머무는 세 역할을 모두 경험하는 구조**로 명확화
- 세 역할을 같은 하루의 독립 미니게임 세 개로 반복하지 않고, 역할을 하나씩 경험하며 같은 하루의 빈칸을 채우는 방향으로 정리
- 채집의 `가까운 자원 감소`를 구체적인 자원 고갈 사실로 단정하지 않고 **가까운 곳에서 이전처럼 쉽게 먹을 것을 찾지 못해 탐색 범위가 넓어지는 체험**으로 보정
- 머무는 역할의 `기다림 증가`를 독립적 이동 원인이 아니라 **사냥·채집의 생활 반경 확대가 공동체 생활에 주는 시간·불확실성의 부담**으로 재정의
- 공통 저녁을 단순 결과 화면이 아니라 역할 경험이 공동체 이해로 합쳐지는 핵심 통합 장면으로 기술 설계 Guardrail에 추가
- 사냥의 자연 위험 표현을 포식자 직접 등장에만 의존하지 않도록 구현 여지를 명확화
- Stage 06 기술 설계에서 React + TypeScript + Vite 기반의 서버리스 브라우저 앱 구조 확정
- 초기 전역 상태는 React `useReducer` 중심으로 최소화하고 외부 상태 관리 프레임워크를 필수로 두지 않음
- 아키텍처를 `App → Experience Orchestrator → Common Experience / Role Features → Shared UI`로 확정
- Common Shell과 Hunt / Gather / Camp Feature의 의존성 경계를 확정하고 역할 간 직접 import를 금지
- **학생의 실제 플레이 순서와 같은 하루의 역사적 시간 진행을 분리**하는 시간 모델 확정
- 역할 순서를 코드에 하드코딩하지 않고 `ExperiencePlan`으로 required roles / 순서 정책을 분리
- Production Plan은 세 역할 모두를 요구하고 Dev/Test Plan은 Vertical Slice를 위한 부분 역할 실행을 허용하도록 분리
- 공통 아침은 한 번 실행하고 역할별 `RoleEntry`로 관점을 전환하는 구조 확정
- 역할 종료와 최종 공통 저녁 사이에 `PerspectiveBridge` 경계를 두어 같은 하루의 다른 관점으로 연결하도록 설계
- Common Evening을 결과 모달이 아닌 `Integration Feature`로 명시
- Role Result를 점수가 아닌 의미 있는 qualitative signal 중심으로 전달하도록 계약 설계
- Common reducer에서 역할별 Scene / interaction 상태를 제거하고 Feature 내부 상태로 한정
- Hunt에 맞춘 범용 `Scene Engine`을 먼저 만들지 않는 과설계 방지 원칙 확정
- 최소 localStorage checkpoint 저장 구조와 개인정보 비저장 원칙 확정
- Stage 07 Acceptance Criteria와 테스트 Guardrail 확정
- Stage 07에서 `ExperiencePlan` 기반 역할 진행과 `RoleCompletion → Integration` 경로를 실제 코드로 고정
- CommonMorning을 역할별 반복이 아닌 단일 공통 경험으로 구현하고 역할별 RoleEntry와 분리
- PerspectiveBridge를 Role Feature와 Common Evening 사이의 실제 경계 컴포넌트로 구현
- Common Evening을 세 역할 결과를 전달받는 Integration placeholder로 구현하고 점수표 구조를 배제
- CI 검증 런타임을 Node 24로 설정하여 현재 npm CLI에서 install/typecheck/test/build 검증 완료
