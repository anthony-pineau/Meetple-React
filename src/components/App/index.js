// == Import npm
import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Home from 'src/containers/Home';
import Event from 'src/containers/Event/event';
import Comment from 'src/components/Event/Comment';
import Games from 'src/containers/Event/eventGames';
import Informations from 'src/containers/Event/eventInformations';
import CreateEvent from 'src/containers/Create-Event';
import ProfilPublic from 'src/components/Profile-public';
import ProfilPrivate from 'src/containers/Profile-private';
import Login from 'src/containers/Login';
import Password from 'src/components/Password';
import Register from 'src/containers/Register';
import Footer from 'src/components/Footer';
import Us from 'src/components/Us';
import Legal from 'src/components/Legal';
import Loading from './loading';

import AppStyled from './AppStyled';

// == Composant
const App = ({
  loadEvents,
  loading,
  loadAutoCompleteGames,
  loadAutoCompleteCategory,
  loadAutoCompleteTags,
  isLogged,
}) => {
  useEffect(() => {
    loadEvents();
    loadAutoCompleteGames();
    loadAutoCompleteCategory();
    loadAutoCompleteTags();
  }, []);
  return (
    <Grid>
      {loading && <Loading />}
      {!loading && (
        <>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/A-propos">
              <Us />
            </Route>
            <AppStyled>
              {isLogged && (
                <>
                  <Route path="/Evenement/:slug">
                    <Event />
                  </Route>
                  <Route path="/Evenement/:slug/Informations/">
                    <Informations />
                  </Route>
                  <Route path="/Evenement/:slug/Jeux/">
                    <Games />
                  </Route>
                  <Route path="/Evenement/:slug/Commentaires/">
                    <Comment />
                  </Route>
                  <Route path="/Créer-un-evenement">
                    <CreateEvent />
                  </Route>
                  <Route path="/Profil-Prive">
                    <ProfilPrivate />
                  </Route>
                  <Route path="/Profil-Public">
                    <ProfilPublic />
                  </Route>
                </>
              )}
              <Route path="/Connexion">
                <Login />
              </Route>
              <Route path="/Mot-de-passe-oublié">
                <Password />
              </Route>
              <Route path="/Inscription">
                <Register />
              </Route>
              <Route path="/Mentions-legales">
                <Legal />
              </Route>
            </AppStyled>
            <Route key="404">
              <div>Area 404: you're not allowed here !</div>
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </Grid>
  );
};

App.propTypes = {
  loadEvents: PropTypes.func.isRequired,
  loadAutoCompleteGames: PropTypes.func.isRequired,
  loadAutoCompleteCategory: PropTypes.func.isRequired,
  loadAutoCompleteTags: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool,
};

App.defaultProps = {
  isLogged: false,
};
// == Export
export default App;
