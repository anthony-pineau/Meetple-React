import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import FormStyled from 'src/components/FormStyled/FormStyled';
import Field from './LoginField';

const Login = ({
  username,
  password,
  changeField,
  handleLogin,
  isLogged,
  errorlogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <div className="login-form">
      {isLogged && (
        <Redirect to="/" />
      )}
      {!isLogged && (
      <FormStyled onSubmit={handleSubmit}>
        <h1 className="title">Se connecter</h1>
        <Field
          description="Adresse email"
          name="username"
          onChange={changeField}
          value={username}
        />
        <Field
          type="password"
          description="Mot de passe"
          name="password"
          onChange={changeField}
          value={password}
        />
        <p className="response"> {errorlogin} </p>
        <div className="action">
          <button className="action-button" type="submit">Connexion</button>
        </div>
        <div className="links">
          <Link className="links-item" to="/Inscription">Créer un compte</Link> / <Link className="links-item" to="/Mot-de-passe-oublié">Mot de passe oublié</Link>
        </div>
      </FormStyled>
      )}
    </div>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  errorlogin: PropTypes.string.isRequired,
};

Login.defaultProps = {
  isLogged: false,
};

export default Login;
