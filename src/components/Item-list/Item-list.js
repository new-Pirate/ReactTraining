import React from 'react';

import './Item-list.scss';

class ItemList extends React.Component {

	render() {

		return (
			<ul className="item-list list-group rounded">
        <li className="list-group-item">
          Luke Skywalker
        </li>
        <li className="list-group-item">
          Darth Vader
        </li>
        <li className="list-group-item">
          R2-D2
        </li>
      </ul>
		);
	}
};

export default ItemList;
