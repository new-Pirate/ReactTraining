import React from 'react';

import './Error-indicator.scss';
import icon from './death-star.png';

class ErrorIndicator extends React.Component {
  render() {
    return (
      <div className="error-indicator">
        <img src={icon} alt="error icon" />
        <span className="boom">BOOM!</span>
        <span>
          что-то пошло не так
        </span>
        <span>
          (но на всякий случай мы вызвали дроидов)
        </span>
      </div>
    );
  }
};

export default ErrorIndicator;