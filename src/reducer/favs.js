/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_SONG_TO_FAV": //action
      return {
        ...state,
        data: [...state.data, action.payload], //when splitting the two reducers, this is already configured as state.fav, so I don't need to wrap data in that anymore
      };
    case "REMOVE_SONG_FROM_FAV":
      return {
        ...state,
        data: [...state.data.filter((song) => song !== action.payload)],
      };
    default:
      return state;
  }
}
