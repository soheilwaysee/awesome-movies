import actionTypes from './actionTypes';
import get from 'lodash.get';

const addIdsObject = data => {
  const ids = get(data, ['results'], []).reduce(
    (result, item) => ({ ...result, [item.id]: true }),
    {}
  );
  return {
    ...data,
    ids
  };
};
const normalizers = {
  [actionTypes.GET_ACCOUNT_FAVORITE_MOVIES]: addIdsObject,
  [actionTypes.GET_ACCOUNT_WATCHLIST_MOVIES]: addIdsObject
};

export default normalizers;
