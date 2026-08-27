# Day 1 Community + Hunt First 5 Minutes Screenplay

> 상태: **Stage 07.5 implementation contract / non-SSOT**
>
> 소유권:
> - 관계 원칙: `docs/01B_RELATIONSHIP_AGENCY_PRINCIPLES.md`
> - Hunt 서사: `docs/03_HUNT_STORY.md`
> - Hunt browser scene/beat: `docs/04_HUNT_PLAYFLOW.md`
> - 기술 계약: `docs/06_TECH_BLUEPRINT.md`
> - 장면 제작 문법: `docs/07_IMMERSION_NARRATIVE_BIBLE.md`
>
> 이 문서는 위 canonical을 실제 runtime으로 옮기기 위한 **구체적인 Day 1 social staging / screenplay 계약**이다. 새로운 SSOT가 아니다.

---

# 1. 이 proof가 해결해야 하는 Human QA 문제

현재 Human Gate의 핵심 P1은 그래픽 품질 자체가 아니다.

- 사람을 `도구를 주는 사람`, `같이 가는 사람`, `주변을 보는 사람`처럼 기능으로 읽게 됨
- Player가 이 공동체에 원래 속한 사람보다 처음 들어온 관찰자처럼 느껴짐
- NPC가 Player에게 정보와 다음 행동만 제공하는 기능 장치처럼 보임
- world가 Player 입력을 기다렸다가 정지 화면 단위로 움직여 생활감이 약함
- 이름/기억/callback이 없어 한 장면 뒤에도 사람이 남지 않음
- 시간과 거리가 설명문으로 전달되고 생활 조건으로 충분히 느껴지지 않음
- Perspective Proof가 `관점 전환`이라는 설명에 의존할 위험이 있음

이 screenplay는 다음 하나를 먼저 증명한다.

# **학생이 첫 5분 뒤 `사람 세 명의 역할`이 아니라 `아루·다무·누아와 함께 아침에 밖으로 나간 사건`을 기억하는가?**

---

# 2. Historical Integrity / Language Convention

## 2.1 이름

`아루`, `다무`, `누아`는 실제 구석기 시대 한반도 사람들의 이름을 재현한 것이 아니다.

- Day 1 가상 인물을 구별하기 위한 fictional call-name
- Historical Reconstruction
- 특정 실제 언어/민족/유적의 인명이라고 주장하지 않음
- production final naming lock 전 Human QA에서 변경 가능

Player에게 `[재구성]` 라벨을 계속 띄우지 않는다.
Teacher/Debug에서만 fictional reconstruction임을 확인 가능하게 한다.

## 2.2 한국어 대사

Player에게 들리는 한국어는 실제 선사 언어 복원이 아니다.

# **당시 사람들이 전달했을 법한 의미를 학생이 이해할 수 있도록 현대 한국어로 번역해 표현한다.**

따라서 금지:

- `우가`, `으아`, `크르` 같은 pseudo-primitive speech
- 괴성 뒤 괄호 번역
- 구석기인은 언어가 미발달했다는 암시
- 장문의 현대 설명 대화

권장:

- `손.`
- `가자.`
- `잠깐.`
- `저쪽.`
- `늦어.`
- `해 지기 전에 와.`

말은 짧고 상황 의존적으로 둔다.

---

# 3. Stage 07.5 Naming Review

## 3.1 이름 설계 기준

이 proof에서 이름은 다음 조건을 만족해야 한다.

1. 2음절 중심으로 초등학생이 한두 번 듣고 기억 가능
2. 첫소리와 모음 패턴이 서로 달라 소리만 들어도 구별 가능
3. `아저씨`, `아줌마`, `형`, `누나` 같은 현대 한국 친족/연령 호칭을 관계 정보로 강제하지 않음
4. 현대 한국인의 흔한 실명처럼 느껴지는 정도를 낮춤
5. `우가우가`식 원시인 caricature를 피함
6. 실제 선사 언어처럼 보이게 과장하지 않음
7. 이름은 성격/직업/역할 label이 아님

## 3.2 Stage 07.5 권장 call-name

