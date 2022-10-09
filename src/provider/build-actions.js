import * as actionTypes from "./actions-types";

export const buildActions = (dispatch) => {
  return {
    setAll: (payload) => dispatch({ type: actionTypes.SET_ALL, payload }),
    setName: (payload) => dispatch({ type: actionTypes.SET_NAME, payload }),
  };
};
