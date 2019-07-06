import React, { useCallback } from "react";
import CardImage from "./CardImage";
import getYear from "../utils/getYear";
import styles from "../styles/components/Card.module.css";
import classNamesJoiner from "../utils/classNamesJoiner";
const defaultShowDetailsHandler = () => undefined;

const Card = ({
  item,
  isFavorited,
  isWatchListed,
  showDetailsHandler = defaultShowDetailsHandler,
  className
}) => {
  const showDetails = useCallback(() => {
    showDetailsHandler(item.id);
  }, [item.id, showDetailsHandler]);

  const year = getYear(item.release_date);
  return (
    <div
      onClick={showDetails}
      className={classNamesJoiner([styles.wrapper, className])}
    >
      <CardImage
        isFavorited={isFavorited}
        isWatchListed={isWatchListed}
        id={item.id}
        imageSrc={item.poster_path}
        imageAlt={item.original_title}
        imageClassName={styles.cardImage}
      />
      {item.vote_average > 0 && (
        <h1 className={styles.voteAverage}>{item.vote_average}</h1>
      )}

      <span className={styles.block}>
        {item.original_title} {year}
      </span>
    </div>
  );
};

export default Card;
