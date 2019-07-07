import React from 'react';
import styles from '../styles/components/Loading.module.css';
import Icon from './Icon';
import PropTypes from 'prop-types';

const Loading = ({ show }) => {
  return show ? (
    <div id="loading" className={styles.loading}>
      <Icon name="spinner" />
    </div>
  ) : null;
};

Loading.propTypes = {
  show: PropTypes.bool
};

export default Loading;
