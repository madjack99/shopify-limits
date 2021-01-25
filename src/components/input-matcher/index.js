import React from 'react';

import CartPriceInput from '../inputs/cart-price';

const InputMatcher = ({ entity, ruleIdx, setLimitRules }) => {
  switch (entity) {
    case 'cart_price':
      return <CartPriceInput ruleIdx={ruleIdx} setLimitRules={setLimitRules} />;
    default:
      return 'matcher';
  }
};

export default InputMatcher;
