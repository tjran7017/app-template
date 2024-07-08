import { PageLoading } from './PageLoading';

interface Props {
  type: 'page';
}

export function Loading({ type }: Props) {
  switch (type) {
    case 'page':
      return <PageLoading />;
  }
}
