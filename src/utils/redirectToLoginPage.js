import config from '../config';
import get from 'lodash.get';
import { getTokenAction } from '../redux/actions';

const redirectToLoginPage = dispatch =>
  dispatch(getTokenAction).then(({ data }) => {
    const token = get(data, ['request_token']);
    if (token) {
      window.location = `${config.AUTH_URL}/${token}?redirect_to=${window.location.origin}`;
    }
  });

export default redirectToLoginPage;
