import { connect } from 'react-redux';

import App from 'src/components/App';

import { fetchEvents } from 'src/actions/event';
import { fetchCategory, fetchGames, fetchTags } from 'src/actions/home';

// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  isLogged: state.login.isLogged,
  loading: state.events.loading,
  events: state.events.events,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop (de type func) à remplir : callback pour envoyer l'action au store
  loadEvents: () => {
    dispatch(fetchEvents());
  },
  loadAutoCompleteGames: () => {
    dispatch(fetchGames());
  },
  loadAutoCompleteCategory: () => {
    dispatch(fetchCategory());
  },
  loadAutoCompleteTags: () => {
    dispatch(fetchTags());
  },
});

// création du composant container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
