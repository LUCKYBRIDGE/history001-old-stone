# history001-old-stone

초등학생용 **신체화 1인칭 구석기 역사 체험 웹게임** 프로젝트 저장소다.

GitHub가 기획·코드·테스트·플레이 관찰·아트 맥락·인수인계를 관리하는 Single Source of Truth다.

## 프로젝트 한 문장

# **학생이 같은 구석기 공동체의 여러 사람의 몸과 눈을 잠시 빌려 하루를 살아보고, 사람들과 관계를 맺고 정답 없는 판단을 하며, 다른 관점에서 그 선택의 의미를 다시 본 뒤 역사 개념으로 연결하는 체험**

을 만든다.

몰입은 최종 목적이 아니다.

```text
Experience
→ Reflection
→ Historical Concept
```

까지 이어져야 학습이 완성된다.

## 네 가지 비타협 기준

모든 설계/개발은 다음을 동시에 만족해야 한다.

1. **Historical Integrity** — 역사 사실과 재구성을 구분
2. **Learner Safety & Accessibility** — 초등학생에게 불필요한 공포·불편·접근성 장벽 없음
3. **Learning Clarity** — 무엇을 보고 무엇을 할 수 있는지 이해 가능
4. **Embodiment & Agency** — 몸과 판단이 세계 안에서 의미 있게 느껴짐

몰입이 나머지 세 기준을 침해하면 몰입 연출을 줄인다.

## 기본 시각 문법

> **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 실제 주변 사람 + 현재 행동 + 빛/소리**

몸은 HUD가 아니다.

- 자세에 맞는 순간에만 자연스럽게 보인다.
- 항상 화면 하단에 손을 붙이지 않는다.
- 같은 역할 안에서 손/도구/광원 continuity를 유지한다.
- Hunt=남성, Gather/Camp=여성 같은 역할 고정관념을 몸으로 만들지 않는다.

## 관계와 선택

- 주변 인물은 반복해서 만나는 실제 관계의 대상
- 관계는 호감도 숫자가 아니라 함께 겪은 사건의 기억
- 위협은 경고창보다 징후·사람·몸의 반응으로 먼저 느낌
- 고민은 정답/오답보다 여러 합리적 가치가 충돌하는 상황
- 선택 전에 필요한 정보가 관찰 가능해야 함
- 선택은 뒤의 대사·사람·몸·시간·공간에 흔적을 남김
- 큰 이야기는 재수렴할 수 있지만 모든 결론의 의미가 같아서는 안 됨
- 관계를 죄책감이나 도덕 채점으로 사용하지 않음

## Learning Invariants

학생마다 다른 경로를 경험해도 핵심 역사 학습은 유지한다.

- 도구와 생활 행동
- 불과 생활 유지
- 먹을거리 확보의 불확실성
- 역할 상호의존
- 자연·시간·거리 제약
- 한 장소 생활의 부담 누적
- 이동 생활의 맥락

분기는 역사 사실을 바꾸는 것이 아니라 **같은 생활 조건을 다른 개인적 경험으로 만나게 하는 것**이다.

## 같은 하루, 다른 몸

Hunt / Gather / Camp는 같은 캐릭터가 세 일을 하는 구조가 아니다.

```text
같은 공동체의 같은 하루
├─ Hunt 사람의 몸과 눈
├─ Gather 사람의 몸과 눈
└─ Camp 사람의 몸과 눈
```

한 역할에서 보았던 사람이 다음 역할에서는 `나`가 될 수 있다.

관점 전환에서는 같은 사람·불·물건·대사·사건을 anchor로 사용하고, 필요하면 짧은 orientation 문장으로 혼란을 막는다.

## Subtle Screen Treatment

대형 VFX보다 작은 화면 변화를 사용한다.

- 불의 따뜻한 색
- 시간대별 명암/색온도
- 아주 약한 focus 변화
- 미세 sway
- 제한적인 blink/fade

기본 순서:

```text
World / Actor
→ Body
→ Treatment
```

효과가 먼저 위험·피로·정답을 알려주지 않는다.

반복 flashing, HP식 red flash, 지속적인 강한 shake/blur/zoom은 사용하지 않는다.
Reduced effects에서도 동일한 정보와 진행이 유지되어야 한다.

## Clarity / Scaffold

몰입은 조작을 숨기는 것이 아니다.

학생이 막힐 때:

1. 사람/환경 cue
2. 은은한 hotspot
3. 짧은 행동 문구
4. 명확한 hint

순으로 단계적으로 돕는다.

각 주요 장면은 하나의 **Primary Attention Target**을 둔다.

## 현재 핵심 경험 구조

```text
Embodied Cold Open
→ 첫 관점의 하루
→ Micro Reflection
→ Perspective Recontextualization
→ 두 번째 관점
→ Micro Reflection
→ Perspective Recontextualization
→ 세 번째 관점
→ Common Evening
→ Shared Reflection
→ 며칠 변화
→ 공동체 고민
→ 이동
→ 새 거처
→ Historical Concept Bridge
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
8. `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md`
9. `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md`

Hunt:

- `docs/03_HUNT_STORY.md`
- `docs/04_HUNT_PLAYFLOW.md`
- `docs/08_HUNT_IMMERSION_REDESIGN.md`

공통 몰입:

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md`

기술:

- `docs/06_TECH_BLUEPRINT.md`

## Design Reboot R2

기존 React/Hunt v0.1은 삭제하지 않는다.

현재 지위:

# **Legacy Functional Prototype**

새 canonical 설계는 Stage 01~06 Deep Audit 문서다.

다음 공식 구현 단계:

# **R2 Stage 07 — Embodied Experience Skeleton**

먼저 브라우저에서 다음이 작은 골격으로 성립하는지 검증한다.

- 내 몸 + 사람 + 환경
- 첫 행동 명료성
- 도구 전달
- walking/crouch POV
- subtle treatment / reduced effects
- 다른 사람의 몸으로 시점 전환
- perspective orientation
- 최소 Learning Evidence
- Player / Teacher / Debug 분리
- stable checkpoint

그 뒤 Hunt 전체를 다시 구축한다.

## 기술 방향

- React + TypeScript + Vite 유지
- 자유 3D/FPS를 전제하지 않음
- Cinematic First-Person Interactive Scene
- 범용 NPC AI 없음
- 호감도 시스템 없음
- 대규모 대화 트리 없음
- 범용 Scene/VFX Engine 없음
- 점수/HP/EXP/ranking 없음
- 자연 위험을 전투로 만들지 않음

## 완료 정의

- **Functional Complete** — 정상 동작/자동 테스트
- **Embodied Complete** — 몸·시야·공간 continuity가 자연스러움
- **Relationship/Agency Complete** — 사람·고민·선택 기억이 실제로 느껴짐
- **Clarity/Safety Complete** — 학생이 막히지 않고 위협·효과·관점 전환이 적절함
- **Learning Complete** — Reflection을 통해 경험이 역사 개념으로 연결됨
- **Immersion Complete** — 교사/학생 플레이에서 전체 체험의 몰입과 재해석이 확인됨
- **Production Complete** — 역사 검토, 최종 아트/사운드, 접근성, 최종 QA 완료
