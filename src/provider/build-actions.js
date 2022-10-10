import * as actionTypes from "./actions-types";

export const buildActions = (dispatch) => {
  return {
    setAll: (payload) => dispatch({ type: actionTypes.SET_ALL, payload }),
    setName: (payload) => dispatch({ type: actionTypes.SET_NAME, payload }),
    addRepo: (payload) => dispatch({ type: actionTypes.ADD_REPO, payload }),
    delRepo: (payload) => dispatch({ type: actionTypes.DEL_REPO, payload }),
  };
};
