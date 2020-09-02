// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Composant
const Nav = ({ handleLogout, isLogged }) => {
  const handleClick = (evt) => {
    evt.preventDefault();
    handleLogout();
  };
  return (
    <div>
      {!isLogged && (
      <ul className="nav">
        <Link to="/Inscription"><li className="nav-items">Inscription</li></Link>
        <Link to="/Connexion"><li className="nav-items">Connexion</li></Link>
      </ul>
      )}
      {isLogged && (
      <ul className="nav">
        <Link to="/" onClick={handleClick}><li className="nav-items">Déconnexion</li></Link>
        <Link to="/Créer-un-evenement"><li className="nav-items">Créer un évenement</li></Link>
        <Link to="/Profil-prive"><li className="nav-items">Voir mon profil</li></Link>
        <Link to="/A-propos"><li className="nav-items">A propos</li></Link>
      </ul>
      )}
    </div>
  );
};

Nav.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
};

Nav.defaultProps = {
  isLogged: false,
};

// == Export
export default Nav;
