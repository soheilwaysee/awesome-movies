import get from 'lodash.get';
import normalizers from '../normalizers';
import getUniqueKey from '../../utils/getUniqueKey';
import actionTypes from '../actionTypes';
import replaceImmutableList from '../../utils/replaceImmutableList';

const setData = (state, action) => {
  const data = get(action, ['data']);
  const page = get(data, ['page']);
  const normalizer = normalizers[action.type];
  const normalizedData = normalizer ? normalizer(data) : data;
  if (!page) {
    return {
      ...state,
      [action.type]: normalizedData,
      uid: getUniqueKey()
    };
  }
  const startIndex = (page - 1) * 20;
  const currentArray = get(state, [action.type, 'items'], []);
  const replaceArray = get(normalizedData, ['results'], []);
  const newItems = replaceImmutableList(
    startIndex,
    currentArray,
    replaceArray,
    20
  );

  return {
    ...state,
    [action.type]: {
      ...normalizedData,
      items: newItems,
      uid: getUniqueKey()
    }
  };
};

const initialState = {};

const apiData = (state = initialState, action = {}) => {
  if (action.method) {
    return setData(state, action);
  }
  switch (action.type) {
    case actionTypes.UPDATE_ID: {
      const typeName = action.typeName;
      const stateTypeName = get(state, [typeName], {});
      return {
        ...state,
        [typeName]: {
          ...state[typeName],
          ids: {
            ...get(stateTypeName, ['ids'], {}),
            [action.id]: action.active
          },
          uid: getUniqueKey()
        }
      };
    }
    default:
      return state;
  }
};

export default apiData;
