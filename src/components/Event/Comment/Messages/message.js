import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ user, content }) => (
  <div className="message">
    <div className="message-author">{user.username}</div>
    <div className="message-body">{content}</div>
  </div>
);

Message.propTypes = {
  content: PropTypes.string,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
    }),
  ).isRequired,
};

Message.defaultProps = {
  content: '',
};


export default Message;
