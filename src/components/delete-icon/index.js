import React from 'react';

import { ReactComponent as TrashImage } from '../../icons/trash.svg';

import './style.css';

const DeleteIcon = ({ ruleIdx, setLimitRules }) => {
  const handleRuleDelete = () => {
    setLimitRules((rules) => {
      return rules.filter((rule, idx) => {
        return ruleIdx !== idx;
      });
    });
  };

  return (
    <div onClick={handleRuleDelete} className='delete_icon'>
      <TrashImage width={20} />
    </div>
  );
};

export default DeleteIcon;
