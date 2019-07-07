import React from "react";
import Image from "./Image";
import styles from "../styles/components/CardImage.module.css";
import iconNames from "../constants/iconNames";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import {
  addToFavAction,
  addToWatchListAction,
  updateId,
  getMoviesApiActions
} from "../redux/actions";
import actionTypes from "../redux/actionTypes";
import PropTypes from 'prop-types';

const CardImage = ({
  imageClassName,
  imageAlt,
  imageSrc,
  isWatchListed,
  id,
  isFavorited
}) => {
  const reduxDispatch = useDispatch();

  const clickHandler = type => clickEvent => {
    clickEvent.stopPropagation();
    const isFavorite = type === "favorite";
    const isActive = isFavorite ? isFavorited : isWatchListed;
    const prevState = {
      typeName: isFavorite
        ? actionTypes.GET_ACCOUNT_FAVORITE_MOVIES
        : actionTypes.GET_ACCOUNT_WATCHLIST_MOVIES,
      active: isActive,
      id
    };
    reduxDispatch(updateId({ ...prevState, active: !prevState.active }));
    const resultAction = isFavorite ? addToFavAction : addToWatchListAction;
    const refreshAction = isFavorite
      ? getMoviesApiActions.favorites
      : getMoviesApiActions.watchlist;
    reduxDispatch(resultAction(id, !isActive))
      .then(() => reduxDispatch(refreshAction))
      .catch(() => reduxDispatch(updateId(prevState)));
  };
  return (
    <div className={styles.wrapper}>
      <Image className={imageClassName} alt={imageAlt} src={imageSrc} />
      <div className={styles.overlay} />
      <button
        type="button"
        onClick={clickHandler("favorite")}
        className={styles.rightBtn}
      >
        <Icon
          name={iconNames.starActive}
          {...(isFavorited ? { style: { color: "var(--yellow)" } } : {})}
        />
      </button>
      <button
        onClick={clickHandler("watchlist")}
        type="button"
        className={styles.leftBtn}
      >
        <Icon
          name={iconNames.clock}
          {...(isWatchListed ? { style: { color: "var(--success)" } } : {})}
        />
      </button>
    </div>
  );
};

CardImage.propTypes = {
  imageClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  isWatchListed: PropTypes.bool,
  id: PropTypes.number,
  isFavorited: PropTypes.bool
};

export default CardImage;
