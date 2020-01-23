import Type from "./type";
import { deleteItem } from "./actionCreater";

export const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_POST_SUCCESS:
      return payload.contacts;
    case Type.ADD_POST_SUCCESS:
      return [...state, payload.contact];
    case Type.DELETED_POST_SUCCESS:
      return deleteItem(state, payload.id);
    default:
      return state;
  }
};

export const filter = (state = "", { type, payload }) => {
  switch (type) {
    case Type.CHANGE_FILTER_VALUE:
      return payload.value;
    case Type.EMPTY_FILTER_VALUE:
      return payload;
    default:
      return state;
  }
};

export const loadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case Type.FETCH_POST_START:
      return true;
    case Type.FETCH_POST_SUCCESS:
      return false;
    case Type.FETCH_POST_ERROR:
      return false;
    case Type.DELETED_POST_START:
      return true;
    case Type.DELETED_POST_SUCCESS:
      return false;
    case Type.DELETED_POST_ERROR:
      return false;
    case Type.ADD_POST_START:
      return true;
    case Type.ADD_POST_SUCCESS:
      return false;
    case Type.ADD_POST_ERROR:
      return false;
    default:
      return state;
  }
};

export const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_POST_START:
      return null;
    case Type.FETCH_POST_ERROR:
      return payload.error;
    case Type.DELETED_POST_START:
      return null;
    case Type.DELETED_POST_ERROR:
      return payload.error;
    case Type.ADD_POST_START:
      return null;
    case Type.ADD_POST_ERROR:
      return payload.error;
    default:
      return state;
  }
};
