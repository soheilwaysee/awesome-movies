import React, { memo } from "react";
import Card from "./Card";
import styles from "../styles/components/MovieList.module.css";
import uidHasChanged from "../utils/uidHasChanged";
import iconNames from "../constants/iconNames";
import Icon from "./Icon";
import replaceUnderlineWithSpace from "../utils/replaceUnderlineWithSpace";
import get from "lodash.get";
import PropTypes from 'prop-types';
import movieTypesPropTypes from '../propTypesCommon/movieTypesPropTypes';
import moviePropTypes from '../propTypesCommon/moviePropTypes';

const MovieList = ({
  type,
  items,
  favoriteIds,
  watchListIds,
  addToHandler,
  showDetailsHandler,
  loading,
  isLastPage,
  onEndReached
}) => (
  <div className={styles.wrapper}>
    {type && (
      <h1 className={styles.type}>{replaceUnderlineWithSpace(type)}</h1>
    )}
    <div className={styles.itemWrapper}>
      {items.map(item => {
        const id = get(item, ["id"]);
        return (
          <Card
            isFavorited={get(favoriteIds, [id], false)}
            isWatchListed={get(watchListIds, [id], false)}
            key={id}
            addToHandler={addToHandler}
            item={item}
            showDetailsHandler={showDetailsHandler}
          />
        );
      })}
    </div>
    {!isLastPage && (
      <button
        type="button"
        className={styles.loadMore}
        onClick={onEndReached}
      >
        <Icon name={iconNames.downOpen} />
      </button>
    )}
  </div>
);

MovieList.propTypes = {
  type:movieTypesPropTypes,
  items: PropTypes.arrayOf(moviePropTypes),
  favoriteIds: PropTypes.objectOf(PropTypes.bool),
  watchListIds: PropTypes.objectOf(PropTypes.bool),
  addToHandler: PropTypes.func,
  showDetailsHandler: PropTypes.func,
  loading: PropTypes.bool,
  isLastPage: PropTypes.bool,
  onEndReached: PropTypes.func
};

export default memo(MovieList, uidHasChanged);
