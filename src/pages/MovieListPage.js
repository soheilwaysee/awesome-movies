import React, { useCallback } from 'react';
import MovieList from '../components/MovieList';
import useRequest from '../utils/useRequest';
import { getMoviesApiActions } from '../redux/actions';
import get from 'lodash.get';
import Loading from '../components/Loading';
import actionTypes from '../redux/actionTypes';
import EmptyList from '../components/EmptyList';
import useAuth from '../customHooks/useAuth';
import PropTypes from 'prop-types';
import movieTypesPropTypes from '../propTypesCommon/movieTypesPropTypes';
import useMovieAction from '../customHooks/useMovieAction';

const MovieListPage = ({ history, location }) => {
  const { action, resultType } = useMovieAction(
    get(location, ['pathname'], '')
  );
  const { isLoggedIn } = useAuth();
  const isRouteFavORWatchList =
    [
      actionTypes.GET_ACCOUNT_FAVORITE_MOVIES,
      actionTypes.GET_ACCOUNT_WATCHLIST_MOVIES
    ].indexOf(get(action, ['type'])) !== -1;
  const [{ data, loading, uid }, setAction] = useRequest(
    action,
    isRouteFavORWatchList && !isLoggedIn
  );
  const [{ data: favoriteData, uid: favoriteUid }] = useRequest(
    getMoviesApiActions.favorites,
    !isLoggedIn
  );
  const [{ data: watchListData, uid: watchListUid }] = useRequest(
    getMoviesApiActions.watchlist,
    !isLoggedIn
  );
  const favoriteIds = get(favoriteData, ['ids']);
  const watchListIds = get(watchListData, ['ids']);
  const items = get(data, ['items'], []);
  const page = get(data, ['page'], 1);
  const totalPages = get(data, ['total_pages']);
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

  const isEmptyList = !loading && items.length === 0;
  return (
    <>
      {isEmptyList ? (
        <EmptyList show isLoggedIn={isLoggedIn} />
      ) : (
        <MovieList
          uid={uid + favoriteUid + watchListUid}
          favoriteIds={favoriteIds}
          watchListIds={watchListIds}
          type={resultType}
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

MovieListPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      type: movieTypesPropTypes
    })
  })
};

export default MovieListPage;
