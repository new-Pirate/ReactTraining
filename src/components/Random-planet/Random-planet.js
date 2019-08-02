import React from 'react';

import SwapiApi from '../../api/api';
import Spinner from '../Spinner/Spinner';

import './Random-planet.scss';

class RandomPlanet extends React.Component {
	constructor() {
		super();
		this.state = {
			planet: {},
			loading: true
		};
		this.updatePlanet();
	}

	swapiApi = new SwapiApi();

	onPlanetLoaded = (planet) => {
		this.setState({
			planet: planet,
			loading: false
		});
	};

	updatePlanet() {
		const id = Math.floor(Math.random() * 25 + 2);
		this.swapiApi
			.getPlanet(id)
			.then(this.onPlanetLoaded)
	}

	render() {
		const { planet, loading } = this.state;

		const spinner = loading ? <Spinner /> : null;
		const content = !loading ? <PlanetView planet={planet} /> : null;

		return (
			<div className="randomPlanet jumbotron rounded">
				{spinner}
				{content}
			</div>
		);
	}
}

const PlanetView = ({ planet }) => {
	const { id, name, population, rotationPeriod, diameter } = planet;
	return (
		<React.Fragment>
			<img className="planet-image"
				alt="planet"
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population</span>
						<span>{population}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
}

export default RandomPlanet;
