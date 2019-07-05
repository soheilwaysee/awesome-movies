import React, { useCallback, useMemo } from "react";
import MovieList from "../components/MovieList";
import useRequest from "../utils/useRequest";
import { getMoviesApiActions } from "../redux/actions";
import get from "lodash.get";
import { Redirect } from "react-router-dom";
import routeNames from "../constants/routeNames";
import Loading from "../components/Loading";
import actionTypes from "../redux/actionTypes";
import { useSelector } from "react-redux";
import isLoginCheck from "../utils/isLoginCheck";
import ListEmpty from "../components/ListEmpty";

const MovieListPage = ({
  match: {
    params: { type = "now_playing" }
  },
  history
}) => {
  const action = useMemo(() => get(getMoviesApiActions, [type]), [type]);
  const isLogin = useSelector(isLoginCheck);
  const isRouteFavORWatchList =
    [
      actionTypes.GET_ACCOUNT_FAVORITE_MOVIES,
      actionTypes.GET_ACCOUNT_WATCHLIST_MOVIES
    ].indexOf(action.type) !== -1;
  const [{ data, loading, uid }, setAction] = useRequest(
    action,
    undefined,
    isRouteFavORWatchList && !isLogin
  );
  const [{ data: favoriteData, uid: favoriteUid }] = useRequest(
    getMoviesApiActions.favorites,
    undefined,
    !isLogin
  );
  const [{ data: watchListData, uid: watchListUid }] = useRequest(
    getMoviesApiActions.watchlist,
    undefined,
    !isLogin
  );
  const favoriteIds = get(favoriteData, ["ids"]);
  const watchListIds = get(watchListData, ["ids"]);
  const items = get(data, ["items"], []);
  const page = get(data, ["page"], 1);
  const totalPages = get(data, ["total_pages"]);
  const isLastPage = totalPages === undefined || page >= totalPages;

  const onEndReached = useCallback(() => {
    if (isLastPage) {
      return undefined;
    }
    setAction(({ params }) => ({ params: { ...params, page: page + 1 } }));
  }, [isLastPage, page, setAction]);

  const showDetailsHandler = useCallback(
    id => {
      history.push(`/details/${id}`);
    },
    [history]
  );

  const isListEmpty = !loading && items.length === 0;
  return !action ? (
    <Redirect to={routeNames.homePage} />
  ) : (
    <>
      {isListEmpty ? (
        <ListEmpty show isLogin={isLogin} />
      ) : (
        <MovieList
          uid={uid + favoriteUid + watchListUid}
          favoriteIds={favoriteIds}
          watchListIds={watchListIds}
          type={type}
          items={items}
          showDetailsHandler={showDetailsHandler}
          isLastPage={isLastPage}
          onEndReached={onEndReached}
        />
      )}

      <Loading show={loading} />
    </>
  );
};

export default MovieListPage;
