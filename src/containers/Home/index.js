// objectif : container qui remplit la prop list du composant Messages
import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { fetchMessage } from 'src/actions/event';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  events: state.events.events,
  user: state.events.user,
  department: state.home.department,
  category: state.home.category,
  games: state.home.games,
  isLogged: state.login.isLogged,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = (dispatch) => ({
  fetchMessage: (id) => {
    dispatch(fetchMessage(id));
  },
});

// création du composant container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