| Authoring ID | Stage 07.5 call-name | 이유 | Lock |
|---|---|---|---|
| R | **아루** | 모음 시작, 짧고 부드러우며 다른 두 이름과 음형 차이가 큼 | provisional |
| H1 | **다무** | `ㄷ` 시작, 이동 중 짧게 부르기 쉬움 | provisional |
| H2 | **누아** | `ㄴ` 시작, 두 이름과 리듬이 다름 | provisional |

Player 자신은 이 proof에서 이름을 화면에 고정하지 않는다.

이유:

- 학생 self-projection 유지
- 1인칭 Player를 다시 캐릭터 소개 카드로 만들지 않음
- 한국어에서는 이름 없이도 자연스러운 짧은 대사가 가능

## 3.3 이름 사용 규칙

이름은 이름표로 가르치지 않는다.

금지:

```text
[아루]
도구를 건네는 사람
```

권장:

```text
불가에서 누군가 "아루." 하고 부름
→ 불 옆 사람이 자연스럽게 고개를 돌림
→ 학생이 소리와 사람을 연결
```

첫 1~2회 subtitle에서 speaker name을 작게 보조할 수 있으나, 인물 머리 위 상시 nameplate는 쓰지 않는다.

---

# 4. Day 1 Community Sheet

정확한 공동체 규모/가족 구조/권력 구조는 이 proof에서 역사적 사실로 확정하지 않는다.

Stage 07.5 화면 목표는:

# **Player + 핵심 NPC 3명만 있는 RPG party가 아니라, 이미 생활이 진행되던 작은 공동체 안에서 오늘 특히 세 사람과 많이 얽히는 느낌**

이다.

## 4.1 Player

Player-facing 이름:

- 없음 / self-projection 유지

현재 고정 production attribute:

- Hunt에서는 오른손 dominant

Player가 이미 알고 있다고 전제하는 것:

- 아루/다무/누아가 낯선 사람이 아니라는 것
- 불 주변 생활 공간
- 같이 밖으로 나가는 행동이 이상하지 않다는 것
- 물건을 주고받는 기본 몸짓

Player가 모르는 것:

- 오늘의 결과
- 멀리서 무슨 흔적을 찾을지
- 새 자연 거처 후보가 안전한지
- 다른 사람이 Player가 보지 않은 동안 무엇을 했는지

# **Player knowledge ≠ Student knowledge.**

학생은 설명문이 아니라 플레이를 통해 Player가 원래 알던 세계를 따라잡는다.

---

## 4.2 아루 / R

### 반복되는 몸의 습관

- 누군가에게 물건을 건네기 전에 손에 잡는 면과 날 쪽을 짧게 확인
- 걱정하거나 생각할수록 긴 설명보다 시선/멈춤이 늘어남
- Player가 눈을 뜨면 모두보다 먼저 반응할 수 있지만, 과장되게 계속 쳐다보지는 않음

### Player와 이미 있었던 관계를 느끼게 하는 방식

직접 설명 금지:

> `아루는 네가 오래 알고 지낸 사람이다.`

대신:

- Player가 아루의 손짓에 설명 없이 손을 내밈
- 아루도 Player에게 도구 사용법을 처음부터 강의하지 않음
- 둘이 이미 이런 식의 물건 전달을 해 본 사람처럼 짧고 자연스럽게 움직임

### 오늘의 first-5 shared event

- 새벽의 짧은 눈맞춤
- 주먹도끼 handoff
- 출발 직전 `해 지기 전에 와.`

### 후반 callback seed

- 해가 낮아질 때 아침 말이 다시 떠오름
- 귀환 때 같은 불과 아루의 반응으로 회수
- 다른 관점에서는 이 말이 `퀘스트 지시`가 아니라 기다림의 시작이었다는 것을 재해석

---

## 4.3 다무 / H1

### 반복되는 몸의 습관

- 먼저 움직일 수 있지만 다른 사람이 늦으면 속도를 줄임
- 무언가를 발견하면 답을 말하기보다 몸을 옆으로 비켜 같이 보게 함
- 이야기보다 행동으로 `같이 한다`를 먼저 보여줌

