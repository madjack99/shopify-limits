import React from 'react';

import CartPriceInput from '../inputs/cart-price';
import BaseTextInput from '../inputs/base-text';
import HasOneOfTheProducts from '../inputs/has-products';

const InputMatcher = ({ entity, ruleIdx, setLimitRules, condition, value }) => {
  switch (entity) {
    case 'has_one_of_products':
      return <HasOneOfTheProducts />;
    case 'cart_price':
      return <CartPriceInput ruleIdx={ruleIdx} setLimitRules={setLimitRules} />;
    case 'product_title':
    case 'sku':
    case 'vendor':
    case 'collection':
      return (
        <BaseTextInput
          ruleIdx={ruleIdx}
          setLimitRules={setLimitRules}
          condition={condition}
          value={value}
        />
      );
    default:
      return 'matcher';
  }
};

export default InputMatcher;
