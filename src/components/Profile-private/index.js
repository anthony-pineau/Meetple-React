// == Import npm
import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import CurrentEvent from 'src/containers/Current-Event';

import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';

import ProfilStyled from './ProfilStyled';

import Organizes from './Event-organizes';

// == Composant
const ProfilePrivate = ({
  profilePrivate,
  profilePrivateOrganizes,
  fetchMessage,
  deleteEvent,
  changeInputUsername,
  modifyUsername,
  newUsername,
  userModify,
  changeInputEmail,
  modifyEmail,
  newEmail,
  emailModify,
  changeInputAvatar,
  modifyAvatar,
  newAvatar,
  avatarModify,
  InputModifyUsername,
  InputModifyEmail,
  InputModifyAvatar,
}) => {
  const handleChangeUsername = (event) => {
    changeInputUsername(event.target.value, newUsername);
  };
  const handleSubmitUsername = (event) => {
    event.preventDefault();
    modifyUsername();
  };
  const handleChangeEmail = (event) => {
    changeInputEmail(event.target.value, newEmail);
  };
  const handleSubmitEmail = (event) => {
    event.preventDefault();
    modifyEmail();
  };
  const handleChangeAvatar = (event) => {
    changeInputAvatar(event.target.value, newAvatar);
  };
  const handleSubmitAvatar = (event) => {
    event.preventDefault();
    modifyAvatar();
  };
  const handleClickUsername = (event) => {
    event.preventDefault();
    InputModifyUsername();
  };
  const handleClickEmail = (event) => {
    event.preventDefault();
    InputModifyEmail();
  };
  const handleClickAvatar = (event) => {
    event.preventDefault();
    InputModifyAvatar();
  };
  return (
    <ProfilStyled>
      <CurrentEvent />
      <h4 className="titleinfo">Votre pseudo:</h4>
      {userModify && (
        <form onSubmit={handleSubmitUsername}>
          <input
            name="newUsername"
            className="input"
            type="text"
            placeholder={profilePrivate.username}
            value={newUsername}
            onChange={handleChangeUsername}
          />
          <button className="modify" type="submit">
            <CheckIcon />
          </button>
        </form>
      )}
      {!userModify && (
        <>
          <p className="info">{profilePrivate.username}
            <button className="modify" onClick={handleClickUsername} type="button"> <CreateIcon /></button>
          </p>
        </>
      )}
      <h4 className="titleinfo">Votre email:</h4>
      {emailModify && (
        <form onSubmit={handleSubmitEmail}>
          <input
            name="newEmail"
            className="input"
            type="text"
            placeholder={profilePrivate.email}
            value={newEmail}
            onChange={handleChangeEmail}
          />
          <button className="modify" type="submit">
            <CheckIcon />
          </button>
        </form>
      )}
      {!emailModify && (
        <>
          <p className="info">{profilePrivate.email}
            <button className="modify" onClick={handleClickEmail} type="button"> <CreateIcon /></button>
          </p>
        </>
      )}
      <h4 className="titleinfo">Votre Avatar:</h4>
      {avatarModify && (
        <form onSubmit={handleSubmitAvatar}>
          <input
            name="newAvatar"
            className="input"
            type="text"
            placeholder={profilePrivate.avatar}
            value={newAvatar}
            onChange={handleChangeAvatar}
          />
          <button className="modify" type="submit">
            <CheckIcon />
          </button>
        </form>
      )}
      {!avatarModify && (
        <>
          <div className="block-avatar" onClick={handleClickAvatar}>
            <img className="avatar" src={profilePrivate.avatar} alt="Avatar" />
          </div>
        </>
      )}
      {profilePrivateOrganizes.length>0 && (
        <>
          <h3 className="title-event">Listes des évènements organisés : </h3>
        </>
      )}
      <Grid container spacing={5}>
        {profilePrivateOrganizes.map((organizes) => (
          <Grid item xs={12} lg={6}>
            <Organizes deleteEvent={deleteEvent} fetchMessage={fetchMessage} key={organizes.id} {...organizes} />
          </Grid>
        ))}
      </Grid>
    </ProfilStyled>
  );
};

ProfilePrivate.propTypes = {
  profilePrivate: PropTypes.array.isRequired,
  profilePrivateOrganizes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  fetchMessage: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  userModify: PropTypes.bool.isRequired,
  changeInputUsername: PropTypes.func.isRequired,
  modifyUsername: PropTypes.func.isRequired,
  newUsername: PropTypes.string.isRequired,
  emailModify: PropTypes.bool.isRequired,
  changeInputEmail: PropTypes.func.isRequired,
  modifyEmail: PropTypes.func.isRequired,
  newEmail: PropTypes.string.isRequired,
  avatarModify: PropTypes.bool.isRequired,
  changeInputAvatar: PropTypes.func.isRequired,
  modifyAvatar: PropTypes.func.isRequired,
  newAvatar: PropTypes.string.isRequired,
  InputModifyUsername: PropTypes.func.isRequired,
  InputModifyEmail: PropTypes.func.isRequired,
  InputModifyAvatar: PropTypes.func.isRequired,
};

// == Export
export default ProfilePrivate;
