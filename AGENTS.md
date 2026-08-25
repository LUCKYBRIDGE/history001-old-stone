# AGENTS.md

이 저장소는 초등학생용 **구석기 신체화 1인칭 역사 체험 웹게임** 프로젝트의 Single Source of Truth다.

현재 프로젝트는 기존 Hunt v0.1 기능 프로토타입 이후 **Design Reboot R2**를 기준으로 진행한다.

---

## 1. 새 ChatGPT 작업 세션의 시작 순서

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
7. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
8. 이번 작업에 직접 필요한 Stage 문서
9. 실제 개발이면 관련 코드와 테스트

과거 채팅 기억보다 GitHub 최신 문서를 우선한다.

---

## 2. 문서 위계

1. `docs/01_PROJECT_CORE.md` — 프로젝트 교육·체험 헌법
2. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — 몸이 보이는 1인칭 시점 헌법
3. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — 관계·딜레마·결과 헌법
4. `docs/02_EXPERIENCE_STRUCTURE.md` — 전체 경험 구조
5. `docs/07_IMMERSION_NARRATIVE_BIBLE.md` — 공통 몰입 실무 기준
6. `docs/05_ROLE_EXPERIENCE_MAP.md` — 역할 경계·균형
7. 역할별 `*_STORY.md`
8. 역할별 `*_PLAYFLOW.md` / 구현 브리프
9. `docs/06_TECH_BLUEPRINT.md` — 기술 기준

하위 문서·기존 코드가 상위 원칙과 충돌하면 **기존 코드를 정당화하지 말고 상위 문서를 우선**한다.

---

## 3. 프로젝트 최상위 원칙

- 학생에게 구석기 시대를 설명하는 웹이 아니라 **그 사람의 몸과 눈을 잠시 빌려 살아보게 하는 웹게임**을 만든다.
- 기본 player-facing 시점은 **Embodied First-Person**이다.
- 화면은 `배경 + UI`보다 **환경 + 내 몸 + 물건 + 사람 + 행동**의 하나의 시야로 설계한다.
- 내 손·팔·다리 등은 실제 자세와 행동에 따라 자연스럽게 시야에 들어온다.
- 손/팔을 모든 화면 하단에 고정된 장식처럼 붙이지 않는다.
- Hunt / Gather / Camp는 같은 한 사람이 세 일을 하는 구조가 아니라 **같은 하루를 서로 다른 공동체 구성원의 몸과 눈으로 경험하는 관점 전환**이다.
- 관계는 NPC 호감도 숫자가 아니라 **함께 겪은 사건의 기억과 이후 반응**으로 표현한다.
- 중요한 주변 인물은 역할 간에 동일 인물로 기억될 수 있어야 한다.
- 위협은 `위험입니다`라는 설명보다 **징후 → 사람 반응 → 내 관찰 → 판단**으로 다가와야 한다.
- 고민은 정답/오답이 아니라 서로 다른 장단점이 있는 가치 충돌이어야 한다.
- 선택의 흔적은 이후 사람·몸·시간·공간·대사·다른 관점 중 최소 하나에 남아야 한다.
- 큰 플롯은 재수렴할 수 있지만 모든 경로가 같은 의미의 결론으로 축소되면 안 된다.
- Perspective Recontextualization을 핵심 학습 장치로 사용한다.
- 사냥·채집·머무는 관점은 주역/보조역이 아니라 동등하다.
- 점수, HP, EXP, 랭킹, 호감도 게이지, 전투 중심 구조를 임의로 추가하지 않는다.
- 실패는 GAME OVER가 아니라 당시 생활의 불확실성을 보여주는 정상 상태다.
- 역사적 사실 `[교과서]`, 가상 관계·사건 `[재구성]`, 상호작용 `[게임]`을 내부적으로 구분한다.
- 이동 생활은 단일 실패나 정답 버튼이 아니라 여러 관점의 누적 경험으로 이해하게 한다.

---

## 4. Embodied First-Person Guardrail

모든 주요 player-facing Scene은 다음을 확인한다.

- 지금 내 눈의 위치와 방향은 어디인가?
- 내 몸의 어느 부분이 자연스럽게 보이는가?
- 손은 실제로 무엇을 하고 있는가?
- 들고 있는 물건은 앞뒤 장면에서 같은가?
- 사람과 내 몸이 같은 공간에 있는 것처럼 보이는가?
- 자세·피로·운반·긴장이 몸에 반영되는가?
- 역할 안에서 몸의 비율/시점/도구가 연속적인가?

