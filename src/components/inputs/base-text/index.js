import React, { useEffect } from 'react';

import { stringMatchers } from '../../materials';
import { renderSelectOptions, setKeyValueForRule } from '../../utils';
import { useTextInput } from '../../hooks/useTextInput';

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
    <div>
      <select onChange={handleSelect}>
        {renderSelectOptions(stringMatchers)}
      </select>
      <input
        type='text'
        value={text}
        onChange={(e) => handleTextChange(e, ruleIdx, setLimitRules)}
      />
    </div>
  );
};

export default BaseTextInput;
