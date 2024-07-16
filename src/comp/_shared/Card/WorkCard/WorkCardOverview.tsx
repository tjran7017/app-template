import { WorkCardOverviewText } from './view';

export function WorkCardOverview() {
  return (
    <div className="work-card-overview">
      <div className="infos-wrap">
        <WorkCardOverviewText text="Nextree" />
        <WorkCardOverviewText text="재직기간" subText="2021.01 - 2024.02" />
        <WorkCardOverviewText text="부서/직책" subText="SW개발그룹/수석" />
      </div>
    </div>
  );
}
