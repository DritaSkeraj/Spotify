/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        picture: action.payload.picture,
      };

    case "UNSET_USER":
      return {
        ...state,
        name: null,
        id: null,
        picture: null,
      };
    default:
      return state;
  }
}
