import React from "react";
import styles from "./MovieDetails.module.css";

const MovieDetailsInfo = ({ info, title }) =>
  info ? (
    <>
      <h4 className={styles.descriptionTitle}>{title}</h4>
      <span>{info}</span>
    </>
  ) : null;

export default MovieDetailsInfo;
