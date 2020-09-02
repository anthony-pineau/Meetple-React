import { connect } from 'react-redux';

import Login from 'src/components/Login';

import { changeField, login } from 'src/actions/login';

const mapStateToProps = (state) => ({
  username: state.login.username,
  password: state.login.password,
  isLogged: state.login.isLogged,
  errorlogin: state.login.errorlogin,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeField(value, name));
  },
  handleLogin: () => {
    dispatch(login());
  },
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginFormContainer;
