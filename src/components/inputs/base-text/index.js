import React from 'react';

import { stringMatchers } from '../../materials';
import { renderSelectOptions } from '../../utils';

const BaseTextInput = ({ ruleIdx, setLimitRules }) => {
  console.log(ruleIdx);
  return (
    <div>
      <select>{renderSelectOptions(stringMatchers)}</select>
    </div>
  );
};

export default BaseTextInput;
