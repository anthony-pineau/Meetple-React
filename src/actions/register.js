// action types
export const CHANGE_FIELD_REGISTER = 'CHANGE_FIELD_REGISTER';
export const REGISTER = 'REGISTER';
export const SAVE_REGISTER = 'SAVE_REGISTER';
export const SAVE_ERROR_REGISTER = 'SAVE_ERROR_REGISTER';

// action creators
export const changeFieldSRegister = (value, name) => ({
  type: CHANGE_FIELD_REGISTER,
  value,
  name,
});

export const register = () => ({
  type: REGISTER,
});

export const saveRegister = (email, password) => ({
  type: SAVE_REGISTER,
  email,
  password,
});

export const saveErrorRegister = (error) => ({
  type: SAVE_ERROR_REGISTER,
  value: error,
});
