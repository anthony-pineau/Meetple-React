// action types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOGOUT = 'LOGOUT';
export const SAVE_ERROR_LOGIN = 'SAVE_ERROR_LOGIN';

// action creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const login = () => ({
  type: LOG_IN,
});

export const saveUser = (token) => ({
  type: SAVE_USER,
  token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveErrorLogin = (errorlogin) => ({
  type: SAVE_ERROR_LOGIN,
  value: errorlogin,
});
