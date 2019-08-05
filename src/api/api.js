export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  getResoure = (url) => {
    return fetch(`${this._apiBase}${url}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка в URL ${url} Статус ошибки: ${res.status}`);
        }
        return res.json();
      })
      .then((body) => {
        return Promise.resolve(body);
      })
  };

  getAllPeople = async () => {
    const res = await this.getResoure(`/people/`);
    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) =>  {
    const person = await this.getResoure(`/people/${id}`);
    return this._transformPlanet(person);
  };

  getAllPlanets = async () =>  {
    const res = await this.getResoure(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) =>  {
    const planet = await this.getResoure(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async (id) =>  {
    const res = await this.getResoure(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) =>  {
    const starship = await this.getResoure(`/starships/${id}`);
    return this._transformStarship(starship);
  };

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    }
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  };
}
