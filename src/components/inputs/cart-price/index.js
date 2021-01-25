import React, { useEffect } from 'react';

import useNumberInput from '../../hooks/useNumberInput';

import { quantityMatchers } from '../../materials';
import { renderSelectOptions, setKeyValueForRule } from '../../utils';

const CartPriceInput = ({ ruleIdx, setLimitRules }) => {
  const [price, handlePriceChange] = useNumberInput();

  useEffect(() => {
    const defaultConditionValue = '>';
    const defaultPrice = 1;

    setKeyValueForRule(
      'condition',
      defaultConditionValue,
      ruleIdx,
      setLimitRules
    );
    setKeyValueForRule('value', defaultPrice, ruleIdx, setLimitRules);
  }, [ruleIdx, setLimitRules]);

  const handleSelect = (e) => {
    const { value } = e.target;

    setKeyValueForRule('condition', value, ruleIdx, setLimitRules);
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
