# 구석기 역사 체험 웹게임
## Stage 07B — First-Person Visual Production Spec v1 / Concrete Decisions Before Stage 08

> 목적: `docs/07A_FIRST_PERSON_VISUAL_ASSET_BIBLE.md`의 원칙을 실제 제작 직전에 필요한 **확정 규격·생성 방식·reference·파일/manifest·responsive composition·성능·QA gate**로 구체화한다.
>
> 이 문서는 **아트/이미지 제작 실행 규격**이다. React/TypeScript runtime의 최종 타입과 구현 구조는 계속 `docs/06_TECH_BLUEPRINT.md`가 유일한 Technical SSOT다. Stage 08 구현을 시작할 때 필요한 최소 타입만 Stage 06 정식 후속 버전에 흡수한다.
>
> 충돌 우선순위:
>
> `01A/01C/01D/01E → 02/03/04/05 → 06 → 07 → 07A → 07B`
>
> 07B는 상위 canonical 원칙을 좁혀 실행 가능하게 만드는 문서이지, 상위를 덮어쓰지 않는다.

---

# 1. 이번 문서에서 확정하는 것 / 아직 확정하지 않는 것

## 지금 확정

1. 최종 시각 방향 = **Grounded Illustrative Realism**
2. 최종 장면 제작 기본 = **Hybrid Embodied Composite**
3. contact-heavy 장면 = **Unified Contact Keyframe 우선**
4. 같은 장소/몸/인물 변형 = **독립 재생성보다 reference-conditioned variation 우선**
5. 기본 화면 composition = **16:9 master + 4:3 / 16:10 필수 안전성**
6. Stage 08 초기 자산은 `minimum coherent set`만 제작
7. 한반도 구석기 자료를 우선 reference로 사용
8. Day 1 주먹도끼는 실제 한 점 복제가 아니라 **한국 구석기 실물 자료에 근거한 fictional canonical object**
9. 초기 critical image는 CSS background보다 `<img>/<picture>` 계열을 우선 검토
10. Stage 08 전 **Visual Production Readiness Gate**를 별도로 통과

## 아직 보류

다음은 source review 없이 지금 고정하지 않는다.

- Hunt Player의 정확한 나이/성별
- 피부색·머리 형태의 세부 역사 단정
- 특정 동물 종의 최종 등장 비율
- 특정 계절/식생의 세밀한 고정
- current temporary shelter의 특정 유적 1:1 복원
- 캐릭터 의복 재질/봉제 방식의 세부
- final audio production
- animation system 규모

# **모호함을 방치하는 것과, 근거 부족 때문에 의도적으로 보류하는 것은 다르다.**

보류 항목은 Stage 08 reference pack에서 source를 확인한 뒤 잠근다.

---

# 2. 확정 Style Target — Grounded Illustrative Realism

## 정의

학생이 `게임 UI를 본다`보다 `그 시대의 한 사람으로 장면 안에 있다`고 느끼게 하는 **사실 기반의 세미리얼 2D 일러스트**.

특징:

- 사람의 비율/손/도구/공간은 현실적으로
- 재질과 빛은 자연스럽게
- 붓질/질감은 약간 허용
- 초고해상도 사진처럼 모공·피부를 과도하게 강조하지 않음
- 그림책식 단순화는 피하되 아동 친화성 유지
- 영화 concept art처럼 안개/색보정으로 모든 정보를 뭉개지 않음

## 피할 것

- hyper-photoreal uncanny face
- glossy cinematic poster look
- fantasy barbarian aesthetic
- cartoon chibi proportion
- textbook cutaway diagram look
- generic AI concept-art fog
- modern camping / survival gear imagery

## 이유

생성형 이미지에서 높은 photorealism은 손/얼굴/광원 inconsistency를 더 크게 드러낸다.
현재 프로젝트는 `한 장의 인상적 그림`보다 `같은 몸과 세계의 continuity`가 더 중요하다.

