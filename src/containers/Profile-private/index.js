import { connect } from 'react-redux';

import Profile from 'src/components/Profile-private';
import { fetchMessage, deleteEvent } from 'src/actions/event';
import {
  changeInputUsername,
  modifyUsername,
  changeInputEmail,
  modifyEmail,
  changeInputAvatar,
  modifyAvatar,
  InputModifyUsername,
  InputModifyEmail,
  InputModifyAvatar,
} from 'src/actions/profile-private';

const mapStateToProps = (state) => ({
  profilePrivate: state.profilePrivate.profilePrivate,
  profilePrivateOrganizes: state.profilePrivate.profilePrivateOrganizes,
  newUsername: state.profilePrivate.newUsername,
  newEmail: state.profilePrivate.newEmail,
  newAvatar: state.profilePrivate.newAvatar,
  userModify: state.profilePrivate.userModify,
  emailModify: state.profilePrivate.emailModify,
  avatarModify: state.profilePrivate.avatarModify,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessage: (id) => {
    dispatch(fetchMessage(id));
  },
  deleteEvent: (id) => {
    dispatch(deleteEvent(id));
  },
  changeInputUsername: (newUsername) => {
    dispatch(changeInputUsername(newUsername));
  },
  modifyUsername: () => {
    dispatch(modifyUsername());
  },
  changeInputEmail: (newEmail) => {
    dispatch(changeInputEmail(newEmail));
  },
  modifyEmail: () => {
    dispatch(modifyEmail());
  },
  changeInputAvatar: (newAvatar) => {
    dispatch(changeInputAvatar(newAvatar));
  },
  modifyAvatar: () => {
    dispatch(modifyAvatar());
  },
  InputModifyUsername: () => {
    dispatch(InputModifyUsername());
  },
  InputModifyEmail: () => {
    dispatch(InputModifyEmail());
  },
  InputModifyAvatar: () => {
    dispatch(InputModifyAvatar());
  },
});

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileContainer;
