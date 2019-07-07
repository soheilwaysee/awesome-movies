import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import actionTypes from '../redux/actionTypes';
import { setItemLocalStorage } from '../utils/localStorage';
import get from 'lodash.get';
import routerPropTypes from '../propTypesCommon/routerPropTypes';

const Auth = ({ location }) => {
  const params = new URLSearchParams(get(location, ['search']));
  const requestToken = params.get('request_token');
  const denied = params.get('denied');
  const reduxDispatch = useDispatch();
  useEffect(() => {
    if (!requestToken || denied) {
      return undefined;
    }
    reduxDispatch({
      type: actionTypes.POST_AUTHENTICATION_SESSION_NEW,
      method: 'post',
      url: '/authentication/session/new',
      data: {
        request_token: requestToken
      }
    }).then(({ data }) => {
      setItemLocalStorage('session_id', data.session_id);
    });
  }, [denied, reduxDispatch, requestToken]);

  return null;
};

Auth.propTypes = {
  location: routerPropTypes.location
};

export default withRouter(Auth);
