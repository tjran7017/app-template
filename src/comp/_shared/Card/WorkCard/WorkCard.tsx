import { WorkCardOverview } from './WorkCardOverview';
import { WorkCardDetail } from './WorkCardDetail';

export function WorkCard() {
  return (
    <div className="work-card-container">
      <WorkCardOverview />
      <WorkCardDetail />
    </div>
  );
}
