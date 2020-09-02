// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import PeopleIcon from '@material-ui/icons/People';
import RoomIcon from '@material-ui/icons/Room';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import EventStyled from './Styled';


// == Composant
const Event = () => (
  <EventStyled>
    <Grid container spacing={3}>
      <Grid item xs={12} lg={7}>
        <span className="avatar" />
        <Link to="/Evenement/Informations">
          <h3 className="title">Titre</h3>
        </Link>
        <p className="IconText"><PeopleIcon className="Icon" /> 2/5</p>
        <p className="IconText"><RoomIcon className="Icon" /> L'adresse, Maines Et Loire</p>
        <p className="IconText"><CalendarTodayIcon className="Icon" /> 01/01/2020</p>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Link to="/Evenement/Informations">
          <DoubleArrowIcon className="arrowlink" />
        </Link>
      </Grid>
    </Grid>
  </EventStyled>
);

// == Export
export default Event;
