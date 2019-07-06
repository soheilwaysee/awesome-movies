import request from "../utils/request";
import config from "../config";
import get from "lodash.get";
import actionTypes from "./actionTypes";
import { showToast } from "./actions";
import redirectToLoginPage from '../utils/redirectToLoginPage';

const fetchReduxMiddleware = ({ getState, dispatch }) => next => action => {
  if (!action.method) {
    return next(action);
  }

  const sessionId = get(getState(), [
    "apiData",
    actionTypes.POST_AUTHENTICATION_SESSION_NEW,
    "session_id"
  ]);
  const resultParams = (action && action.params) || {};
  return request({
    ...action,
    params: {
      ...resultParams,
      language: config.LANGUAGE,
      api_key: config.API_KEY,
      ...(sessionId ? { session_id: sessionId } : {})
    }
  })
    .then(response => {
      next({
        ...action,
        data: response.data
      });
      return Promise.resolve(response);
    })
    .catch(error => {
      const errorMessage = get(error, ["message"]);
      const isAuthError = get(error, ["response", "status"]) === 401;
      if (!isAuthError && errorMessage) {
        next(showToast({ message: errorMessage, error: true }));
      }
      if (isAuthError) {
        next(
          showToast({
            message: "You will be redirected to Login Page"
          })
        );

        redirectToLoginPage(dispatch);

      }
      return Promise.reject(error);
    });
};

export default fetchReduxMiddleware;
