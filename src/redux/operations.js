import axios from "axios";
import {
  fetchPostStart,
  fetchPostSuccess,
  fetchPostError,
  deletedPostStart,
  deletedPostSuccess,
  deletedPostError,
  addPostStart,
  addPostSuccess,
  addPostError
} from "./actions";
import { transform } from "./actionCreater";

axios.defaults.baseURL = "https://post-740a7.firebaseio.com";

export const fetchPost = () => async dispatch => {
  dispatch(fetchPostStart());
  try {
    const response = await axios.get("/post.json");
    const data = transform(response.data);
    dispatch(fetchPostSuccess(data));
  } catch (error) {
    dispatch(fetchPostError(error));
    console.log(error);
    // throw new Error(error);
  }
};

export const deletedPost = id => async dispatch => {
  dispatch(deletedPostStart());
  try {
    const response = await axios.delete(`/post/${id}.json`);
    dispatch(deletedPostSuccess(id));
  } catch (error) {
    dispatch(deletedPostError(error));
    console.log(error);
    throw new Error(error);
  }
};

export const addPost = contact => async dispatch => {
  dispatch(addPostStart());
  try {
    const response = await axios.post(`/post.json`, contact);
    dispatch(addPostSuccess({ ...contact, id: response.data.name }));
  } catch (error) {
    dispatch(addPostError(error));
    console.log(error);
    throw new Error(error);
  }
};
