import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import ErrorBoundry from './components/Error-boundry/Error-boundry';
import BookstoreService from './api/bookstore-service';
import { BookstoreServiceProvider } from './components/Bookstore-service-context/Bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store} >
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService} >
        <Router >
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);