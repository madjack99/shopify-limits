import { useState } from 'react';

import { setKeyValueForRule } from '../utils';

export const useTextInput = () => {
  const [text, setValue] = useState('');

  const handleTextChange = (e, ruleIdx, setLimitRules) => {
    const { value } = e.target;

    setKeyValueForRule('value', value, ruleIdx, setLimitRules);
    setValue(value);
  };

  return [text, handleTextChange];
};
