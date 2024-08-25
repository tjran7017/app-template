import { ResumeProjectCard } from './ResumeProjectCard';
import { useMemo } from 'react';
import { Project } from '~/data';

export function ResumeProjects() {
  const projects = useMemo<Project[]>(
    () => [
      {
        id: 'dsstore',
        workId: '01',
        name: 'DS스토어 모더니제이션',
        period: '2023.11 - 2024.02',
        job: '풀스택',
        skills: ['react', 'javascript', 'typescript', 'react-query', 'nextjs', 'vite', 'java', 'spring-boot', 'mysql'],
        description: ` 기존 PHP로 개발된 E-commerce 시스템을 MSA / Spring Boot / React 로 재구축하는 프로젝트로, 힘든 상황의 프로젝트 지원을 위해 중간에 투입되어 성공적으로 서비스를 오픈하였습니다.
 주도적으로 개선사항들을 찾아 작업하였고, 처음엔 프론트엔드로 참여하였으나 백엔드 쪽도 지원하기 위해 적극적으로 개발을 진행하였습니다.`,
        contents: [
          'KG 모빌리언스와 연동한 결제 서버/화면과 상품 가격 계산을 위한 주문 프로세스 등의 추가 기능 개발',
          '40만건 이상 데이터 마이그레이션 진행',
          '사용자 경험 개선을 위해 Loading UI 추가, 조회 성능 개선 진행',
          '최대 83%(3초 → 0.5초)의 조회 성능 개선',
          '유지 보수성과 가독성 개선을 위해 컴포넌트와 주문 프로세스 로직 리팩토링 진행',
          '현업과 소통하여 의사결정을 주도하는 경험',
        ],
        respond: ['web', 'tablet', 'mobile'],
        link: 'https://dsstore.dongascience.com/',
      },
      {
        id: 'skona',
        workId: '01',
        name: 'SKON 배터리 아카데미',
        period: '2022.06 - 2023.10',
        job: '프론트엔드',
        skills: ['react', 'javascript', 'typescript', 'mobx', 'react-query', 'vite', 'nginx'],
        description: ` SKON 배터리 사원들을 대상으로한 3개 국어 지원 LMS 구축 프로젝트로, 프로젝트 초기에 투입되어 프로젝트 설정부터 서비스 오픈과 운영을 경험하였습니다.
 프로젝트 시작 후 얼마 안 되어 선임 분들의 퇴사로 인해 프론트엔드를 리딩하게 되는 어려움이 있었지만, 무사히 서비스를 오픈하였습니다.`,
        contents: [
          'video.js를 활용한 동영상 학습, 학습 관리, 챌린지 등의 학습 관련 화면과, 다국어 관리 등의 화면 개발',
          '도메인 추가 및 Location 관리 등 Nginx 운영',
          '캡처 방지를 위한 보안 프로그램 연동 개발',
          '서비스 버전 확인 및 적용 기능 개발',
          '개발 편의성을 위해 React Query 도입 및 주요 설정 공유, 번들링 변경(Webpack → Vite)을 통해 로컬 실행 속도 90%(10분 → 1분) 개선',
          '코드 품질 관리를 위해 Eslint/Prettier, Husky 적용',
          '사용자 경험을 위해 Input 성능 개선, Loading UI 추가와 Code splitting을 적용하여 초기 로딩 개선',
        ],
        respond: ['web'],
      },
      {
        id: 'conlab',
        workId: '01',
        name: '한국관광공사 관광정보 관리 시스템',
        period: '2021.10 - 2022.05',
        job: '풀스택',
        skills: ['react', 'javascript', 'typescript', 'mobx', 'nextjs', 'rollup', 'java', 'spring-boot', 'mysql', 'kafka'],
        description: ` 한국관광공사에 등록된 50만건 이상의 관광정보를 통합 관리 및 이용을 위한 시스템 구축 프로젝트로, 힘든 상황의 프로젝트 지원을 위해 중간에 투입되어 성공적으로 서비스를 오픈하였습니다.
 서울에서 개발하는 분들을 리딩하여 기술적 어려움을 지원하는 경험을 하였습니다.`,
        contents: [
          'TinyMCE를 활용한 에디터 화면, 관광정보 조회, 추천 관광지 관리 등 화면 개발',
          'Kafka를 이용한 관광정보 관리 이벤트 서버 개발 및 도메인 설계 경험',
          'MySql index 적용 및 SQL 개선을 통한 조회 성능 최대 75% 개선(4초 → 1초)',
        ],
        respond: ['web', 'tablet', 'mobile'],
        link: 'https://conlab.visitkorea.or.kr/',
      },
      {
        id: 'gs-shop',
        workId: '01',
        name: 'GS 홈쇼핑 모더니제이션',
        period: '2021.08 - 2021.09',
        job: '프론트엔드',
        skills: ['react', 'javascript', 'typescript', 'mobx', 'nextjs', 'rollup'],
        description: `기존 홈쇼핑 관리 시스템을  MSA / Spring Boot / React 로 재개발하는 프로젝트로, 힘든 상황의 프로젝트 지원을 위해 중간에 투입되어 개발을 지원하였습니다.
 Javascript 기반의 코드를 Typescript 기반의 React로 재개발하는 경험을 하였습니다.`,
        contents: ['상품 관리, 쇼호스트 관리 등의 화면 개발 참여', 'DnD, Input 화면 렌더링 최적화'],
        respond: ['web'],
      },
      {
        id: 'nara-platform',
        workId: '01',
        name: '나라 플랫폼 2.0',
        period: '2021.04 - 2021.07',
        job: '프론트엔드',
        skills: ['react', 'javascript', 'typescript', 'mobx', 'nextjs', 'rollup'],
        description: ` SI SaaS 플랫폼 서비스 리팩토링 프로젝트로, 도메인을 변경으로 인해 리팩토링을 진행하였습니다.`,
        contents: ['가입 / 권한 / 공간 및 인원 관리를 위한 작업 공간 관리 화면 개발', '사내 UI 라이브러리에서 Material-UI로 전체 컴포넌트 리팩토링'],
        respond: ['web'],
      },
      {
        id: 'namoosori',
        workId: '01',
        name: '나무소리',
        period: '2021.01 - 2021.03',
        job: '프론트엔드',
        skills: ['react', 'javascript', 'typescript', 'mobx', 'rollup', 'kafka'],
        description: ` 소프트웨어 개발자 양성을 위한 사내 서비스에 시험 / 통계 서비스 개발을 진행하였습니다.`,
        contents: ['도메인 / 화면 설계 경험', '통계 서비스 개발 중 Kafka 테스트 담당'],
        respond: ['web'],
      },
    ],
    [],
  );

  return (
    <article id="projects" className="projects-wrap">
      {projects.map((project) => (
        <ResumeProjectCard key={project.id} project={project} />
      ))}
    </article>
  );
}
