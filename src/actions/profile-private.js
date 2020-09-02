export const FETCH_PROFILE = 'FETCH_PROFILE';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const FETCH_PROFILE_ORGANIZES = 'FETCH_PROFILE_ORGANIZES';
export const SAVE_PROFILE_ORGANIZES = 'SAVE_PROFILE_ORGANIZES';
export const FETCH_CURRENT_EVENT = 'FETCH_CURRENT_EVENT';
export const SAVE_CURRENT_EVENT = 'SAVE_CURRENT_EVENT';
export const CHANGE_INPUT_USERNAME = 'CHANGE_INPUT_USERNAME';
export const MODIFY_USERNAME = 'MODIFY_USERNAME';
export const CHANGE_INPUT_EMAIL = 'CHANGE_INPUT_EMAIL';
export const MODIFY_EMAIL = 'MODIFY_EMAIL';
export const CHANGE_INPUT_AVATAR = 'CHANGE_INPUT_AVATAR';
export const MODIFY_AVATAR = 'MODIFY_AVATAR';
export const INPUT_MODIFY_USERNAME = 'INPUT_MODIFY_USERNAME';
export const INPUT_MODIFY_EMAIL = 'INPUT_MODIFY_EMAIL';
export const INPUT_MODIFY_AVATAR = 'INPUT_MODIFY_AVATAR';

// action creators
export const fetchProfile = () => ({
  type: FETCH_PROFILE,
});

export const saveProfile = (profilePrivate) => ({
  type: SAVE_PROFILE,
  value: profilePrivate,
});

export const fetchProfileOrganizes = () => ({
  type: FETCH_PROFILE_ORGANIZES,
});

export const saveProfileOrganizes = (profileOrganizes) => ({
  type: SAVE_PROFILE_ORGANIZES,
  value: profileOrganizes,
});

export const fetchCurrentEvent = () => ({
  type: FETCH_CURRENT_EVENT,
});

export const saveCurrentEvent = (currentEvent) => ({
  type: SAVE_CURRENT_EVENT,
  value: currentEvent,
});

export const changeInputUsername = (newUsername) => ({
  type: CHANGE_INPUT_USERNAME,
  value: newUsername,
});

export const modifyUsername = () => ({
  type: MODIFY_USERNAME,
});

export const changeInputEmail = (newEmail) => ({
  type: CHANGE_INPUT_EMAIL,
  value: newEmail,
});

export const modifyEmail = () => ({
  type: MODIFY_EMAIL,
});

export const changeInputAvatar = (newAvatar) => ({
  type: CHANGE_INPUT_AVATAR,
  value: newAvatar,
});

export const modifyAvatar = () => ({
  type: MODIFY_AVATAR,
});

export const InputModifyUsername = (userModify) => ({
  type: INPUT_MODIFY_USERNAME,
  value: userModify,
});

export const InputModifyEmail = (emailModify) => ({
  type: INPUT_MODIFY_EMAIL,
  value: emailModify,
});

export const InputModifyAvatar = (avatarModify) => ({
  type: INPUT_MODIFY_AVATAR,
  value: avatarModify,
});
