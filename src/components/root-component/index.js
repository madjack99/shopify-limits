import React, { useState, useEffect } from 'react';

import RulesList from '../rulesList';
import Spinner from '../spinner';
import { apiFetchLimits } from '../../api';
import { defaultLimit } from '../materials';

import './style.css';

const RootComponent = () => {
  const [limitRules, setLimitRules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    apiFetchLimits()
      .then((response) => {
        /**
         * get response and then
         * set new limit rules using setLimitRules eg:
         *
         * setLimitRules([
         *  { entity: 'sku', condition: 'ends_with', value: 'some value' }
         * ])
         */
        setLimitRules([
          { entity: 'cart_price', condition: 'equal', value: '1999' },
        ]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleAddLimit = () => {
    setLimitRules([...limitRules, defaultLimit]);
  };

  const handleSaveLimit = () => {
    const limitObj = {
      limitations: [
        {
          id: 'some id',
          rules: limitRules,
        },
      ],
    };

    console.log(JSON.stringify(limitObj));
  };

  return (
    <div className='main_wrapper'>
      <div className='header'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae incidunt
        voluptas
      </div>
      <button
        disabled={isLoading}
        onClick={handleAddLimit}
        className='add_limit_btn'
      >
        Add limit
      </button>
      {isLoading && <Spinner />}
      {limitRules.length ? (
        <div className='rules_list'>
          <div className='button_group'>
            <button
              disabled={isLoading}
              onClick={handleSaveLimit}
              className='button'
            >
              Save
            </button>
            <button className='button'>Set Alert Text</button>
            <button className='button button_delete'>Delete</button>
          </div>
          <RulesList limitRules={limitRules} setLimitRules={setLimitRules} />
        </div>
      ) : null}
    </div>
  );
};

export default RootComponent;
