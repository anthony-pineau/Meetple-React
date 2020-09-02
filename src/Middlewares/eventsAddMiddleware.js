import axios from 'axios';
import { SEND_EVENT, fetchEvents } from 'src/actions/event';
import { fetchProfileOrganizes } from 'src/actions/profile-private';

const eventsAddMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EVENT:
      console.log('c\'est le moment de faire l\'appel à l\'API');
      axios({
        method: 'post',
        url: 'http://18.207.205.68/event/add',
        headers: {
          Authorization: `Bearer ${store.getState().login.token}`,
        },
        data: {
          title: store.getState().createEvent.title,
          date: store.getState().createEvent.date,
          department: store.getState().createEvent.department,
          adress: store.getState().createEvent.adress,
          maxParticipants: Number(store.getState().createEvent.maxparticipants),
          description: store.getState().createEvent.description,
          coordinates: [
            5.155,
            5.854,
          ],
          tags: [
            store.getState().createEvent.selectedTagsId,
          ],
          category: store.getState().createEvent.selectedCategoryId,
          games: [
            store.getState().createEvent.selectedGamesId,
          ],
        },
      })
        .then((response) => {
          console.log('succès : ', response.data);
          store.dispatch(fetchEvents(response.data));
          store.dispatch(fetchProfileOrganizes());
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

export default eventsAddMiddleware;
