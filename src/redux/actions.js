import Type from "./type.js";

export const fetchPostStart = () => ({
  type: Type.FETCH_POST_START
});

export const fetchPostSuccess = contacts => ({
  type: Type.FETCH_POST_SUCCESS,
  payload: { contacts }
});

export const fetchPostError = error => ({
  type: Type.FETCH_POST_ERROR,
  payload: { error }
});

export const deletedPostStart = () => ({
  type: Type.DELETED_POST_START
});

export const deletedPostSuccess = id => ({
  type: Type.DELETED_POST_SUCCESS,
  payload: { id }
});

export const deletedPostError = error => ({
  type: Type.DELETED_POST_ERROR,
  payload: { error }
});

export const addPostStart = () => ({
  type: Type.ADD_POST_START
});

export const addPostSuccess = contact => ({
  type: Type.ADD_POST_SUCCESS,
  payload: { contact }
});

export const addPostError = error => ({
  type: Type.ADD_POST_ERROR,
  payload: { error }
});

export const addContact = contact => ({
  type: Type.ADD_CONTACT,
  payload: contact
});

export const deletedContact = id => ({
  type: Type.DELETED_CONTACT,
  payload: id
});

export const changeFilterValue = value => ({
    type: Type.CHANGE_FILTER_VALUE,
    payload: {value}
  });

  export const emptyFilterValue = () => ({
    type: Type.EMPTY_FILTER_VALUE,
    payload: ""
  });
