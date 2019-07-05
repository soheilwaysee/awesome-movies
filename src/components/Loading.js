import React from "react";
import styles from "./Loading.module.css";
import Icon from "./Icon";

const Loading = ({ show }) => {
  return show ? (
    <div id="loading" className={styles.loading}>
      <Icon name="spinner" />
    </div>
  ) : null;
};

export default Loading;
