import type {
  HuntApproachChoice,
  HuntAttemptOutcome,
  HuntClueId,
  HuntDangerCue,
  HuntDangerResponse,
  HuntFinalOutcome,
  HuntReturnLandmark,
  HuntSearchSpotId,
  HuntTrackingChoice,
} from './huntTypes';

export interface HuntSearchSpot {
  id: HuntSearchSpotId;
  label: string;
  prompt: string;
  reveal: string;
  clueId: HuntClueId | null;
}

export const HUNT_SEARCH_SPOTS: readonly HuntSearchSpot[] = [
  {
    id: 'bare-ground',
    label: '흙이 드러난 가장자리',
    prompt: '땅의 표면을 가까이 살펴본다.',
    reveal: '희미하지만 이어지는 자국이 보인다. 무엇인가 지나간 흔적일 수 있다.',
    clueId: 'ground-mark',
  },
  {
    id: 'grass-edge',
    label: '낮게 눌린 풀',
    prompt: '풀이 어느 방향으로 눌렸는지 살펴본다.',
    reveal: '주변과 다르게 한쪽으로 눌린 풀이 이어져 있다.',
    clueId: 'pressed-grass',
  },
  {
    id: 'low-branch',
    label: '낮은 가지 주변',
    prompt: '가지와 잎의 상태를 살펴본다.',
    reveal: '낮은 가지 하나가 최근 꺾인 듯 보이고 잎이 아직 마르지 않았다.',
    clueId: 'broken-branch',
  },
  {
    id: 'broad-rock',
    label: '넓은 돌 옆',
    prompt: '돌 주변에 지나간 흔적이 있는지 살펴본다.',
    reveal: '흩어진 잎은 보이지만 동물이 지나갔다고 단정할 만한 흔적은 분명하지 않다.',
    clueId: null,
  },
] as const;

export const HUNT_CLUE_COPY: Readonly<
  Record<HuntClueId, { label: string; reflection: string }>
> = {
  'ground-mark': {
    label: '땅의 자국이 이어지는 쪽',
    reflection:
      '자국은 눈에 잘 보이지만 중간중간 흐려진다. 이어지는 방향을 더 살펴보기로 한다.',
  },
  'pressed-grass': {
    label: '눌린 풀이 이어지는 쪽',
    reflection:
      '풀이 눌린 방향은 이어져 보이지만 바람이나 다른 움직임의 흔적일 가능성도 남아 있다.',
  },
  'broken-branch': {
    label: '낮은 가지가 꺾인 쪽',
    reflection:
      '최근 생긴 듯한 흔적이지만 무엇이 만들었는지는 아직 확실하지 않다.',
  },
};

export const HUNT_APPROACH_COPY: Readonly<
  Record<HuntApproachChoice, { label: string; consequence: string }>
> = {
  wait: {
    label: '조금 더 기다리며 움직임을 살핀다',
    consequence: '기회를 더 볼 수 있지만 기다리는 동안 시간은 흐른다.',
  },
  'move-closer': {
    label: '조심스럽게 거리를 좁힌다',
    consequence:
      '조건이 나아질 수 있지만 가까이 움직이는 동안 상황이 달라질 수 있다.',
  },
  'attempt-now': {
    label: '지금 조건에서 사냥을 시도할 준비를 한다',
    consequence:
      '시간을 덜 쓰는 대신 지금 보이는 조건을 그대로 받아들여야 한다.',
  },
};

export const HUNT_ATTEMPT_OUTCOME_COPY: Readonly<
  Record<HuntAttemptOutcome, string>
> = {
  'brief-opening':
    '기회를 보고 시도했지만 아직 사냥감을 확보하지는 못했다. 다만 사냥감이 잠깐 열린 쪽으로 움직여 다음 판단의 여지는 남았다.',
  'target-shifted':
    '거리를 좁힌 뒤 시도했지만 사냥감도 방향을 바꾸었다. 가까워졌다고 결과가 확실해지는 것은 아니었다.',
  'target-fled':
    '지금 바로 시도했지만 사냥감은 빠르게 멀어졌다. 발견했다는 것과 잡는다는 것은 다른 일이었다.',
};

export const HUNT_TRACKING_COPY: Readonly<
  Record<HuntTrackingChoice, { label: string; consequence: string }>
