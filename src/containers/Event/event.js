// objectif : container qui remplit la prop list du composant Messages
import { connect } from 'react-redux';

import Event from 'src/components/Event';

import { Join } from 'src/actions/event';
// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  events: state.events.events,
  errorJoin: state.events.errorJoin,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = (dispatch) => ({
  Join: (id) => {
    dispatch(Join(id));
  },
});
// création du composant container
const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);

export default EventContainer;
