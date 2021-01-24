import React from 'react';
import { limitRuleTitles } from '../materilas';

const Select = ({ entity, ruleIdx, setLimitRules }) => {
  const handleSelect = (e) => {
    setLimitRules((rulesList) => {
      return rulesList.map((rule, mapIdx) => {
        if (ruleIdx !== mapIdx) return rule;
        return { ...rule, entity: e.target.value };
      });
    });
  };

  return (
    <select value={entity} onChange={handleSelect}>
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

export default Select;
