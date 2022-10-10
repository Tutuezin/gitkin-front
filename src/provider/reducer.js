import * as actionTypes from "./actions-types";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL:
      return { ...state, ...action.payload };
    case actionTypes.SET_NAME:
      return { ...state, stringAvatar: action.payload };
    case actionTypes.ADD_REPO:
      return {
        ...state,
        repositories: [...state.repositories, action.payload],
      };
    case actionTypes.DEL_REPO:
      return {
        ...state,
        repositories: state.repositories.filter(
          ({ id }) => id !== action.payload
        ),
      };
    default:
      return state;
  }
};
