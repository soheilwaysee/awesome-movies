import React from 'react';
import Image from './Image';
import styles from '../styles/components/CardImage.module.css';
import iconNames from '../constants/iconNames';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import useAddListClickHandler from '../customHooks/useAddListClickHandler';

const CardImage = ({
  imageClassName,
  imageAlt,
  imageSrc,
  isWatchListed,
  id,
  isFavorited
}) => {
  const reduxDispatch = useDispatch();
  const clickHandler = useAddListClickHandler({
    isWatchListed,
    isFavorited,
    id,
    reduxDispatch
  });

  return (
    <div className={styles.wrapper}>
      <Image className={imageClassName} alt={imageAlt} src={imageSrc} />
      <div className={styles.overlay} />
      <button
        type="button"
        onClick={clickHandler('favorite')}
        className={styles.rightBtn}
      >
        <Icon
          name={iconNames.starActive}
          {...(isFavorited ? { style: { color: 'var(--yellow)' } } : {})}
        />
      </button>
      <button
        onClick={clickHandler('watchlist')}
        type="button"
        className={styles.leftBtn}
      >
        <Icon
          name={iconNames.clock}
          {...(isWatchListed ? { style: { color: 'var(--success)' } } : {})}
        />
      </button>
    </div>
  );
};

CardImage.propTypes = {
  imageClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  isWatchListed: PropTypes.bool,
  id: PropTypes.number,
  isFavorited: PropTypes.bool
};

export default CardImage;
