import React from 'react';

export const renderSelectOptions = (optionsArr) => {
  return optionsArr.map(({ value, label }, idx) => (
    <option key={idx} value={value} label={label}></option>
  ));
};

export const setKeyValueForRule = (key, defaultValue, ruleIdx, updaterFn) => {
  updaterFn((rules) => {
    return rules.map((rule, idx) => {
      if (idx !== ruleIdx) return rule;
      rule[key] = defaultValue;
      return rule;
    });
  });
};
