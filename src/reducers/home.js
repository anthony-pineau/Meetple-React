import { SAVE_CATEGORY, SAVE_GAMES } from 'src/actions/home';
import initialdepartment from 'src/utils/department.json';

const initialState = {
  category: [''],
  games: [''],
  department: initialdepartment,
};

const AutoComplete = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORY:
      return {
        ...state,
        category: action.value,
      };
    case SAVE_GAMES:
      return {
        ...state,
        games: action.value,
      };
    default:
      return state;
  }
};

export default AutoComplete;
