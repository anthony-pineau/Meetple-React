// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import moment from 'moment';

import PeopleIcon from '@material-ui/icons/People';
import RoomIcon from '@material-ui/icons/Room';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

import EventStyled from './Styled';

// == Composant
const Organize = ({
  id,
  title,
  adress,
  maxParticipants,
  date,
  participateBy,
  category,
  fetchMessage,
  Cancel,
}) => {
  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });
  const handleSubmitCancel = (evt) => {
    evt.preventDefault();
    Cancel(id);
  };
  const handleClick = () => {
    fetchMessage(id);
  };
  return (
    <EventStyled onClick={handleClick}>
      <Link to={`/Evenement/${slug}/Informations`}>
        <h3 className="title">{title}</h3>
      </Link>
      <p className="IconText"><AllInclusiveIcon className="Icon" /> {category.name}</p>
      <p className="IconText"><PeopleIcon className="Icon" />
        {participateBy.length}
        {maxParticipants}
      </p>
      <p className="IconText"><RoomIcon className="Icon" />{adress}</p>
      <p className="IconText"><CalendarTodayIcon className="Icon" />{moment(date).format('DD/MM/YYYY')} </p>
      <form onSubmit={handleSubmitCancel}>
        <div>
          <button className="action-cancel" type="submit">Annuler sa présence</button>
        </div>
      </form>
    </EventStyled>
  );
};

Organize.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  maxParticipants: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  participateBy: PropTypes.array.isRequired,
  fetchMessage: PropTypes.func.isRequired,
  Cancel: PropTypes.func.isRequired,
};

// == Export
export default Organize;
