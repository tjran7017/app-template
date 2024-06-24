import { ProjectCard } from '../Card';
import type { ProjectCardModel } from '~/comp/Card';

export function MainProject() {
  //
  const data: { company: string; projects: ProjectCardModel[] }[] = [
    {
      company: 'Nextree',
      projects: [
        {
          name: '동아사이언스',
          description: '기존 PHP로 개발된 쇼핑몰 및 관리자 서비스를 React와 Java로 재개발',
          period: '2023.11 ~ 2024.02',
          skills: ['React', 'Typescript', 'Vite', 'React Query'],
        },
        {
          name: 'SKONA',
          description: 'SK ON 직원을 대상으로한 다국어 지원 사내 아카데미 서비스',
          period: '2022.06 ~ 2023.10',
          skills: ['React', 'Typescript', 'Vite', 'React Query', 'Mobx'],
        },
        {
          name: 'Conlab',
          description: '기존 한국관광공사에 등록된 50만건 이상의 관광정보를 관리하고 사용할 수 있는 서비스',
          period: '2021.10 ~ 2022.05',
          skills: ['React', 'Typescript', 'Rollup', 'Mobx'],
        },
        {
          name: 'GS 홈쇼핑',
          description: '기존 Javascript, JSP로 개발된 홈쇼핑 관리 페이지를 React와 Java로 재개발',
          period: '2021.07 ~ 2021.9',
          skills: ['React', 'Typescript', 'Rollup', 'Mobx'],
        },
        {
          name: '나라 플랫폼',
          description: '다양한 프로젝트에서 공통된 도메인 및 기능 제공을 위한 서비스',
          period: '2021.04 ~ 2021.07',
          skills: ['React', 'Typescript', 'Rollup', 'Mobx'],
        },
        {
          name: '나무소리',
          description: '5년간 1만 7천여명의 재직자를 대상으로 진행된 사내 코칭 서비스',
          period: '2021.01 ~ 2021.03',
          skills: ['React', 'Typescript', 'Rollup', 'Mobx'],
        },
      ],
    },
  ];

  return (
    <div className="section-wrapper" id="project" style={{ margin: '160px 0' }}>
      <div className="project-container">
        {data.map((val) => (
          <ProjectCard key={val.company} company={val.company} projects={val.projects} />
        ))}
      </div>
    </div>
  );
}
