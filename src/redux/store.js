import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { contacts, filter,loadingReducer ,errorReducer} from "./reducers";

const rootReducer = combineReducers({
  contacts: contacts,
  filter: filter,
  loading:loadingReducer,
  error:errorReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
