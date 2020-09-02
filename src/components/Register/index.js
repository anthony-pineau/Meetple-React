import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FormStyled from 'src/components/FormStyled/FormStyled';
import Field from './RegisterField';

const Register = ({
  username,
  password,
  email,
  changeField,
  handleRegister,
  error,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegister();
  };
  return (
    <div className="register-form">
      <FormStyled onSubmit={handleSubmit}>
        <h1 className="title">S'incrire</h1>
        <Field
          description="Adresse email"
          name="email"
          onChange={changeField}
          value={email}
        />
        <Field
          description="Pseudo"
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
        <p className="response"> {error} </p>
        <div className="action">
          <button className="action-button" type="submit">Créer mon Profil</button>
        </div>
        <div className="links">
          <p> <Link className="links-item" to="/Connexion">Se connecter</Link></p>
          <p> <Link className="links-item" to="/Mot-de-passe-oublié">Mot de passe oublié ?</Link></p>
        </div>
      </FormStyled>
    </div>
  );
};

Register.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};


Register.defaultProps = {
  username: '',
  email: '',
  password: '',
  error: '',
};

export default Register;
