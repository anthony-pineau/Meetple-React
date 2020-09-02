import axios from 'axios';
import {
  FETCH_EVENTS,
  saveEvents,
  JOIN,
  CANCEL,
  FETCH_MESSAGE,
  saveMessage,
  SEND_MESSAGE,
  fetchMessage,
  saveErrorJoin,
  DELETE_EVENT,
  fetchEvents,
} from 'src/actions/event';
import { fetchCurrentEvent, fetchProfileOrganizes } from 'src/actions/profile-private';

const eventsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      console.log('c\'est le moment de faire l\'appel à l\'API');
      axios({
        method: 'get',
        url: 'http://18.207.205.68/event',
      })
        .then((response) => {
          console.log('succès : ', response.data);

          // transmettre les recettes au store
          store.dispatch(saveEvents(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      next(action);
      break;
    case JOIN:
      console.log('c\'est le moment de faire l\'appel à l\'API');
      axios({
        method: 'post',
        url: `http://18.207.205.68/event/${action.id}/join`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
        data: {
          userId: store.getState().profilePrivate.profilePrivate.id,
        },
      })
        .then((response) => {
          console.log('succès: ', response.data);
          store.dispatch(fetchCurrentEvent(response.data));
          store.dispatch(saveErrorJoin(response.data));
          store.dispatch(fetchEvents());
        })
        .catch((error) => {
          console.warn(error.response.data);
          store.dispatch(saveErrorJoin(error.response.data.error));
        });

      next(action);
      break;
    case CANCEL:
      console.log('c\'est le moment de faire l\'appel à l\'API');
      axios({
        method: 'post',
        url: `http://18.207.205.68/event/${action.id}/cancel`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
        data: {
          userId: store.getState().profilePrivate.profilePrivate.id,
        },
      })
        .then((response) => {
          console.log('succès: ', response.data);
          store.dispatch(fetchCurrentEvent(response.data));
          store.dispatch(fetchEvents());
        })
        .catch((error) => {
          console.warn(error.response.data);
        });

      next(action);
      break;
    case FETCH_MESSAGE:
      console.log('c\'est le moment de faire l\'appel à l\'API');
      axios({
        method: 'get',
        url: `http://18.207.205.68/event/${action.id}/messages`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
        .then((response) => {
          console.log('succès: ', response.data);
          store.dispatch(saveMessage(response.data));
        })
        .catch((error) => {
          console.warn(error.response);
        });

      next(action);
      break;
    case SEND_MESSAGE:
      console.log('c\'est le moment de faire l\'appel à l\'API');
      axios({
        method: 'post',
        url: `http://18.207.205.68/event/${action.id}/add`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
        data: {
          content: store.getState().events.newMessage,
        },
      })
        .then((response) => {
          console.log('succès: ', response.data);
          store.dispatch(fetchMessage(store.getState().events.currentEventId));
        })
        .catch((error) => {
          console.warn(error.response);
        });

      next(action);
      break;
    case DELETE_EVENT:
      console.log('c\'est le moment de faire l\'appel à l\'API');
      axios({
        method: 'post',
        url: `http://18.207.205.68/event/${action.id}/delete`,
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
      })
        .then((response) => {
          console.log('succès: ', response.data);
          store.dispatch(fetchProfileOrganizes(store.getState().events.currentEventId));
        })
        .catch((error) => {
          console.warn(error.response);
        });

      next(action);
      break;
    default:
      next(action);
  }
};

export default eventsMiddleware;
