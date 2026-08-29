import type { Stage075VisualAnchorId } from './stage075VisualContinuityRegistry';

export type AnatomyContractStatus =
  | 'schema-locked'
  | 'reference-pending'
  | 'contract-approved';

export type Stage075AnatomyContractId =
  | 'PLAYER-HUNT-BODY-PROP-V1'
  | 'ARU-PROP-V1'
  | 'DAMU-PROP-V1'
  | 'NUA-PROP-V1'
  | 'SC02-HANDOFF-GEO-V1'
  | 'SC07-GROUND-BRACE-GEO-V1'
  | 'SC10-ROCK-BRACE-GEO-V1';

export interface Stage075AnatomyContract {
  id: Stage075AnatomyContractId;
  status: AnatomyContractStatus;
  scenes: readonly string[];
  requiredAnchorIds: readonly Stage075VisualAnchorId[];
  requiredPoseFamilies: readonly string[];
  proportionKeys: readonly string[];
  immutableRules: readonly string[];
  forbiddenDriftCodes: readonly string[];
  approvedMasterPaths?: readonly string[];
}

/**
 * Anatomy and contact geometry are upstream dependencies for hero/body/contact rasters.
 * Numeric ratios are deliberately not invented here; they are measured once from approved
 * canonical production masters, then inherited exactly by every derivative.
 * Functional anatomy is mandatory; conventional 6/7/8-head proportion targets are not.
 */
