# 구석기 역사 체험 웹게임
## Stage 02 — 전체 경험 구조 v9 / Same-Day Role-True Perspective

> 목적: Stage 01의 Embodied First-Person, Emotional Reality, Historical Imagination, Role-True Perspective, Curriculum Anchor를 전체 체험 구조로 변환한다.
>
> 기준선: `docs/00_CANONICAL_BASELINE.md`

---

# 1. 전체 경험의 한 문장

# **같은 구석기 공동체의 같은 하루를 서로 다른 사람의 몸과 제한된 시야로 차례로 살아보며, 도구·불·먹을거리·거처·이동·위험·관계가 공동체 전체에서 어떻게 이어지는지 이해하는 역사 체험.**

---

# 2. Student Play Order ≠ In-World Time

학생 플레이 순서 예:

```text
Hunt → Gather → Camp
```

세계 안의 시간:

```text
Same Day 1
├─ Hunt perspective
├─ Gather perspective
└─ Camp perspective
```

규칙:

- 역할 완료는 `학생이 이 관점을 경험했다`는 진행 상태.
- 역할 완료로 세계 날짜가 증가하지 않음.
- 역할 순서를 바꿔도 동일 `dayId`.
- 한 역할의 결과가 다른 역할의 이미 일어난 과거를 소급 변경하지 않음.
- cross-role signal은 후속 표현/의미에만 사용.
- 세 관점 뒤 Common Evening 한 번.

---

# 3. 전체 경험 뼈대

```text
Role Orientation
↓
Perspective Morning Echo
↓
Role Experience
↓
Role Completion
↓
Perspective Bridge
↓
Next Role Orientation
↓
...
↓
Common Evening
↓
Historical / Curriculum Connection
↓
Later-Day Change
```

Common Morning을 세 번 반복하지 않는다.

Perspective Morning Echo는 같은 아침을 다른 자리에서 짧게 다시 경험하게 할 수 있다.

---

# 4. 교과 Anchor 분산

교과 핵심을 한 역할에 몰지 않는다.

```text
Hunt
→ 도구 첫 만남
→ 뗀석기 상위 개념 + 주먹도끼 대표 예
→ 이동 거리 / 자연 위험 / 동굴·바위 그늘 후보

Gather
→ 채집
→ 도구 재사용 / 가공
→ 가까운 자원 한계 / 범위 확대

Camp
→ 불 / 조리
→ 현재 임시 거처 생활/손질
→ 경험 뒤 막집 명명
→ 새 거처 후보 재평가

Common Evening / Conceptualization
→ 역할 경험을 공동체 생활로 통합
→ 실제 유물/유적과 연결
```

---

# 5. Experience → Name → Reuse → Connect

## Experience

먼저 역할 안에서 몸으로 겪는다.

예:

- R에게 돌도구를 받음
- 불에 손을 가까이 함
- 현재 임시 거처를 봄
- 자연 거처 후보를 살핌

## Name

짧은 terminology reveal.

도구 예:

> **뗀석기**  
> 돌을 깨뜨리거나 떼어 만든 도구. 지금 손에 든 것은 그 대표적인 예인 **주먹도끼**다.

## Reuse

다른 행동/역할에서 다시 의미 있게 사용.

## Connect

교과서 표현·실제 유물/유적과 연결.

---

# 6. 역할 Orientation

역할 전환을 숨기지 않는다.

예:

> **사냥을 나선 사람의 관점**

> **거처에 남아 생활을 이어가는 사람의 관점**

그 뒤 역할 내부에서는 반복 HUD처럼 표시하지 않는다.

---

# 7. Hunt Perspective

# **멀어짐 → 흔적 → 도구 → 발견 → 가능성 → 위험 → 새 장소 → 귀환**

핵심:

- 뗀석기/주먹도끼 첫 연결
- 사냥 전 관찰
- 이동 거리와 먹을거리 불확실성
- 자연 거처 후보 발견 가능성
- 불/사람/거처로 돌아가는 의미

Hunt는 `주먹도끼 설명 역할`이 아니다.

---

# 8. Gather Perspective

# **가까이 살핌 → 분별 → 손으로 채집 → 가공 → 반복 → 장소 기억 → 범위 확대**

핵심:

- 풀뿌리·열매 등 먹을거리
- 땅파기/두들기기 등 도구 재사용
- 식량 확보가 사냥만이 아님
- 가까운 자원이 늘 충분하지 않음
- 이동 범위가 넓어지는 이유

Hunt의 추적/공포 climax를 복제하지 않는다.

