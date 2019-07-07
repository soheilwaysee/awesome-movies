import { showToast, updateId, getTokenAction } from '../../redux/actions';
import actionTypes from '../../redux/actionTypes';
import getMockStore from '../testUtils/getMockStore';
import mock from '../testUtils/mock';

describe('sync actions', () => {
  it('Toast action success', () => {
    const toastMessage = 'Success toast message';
    const expectedSuccessAction = {
      type: actionTypes.SHOW_TOAST,
      success: true,
      message: toastMessage
    };
    const showToastSuccess = showToast({
      message: toastMessage,
      success: true
    });
    expect(showToastSuccess).toEqual(expectedSuccessAction);
  });

  it('Toast action error', () => {
    const toastMessage = 'Error toast message';
    const expectedSuccessAction = {
      type: actionTypes.SHOW_TOAST,
      error: true,
      message: toastMessage
    };
    const showToastSuccess = showToast({ message: toastMessage, error: true });
    expect(showToastSuccess).toEqual(expectedSuccessAction);
  });

  it('updateId inactive action', () => {
    const typeName = actionTypes.GET_ACCOUNT_FAVORITE_MOVIES;
    const active = false;
    const id = 1188888;
    const expectedSuccessAction = {
      type: actionTypes.UPDATE_ID,
      typeName,
      active,
      id
    };
    const inactiveAction = updateId({ id, active, typeName });
    expect(inactiveAction).toEqual(expectedSuccessAction);
  });
});

describe('async actions', () => {
  afterEach(() => {
    // mock.restore();
  });
  it('creates action getTokenAction', () => {
    const store = getMockStore();
    mock.onGet('/authentication/token/new').replyOnce(200, {
      success: true,
      expires_at: '2016-08-26 17:04:39 UTC',
      request_token: 'ff5c7eeb5a8870efe3cd7fc5c282cffd26800ecd'
    });

    const expectedActions = [
      {
        type: 'GET_AUTHENTICATION_TOKEN_NEW',
        method: 'get',
        url: '/authentication/token/new',
        data: {
          success: true,
          expires_at: '2016-08-26 17:04:39 UTC',
          request_token: 'ff5c7eeb5a8870efe3cd7fc5c282cffd26800ecd'
        }
      }
    ];

    return store.dispatch(getTokenAction).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
