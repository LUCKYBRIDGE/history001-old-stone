export type PrevisualAspect = '16:9' | '16:10' | '4:3';

export type PrevisualElementKind =
  | 'world'
  | 'actor'
  | 'player-body'
  | 'tool'
  | 'fire'
  | 'shelter'
  | 'landmark'
  | 'target'
  | 'annotation'
  | 'action'
  | 'occluder';

export interface PrevisualBox {
  x: number;
  y: number;
  w: number;
  h: number;
  rotate?: number;
}

export interface PrevisualElement {
  id: string;
  kind: PrevisualElementKind;
  label: string;
  box: PrevisualBox;
  note?: string;
}

export interface PrevisualFrame {
  id: string;
  label: string;
  sceneIds: readonly string[];
  camera: string;
  dialogue?: readonly string[];
  elements: readonly PrevisualElement[];
  continuityChecks: readonly string[];
  momentId?: string;
}

export interface PrevisualCase {
  id: `PV-0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;
  title: string;
  purpose: string;
  frames: readonly PrevisualFrame[];
  acceptance: readonly string[];
}

const campBase: readonly PrevisualElement[] = [
  {
    id: 'shelter',
    kind: 'shelter',
    label: '낮고 비대칭인 임시 거처',
    box: { x: 8, y: 31, w: 25, h: 32 },
  },
  {
    id: 'fire',
    kind: 'fire',
    label: '불',
    box: { x: 37, y: 59, w: 9, h: 13 },
  },
  {
    id: 'aru',
    kind: 'actor',
    label: '아루',
    box: { x: 38, y: 27, w: 10, h: 39 },
    note: '불 가까이. Player만 바라보는 고정 NPC가 아님.',
  },
  {
    id: 'damu',
    kind: 'actor',
    label: '다무',
    box: { x: 60, y: 31, w: 9, h: 37 },
    note: '출발 준비 중.',
  },
  {
    id: 'nua',
    kind: 'actor',
    label: '누아',
    box: { x: 78, y: 31, w: 8, h: 36 },
    note: '4:3 crop 안쪽. 외부를 먼저 보는 습관.',
  },
  {
    id: 'b1',
    kind: 'actor',
    label: 'B1 · 불/재료 작업',
    box: { x: 24, y: 43, w: 8, h: 29 },
  },
  {
    id: 'b2',
    kind: 'actor',
    label: 'B2 · 거처/재료 작업',
    box: { x: 12, y: 50, w: 8, h: 27 },
  },
];

export const STAGE075_PREVISUAL_CASES: readonly PrevisualCase[] = [
  {
    id: 'PV-01',
    title: 'Living Camp',
    purpose: 'SC01의 공동체가 Player를 기다리는 NPC 파티가 아니라 이미 살아 있는 공간으로 읽히는지 검증한다.',
    frames: [
      {
        id: 'pv01-camp-awake',
        label: '눈을 뜬 직후',
        sceneIds: ['SC01'],
        camera: '낮은 seated eye height. 불은 중앙보다 약간 왼쪽, 출발 방향은 right-center.',
        dialogue: ['B2: “아루.”'],
        elements: [
          ...campBase,
          {
            id: 'player-knee',
            kind: 'player-body',
            label: '내 무릎/몸 가장자리',
            box: { x: 44, y: 84, w: 16, h: 14 },
          },
        ],
        continuityChecks: [
          '모든 인물이 동시에 Player를 보지 않는다.',
          'B1/B2는 SC00에서 들린 생활 행동을 계속한다.',
          '누아 몸 중심은 4:3 crop에서도 남는다.',
          '거처는 정삼각형 텐트처럼 읽히지 않는다.',
        ],
      },
    ],
    acceptance: [
      '1초 정지 화면에서 공동체 생활이 Player 중심 이벤트보다 먼저 읽힌다.',
      '아루/다무/누아/B1/B2가 동일한 물리 공간에 존재한다.',
      '4:3에서도 누아의 위치와 외부 attention seed가 유지된다.',
    ],
  },
  {
    id: 'PV-02',
    title: 'Handaxe Handoff',
    purpose: '아루 손 → 주먹도끼 → 내 오른손의 접촉과 소유권 이전을 unified-contact rough로 검증한다.',
    frames: [
      {
        id: 'pv02-offer',
        label: 'Offer',
        sceneIds: ['SC02'],
        camera: '앉은 Player 시점. 아루 상체가 가까워지되 얼굴이 화면 전체를 점유하지 않는다.',
        dialogue: ['아루: “손.”'],
        elements: [
          { id: 'aru-torso', kind: 'actor', label: '아루 상체/팔', box: { x: 25, y: 22, w: 25, h: 61 } },
          { id: 'handaxe-offer', kind: 'tool', label: '같은 DAY1 주먹도끼 · grip-base 우선', box: { x: 48, y: 53, w: 11, h: 15, rotate: -12 } },
          { id: 'player-right-reach', kind: 'player-body', label: '내 오른팔 · 아직 미접촉', box: { x: 63, y: 65, w: 29, h: 19, rotate: -9 } },
          { id: 'fire-context', kind: 'fire', label: '같은 불 · 배경 맥락', box: { x: 15, y: 64, w: 7, h: 10 } },
        ],
        continuityChecks: [
          '아루가 working-end를 직접 움켜쥐지 않는다.',
          '내 손이 실제로 접근 가능한 grip-base가 보인다.',
          '주먹도끼 크기는 손보다 확실히 크지만 무기처럼 과장되지 않는다.',
        ],
      },
      {
        id: 'pv02-contact',
        label: 'Shared Contact',
        sceneIds: ['SC02'],
        camera: 'Offer와 같은 카메라. 카메라 cut 없이 접촉만 진행.',
        elements: [
          { id: 'aru-torso', kind: 'actor', label: '아루 상체/팔', box: { x: 25, y: 22, w: 25, h: 61 } },
          { id: 'handaxe-contact', kind: 'tool', label: '주먹도끼 · 양쪽 손이 같은 물체에 접촉', box: { x: 50, y: 54, w: 11, h: 15, rotate: -9 } },
          { id: 'player-right-contact', kind: 'player-body', label: '내 오른손 · grip 닫히는 중', box: { x: 57, y: 62, w: 33, h: 21, rotate: -7 } },
        ],
        continuityChecks: [
          '도구가 두 손 사이에서 공중에 뜨지 않는다.',
          '아루 손과 Player 손이 물리적으로 같은 depth에 연결된다.',
          '핵심 접촉점은 4:3에서도 crop/UI에 가려지지 않는다.',
        ],
      },
      {
        id: 'pv02-release',
        label: 'Release',
        sceneIds: ['SC02', 'SC03'],
        camera: '같은 시점에서 아루 손만 물러나고 Player ownership이 남는다.',
        elements: [
          { id: 'aru-retreat', kind: 'actor', label: '아루 손이 물러남', box: { x: 27, y: 25, w: 21, h: 56 } },
          { id: 'player-held-handaxe', kind: 'tool', label: '내 오른손에 남은 같은 주먹도끼', box: { x: 58, y: 60, w: 12, h: 17, rotate: -5 } },
          { id: 'player-right-held', kind: 'player-body', label: '내 오른팔/손', box: { x: 65, y: 66, w: 27, h: 20, rotate: -4 } },
        ],
        continuityChecks: ['같은 face-A/working-end 방향이 SC03까지 유지된다.', 'ownership change가 inventory pop처럼 보이지 않는다.'],
      },
    ],
    acceptance: [
      '접촉 장면을 설명문 없이 봐도 누가 누구에게 무엇을 건네는지 즉시 읽힌다.',
      '도구가 두 손과 물리적으로 연결되어 있다.',
      '다음 frame에서 같은 주먹도끼가 내 손에 남는다.',
    ],
  },
  {
    id: 'PV-03',
    title: 'Ownership / Naming / World Resume',
    purpose: '뗀석기/주먹도끼 명명이 체험을 정지시키지 않고, 같은 도구를 든 채 다무의 이동으로 세계가 다시 움직이는지 검증한다.',
    frames: [
      {
        id: 'pv03-inspect',
        label: '도구 확인 + 짧은 명명',
        sceneIds: ['SC03'],
        camera: 'seated/near-standing transition 전. 주먹도끼 face-A가 손목 범위 안에서만 보인다.',
        elements: [
          { id: 'annotation', kind: 'annotation', label: '뗀석기 / 대표적인 예: 주먹도끼', box: { x: 6, y: 10, w: 27, h: 15 } },
          { id: 'held-handaxe', kind: 'tool', label: '같은 주먹도끼 · face-A', box: { x: 57, y: 60, w: 13, h: 18, rotate: -4 } },
          { id: 'player-arm', kind: 'player-body', label: '내 오른팔', box: { x: 66, y: 66, w: 27, h: 21 } },
          { id: 'damu-start', kind: 'actor', label: '다무 · 이미 움직이기 시작', box: { x: 63, y: 32, w: 8, h: 35, rotate: 3 } },
        ],
        continuityChecks: [
          'annotation은 target/contact를 가리지 않는다.',
          '다무 이동은 annotation이 살아 있는 동안 시작된다.',
          '별도 “개념 확인/다음” 화면이 없다.',
        ],
      },
      {
        id: 'pv03-rise',
        label: '일어나 따라갈 준비',
        sceneIds: ['SC04'],
        camera: '카메라 높이가 연속적으로 상승. handaxe는 낮춰 들기 시작.',
        dialogue: ['다무: “가자.”'],
        elements: [
          { id: 'damu-walk', kind: 'actor', label: '다무 · right-center로 이동 중', box: { x: 68, y: 31, w: 8, h: 36, rotate: 4 } },
          { id: 'nua-scan', kind: 'actor', label: '누아 · 외부를 봄', box: { x: 80, y: 31, w: 8, h: 36 } },
          { id: 'low-carry-tool', kind: 'tool', label: '낮춰 든 같은 주먹도끼', box: { x: 72, y: 76, w: 10, h: 14, rotate: 16 } },
          { id: 'action-follow', kind: 'action', label: '일어나 따라간다', box: { x: 48, y: 72, w: 18, h: 8 } },
        ],
        continuityChecks: ['행동 affordance는 입력 가능할 때만 나타난다.', '행동이 시작되면 affordance는 즉시 사라진다.', 'persistent bottom HUD가 없다.'],
      },
    ],
    acceptance: ['개념 cue가 world freeze를 만들지 않는다.', '도구 ownership과 다무의 이동이 동시에 읽힌다.', 'action UI가 장면보다 먼저 보이지 않는다.'],
  },
  {
    id: 'PV-04',
    title: 'Departure Spatial Proof',
    purpose: 'SC05의 camp-behind-left / route-forward-right 공간 관계를 한 번의 연속 이동으로 증명한다.',
    frames: [
      {
        id: 'pv04-stage-a',
        label: 'Stage A · 대각선 출발',
        sceneIds: ['SC05'],
        camera: 'left-biased diagonal. camp는 peripheral left, 다무/누아는 forward-right.',
        dialogue: ['아루: “해 지기 전에 와.”', '멀리 다무: “알았어.”'],
        momentId: 'DEPARTURE-MOMENT-A',
        elements: [
          { id: 'camp-shelter', kind: 'shelter', label: '뒤-왼쪽 거처', box: { x: 3, y: 37, w: 19, h: 26 } },
          { id: 'camp-fire', kind: 'fire', label: '뒤-왼쪽 불', box: { x: 25, y: 59, w: 6, h: 9 } },
          { id: 'aru-farewell', kind: 'actor', label: '아루 · 뒤-왼쪽', box: { x: 24, y: 35, w: 8, h: 32 } },
          { id: 'damu-forward', kind: 'actor', label: '다무 · 진행축', box: { x: 65, y: 34, w: 7, h: 31 } },
          { id: 'nua-forward', kind: 'actor', label: '누아 · 진행축', box: { x: 76, y: 35, w: 7, h: 30 } },
          { id: 'split-rock-seed', kind: 'landmark', label: 'LM-SPLIT-ROCK-01 · 진행 방향', box: { x: 69, y: 58, w: 16, h: 13 } },
          { id: 'carry-tool', kind: 'tool', label: '내 오른손의 주먹도끼', box: { x: 77, y: 79, w: 9, h: 12, rotate: 18 } },
        ],
        continuityChecks: ['SC11이 재사용할 momentId와 group spacing을 고정한다.', 'camp와 진행축이 같은 plane에 붙어 보이지 않는다.'],
      },
      {
        id: 'pv04-stage-b',
        label: 'Stage B · forward settle',
        sceneIds: ['SC05'],
        camera: '걷는 동안 camera가 forward/right로 settle. camp는 left로 빠지고 route가 중심이 된다.',
        elements: [
          { id: 'camp-edge', kind: 'shelter', label: '왼쪽 끝으로 사라지는 camp 일부', box: { x: -8, y: 44, w: 14, h: 20 } },
          { id: 'left-occluder', kind: 'occluder', label: '자연 가림', box: { x: 0, y: 32, w: 13, h: 51 } },
          { id: 'damu-forward', kind: 'actor', label: '다무 · 더 앞', box: { x: 58, y: 35, w: 6, h: 28 } },
          { id: 'nua-forward', kind: 'actor', label: '누아 · 더 앞', box: { x: 70, y: 36, w: 6, h: 27 } },
          { id: 'split-rock', kind: 'landmark', label: 'LM-SPLIT-ROCK-01', box: { x: 62, y: 57, w: 17, h: 14 } },
        ],
        continuityChecks: ['camp disappearance는 hard cut가 아니라 scale/parallax/occlusion/audio falloff로 설명된다.', '진행축은 계속 screen-right/right-center다.'],
      },
    ],
    acceptance: ['camp가 실제 뒤쪽에 남았다는 느낌이 난다.', 'Stage A→B 사이 180° 축 반전이 없다.', '랜드마크가 이후 공간 기억용으로 읽힐 수 있다.'],
  },
  {
    id: 'PV-05',
    title: 'Stop / Crouch Proof',
    purpose: '다무가 먼저 멈추고 낮아진 뒤 Player가 나중에 직접 몸을 낮추는 인과와 카메라 높이 변화를 검증한다.',
    frames: [
      {
        id: 'pv05-damu-stop',
        label: '다무가 먼저 멈춤',
        sceneIds: ['SC06'],
        camera: 'Player는 아직 standing eye height.',
        dialogue: ['다무: “잠깐.”'],
        elements: [
          { id: 'damu-lower', kind: 'actor', label: '다무 · 먼저 몸을 낮춤', box: { x: 56, y: 47, w: 12, h: 26 } },
          { id: 'nua-standing', kind: 'actor', label: '누아 · 아직 서 있음', box: { x: 73, y: 35, w: 7, h: 29 } },
          { id: 'ground-hidden', kind: 'target', label: '흔적 target · 아직 강조/노출하지 않음', box: { x: 50, y: 74, w: 22, h: 10 } },
          { id: 'player-standing-edge', kind: 'player-body', label: '내 몸 · 아직 standing', box: { x: 78, y: 82, w: 19, h: 15 } },
        ],
        continuityChecks: ['Player camera가 아직 낮아지지 않는다.', 'ground evidence는 다무의 행동보다 먼저 답처럼 제시되지 않는다.'],
      },
      {
        id: 'pv05-player-crouch',
        label: '내가 직접 몸을 낮춤',
        sceneIds: ['SC07'],
        camera: 'Player camera가 실제로 내려가 ground plane이 커진다.',
        dialogue: ['다무: “봤어?”'],
        elements: [
          { id: 'damu-shared-look', kind: 'actor', label: '다무 · 몸을 비켜 target을 공유', box: { x: 38, y: 42, w: 13, h: 27 } },
          { id: 'ground-evidence', kind: 'target', label: '눌린 풀/흙/가지 · 직접 관찰 target', box: { x: 47, y: 59, w: 24, h: 16 } },
          { id: 'player-left-support', kind: 'player-body', label: '내 왼손 · 지면 지지, target을 가리키지 않음', box: { x: 26, y: 70, w: 24, h: 16, rotate: 10 } },
          { id: 'held-tool-crouch', kind: 'tool', label: '내 오른손의 주먹도끼', box: { x: 76, y: 76, w: 9, h: 13, rotate: 17 } },
        ],
        continuityChecks: ['왼손은 흔적을 가리키는 포인터가 아니다.', 'Player handaxe held state는 유지된다.', '무릎/손/지면 높이가 같은 crouch geometry를 만든다.'],
      },
    ],
    acceptance: ['SC06만 보면 “다무가 먼저 멈췄다”가 읽힌다.', 'SC07에서만 Player camera가 낮아진다.', '흔적은 Player 행동 뒤에 처음 의미 있게 보인다.'],
  },
  {
    id: 'PV-06',
    title: 'Nua Attention / Reveal',
    purpose: '누아의 몸 방향 변화가 먼저 발생하고 Player가 그 방향을 따라본 뒤 rock shelter가 발견되는 인과를 검증한다.',
    frames: [
      {
        id: 'pv06-attention-seed',
        label: '누아 attention shift',
        sceneIds: ['SC08'],
        camera: 'Player가 다시 일어난 eye height. route 방향 유지.',
        elements: [
          { id: 'nua-turn', kind: 'actor', label: '누아 · 머리→어깨→상체가 오른쪽으로 약 25°', box: { x: 78, y: 34, w: 8, h: 31, rotate: 7 } },
          { id: 'damu-neutral', kind: 'actor', label: '다무 · 즉시 설명하지 않음', box: { x: 56, y: 35, w: 7, h: 30 } },
          { id: 'tool-off-frame', kind: 'tool', label: '주먹도끼 · 오른팔과 함께 FOV 아래/밖', box: { x: 94, y: 91, w: 8, h: 10, rotate: 18 } },
        ],
        continuityChecks: ['대사 없이 누아의 몸 변화가 attention cue가 된다.', '주먹도끼는 사라진 것이 아니라 held state로 off-frame이다.', '누아 torso center는 4:3에서 유지된다.'],
      },
      {
        id: 'pv06-reveal',
        label: '내가 시선을 따라봄',
        sceneIds: ['SC09'],
        camera: 'Player camera가 오른쪽 20~24° pan. 누아 gaze line을 그리지 않고 실제 world target이 나타난다.',
        elements: [
          { id: 'nua-edge', kind: 'actor', label: '누아 · left/mid peripheral', box: { x: 47, y: 36, w: 7, h: 29 } },
          { id: 'rock-shelter-distant', kind: 'shelter', label: '바위 그늘 / 자연 거처 후보', box: { x: 67, y: 31, w: 25, h: 34 } },
          { id: 'foreground-rock', kind: 'occluder', label: '근경 암석/식생 · 깊이 단서', box: { x: 6, y: 63, w: 24, h: 30 } },
        ],
        continuityChecks: ['rock shelter는 SC08보다 먼저 보이지 않는다.', 'gaze-line UI 없이도 누아→Player pan→world target 순서가 이해된다.', 'tool은 여전히 held/off-frame이다.'],
      },
    ],
    acceptance: ['설명문 없이도 누아가 뭔가를 먼저 알아차렸다는 느낌이 난다.', 'Player pan 뒤에만 자연 거처 후보가 드러난다.', '4:3에서도 누아의 몸 방향과 target 둘 다 읽힌다.'],
  },
  {
    id: 'PV-07',
    title: 'Rock Shelter Inspection',
    purpose: '바위 그늘을 평면 배경이 아니라 손으로 닿을 수 있는 실제 공간으로 만들고 handaxe 재진입 continuity를 검증한다.',
    frames: [
      {
        id: 'pv07-approach',
        label: 'Approach / Tool Re-entry',
        sceneIds: ['SC10'],
        camera: 'rock shelter 쪽으로 접근. 오른팔 body adjustment와 함께 같은 handaxe가 lower-right로 250~400ms 재진입.',
        elements: [
          { id: 'rock-shelter-near', kind: 'shelter', label: '가까워진 바위 그늘', box: { x: 43, y: 20, w: 49, h: 56 } },
          { id: 'dark-interior', kind: 'target', label: '어두운 내부 / 깊이 불명', box: { x: 58, y: 30, w: 26, h: 36 } },
          { id: 'tool-reentry', kind: 'tool', label: '같은 주먹도끼가 자연스럽게 재진입', box: { x: 78, y: 78, w: 10, h: 14, rotate: 15 } },
        ],
        continuityChecks: ['inventory pop이 없다.', 'explicit animal spoor를 기본으로 넣지 않는다.', '어둠/깊이/시야 제한만으로 uncertainty를 만든다.'],
      },
      {
        id: 'pv07-touch',
        label: '왼손으로 입구 바위를 짚음',
        sceneIds: ['SC10'],
        camera: 'near-surface parallax가 보이는 거리. 왼손 접촉점이 입구 가장자리와 같은 depth에 있어야 한다.',
        elements: [
          { id: 'rock-face', kind: 'shelter', label: '입구 바위 표면', box: { x: 18, y: 24, w: 31, h: 58 } },
          { id: 'player-left-rock', kind: 'player-body', label: '내 왼손 · 바위에 짧게 접촉', box: { x: 31, y: 58, w: 24, h: 16, rotate: -8 } },
          { id: 'interior', kind: 'target', label: '안쪽은 바로 다 보이지 않음', box: { x: 55, y: 29, w: 32, h: 43 } },
          { id: 'held-handaxe-near', kind: 'tool', label: '오른손의 같은 주먹도끼', box: { x: 79, y: 77, w: 10, h: 14, rotate: 14 } },
        ],
        continuityChecks: ['왼손-바위 접촉이 물리적으로 이어진다.', '손이 동굴 내부 target을 가리지 않는다.', 'tool identity/orientation drift가 없다.'],
      },
    ],
    acceptance: ['바위 표면이 내 몸 가까이에 있다는 깊이감이 있다.', 'SC08~09에서 off-frame이던 같은 주먹도끼가 자연스럽게 돌아온다.', '공포 아이콘/동물 흔적 없이도 내부의 불확실성이 읽힌다.'],
  },
  {
    id: 'PV-08',
    title: 'Same-Moment Aru POV',
    purpose: 'SC11이 회상/되감기가 아니라 SC05 Stage A와 같은 실제 순간을 아루 위치에서 다시 보는 것임을 증명한다.',
    frames: [
      {
        id: 'pv08-reference-player',
        label: 'Reference · SC05 Player-side',
        sceneIds: ['SC05'],
        camera: 'PV-04 Stage A와 동일한 Player-side snapshot.',
        dialogue: ['아루: “해 지기 전에 와.”', '멀리 다무: “알았어.”'],
        momentId: 'DEPARTURE-MOMENT-A',
        elements: [
          { id: 'aru-left', kind: 'actor', label: '아루', box: { x: 24, y: 35, w: 8, h: 32 } },
          { id: 'damu-out', kind: 'actor', label: '다무', box: { x: 65, y: 34, w: 7, h: 31 } },
          { id: 'nua-out', kind: 'actor', label: '누아', box: { x: 76, y: 35, w: 7, h: 30 } },
          { id: 'player-tool', kind: 'tool', label: '내 오른손 주먹도끼', box: { x: 77, y: 79, w: 9, h: 12, rotate: 18 } },
        ],
        continuityChecks: ['SC11과 group spacing/walking phase/light/dialogue order를 비교하는 기준 frame이다.'],
      },
      {
        id: 'pv08-aru-side',
        label: 'SC11 · Aru-side same moment',
        sceneIds: ['SC11'],
        camera: '같은 camp의 아루 위치. 떠나는 세 사람이 forward/right로 멀어지는 반대편 spatial proof.',
        dialogue: ['내 목소리(아루): “해 지기 전에 와.”', '멀리 다무: “알았어.”'],
        momentId: 'DEPARTURE-MOMENT-A',
        elements: [
          { id: 'aru-own-body-edge', kind: 'player-body', label: '아루 쪽 몸 가장자리 · meta title 없음', box: { x: 4, y: 77, w: 18, h: 18 } },
          { id: 'camp-fire-near', kind: 'fire', label: '가까운 같은 불', box: { x: 29, y: 61, w: 8, h: 12 } },
          { id: 'camp-shelter-near', kind: 'shelter', label: '같은 거처', box: { x: 5, y: 35, w: 24, h: 29 } },
          { id: 'player-departing', kind: 'actor', label: '아까의 Player · 오른손에 같은 주먹도끼', box: { x: 66, y: 39, w: 7, h: 27 } },
          { id: 'departing-handaxe', kind: 'tool', label: '같은 DAY1 주먹도끼', box: { x: 70, y: 60, w: 5, h: 8, rotate: 18 } },
          { id: 'damu-departing', kind: 'actor', label: '다무 · 같은 walking phase', box: { x: 58, y: 38, w: 6, h: 28 } },
          { id: 'nua-departing', kind: 'actor', label: '누아 · 같은 spacing', box: { x: 76, y: 40, w: 6, h: 26 } },
        ],
        continuityChecks: [
          'momentId가 SC05/PV-04와 동일하다.',
          '같은 아침 light/fire/shelter/group spacing을 유지한다.',
          'rewind 효과/flashback vignette/“아루 시점” meta title이 없다.',
          '대사 순서가 SC05와 동일하다.',
        ],
      },
    ],
    acceptance: ['두 frame을 나란히 보면 같은 순간의 반대편임이 증명된다.', '제목 없이도 아루 쪽에 있다는 단서가 body/world/object로 충분하다.', '주먹도끼가 떠나는 Player의 오른손에 유지된다.'],
  },
] as const;

export function getPrevisualCase(id: string) {
  return STAGE075_PREVISUAL_CASES.find((item) => item.id === id) ?? STAGE075_PREVISUAL_CASES[0];
}