---

# 9. Camp Perspective

# **불 → 생활 유지 → 현재 거처 손질 → 시간 흐름 → 빈자리 → 기다림 → 재회 → 다음 장소 고민**

핵심:

- 불의 생활 기능
- 음식 익히기
- 현재 임시 거처의 실제 불편/손질
- 경험 뒤 `막집` 명명
- 가죽·도구·먹을거리 손질
- 자연 거처 후보 재평가

Camp에서는 Hunt 위험의 실제 내용을 전지적으로 알 수 없다.

---

# 10. Stable World Facts

역할 순서와 무관하게 같은 Day 1에서 유지:

- day identity
- community identity
- 아침의 기본 공간
- 불이 있는 생활 거점
- 반복 등장 인물
- 현재 공동체가 사용하는 임시 거처의 기본 형태
- 그날의 기본 자연 조건

---

# 11. Cross-Role Signals

질적 signal 예:

- `hunt-returned-late`
- `hunt-returned-with-food`
- `hunt-returned-empty-handed`
- `hunt-cave-shelter-noticed`
- `hunt-cave-shelter-inspected`
- `hunt-shared-carry`

원칙:

- 후속 역할/저녁에서 의미가 달라질 수 있어야 함.
- 학생 행동과 연결.
- 점수가 아님.
- transient animation/reducer step 전체를 공유하지 않음.

---

# 12. 자연 거처 후보의 Same-Day 의미

Hunt에서 자연 거처 후보를 발견했다면 후속 표현에서 회수 가능하다.

```text
Hunt
→ 자연 거처 후보 발견/살핌

후속 Camp/Common Evening
→ 돌아온 사람이 장소를 설명
→ 현재 거처 생활 부담과 함께 재평가
```

금지:

- 발견 즉시 공동체 전체 이사 완료
- 과거 Camp 장면 소급 변경
- `동굴 = 더 좋은 집` 자동 판정

---

# 13. Perspective Bridge

점수표가 아니다.

목적:

- 방금 경험은 공동체 하루의 일부였음을 느끼게 함.
- 다음 사람의 관점으로 이동할 준비.
- 용어를 반복 시험하지 않음.

---

# 14. Common Evening

가능:

- 가져온 먹을거리/빈손
- 몸의 피로
- 서로의 귀환
- 불
- 도구
- 현재 거처 상태
- 새 자연 거처 후보 이야기
- 내일의 불확실성

금지:

- 총점
- 역할별 우승
- 사냥 성공 = 최고 결과
- 즉시 교과 정답표

---

# 15. Historical / Curriculum Connection

좋은 연결:

```text
내가 사용한 도구
→ 뗀석기
→ 대표적인 예: 주먹도끼

내가 생활/손질한 임시 거처
→ 막집

내가 살핀 자연 공간
→ 동굴 / 바위 그늘도 생활 공간으로 이용

불 앞에서 겪은 것
→ 추위·보호·조리와 연결
```

---

# 16. Multi-Day Change

Day 1 이후에만 장기 변화 시작.

가능한 누적:

- 가까운 먹을거리 감소
- 탐색 거리 증가
- 현재 거처 유지 부담
- 날씨/계절 변화
- 새 거처 후보
- 물/식량 접근성

이 조건이 쌓여 `왜 옮겨 다니며 살았을까?`를 서사적으로 만든다.

---

# 17. Learning Invariants vs Narrative Variants

Learning Invariants:

- 핵심 교과 개념과 생활 조건은 어느 경로에서도 전체 체험 안에 남아야 함.

Narrative Variants:

- 누가 먼저 말했는지
- 언제 돌아왔는지
- 무엇을 들고 왔는지
- 어떤 위험을 겪었는지
- 어떤 관계 기억이 생겼는지

달라질 수 있음.

# **분기는 역사적 사실을 바꾸는 것이 아니라 개인 경험의 의미를 바꾼다.**

---

# 18. Stage 02 Acceptance Gate

- play order와 world time이 분리되는가?
- 세 역할이 같은 `dayId`를 공유하는가?
- 역할 내부는 limited POV인가?
- 교과 Anchor가 역할에 분산되는가?
- `뗀석기 → 주먹도끼` 위계가 보존되는가?
- 현재 임시 거처/막집/동굴·바위 그늘 용어가 혼동되지 않는가?
- 필수 교과 개념이 특정 분기 하나에 갇히지 않는가?
- cross-role signal이 과거를 소급 변경하지 않는가?
- Common Evening이 점수표가 아닌 통합 장면인가?
