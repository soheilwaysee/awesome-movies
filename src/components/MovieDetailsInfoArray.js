import React from 'react';
import styles from '../styles/components/MovieDetailsInfoArray.module.css';
import classNamesJoiner from '../utils/classNamesJoiner';
import PropTypes from 'prop-types';
import get from 'lodash.get';

const MovieDetailsInfoArray = ({ info, title, wrapperClassName }) =>
  get(info, ['length']) ? (
    <div className={classNamesJoiner([styles.wrapper, wrapperClassName])}>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.description}>
        {info.map(({ name }) => name).join(', ')}
      </span>
    </div>
  ) : null;

MovieDetailsInfoArray.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  title: PropTypes.string,
  wrapperClassName: PropTypes.string
};

export default MovieDetailsInfoArray;
