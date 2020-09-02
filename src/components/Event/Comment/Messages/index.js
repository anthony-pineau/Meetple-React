import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import MessagesStyled from './MessagesStyled';
import Message from './message';
import Form from './form';

const Messages = ({
  messages,
  newMessage,
  changeInputMessage,
  sendMessage,
  currentId,
}) => {
  const refContainer = useRef(null);
  useEffect(() => {
    refContainer.current.scrollTo(0, refContainer.current.scrollHeight);
  }, [messages]);

  return (
    <MessagesStyled>
      <div className="containerMessages" ref={refContainer}>
        {messages.messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </div>
      <Form currentId={currentId} newMessage={newMessage} changeInputMessage={changeInputMessage} sendMessage={sendMessage} />
    </MessagesStyled>
  );
};
Messages.propTypes = {
  messages: PropTypes.objectOf(
    PropTypes.shape({
      messages: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  newMessage: PropTypes.string.isRequired,
  changeInputMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
  currentId: PropTypes.number.isRequired,
};

export default Messages;
