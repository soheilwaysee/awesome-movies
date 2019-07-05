import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionTypes from "../redux/actionTypes";
import { setItemLocalStorage } from "../utils/localStorage";
const Auth = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const requestToken = params.get("request_token");
  const reduxDispatch = useDispatch();
  useEffect(() => {
    if (!requestToken) {
      return undefined;
    }
    reduxDispatch({
      type: actionTypes.POST_AUTHENTICATION_SESSION_NEW,
      method: "post",
      url: "/authentication/session/new",
      data: {
        request_token: requestToken
      }
    }).then(({ data }) => {
      setItemLocalStorage("session_id", data.session_id);
    });
  }, [reduxDispatch, requestToken]);

  return null;
};

export default withRouter(Auth);
