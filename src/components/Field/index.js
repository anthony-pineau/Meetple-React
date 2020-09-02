import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  type,
  description,
  name,
}) => (
  <div className="input-container">
    <label className="label" htmlFor={name}>
      {description}
      <input
        id={name}
        placeholder={description}
        className="input"
        type={type}
        name={name}
        autoComplete=""
      />
    </label>
  </div>
);

Field.propTypes = {
  type: PropTypes.string,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


Field.defaultProps = {
  type: 'text',
};


export default Field;
