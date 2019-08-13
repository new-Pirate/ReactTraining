import React from 'react';

import BookList from '../Book-list/Book-list';
import ShoppingCartTable from '../Shopping-cart-table/Shopping-cart-table';

const HomePage = () => {

  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;