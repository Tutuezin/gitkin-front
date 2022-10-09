import * as actionTypes from "./actions-types";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_ALL:
      return { ...state, ...action.payload };
    case actionTypes.SET_NAME:
      return { ...state, stringAvatar: action.payload };
  }
};
