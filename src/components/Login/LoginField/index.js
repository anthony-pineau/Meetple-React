import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  description,
  name,
  onChange,
  value,
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
          autoComplete="off"
          value={value}
          onChange={handleChange}
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  value: '',
};


export default Field;
