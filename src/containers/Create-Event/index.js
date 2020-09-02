
import { connect } from 'react-redux';

import { changeValue, sendEvent } from 'src/actions/event';
import { getCategoryValue, getGamesValue, getTagsValue } from 'src/actions/create-event';
import CreateEvent from 'src/components/Create-Event';

// si le composant a besoin de données provenant du state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : récupération de la donnée dans le state
  title: state.createEvent.title,
  date: state.createEvent.date,
  department: state.createEvent.department,
  adress: state.createEvent.adress,
  selectedTagsId: state.createEvent.tags,
  selectedCategoryId: state.createEvent.category,
  selectedGamesId: state.createEvent.games,
  maxParticipants: state.createEvent.maxparticipants,
  description: state.createEvent.description,
  autodepartment: state.createEvent.autodepartment,
  autotags: state.createEvent.autotags,
  autocategory: state.createEvent.autocategory,
  autogames: state.createEvent.autogames,
});

// si le composant a besoin d'agir sur le state
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop (de type func) à remplir : callback pour envoyer l'action au store
  changeValue: (value, name) => {
    dispatch(changeValue(value, name));
  },
  selectGames: (value, name) => {
    dispatch(getGamesValue(value, name));
  },
  selectCategory: (value, name) => {
    dispatch(getCategoryValue(value, name));
  },
  selectTags: (value, name) => {
    dispatch(getTagsValue(value, name));
  },
  sendEvent: () => {
    dispatch(sendEvent());
  },
});

// création du composant container
const CreateEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateEvent);

export default CreateEventContainer;
