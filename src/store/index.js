import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favReducer from "../reducer/favs";
import userReducer from "../reducer/user";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  fav: {
    //state has to be an object
    data: [],
  },
  user: {
    name: null,
    id: null,
    picture: null,
  },
  nowPlaying: null,

};

const bigReducer = combineReducers({ fav: favReducer, user: userReducer, newPlaying: playerReducer }); //associates reducers to state values

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  ); //creates store with thunk middleware
}
