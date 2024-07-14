import { ProjectCard, ProjectCardModel } from '~/comp/_shared/Card';
import { useContext } from 'react';
import { ResumeContext } from '../Resume.model';

export function ResumeProject() {
  //
  const id = 'project';
  const { value } = useContext(ResumeContext);

  const data: ProjectCardModel[] = [
    {
      key: 'donga',
      src: '/assets/img/donga.png',
      tags: ['React', 'Typescript', 'Vite', 'React Query', 'Next.js', 'Spring Boot', 'MySql'],
      name: 'DS스토어 모더니제이션',
      desc: '기존 동아사이언스 쇼핑몰 시스템을 MSA 기반으로 재개발 하는 프로젝트로, Next.js 기반 반응형 웹 / 어드민 웹의 개선 및 추가 기능 개발 진행 후 서비스 오픈 경험',
      period: '2023.11 - 2024.02',
      job: '풀스택',
    },
    {
      key: 'skon',
      src: '/assets/img/skon_0.png',
      tags: ['React', 'Typescript', 'Vite', 'MobX', 'React Query', 'Nginx'],
      name: 'SKON 배터리 아카데미',
      desc: 'SKON 배터리 직원을 대상으로한 다국어 지원 사내 아카데미 서비스 개발 프로젝트로, 강의 시청 및 관리를 위한 주요 페이지 등을 개발하여 서비스 오픈 및 운영 경험',
      period: '2022.06 - 2023.10',
      job: '프론트엔드',
    },
    {
      key: 'kto',
      src: '/assets/img/kto_0.png',
      tags: ['React', 'Typescript', 'Rollup', 'Next.js', 'MobX', 'Storybook', 'Spring Boot', 'MySql', 'Kafka'],
      name: '디지털관광자원 통합관리시스템',
      desc: '한국관광공사에 등록된 50만건 이상의 관광정보를 통합 관리 및 이용을 위한 시스템 개발 프로젝트로, Next.js기반 반응형 웹 / 어드민 웹 개발 참여 후 서비스 오픈 경험',
      period: '2021.10 - 2022.05',
      job: '풀스택',
    },
    {
      key: 'gs',
      src: '/assets/img/gs.jpg',
      tags: ['React', 'Typescript', 'Rollup', 'Next.js', 'MobX', 'Storybook'],
      name: 'GS 홈쇼핑 모더니제이션',
      desc: '기존 홈쇼핑 시스템을  MSA 기반으로 재개발하는 프로젝트, 중간에 투입되어 추가 기능 개발을 지원',
      period: '2021.08 - 2021.09',
      job: '프론트엔드',
    },
    {
      key: 'naraplatform',
      src: '/assets/img/nextree.png',
      tags: ['React', 'Typescript', 'Rollup', 'Next.js', 'MobX', 'Storybook'],
      name: '나라 플랫폼 2.0',
      desc: '다양한 프로젝트에서 공통된 도메인 및 기능 제공을 위한 사내 서비스로, 도메인 변경으로 인한 리팩토링 및 버전업 진행',
      period: '2021.04 - 2021.07',
      job: '프론트엔드',
    },
    {
      key: 'namoosori',
      src: '/assets/img/nextree.png',
      tags: ['React', 'Typescript', 'MobX', 'Rollup', 'Storybook'],
      name: '나무소리',
      desc: '소프트웨어 개발자 양성을 위한 사내 서비스로, 시험 및 통계 기능 추가 개발 진행',
      period: '2021.01 - 2021.03',
      job: '프론트엔드',
    },
  ];

  if (value !== id) return null;
  return (
    <section className="section-wrapper fade" id={id}>
      <div className="project-wrap">
        <div className="company-wrap">
          <h1>Nextree (2021.01 -2024.02)</h1>
        </div>
        <ProjectCard projectData={data} />
      </div>
    </section>
  );
}
