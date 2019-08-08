import React from 'react';
import { Redirect } from 'react-router-dom';

class SecretPage extends React.Component {

  render() {
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return (
        <div className="text-center">
          <h3>Это секретная страница!!!</h3>
        </div>
      );
    }
    return <Redirect to="/login" />
  }
}

export default SecretPage;