export const STAGE075_ANATOMY_CONTRACTS: readonly Stage075AnatomyContract[] = [
  {
    id: 'PLAYER-HUNT-BODY-PROP-V1',
    status: 'reference-pending',
    scenes: ['SC00', 'SC01', 'SC02', 'SC03', 'SC04', 'SC05', 'SC06', 'SC07', 'SC08', 'SC09', 'SC10'],
    requiredAnchorIds: ['PLAYER-HUNT-BODY-V1'],
    requiredPoseFamilies: [
      'P-HUNT-REST-SEATED',
      'P-HUNT-RECEIVE-REACH',
      'P-HUNT-GRIP-CLOSE',
      'P-HUNT-INSPECT-HANDAXE',
      'P-HUNT-RISE',
      'P-HUNT-WALK-CARRY',
      'P-HUNT-STAND-STOP',
      'P-HUNT-CROUCH-TRANSITION',
      'P-HUNT-CROUCH-GROUND',
      'P-HUNT-LEFT-GROUND-BRACE',
      'P-HUNT-LEFT-ROCK-BRACE',
    ],
    proportionKeys: [
      'palm-length',
      'middle-finger-length',
      'palm-width',
      'wrist-width',
      'visible-forearm-length-by-pose',
      'handaxe-grip-width-vs-palm',
      'foot-length',
      'ankle-width',
    ],
    immutableRules: [
      'PLAYER-HUNT-BODY-V1 structural scaffold와 canonical body master를 먼저 승인한 뒤 실제 비율을 한 번 측정한다.',
      '승인된 canonical 손/손가락/손목/전완/발/발목 비율은 모든 derivative가 정확히 동일한 underlying ratio를 상속한다.',
      '오른손 dominant continuity를 유지한다.',
      '손/손가락/손목/전완/발/발목 비율을 장면별로 재설계하거나 재측정해 새 canonical 값으로 바꾸지 않는다.',
      'foreground limb의 화면상 크기 변화는 camera/FOV/foreshortening으로 설명되어야 하며 underlying ratio는 바뀌지 않는다.',
      '가독성을 위해 손/발을 장면별로 임의 확대하지 않는다.',
    ],
    forbiddenDriftCodes: ['ANAT-HAND-SCALE', 'ANAT-FINGER', 'ANAT-WRIST', 'ANAT-ARM-LENGTH', 'ANAT-FOOT-SCALE', 'ANAT-FOV', 'ANAT-POSE-ID'],
  },
  {
    id: 'ARU-PROP-V1',
    status: 'reference-pending',
    scenes: ['SC01', 'SC02', 'SC03', 'SC04', 'SC05', 'SC11'],
    requiredAnchorIds: ['ARU-IDENTITY-V1'],
    requiredPoseFamilies: ['A-NEAR-FIRE-NEUTRAL', 'A-OFFER-HANDAXE', 'A-SHARED-CONTACT', 'A-RELEASE-HANDAXE', 'A-WATCH-DEPARTURE'],
    proportionKeys: ['canonical-head-count', 'head-height/H', 'shoulder-width/H', 'shoulder-y/H', 'pelvis-y/H', 'knee-y/H', 'arm-span/H', 'upper-arm/H', 'forearm/H', 'hand-length/H', 'thigh/H', 'shin/H', 'foot-length/H'],
    immutableRules: [
      'structural scaffold → canonical identity master → turnaround derivative 순서를 사용한다.',
      '6/7/8등신 같은 외부 목표를 먼저 강제하지 않고 승인된 canonical master의 비율을 한 번 측정해 잠근다.',
      'canonical-head-count를 기록했다면 그 값은 P0 identity다. 예: 7.2로 승인된 Aru는 다른 derivative에서 underlying 6.8 또는 7.5가 될 수 없다.',
      'turnaround views use one exact skeleton/proportion fingerprint.',
      'handoff pose may rotate/lean/foreshorten but may not change limb lengths, canonical head/body relationship or shoulder width.',
      '화면상 apparent ratio 차이는 camera/pose로 설명해야 하며 새 canonical ratio로 재정의하지 않는다.',
      'garment silhouette may not conceal a changed body design.',
    ],
    forbiddenDriftCodes: ['ANAT-HEAD-BODY', 'ANAT-ARM-LENGTH', 'ANAT-SHOULDER', 'ANAT-TORSO', 'ANAT-PELVIS', 'ANAT-LEG-LENGTH', 'ANAT-FOOT-SCALE', 'ANAT-COM', 'ANAT-POSE-ID'],
  },
  {
    id: 'DAMU-PROP-V1',
    status: 'reference-pending',
    scenes: ['SC01', 'SC03', 'SC04', 'SC05', 'SC06', 'SC07', 'SC08', 'SC09'],
    requiredAnchorIds: ['DAMU-IDENTITY-V1'],
    requiredPoseFamilies: ['D-PREPARE', 'D-WALK', 'D-WAIT', 'D-STOP', 'D-CROUCH', 'D-GROUND-OBSERVE'],
    proportionKeys: ['canonical-head-count', 'head-height/H', 'shoulder-width/H', 'shoulder-y/H', 'pelvis-y/H', 'knee-y/H', 'arm-span/H', 'upper-arm/H', 'forearm/H', 'hand-length/H', 'thigh/H', 'shin/H', 'foot-length/H'],
    immutableRules: [
      'structural scaffold와 canonical identity master를 먼저 정하고 이후 view/pose를 파생한다.',
      '6/7/8등신 같은 외부 목표를 먼저 강제하지 않고 승인된 canonical master의 비율을 한 번 측정해 잠근다.',
      'canonical-head-count와 normalized ratio set은 P0 identity이며 derivative마다 바꿀 수 없다.',
      'standing/walking/crouching all derive from one exact body proportion fingerprint.',
      'crouch changes joint angles, projection and center of mass, not limb length or canonical head/body relationship.',
    ],
    forbiddenDriftCodes: ['ANAT-HEAD-BODY', 'ANAT-ARM-LENGTH', 'ANAT-TORSO', 'ANAT-PELVIS', 'ANAT-LEG-LENGTH', 'ANAT-FOOT-SCALE', 'ANAT-COM', 'ANAT-POSE-ID'],
  },
  {
    id: 'NUA-PROP-V1',
    status: 'reference-pending',
    scenes: ['SC01', 'SC03', 'SC04', 'SC05', 'SC08', 'SC09'],
    requiredAnchorIds: ['NUA-IDENTITY-V1'],
    requiredPoseFamilies: ['N-OUTWARD-IDLE', 'N-WALK', 'N-ATTENTION-HEAD', 'N-ATTENTION-SHOULDER', 'N-ATTENTION-TORSO'],
    proportionKeys: ['canonical-head-count', 'head-height/H', 'shoulder-width/H', 'shoulder-y/H', 'pelvis-y/H', 'knee-y/H', 'arm-span/H', 'upper-arm/H', 'forearm/H', 'hand-length/H', 'thigh/H', 'shin/H', 'foot-length/H'],
    immutableRules: [
      'structural scaffold와 canonical identity master를 먼저 정하고 이후 attention/motion view를 파생한다.',
      '6/7/8등신 같은 외부 목표를 먼저 강제하지 않고 승인된 canonical master의 비율을 한 번 측정해 잠근다.',
      'canonical-head-count와 normalized ratio set은 P0 identity이며 derivative마다 바꿀 수 없다.',
      'attention sequence rotates one consistent skeleton and exact canonical proportion fingerprint.',
      'head→shoulder→torso sequence may not resize the neck/shoulders or canonical head/body relationship between frames.',
    ],
    forbiddenDriftCodes: ['ANAT-HEAD-BODY', 'ANAT-SHOULDER', 'ANAT-TORSO', 'ANAT-FOOT-SCALE', 'ANAT-COM', 'ANAT-POSE-ID'],
  },
  {
    id: 'SC02-HANDOFF-GEO-V1',
    status: 'reference-pending',
    scenes: ['SC02'],
    requiredAnchorIds: ['ARU-IDENTITY-V1', 'PLAYER-HUNT-BODY-V1', 'DAY1-HANDAXE-V1'],
    requiredPoseFamilies: ['A-OFFER-HANDAXE', 'A-SHARED-CONTACT', 'A-RELEASE-HANDAXE', 'P-HUNT-RECEIVE-REACH', 'P-HUNT-GRIP-CLOSE'],
    proportionKeys: ['contact-center-L', 'contact-center-TP', 'contact-center-PP', 'player-wrist-angle-range', 'aru-wrist-angle-range', 'handaxe-long-axis-angle-range'],
    immutableRules: [
      'Aru hand → same handaxe → Player right hand contact topology is preserved.',
      'Offer/Shared/Release are one continuous transfer, not three independently generated poses.',
    ],
    forbiddenDriftCodes: ['GEO-CONTACT-DEPTH', 'GEO-CONTACT-POINT', 'GEO-CONTACT-TOPOLOGY', 'GEO-OBJECT-SCALE', 'GEO-LIMB-SCALE', 'GEO-CAMERA', 'GEO-CROP', 'GEO-TEMPORAL'],
  },
  {
    id: 'SC07-GROUND-BRACE-GEO-V1',
    status: 'reference-pending',
    scenes: ['SC07'],
    requiredAnchorIds: ['PLAYER-HUNT-BODY-V1', 'DAMU-IDENTITY-V1', 'WORLD-GROUND-OBS-A', 'DAY1-HANDAXE-V1'],
    requiredPoseFamilies: ['P-HUNT-CROUCH-TRANSITION', 'P-HUNT-CROUCH-GROUND', 'P-HUNT-LEFT-GROUND-BRACE', 'D-CROUCH', 'D-GROUND-OBSERVE'],
    proportionKeys: ['left-ground-contact-zone', 'crouch-camera-height', 'left-wrist-angle-range', 'evidence-offset-from-contact'],
    immutableRules: [
      'Player lowers after Damu; SC06 Player remains standing.',
      'left hand braces on ground and does not point to the evidence.',
      'right-hand handaxe ownership continues through the crouch transition.',
    ],
    forbiddenDriftCodes: ['GEO-CONTACT-POINT', 'GEO-LIMB-SCALE', 'GEO-CAMERA', 'GEO-CROP', 'GEO-TEMPORAL', 'ANAT-COM'],
  },
  {
    id: 'SC10-ROCK-BRACE-GEO-V1',
    status: 'reference-pending',
    scenes: ['SC10'],
    requiredAnchorIds: ['PLAYER-HUNT-BODY-V1', 'WORLD-ROCK-SHELTER-A', 'DAY1-HANDAXE-V1'],
    requiredPoseFamilies: ['P-HUNT-LEFT-ROCK-BRACE'],
    proportionKeys: ['rock-contact-edge-id', 'left-palm-contact-zone', 'left-wrist-angle-range', 'handaxe-visible-zone-L', 'handaxe-visible-zone-TP', 'handaxe-visible-zone-PP'],
    immutableRules: [
      'left hand contacts one approved rock edge without stretching anatomy.',
      'right hand still owns the same DAY1-HANDAXE-V1.',
    ],
    forbiddenDriftCodes: ['GEO-CONTACT-POINT', 'GEO-LIMB-SCALE', 'GEO-OBJECT-SCALE', 'GEO-CAMERA', 'GEO-CROP', 'ANAT-WRIST'],
  },
] as const;

export function getStage075AnatomyContract(id: Stage075AnatomyContractId) {
  return STAGE075_ANATOMY_CONTRACTS.find((contract) => contract.id === id) ?? null;
}

export function areStage075AnatomyContractsApproved(ids: readonly Stage075AnatomyContractId[]) {
  return ids.every((id) => {
    const contract = getStage075AnatomyContract(id);
    return Boolean(
      contract &&
        contract.status === 'contract-approved' &&
        contract.approvedMasterPaths &&
        contract.approvedMasterPaths.length > 0,
    );
  });
}
