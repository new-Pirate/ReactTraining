import React from 'react';

import Row from '../Row/Row';
import { PlanetList } from '../SW-components/Item-lists';
import PlanetDetails from '../SW-components/Planet-details';

class PlanetPage extends React.Component {
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
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    )
  }
}

export default PlanetPage;