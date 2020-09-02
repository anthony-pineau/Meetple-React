// == Import npm
import React from 'react';

import Messages from 'src/containers/Event/messageEvent';

import CommentStyled from './Styled';

// == Composant
const Comment = () => (
  <CommentStyled>
    <Messages />
  </CommentStyled>
);

// == Export
export default Comment;
