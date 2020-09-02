import {
  CHANGE_FIELD,
  SAVE_USER,
  LOGOUT,
  SAVE_ERROR_LOGIN,
} from 'src/actions/login';

const initialState = {
  username: '',
  password: '',
  isLogged: false,
  token: null,
  errorlogin: '',
};

const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        isLogged: true,
        token: action.token,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        token: null,
        username: '',
        password: '',
        errorlogin: '',
      };
    case SAVE_ERROR_LOGIN:
      return {
        ...state,
        errorlogin: action.value,
      };
    default:
      return state;
  }
};

export default login;
