import React from 'react';

import './Item-details.scss';

class ItemDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			item: null,
			image: null
		};
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
		}
	}

	updateItem() {
		const { itemId, getData, getImageUrl } = this.props;
		if (!itemId) {
			return;
		}

		getData(itemId)
			.then((item) => {
				this.setState({
					item: item,
					image: getImageUrl(item)
				});
			});
	}

	render() {

		const { item, image } = this.state;

		if (!item) {
			return <span>Выберете персонажа из списка</span>
		}

		const { name } = item;

		return (
			<div className="personDetails card">
				<img className="personDetails-image"
					alt="personDetails"
					src={image} />

				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group">
						{
							React.Children.map(this.props.children, (child) => {
								return React.cloneElement(child, { item });
							})
						}
					</ul>
				</div>
			</div>
		);
	}
};

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};

export default ItemDetails;
