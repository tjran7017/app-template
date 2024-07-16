import { BusinessModel } from '~/api';

interface Props {
  business: BusinessModel;
}

export function BusinessCardPeriod({ business }: Props) {
  const { period } = business;
  return (
    <div className="period">
      <img src="/assets/img/card-time.svg" alt="time" />
      <p>{period}</p>
    </div>
  );
}
