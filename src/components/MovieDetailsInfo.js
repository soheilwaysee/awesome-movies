import React from 'react';
import styles from '../styles/components/MovieDetailsInfo.module.css';
import PropTypes from 'prop-types';

const MovieDetailsInfo = ({ info, title }) =>
  info ? (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      <span className={styles.description}>{info}</span>
    </div>
  ) : null;

MovieDetailsInfo.propTypes = {
  info: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};

export default MovieDetailsInfo;
