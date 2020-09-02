import { connect } from 'react-redux';

import Nav from 'src/components/Nav';

import { logout } from 'src/actions/login';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

const NavFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavFormContainer;
