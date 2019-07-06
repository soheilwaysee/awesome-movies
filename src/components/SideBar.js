import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/components/SideBar.module.css";
import routeNames from "../constants/routeNames";
import classNamesJoiner from "../utils/classNamesJoiner";

const SideBar = ({ show, setShowSideBar }) => {
  const onClickHandler = useCallback(
    () => window.innerHeight > window.innerWidth && setShowSideBar(false),
    [setShowSideBar]
  );
  return (
    <div
      onClick={onClickHandler}
      className={classNamesJoiner([styles.wrapper, !show && styles.hide])}
    >
      <NavLink
        data-testid="link"
        className={styles.link}
        activeClassName={styles.active}
        isActive={(_, location) => {
          return [routeNames.homePage, routeNames.movieNowPlaying].some(
            item => item === location.pathname
          );
        }}
        to={routeNames.movieNowPlaying}
      >
        Now Playing
      </NavLink>
      <NavLink
        data-testid="link"
        className={styles.link}
        activeClassName={styles.active}
        to={routeNames.moviePopular}
      >
        Popular
      </NavLink>
      <NavLink
        data-testid="link"
        className={styles.link}
        activeClassName={styles.active}
        to={routeNames.movieTopRated}
      >
        Top Rated
      </NavLink>
      <NavLink
        data-testid="link"
        className={styles.link}
        activeClassName={styles.active}
        to={routeNames.movieUpcoming}
      >
        Upcoming
      </NavLink>

      <NavLink
        className={styles.link}
        data-testid="link"
        activeClassName={styles.active}
        to={routeNames.movieFavorites}
      >
        Favorites
      </NavLink>
      <NavLink
        className={styles.link}
        data-testid="link"
        activeClassName={styles.active}
        to={routeNames.movieWatchlist}
      >
        Watchlist
      </NavLink>
    </div>
  );
};
export default SideBar;
