export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_TAGS = 'FETCH_TAGS';

export const SAVE_CATEGORY = 'SAVE_CATEGORY';
export const SAVE_GAMES = 'SAVE_GAMES';
export const SAVE_TAGS = 'SAVE_TAGS';
// action creators
export const fetchCategory = () => ({
  type: FETCH_CATEGORY,
});

export const fetchGames = () => ({
  type: FETCH_GAMES,
});

export const fetchTags = () => ({
  type: FETCH_TAGS,
});

export const saveCategory = (category) => ({
  type: SAVE_CATEGORY,
  value: category,
});

export const saveGames = (games) => ({
  type: SAVE_GAMES,
  value: games,
});

export const saveTags = (tags) => ({
  type: SAVE_TAGS,
  value: tags,
});
