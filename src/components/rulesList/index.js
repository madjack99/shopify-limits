import React from 'react';

const RulesList = ({ limitRules }) => {
  const renderLimitRules = () => {
    console.log(limitRules);
    return limitRules.map(({ entity, value }, idx) => {
      return (
        <div key={idx}>
          <span>{entity}</span>
          <span>{value}</span>
        </div>
      );
    });
  };

  return <div>{renderLimitRules()}</div>;
};

export default RulesList;
