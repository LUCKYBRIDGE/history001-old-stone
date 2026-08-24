# history001-old-stone

초등학생용 **구석기 역할 몰입형 역사 체험 웹게임** 프로젝트 저장소다.

이 저장소는 기획 문서, 실제 앱 코드, 테스트 기록, 플레이테스트 관찰, 이미지·사운드 제작 맥락, 세션 간 인수인계를 함께 관리하는 **Single Source of Truth**다.

## 프로젝트 핵심

이 웹은 구석기 시대를 설명하는 자료가 아니라 학생이 잠시 **같은 공동체의 한 사람으로 하루를 살아보는 경험**을 목표로 한다.

핵심 구조:

```text
몰입형 공통 아침
→ Hunt / Gather / Camp의 같은 하루
→ Perspective Bridge
→ 공통 저녁 재회
→ 며칠의 변화
→ 이동
→ 새 거처
→ 역사 개념화
```

몰입의 기본 기준:

- 시작 20~30초 안에 장소·사람·생활 문제·첫 행동이 드러남
- 설명보다 상황과 행동
- 몸/감각과 관계 인물
- 선택 뒤 세계의 반응
- 시간·공간 연속성
- 앞서 심은 말·불·장소의 감정적 회수
- 학생 화면에서 개발 메타 정보 분리

## 새 ChatGPT 작업 세션에서 가장 먼저 읽을 것

1. [`AGENTS.md`](AGENTS.md)
2. [`PROJECT_STATUS.md`](PROJECT_STATUS.md)
3. [`docs/00_DEVELOPMENT_WORKFLOW.md`](docs/00_DEVELOPMENT_WORKFLOW.md)
4. [`handoff/CURRENT_HANDOFF.md`](handoff/CURRENT_HANDOFF.md)

그 다음 작업과 관련된 canonical 문서를 읽는다.

몰입·내러티브 공통 기준:

- [`docs/07_IMMERSION_NARRATIVE_BIBLE.md`](docs/07_IMMERSION_NARRATIVE_BIBLE.md)

현재 Hunt 재설계:

- [`docs/03_HUNT_STORY.md`](docs/03_HUNT_STORY.md)
- [`docs/04_HUNT_PLAYFLOW.md`](docs/04_HUNT_PLAYFLOW.md)
- [`docs/08_HUNT_IMMERSION_REDESIGN.md`](docs/08_HUNT_IMMERSION_REDESIGN.md)

## 운영 원칙

- 개발의 주 작업 환경은 ChatGPT 채팅이다.
- 작업 책임 단위로 세션을 나눈다.
- 프로젝트 기억은 채팅이 아니라 GitHub에 남긴다.
- GitHub 최신 코드가 빌드 기준이다.
- 기능 테스트와 몰입 플레이테스트를 별도 품질 게이트로 취급한다.
- 최종 이미지/사운드는 기능과 몰입 구조가 검증된 뒤 제작한다.
- 역할별 플레이 문법은 서로 자동 복제하지 않는다.
