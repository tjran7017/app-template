import { WorkCardDetailText, WorkCardDetailButton } from './view';

interface Props {
  onClick?: () => void;
}

export function WorkCardDetail({ onClick = () => {} }: Props) {
  const description = '주로 MSA 기반 웹 서비스 개발 프로젝트에 프론트엔드, 풀스택으로 참여하였습니다.';

  return (
    <div className="work-card-detail">
      <WorkCardDetailText description={description} />
      <WorkCardDetailButton onClick={onClick!} />
    </div>
  );
}
