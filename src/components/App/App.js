import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../Pages/Home-page';
import CartPage from '../Pages/Cart-page';
import ShopHeader from '../Shop-header/Shop-header';

import './App.scss';

const App = () => {
  return (
    <main className='container'>
      <ShopHeader nimItems={5} total={210} />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/cart' component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;