import { Work } from '~/data';

interface Props {
  work: Work;
}

export function ResumeWorkCard({ work }: Props) {
  const { id, src, name, job, period, description } = work;

  return (
    <div className="work-card">
      <div className="work-card-body">
        <div className="work-card-img">
          <img src={src} alt={name} />
        </div>

        <p className="work-card-title">{name}</p>
        <p className="work-card-title sub">{job}</p>
        <p className="work-card-title sub">{period}</p>
        <p className="work-card-desc">{description}</p>
      </div>

      <div className="work-card-ribbon">
        <span className="work-card-ribbon-label">{id}</span>
      </div>
    </div>
  );
}