---

# 3. 최종 Render Strategy — Hybrid Embodied Composite

모든 Scene을 한 방식으로 만들지 않는다.

## Mode A — Layered Reusable Composite

적합:

- walking
- idle
- distant actor
- fire-side observation
- cave approach
- non-contact dialogue beat

구성:

```text
World Plate
+ near/far Occluder
+ Actor Layer
+ Player Body Layer
+ Held Item Layer
+ Light Integration
+ Treatment
+ UI
```

장점:

- pose 재사용
- responsive placement
- Beat variation이 쉬움

## Mode B — Unified Contact Keyframe

다음과 같은 장면은 **한 화면 안의 물리적 접촉 관계를 먼저 통합 이미지로 생성/확정**한다.

- R → 주먹도끼 → 내 손 handoff
- 손으로 지면/흔적 만짐
- 도구로 물건을 밀거나 자름
- 거처 덮개/기둥을 손질
- 바위를 짚고 안쪽을 살핌
- 공동 운반처럼 두 사람이 같은 물체를 잡음

# **두 손·도구·접촉면을 각각 따로 생성해 나중에 억지로 맞추지 않는다.**

기본 순서:

```text
rough composition
→ unified contact keyframe
→ contact geometry QA
→ 필요 시 layer extraction / mask / inpaint
→ runtime composite
```

Mode B에서는 완벽한 layer 재사용성보다 **손-도구-환경의 물리적 납득 가능성**이 우선이다.

## Mode C — Locked-Keyframe Variation

같은 Scene의:

- 표정 변화
- 손이 조금 이동
- 해가 조금 낮아짐
- 일부 오브젝트 상태 변화
- 다음 Beat

는 독립 text-to-image 재생성보다:

- reference image conditioning
- image-to-image
- inpainting
- outpainting
- pose/depth conditioning

으로 만든다.

# **같은 Scene의 다음 Beat는 새로운 세계를 다시 생성하는 일이 아니다.**

---

# 4. 생성형 이미지 제어 우선순위

특정 제품 하나를 강제하지 않는다.

그러나 기능 우선순위는 고정한다.

## 1순위 — Approved Anchor Reference

이미 승인된:

- player body
- R/H1/H2
- handaxe
- shelter
- terrain/cave

reference를 반복 사용한다.

## 2순위 — Structural Control

도구가 지원하면:

- pose skeleton
- depth map
- edge/line control
- segmentation/mask

을 사용한다.

오픈소스 대표 패턴:

- ControlNet 계열 — pose / depth / edge condition
- IP-Adapter 계열 — reference image conditioning

도구 이름 자체가 canonical은 아니다.

## 3순위 — Inpaint / Outpaint

이미 승인된 장면의 일부만 바꿀 때 우선한다.

## 최후 — Independent Text-to-Image

다음 경우에만:

- 완전히 새로운 environment family 시작
- 새 anchor 후보 생성
- 기존 reference로 해결할 수 없는 초기 exploration

# **production continuity 단계에서 매 Beat를 독립 prompt로 새로 생성하지 않는다.**

---

# 5. Historical Visual Reference Policy

## 지역 기준

이 프로젝트는 한국 초등 사회/역사 맥락과 연결되므로 **한반도 구석기 자료를 visual reference 우선순위의 첫 층**으로 둔다.

다만:

- 실제 특정 유적에서 이 Day 1 사건이 있었다고 주장하지 않는다.
- 한 유적의 복원도를 전체 한반도 구석기의 표준 모습으로 고정하지 않는다.

## Reference 우선순위

1. 국립중앙박물관 / 국가유산청 / 공공 박물관
2. 대학·연구기관·학술자료
3. Public Domain / 공공누리 등 사용 조건이 명확한 자료
4. 해외 박물관의 비교 자료
5. 상업 게임/영화는 **composition reference만**, 역사 source로 사용 금지

---

