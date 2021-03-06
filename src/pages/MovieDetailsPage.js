import React, { useEffect, useMemo } from 'react';
import MovieDetails from '../components/MovieDetails';
import { getMovieApiAction, getMoviesApiActions } from '../redux/actions';
import useRequest from '../utils/useRequest';
import get from 'lodash.get';
import useAuth from '../customHooks/useAuth';
import routerPropTypes from '../propTypesCommon/routerPropTypes';

const MovieDetailsPage = ({
  match: {
    params: { id }
  }
}) => {
  const action = useMemo(() => getMovieApiAction(id), [id]);
  const [{ data, uid }, setAction] = useRequest(action);
  const { isLoggedIn } = useAuth();
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

  const dataId = get(data, ['id']);
  const isFavorited = get(favoriteIds, [dataId]);
  const isWatchListed = get(watchListIds, [dataId]);

  useEffect(() => {
    setAction(() => action);
  }, [action, id, setAction]);

  return (
    <MovieDetails
      uid={uid + favoriteUid + watchListUid}
      isFavorited={isFavorited}
      isWatchListed={isWatchListed}
      data={data}
    />
  );
};

MovieDetailsPage.propTypes = {
  match: routerPropTypes.match
};
export default MovieDetailsPage;
