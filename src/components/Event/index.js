// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
  useParams,
} from 'react-router-dom';
import slugify from 'slugify';
import { getEventBySlug } from 'src/utils/selectors';

import CurrentEvent from 'src/containers/Current-Event';

import PeopleIcon from '@material-ui/icons/People';
import GamepadIcon from '@material-ui/icons/Gamepad';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

import EventStyled from './EventStyled';
// == Composant
const Event = ({
  events,
  Join,
  errorJoin,
}) => {
  const { slug } = useParams();

  const eventfound = getEventBySlug(slug, events);

  const sluglink = slugify(eventfound.title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  const handleSubmitJoin = (evt) => {
    evt.preventDefault();
    Join(eventfound.id);
  };

  return (
    <EventStyled>
      <CurrentEvent />
      <h1 className="title-event">{eventfound.title}</h1>
      <p className="author"><img className="avatar" src={eventfound.organizeBy.avatar} alt="Avatar" /> {eventfound.organizeBy.username}</p>
      <p className="icon-category"><AllInclusiveIcon className="icon-event" />{eventfound.category.name}</p>
      <p className="icon-nbr"><PeopleIcon className="icon-event" />
        {eventfound.participateBy.length}/
        {eventfound.maxParticipants}
      </p>
      <ul className="listtags">
        {eventfound.tags.map((tag) => (
          <li key={tag.id} className="tag">{tag.name}</li>
        ))}
      </ul>
      <p className="text">
        {eventfound.description}
      </p>
      <form onSubmit={handleSubmitJoin}>
        <button className="action-join" type="submit">Participer à l'événement</button>
      </form>
      <p className="response"> {errorJoin} </p>
      <nav className="nav">
        <NavLink
          className="navigation-item"
          activeClassName="navigation-item-active"
          to={`/Evenement/${sluglink}/Informations`}
        >
          <AddCircleOutlineIcon className="icon" /> Informations
        </NavLink>

        <NavLink
          to={`/Evenement/${sluglink}/Jeux`}
          className="navigation-item"
          activeClassName="navigation-item-active"
        >
          <GamepadIcon className="icon" /> Les jeux
        </NavLink>

        <NavLink
          to={`/Evenement/${sluglink}/Commentaires`}
          className="navigation-item"
          activeClassName="navigation-item-active"
        >
          <MarkunreadIcon className="icon" /> Les commentaires
        </NavLink>
      </nav>
    </EventStyled>
  );
};

Event.propTypes = {
  events: PropTypes.objectOf(
    PropTypes.shape({
      listevents: PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          category: PropTypes.object.isRequired,
          title: PropTypes.string.isRequired,
          organizeBy: PropTypes.objectOf(
            PropTypes.shape({
              username: PropTypes.string.isRequired,
              avatar: PropTypes.string.isRequired,
            }).isRequired,
          ),
          maxParticipants: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired,
          tags: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              id: PropTypes.number.isRequired,
            }).isRequired,
          ).isRequired,
          participateBy: PropTypes.arrayOf(PropTypes.number).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
  Join: PropTypes.func.isRequired,
  errorJoin: PropTypes.string.isRequired,
};

// == Export
export default Event;
