import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class Counter extends React.Component {
  render() {
    const { counter, inc, dec, rnd } = this.props;

    return (
      <div className="jumbotron">
        <h2>{counter}</h2>
        <button
          onClick={dec}
          className="btn btn-primary btn-lg">DEC</button>
        <button
          onClick={inc}
          className="btn btn-primary btn-lg">INC</button>
        <button
          onClick={rnd}
          className="btn btn-primary btn-lg">RND</button>
      </div>
    )
  }
}

const mapStateToPtops = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  
  return {
    inc,
    dec,
    rnd: () => {
      const rendomValue = Math.floor(Math.random() * 10);
      rnd(rendomValue);
    }
  }
}

export default connect(mapStateToPtops, mapDispatchToProps)(Counter);