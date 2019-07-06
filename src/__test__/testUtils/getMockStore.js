import configureMockStore from 'redux-mock-store'
import fetchReduxMiddleware from '../../redux/fetchReduxMiddleware';
import actionTypes from '../../redux/actionTypes';

const middlewares = [fetchReduxMiddleware]
const mockStore = configureMockStore(middlewares);
const getMockStore = () => mockStore({
    apiData: {
      [actionTypes.POST_AUTHENTICATION_SESSION_NEW]: {
        session_id: 'efe3cd7fc5c282cffd26800e'
      }
    }
  });


  export default getMockStore;