// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import GameStyled from './Styled';

// == Composant
const Game = ({ name, image }) => (
  <GameStyled>
    <img className="img-game" src={image} alt="jeu" />
    <h4 className="title-game">{name}</h4>
  </GameStyled>
);

Game.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
// == Export
export default Game;
