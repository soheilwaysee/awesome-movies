import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash.get';
import useIsComponentUnmounted from '../customHooks/useIsComponentUnmounted';
import getKey from './getKey';

const useRequest = (action, notRequest) => {
  const isUnmounted = useIsComponentUnmounted();

  const [requestStatus, setRequestStatus] = useState({});

  const reduxDispatch = useDispatch();

  const getData = useCallback(
    action => {
      if (isUnmounted.current) {
        return undefined;
      }
      setRequestStatus({ loading: true });
      return reduxDispatch(action)
        .then(() => {
          if (isUnmounted.current) {
            return undefined;
          }
          setRequestStatus({ loading: false, uid: getKey() });
        })
        .catch(() => {
          if (isUnmounted.current) {
            return undefined;
          }
          setRequestStatus({ loading: false, error: true, uid: getKey() });
        });
    },
    [isUnmounted, reduxDispatch]
  );

  const setAction = useCallback(
    callback => {
      const resultAction = callback(action);
      getData({
        ...action,
        ...resultAction,
        type: action.type
      });
    },
    [action, getData]
  );
  const data = useSelector(state =>
    get(state, ['apiData', get(action, ['type'])])
  );
  const dataUid = get(data, ['uid']);

  useEffect(() => {
    setRequestStatus(prevStatus => ({ ...prevStatus, uid: getKey() }));
  }, [dataUid]);

  const notApiRequest = notRequest || data;
  useEffect(() => {
    if (notApiRequest) {
      return undefined;
    }
    getData(action);
  }, [action, getData, reduxDispatch, notRequest, notApiRequest, data]);

  return [{ data, ...requestStatus }, setAction];
};

export default useRequest;
