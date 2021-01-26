import React, { useState, useEffect } from 'react';

import RulesList from '../rulesList';
import { apiFetchLimits } from '../../api';
import { defaultLimit } from '../materials';

import './style.css';

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
    <div className='main_wrapper'>
      <div className='header'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae incidunt
        voluptas
      </div>
      <button onClick={handleAddLimit} className='add_limit_btn'>
        Add limit
      </button>
      {isLoading && <div>Loading</div>}
      <div className='rules_list'>
        <RulesList limitRules={limitRules} setLimitRules={setLimitRules} />
      </div>
    </div>
  );
};

export default RootComponent;
