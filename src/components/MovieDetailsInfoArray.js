import React from "react";
import styles from "./MovieDetails.module.css";

const MovieDetailsInfoArray = ({ info, title }) =>
  info && info.length ? (
    <>
      <h4 className={styles.descriptionTitle}>{title}</h4>
      <span>{info.map(({ name }) => name).join(", ")}</span>
    </>
  ) : null;

export default MovieDetailsInfoArray;
