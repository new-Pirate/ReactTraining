import React from 'react';

import Header from '../Header/Header';
import RandomPlanet from '../Random-planet/Random-planet';
import ItemList from '../Item-list/Item-list';
import PersonDetails from '../Person-details/Person-details';

import './App.scss';

class App extends React.Component {
	render() {

		return (
			<div className="app">
				<Header />
				<RandomPlanet />

				<div>
					<div>
						<ItemList />
					</div>
					<div>
						<PersonDetails />
					</div>
				</div>
			</div>
		);
	}
};

export default App;