### Player와 이미 있었던 관계를 느끼게 하는 방식

- Player가 합류할 것을 당연하게 여기고 별도 소개/설명을 하지 않음
- 걷기 시작할 때 Player가 몇 걸음 늦으면 멈추지 않고 속도만 낮춰 맞춰 줌

### 오늘의 first-5 shared event

- 먼저 밖으로 움직임
- `가자.`
- 같은 길을 걸음
- 첫 흔적 앞에서 함께 몸을 낮춤

### 후반 callback seed

- 위험 때 Player와 물리적 거리가 가까워질 수 있음
- 돌아오는 길에 피로/짐을 공유
- 저녁에 말보다 같은 사건을 겪은 침묵/행동으로 회수

---

## 4.4 누아 / H2

### 반복되는 몸의 습관

- 대화 중에도 시선이 가끔 다른 지형/소리로 빠짐
- 무엇을 봤다고 바로 정답을 선언하지 않음
- 몸이 먼저 멈추고 나중에 짧게 말함

### Player와 이미 있었던 관계를 느끼게 하는 방식

- Player를 따라다니며 튜토리얼을 주지 않음
- 다무와도 서로 짧게 반응하고, Player가 없어도 자기 주의를 유지함

### 오늘의 first-5 shared event

- 출발 전에 이미 외부를 살피고 있음
- 이동 중 Player/H1과 같은 방향만 보지 않음
- first-5 마지막에 다른 방향으로 주의가 이동하는 seed를 남길 수 있음

### 후반 callback seed

- 자연 거처 후보를 먼저 확정해 주는 NPC가 아니라, `무언가가 있다`는 사회적 신호를 제공
- Player가 직접 보지 않으면 knowledge가 생기지 않음

---

# 5. Background Community

Stage 07.5 proof에서 화면에 반드시 대규모 인원을 넣지는 않는다.

최소 2개의 ambient actor behavior가 있으면 된다.

예:

### B1 — fire tending

- 불씨/나무를 만짐
- 다른 background actor와 짧게 말함
- Player가 눈을 떠도 작업을 계속함

### B2 — shelter/material work

- 덮개/재료를 만짐
- Player에게 튜토리얼을 주지 않음
- 아루의 이름을 자연스럽게 부르는 역할을 맡을 수 있음

선택:

### B3 — resting / food/material sorting

- 배경에 생활 리듬을 추가

규칙:

- 이름 없어도 됨
- Player interaction target이 아니어도 됨
- 모두가 Player를 동시에 보지 않음
- background actor의 정확한 수를 역사적 공동체 규모로 가르치지 않음

---

# 6. First 5 Minutes — Emotional / Spatial Objective

첫 5분 안에 학생이 다음을 **설명 없이** 느끼는 것이 목표다.

1. 이곳은 내가 눈뜨기 전부터 계속되던 생활 공간이다.
2. 나는 이 사람들에게 낯선 방문객이 아니다.
3. 아루·다무·누아는 서로 다른 사람이다.
4. 아루에게서 받은 돌이 내 오른손에 실제로 남아 있다.
5. 나는 혼자 퀘스트를 시작한 것이 아니라 사람들의 움직임에 합류했다.
6. 출발할수록 불과 사람의 기척이 멀어진다.
7. 흔적 발견은 시스템 배너가 아니라 사람의 행동과 내 관찰에서 시작된다.

첫 5분이 끝났을 때 학생의 이상적인 기억:

> `아침에 불 옆에서 아루에게 돌을 받고, 다무랑 누아랑 밖으로 나갔다. 다무가 걷다가 멈춰서 나도 같이 바닥을 봤다.`

좋지 않은 기억:

> `도구 받기 단계에서 뗀석기 카드를 보고 다음 버튼을 눌렀다.`

---

# 7. First 5 Minutes Screenplay

아래 시간은 production 영상 길이 lock이 아니라 **리듬 검토용 목표 범위**다.

## 0:00–0:15 — 눈뜨기 전에도 생활은 계속된다

### 화면

- 거의 어둡거나 눈을 감은 상태
- 붉은 불빛이 아주 약하게 번짐

