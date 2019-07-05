import actionTypes from "../redux/actionTypes";
import get from "lodash.get";

const isLoginCheck = state =>
  Boolean(
    get(state, [
      "apiData",
      actionTypes.POST_AUTHENTICATION_SESSION_NEW,
      "session_id"
    ])
  );

export default isLoginCheck;
