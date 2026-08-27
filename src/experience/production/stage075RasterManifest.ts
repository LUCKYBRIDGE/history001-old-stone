export type RasterCompositionFamily = 'L' | 'TP' | 'PP';

export type RasterAssetRole =
  | 'world-plate'
  | 'actor-layer'
  | 'player-body'
  | 'held-item'
  | 'contact-keyframe'
  | 'occluder';

export type RasterApprovalStatus = 'pending' | 'approved' | 'rejected';

export interface RasterSourceSet {
  landscape: string;
  tabletPortrait?: string;
  phonePortrait?: string;
}

export interface Stage075RasterRecord {
  assetId: string;
  sceneIds: readonly string[];
  pvId: `PV-0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;
  role: RasterAssetRole;
  status: RasterApprovalStatus;
  requiredFamilies: readonly RasterCompositionFamily[];
  sources?: RasterSourceSet;
  alt: string;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  continuity: readonly string[];
  rejectionReason?: string;
}

/**
 * Stage 07.5 production-like visual manifest.
 *
 * IMPORTANT:
 * - `pending` entries intentionally have no runtime source path.
 * - Only `approved` entries may be rendered by the production media adapter.
 * - Generated candidates that fail art/history/continuity review are not added as sources.
 */
export const STAGE075_RASTER_MANIFEST: readonly Stage075RasterRecord[] = [
  {
    assetId: 'DAY1-HANDAXE-V1',
    sceneIds: ['SC02', 'SC03', 'SC04', 'SC05', 'SC06', 'SC07', 'SC08', 'SC09', 'SC10'],
    pvId: 'PV-02',
    role: 'held-item',
    status: 'pending',
    requiredFamilies: ['L', 'TP', 'PP'],
    alt: '오른손으로 쥘 수 있는 비대칭 구석기 주먹도끼',
    objectFit: 'contain',
    continuity: [
      'grip-base / working-end / face-A identity가 전 장면에서 유지된다.',
      'FPS 무기처럼 화면 중앙에 고정하지 않는다.',
      'SC08~10에서 화면 밖으로 나갔다가 같은 도구가 다시 들어온다.',
    ],
  },
  {
    assetId: 'HUNT-SC02-HANDOFF-KEYFRAME-V1',
    sceneIds: ['SC02'],
    pvId: 'PV-02',
    role: 'contact-keyframe',
    status: 'pending',
    requiredFamilies: ['L', 'TP', 'PP'],
    alt: '아루가 주먹도끼를 건네고 플레이어의 오른손이 받는 순간',
    objectFit: 'cover',
    objectPosition: '50% 50%',
    continuity: [
      '아루 손 → 주먹도끼 → 플레이어 오른손이 같은 depth에서 연결된다.',
      '도구가 공중에 떠 있지 않는다.',
      'L/TP/PP 모두 접촉점과 아루의 몸 방향을 보존한다.',
      '텍스트·버튼·말풍선은 raster 안에 baked-in 하지 않는다.',
    ],
  },
  {
    assetId: 'HUNT-SC01-CAMP-WORLD-V1',
    sceneIds: ['SC01'],
    pvId: 'PV-01',
    role: 'world-plate',
    status: 'pending',
    requiredFamilies: ['L', 'TP', 'PP'],
    alt: '새벽 불가에서 사람들이 각자 일을 이어가는 작은 공동체 공간',
    objectFit: 'cover',
    continuity: [
      '불·거처·아루·다무·누아의 상대 위치가 Scene Bible v2.1과 맞는다.',
      '거처는 현대 텐트처럼 읽히지 않는다.',
      '모든 인물이 플레이어를 동시에 바라보지 않는다.',
    ],
  },
] as const;

export function getApprovedStage075Raster(assetId: string) {
  const record = STAGE075_RASTER_MANIFEST.find((item) => item.assetId === assetId);

  if (!record || record.status !== 'approved' || !record.sources) {
    return null;
  }

  return record;
}
