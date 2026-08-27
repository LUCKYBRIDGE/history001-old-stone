import {
  areStage075AnatomyContractsApproved,
  type Stage075AnatomyContractId,
} from './stage075AnatomyRegistry';
import {
  isStage075StyleAnchorApproved,
  type Stage075StyleAnchorId,
} from './stage075StyleAnchor';
import {
  areStage075AnchorsApproved,
  type Stage075VisualAnchorId,
} from './stage075VisualContinuityRegistry';

export type RasterCompositionFamily = 'L' | 'TP' | 'PP';

export type RasterAssetRole =
  | 'world-plate'
  | 'actor-layer'
  | 'player-body'
  | 'held-item'
  | 'contact-keyframe'
  | 'occluder';

export type RasterApprovalStatus = 'pending' | 'approved' | 'rejected';

export type RasterDerivationMode =
  | 'anchor-conditioned'
  | 'locked-keyframe-variation'
  | 'independent-exploration';

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
  requiredStyleAnchorId: Stage075StyleAnchorId;
  requiredAnchorIds: readonly Stage075VisualAnchorId[];
  requiredAnatomyContractIds: readonly Stage075AnatomyContractId[];
  derivationMode: RasterDerivationMode;
  continuityGroupId: string;
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
 * - A scene raster cannot reach runtime merely because its own status is `approved`.
 * - STYLE-GIR-V1 and every required visual anchor must be approved first.
 * - Hero/body/contact assets must also satisfy approved anatomy/contact contracts.
 * - Approved anchors/contracts must point to stored approved master/reference files.
 * - Generated candidates that fail art/history/continuity/anatomy review are not added as sources.
 */
export const STAGE075_RASTER_MANIFEST: readonly Stage075RasterRecord[] = [
  {
    assetId: 'DAY1-HANDAXE-V1',
    sceneIds: ['SC02', 'SC03', 'SC04', 'SC05', 'SC06', 'SC07', 'SC08', 'SC09', 'SC10'],
    pvId: 'PV-02',
    role: 'held-item',
    status: 'pending',
    requiredFamilies: ['L', 'TP', 'PP'],
    requiredStyleAnchorId: 'STYLE-GIR-V1',
    requiredAnchorIds: ['DAY1-HANDAXE-V1'],
    requiredAnatomyContractIds: [],
    derivationMode: 'anchor-conditioned',
    continuityGroupId: 'DAY1-HANDAXE-CONTINUITY',
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
    requiredStyleAnchorId: 'STYLE-GIR-V1',
    requiredAnchorIds: [
      'ARU-IDENTITY-V1',
      'PLAYER-HUNT-BODY-V1',
      'DAY1-HANDAXE-V1',
      'WORLD-CAMP-DAWN-A',
      'PROP-CAMP-FIRE-A',
      'PROP-TEMP-SHELTER-A',
      'LIGHT-DAY1-DAWN-A',
    ],
    requiredAnatomyContractIds: [
      'PLAYER-HUNT-BODY-PROP-V1',
      'ARU-PROP-V1',
      'SC02-HANDOFF-GEO-V1',
    ],
    derivationMode: 'anchor-conditioned',
    continuityGroupId: 'SC02-HANDOFF-CONTINUITY',
    alt: '아루가 주먹도끼를 건네고 플레이어의 오른손이 받는 순간',
    objectFit: 'cover',
    objectPosition: '50% 50%',
    continuity: [
      '아루 손 → 주먹도끼 → 플레이어 오른손이 같은 depth에서 연결된다.',
      '도구가 공중에 떠 있지 않는다.',
      'L/TP/PP 모두 접촉점과 아루의 몸 방향을 보존한다.',
      '텍스트·버튼·말풍선은 raster 안에 baked-in 하지 않는다.',
      'Offer/Shared/Release는 같은 anchor-conditioned image family에서 파생한다.',
      'approved anatomy master와 SC02 contact geometry를 재설계하지 않는다.',
    ],
  },
  {
    assetId: 'HUNT-SC01-CAMP-WORLD-V1',
    sceneIds: ['SC01'],
    pvId: 'PV-01',
    role: 'world-plate',
    status: 'pending',
    requiredFamilies: ['L', 'TP', 'PP'],
    requiredStyleAnchorId: 'STYLE-GIR-V1',
    requiredAnchorIds: [
      'WORLD-CAMP-DAWN-A',
      'PROP-CAMP-FIRE-A',
      'PROP-TEMP-SHELTER-A',
      'LM-SPLIT-ROCK-01',
      'LIGHT-DAY1-DAWN-A',
      'ARU-IDENTITY-V1',
      'DAMU-IDENTITY-V1',
      'NUA-IDENTITY-V1',
      'B1-CONTINUITY-V1',
      'B2-CONTINUITY-V1',
    ],
    requiredAnatomyContractIds: ['ARU-PROP-V1', 'DAMU-PROP-V1', 'NUA-PROP-V1'],
    derivationMode: 'anchor-conditioned',
    continuityGroupId: 'CAMP-DAWN-CONTINUITY',
    alt: '새벽 불가에서 사람들이 각자 일을 이어가는 작은 공동체 공간',
    objectFit: 'cover',
    continuity: [
      '불·거처·아루·다무·누아의 상대 위치가 Scene Bible v2.1과 맞는다.',
      '거처는 현대 텐트처럼 읽히지 않는다.',
      '모든 인물이 플레이어를 동시에 바라보지 않는다.',
      'L/TP/PP는 같은 지리와 같은 순간을 다른 framing으로 보여준다.',
      'portrait 재구성을 위해 인체 비율을 늘리거나 압축하지 않는다.',
    ],
  },
] as const;

export function isStage075RasterReadyForRuntime(record: Stage075RasterRecord) {
  return Boolean(
    record.status === 'approved' &&
      record.sources &&
      record.requiredStyleAnchorId === 'STYLE-GIR-V1' &&
      isStage075StyleAnchorApproved() &&
      areStage075AnchorsApproved(record.requiredAnchorIds) &&
      areStage075AnatomyContractsApproved(record.requiredAnatomyContractIds),
  );
}

export function getApprovedStage075Raster(assetId: string) {
  const record = STAGE075_RASTER_MANIFEST.find((item) => item.assetId === assetId);

  if (!record || !isStage075RasterReadyForRuntime(record)) {
    return null;
  }

  return record;
}
