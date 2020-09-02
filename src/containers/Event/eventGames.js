// objectif : container qui remplit la prop list du composant Messages
import { connect } from 'react-redux';

import EventGames from 'src/components/Event/Games';

// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  events: state.events.events,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = {};

// création du composant container
const EventGamesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventGames);

export default EventGamesContainer;