### 소리

- 장작이 내려앉음
- 가까운 발소리
- 물건이 바닥에 닿는 소리
- Player에게 설명하기 위한 것이 아닌 background 대화

예:

> B1: `그건 젖었어.`
>
> B2: `저쪽 걸 써.`

### Player

아직 행동하지 않음.

### 목적

- 세계 독립성
- Player보다 먼저 존재하던 공동체

### 금지

- `구석기 시대입니다.`
- `당신은 사냥꾼입니다.`
- 학습 목표
- 등장인물 소개

---

## 0:15–0:35 — 눈을 뜬다

### Direct action

> `눈을 뜬다`

### 시야

- 불
- 내 무릎/손의 일부
- 현재 임시 거처 일부
- 3명 이상이 한 줄로 Player를 바라보지 않음
- B1/B2는 자기 일을 계속함

### 사람

아루와 잠깐 눈이 마주칠 수 있음.

아루는 즉시 장문의 말을 하지 않음.

### 목표

- `내가 여기 있다`
- `사람들이 원래 하던 일을 하고 있다`

---

## 0:35–0:55 — 이름은 소개 카드가 아니라 생활 속에서 들어온다

B2가 아루 쪽을 보지 않고도 자연스럽게 부를 수 있음.

> `아루.`

아루가 고개를 돌리거나 짧게 반응.

학생은 이름 ↔ 사람을 연결한다.

### UI

- 상시 nameplate 없음
- 필요하면 이 시점 이후 아루의 subtitle에만 작은 speaker name 사용 가능

### 목표

이름을 학습한 느낌보다 `누군가의 이름을 우연히 들었다`는 느낌.

---

## 0:55–1:25 — 아루의 손 → 돌 → 내 오른손

아루가 돌을 집는다.

### 행동

- 한쪽 면을 손에 잡음
- 날 쪽을 짧게 확인
- Player 쪽으로 내밈

짧은 대사:

> 아루: `손.`

### Direct action

> `손을 내민다`

### Contact

```text
아루 손
→ canonical handaxe
→ Player right hand
```

도구는 transfer 순간 이후 아루 손에서 사라지고 같은 물건이 Player 오른손에 남는다.

### 중요

이 장면은 item pickup UI가 아니라 interpersonal physical event다.

---

## 1:25–1:50 — Experience → Name

Player가 도구를 잠깐 느끼거나 돌려봄.

### Curriculum cue

> **뗀석기**
> 돌을 깨뜨리거나 떼어 만든 도구를 뗀석기라고 한다. 지금 손에 든 것은 그 대표적인 예인 **주먹도끼**다.

### 표현 규칙

- 전체 화면 카드 금지
- 장면을 덮지 않는 contextual cue
- 아루가 이 문장을 말하지 않음
- 퀴즈 없음
- 다음 세계 행동이 보이는 상태를 유지

### Shared event

`aru-handaxe-handoff`

participants:

- Player
- 아루

witness는 실제 구도에 따라 명시.

---

## 1:50–2:15 — 사람들은 Player의 준비 완료 버튼을 기다리지 않는다

다무는 이미 몸을 일으키거나 몇 걸음 밖으로 움직임.

누아는 그 순간 Player보다 외부 환경을 보고 있음.

다무가 짧게:

> `가자.`

Player에게만 향한 튜토리얼 대사처럼 정면에서 기다리지 않는다.

### Direct action

> `일어나 따라간다`

### Body

- fire-rest → stand/walk
- handaxe continuity 유지

---

## 2:15–2:40 — 귀환 motif

Player/다무/누아가 생활 공간 경계에서 벗어나기 시작.

아루는 계속 따라오지 않음.

뒤쪽에서:

> 아루: `해 지기 전에 와.`

다무가 짧게 답할 수 있음.

> 다무: `알았어.`

Player에게만 모든 대사가 향하지 않는다.

### Shared event

`aru-return-line`

participants/witnesses:

- 아루: speaker/participant
- Player: heard
- 다무: heard/responded
- 누아: heard 여부는 구도에 따라 명시

### 의미

