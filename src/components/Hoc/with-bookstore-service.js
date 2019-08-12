import React from 'react';
import { BookstoreServiceConsumer } from '../Bookstore-service-context/Bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer >
        {
          (bookstoreService) => {
            return <Wrapped {...props} bookstoreService={bookstoreService} />
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default withBookstoreService;