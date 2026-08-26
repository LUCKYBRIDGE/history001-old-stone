# 구석기 역사 체험 웹게임
## Stage 01~05 설계 재검증 v6 / Canonical Consistency Audit

> 목적: Stage 01~05가 최신 canonical baseline과 일치하는지 검증한다.
>
> 기준선: `docs/00_CANONICAL_BASELINE.md`

---

# 1. 최종 판정

# **PASS AFTER CANONICAL UNIFICATION**

이번 검증에서 핵심은 새 기능 추가가 아니라 **용어·위계·역할 경계·사실/재구성·완료 범위의 통일**이다.

---

# 2. 공통 판정 기준

각 Stage가 다음을 만족해야 한다.

- Role-True limited POV
- Embodied First-Person
- Emotional Reality
- Choice Fairness = causal plausibility
- Student Play Order ≠ In-World Time
- Experience → Name → Reuse → Connect
- `뗀석기 → 대표적인 예: 주먹도끼` 위계
- current temporary shelter / 막집 / 동굴·바위 그늘 용어 분리
- Historical Fact / Reconstructed Event 분리
- 필수 교과 개념의 분기 독점 방지
- 관계·공포·죄책감 등을 역사적 상황과 연결
- generic engine 과설계 방지

---

# 3. Stage 01 판정

최신 Core는 다음을 명확히 소유한다.

- 프로젝트 정체성
- 학습 흐름
- 교과 Anchor
- 사실/재구성
- 역할 제한 시점
- same-day rule
- body/relationship/emotion/choice/threat/treatment
- 거처와 도구 용어

판정:

# **PASS**

---

# 4. Stage 01E 판정

핵심 교과 Anchor:

- 뗀석기
- 주먹도끼
- 불
- 막집
- 동굴/바위 그늘
- 이동 생활
- 사냥·채집·가공

최신 오개념 Guardrail:

- 모든 뗀석기 = 주먹도끼 아님
- 주먹도끼 = 사냥 무기 전용 아님
- 동굴 = 유일한 집 아님
- 막집 = 유일한 집 아님
- 동굴 발견 = 자동 이사 아님
- 재구성 인물/사건 = 실제 기록된 개별 사실 아님

판정:

# **PASS**

---

# 5. Stage 02 판정

검증:

- 세 역할은 같은 Day 1
- role order와 world time 분리
- Curriculum Anchor 역할 분산
- cross-role signal의 비소급성
- Common Evening 통합
- Learning Invariant와 Narrative Variant 분리

판정:

# **PASS**

---

# 6. Stage 03 Hunt STORY 판정

최신 흐름:

```text
새벽 불 + 현재 임시 거처
→ R의 돌도구 전달
→ 뗀석기 상위 개념 + 주먹도끼 대표 예
→ 출발
→ 흔적/추적
→ 거리·시간 딜레마
→ 자연 거처 후보 발견 가능
→ 위험/공포
→ 다축 결과
→ 귀환/재회
```

확인:

- 도구는 몸/관계의 물건
- 자연 거처 후보는 자동 정답이 아님
- 공포와 보호 가능성 공존
- 죄책감/후회도 상황에서 자연스럽게 가능

판정:

# **PASS**

---

# 7. Stage 04 PLAYFLOW 판정

검증:

- Scene ≠ Beat
- terminology reveal은 Beat
- 실제 기능 사용 evidence를 Stage 07에서 과장하지 않음
- natural shelter discovery는 직접 관찰/판단 Scene
- fact/reconstruction 관리 정보는 Player에 노출하지 않음

판정:

# **PASS**

---

# 8. Stage 05 Role Map 판정

## Hunt

거리 / 흔적 / 도구 / 위험 / 새 장소 / 귀환

## Gather

채집 / 가공 / 도구 재사용 / 공간 기억 / 범위 확대

## Camp

불 / 현재 거처 / 막집 / 생활 유지 / 기다림 / 재회 / 새 장소 재평가

역할마다 다른 몸·감정·시간 문법을 유지한다.

판정:

# **PASS**

---

# 9. 주요 통일 결과

## 도구

```text
뗀석기
└─ 대표적인 예: 주먹도끼
```

## 거처

```text
현재 임시 거처
→ Camp 실제 생활/손질 뒤 '막집' 명명

자연 거처 후보
→ 살핀 뒤 '동굴 / 바위 그늘' 연결
```

## Fact / Reconstruction

```text
교과서·유물·유적이 뒷받침
→ Historical / Curriculum Fact

구체 인물·하루 사건·대사·감정
→ Reconstructed Event
```

---

# 10. 아직 설계 PASS가 구현 완료를 뜻하지 않는 부분

- 주먹도끼 다용도 interaction
- 막집 생활/손질 및 명명
- 불의 여러 기능 실제 상호작용
- Hunt 전체 공포/선택/결과/귀환
- 학생 오개념 검증

이 부분은 후속 Stage 책임이다.

---

# 11. Stage 01~05 Final Gate

- 상위 문서 간 공식 용어가 하나로 통일됐는가?
- 구형 `뗀석기 · 주먹도끼` 병렬 표현을 canonical 예시로 쓰지 않는가?
- 현재 임시 거처와 막집을 섞지 않는가?
- 동굴/바위 그늘을 자동 새 집으로 만들지 않는가?
- 사실/재구성이 구분되는가?
- Stage 07 proof를 전체 학습 완료로 과장하지 않는가?
- 역할별 문법이 서로 다른가?

현재 판정:

# **PASS**
