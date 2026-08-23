import type {
  RoleCompletion,
  RoleFeatureProps,
} from '../../experience/contracts/role';
import { ActionButton } from '../../ui/ActionButton/ActionButton';
import { ScreenRegion } from '../../ui/ScreenRegion/ScreenRegion';

interface HuntPlaceholderDetail {
  placeholder: true;
  note: 'hunt-content-not-implemented';
}

export function HuntFeature({ dayContext, onComplete }: RoleFeatureProps) {
  const completePlaceholder = () => {
    const result: RoleCompletion<HuntPlaceholderDetail> = {
      roleId: 'hunt',
      completed: true,
      sharedSignals: [
        {
          id: 'hunt-perspective-seen',
          sourceRole: 'hunt',
          tags: ['same-day', 'hunt-perspective', 'placeholder'],
        },
      ],
      detail: {
        placeholder: true,
        note: 'hunt-content-not-implemented',
      },
    };

    onComplete(result);
  };

  return (
    <ScreenRegion
      title="Hunt Feature placeholder"
      description={
        <p>
          사냥 Feature는 독립 슬롯입니다. 실제 추적·사냥·위험·귀환 플레이는 Stage
          08에서 이 Feature 내부에 구현합니다.
        </p>
      }
    >
      <p>
        공통 아침 확인: {dayContext.sharedMorningSeen ? '완료' : '미완료'}
      </p>
      <ActionButton onClick={completePlaceholder}>
        개발용: 사냥 관점 완료 반환
      </ActionButton>
    </ScreenRegion>
  );
}
