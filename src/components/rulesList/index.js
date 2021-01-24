import React from 'react';

import Select from '../select';

const RulesList = ({ limitRules }) => {
  const renderLimitRules = () => {
    console.log(limitRules);
    return limitRules.map(({ entity, value }, idx) => {
      return (
        <div key={idx}>
          <Select entity={entity} idx={idx} />
          <span>{value}</span>
        </div>
      );
    });
  };

  return <div>{renderLimitRules()}</div>;
};

export default RulesList;
