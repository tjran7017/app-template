import React, { ErrorInfo, PropsWithChildren } from 'react';

interface State {
  hasError: boolean;
}

interface Props {}

export class AppErrorBoundary extends React.Component<PropsWithChildren<Props>, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
