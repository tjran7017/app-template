import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
  type: '404' | 'boundary';
}

export function Error({ type }: Props) {
  switch (type) {
    case '404':
      return (
        <ErrorComp
          title={
            <>
              <span className="blue">4</span>0<span className="blue">4</span>
            </>
          }
          desc="Page not found"
        />
      );

    case 'boundary':
      return <ErrorComp title={<span className="blue">ERROR</span>} desc="Something went wrong" />;
  }
}

interface ErrorCompProps {
  title: string | ReactNode;
  desc: string | ReactNode;
}
function ErrorComp({ title, desc }: ErrorCompProps) {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <div className="error-wrap">
      <p>{title}</p>
      <p className="small">{desc}</p>
      <button onClick={handleClick}>HOME</button>
    </div>
  );
}
