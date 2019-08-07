import React from 'react';

import ItemList from '../Item-list/Item-list';
import withData from '../Hoc-helper/With-data';
import withSwapiService from '../Hoc-helper/with-swapi-service';
import withChildFunction from './with-child-function';
import compose from '../Hoc-helper/Compose';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{name}({model})</span>;

const mapPersonMethodsToProps = (swapiApi) => {
  return {
    getData: swapiApi.getAllPeople
  }
}

const mapPlanetMethodsToProps = (swapiApi) => {
  return {
    getData: swapiApi.getAllPlanets
  }
}

const mapStarshipMethodsToProps = (swapiApi) => {
  return {
    getData: swapiApi.getAllStarships
  }
}

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAndName)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};