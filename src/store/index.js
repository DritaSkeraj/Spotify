import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favReducer from "../reducer/favs";
import userReducer from "../reducer/user";
import thunk from "redux-thunk";
import playListReducer from "../reducer/playlists";
import selectedPlaylistReducer from "../reducer/selectedPlaylist";
import nowPlayingReducer from "../reducer/nowPlaying";

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
  playlists: [],
  selectedPlaylist: {},
  nowPlaying: {},
};

const bigReducer = combineReducers({
  fav: favReducer,
  user: userReducer,
  playlists: playListReducer,
  selectedPlaylist: selectedPlaylistReducer,
  nowPlaying: nowPlayingReducer,
}); //associates reducers to state values

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  ); //creates store with thunk middleware
}
