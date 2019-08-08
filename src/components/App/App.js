import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import RandomPlanet from '../Random-planet/Random-planet';
import SwapiApi from '../../api/api';
import { SwapiServiceProvider } from '../Swapi-service-context/Swapi-service-context';
import PeoplePage from '../Pages/People-page';
import PlanetPage from '../Pages/Planet-page';
import StashipsPage from '../Pages/Staships-page';
import LoginPage from '../Pages/Login-page';
import SecretPage from '../Pages/Secret-page';

import './App.scss';
import StarshipDetails from '../SW-components/Starship-details';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoggedIn: false
		};
	}

	swapiApi = new SwapiApi();

	onLogin = () => {
		this.setState({
			isLoggedIn: true
		});
	};

	render() {

		return (
			<div className="container">
				<SwapiServiceProvider value={this.swapiApi} >
					<Router>
						<Header />
						<RandomPlanet />
						<Switch>
							<Route path="/" exact
								render={() => <h2>Welcome to StarDB</h2>} />
							<Route path="/people/:id?" component={PeoplePage} />
							<Route path="/planets" component={PlanetPage} />
							<Route path="/staships" exact component={StashipsPage} />
							<Route path="/staships/:id"
								render={({ match }) => {
									const { id } = match.params;
									return <StarshipDetails itemId={id} />
								}} />
							<Route path="/login"
								render={() => (
									<LoginPage isLoggedIn={this.state.isLoggedIn}
										onLogin={this.onLogin} />
								)} />
							<Route path="/secret"
								render={() => (
									<SecretPage isLoggedIn={this.state.isLoggedIn} />
								)} />
							<Route render={() => <h2>Page not found</h2>} />
						</Switch>
					</Router>
				</SwapiServiceProvider>
			</div >
		);
	}
};

export default App;
