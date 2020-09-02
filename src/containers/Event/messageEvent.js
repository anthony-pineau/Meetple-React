// objectif : container qui remplit la prop list du composant Messages
import { connect } from 'react-redux';

import Event from 'src/components/Event/Comment/Messages';

import { changeInputMessage, sendMessage } from 'src/actions/event';
// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  messages: state.events.messages,
  newMessage: state.events.newMessage,
  currentId: state.events.currentEventId,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = (dispatch) => ({
  changeInputMessage: (newMessage) => {
    dispatch(changeInputMessage(newMessage));
  },
  sendMessage: (id) => {
    dispatch(sendMessage(id));
  },
});
// création du composant container
const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);

export default EventContainer;
