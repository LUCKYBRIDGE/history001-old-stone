import type {
  RoleCompletion,
  RoleFeatureProps,
} from '../../experience/contracts/role';
import { ActionButton } from '../../ui/ActionButton/ActionButton';
import { ScreenRegion } from '../../ui/ScreenRegion/ScreenRegion';

interface GatherPlaceholderDetail {
  placeholder: true;
  note: 'gather-story-and-playflow-not-defined';
}

export function GatherFeature({ onComplete }: RoleFeatureProps) {
  const completePlaceholder = () => {
    const result: RoleCompletion<GatherPlaceholderDetail> = {
      roleId: 'gather',
      completed: true,
      sharedSignals: [
        {
          id: 'gather-perspective-seen',
          sourceRole: 'gather',
          tags: ['same-day', 'gather-perspective', 'placeholder'],
        },
      ],
      detail: {
        placeholder: true,
        note: 'gather-story-and-playflow-not-defined',
      },
    };

    onComplete(result);
  };

  return (
    <ScreenRegion
      title="Gather Feature placeholder"
      description={
        <p>
          채집의 상세 STORY / PLAYFLOW는 아직 정하지 않습니다. Hunt의 플레이
          문법을 복제하지 않는 독립 Feature 슬롯만 검증합니다.
        </p>
      }
    >
      <ActionButton onClick={completePlaceholder}>
        개발용: 채집 관점 완료 반환
      </ActionButton>
    </ScreenRegion>
  );
}
