import {
  SAVE_CATEGORY,
  SAVE_GAMES,
  SAVE_TAGS,
} from 'src/actions/home';
import {
  GET_CATEGORY_VALUE,
  GET_GAMES_VALUE,
  GET_TAGS_VALUE,
} from 'src/actions/create-event';
import {
  CHANGE_INPUT_EVENT,
  SEND_EVENT,
} from 'src/actions/event';

import initialdepartment from 'src/utils/department.json';

const initialState = {
  autodepartment: initialdepartment,
  autocategory: [],
  autogames: [],
  autotags: [],
  title: '',
  date: '',
  department: '',
  adress: '',
  maxparticipants: '',
  description: '',
  selectedCategoryId: '',
  selectedGamesId: '',
  selectedTagsId: '',
};

const eventReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORY:
      return {
        ...state,
        autocategory: action.value,
      };
    case SAVE_GAMES:
      return {
        ...state,
        autogames: action.value,
      };
    case SAVE_TAGS:
      return {
        ...state,
        autotags: action.value,
      };
    case GET_CATEGORY_VALUE:
      return {
        ...state,
        selectedCategoryId: action.value,
      };
    case GET_GAMES_VALUE:
      return {
        ...state,
        selectedGamesId: action.value,
      };
    case GET_TAGS_VALUE:
      return {
        ...state,
        selectedTagsId: action.value,
      };
    case CHANGE_INPUT_EVENT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SEND_EVENT:
      return {
        ...state,
        title: '',
        date: '',
        department: '',
        adress: '',
        maxparticipants: '',
        description: '',
      };
    default:
      return state;
  }
};

export default eventReducer;