현재는 평범한 일상 말.
후반에는 시간·거리·기다림 callback.

---

## 2:40–3:30 — 거리 변화는 HUD 숫자가 아니라 세계로 느낀다

### 이동

- 불이 작아짐
- 사람 목소리가 희미해짐
- 현재 거처 구조가 부분적으로 가려짐
- 익숙한 랜드마크 하나를 지나감

랜드마크 후보:

- 갈라진 큰 바위
- 쓰러진 굵은 나무
- 얕은 물길

정확한 지형은 visual reference 이후 lock.

### NPC behavior

- 다무가 앞서감
- Player가 늦으면 다무가 멈춰 정면으로 튜토리얼하지 않고 속도만 낮춤
- 누아는 때때로 다른 쪽을 봄

### Player perception

이름/역할 설명 없음.

학생은 행동 반복으로 사람을 구분해야 한다.

---

## 3:30–4:05 — 첫 사회적 행동 변화

다무의 발걸음이 갑자기 느려짐.

발소리가 멎음.

다무가 몸을 낮춤.

짧은 말:

> 다무: `잠깐.`

### 중요한 순서

```text
사람 행동 변화
→ Player가 알아차림
→ Player action
→ world information
```

시스템이 먼저 `흔적 발견`을 알리지 않는다.

---

## 4:05–4:40 — 같이 본다

### Direct action

> `곁에 몸을 낮춘다`

Player body:

- crouch
- handaxe는 자연스러운 위치에서 continuity

다무가 몸을 조금 비켜준다.

Player가 직접 볼 수 있는 것:

- 눌린 풀
- 흙의 흐트러짐
- 작은 가지 변화

다무는 `이건 사냥감 흔적이야`라고 정답을 바로 말하지 않는다.

가능한 짧은 말:

> `봤어?`

Player가 스스로 관찰.

### Shared event

`player-damu-shared-ground-observation`

---

## 4:40–5:00 — 다음 장면 seed

Player가 다시 일어나려 할 때 누아의 시선/몸 방향이 잠깐 다른 곳으로 감.

아직 cave target을 보여주지 않아도 된다.

누아가 바로 정답을 말하지 않는다.

가능:

- 멈춤
- 고개가 돌아감
- 소리를 듣는 듯한 짧은 정적

first-5는 여기서 끝나도 된다.

### 다음 causal promise

```text
누아의 attention change
→ Player가 알아차림
→ Player가 그 방향을 직접 봄
→ 그 뒤에만 새로운 공간/대상이 드러남
```

---

# 8. First-5 Shared Day Event Ledger

최소 이벤트:

| Event | Participant | Witness / Knowledge | Callback |
|---|---|---|---|
| `morning-community-already-active` | background cast | Player witnesses | Camp에서 같은 아침 재해석 가능 |
| `aru-name-heard-in-context` | 아루 + caller | Player hears | 이름 기억 |
| `aru-handaxe-handoff` | Player + 아루 | 구도상 witness만 기록 | handaxe continuity / reunion |
| `aru-return-line` | 아루 + heard cast | 실제 들은 사람만 knowledge | dusk / return / Camp waiting |
| `departed-from-fire-together` | Player + 다무 + 누아 | 아루/background 일부 witness | Perspective recontextualization |
| `player-damu-shared-ground-observation` | Player + 다무 | 누아 witness 여부는 구도에 따름 | later tracking / relationship |
| `nua-attention-shift-seed` | 누아 | Player가 실제 봤을 때만 knowledge | later discovery |

원칙:

# **World event가 발생했다고 모든 character가 자동으로 아는 것이 아니다.**

---

# 9. Runtime State Boundary

모든 screenplay beat를 reducer step으로 만들지 않는다.

Reducer/state 후보:

- `eyes-open`
- `tool-received`
- `departed-camp`
- `shared-ground-observation`
- `nua-attention-followed` 또는 후속 discovery trigger

Beat/local presentation:

- background 대사
- 아루 이름이 불림
- eye contact
- 손 내밈 transition
- 다무가 속도 늦춤
- 누아의 시선 이동
- fire/voice distance fade

