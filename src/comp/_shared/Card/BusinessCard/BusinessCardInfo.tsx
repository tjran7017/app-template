import { BusinessModel } from '~/api';
import { BusinessCardTitle, BusinessCardPeriod, BusinessCardContact } from './view';

interface Props {
  business: BusinessModel;
}

export function BusinessCardInfo({ business }: Props) {
  //
  return (
    <div className="info-container">
      <BusinessCardTitle business={business} />
      <BusinessCardPeriod business={business} />
      <BusinessCardContact />
    </div>
  );
}
