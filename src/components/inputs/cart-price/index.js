import React, { useEffect } from 'react';

import useNumberInput from '../../hooks/useNumberInput';

import { quantityMatchers } from '../../materials';
import { renderSelectOptions } from '../../utils';

const CartPriceInput = ({ ruleIdx, setLimitRules }) => {
  const [price, handlePriceChange] = useNumberInput();

  const setKeyValueForRule = (key, defaultValue) => {
    setLimitRules((rules) => {
      return rules.map((rule, idx) => {
        if (idx !== ruleIdx) return rule;
        rule[key] = defaultValue;
        return rule;
      });
    });
  };

  useEffect(() => {
    const defaultConditionValue = '>';
    const defaultPrice = 1;

    setKeyValueForRule('condition', defaultConditionValue);
    setKeyValueForRule('value', defaultPrice);
  }, []);

  const handleSelect = (e) => {
    const { value } = e.target;

    setKeyValueForRule('condition', value);
  };

  return (
    <div>
      <select onChange={handleSelect}>
        {renderSelectOptions(quantityMatchers)}
      </select>
      <input
        type='number'
        value={price}
        onChange={(e) => handlePriceChange(e, ruleIdx, setLimitRules)}
      />
    </div>
  );
};

export default CartPriceInput;
