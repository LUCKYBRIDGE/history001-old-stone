export type VisualAnchorKind =
  | 'character'
  | 'player-body'
  | 'world'
  | 'landmark'
  | 'object'
  | 'prop'
  | 'lighting';

export type VisualAnchorStatus =
  | 'spec-locked'
  | 'reference-pending'
  | 'anchor-approved';

export type Stage075VisualAnchorId =
  | 'ARU-IDENTITY-V1'
  | 'DAMU-IDENTITY-V1'
  | 'NUA-IDENTITY-V1'
  | 'B1-CONTINUITY-V1'
  | 'B2-CONTINUITY-V1'
  | 'PLAYER-HUNT-BODY-V1'
  | 'WORLD-CAMP-DAWN-A'
  | 'WORLD-DEPARTURE-PATH-A'
  | 'WORLD-GROUND-OBS-A'
  | 'WORLD-ROCK-SHELTER-A'
  | 'LM-SPLIT-ROCK-01'
  | 'DAY1-HANDAXE-V1'
  | 'PROP-CAMP-FIRE-A'
  | 'PROP-TEMP-SHELTER-A'
  | 'LIGHT-DAY1-DAWN-A'
  | 'LIGHT-DAY1-ROUTE-A';

export interface Stage075VisualAnchor {
  id: Stage075VisualAnchorId;
  kind: VisualAnchorKind;
  status: VisualAnchorStatus;
  scenes: readonly string[];
  immutableTraits: readonly string[];
  allowedVariation: readonly string[];
  forbiddenDrift: readonly string[];
  approvedReferencePaths?: readonly string[];
}

/**
 * Visual continuity is an upstream production dependency.
 * Scene rasters may not be approved until every required anchor reaches
 * `anchor-approved` and receives an approved reference path.
 */
