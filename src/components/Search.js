import React, { useState, useRef, useMemo, useCallback } from "react";
import debounce from "../utils/debounce";
import useRequest from "../utils/useRequest";
import { withRouter } from "react-router-dom";
import Image from "./Image";
import get from "lodash.get";
import styles from "../styles/components/Search.module.css";
import { getSearchData } from "../redux/actions";

const Search = ({ history }) => {
  const inputRef = useRef();
  const action = useMemo(() => getSearchData(), []);
  const [{ data }, setAction] = useRequest(action, true);
  const [showClearBtn, setShowClearBtn] = useState(false);
  const onChange = useCallback(debounce(value => {
    if (value) {
      setShowClearBtn(true);
    } else {
      setShowClearBtn(false);
    }
    if (value) {
      setAction(({ params }) => ({ params: { ...params, query: value } }));
    }
  }, 400), []);
  const [showHistory, setShowHistory] = useState(false);
  const onChangeHandler = event => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  const clearValue = useCallback(() => {
    onChange("");
    inputRef.current.value = "";
  }, [onChange]);
  const showDetailsHandler = useCallback((id) => () => {
    clearValue()
    setShowHistory(false);
    history.push(`/details/${id}`);
  }, [clearValue, history])
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
        <ul className={styles.suggestionWrapper}>
          {get(data, ["results"], [])
            .slice(0, 6)
            .map(({ poster_path, title, id, release_date }) => (
              <button
                key={id}
                type="button"
                className={styles.link}
                onClick={showDetailsHandler(id)}
              >
                <li key={id} className={styles.suggestionItemWrapper}>
                  <Image
                    src={poster_path}
                    className={styles.suggestionItemImage}
                  />
                  <ul className={styles.infoWrapper}>
                    <li className={styles.infoWrapperItem}>{title}</li>
                    <li className={styles.infoWrapperItem}>{release_date}</li>
                  </ul>
                </li>
              </button>
            ))}
        </ul>
      )}
    </li>
  );
};

export default withRouter(Search);
