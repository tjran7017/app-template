import { BusinessModel } from '~/api';

interface Props {
  business: BusinessModel;
}

export function BusinessCardTitle({ business }: Props) {
  const { company, job } = business;

  return (
    <div className="title">
      <h2>{company}</h2>
      <h5>{job}</h5>
    </div>
  );
}