# 6. Handaxe Visual Canon — 구체 reference 확정

Day 1의 주먹도끼는 실물 한 점을 복제하지 않고, **한국 구석기 주먹도끼 morphology를 바탕으로 만든 fictional canonical object**로 확정한다.

## Primary morphology reference

국립중앙박물관 소장 `신수19143`

- 국적/시대: 한국 - 구석기
- 출토지: 경기도 파주시
- 크기: 길이 17.8cm / 너비 10.2cm / 두께 6.4cm
- 설명상 다기능 연모
- 공공누리 제1유형 출처표시 조건

## Secondary proportion / material reference

국립중앙박물관 소장 `신수18710`

- 국적/시대: 한국 - 구석기
- 출토지: 경기도 연천군
- 재질: 화강암
- 크기: 길이 16.5cm / 너비 12.0cm / 두께 7.4cm
- 공공누리 제1유형 출처표시 조건

## Canonical Day-1 Handaxe 규칙

- 길이 감각은 대략 **성인 손바닥보다 확실히 크지만 전투용 장검/도끼처럼 과장하지 않음**
- 자루 없음
- 금속 없음
- 지나치게 polished stone 아님
- 좌우가 완벽한 공장 제품처럼 대칭일 필요 없음
- 날/끝은 사용 가능한 형태지만 fantasy blade처럼 얇게 만들지 않음
- 한쪽 표면 특징과 edge silhouette를 identity marker로 고정

## Teacher/Debug provenance

Day 1 물체는:

> `한국 구석기 실물 주먹도끼 자료를 형태 reference로 삼은 재구성용 가상 개체`

로 취급한다.

실제 `신수19143` 또는 `신수18710`이 이야기 속 그 물건이었다고 말하지 않는다.

---

# 7. Player Body Identity — 지금 잠글 범위

## Hunt Player Body v1에서 잠글 것

- dominant hand: **right**
- hand/forearm proportions: anchor sheet 기준 고정
- 손톱/손가락 길이/관절 실루엣: 같은 사람으로 인식될 정도로 고정
- modern accessories: 없음
- watch / ring / modern seam: 없음
- 같은 Day 1의 dirt/wetness progression: 상태로 유지

`right dominant`는 역사적 사실이 아니라 **production continuity를 위한 reconstructed attribute**다.

Teacher/Debug에서 필요하면 reconstruction note로 관리한다.

## 지금 잠그지 않을 것

- 성별을 강하게 읽히게 하는 시각 표지
- 특정 현대 인종형 stereotype
- 과도하게 꾸민 머리/장식
- 특정 복식 유형을 source 없이 확정

## 손이 보이지 않아도 되는 장면

- 먼 곳 집중
- 큰 환경 변화 확인
- 사람 얼굴/행동에 집중

손이 안 보인다고 first-person 실패가 아니다.

---

# 8. Camera / Composition 규격 확정

3D FOV 수치를 그대로 사용하는 대신 2D composition frame을 고정한다.

## Master Frame

- 기준 aspect: **16:9**
- logical composition space: **1600 × 900**
- runtime placement: normalized coordinate로 변환

이 수치는 실제 이미지 export 해상도를 강제하는 값이 아니라 **구도 좌표계**다.

## Mandatory QA aspect ratios

Stage 08 visual QA에서 최소 확인:

- **4:3** — 1024×768 class
- **16:10** — 1440×900 class
- **16:9** — 1366×768 / 1920×1080 class

21:9 이상은 graceful extension 대상으로 보되 Stage 08 핵심 Gate는 아니다.

## Safe Composition Zones

### Essential World Safe Zone

- 주요 학습/행동 target은 4:3 crop에서도 사라지지 않아야 함
- scene manifest가 `object-position` 성격의 focus anchor를 소유

### Body Safe Zone

- 팔/손은 viewport 바닥 기준으로 anchor
- 단순 `bottom: 0; center` 고정 금지
- pose별 body pivot과 grip anchor 사용

