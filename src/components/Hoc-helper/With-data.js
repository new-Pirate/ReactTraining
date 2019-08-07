import React, { Component } from 'react';

import Spinner from '../Spinner/Spinner';
import ErrorIdicator from '../Error-indicator/Error-indicator';

const withData = (View) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        data: null,
        loading: true,
        error: false
      };
    }

    componentDidMount() {
      this.setState({
        loading: true,
        error: false
      });

      this.props.getData()
        .then((data) => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            loading: false,
            error: true
          });
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if(error) {
        return <ErrorIdicator />
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;