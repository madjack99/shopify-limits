import React from 'react';

import CartPriceInput from '../inputs/cart-price';
import BaseTextInput from '../inputs/base-text';

const InputMatcher = ({ entity, ruleIdx, setLimitRules }) => {
  switch (entity) {
    case 'cart_price':
      return <CartPriceInput ruleIdx={ruleIdx} setLimitRules={setLimitRules} />;
    case 'product_title':
    case 'sku':
    case 'vendor':
    case 'collection':
      return <BaseTextInput ruleIdx={ruleIdx} setLimitRules={setLimitRules} />;
    default:
      return 'matcher';
  }
};

export default InputMatcher;