### Contact Safe Zone

handoff/tool-use처럼 핵심 접촉은:

- 4:3 / 16:10 / 16:9 모두 UI에 가리지 않을 것
- crop으로 손 또는 도구 절반이 사라지지 않을 것

## UI 규칙

- contact zone 위에 버튼을 겹치지 않음
- primary attention target 위에 terminology card를 올리지 않음
- UI가 body와 world의 접촉을 끊어 보이게 만들지 않음

---

# 9. Responsive Image Serving 규칙

브라우저 critical visual은 가능하면 `<img>` / `<picture>` 기반으로 브라우저가 일찍 발견할 수 있게 한다.

## Initial Scene

- 첫 world plate는 lazy-load하지 않음
- 명시적 width/height 또는 aspect-ratio로 layout shift 방지
- 필요하면 `fetchpriority="high"` 검토
- `srcset` / `sizes`로 viewport에 맞는 후보 제공

## Later Scene

- 다음 probable scene만 1단계 ahead preload/prefetch 후보
- 역할 전체 이미지를 시작 시 전부 다운로드하지 않음

## Crop

- world plate: `object-fit: cover` 계열 가능
- scene별 `object-position`을 manifest로 제어
- 사람/손/도구처럼 중요한 foreground를 background crop에 의존시키지 않음

---

# 10. Production Export / Format 정책

초기 Stage 08 target:

## Opaque World Plate

우선 검토:

1. AVIF
2. WebP fallback

## Transparent Foreground

우선:

1. WebP alpha
2. PNG는 alpha edge/품질 때문에 실제로 필요할 때

## 금지

- lossless PNG world plate 대량 사용
- 같은 원본을 viewport별로 무제한 수동 복제
- GIF animation

## Quality Rule

압축으로:

- 손가락 edge
- handaxe edge
- cave 입구 명암
- actor 얼굴/손

이 뭉개지면 용량보다 정보 보존을 우선한다.

---

# 11. Stage 08 Soft Performance Budget

교실 네트워크와 첫 진입 체감을 고려해 **soft target**으로 시작한다.

아래 수치는 측정 뒤 조정 가능하지만 아무 기준 없이 시작하지 않는다.

## First meaningful scene

- initial critical image payload 목표: **1.2MB 이하**
- 상한 경고선: **1.8MB**
- 초기 world plate 1장 목표: **500KB 이하**
- 초기 alpha foreground 1장 목표: **250KB 이하**

## Simultaneous foreground

초기 화면에서 production alpha layer를 무제한 쌓지 않는다.

권장:

- player body
- held/contact item
- 1~2 actor/occluder group

수준에서 먼저 측정한다.

## Preload

- current scene
- 가장 가능성이 높은 next scene 1개

정도부터 시작한다.

# **성능 예산 때문에 교육적 contact를 잘라내지 않고, asset/format/scene packaging을 먼저 최적화한다.**

---

# 12. Asset Folder / Naming 규칙

Stage 08 시작 시 다음 구조를 기본으로 한다.

```text
src/assets/production/
  hunt/
    world/
      camp/
      travel/
      rock-shelter/
      return/
    body/
      hunt-player-01/
    cast/
      r/
      h1/
      h2/
    tools/
      handaxe-day1/
    occluders/
    masks/
    manifests/
```

최종 Vite asset strategy는 Stage 06에서 구현 시 확정한다.

## File Naming

예:

```text
hunt_world_camp_dawn_near_v01.webp
hunt_body_player01_receive_reach_v03.webp
hunt_cast_r_offer_tool_v02.webp
hunt_tool_handaxe_day1_held_v04.webp
hunt_contact_handoff_keyframe_v02.webp
```

규칙:

- 역할
- asset role
- family / identity
- state
- version

순서를 유지한다.

`final_final2.png` 같은 이름 금지.

---

# 13. Production Manifest 최소 규격

