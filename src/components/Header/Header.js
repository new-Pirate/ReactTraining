import React from 'react';

import './Header.scss';

class Header extends React.Component {

	render() {

		return (
			<div className="header">
				<h3>
					<a href="#">StarDB</a>
				</h3>
				<ul className="header__lists">
					<li className="header__item">
						<a href="#">People</a>
					</li>
					<li className="header__item">
						<a href="#">Planets</a>
					</li>
					<li className="header__item">
						<a href="#">Starships</a>
					</li>
				</ul>
			</div>
		);
	}
};

export default Header;
