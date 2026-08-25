# R2 Stage 01~07 Sequential Audit

> 상태: 진행 중
>
> 목적: 최근 Design Reboot R2 변경이 누적된 뒤 Stage 01부터 Stage 07까지 의존 순서대로 재검증하고, 각 단계의 오류·모순·누락·과설계를 수정한다.

## 감사 순서

1. Stage 01 — Project constitution / embodied POV / relationship / treatment / historical imagination
2. Stage 02 — overall experience structure / role-true perspective / cross-role continuity
3. Stage 03 — Hunt story
4. Stage 04 — Hunt playflow
5. Stage 05 — role map / three-role balance
6. Stage 06 — technical blueprint / contracts / testability
7. Stage 07 — Embodied Experience Skeleton implementation + browser/automation readiness

## 공통 판정 기준

- 상위 문서와 충돌하지 않는가
- 같은 개념이 다른 문서에서 다른 의미로 쓰이지 않는가
- 학습 목표가 몰입 장치와 실제로 연결되는가
- role-true limited POV가 유지되는가
- 감정/공포/죄책감이 역사적 상황에서 발생하며 조작적 도덕 채점으로 변질되지 않는가
- 선택 결과가 납득 가능하고 뒤에서 회수되는가
- Embodied First-Person이 시각 장식이 아니라 행동/공간 계약인가
- screen treatment가 장면 의미에 종속되는가
- 구현 계약이 React/TypeScript 수준에서 명시적이고 테스트 가능한가
- 범용 엔진 과설계를 만들지 않는가
- 최신 R2와 Legacy Hunt v0.1의 경계가 명확한가

---

# Stage 01 감사

## 판정

**PASS / REVISED**

## 확인한 강점

- Project Core v7의 `Immersion → Historical Imagination → Understanding → Conceptualization` 방향은 최신 의도와 일치한다.
- 01B의 Emotional Reality, 01C의 `Subtle by default. Strong when earned.`, 01D의 역사성/접근성 경계는 상호 양립 가능하다.
- 죄책감·후회·공포를 금지하지 않고 역사적 맥락과 관계 결과에서 허용하는 기준이 적절하다.

## 발견한 문제

- 01A가 이전 Deep Audit의 관점 전환 규칙을 유지해 continuity anchor를 과도하게 강제했다.
- 몸 상태 표현이 피로/긴장에 치우쳐 망설임·후회·안도 같은 최신 Emotional Reality와 충분히 연결되지 않았다.
- Role-True limited POV가 01A 시각 계약에 직접 포함되지 않아 하위 구현에서 전지적 정보가 섞일 가능성이 있었다.

## 수정

`docs/01A_EMBODIED_FIRST_PERSON_PRINCIPLES.md`를 v4로 개정했다.

- 역할 진입 시 짧은 관점 표시 허용
- 역할 내부는 해당 인물이 보고/듣고/아는 범위만 사용
- 다른 장소/타인의 속마음/미래 결과 전지적 노출 금지
- continuity anchor는 유용할 때만 사용하고 개수 강제 제거
- 망설임/후회/안도의 embodied cue 추가
- strong-accent와 reduced-effects의 최신 원칙 반영

## 남은 리스크

- 실제 손/몸/배경 자산이 생기기 전에는 uncanny/광원/원근 문제를 문서만으로 검증할 수 없다.
- 역할 관점 표시가 몰입을 깨는지 여부는 Stage 07 브라우저 QA가 책임진다.

---

각 Stage를 완료할 때 발견/수정/남은 리스크를 이 문서에 누적한다.