Stage 08 production planning에서는 JSON/TS 개념으로 아래를 관리한다.

```ts
interface VisualProductionRecord {
  assetId: string;
  roleId: 'hunt' | 'gather' | 'camp';
  assetRole:
    | 'world'
    | 'body'
    | 'actor'
    | 'held-item'
    | 'occluder'
    | 'contact-keyframe';
  sceneFamily: string;
  state: string;
  cameraProfile: string;
  lightProfile: string;
  identityAnchorId?: string;
  contactAnchorId?: string;
  historicalReferenceIds: readonly string[];
  generationMethod:
    | 'independent-anchor'
    | 'reference-variation'
    | 'inpaint'
    | 'outpaint'
    | 'pose-depth-conditioned'
    | 'manual-composite';
  sourceTool: string;
  promptVersion: string;
  humanApproved: boolean;
}
```

이 interface는 **Stage 06 runtime 타입 확정본이 아니다.**

실제 코드에 넣기 전:

- 필요한 필드만 남기고
- Scene runtime state와 분리하고
- Stage 06 정식 버전에 흡수한다.

---

# 14. Identity Anchor 규칙

## Player Body

anchor ID 예:

`hunt-player-01-body-anchor-v1`

## Cast

- `r-anchor-v1`
- `h1-anchor-v1`
- `h2-anchor-v1`

## Tool

- `handaxe-day1-anchor-v1`

## Environment

- `camp-day1-anchor-v1`
- `travel-day1-anchor-v1`
- `rock-shelter-day1-anchor-v1`

# **장면을 생성할 때 prompt text보다 anchor ID가 먼저다.**

승인된 anchor 없이 production variant를 대량 생성하지 않는다.

---

# 15. Generation Batch 규칙

한 번에 수십 장을 생성하고 나중에 고르는 방식은 제한한다.

## Anchor exploration

- 후보 3~6개
- 사람 검토
- 1개 canonical + 필요 시 1개 backup

## Production variant

- 한 상태당 2~4개 후보
- 가장 일관된 것 선택
- 실패 이유 기록

## Reject 이유 예

- wrong hand
- grip impossible
- tool shape drift
- face drift
- lighting mismatch
- modern artifact
- crop unsafe
- hand anatomy error
- historical misconception risk

Reject도 데이터다.

---

# 16. Contact Scene Acceptance

contact-heavy keyframe는 다음을 모두 만족해야 한다.

## Handoff

- R 손의 grip이 실제로 보임
- 도구가 공중에 떠 있지 않음
- 내 손이 받을 수 있는 방향으로 접근
- contact 순간 도구의 depth가 납득됨
- 다음 Beat에서 같은 도구 identity가 내 손에 유지

## Ground Observation

- 무릎/팔/손이 crouch 자세와 맞음
- 지면과 손 높이가 맞음
- 손이 흔적을 가려 학습 target을 숨기지 않음

## Tool Use

- 주먹도끼 edge / blunt area 중 무엇을 쓰는지 행동과 맞음
- 단순 무기 swing pose만 반복하지 않음

## Shelter Repair

- 손/재료/지지대의 접촉점이 물리적으로 연결
- 구조물이 갑자기 완전히 다른 형태로 변하지 않음

---

# 17. Scene Family Lock 규칙

Scene Family마다 **Anchor Frame 1개**를 먼저 잠근다.

예: Camp Family

```text
Anchor: dawn-near-fire
Derived:
- R looks at player
- R offers tool
- H1/H2 prepare
- departure looking back
```

가능한 경우 derived image는 Anchor 기반 variation으로 만든다.

Travel Family도:

```text
terrain identity
→ near camp
→ mid distance
→ track ground
→ far from camp
```

가 같은 장소권역의 연속으로 읽혀야 한다.

---

# 18. Visual State Continuity Ledger

장면마다 다음 상태를 기록한다.

