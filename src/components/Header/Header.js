import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component {

	render() {

		return (
			<div className="header">
				<h3>
					<Link to="/">StarDB</Link>
				</h3>
				<ul className="header__lists">
					<li className="header__item">
						<Link to="/people/">People</Link>
					</li>
					<li className="header__item">
						<Link to="/planets/">Planets</Link>
					</li>
					<li className="header__item">
						<Link to="/staships/">Starships</Link>
					</li>
					<li className="header__item">
          <Link to="/login">Login</Link>
					</li>
					<li className="header__item">
						<Link to="/secret">Secret</Link>
					</li>
				</ul>
				<button
          // onClick={onServiceChange}
          className="btn btn-primary btn-sm">
					Change Service
				</button>
			</div>
		);
	}
};

export default Header;
