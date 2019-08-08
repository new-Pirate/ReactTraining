import React from 'react';
import { Redirect } from 'react-router-dom';


class LoginPage extends React.Component {
  render() {
    const { isLoggedIn, onLogin } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <p>Нажми и смотри секретики!</p>
        <button
          className="btn btn-primary"
          onClick={onLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default LoginPage;