```text
body dirt level
body wetness
tool dirt/blood/plant residue if historically/safely appropriate
light phase
shelter state
actor clothing state
carried object state
```

고어를 만들기 위한 ledger가 아니다.

예:

- 비를 맞아 소매가 젖었다면 다음 장면에 즉시 마르지 않음
- 땅을 팠다면 주먹도끼에 흙 흔적이 남을 수 있음
- 해가 낮아졌다면 다시 정오빛으로 돌아가지 않음

---

# 19. Reduced Effects / Accessibility와 Production Asset

Reduced Effects는 별도 저품질 이미지 세트를 의미하지 않는다.

유지:

- 같은 world plate
- 같은 body/tool identity
- 같은 actor reaction
- 같은 학습 정보

줄이거나 제거:

- sway
- jolt
- blur transition
- vignette pressure
- fast exposure change

중요:

# **motion reduction 때문에 body contact와 spatial information을 제거하지 않는다.**

---

# 20. Visual Production Readiness Gate — Stage 08 직전

Stage 07 Human Gate PASS 후, production image 생성 전에 다음을 통과한다.

## A. Historical Reference Ready

- handaxe reference 2개 이상 승인
- temporary shelter visual source scope 정의
- cave/rock-shelter source scope 정의
- landscape/season source scope 정의
- reference license/provenance 기록

## B. Identity Ready

- player body anchor 승인
- R/H1/H2 anchor 승인
- Day1 handaxe anchor 승인

## C. Composition Ready

- 16:9 master frame 승인
- 4:3 / 16:10 crop proof
- handoff contact keyframe rough 승인
- crouch observation rough 승인
- cave approach rough 승인

## D. Scene Family Ready

최소:

- Camp
- Travel
- Rock Shelter
- Return

family anchor rough가 있어야 함.

## E. Technical Handoff Ready

- asset naming
- manifest fields
- responsive serving plan
- initial payload budget

을 Stage 06 후속 버전에 반영할 준비가 되어 있어야 함.

# **이 Gate가 없으면 Stage 08 production을 시작하지 않는다.**

---

# 21. Stage 08 Minimum Coherent Production Set — 확정

## World

1. camp dawn anchor
2. camp shelter-visible
3. departure looking back
4. travel mid-distance
5. crouch ground observation
6. rock shelter distant
7. rock shelter near/entrance
8. dusk return route
9. distant firelight
10. reunion camp

## Player Body

1. fire-rest
2. receive-reach
3. tool-inspect
4. walking-carry
5. crouch-observe
6. cave-inspect
7. fatigued-return
8. firelight-relief

## Cast

- R fire-side
- R offer-tool
- H1/H2 prepare
- H1/H2 travel/stop
- shelter reaction
- reunion

## Tool

- handaxe anchor front/back/edge
- offered
- held
- inspect
- carry

actual digging/cutting/pounding variants는 해당 interaction 구현 때 추가한다.

## Contact Keyframes

Stage 08 초기 최소:

1. R tool handoff
2. ground observation/touch
3. first actual handaxe living-use interaction

---

# 22. Production QA Matrix

각 production Scene은 다음 8축을 평가한다.

| Axis | 질문 |
|---|---|
| Identity | 같은 몸/사람/도구인가? |
| Contact | 손-도구-환경 접촉이 가능한가? |
| Spatial | 거리/가림/깊이가 읽히는가? |
| Camera | 역할 시점 높이와 자세가 일관되는가? |
| Light | world/body/actor가 같은 광원을 공유하는가? |
| Historical | 현대/판타지/오개념 요소가 없는가? |
| Responsive | 4:3/16:10/16:9에서 핵심 target이 유지되는가? |
| Performance | 초기/전환 로딩이 체험을 끊지 않는가? |

High severity FAIL 하나라도 있으면 해당 asset set은 production 승인하지 않는다.

---

# 23. Stage 01~07 보완의 확정 판정

