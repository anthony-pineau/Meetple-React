import {
  SAVE_EVENTS,
  SAVE_MESSAGE,
  CHANGE_INPUT_MESSAGE,
  SEND_MESSAGE,
  FETCH_MESSAGE,
  SAVE_ERROR_JOIN,
} from 'src/actions/event';

const initialState = {
  events: null,
  loading: true,
  currentEventId: null,
  Join: false,
  messages: [],
  newMessage: '',
  errorJoin: '',
};

const eventReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EVENTS:
      return {
        ...state,
        events: action.value,
        loading: false,
      };
    case SAVE_MESSAGE:
      return {
        ...state,
        messages: action.value,
      };
    case CHANGE_INPUT_MESSAGE:
      return {
        ...state,
        newMessage: action.value,
      };
    case SEND_MESSAGE: {
      return {
        ...state,
        newMessage: '',
      };
    }
    case FETCH_MESSAGE: {
      return {
        ...state,
        currentEventId: action.id,
        errorJoin: null,
      };
    }
    case SAVE_ERROR_JOIN:
      return {
        ...state,
        errorJoin: action.value,
      };
    default:
      return state;
  }
};

export default eventReducer;
