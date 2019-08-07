import React from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../Random-planet/Random-planet';
import SwapiApi from '../../api/api';
import { SwapiServiceProvider } from '../Swapi-service-context/Swapi-service-context';
import PeoplePage from '../Pages/People-page';
import PlanetPage from '../Pages/Planet-page';
import StashipsPage from '../Pages/Staships-page';

import './App.scss';

class App extends React.Component {
	constructor() {
		super();
		this.state = {

		};
	}

	swapiApi = new SwapiApi();

	render() {

		return (
			<div className="container">
				<SwapiServiceProvider value={this.swapiApi} >
					<Header />
					<RandomPlanet />

					<PeoplePage />
					<PlanetPage />
					<StashipsPage />
				</SwapiServiceProvider>
			</div >
		);
	}
};

export default App;
