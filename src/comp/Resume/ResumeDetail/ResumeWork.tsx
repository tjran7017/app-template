import { WorkCard } from '~/comp/_shared/Card';
import { useContext } from 'react';
import { ResumeContext } from '../Resume.model';

export function ResumeWork() {
  const id = 'work';
  const { value, setValue } = useContext(ResumeContext);

  const handleClick = () => setValue('project');

  if (value !== id) return null;
  return (
    <section className="section-wrapper fade" id={id}>
      <div className="work-wrap">
        <WorkCard onClick={handleClick} />
      </div>
    </section>
  );
}
