import React from 'react';

import ErrorIndicator from '../Error-indicator/Error-indicator';

class ErrorBoundry extends React.Component {
  state ={
    hasError: false
  };

  componentDidMount() {
    this.setState({hasError: true});
  }

  render() {
    if(!this.state.hasError) {
      return <ErrorIndicator />;
    } 
    return this.props.children;
  }
}

export default ErrorBoundry;