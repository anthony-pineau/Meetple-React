// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import Input from './InputAutoComplete';
import Event from './Listevents';
import HomeStyled from './HomeStyled';

// == Composant
const Home = ({
  events,
  category,
  games,
  department,
  isLogged,
  fetchMessage,
}) => (
  <HomeStyled>
    <div className="header">
      <h1 className="titleh1">Meetple</h1>
      <ul className="text">
        <li>Organisez des événements autour du jeu de plateau !</li>
        <li>Vous souhaitez faire une soirée entre amis et jouer à vos jeux de plateau favoris ?</li>
        <li>Vous préparez prochainement un festival ou vous travaillez pour un bar ludique ?</li>
        <li>Vous voulez simplement vous amuser entre amis ou en famille ?</li>
        <li>Créez facilement votre événements en quelques secondes ou participez aux événements déjà présent !</li>
        {!isLogged && (<li>Inscrivez-vous, c'est gratuit.</li>)}
      </ul>
      {!isLogged && (<Link to="/Inscription"><span className="inscription">Inscription</span></Link>)}
      <div className="filtre">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Input name="Départements" props={department} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Input name="Catégories" props={category} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Input name="Jeux" props={games} />
          </Grid>
        </Grid>
      </div>
    </div>
    <p className="nbrresult">{events.listevents.length} résultats trouvés</p>
    <div className="events">
      <h2 className="title">Prochains Événements</h2>
      {events.listevents.map((event) => (
        <Event fetchMessage={fetchMessage} key={event.id} {...event} isLogged={isLogged} />
      ))}
    </div>
  </HomeStyled>
);

Home.propTypes = {
  events: PropTypes.objectOf(
    PropTypes.shape({
      listevents: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  department: PropTypes.array.isRequired,
  category: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired,
  isLogged: PropTypes.bool,
  fetchMessage: PropTypes.func.isRequired,
};

Home.defaultProps = {
  isLogged: false,
};
// == Export
export default Home;
