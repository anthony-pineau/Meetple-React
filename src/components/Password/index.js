import React from 'react';
import { Link } from 'react-router-dom';

import FormStyled from 'src/components/FormStyled/FormStyled';
import Field from 'src/components/Field';

const Password = () => (
  <FormStyled>
    <h1 className="title">Mot de passe oublié</h1>
    <Field
      description="Identifiant"
      name="login"
    />
    <div className="action">
      <button className="action-button" type="submit">
        Générer un nouveau mot de passe
      </button>
    </div>
    <div className="links">
      <Link className="links-item" to="/Connexion">Se connecter</Link> / <Link className="links-item" to="/Inscription">Créer un compte</Link>
    </div>
  </FormStyled>
);

export default Password;
