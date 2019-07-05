import actionTypes from "../actionTypes";

const initialState = {};

const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_TOAST:
      return {
        message: action.message,
        error: action.error,
        success: action.success
      };
    case actionTypes.HIDE_TOAST:
      return initialState;
    default:
      return state;
  }
};

export default toastReducer;
