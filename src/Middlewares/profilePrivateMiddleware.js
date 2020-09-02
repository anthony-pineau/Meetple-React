import axios from 'axios';
import {
  FETCH_PROFILE,
  saveProfile,
  FETCH_PROFILE_ORGANIZES,
  saveProfileOrganizes,
  FETCH_CURRENT_EVENT,
  saveCurrentEvent,
  fetchProfileOrganizes,
  fetchCurrentEvent,
  MODIFY_USERNAME,
  MODIFY_EMAIL,
  MODIFY_AVATAR,
  fetchProfile,
} from 'src/actions/profile-private';

import { fetchMessage } from 'src/actions/event';

const profilePrivateMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      console.log('c\'est le moment de faire l\'appel à l\'API PROFILE user');
      axios({
        method: 'get',
        url: 'http://18.207.205.68/current-user',
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
        .then((response) => {
          console.log('succès : ', response.data);
          store.dispatch(saveProfile(response.data));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(() => {
          store.dispatch(fetchProfileOrganizes());
          store.dispatch(fetchCurrentEvent());
        });
      next(action);
      break;
    case FETCH_PROFILE_ORGANIZES:
      console.log('c\'est le moment de faire l\'appel à l\'API PROFILE EVENT');
      axios({
        method: 'get',
        url: `http://18.207.205.68/profile/${store.getState().profilePrivate.profilePrivate.id}/organizes`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
        .then((response) => {
          console.log('succès : ', response.data);

          // transmettre les recettes au store
          store.dispatch(saveProfileOrganizes(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    case FETCH_CURRENT_EVENT:
      console.log('c\'est le moment de faire l\'appel à l\'API CURRENT EVENT');
      axios({
        method: 'get',
        url: `http://18.207.205.68/profile/${store.getState().profilePrivate.profilePrivate.id}/participations`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
        .then((response) => {
          console.log('succès : ', response.data);

          // transmettre les recettes au store
          store.dispatch(saveCurrentEvent(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    case MODIFY_USERNAME:
      console.log('c\'est le moment de faire l\'appel à l\'API CURRENT EVENT');
      axios({
        method: 'post',
        url: `http://18.207.205.68/profile/${store.getState().profilePrivate.profilePrivate.id}/username/update`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
        data: {
          username: store.getState().profilePrivate.newUsername,
        },
      })
        .then((response) => {
          console.log('succès : ', response.data);
          store.dispatch(fetchProfile(response.data));
        })
        .catch((error) => {
          console.warn(error.response.data);
        });
      next(action);
      break;
    case MODIFY_EMAIL:
      console.log('c\'est le moment de faire l\'appel à l\'API CURRENT EVENT');
      axios({
        method: 'post',
        url: `http://18.207.205.68/profile/${store.getState().profilePrivate.profilePrivate.id}/email/update`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
        data: {
          email: store.getState().profilePrivate.newEmail,
        },
      })
        .then((response) => {
          console.log('succès : ', response.data);
          store.dispatch(fetchProfile(response.data));
        })
        .catch((error) => {
          console.warn(error.response.data);
        });
      next(action);
      break;
    case MODIFY_AVATAR:
      console.log('c\'est le moment de faire l\'appel à l\'API CURRENT EVENT');
      axios({
        method: 'post',
        url: `http://18.207.205.68/profile/${store.getState().profilePrivate.profilePrivate.id}/avatar/update`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
        data: {
          avatar: store.getState().profilePrivate.newAvatar,
        },
      })
        .then((response) => {
          console.log('succès : ', response.data);
          store.dispatch(fetchProfile(response.data));
        })
        .catch((error) => {
          console.warn(error.response.data);
        });

      next(action);
      break;
    default:
      next(action);
  }
};

export default profilePrivateMiddleware;
