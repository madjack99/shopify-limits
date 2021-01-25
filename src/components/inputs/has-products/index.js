import React from 'react';
import ProductInput from '../product-input';

// используется как:
let x = { id: '123', title: 'FooBar' };

const HasOneOfTheProducts = () => {
  return (
    <ProductInput value={x} onChange={(products) => console.log(products)} />
  );
};

export default HasOneOfTheProducts;
