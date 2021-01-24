import React from 'react';
import { limitRuleTitles } from '../materilas';

const Select = ({ entity, idx }) => {
  const handleSelect = (e) => {
    console.log(e.target.value);
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
