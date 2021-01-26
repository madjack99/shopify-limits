import React from 'react';
import ProductInput from '../product-input';

import './style.css';

// используется как:
let x = { id: '123', title: 'FooBar' };

const HasOneOfTheProducts = () => {
  return (
    <div className='test'>
      <ProductInput value={x} onChange={(products) => console.log(products)} />
    </div>
  );
};

export default HasOneOfTheProducts;