`풍경 이미지 + 하단 손 PNG + 버튼`만으로 완료 처리하지 않는다.

---

## 5. Relationship / Agency Guardrail

주요 역할은 다음을 확인한다.

- 반복해서 기억되는 인물이 있는가?
- 그 사람이 학생 선택을 실제로 보고 반응하는가?
- 관계를 소개 카드/숫자로 설명하지 않는가?
- 고민 전에 장단점이 상황으로 보이는가?
- 위협이 선택지보다 먼저 체감되는가?
- 선택 결과가 뒤에서 최소 한 번 회수되는가?
- 재수렴 뒤에도 대사·관계·몸 상태·장면 중 하나 이상이 달라지는가?
- 다른 관점에서 앞의 행동을 다시 해석할 수 있는가?

---

## 6. 역할 경계

### Hunt

- 먼 시야
- 걷기
- 흔적 앞에 몸 낮추기
- 추적
- 자연 위험
- 동행
- 운반
- 귀환

### Gather

- 가까운 시야
- 손으로 살피기
- 담기
- 장소 기억/비교
- 탐색 범위 확대

### Camp

- 불 가까이의 몸
- 손질
- 같은 장소의 시간 변화
- 빈자리
- 멀리 바라보기
- 기다림
- 재회

먼저 개발된 Hunt의 플레이 문법을 Gather/Camp에 복제하지 않는다.

---

## 7. 기술 Guardrail

기본 구조:

```text
App
→ Experience Orchestrator
→ World Continuity / Integration
→ Common Experience / Role Features
→ Embodied Presentation UI
```

유지:

- Role Feature 독립
- 같은 날의 역할 시간 분리
- 질적 RoleCompletion
- Common Evening은 Integration

금지:

- 범용 Scene Engine
- 범용 NPC AI
- 대규모 대화 트리 엔진
- 절차 생성 서사
- FPS/3D 엔진을 몰입의 전제조건으로 삼기
- 전역 상태에 역할 내부 stage를 무분별하게 올리기

---

## 8. 기존 코드의 지위

기존 Stage 07/08 Hunt v0.1 코드는 **Legacy Functional Prototype**이다.

보존할 수 있는 것:

- React/TypeScript/Vite 스택
- CI
- reducer/RoleCompletion의 일부 아이디어
- non-combat guardrail
- qualitative result 철학

새 R2 설계와 충돌하면 기존 화면/flow/state 계약을 수정할 수 있다.

`이미 구현되어 있다`는 이유만으로 R2 설계를 약화하지 않는다.

---

## 9. 이미지·사운드 원칙

일반 개발 세션에서 최종 자산을 성급히 만들지 않는다.

최종 이미지 제작 전 필요한 것:

- Player Body Continuity Sheet
- Cast Continuity Sheet
- POV / Camera Bible
- Visual Context Bible
- Art Direction Bible
- Asset Spec

최종 이미지의 기본 단위는 **POV composition**이다.

- 환경
- 내 몸
- 상대 인물
- 행동
- 광원

이 하나의 장면으로 자연스러워야 한다.

사운드 우선순위:

1. 공간 ambience
2. 몸/행동 소리
3. 관계 대사
4. 위협 징후
5. 음악

---

## 10. QA 원칙

자동 테스트:

- 기능
- 상태
- 계약
- variant selection
- persistence
- debug 분리

교사/학생 플레이테스트:

- 내 몸이 실제로 느껴지는가
- 기억되는 사람이 있는가
- 관계가 생기는가
- 위협이 위협으로 다가오는가
- 실제 고민을 했는가
- 선택이 뒤에서 기억되는가
- 결론이 획일적으로 느껴지는가
- 다른 관점에서 이전 행동을 다시 생각하는가
- 역사적 이유를 자기 경험으로 설명하는가

자동 CI만으로 Immersion Complete를 선언하지 않는다.

---

## 11. 저장소 변경 세션 종료 시 갱신

필요한 항목:

- `PROJECT_STATUS.md`
- `CHANGELOG.md`
- `handoff/CURRENT_HANDOFF.md`
- 테스트 시 `handoff/TEST_REPORT.md`
- 미해결 시 `handoff/KNOWN_ISSUES.md`
- 자산 요구가 구체화되면 `handoff/ASSET_REQUESTS.md`

---

## 12. 현재 공식 개발 계획

`docs/00_DEVELOPMENT_WORKFLOW.md`의 **Design Reboot R2**를 따른다.

현재 새 설계 기준의 다음 구현 단계는:

# **R2 Stage 07 — Embodied Experience Skeleton**

이다.
