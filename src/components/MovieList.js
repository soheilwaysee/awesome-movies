import React, { memo } from "react";
import Card from "./Card";
import styles from "../styles/components/MovieList.module.css";
import isUidChanged from "../utils/isUidChanged";
import iconNames from "../constants/iconNames";
import Icon from "./Icon";
import replaceUnderlineWithSpace from "../utils/replaceUnderlineWithSpace";
import get from "lodash.get";

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
}) => {
  return (
    <div className={styles.wrapper}>
      {type && (
        <h1 className={styles.type}>{replaceUnderlineWithSpace(type)}</h1>
      )}
      <div className={styles.itemWrapper}>
        {items.map(item => {
          const id = get(item, ["id"]);
          return (
            <Card
              isFavorited={get(favoriteIds, id, false)}
              isWatchListed={get(watchListIds, id, false)}
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
};

export default memo(MovieList, isUidChanged);
