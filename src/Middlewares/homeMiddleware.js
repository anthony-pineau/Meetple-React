import axios from 'axios';
import {
  FETCH_CATEGORY,
  FETCH_GAMES,
  FETCH_TAGS,
  saveCategory,
  saveGames,
  saveTags,
} from 'src/actions/home';

const homeMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case FETCH_CATEGORY:
      axios.get('http://18.207.205.68/list/categories')
        .then((response) => {
          // console.log('succès : ', response.data);

          // transmettre les recettes au store
          store.dispatch(saveCategory(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    case FETCH_GAMES:
      axios.get('http://18.207.205.68/list/games')
        .then((response) => {
          // console.log('succès : ', response.data);

          // transmettre les recettes au store
          store.dispatch(saveGames(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    case FETCH_TAGS:
      axios.get('http://18.207.205.68/list/tags')
        .then((response) => {
          // console.log('succès : ', response.data);

          // transmettre les recettes au store
          store.dispatch(saveTags(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;

    default:
      // on passe l'action à son voisin (middleware suivant ou reducer)
      next(action);
  }
};

export default homeMiddleware;
