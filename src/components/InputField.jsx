import React, { useState } from 'react';
// import './InputWithPlaceholderHeader.css';

function InputField({name, placeholder, value, onChange, required }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className="input-container">
      <label className={`input-label ${isFocused || value ? 'focused' : ''}`}>
        {placeholder}
      </label>
      <input
        type="text"
        name={name}
        className="input-field"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value}
        required={required}
      />
    </div>
  );
}

export default InputField;
