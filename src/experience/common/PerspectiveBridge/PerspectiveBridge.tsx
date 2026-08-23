import { ActionButton } from '../../../ui/ActionButton/ActionButton';
import { ScreenRegion } from '../../../ui/ScreenRegion/ScreenRegion';

interface PerspectiveBridgeProps {
  completedRoleLabel: string;
  hasMoreRoles: boolean;
  onContinue: () => void;
}

export function PerspectiveBridge({
  completedRoleLabel,
  hasMoreRoles,
  onContinue,
}: PerspectiveBridgeProps) {
  return (
    <ScreenRegion
      title="Perspective Bridge"
      description={
        <p>
          방금 본 {completedRoleLabel}의 하루는 같은 공동체가 보낸 같은 날의 한
          관점입니다.
        </p>
      }
    >
      <p>
        {hasMoreRoles
          ? '아직 보지 않은 다른 관점에서 같은 하루를 이어 봅니다.'
          : '세 관점의 하루가 모였습니다. 이제 공동체의 저녁으로 연결합니다.'}
      </p>
      <ActionButton onClick={onContinue}>
        {hasMoreRoles ? '다른 관점으로 이어가기' : '공통 저녁으로 이어가기'}
      </ActionButton>
    </ScreenRegion>
  );
}
