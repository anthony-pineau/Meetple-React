// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import Game from './game';

import GamesStyled from './Styled';
// == Composant
const Games = ({ name, image }) => (
  <GamesStyled>
    <Game name={name} image={image} />
  </GamesStyled>
);

Games.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
// == Export
export default Games;