export const STAGE075_VISUAL_CONTINUITY_ANCHORS: readonly Stage075VisualAnchor[] = [
  {
    id: 'ARU-IDENTITY-V1',
    kind: 'character',
    status: 'reference-pending',
    scenes: ['SC01', 'SC02', 'SC03', 'SC04', 'SC05', 'SC11'],
    immutableTraits: [
      '같은 얼굴 비율·머리 실루엣·신장 범위·체형을 유지한다.',
      '과장된 원시인 얼굴이 아니라 naturalistic fictional identity를 유지한다.',
      '물건을 건네기 전 상대/물체를 확인하는 restrained posture가 반복된다.',
      '의복 silhouette와 주요 재료 분할선은 장면마다 바뀌지 않는다.',
    ],
    allowedVariation: [
      '표정의 작은 변화',
      '앉기/서기/도구 전달/배웅에 필요한 자연스러운 pose 변화',
      '광원과 거리 때문에 생기는 명암 변화',
    ],
    forbiddenDrift: [
      '장면마다 다른 얼굴 또는 나이로 보임',
      '머리 길이·가르마·실루엣이 이유 없이 바뀜',
      '체형·신장이 장면마다 달라짐',
      '의복이 새 costume처럼 교체됨',
      '현대 특정 민족형·fantasy barbarian coding 강화',
    ],
  },
  {
    id: 'DAMU-IDENTITY-V1',
    kind: 'character',
    status: 'reference-pending',
    scenes: ['SC01', 'SC03', 'SC04', 'SC05', 'SC06', 'SC07', 'SC08', 'SC09'],
    immutableTraits: [
      '아루와 구별되는 머리/상체/보행 silhouette를 유지한다.',
      '먼저 걷고 기다리며 멈출 때 무게중심이 명확한 movement identity를 유지한다.',
      '동일 의복 silhouette와 body mass를 거리 변화에도 유지한다.',
    ],
    allowedVariation: ['걷기', '멈춤', '기다림', '쪼그림', '지면을 함께 보는 pose'],
    forbiddenDrift: [
      '장면마다 얼굴 또는 체격이 바뀜',
      '밝은 costume 색으로만 정체성을 구분',
      '걷기/쪼그림에서 팔다리 길이 비율이 바뀜',
    ],
  },
  {
    id: 'NUA-IDENTITY-V1',
    kind: 'character',
    status: 'reference-pending',
    scenes: ['SC01', 'SC03', 'SC04', 'SC05', 'SC08', 'SC09'],
    immutableTraits: [
      '아루/다무와 구분되는 머리·목·어깨 silhouette를 유지한다.',
      'attention shift는 head → shoulder → torso 순서로 읽힌다.',
      '같은 체형·의복 silhouette가 거리와 crop에도 유지된다.',
    ],
    allowedVariation: ['외부를 살핌', '걷기', '멈춤', 'attention turn'],
    forbiddenDrift: [
      '시선 cue마다 전혀 다른 인물처럼 보임',
      '머리 모양만 과장해 캐릭터를 구분',
      'magic gaze line에 의존하고 몸 방향이 일치하지 않음',
    ],
  },
  {
    id: 'B1-CONTINUITY-V1',
    kind: 'character',
    status: 'spec-locked',
    scenes: ['SC00', 'SC01', 'SC02', 'SC03', 'SC04', 'SC05'],
    immutableTraits: ['불/재료 일을 이어가는 같은 배경 인물이라는 실루엣 연속성'],
    allowedVariation: ['앉기', '손으로 재료 다루기', '작은 위치 변화'],
    forbiddenDrift: ['장면마다 다른 역할·옷·체형의 배경 인물로 교체'],
  },
  {
    id: 'B2-CONTINUITY-V1',
    kind: 'character',
    status: 'spec-locked',
    scenes: ['SC00', 'SC01', 'SC02', 'SC03', 'SC04', 'SC05'],
    immutableTraits: ['거처/재료 일을 이어가는 같은 배경 인물이라는 실루엣 연속성'],
    allowedVariation: ['서기', '앉기', '재료 옮기기', '아루를 부르는 짧은 반응'],
    forbiddenDrift: ['SC01 이후 갑자기 사라지거나 다른 인물로 교체'],
  },
  {
    id: 'PLAYER-HUNT-BODY-V1',
    kind: 'player-body',
    status: 'reference-pending',
    scenes: ['SC00', 'SC01', 'SC02', 'SC03', 'SC04', 'SC05', 'SC06', 'SC07', 'SC08', 'SC09', 'SC10'],
    immutableTraits: [
      '오른손 dominant continuity',
      '손 크기·손가락 비율·피부/오염 톤 범위가 장면마다 유지된다.',
      '팔/손은 HUD가 아니라 실제 행동이 있을 때만 프레임에 들어온다.',
    ],
    allowedVariation: ['받기', '쥐기', '걷기', '지면 지지', '바위 짚기', 'FOV 밖 이동'],
    forbiddenDrift: [
      '장면마다 손 크기 또는 피부 톤이 급변',
      '오른손/왼손 dominant가 뒤바뀜',
      '팔 길이·소매 silhouette가 이유 없이 바뀜',
    ],
  },
  {
    id: 'WORLD-CAMP-DAWN-A',
    kind: 'world',
    status: 'reference-pending',
    scenes: ['SC00', 'SC01', 'SC02', 'SC03', 'SC04', 'SC05', 'SC11'],
    immutableTraits: [
      '불·임시 거처·주요 바위·이동로 시작점의 상대 지리를 유지한다.',
      '아루/fire는 outbound 기준 behind-left, route는 right/right-center다.',
      '산/언덕/수목 덩어리 silhouette는 같은 장소로 재인식 가능해야 한다.',
    ],
    allowedVariation: ['카메라 위치', '인물/소품 이동', '불 연기', '새벽 광량의 작은 시간 변화'],
    forbiddenDrift: [
      '장면마다 산 능선이 새로 생성됨',
      '불과 거처 위치가 좌우 반전',
      '같은 아침인데 계절·날씨·지형이 달라짐',
      '거처가 다른 구조물로 변함',
    ],
  },
  {
    id: 'WORLD-DEPARTURE-PATH-A',
    kind: 'world',
    status: 'reference-pending',
    scenes: ['SC05', 'SC06', 'SC08', 'SC09'],
    immutableTraits: [
      'WORLD-CAMP-DAWN-A에서 실제로 이어지는 동일한 outbound route다.',
      'LM-SPLIT-ROCK-01의 위치·형태·관찰 각도가 일관된다.',
      '진행축은 right/right-center이며 이유 없는 180° reversal이 없다.',
    ],
    allowedVariation: ['거리 증가', '카메라 forward settle', '전경 식생 occlusion'],
    forbiddenDrift: ['매 장면 새로운 trail 생성', 'landmark의 크기·깨진 방향 변경', '진행축 좌우 반전'],
  },
  {
    id: 'WORLD-GROUND-OBS-A',
    kind: 'world',
    status: 'reference-pending',
    scenes: ['SC06', 'SC07'],
    immutableTraits: ['같은 지면 patch와 같은 눌린 풀/흙/작은 가지의 위치 관계'],
    allowedVariation: ['standing 시야와 crouch 시야의 perspective 변화'],
    forbiddenDrift: ['crouch 후 전혀 다른 지면으로 바뀜', '증거가 손가락이 가리키는 정답 아이콘처럼 재배치'],
  },
  {
    id: 'WORLD-ROCK-SHELTER-A',
    kind: 'world',
    status: 'reference-pending',
    scenes: ['SC09', 'SC10'],
    immutableTraits: [
      'SC09에서 발견한 같은 자연 바위 그늘/입구가 SC10 접근에서도 유지된다.',
      '입구 윤곽·주요 균열·바닥 경사·가까운 바위 edge가 동일하다.',
    ],
    allowedVariation: ['접근으로 인한 scale/depth 변화', '가림 변화'],
    forbiddenDrift: ['동굴 형태가 장면 사이 변경', 'SC10에서 갑자기 인공 구조물처럼 변함'],
  },
  {
    id: 'LM-SPLIT-ROCK-01',
    kind: 'landmark',
    status: 'reference-pending',
    scenes: ['SC05', 'SC06', 'SC08', 'SC09'],
    immutableTraits: ['낮고 넓은 큰 바위', '눈에 띄는 갈라진 방향', 'route에서 반복 인지 가능한 비대칭 silhouette'],
    allowedVariation: ['거리·각도·부분 occlusion'],
    forbiddenDrift: ['갈라진 방향 반전', '크기 등급 급변', '다른 색/암종처럼 보이는 변경'],
  },
  {
    id: 'DAY1-HANDAXE-V1',
    kind: 'object',
    status: 'reference-pending',
    scenes: ['SC02', 'SC03', 'SC04', 'SC05', 'SC06', 'SC07', 'SC08', 'SC09', 'SC10', 'SC11'],
    immutableTraits: [
      'face-A / face-B / grip-base / working-end를 고정한다.',
      '전체 길이·폭·두께 비율과 대표 박리흔 fingerprint를 유지한다.',
      '회갈색 석재의 기본 hue/value 범위를 유지한다.',
      'SC02에서 받은 바로 그 물체가 SC10과 SC11까지 이어진다.',
    ],
    allowedVariation: ['회전', '거리', '광원', '부분 occlusion', 'grip에 따른 보이는 면 변화'],
    forbiddenDrift: ['칼/창촉처럼 뾰족해짐', '박리흔 pattern이 새 물체처럼 바뀜', '크기 급변', '색/재질 급변'],
  },
  {
    id: 'PROP-CAMP-FIRE-A',
    kind: 'prop',
    status: 'spec-locked',
    scenes: ['SC00', 'SC01', 'SC02', 'SC03', 'SC04', 'SC05', 'SC11'],
    immutableTraits: ['camp 공간을 재식별할 수 있는 같은 hearth 위치와 주변 돌 arrangement 범위'],
    allowedVariation: ['불꽃 높이', '연기', '숯/장작 상태의 작은 시간 변화'],
    forbiddenDrift: ['장면마다 다른 위치에 새 campfire 생성', '현대 캠프파이어 아이콘 같은 완전 대칭 구조'],
  },
  {
    id: 'PROP-TEMP-SHELTER-A',
    kind: 'prop',
    status: 'reference-pending',
    scenes: ['SC01', 'SC02', 'SC03', 'SC04', 'SC05', 'SC11'],
    immutableTraits: [
      'low-specificity fictional temporary shelter/windbreak identity',
      '낮고 비대칭이며 지형과 이어지는 silhouette',
      '같은 주요 지지선/개구부 orientation',
    ],
    allowedVariation: ['거리·가림·빛'],
    forbiddenDrift: ['A-frame tent', '현대 캠핑 텐트', '정삼각형 아이콘', '장면마다 기둥 구조 변경'],
  },
  {
    id: 'LIGHT-DAY1-DAWN-A',
    kind: 'lighting',
    status: 'spec-locked',
    scenes: ['SC00', 'SC01', 'SC02', 'SC03', 'SC04', 'SC05', 'SC11'],
    immutableTraits: [
      '새벽의 낮은 자연광 방향과 camp fire warm contribution의 관계를 유지한다.',
      '같은 순간인 SC05 Stage A와 SC11의 광원 방향은 mirror가 아니라 동일 world-space light다.',
    ],
    allowedVariation: ['미세한 노출 변화', '연기 때문에 생기는 local contrast 변화'],
    forbiddenDrift: ['장면마다 태양 방향 변경', '한 장면만 golden-hour 광고 사진처럼 과도한 HDR'],
  },
  {
    id: 'LIGHT-DAY1-ROUTE-A',
    kind: 'lighting',
    status: 'spec-locked',
    scenes: ['SC06', 'SC07', 'SC08', 'SC09', 'SC10'],
    immutableTraits: ['camp dawn에서 이어지는 동일 Day 1 광원 방향과 색온도 progression'],
    allowedVariation: ['그늘/암반 접근에 따른 local exposure 변화'],
    forbiddenDrift: ['갑작스러운 정오/노을/야간으로 변경', '장면마다 반대 방향 rim light'],
  },
] as const;

export function getStage075VisualAnchor(id: Stage075VisualAnchorId) {
  return STAGE075_VISUAL_CONTINUITY_ANCHORS.find((anchor) => anchor.id === id) ?? null;
}

export function areStage075AnchorsApproved(ids: readonly Stage075VisualAnchorId[]) {
  return ids.every((id) => {
    const anchor = getStage075VisualAnchor(id);
    return Boolean(
      anchor &&
        anchor.status === 'anchor-approved' &&
        anchor.approvedReferencePaths &&
        anchor.approvedReferencePaths.length > 0,
    );
  });
}
