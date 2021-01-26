import React from 'react';

import { limitRuleTitles } from '../materials';

import './style.css';
import '../shared-styles/inputs.css';

const RuleTypeSelect = ({ entity, ruleIdx, setLimitRules }) => {
  const handleSelect = (e) => {
    setLimitRules((rulesList) => {
      return rulesList.map((rule, mapIdx) => {
        if (ruleIdx !== mapIdx) return rule;
        return { ...rule, entity: e.target.value };
      });
    });
  };

  return (
    <select
      value={entity}
      onChange={handleSelect}
      className='default_select_input rule_type_select'
    >
      {limitRuleTitles.map(({ label, value }, idx) => {
        return (
          <option key={idx} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};

export default RuleTypeSelect;
