import React from 'react';

import RuleTypeSelect from '../select';
import InputMatcher from '../input-matcher';
import DeleteIcon from '../delete-icon';

const RulesList = ({ limitRules, setLimitRules }) => {
  const renderLimitRules = () => {
    console.log(limitRules);
    return limitRules.map(({ entity, value }, idx) => {
      return (
        <div key={idx}>
          <RuleTypeSelect
            entity={entity}
            ruleIdx={idx}
            setLimitRules={setLimitRules}
          />
          <InputMatcher
            entity={entity}
            ruleIdx={idx}
            setLimitRules={setLimitRules}
          />
          <DeleteIcon ruleIdx={idx} setLimitRules={setLimitRules} />
        </div>
      );
    });
  };

  return <div>{renderLimitRules()}</div>;
};

export default RulesList;
