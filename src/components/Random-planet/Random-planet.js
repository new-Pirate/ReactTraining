import React from 'react';

import SwapiApi from '../../api/api';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../Error-indicator/Error-indicator'

import './Random-planet.scss';

class RandomPlanet extends React.Component {
	constructor() {
		super();
		this.state = {
			planet: {},
			loading: true,
			error: false
		};
	}

	swapiApi = new SwapiApi();

	componentDidMount() {
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet: planet,
			loading: false,
			error: false
		});
	};

	onError = () => {
		this.setState({
			error: true,
			loading: false
		});
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 25);
		this.swapiApi.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	}

	render() {

		const { planet, loading, error } = this.state;

		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? <PlanetView planet={planet} /> : null;

		return (
			<div className="randomPlanet jumbotron rounded">
				{errorMessage}
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
