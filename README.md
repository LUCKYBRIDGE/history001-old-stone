# history001-old-stone

초등학생용 **신체화 1인칭 구석기 역사 체험 웹게임** 프로젝트 저장소다.

GitHub가 기획·코드·테스트·플레이 관찰·아트 맥락·인수인계를 관리하는 Single Source of Truth다.

## 프로젝트 한 문장

# **학생이 구석기 공동체의 여러 사람의 몸과 눈으로 하루를 살아보고, 실제처럼 관계를 맺고 위험·후회·안도·책임을 느끼며, 각 사람의 제한된 시야에서 같은 시대를 다르게 경험한 뒤 역사적 상상력과 개념 이해로 이어지는 체험**

을 만든다.

기본 학습 흐름:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Conceptualization
```

모든 역할 뒤에 강제 reflection을 넣지는 않는다.

## 네 가지 균형축

1. **Historical Integrity** — 역사 사실과 재구성을 구분
2. **Learning Clarity** — 무엇을 보고 무엇을 할 수 있는지 이해 가능
3. **Emotional & Accessibility Safety** — 감정을 없애지 않되 모욕·강압·접근성 장벽은 피함
4. **Embodiment, Agency & Historical Imagination** — 그 시대 사람으로 살아보고 가능한 삶을 상상

안전은 감정 제거를 뜻하지 않는다.

## 기본 시각 문법

> **환경 + 자연스럽게 보이는 내 몸 + 들고 있는 것 + 실제 주변 사람 + 현재 행동 + 빛/소리**

몸은 HUD가 아니다.

- 자세와 행동에 맞는 순간에만 자연스럽게 보인다.
- 항상 화면 하단에 손을 붙이지 않는다.
- 같은 역할 안에서 손/도구/광원 continuity를 유지한다.

## 역할 관점

역할 시작 시 현재 시점을 알려줄 수 있다.

예:

> **사냥을 나선 사람의 관점**

그 뒤에는 그 사람이 실제로 보고·듣고·알 수 있는 범위에서만 player-facing 이야기가 진행된다.

Hunt 중에는 Camp에서 벌어지는 일을 전지적으로 알지 못한다.

나중에 Camp를 플레이하면서 같은 사건의 반대편을 새롭게 경험한다.

## 관계와 감정

- 주변 인물은 반복해서 만나는 실제 관계의 대상
- 관계는 호감도 숫자가 아니라 함께 겪은 사건의 기억
- 죄책감·후회·걱정·안도·책임감·의견 충돌을 허용
- 관계가 학생 선택의 무게를 만들 수 있음
- 모욕·낙인·죄책감으로 숨겨진 정답을 강요하는 구조는 피함

학생이 늦게 돌아온 뒤 기다린 사람을 보고 미안함을 느끼는 것은 충분히 가능한 역사 체험이다.

## 선택과 결과

모든 선택이 똑같이 좋은 결과를 가질 필요는 없다.

- 더 위험한 선택
- 더 후회스러운 선택
- 더 큰 부담을 만드는 선택

도 있을 수 있다.

핵심은 결과가 당시 상황에서 납득 가능해야 한다는 것이다.

# **Choice Fairness = 결과 평등이 아니라 결과의 납득 가능성**

## 공포와 위협

공포게임 같은 순간도 허용한다.

특히 Hunt에서는

- 어둠
- 시야 밖 소리
- 갑작스러운 움직임
- 짧은 jump-like scare
- 짧은 회피/도주
- strong screen/sound accent

를 사용할 수 있다.

다만 고어·반복 jump scare·적 HP/처치 루프보다 **자연 속 인간의 취약함과 불확실성**을 강조한다.

## Screen Treatment

원칙:

# **Subtle by default. Strong when earned.**

강도:

- `none`
- `subtle`
- `accent`
- `strong-accent` — 드문 핵심 순간

사용 가능:

- 불의 따뜻한 색
- 시간대별 명암/색온도
- focus/vignette
- sway/jolt
- blink/fade
- 짧은 red/dark accent

반복적인 HP식 red flash는 피한다.

Reduced effects에서도 같은 사건과 판단은 유지한다.

## Historical Imagination

학생이 단순히

> `구석기에는 사냥을 했다.`

라고 외우는 것보다

> `먹을 것을 구하려면 멀리 갈 수도 있고, 위험하고, 돌아갈 시간과 같이 간 사람도 생각해야 했을 것 같다.`

처럼 **조건·감정·관계가 있는 삶을 상상**하게 하는 것이 목표다.

## Learning Invariants

학생마다 다른 경로를 경험해도 다음 핵심 역사 조건은 전체 체험에서 유지한다.

- 도구와 생활 행동
- 불과 생활 유지
- 먹을거리 확보의 불확실성
- 사람들의 상호의존
- 자연·시간·거리 제약
- 한 장소 생활의 부담 누적
- 이동 생활의 맥락

모두가 같은 장면과 같은 감정을 경험할 필요는 없다.

## 같은 세계, 다른 몸

```text
같은 공동체의 같은 시기
├─ Hunt 사람의 몸과 눈
├─ Gather 사람의 몸과 눈
└─ Camp 사람의 몸과 눈
```

한 역할에서 본 사람이 다른 역할에서는 `나`가 될 수 있다.

관점 전환 자체는 복잡한 퍼즐일 필요가 없다.

```text
짧은 전환
→ 현재 역할 표시
→ 새 몸과 시야
```

이면 충분할 수 있다.

## Clarity / Scaffold

몰입은 조작을 숨기는 것이 아니다.

학생이 막힐 때:

1. 사람/환경 cue
2. 시각/사운드 cue
3. 짧은 행동 문구
4. 명확한 hint

순으로 돕는다.

학생이 자연스럽게 이해하면 UI는 뒤로 물러난다.

## 현재 핵심 경험 구조

```text
Embodied Cold Open
→ 현재 역할 관점 진입
→ 첫 관점의 하루
→ 관점 전환
→ 두 번째 관점
→ 관점 전환
→ 세 번째 관점
→ Common Evening
→ 며칠 변화
→ 공동체 고민
→ 이동
→ 새 거처
→ Historical Concept Bridge
```

Reflection은 필요할 때만 배치한다.

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
10. 해당 Stage 문서

공통 몰입:

- `docs/07_IMMERSION_NARRATIVE_BIBLE.md`

기술:

- `docs/06_TECH_BLUEPRINT.md`

## Design Reboot R2

기존 React/Hunt v0.1은 삭제하지 않는다.

하지만 현재는 **Legacy Functional Prototype**이다.

다음 공식 구현 단계:

# **R2 Stage 07 — Embodied Experience Skeleton**

먼저 브라우저에서

- Hunt role-true POV
- 내 몸 + 사람 + 환경
- 관계 반응
- subtle/accent/strong-accent 일부
- reduced effects
- 짧은 관점 전환

이 실제로 성립하는지 작은 골격으로 검증한다.

## 기술 방향

- React + TypeScript + Vite 유지
- 자유 3D/FPS를 전제하지 않음
- Cinematic First-Person Interactive Scene
- 범용 NPC AI 없음
- 호감도 시스템 없음
- 대규모 대화 트리 없음
- 점수/HP/EXP/ranking 없음
- 범용 VFX 엔진 없음

## 완료 정의

- **Functional Complete** — 정상 동작/테스트
- **Embodied Complete** — 몸과 시야가 자연스럽고 공간 안에 존재함
- **Relationship/Agency Complete** — 사람·고민·감정·선택 기억이 실제로 느껴짐
- **Immersion Complete** — 역할의 제한된 관점으로 살아가는 느낌과 역사적 상상력이 확인됨
- **Production Complete** — 역사 검토, 최종 아트/사운드, 접근성, QA 완료
