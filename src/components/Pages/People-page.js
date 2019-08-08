import React from 'react';
import { withRouter } from 'react-router-dom';

import Row from '../Row/Row';
import { PersonList } from '../SW-components/Item-lists';
import PersonDetails from '../SW-components/Person-details';

class PeoplePage extends React.Component {
  render() {
    const { history, match } = this.props;
    const { id } = match.params;

    return (
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
    )
  }
}

export default withRouter(PeoplePage);