import { useState } from 'react';

import { setKeyValueForRule } from '../utils';

const useNumberInput = () => {
  const [number, setNumber] = useState(1);
  const [error, setError] = useState(null);

  const handler = (e, ruleIdx, setLimitRules) => {
    setError(null);

    const { value } = e.target;

    if (value < 1) {
      setError('Provider proper value');
      return;
    }

    setKeyValueForRule('value', value, ruleIdx, setLimitRules);
    setNumber(value);
  };

  return [number, handler, error];
};

export default useNumberInput;
