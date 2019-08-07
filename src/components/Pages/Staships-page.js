import React from 'react';

import Row from '../Row/Row';
import { StarshipList } from '../SW-components/Item-lists';
import StarshipDetails from '../SW-components/Starship-details';

class StarshipsPage extends React.Component {
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
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    )
  }
}

export default StarshipsPage;