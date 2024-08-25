import { useMemo } from 'react';
import { Work } from '~/data';
import { ResumeWorkCard } from './ResumeWorkCard';

export function ResumeWorks() {
  const works = useMemo<Work[]>(() => {
    return [
      {
        id: '01',
        src: '/assets/image/work/nextree.png',
        name: '넥스트리(주)',
        description: ` MSA기반 SI 프로젝트와, 자사 서비스 개발에 프론트엔드/풀스택으로 참여하였습니다.
        
 좋은 평가를 받아 우수 개발자상을 수상하였습니다.`,
        period: '2021.01 - 2024.02',
        job: 'SW개발그룹/수석',
      },
    ];
  }, []);

  return (
    <article id="works" className="works-wrap fade-target">
      {works.map((work) => (
        <ResumeWorkCard key={work.id} work={work} />
      ))}
    </article>
  );
}
