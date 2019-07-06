import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import get from "lodash.get";
import styles from "../styles/components/Toast.module.css";
import { hideToast } from "../redux/actions";
import classNamesJoiner from "../utils/classNamesJoiner";
const Toast = () => {
  const { message, error, success } = useSelector(state =>
    get(state, ["toast"])
  );
  const reduxDispatch = useDispatch();
  useEffect(() => {
    if (message) {
      setTimeout(() => reduxDispatch(hideToast), 3000);
    }
  }, [message, reduxDispatch]);
  return message ? (
    <div
      className={classNamesJoiner([
        styles.wrapper,
        error && styles.error,
        success && styles.success
      ])}
    >
      {message}
    </div>
  ) : null;
};

export default Toast;
