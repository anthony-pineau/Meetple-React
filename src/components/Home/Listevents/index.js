// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import slugify from 'slugify';
import moment from 'moment';

import PeopleIcon from '@material-ui/icons/People';
import RoomIcon from '@material-ui/icons/Room';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GamepadIcon from '@material-ui/icons/Gamepad';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

import Popup from 'reactjs-popup';
import Game from './Games';

import EventStyled from './Style/ListeventsStyled';
import ModalStyled from './Style/ModalStyled';

// == Composant
const Event = ({
  id,
  fetchMessage,
  title,
  department,
  adress,
  organizeBy,
  maxParticipants,
  date,
  tags,
  games,
  participateBy,
  category,
  isLogged,
}) => {
  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  const handleClick = () => {
    fetchMessage(id);
  };
  return (
    <EventStyled>
      <Grid container spacing={3}>
        <Grid className="left-part" item xs={12} lg={7}>
          <div className="first-part-left">
            <div className="block-avatar">
              <img className="avatar" src={organizeBy.avatar} alt="Avatar" />
            </div>
            <Link to={`/Evenement/${slug}/Informations`}>
              <h3 onClick={handleClick} className="title-event">{title}</h3>
            </Link>
            <p className="author">Organisé par: {organizeBy.username}</p>
          </div>
          <p className="IconText-nbr"><PeopleIcon className="Icon" />
            {participateBy.length}/
            {maxParticipants}
          </p>
          <p className="IconText"><RoomIcon className="Icon" /> {adress}, {department}</p>
          <p className="IconText"><CalendarTodayIcon className="Icon" />{moment(date).format('DD/MM/YYYY')} </p>
          <p className="IconText"><AllInclusiveIcon className="Icon" /> {category.name}</p>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Grid container spacing={3}>
            <Grid item lg={8}>
              <ul>
                {tags.map((tag) => (
                  <li key={tag.id} className="tag">{tag.name}</li>
                ))}
              </ul>
            </Grid>
            {isLogged && (
            <Grid item lg={4}>
              <Link to={`/Evenement/${slug}/Informations`}>
                <div onClick={handleClick}>
                  <DoubleArrowIcon className="arrowlink" />
                </div>
              </Link>
            </Grid>
            )}
            {!isLogged && (
            <Grid item lg={4}>
              <Link to="/Connexion">
                <DoubleArrowIcon className="arrowlink" />
              </Link>
            </Grid>
            )}
          </Grid>
          <ModalStyled>
            <Popup trigger={<p className="button"><GamepadIcon className="Iconjeux" /> Liste des jeux</p>} modal>
              {(close) => (
                <div className="modal">
                  <a className="close" onClick={close}>
                    &times;
                  </a>
                  <div className="games">
                    {games.map((game) => (
                      <Game key={game.id} {...game} />
                    ))}
                  </div>
                </div>
              )}
            </Popup>
          </ModalStyled>
        </Grid>
      </Grid>
    </EventStyled>
  );
};

Event.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  organizeBy: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  maxParticipants: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  games: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  participateBy: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  isLogged: PropTypes.bool,
  fetchMessage: PropTypes.func.isRequired,
};

Event.defaultProps = {
  isLogged: false,
};
// == Export
export default Event;
