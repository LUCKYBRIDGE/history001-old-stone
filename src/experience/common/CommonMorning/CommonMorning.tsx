import { ActionButton } from '../../../ui/ActionButton/ActionButton';
import { ScreenRegion } from '../../../ui/ScreenRegion/ScreenRegion';

interface CommonMorningProps {
  onComplete: () => void;
}

export function CommonMorning({ onComplete }: CommonMorningProps) {
  return (
    <ScreenRegion
      title="공통 아침"
      description={
        <p>
          같은 공동체의 하루가 시작됩니다. 이 아침은 역할마다 반복하지 않고 한 번만
          경험합니다.
        </p>
      }
    >
      <p>
        누군가는 사냥하러 나가고, 누군가는 주변에서 먹을 것을 찾고, 누군가는
        머무는 곳의 생활을 이어갑니다.
      </p>
      <ActionButton onClick={onComplete}>공통 아침 마치기</ActionButton>
    </ScreenRegion>
  );
}
