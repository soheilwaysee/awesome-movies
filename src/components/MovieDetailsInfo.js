import React from "react";
import styles from "../styles/components/MovieDetailsInfo.module.css";
console.log('----------styles---------', styles);
const MovieDetailsInfo = ({ info, title }) =>
  info ? (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.description}>{info}</span>
    </div>
  ) : null;

export default MovieDetailsInfo;
