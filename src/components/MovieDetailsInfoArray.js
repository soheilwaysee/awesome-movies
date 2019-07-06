import React from "react";
import styles from "../styles/components/MovieDetailsInfoArray.module.css";
import classNamesJoiner from '../utils/classNamesJoiner';

const MovieDetailsInfoArray = ({ info, title, wrapperClassName}) =>
  info && info.length ? (
    <div className={classNamesJoiner([styles.wrapper, wrapperClassName])}>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.description}>{info.map(({ name }) => name).join(", ")}</span>
    </div>
  ) : null;

export default MovieDetailsInfoArray;
