import {
  SAVE_PROFILE,
  SAVE_PROFILE_ORGANIZES,
  SAVE_CURRENT_EVENT,
  CHANGE_INPUT_USERNAME,
  MODIFY_USERNAME,
  CHANGE_INPUT_EMAIL,
  MODIFY_EMAIL,
  CHANGE_INPUT_AVATAR,
  MODIFY_AVATAR,
  INPUT_MODIFY_USERNAME,
  INPUT_MODIFY_EMAIL,
  INPUT_MODIFY_AVATAR,
} from 'src/actions/profile-private';

const initialState = {
  profilePrivate: null,
  profilePrivateOrganizes: null,
  currentEvent: null,
  newUsername: '',
  newEmail: '',
  newAvatar: '',
  userModify: false,
  emailModify: false,
  avatarModify: false,
};

const profileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFILE:
      return {
        ...state,
        profilePrivate: action.value,
      };
    case SAVE_PROFILE_ORGANIZES:
      return {
        ...state,
        profilePrivateOrganizes: action.value,
      };
    case SAVE_CURRENT_EVENT:
      return {
        ...state,
        currentEvent: action.value,
      };
    case CHANGE_INPUT_USERNAME:
      return {
        ...state,
        newUsername: action.value,
      };
    case MODIFY_USERNAME:
      return {
        ...state,
        newUsername: '',
        userModify: false,
      };
    case CHANGE_INPUT_EMAIL:
      return {
        ...state,
        newEmail: action.value,
      };
    case MODIFY_EMAIL:
      return {
        ...state,
        newEmail: '',
        emailModify: false,
      };
    case CHANGE_INPUT_AVATAR:
      return {
        ...state,
        newAvatar: action.value,
      };
    case MODIFY_AVATAR:
      return {
        ...state,
        newAvatar: '',
        avatarModify: false,
      };
    case INPUT_MODIFY_USERNAME:
      return {
        ...state,
        userModify: true,
      };
    case INPUT_MODIFY_EMAIL:
      return {
        ...state,
        emailModify: true,
      };
    case INPUT_MODIFY_AVATAR:
      return {
        ...state,
        avatarModify: true,
      };
    default:
      return state;
  }
};

export default profileReducer;
