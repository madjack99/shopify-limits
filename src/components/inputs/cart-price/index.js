import React, { useEffect } from 'react';

import useNumberInput from '../../hooks/useNumberInput';

import { quantityMatchers } from '../../materilas';

const CartPriceInput = ({ ruleIdx, setLimitRules }) => {
  const [price, handlePriceChange] = useNumberInput();

  const setDefaultKeyValueForRule = (key, defaultValue) => {
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

    setDefaultKeyValueForRule('condition', defaultConditionValue);
    setDefaultKeyValueForRule('value', defaultPrice);
  }, []);

  const renderQuantityMatchersOptions = () => {
    return quantityMatchers.map(({ value, label }, idx) => (
      <option key={idx} value={value} label={label}></option>
    ));
  };

  const handleSelect = (e) => {
    const { value } = e.target;

    setDefaultKeyValueForRule('condition', value);
  };

  return (
    <div>
      <select onChange={handleSelect}>{renderQuantityMatchersOptions()}</select>
      <input
        type='number'
        value={price}
        onChange={(e) => handlePriceChange(e, ruleIdx, setLimitRules)}
      />
    </div>
  );
};

export default CartPriceInput;
