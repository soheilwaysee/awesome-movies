import { getMoviesApiActions } from '../redux/actions';
import get from 'lodash.get';

const useMovieAction = pathname => {
  const defaultType = 'now_playing';
  const splitedPathNameArray = pathname.split('/');
  const resultType = get(splitedPathNameArray, ['2'], defaultType);
  const action = get(getMoviesApiActions, [resultType]);
  return { action, resultType };
};

export default useMovieAction;
