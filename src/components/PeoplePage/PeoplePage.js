import React from 'react';

import ItemList from '../Item-list/Item-list';
import PersonDetails from '../Person-details/Person-details';
import SwapiApi from '../../api/api';

import './PeoplePage.scss';

class PeoplePage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedPerson: 1
    };
  }

  swapiApi = new SwapiApi();

  onPersonSelected = (selectedPerson) => {
		this.setState({
			selectedPerson: selectedPerson
		})
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <ItemList onItemSelected={this.onPersonSelected}
            getData={this.swapiApi.getAllPeople} />
        </div>
        <div className="col-lg-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
};

export default PeoplePage;
