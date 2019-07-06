import React from "react";
import styles from "../styles/components/Loading.module.css";
import Icon from "./Icon";

const Loading = ({ show }) => {
  return show ? (
    <div id="loading" className={styles.loading}>
      <Icon name="spinner" />
    </div>
  ) : null;
};

export default Loading;
