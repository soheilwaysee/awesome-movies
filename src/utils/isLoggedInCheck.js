import actionTypes from '../redux/actionTypes';
import get from 'lodash.get';

const isLoggedInCheck = state =>
  Boolean(
    get(state, [
      'apiData',
      actionTypes.POST_AUTHENTICATION_SESSION_NEW,
      'session_id'
    ])
  );

export default isLoggedInCheck;
