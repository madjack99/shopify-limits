import { useState } from 'react';

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

    setNumber(value);
    setLimitRules((rules) => {
      return rules.map((rule, idx) => {
        if (idx !== ruleIdx) return rule;
        rule.value = value;
        return rule;
      });
    });
  };

  return [number, handler, error];
};

export default useNumberInput;
