// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from './logo.png';
import ResponsiveMenu from './responsive';
import Navitems from './nav';

import NavStyled from './Style/NavStyled';
// == Composant
const Nav = ({ handleLogout, isLogged }) => (
  <NavStyled>
    <span className="logo">
      <Link to="/"><img className="logo-meetple" src={Logo} alt="Logo Meetple" /></Link>
    </span>
    <span className="menuicon"><ResponsiveMenu /></span>
    <Navitems handleLogout={handleLogout} isLogged={isLogged} />
  </NavStyled>
);

Nav.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default Nav;
