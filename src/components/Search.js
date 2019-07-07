import React, { useState, useRef, useMemo, useCallback } from 'react';
import debounce from '../utils/debounce';
import useRequest from '../utils/useRequest';
import { withRouter } from 'react-router-dom';
import get from 'lodash.get';
import styles from '../styles/components/Search.module.css';
import { getSearchData } from '../redux/actions';
import routerPropTypes from '../propTypesCommon/routerPropTypes';
import SearchHistory from './SearchHistory';

const Search = ({ history }) => {
  const inputRef = useRef();
  const action = useMemo(() => getSearchData(), []);
  const [{ data }, setAction] = useRequest(action, true);
  const [showClearBtn, setShowClearBtn] = useState(false);
  const onChange = useCallback(
    debounce(value => {
      if (value) {
        setShowClearBtn(true);
      } else {
        setShowClearBtn(false);
      }
      if (value) {
        setAction(({ params }) => ({ params: { ...params, query: value } }));
      }
    }, 400),
    []
  );
  const [showHistory, setShowHistory] = useState(false);
  const onChangeHandler = event => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  const clearValue = useCallback(() => {
    onChange('');
    inputRef.current.value = '';
  }, [onChange]);
  const showDetailsHandler = useCallback(
    id => () => {
      clearValue();
      setShowHistory(false);
      history.push(`/details/${id}`);
    },
    [clearValue, history]
  );

  const historyItems = get(data, ['results'], []).slice(0, 6);
  return (
    <li className={styles.wrapper}>
      <input
        onFocus={() => setShowHistory(true)}
        ref={inputRef}
        onChange={onChangeHandler}
        className={styles.input}
        placeholder="Find Movies"
      />
      {showClearBtn && (
        <button onClick={clearValue} className={styles.clear} type="button">
          X
        </button>
      )}
      {showHistory && (
        <SearchHistory
          items={historyItems}
          showDetailsHandler={showDetailsHandler}
        />
      )}
    </li>
  );
};

Search.propTypes = {
  history: routerPropTypes.history
};

export default withRouter(Search);
