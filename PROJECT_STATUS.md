# PROJECT_STATUS.md

## Current phase

# **Design Reboot R2 — Stage 01~06 Deep Audit + Emotional Realism Refinement 완료. 다음 공식 단계는 R2 Stage 07 — Embodied Experience Skeleton.**

기존 Hunt v0.1은 기능적으로 동작하지만 새 설계의 최종 기준이 아니다.

현재 판정:

- Legacy Hunt v0.1: **Functional Prototype / preserved**
- R2 Stage 01~06 latest design: **canonical design baseline**
- Embodied First-Person runtime: **not yet implemented**
- Role-True Perspective runtime: **not yet implemented**
- Relationship / emotional consequence runtime: **not yet implemented**
- Screen Treatment runtime: **not yet implemented**

---

## 최신 방향 보정

Deep Audit 이후 추가 논의를 통해 안전 기준이 지나치게 보수적으로 읽힐 수 있는 부분을 다시 조정했다.

### 유지

- 초등학생용 역사 체험
- Embodied First-Person
- 관계 기억
- 비획일적 결과
- 역사적 정확성과 재구성 구분
- 접근성/reduced effects

### 보정

1. **죄책감·후회·걱정은 금지하지 않음**
   - 역사적 상황과 관계 결과에서 자연스럽게 생길 수 있음
   - 모욕/낙인/숨겨진 도덕 시험만 피함

2. **공포게임 같은 순간 허용**
   - Hunt에서 어둠, 시야 밖 움직임, 순간적 놀람, 짧은 회피/도주, 강한 accent 가능
   - 공포가 역사적 자연 위험과 인간의 취약성을 강화해야 함

3. **강한 화면 효과를 완전히 금지하지 않음**
   - `Subtle by default. Strong when earned.`
   - 한 번의 red/dark accent, jolt, strong focus 등을 핵심 순간에 사용 가능
   - 반복/남용/HP-style feedback은 피함

4. **관점 전환은 단순하게 명료화 가능**
   - 역할 시작 시 `사냥을 나선 사람의 관점`처럼 알려줄 수 있음
   - 역할 안에서는 그 사람이 실제로 보고 알고 걱정하는 범위로만 진행
   - anchor 규칙을 기계적으로 강제하지 않음

5. **학습은 몰입에서 자연스럽게 이어지게 함**
   - 모든 역할 뒤 강제 reflection/quiz 불필요
   - 목표 흐름:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Conceptualization
```

---

## 최신 Stage 01 문서

- `docs/01_PROJECT_CORE.md` — **v7 Role-True Emotional Historical Experience**
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` — v3
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` — **v3 Emotional Reality**
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` — **v3 Strong When Earned**
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` — **v2 Emotional Safety / Historical Imagination**

---

## Stage 02

`docs/02_EXPERIENCE_STRUCTURE.md` — **v6 Role-True Embodied Perspective**

핵심:

- 역할 전환 시 현재 관점은 짧게 명시 가능
- 역할 진입 후에는 그 사람의 제한된 시야와 지식으로만 플레이
- Hunt 중 Camp의 내부 상황을 전지적으로 알지 않음
- 다른 역할에서 이전 사건의 반대편을 나중에 알게 됨
- Micro Reflection은 선택 사항
- 몰입이 역사적 상상력으로 이어지는 구조

---

## 관계/감정 원칙

허용 가능한 감정:

- 두려움
- 긴장
- 죄책감
- 후회
- 걱정
- 책임감
- 안도
- 애착
- 의견 충돌
- 성취감

핵심 구분:

# **현실적 감정은 허용 / 모욕·낙인·심리적 강압은 피함**

모든 선택이 동일하게 좋은 결과를 가질 필요는 없다.

Choice Fairness는 `결과 평등`이 아니라 **결과가 당시 상황에서 납득 가능한가**다.

---

## Threat / Horror 방향

Hunt는 가장 넓은 감정/연출 범위를 가질 수 있다.

허용:

- 어둠
- 시야 밖 소리
- 갑작스러운 가까운 움직임
- 짧은 jump-like scare
- 짧은 회피/도주
- strong screen accent
- 사건 뒤 남는 긴장

피할 것:

- 고어를 핵심 볼거리로 삼기
- 의미 없는 반복 jump scare
- 적 HP/처치 루프
- 공포만 남고 역사적 맥락이 사라지는 구성

---

## Screen Treatment 방향

기본:

```text
none
subtle
accent
strong-accent (rare)
```

원칙:

# **Subtle by default. Strong when earned.**

가능:

- warm color
- dusk shift
- vignette/focus
- blink/fade
- sway/jolt
- 짧은 red/dark accent

접근성:

- 반복 빠른 flashing 금지
- reduced effects 지원
- 효과를 줄여도 사건/판단/학습은 유지

---

## Historical Imagination

학생이 플레이 후 단순히

> `구석기에는 사냥을 했다.`

라고 기억하는 것보다

> `먹을 것을 구하려면 멀리 갈 수도 있고, 위험하고, 돌아갈 시간과 같이 간 사람도 생각해야 했을 것 같다.`

처럼 **조건과 감정이 있는 삶을 상상**하게 하는 것이 목표다.

개념 설명은 그 경험에 이름을 붙이는 역할을 한다.

---

## Legacy runtime baseline

현재 `src/`의 Hunt는 기존 v0.1이다.

보존 가치:

- React + TypeScript + Vite
- Experience Orchestrator
- reducer/tests
- qualitative RoleCompletion
- non-score 구조
- CI baseline

기존 자동 검증 기준:

- 7 test files
- 25 tests
- typecheck PASS
- production build PASS

새 설계를 아직 runtime이 구현한 것은 아니다.

---

## Next official task — R2 Stage 07

# **Embodied Experience Skeleton**

Stage 07에서 우선 검증할 것:

1. 역할 시작 시 현재 시점 명료화
2. Hunt role-true first-person frame
3. 내 손/몸 + R/H1/H2가 같은 공간에 존재
4. 도구 전달
5. 걷기/몸 낮추기 POV
6. 관계 반응
7. screen treatment `subtle/accent/strong-accent` 일부 prototype
8. reduced effects
9. 짧은 Perspective Bridge
10. 실제 브라우저 교사 QA

완료 질문:

> **사냥하는 사람을 플레이하면 정말 그 사람의 눈과 몸과 제한된 정보로 하루를 살아가는 느낌이 드는가?**

이 Gate를 통과한 뒤 Stage 08 Hunt Embodied Vertical Slice 전체를 구현한다.

---

## Current unfinished work

- R2 Stage 07 Embodied Experience Skeleton
- R2 Stage 08 Hunt Embodied Vertical Slice
- R2 Stage 09 Teacher Immersion QA
- R2 Stage 10 Student Pilot
- R2 Stage 11 Gather
- R2 Stage 12 Camp
- R2 Stage 13 Three-Perspective Integration
- R2 Stage 14 Multi-day Change
- R2 Stage 15 Migration / New Home
- R2 Stage 16 Historical Concept Bridge
- Player Body Continuity Sheets
- Cast Continuity Sheets
- final visual/audio production
