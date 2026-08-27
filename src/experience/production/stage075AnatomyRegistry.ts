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
 * Numeric ratios are deliberately not invented here; they are measured from approved
 * production masters, then the contract can move to `contract-approved`.
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
    ],
    immutableRules: [
      '오른손 dominant continuity를 유지한다.',
      '손/손가락/손목/전완 비율을 장면별로 재설계하지 않는다.',
      'foreground limb scale 변화는 camera/FOV 변화로 설명되어야 한다.',
    ],
    forbiddenDriftCodes: ['ANAT-HAND-SCALE', 'ANAT-FINGER', 'ANAT-WRIST', 'ANAT-ARM-LENGTH', 'ANAT-FOV', 'ANAT-POSE-ID'],
  },
  {
    id: 'ARU-PROP-V1',
    status: 'reference-pending',
    scenes: ['SC01', 'SC02', 'SC03', 'SC04', 'SC05', 'SC11'],
    requiredAnchorIds: ['ARU-IDENTITY-V1'],
    requiredPoseFamilies: ['A-NEAR-FIRE-NEUTRAL', 'A-OFFER-HANDAXE', 'A-SHARED-CONTACT', 'A-RELEASE-HANDAXE', 'A-WATCH-DEPARTURE'],
    proportionKeys: ['head-height/H', 'shoulder-y/H', 'pelvis-y/H', 'knee-y/H', 'arm-span/H', 'hand-length/H', 'foot-length/H'],
    immutableRules: [
      'turnaround views use one skeleton/proportion master.',
      'handoff pose may rotate/lean but may not change limb lengths or shoulder width.',
      'garment silhouette may not conceal a changed body design.',
    ],
    forbiddenDriftCodes: ['ANAT-ARM-LENGTH', 'ANAT-SHOULDER', 'ANAT-TORSO', 'ANAT-PELVIS', 'ANAT-LEG-LENGTH', 'ANAT-COM', 'ANAT-POSE-ID'],
  },
  {
    id: 'DAMU-PROP-V1',
    status: 'reference-pending',
    scenes: ['SC01', 'SC03', 'SC04', 'SC05', 'SC06', 'SC07', 'SC08', 'SC09'],
    requiredAnchorIds: ['DAMU-IDENTITY-V1'],
    requiredPoseFamilies: ['D-PREPARE', 'D-WALK', 'D-WAIT', 'D-STOP', 'D-CROUCH', 'D-GROUND-OBSERVE'],
    proportionKeys: ['head-height/H', 'shoulder-y/H', 'pelvis-y/H', 'knee-y/H', 'arm-span/H', 'hand-length/H', 'foot-length/H'],
    immutableRules: [
      'standing/walking/crouching all derive from one body master.',
      'crouch changes joint angles and center of mass, not limb length.',
    ],
    forbiddenDriftCodes: ['ANAT-ARM-LENGTH', 'ANAT-TORSO', 'ANAT-PELVIS', 'ANAT-LEG-LENGTH', 'ANAT-COM', 'ANAT-POSE-ID'],
  },
  {
    id: 'NUA-PROP-V1',
    status: 'reference-pending',
    scenes: ['SC01', 'SC03', 'SC04', 'SC05', 'SC08', 'SC09'],
    requiredAnchorIds: ['NUA-IDENTITY-V1'],
    requiredPoseFamilies: ['N-OUTWARD-IDLE', 'N-WALK', 'N-ATTENTION-HEAD', 'N-ATTENTION-SHOULDER', 'N-ATTENTION-TORSO'],
    proportionKeys: ['head-height/H', 'shoulder-y/H', 'pelvis-y/H', 'knee-y/H', 'arm-span/H', 'hand-length/H', 'foot-length/H'],
    immutableRules: [
      'attention sequence rotates one consistent skeleton.',
      'head→shoulder→torso sequence may not resize the neck/shoulders between frames.',
    ],
    forbiddenDriftCodes: ['ANAT-SHOULDER', 'ANAT-TORSO', 'ANAT-COM', 'ANAT-POSE-ID'],
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
