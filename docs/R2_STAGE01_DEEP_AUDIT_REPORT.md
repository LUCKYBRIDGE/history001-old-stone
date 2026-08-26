# R2 Stage 01 Deep Audit Report — Historical Snapshot

> **문서 지위: Historical Audit Record / Non-Canonical.**
>
> 이 문서는 R2 초기 단계에서 `몰입 강화`가 안전·명료성·역사적 정확성과 충돌할 수 있는 지점을 찾기 위해 작성된 감사 기록이다.
>
> 이후 사용자 피드백과 추가 리비전으로 일부 결론은 조정되었다. 현재 설계 판단은 반드시:
>
> - `docs/00_CANONICAL_BASELINE.md`
> - `docs/01_PROJECT_CORE.md`
> - `docs/01A~01E`
>
> 를 따른다.

---

# 1. 이 Audit에서 유효하게 남은 문제의식

다음 경고는 현재도 유효하다.

- 몰입 자체가 학습 목표를 대체하면 안 됨.
- 1인칭 몸이 어색하면 오히려 presence가 깨질 수 있음.
- UI를 너무 숨겨 학생이 행동을 이해하지 못하면 실패.
- 역사 사실과 재구성 사건을 구분해야 함.
- 강한 화면 효과는 상황의 원인보다 먼저 나오면 안 됨.
- 역할별 몸/행동을 근거 없는 성별 고정관념으로 연결하면 안 됨.
- 분기 때문에 필수 역사 개념이 사라지면 안 됨.
- 자동 테스트로 실제 몰입/개념 이해를 완료 처리하면 안 됨.

---

# 2. 이후 리비전에서 조정된 부분

초기 Audit은 일부 영역에서 안전 쪽으로 과보정되었다.

현재는 다음처럼 수정됐다.

## 죄책감 / 후회

과거 경향:

- 죄책감을 가능한 한 줄이려는 방향

현재 canonical:

# **역사적 상황과 관계에서 자연스럽게 생기는 죄책감·후회는 허용하고 활용한다.**

금지하는 것은:

- 학생 인격을 나쁜 사람으로 판정
- 도덕 점수
- 죄책감만으로 숨은 정답 강요

## 공포

과거 경향:

- 공포를 가능한 낮은 강도로 제한

현재 canonical:

# **공포게임 같은 순간도 가능하다.**

단:

- 세계 안에 원인이 먼저 존재
- 사람/몸 반응이 먼저 형성
- 효과는 보조
- 반복 자극/고어 중심으로 변질하지 않음

## Screen Treatment

현재 원칙:

# **Subtle by default. Strong when earned.**

필요한 순간에는 strong-accent도 허용한다.

---

# 3. 현재 네 가지 균형 축

다음이 동시에 성립해야 한다.

1. Historical Integrity
2. Learner Safety & Accessibility
3. Learning Clarity
4. Embodiment & Agency

이 네 축은 `몰입을 약하게 만들라`는 뜻이 아니다.

# **강한 몰입도 역사적 원인·학생 이해·접근성 안에서 설계하라는 뜻이다.**

---

# 4. 현재 학습 흐름

초기 Audit 이후 학습 철학은 다음으로 정리됐다.

```text
Immersion
→ Historical Imagination
→ Understanding
→ Naming / Conceptualization
```

교과 연결:

```text
Experience
→ Name
→ Reuse
→ Connect
```

Reflection은 필요할 때 사용할 수 있지만 모든 장면 뒤의 필수 중간 단계가 아니다.

---

# 5. 현재 완료 판정과 이 문서의 역할

현재 Stage별 상태·테스트·CI는 이 문서가 소유하지 않는다.

정확한 최신 정보:

- `PROJECT_STATUS.md`
- `handoff/TEST_REPORT.md`

이 문서는 오직:

# **R2 설계가 왜 몰입 하나만 극대화하는 구조가 아니며, 어떤 초기 위험을 발견했는지 설명하는 역사적 감사 기록**

으로 남긴다.

과거 문구와 최신 canonical이 충돌하면 최신 canonical을 따른다.
