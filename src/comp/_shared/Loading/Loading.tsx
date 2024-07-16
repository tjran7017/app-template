import { PageLoading } from './view';

interface Props {
  type: 'page';
}

export function Loading({ type }: Props) {
  switch (type) {
    case 'page':
      return <PageLoading />;
  }
}
