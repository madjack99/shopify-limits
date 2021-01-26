import React, { useEffect } from 'react';

import { stringMatchers } from '../../materials';
import { renderSelectOptions, setKeyValueForRule } from '../../utils';
import { useTextInput } from '../../hooks/useTextInput';

import '../../shared-styles/inputs.css';
import './style.css';

const BaseTextInput = ({ ruleIdx, setLimitRules }) => {
  const [text, handleTextChange] = useTextInput();

  useEffect(() => {
    const defaultConditionValue = 'starts_with';
    const defaultText = '';

    setKeyValueForRule(
      'condition',
      defaultConditionValue,
      ruleIdx,
      setLimitRules
    );
    setKeyValueForRule('value', defaultText, ruleIdx, setLimitRules);
  }, [ruleIdx, setLimitRules]);

  const handleSelect = (e) => {
    const { value } = e.target;
    setKeyValueForRule('condition', value, ruleIdx, setLimitRules);
  };

  return (
    <div className='conditions_section'>
      <select
        onChange={handleSelect}
        className='default_select_input string_matcher'
      >
        {renderSelectOptions(stringMatchers)}
      </select>
      <input
        type='text'
        value={text}
        onChange={(e) => handleTextChange(e, ruleIdx, setLimitRules)}
        className='default_text_number_input text_input'
      />
    </div>
  );
};

export default BaseTextInput;
