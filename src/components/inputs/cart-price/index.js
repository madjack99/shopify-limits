import React, { useEffect } from 'react';

import useNumberInput from '../../hooks/useNumberInput';
import { quantityMatchers } from '../../materials';
import { renderSelectOptions, setKeyValueForRule } from '../../utils';

import './style.css';
import '../../shared-styles/inputs.css';

const CartPriceInput = ({ ruleIdx, setLimitRules, condition, value }) => {
  const [price, handlePriceChange] = useNumberInput(value || 1);

  const defaultConditionValue = condition ? condition : '>';
  const defaultPrice = value ? value : 1;

  useEffect(() => {
    setKeyValueForRule(
      'condition',
      defaultConditionValue,
      ruleIdx,
      setLimitRules
    );
    setKeyValueForRule('value', defaultPrice, ruleIdx, setLimitRules);
  }, [ruleIdx, setLimitRules, defaultConditionValue, defaultPrice]);

  const handleSelect = (e) => {
    const { value } = e.target;

    setKeyValueForRule('condition', value, ruleIdx, setLimitRules);
  };

  return (
    <div className='conditions_section'>
      <select
        onChange={handleSelect}
        className='default_select_input quantity_matcher'
        value={defaultConditionValue}
      >
        {renderSelectOptions(quantityMatchers)}
      </select>
      <input
        type='number'
        value={price}
        onChange={(e) => handlePriceChange(e, ruleIdx, setLimitRules)}
        className='default_text_number_input text_input'
      />
    </div>
  );
};

export default CartPriceInput;
