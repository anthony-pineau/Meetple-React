// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { getEventBySlug } from 'src/utils/selectors';
import {
  useParams,
} from 'react-router-dom';

import RoomIcon from '@material-ui/icons/Room';
import EventIcon from '@material-ui/icons/Event';

import GameStyled from './Styled';
// == Composant
const Map = ({ events }) => {
  const { slug } = useParams();

  const eventfound = getEventBySlug(slug, events);

  return (
    <GameStyled>
      <p className="item"><RoomIcon className="icon" />{eventfound.adress}</p>
      <p className="item"><EventIcon className="icon" />{eventfound.date}</p>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2798861.162527863!2d1.7943658!3d46.7597151!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sfr!4v1584628379992!5m2!1sfr!2sfr" width="100%" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </GameStyled>
  );
};

Map.propTypes = {
  events: PropTypes.objectOf(
    PropTypes.shape({
      listevents: PropTypes.arrayOf(
        PropTypes.shape({
          adress: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Map;
