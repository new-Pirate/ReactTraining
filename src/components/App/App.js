import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/Home-page';
import CartPage from '../Pages/Cart-page';

import './App.scss';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/cart' component={CartPage} />
    </Switch>
  );
};

export default App;