import { connect } from 'react-redux';

import Register from 'src/components/Register';

import { changeFieldSRegister, register } from 'src/actions/register';


const mapStateToProps = (state) => ({
  username: state.register.username,
  password: state.register.password,
  email: state.register.email,
  error: state.register.error,
});


const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeFieldSRegister(value, name));
  },
  handleRegister: () => {
    dispatch(register());
  },
});

const RegisterFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

export default RegisterFormContainer;
