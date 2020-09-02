// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { getEventBySlug } from 'src/utils/selectors';
import {
  useParams,
} from 'react-router-dom';

import Game from './game';

import GamesStyled from './Styled';
// == Composant
const Games = ({ events }) => {
  const { slug } = useParams();

  const eventfound = getEventBySlug(slug, events);

  return (
    <GamesStyled>
      {eventfound.games.map((event) => (
        <Game key={event.id} {...event} />
      ))}
    </GamesStyled>
  );
};


Games.propTypes = {
  events: PropTypes.objectOf(
    PropTypes.shape({
      listevents: PropTypes.arrayOf(
        PropTypes.shape({
          games: PropTypes.object.isRequired,
          id: PropTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};
// == Export
export default Games;
