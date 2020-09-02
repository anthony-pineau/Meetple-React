import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  description,
  name,
  value,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = `field-${name}`;

  return (
    <div className="input-container">
      <label className="label" htmlFor={inputId}>
        {description}
        <input
          id={inputId}
          placeholder={description}
          className="input"
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          autoComplete="off"
          required
        />
      </label>
    </div>
  );
};
Field.propTypes = {
  type: PropTypes.string,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
  value: '',
};

export default Field;
