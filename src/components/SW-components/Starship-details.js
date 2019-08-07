import React from 'react';
import ItemDetails, { Record } from '../Item-details/Item-details';
import withSwapiService from '../Hoc-helper/with-swapi-service';

const StarshipDetails = (props) => {

  return (
    <ItemDetails {...props}>

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiApi) => {
  return {
    getData: swapiApi.getStarship,
    getImageUrl: swapiApi.getStarshipImage
  }
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);