import { connect } from 'react-redux';

import CurrentEvent from 'src/components/Current-Event';

import { fetchMessage, Cancel } from 'src/actions/event';

const mapStateToProps = (state) => ({
  currentEvent: state.profilePrivate.currentEvent,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessage: (id) => {
    dispatch(fetchMessage(id));
  },
  Cancel: (id) => {
    dispatch(Cancel(id));
  },
});

const CurrentEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentEvent);

export default CurrentEventContainer;
