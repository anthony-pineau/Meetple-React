import { CHANGE_FIELD_REGISTER, SAVE_REGISTER, SAVE_ERROR_REGISTER } from 'src/actions/register';
import { LOGOUT } from 'src/actions/login';

const initialState = {
  username: '',
  password: '',
  email: '',
  error: '',
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_REGISTER:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SAVE_REGISTER:
      return {
        ...state,
        email: action.email,
        password: action.password,
        error: action.value,
      };
    case SAVE_ERROR_REGISTER:
      return {
        ...state,
        error: action.value,
        username: '',
        password: '',
      };
    case LOGOUT:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default register;