> = {
  'continue-tracking': {
    label: '조금 더 흔적을 따라간다',
    consequence:
      '먹을 것을 얻을 가능성은 남아 있지만 거처에서 더 멀어지고 해도 더 기운다.',
  },
  'consider-return': {
    label: '여기서 돌아가는 쪽을 생각한다',
    consequence:
      '추가 가능성을 놓을 수 있지만 돌아갈 시간과 거리를 먼저 생각하는 판단이다.',
  },
  'check-surroundings': {
    label: '주변과 해의 위치를 한 번 더 확인한다',
    consequence:
      '상황을 조금 더 확인할 수 있지만 그 사이에도 시간은 흐른다.',
  },
};

export const HUNT_DANGER_CUE_COPY: Readonly<
  Record<HuntDangerCue, { label: string; detail: string }>
> = {
  'distant-call': {
    label: '멀지 않은 곳에서 낯선 울음소리가 들린다',
    detail:
      '무엇인지 바로 알 수는 없다. 동행자들이 걸음을 멈추고 서로의 위치를 확인한다.',
  },
  'brush-movement': {
    label: '가까운 수풀에서 큰 움직임이 이어진다',
    detail:
      '우리가 찾던 사냥감과 같은 움직임이라고 단정할 수 없다. 모두가 주변을 다시 살핀다.',
  },
  'large-track': {
    label: '지금까지 보던 것과 다른 큰 흔적이 눈에 들어온다',
    detail:
      '누가 남긴 흔적인지 확실하지 않다. 계속 움직이기 전에 안전한 방향을 함께 판단해야 한다.',
  },
};

export const HUNT_DANGER_RESPONSE_COPY: Readonly<
  Record<HuntDangerResponse, { label: string; reflection: string }>
> = {
  'stay-together': {
    label: '사람들과 가까이 붙어 움직인다',
    reflection:
      '서로 멀어지지 않고 움직임을 맞춘다. 혼자 앞서가기보다 함께 있는 것이 중요해진다.',
  },
  'quietly-distance': {
    label: '소리를 줄이고 조용히 거리를 둔다',
    reflection:
      '소리를 줄이고 낯선 신호와 거리를 둔다. 위험을 이기려 하기보다 벗어나는 데 집중한다.',
  },
  'scan-safe-route': {
    label: '더 안전해 보이는 방향을 먼저 살핀다',
    reflection:
      '주변을 다시 살펴 움직일 방향을 맞춘다. 도구가 있어도 모든 위험과 맞설 필요는 없다.',
  },
};

export const HUNT_FINAL_OUTCOME_COPY: Readonly<
  Record<HuntFinalOutcome, { title: string; detail: string; returnNote: string }>
> = {
  'food-secured': {
    title: '공동체에 가져갈 먹을 것이 생겼다.',
    detail:
      '기쁜 결과지만 사냥은 여기서 끝나지 않는다. 사람들과 함께 처리하고 거처까지 옮겨야 한다.',
    returnNote: '먹을 것을 함께 옮기기 때문에 돌아가는 길도 가볍지는 않다.',
  },
  'empty-handed': {
    title: '오늘 가져갈 사냥감은 없다.',
    detail:
      '오랫동안 움직였어도 빈손으로 돌아오는 날이 있을 수 있다. 빈손 역시 오늘의 정상적인 결과다.',
    returnNote:
      '아쉬움은 남지만 바깥에 있던 사람들도 결국 공동체로 돌아가야 한다.',
  },
};

export const HUNT_RETURN_LANDMARK_COPY: Readonly<
  Record<HuntReturnLandmark, { label: string; reflection: string }>
> = {
  'large-rock': {
    label: '지나오며 본 큰 바위를 기준으로 잡는다',
    reflection:
      '출발할 때 지나온 큰 바위를 떠올리며 동행자들과 방향을 다시 맞춘다.',
  },
  'water-flow': {
    label: '물 흐르는 방향을 다시 확인한다',
    reflection:
      '지나오며 보았던 물의 흐름과 주변 지형을 함께 확인한다.',
  },
  'ridge-line': {
    label: '기억에 남은 능선 모양을 살핀다',
    reflection:
      '멀리 보였던 능선의 모양을 다시 찾아보며 돌아갈 방향을 맞춘다.',
  },
};

export function getClueForSpot(
  spotId: HuntSearchSpotId,
): HuntClueId | null {
  return HUNT_SEARCH_SPOTS.find((spot) => spot.id === spotId)?.clueId ?? null;
}
