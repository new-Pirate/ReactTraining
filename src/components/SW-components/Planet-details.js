import React from 'react';
import ItemDetails, { Record } from '../Item-details/Item-details';
import withSwapiService from '../Hoc-helper/with-swapi-service';

const PlanetDetails = (props) => {

  return (
    <ItemDetails {...props} >

      <Record field="population" label="population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>

  );
};

const mapMethodsToProps = (swapiApi) => {
  return {
    getData: swapiApi.getPlanet,
    getImageUrl: swapiApi.getPlanetImage
  }
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);