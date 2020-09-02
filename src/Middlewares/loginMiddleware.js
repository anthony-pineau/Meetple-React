import axios from 'axios';

import { fetchProfile } from 'src/actions/profile-private';
import { LOG_IN, saveUser, saveErrorLogin } from 'src/actions/login';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      console.log('c\'est le moment de faire l\'appel à l\'API');
      axios.post('http://18.207.205.68/login_check', {
        username: store.getState().login.username,
        password: store.getState().login.password,
      })
        .then((response) => {
          console.log('succès LOGIN : ', response.data);
          store.dispatch(saveUser(response.data.token));
        })
        .catch(() => {
          store.dispatch(saveErrorLogin('Votre connexion n\' a pas pu aboutir, votre mot de passe ou votre email est invalide'));
        })
        .finally(() => {
          store.dispatch(fetchProfile());
        });
      next(action);
      break;
    default:
      next(action);
  }
};
export default userMiddleware;
