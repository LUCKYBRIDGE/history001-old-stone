import type {
  HuntApproachChoice,
  HuntAttemptOutcome,
  HuntClueId,
  HuntSearchSpotId,
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
    reflection: '자국은 눈에 잘 보이지만 중간중간 흐려진다. 이어지는 방향을 더 살펴보기로 한다.',
  },
  'pressed-grass': {
    label: '눌린 풀이 이어지는 쪽',
    reflection: '풀이 눌린 방향은 이어져 보이지만 바람이나 다른 움직임의 흔적일 가능성도 남아 있다.',
  },
  'broken-branch': {
    label: '낮은 가지가 꺾인 쪽',
    reflection: '최근 생긴 듯한 흔적이지만 무엇이 만들었는지는 아직 확실하지 않다.',
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
    consequence: '조건이 나아질 수 있지만 가까이 움직이는 동안 상황이 달라질 수 있다.',
  },
  'attempt-now': {
    label: '지금 조건에서 사냥을 시도할 준비를 한다',
    consequence: '시간을 덜 쓰는 대신 지금 보이는 조건을 그대로 받아들여야 한다.',
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

export function getClueForSpot(spotId: HuntSearchSpotId): HuntClueId | null {
  return HUNT_SEARCH_SPOTS.find((spot) => spot.id === spotId)?.clueId ?? null;
}
