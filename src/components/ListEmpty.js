import React from "react";
import styles from "./ListEmpty.module.css";

const ListEmpty = ({ show, isLogin }) =>
  show ? (
    <div className={styles.wrapper}>
      <div>List is empty</div>
      {!isLogin && <div>Please Login</div>}
    </div>
  ) : null;

export default ListEmpty;
