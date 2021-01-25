import React from 'react';

import { ReactComponent as TrashImage } from '../../icons/trash.svg';

const DeleteIcon = ({ ruleIdx, setLimitRules }) => {
  const handleRuleDelete = () => {
    setLimitRules((rules) => {
      return rules.filter((rule, idx) => {
        return ruleIdx !== idx;
      });
    });
  };

  return (
    <div onClick={handleRuleDelete}>
      <TrashImage width={15} />
    </div>
  );
};

export default DeleteIcon;
