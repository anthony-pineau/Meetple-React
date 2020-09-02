// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';

import Currentevent from './modalCurrent';

import Styled from './Styled';

// == Composant
const Current = ({ currentEvent, fetchMessage, Cancel }) => (
  <Styled>
    <Badge
      className="current-event"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      badgeContent={currentEvent.length}
      color="secondary"
    >
      <Currentevent Cancel={Cancel} fetchMessage={fetchMessage} currentEvent={currentEvent} />
    </Badge>
  </Styled>
);

Current.propTypes = {
  currentEvent: PropTypes.array.isRequired,
  fetchMessage: PropTypes.func.isRequired,
  Cancel: PropTypes.func.isRequired,
};

// == Export
export default Current;
