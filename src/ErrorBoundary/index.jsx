import { Component } from 'react';

import { Result } from 'antd';

import Button from '../Components/Button';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="500"
          title="Oops..."
          subTitle="Something went wrong. Please refresh or check your internet connection."
          extra={
            <Button
              type="submit"
              label="Refresh"
              handleClick={() => window.location.reload()}
              bgColor="primary"
            />
          }
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
