import React from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../Random-planet/Random-planet';
import PeoplePage from '../PeoplePage/PeoplePage';
import ItemList from '../Item-list/Item-list';
import PersonDetails from '../Person-details/Person-details';
import SwapiApi from '../../api/api';

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
				<Header />
				<RandomPlanet />
				<PeoplePage />

				<div className="row">
					<div className="col-lg-6">
						<ItemList onItemSelected={this.onPersonSelected}
							getData={this.swapiApi.getAllPlanets}
							renderItem={(item) => item.name} />
					</div>
					<div className="col-lg-6">
						<PersonDetails personId={this.state.selectedPerson} />
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<ItemList onItemSelected={this.onPersonSelected}
							getData={this.swapiApi.getAllStarships}
							renderItem={(item) => item} />
					</div>
					<div className="col-lg-6">
						<PersonDetails personId={this.state.selectedPerson} />
					</div>
				</div>
			</div >
		);
	}
};

export default App;
