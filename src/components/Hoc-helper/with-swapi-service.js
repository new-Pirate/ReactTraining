import React from 'react';
import { SwapiServiceConsumer } from '../Swapi-service-context/Swapi-service-context';

const withSwapiService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiApi) => {
            const serviceProps = mapMethodsToProps(swapiApi);
            
            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </SwapiServiceConsumer>
    );
  }
};

export default withSwapiService;