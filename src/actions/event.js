export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SAVE_EVENTS = 'SAVE_EVENTS';
export const CHANGE_INPUT_EVENT = 'CHANGE_INPUT_EVENT';
export const SEND_EVENT = 'SEND_EVENT';
export const JOIN = 'JOIN';
export const CANCEL = 'CANCEL';
export const FETCH_MESSAGE = 'FETCH_MESSAGE';
export const SAVE_MESSAGE = 'SAVE_MESSAGE';
export const CHANGE_INPUT_MESSAGE = 'CHANGE_INPUT_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SAVE_ERROR_JOIN = 'SAVE_ERROR_JOIN';
export const DELETE_EVENT = 'DELETE_EVENT';

// action creators
export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

export const saveEvents = (events) => ({
  type: SAVE_EVENTS,
  value: events,
});

// eslint-disable-next-line max-len
export const changeValue = (value, name) => ({
  type: CHANGE_INPUT_EVENT,
  value,
  name,
});

export const sendEvent = () => ({
  type: SEND_EVENT,
});

export const Join = (id) => ({
  type: JOIN,
  id,
});

export const Cancel = (id) => ({
  type: CANCEL,
  id,
});

export const fetchMessage = (id) => ({
  type: FETCH_MESSAGE,
  id,
});

export const saveMessage = (messages) => ({
  type: SAVE_MESSAGE,
  value: messages,
});

export const changeInputMessage = (newMessage) => ({
  type: CHANGE_INPUT_MESSAGE,
  value: newMessage,
});

export const sendMessage = (id) => ({
  type: SEND_MESSAGE,
  id,
});

export const saveErrorJoin = (errorJoin) => ({
  type: SAVE_ERROR_JOIN,
  value: errorJoin,
});


export const deleteEvent = (id) => ({
  type: DELETE_EVENT,
  id,
});
