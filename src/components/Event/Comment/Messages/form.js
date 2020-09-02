import React from 'react';
import PropTypes from 'prop-types';
import TelegramIcon from '@material-ui/icons/Telegram';

import FormStyled from './FormStyled';

const Form = ({ newMessage, changeInputMessage, sendMessage, currentId }) => {
  const handleChange = (event) => {
    changeInputMessage(event.target.value, newMessage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(currentId);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        name="newMessage"
        className="input"
        type="text"
        placeholder="Saisissez votre message..."
        value={newMessage}
        onChange={handleChange}
      />
      <button className="button-submit" type="submit">
        <TelegramIcon size="100%" />
      </button>
    </FormStyled>
  );
};

Form.propTypes = {
  newMessage: PropTypes.string.isRequired,
  changeInputMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  currentId: PropTypes.number.isRequired,
};

export default Form;
