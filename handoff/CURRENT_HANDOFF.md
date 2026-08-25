# CURRENT_HANDOFF.md

## Current responsibility completed

# **Design Reboot R2 — Emotional Realism / Horror / Role-True Perspective Refinement**

이번 보정의 핵심은 Deep Audit이 안전 쪽으로 과보정될 수 있었던 부분을 다시 현실적인 방향으로 조정한 것이다.

---

## 최신 핵심 원칙

### 1. 죄책감·후회·두려움은 금지하지 않는다

허용:

- 늦게 돌아와 기다린 사람을 보고 죄책감
- 무리한 선택 뒤 동행자의 피로를 보고 후회
- 빈손 귀환의 아쉬움
- 위험을 함께 피한 뒤 안도

피할 것:

- NPC 모욕/조롱
- 학생 개인을 도덕적으로 낙인
- 죄책감만으로 숨겨진 정답 강요

# **현실적인 감정은 허용하고, 심리적 강압은 피한다.**

---

### 2. 공포게임 같은 순간도 가능

Hunt에서 허용:

- 어둠
- 시야 밖 소리
- 갑작스러운 가까운 움직임
- 짧은 jump-like scare
- 짧은 회피/도주
- 순간적 strong screen accent
- 사건 뒤 남는 긴장

금지에 가까운 것:

- 고어 자체를 볼거리로 삼기
- 의미 없는 jump scare 반복
- 적 HP/처치 루프
- 공포만 남고 역사적 맥락이 사라지는 구성

---

### 3. Screen Treatment

최신 원칙:

# **Subtle by default. Strong when earned.**

강도:

- `none`
- `subtle`
- `accent`
- `strong-accent` — 드문 핵심 순간

짧은 red/dark accent, jolt, strong focus도 상황이 충분히 쌓였다면 사용 가능.

반복적인 HP-style red flash는 사용하지 않는다.

---

### 4. 역할 관점은 단순하고 명확하게

역할 시작 시 학생에게 현재 시점을 알려줄 수 있다.

예:

> 사냥을 나선 사람의 관점

그 뒤에는 반복 설명하지 않는다.

# **Hunt를 플레이하면 Hunt 사람의 눈·몸·지식·걱정으로만 세계를 본다.**

- Camp에서 실제 무슨 일이 벌어지는지 알 수 없음
- 다른 사람의 속마음을 전지적으로 보여주지 않음
- 나중에 Camp 관점에서 반대편 사실을 알게 됨

Perspective Bridge는 복잡한 퍼즐일 필요 없음.

`짧은 transition → 현재 역할 표시 → 새 몸/시야`면 충분할 수 있다.

---

### 5. 학습 방향

강제 퀴즈/Reflection을 역할마다 삽입하지 않는다.

최신 목표:

```text
Immersion
→ Historical Imagination
→ Understanding
→ Conceptualization
```

학생이 먼저 자기 경험으로

- 왜 멀리 가는 것이 부담인지
- 왜 자연이 무서웠을지
- 왜 다른 사람이 필요했는지
- 왜 불과 거처가 중요했는지
- 왜 이동을 고민했을지

를 상상하고 이해하게 한다.

교과 개념은 그 경험을 정리하는 단계다.

---

## 최신 canonical 문서

- `docs/01_PROJECT_CORE.md` v6
- `docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md` v3
- `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md` v3
- `docs/01C_SUBTLE_SCREEN_TREATMENT_PRINCIPLES.md` v3
- `docs/01D_LEARNING_CLARITY_SAFETY_HISTORICAL_INTEGRITY.md` v2
- `docs/02_EXPERIENCE_STRUCTURE.md` v6
- `docs/07_IMMERSION_NARRATIVE_BIBLE.md` v5

---

## Legacy runtime

현재 `src/`의 Hunt v0.1은 **Legacy Functional Prototype**이다.

이번 세션은 문서/설계 보정이며 runtime 코드는 변경하지 않았다.

---

## 다음 공식 작업

# **R2 Stage 07 — Embodied Experience Skeleton**

우선 구현/검증:

1. 역할 진입 시 `Hunt 관점` 명료화
2. Hunt role-true first-person frame
3. 내 몸 + R/H1/H2 + 환경
4. 도구 전달
5. 걷기/몸 낮추기
6. 사람 반응
7. subtle/accent/드문 strong-accent prototype
8. reduced effects
9. 짧고 명료한 Perspective Bridge
10. 브라우저 교사 QA

가장 중요한 질문:

> **사냥하는 사람을 플레이할 때, 정말 그 사람의 눈과 몸과 제한된 정보 안에서 그 시대를 살아가는 느낌이 드는가?**
