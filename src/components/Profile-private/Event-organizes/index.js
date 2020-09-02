// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'slugify';
import Popup from 'reactjs-popup';
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
  deleteEvent,
}) => {
  const slug = slugify(title, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
  });

  const handleClick = () => {
    fetchMessage(id);
  };
  const handleClickDelete = () => {
    deleteEvent(id);
  };
  return (
    <EventStyled>
      <Link to={`/Evenement/${slug}/Informations`}>
        <h3 onClick={handleClick} className="title">{title}</h3>
      </Link>
      <p className="IconText"><AllInclusiveIcon className="Icon" />{category.name}</p>
      <p className="IconText"><PeopleIcon className="Icon" />
        {participateBy.length}
        {maxParticipants}
      </p>
      <p className="IconText"><RoomIcon className="Icon" />{adress}</p>
      <p className="IconText"><CalendarTodayIcon className="Icon" />{moment(date).format('DD/MM/YYYY')}</p>
      <Popup trigger={<p className="button action-delete">Supprimer l'événement</p>} modal>
        {(close) => (
          <div className="modal">
            <div className="content">
              <h4 className="title-delete">Etes vous sur de vouloir supprimer l'événement ?</h4>
              <button onClick={handleClickDelete} className="oui" type="button">Oui</button>
              <button onClick={close} className="non" type="button">Non</button>
            </div>
          </div>
        )}
      </Popup>
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
  deleteEvent: PropTypes.func.isRequired,
};

// == Export
export default Organize;
