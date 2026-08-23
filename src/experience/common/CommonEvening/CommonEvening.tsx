import { ROLE_LABELS } from '../../contracts/role';
import type { CommonEveningInput } from '../../integration/buildCommonEveningModel';
import { buildCommonEveningModel } from '../../integration/buildCommonEveningModel';
import { ScreenRegion } from '../../../ui/ScreenRegion/ScreenRegion';

interface CommonEveningProps {
  input: CommonEveningInput;
}

export function CommonEvening({ input }: CommonEveningProps) {
  const model = buildCommonEveningModel(input);
  const roleLabels = model.receivedRoleIds.map((roleId) => ROLE_LABELS[roleId]);

  return (
    <ScreenRegion
      title="공통 저녁"
      description={
        <p>
          이곳은 역할별 성적표가 아니라, 서로 다른 하루의 경험을 하나의 공동체
          생활로 합치는 Integration 지점입니다.
        </p>
      }
    >
      <p>
        사냥·채집·머무름에서 가져온 서로 다른 흔적이 같은 저녁의 생활로
        이어집니다.
      </p>
      <p data-testid="integration-status">
        Integration 입력: {roleLabels.join(' · ')}
      </p>
    </ScreenRegion>
  );
}
