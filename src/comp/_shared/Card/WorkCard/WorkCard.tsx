interface Props {
  onClick?: () => void;
}

export function WorkCard({ onClick }: Props) {
  return (
    <div className="work-card-wrap">
      <div className="work-card-overview">
        <div className="infos-wrap">
          <div className="group-text">
            <h1>Nextree</h1>
          </div>
          <div className="group-text">
            <h3>재직기간</h3>
            <p>2021.01 - 2024.02</p>
          </div>
          <div className="group-text">
            <h3>부서/직책</h3>
            <p>SW개발그룹/수석</p>
          </div>
        </div>
      </div>

      <div className="work-card-detail">
        <p> 주로 MSA 기반 웹 서비스 개발 프로젝트에 프론트엔드, 풀스택으로 참여하였습니다. </p>

        <div className="button-wrap">
          <button className="projects-button" onClick={onClick}>
            <p>View Projects</p>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
