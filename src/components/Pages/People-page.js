import React from 'react';

import Row from '../Row/Row';
import { PersonList } from '../SW-components/Item-lists';
import PersonDetails from '../SW-components/Person-details';

class PeoplePage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: null
    };
  }

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem: selectedItem
    })
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    )
  }
}

export default PeoplePage;