정확한 타입은 `docs/06_TECH_BLUEPRINT.md`를 따른다.

---

# 10. Player-facing Text Budget

첫 5분에서 prose paragraph는 가능한 한 줄인다.

우선순위:

```text
world action
> body/perception
> short dialogue
> direct action label
> terminology cue
> prose narration
```

금지 예:

> `다무는 함께 사냥을 나가는 사람이다. 누아는 주변을 잘 살피는 사람이다.`

> `아루는 네가 돌아오기를 기다리는 사람이다.`

허용 예:

> `가자.`

> `잠깐.`

> `해 지기 전에 와.`

관계의 의미는 후속 행동과 callback이 만든다.

---

# 11. First-5 Human QA Gate

다음 질문에 실제 Player 재플레이로 답한다.

## Social identification

- 첫 5분 뒤 아루/다무/누아를 기능 설명 없이 구별할 수 있는가?
- 이름표 없이도 `아까 돌을 준 사람`, `같이 걷던 사람` 같은 사건 기억이 생기는가?
- NPC끼리도 자기 일이 있어 보이는가?

## Belonging

- Player가 현대 학생이 구석기에 떨어진 느낌보다 원래 이 공동체에 있던 사람처럼 느껴지는가?
- 등장인물 소개 없이도 낯선 사람들과 처음 만나는 장면처럼 느껴지지 않는가?

## Embodiment

- 아루의 손 → 주먹도끼 → 내 오른손 contact가 한 사건처럼 보이는가?
- 내 몸/도구가 HUD처럼 보이지 않는가?

## Spatial continuity

- 불/거처/사람 소리가 실제로 멀어지는 느낌이 있는가?
- 첫 흔적이 `다음 화면`이 아니라 같은 이동 공간의 연속으로 느껴지는가?

## Narrative causality

- 다무가 멈췄기 때문에 내가 멈춰 바닥을 봤다고 느껴지는가?
- 시스템이 먼저 정답을 보여준 뒤 NPC가 설명하는 순서가 아닌가?

## Curriculum

- `뗀석기 → 대표적인 예: 주먹도끼` 관계는 정확한가?
- terminology cue가 사건을 학습 카드로 바꾸지 않는가?

P1이 남으면 production visual로 덮지 않는다.

---

# 12. Runtime Implementation Acceptance

Stage 07.5 runtime rewrite를 시작할 때 최소 다음을 자동 검증한다.

- Player opening에 역할/관점 제목 없음
- Player opening에 캐릭터 소개 카드 없음
- `아루/다무/누아`는 Player-facing 기능 label과 함께 노출되지 않음
- tool handoff 뒤에만 terminology reveal
- 동일 handaxe continuity
- departure 전에 `aru-return-line` 발생
- background actor beat가 최소 하나 존재
- 다무의 stop/shift가 ground observation보다 먼저 발생
- Player가 직접 observation action을 해야 ground evidence가 나타남
- 누아의 attention shift 뒤에도 Player가 follow하기 전 후속 target을 미리 노출하지 않음
- Player surface에 authoring ID R/H1/H2 없음
- Teacher/Debug에는 fictional-name/reconstruction metadata와 authoring ID mapping 확인 가능

자동 테스트가 증명하지 않는 것:

- 사람이 실제 사람처럼 느껴지는가
- 이름이 자연스러운가
- NPC autonomy가 살아 있는가
- world가 정지화면 slideshow처럼 느껴지지 않는가

이 항목은 Human QA가 소유한다.

---

# 13. Deferred

이 screenplay에서 아직 lock하지 않는다.

- production final 이름
- exact age/sex/face
- 정확한 공동체 인원수
- 혈연관계
- 족장/권력 구조
- 최종 의복/머리/피부 identity
- production audio voice casting
- 실제 사냥감/위협 species
- 완성 Hunt S5~S12
- production imagery

다음 순서:

```text
Community + first-5 screenplay
→ canonical/playflow alignment
→ minimal Stage 07.5 runtime implementation
→ automated CI
→ actual Human replay
→ P1 re-evaluation
→ only then Visual Production Readiness
```
