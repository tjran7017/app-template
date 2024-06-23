import { BusinessCard } from '~/comp/Card/BusinessCard';

export function MainWork() {
  return (
    <div className="section-wrapper" id="work">
      <div>
        <BusinessCard cardInfo={{ job: 'SW개발그룹 / 수석', period: '2021.01 - 2024.02' }} />
        <BusinessCard />
      </div>
    </div>
  );
}
