import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import AddAlarmIcon from '@material-ui/icons/AddAlarm';
import Event from './Event';
import CurrentStyled from './modalCurrentStyled';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer({ currentEvent, fetchMessage, Cancel }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const fullList = (side) => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <CurrentStyled>
        {currentEvent.map((event) => (
          <Event Cancel={Cancel} fetchMessage={fetchMessage} key={event.id} {...event} />
        ))}
      </CurrentStyled>
    </div>
  );
  TemporaryDrawer.propTypes = {
    currentEvent: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
    fetchMessage: PropTypes.func.isRequired,
    Cancel: PropTypes.func.isRequired,
  };
  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}><AddAlarmIcon className="currenticon" /></Button>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {fullList('right')}
      </Drawer>
    </div>
  );
}
