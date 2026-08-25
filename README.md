# history001-old-stone

초등학생용 **신체화 1인칭 구석기 역사 체험 웹게임** 프로젝트 저장소다.

GitHub가 기획·코드·테스트·플레이 관찰·아트 맥락·인수인계를 관리하는 Single Source of Truth다.

## 현재 프로젝트 정체성

이 웹은 학생이 구석기 시대를 밖에서 바라보는 자료가 아니다.

# **학생이 같은 공동체의 여러 사람의 몸과 눈을 잠시 빌려, 그들의 같은 하루를 직접 살아보는 체험**

을 목표로 한다.

기본 시각 문법:

> **눈앞의 환경 + 내 손/팔/다리 등 자연스럽게 보이는 몸 + 들고 있는 물건 + 실제 주변 사람 + 현재 행동**

관계/선택 문법:

- 주변 인물은 반복해서 만나는 실제 관계의 대상
- 관계는 호감도 숫자가 아니라 함께 겪은 사건의 기억
- 위협은 경고창보다 징후와 사람의 반응으로 먼저 느낌
- 고민은 정답/오답이 아니라 장단점이 충돌하는 상황
- 선택은 뒤의 대사·사람·몸 상태·시간·공간에 흔적을 남김
- 큰 이야기는 재수렴할 수 있지만 모든 결론의 의미가 같아서는 안 됨

## 같은 하루, 다른 몸

학생이 Hunt / Gather / Camp를 경험한다는 것은 같은 캐릭터가 세 일을 하는 것이 아니다.

```text
같은 공동체의 같은 하루
├─ Hunt 사람의 몸과 눈
├─ Gather 사람의 몸과 눈
└─ Camp 사람의 몸과 눈
```

한 역할에서 보았던 사람이 다음 역할에서는 `나`가 될 수 있다.

이를 통해 같은 사건을 다른 사람의 입장에서 다시 이해한다.

## 현재 핵심 구조

```text
Embodied Cold Open
→ 첫 관점의 하루
→ Perspective Recontextualization
→ 두 번째 관점의 같은 하루
→ Perspective Recontextualization
→ 세 번째 관점의 같은 하루
→ 관계/결과가 반영된 Common Evening
→ 며칠 변화
→ 공동체 고민
→ 이동
→ 새 거처
→ 경험 기반 역사 개념화
```

## 반드시 읽을 문서

새 작업 세션:

1. `AGENTS.md`
2. `PROJECT_STATUS.md`
3. `docs/00_DEVELOPMENT_WORKFLOW.md`
4. `handoff/CURRENT_HANDOFF.md`
5. `docs/01_PROJECT_CORE.md`
6. `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`
7. `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`

Hunt 관련:

- `docs/03_HUNT_STORY.md`
- `docs/04_HUNT_PLAYFLOW.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`

공통 몰입:

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md`

기술:

- `docs/06_TECH_BLUEPRINT.md`

## Design Reboot R2

기존 React/Hunt v0.1은 삭제하지 않는다.

하지만 현재는 **Legacy Functional Prototype**이다.

새 canonical 설계는 Stage 01~06 R2 문서다.

다음 공식 구현 단계:

# **R2 Stage 07 — Embodied Experience Skeleton**

먼저 브라우저에서 `내 몸 + 사람 + 환경 + 시점 전환`이 실제로 성립하는지 작은 골격으로 검증한 뒤 Hunt 전체를 다시 구축한다.

## 기술 방향

- React + TypeScript + Vite 유지
- 자유 3D/FPS를 전제하지 않음
- Cinematic First-Person Interactive Scene
- 범용 NPC AI 없음
- 호감도 시스템 없음
- 대규모 대화 트리 없음
- 점수/HP/EXP/ranking 없음
- 자연 위험을 전투로 만들지 않음

## 완료 정의

- **Functional Complete** — 정상 동작/테스트
- **Embodied Complete** — 몸과 시야가 자연스럽고 공간 안에 존재함
- **Relationship/Agency Complete** — 사람·고민·선택 기억이 실제로 느껴짐
- **Immersion Complete** — 교사/학생 플레이에서 역할 빙의와 재해석이 확인됨
- **Production Complete** — 역사 검토, 최종 아트/사운드, 접근성, QA 완료
