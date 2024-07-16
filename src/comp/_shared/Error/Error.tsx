import { ReactNode } from 'react';
import { ErrorTitle, ErrorButton } from './view';

interface Props {
  type: '404' | 'boundary';
}

export function Error({ type }: Props) {
  switch (type) {
    case '404':
      return (
        <ErrorComponent
          title={
            <>
              <span className="blue">4</span>0<span className="blue">4</span>
            </>
          }
          desc="Page not found"
        />
      );

    case 'boundary':
      return <ErrorComponent title={<span className="blue">ERROR</span>} desc="Something went wrong" />;
  }
}

interface ErrorCompProps {
  title: string | ReactNode;
  desc: string | ReactNode;
}
function ErrorComponent(props: ErrorCompProps) {
  return (
    <div className="error-wrap">
      <ErrorTitle {...props} />
      <ErrorButton />
    </div>
  );
}