이번 구체화로 다음을 **해석 수준이 아니라 후속 개발 책임으로 확정**한다.

## Stage 01A

- body visibility는 action information
- camera profile continuity
- dominant hand continuity
- contact/occlusion이 embodied fidelity에 포함

## Stage 01C

- physical light integration 선행
- treatment는 그 뒤
- camera motion보다 body/world cue 우선

## Stage 02

같은 Day 1의 shared visual anchors:

- R/H1/H2 identity
- fire area layout
- current shelter identity
- key object identity
- light/time progression

## Stage 03

Hunt Story continuity checkpoint:

- same handaxe
- distance from camp
- sun/time state
- fatigue
- dirt/wear
- return firelight

## Stage 04

Scene 제작 체크리스트에 다음 production fields를 사용:

- camera profile
- world family
- body pose
- actor state
- held item state
- contact anchor
- occlusion plan
- light profile
- crop-safe target

## Stage 05 / 05A

각 역할은 별도 body vocabulary를 가진다.

`Design PASS`와 별도로 `Visual Production Ready` 판정을 둔다.

## Stage 06

Stage 08 시작 시 v9에서 최소 runtime 계약을 정식화한다.

## Stage 07

현재 Human QA는 계속 placeholder 기준으로 진행하되:

- contact composition replaceability
- crop safety
- floating-hand risk

를 실제 사람 관찰에 포함한다.

---

# 24. 지금 당장 코드/이미지에 하지 않을 것

- production image 생성
- Stage 08 reducer 구현
- 대량 asset import
- generic asset engine
- animation framework
- WebGL/3D 전환
- R/H1/H2 얼굴 확정
- source 없는 의복/거처 고증 단정

현재 공식 작업은 여전히 **Stage 07 Human QA**다.

---

# 25. 외부 근거 메모

## First-person rendering

Bevy 공식 first-person view model 예제는 player arm의 view model과 world model을 다른 render layer/FOV로 관리하고, 광원이 두 layer 모두에 적용되어야 함을 설명한다.

프로젝트 적용:

- 3D dual-camera를 복제하지 않음
- body/world presentation 역할 분리
- lighting은 공유

## Reference-conditioned generation

ControlNet 공개 구현은 pose/depth/edge 등 조건을 통한 구조 제어를 제공한다.
IP-Adapter 공개 구현은 reference image를 image prompt로 사용하는 방식의 대표 사례다.

프로젝트 적용:

- anchor consistency를 text prompt 반복만으로 해결하지 않음
- 지원 도구가 있으면 reference/pose/depth conditioning 우선

## Web image serving

MDN/web.dev는 responsive image에서 `srcset`/`sizes`/`picture` 및 `object-fit`/`object-position`을 활용할 수 있음을 설명한다.
web.dev는 현대 포맷과 responsive image가 전송량과 LCP 개선에 도움이 될 수 있음을 설명한다.

프로젝트 적용:

- initial critical image 조기 발견
- viewport별 적정 후보
- scene-specific crop focus

## Korean Paleolithic artifact

국립중앙박물관 소장 주먹도끼 자료를 형태 reference로 우선 사용한다.

- 신수19143 — 파주, 17.8 × 10.2 × 6.4cm
- 신수18710 — 연천, 화강암, 16.5 × 12.0 × 7.4cm

두 자료 모두 박물관 페이지에서 공공누리 제1유형 조건을 확인한다.

---

# 26. 최종 실행 규칙

# **Anchor before Variation.**

# **Contact before Decoration.**

# **Same Scene before New Image.**

# **Physical Light before Treatment.**

# **Historical Reference before Style Detail.**

# **Responsive Composition before Final Export.**

# **Human Approval before Production Batch.**

Stage 08의 목표는 많은 이미지를 만드는 것이 아니다.

# **같은 몸, 같은 도구, 같은 사람, 같은 하루의 공간이 실제로 이어지는 최소 coherent visual system을 먼저 증명하는 것**이다.
