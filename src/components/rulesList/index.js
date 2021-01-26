import React from 'react';

import RuleTypeSelect from '../select';
import InputMatcher from '../input-matcher';
import DeleteIcon from '../delete-icon';

import './style.css';

const RulesList = ({ limitRules, setLimitRules }) => {
  const renderLimitRules = () => {
    console.log(limitRules);
    return limitRules.map(({ entity, condition, value }, idx) => {
      return (
        <div key={idx} className='rule_item'>
          <RuleTypeSelect
            entity={entity}
            ruleIdx={idx}
            setLimitRules={setLimitRules}
          />
          <InputMatcher
            entity={entity}
            ruleIdx={idx}
            setLimitRules={setLimitRules}
            condition={condition}
            value={value}
          />
          <DeleteIcon ruleIdx={idx} setLimitRules={setLimitRules} />
        </div>
      );
    });
  };

  return <div>{renderLimitRules()}</div>;
};

export default RulesList;
