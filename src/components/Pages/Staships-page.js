import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../SW-components/Item-lists';

class StarshipsPage extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <StarshipList
        onItemSelected={(id) => history.push(id)} />
    )
  }
}

export default withRouter(StarshipsPage);