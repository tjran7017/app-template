import { BusinessModel } from '~/api';
import { EmptyBusinessCard, BusinessCardBackground } from './view';
import { BusinessCardInfo } from './BusinessCardInfo';

interface Props {
  business?: BusinessModel;
}

export function BusinessCard({ business }: Props) {
  //
  if (!business) return <EmptyBusinessCard />;

  return (
    <div className="business-card">
      <BusinessCardBackground />
      <BusinessCardInfo business={business} />
    </div>
  );
}
