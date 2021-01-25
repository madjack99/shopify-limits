import React from 'react';

export const renderSelectOptions = (optionsArr) => {
  return optionsArr.map(({ value, label }, idx) => (
    <option key={idx} value={value} label={label}></option>
  ));
};
