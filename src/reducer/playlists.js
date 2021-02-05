/* eslint-disable import/no-anonymous-default-export */
export default function (state = [], action) {
  switch (action.type) {
    case "ADD_PLAYLIST":
      return [...state, { name: action.payload, songs: [] }];

    case "REMOVE_PLAYLIST":
      return [...state.filter((playlist) => playlist.name !== action.payload)];

    case "ADD_SONG_TO_PLAYLIST":
      console.log(action.payload);
      return [
        ...state.filter((playlist) => playlist.name !== action.payload.name),
        {
          name: action.payload.name,
          songs: [
            ...state
              .find((playlist) => playlist.name === action.payload.name)
              .songs.concat(action.payload.song),
          ],
        },
      ];

    case "REMOVE_SONG_FROM_PLAYLIST":
      console.log(action.payload);
      return [
        {
          name: action.payload.name,
          songs: [
            ...state
              .find((state) => state.name === action.payload.name)
              .songs.filter((song) => song !== action.payload.song),
          ],
        },
        ...state.filter((state) => state.name !== action.payload.name),
      ];

    default:
      return state;
  }
}
