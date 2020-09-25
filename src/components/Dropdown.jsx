import React from 'react';
import chevron from '../assets/images/chevronDownBlack.png';

const Dropdown = ({
  options,
  label,
  name = '',
  multiple = false,
  onChange,
}) => {
  return (
    <div className="dropdown__container">
      <img src={chevron} className="dropdown__icon" alt="Chevron" />
      {label && <label htmlFor={name}>{label}</label>}
      <select
        className="dropdown"
        onChange={onChange}
        name={name}
        multiple={multiple}
      >
        <option className="dropdown__option" value="">
          Selecione o(s) tipo(s)
        </option>
        {options &&
          options.map((option, index) => (
            <option
              key={index}
              className="dropdown__option"
              value={option.value}
            >
              {option.text}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
