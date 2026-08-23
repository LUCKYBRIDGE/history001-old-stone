import type { RoleId, RoleRegistry } from '../../contracts/role';
import { ActionButton } from '../../../ui/ActionButton/ActionButton';
import { ScreenRegion } from '../../../ui/ScreenRegion/ScreenRegion';

interface RoleEntryProps {
  candidateRoleIds: readonly RoleId[];
  registry: RoleRegistry;
  onSelect: (roleId: RoleId) => void;
}

export function RoleEntry({
  candidateRoleIds,
  registry,
  onSelect,
}: RoleEntryProps) {
  return (
    <ScreenRegion
      title="같은 하루, 다른 관점"
      description={
        <p>
          학생이 앱에서 역할을 플레이하는 순서는 역사 속 시간의 앞뒤를 뜻하지
          않습니다.
        </p>
      }
    >
      {candidateRoleIds.length > 0 ? (
        <div className="button-stack">
          {candidateRoleIds.map((roleId) => (
            <ActionButton key={roleId} onClick={() => onSelect(roleId)}>
              {registry[roleId].label} 관점 시작
            </ActionButton>
          ))}
        </div>
      ) : (
        <p>진입 가능한 역할이 없습니다.</p>
      )}
    </ScreenRegion>
  );
}
