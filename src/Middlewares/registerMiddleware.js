import axios from 'axios';

import { REGISTER, saveRegister, saveErrorRegister } from 'src/actions/register';

const RegisterMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER:
      axios.post('http://18.207.205.68/signin', {
        username: store.getState().register.username,
        password: store.getState().register.password,
        email: store.getState().register.email,
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png',
      })
        .then((response) => {
          console.log('succès : ', response);
          store.dispatch(saveRegister());
          store.dispatch(saveErrorRegister(response.data));
        })
        .catch((error) => {
          console.warn(error.response.data);
          store.dispatch(saveErrorRegister(error.response.data.error));
        });

      next(action);
      break;

    default:

      next(action);
  }
};

export default RegisterMiddleware;
