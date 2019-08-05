import React from 'react';

import SwapiApi from '../../api/api';
import './Person-details.scss';

class PersoneDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			person: null
		};
	}

	swapiApi = new SwapiApi();

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	updatePerson() {
		const { personId } = this.props;
		if (!personId) {
			return;
		}

		this.swapiApi.getPerson(personId)
			.then((person) => {
				this.setState({
					person: person
				});
			});
	}

	render() {

		const { person } = this.state;

		if (!person) {
			return <span>Выберете персонажа из списка</span>
		}

		const { id, name, gender, birth_year, eye_color } = person;

		return (
			<div className="personDetails card">
				<img className="personDetails-image"
					alt="personDetails"
					src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group">
						<li className="list-group-item">
							<span className="term">Gender</span>
							<span>{gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Birth Year</span>
							<span>{birth_year}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Eye Color</span>
							<span>{eye_color}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default PersoneDetails;
