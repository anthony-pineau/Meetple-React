// objectif : container qui remplit la prop list du composant Messages
import { connect } from 'react-redux';

import EventInformations from 'src/components/Event/Informations';

// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  events: state.events.events,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = {};

// création du composant container
const EventInformationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventInformations);

export default EventInformationsContainer;
