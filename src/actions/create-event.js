export const GET_CATEGORY_VALUE = 'GET_CATEGORY_VALUE';
export const GET_GAMES_VALUE = 'GET_GAMES_VALUE';
export const GET_TAGS_VALUE = 'GET_TAGS_VALUE';

// action creators
export const getCategoryValue = (value, name) => ({
  type: GET_CATEGORY_VALUE,
  value,
  name,
});

export const getGamesValue = (value, name) => ({
  type: GET_GAMES_VALUE,
  value,
  name,
});

export const getTagsValue = (value, name) => ({
  type: GET_TAGS_VALUE,
  value,
  name,
});
