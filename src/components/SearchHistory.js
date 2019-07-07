import React from 'react';
import styles from '../styles/components/SearchHistory.module.css';
import Image from './Image';

const SearchHistory = ({ showDetailsHandler, items }) => (
  <ul className={styles.suggestionWrapper}>
    {items.map(({ poster_path, title, id, release_date }) => (
      <button
        key={id}
        type="button"
        className={styles.link}
        onClick={showDetailsHandler(id)}
      >
        <li key={id} className={styles.suggestionItemWrapper}>
          <Image src={poster_path} className={styles.suggestionItemImage} />
          <ul className={styles.infoWrapper}>
            <li className={styles.infoWrapperItem}>{title}</li>
            <li className={styles.infoWrapperItem}>{release_date}</li>
          </ul>
        </li>
      </button>
    ))}
  </ul>
);

export default SearchHistory;
