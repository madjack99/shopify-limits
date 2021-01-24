import React, { useState, useEffect } from 'react';
import { apiFetchLimits } from '../../api';
import RulesList from '../rulesList';

const defaultLimit = {
  entity: 'items_in_cart',
  condition: null,
  value: [],
};

const RootComponent = () => {
  const [limitRules, setLimitRules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddLimit = () => {
    setLimitRules([...limitRules, defaultLimit]);
  };

  useEffect(() => {
    setIsLoading(true);

    apiFetchLimits()
      .then((response) => {
        console.log(response);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <div>Header text</div>
      <button onClick={handleAddLimit}>Add limit</button>
      {isLoading && <div>Loading</div>}
      <RulesList limitRules={limitRules} />
    </div>
  );
};

export default RootComponent;
