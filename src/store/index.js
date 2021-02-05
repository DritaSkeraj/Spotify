import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import playerReducer from '../reducers/nowPlaying';
import thunk from 'redux-thunk'

const composedEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const intitialState = {
    nowPlaying: null,
}

const bigReducer = combineReducers({ newPlaying: playerReducer})

export default function configureStore() {
    return createStore(
        bigReducer,
        intitialState,
        composedEnhacer(applyMiddleware(thunk))
    )
}