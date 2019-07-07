import actionTypes from '../redux/actionTypes';
import {
  addToFavAction,
  addToWatchListAction,
  getMoviesApiActions,
  updateId
} from '../redux/actions';

const useAddListClickHandler = ({
  isWatchListed,
  isFavorited,
  id,
  reduxDispatch
}) => type => clickEvent => {
  clickEvent.stopPropagation();
  const isFavorite = type === 'favorite';
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

export default useAddListClickHandler;
