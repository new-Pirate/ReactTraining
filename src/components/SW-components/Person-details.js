import React from 'react';
import ItemDetails, { Record } from '../Item-details/Item-details';
import withSwapiService from '../Hoc-helper/with-swapi-service';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiApi) => {
  return {
    getData: swapiApi.getPerson,
    getImageUrl: swapiApi.getPersonImage
  }
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);