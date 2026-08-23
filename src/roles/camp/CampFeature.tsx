import type {
  RoleCompletion,
  RoleFeatureProps,
} from '../../experience/contracts/role';
import { ActionButton } from '../../ui/ActionButton/ActionButton';
import { ScreenRegion } from '../../ui/ScreenRegion/ScreenRegion';

interface CampPlaceholderDetail {
  placeholder: true;
  note: 'camp-story-and-playflow-not-defined';
}

export function CampFeature({ onComplete }: RoleFeatureProps) {
  const completePlaceholder = () => {
    const result: RoleCompletion<CampPlaceholderDetail> = {
      roleId: 'camp',
      completed: true,
      sharedSignals: [
        {
          id: 'camp-perspective-seen',
          sourceRole: 'camp',
          tags: ['same-day', 'camp-perspective', 'placeholder'],
        },
      ],
      detail: {
        placeholder: true,
        note: 'camp-story-and-playflow-not-defined',
      },
    };

    onComplete(result);
  };

  return (
    <ScreenRegion
      title="Camp Feature placeholder"
      description={
        <p>
          머무름 역할은 생활 유지·기다림에 맞는 별도 PLAYFLOW를 가질 수 있도록
          비워 둡니다. 사냥식 Scene 구조를 전제하지 않습니다.
        </p>
      }
    >
      <ActionButton onClick={completePlaceholder}>
        개발용: 머무름 관점 완료 반환
      </ActionButton>
    </ScreenRegion>
  );
}
