import React from 'react';
import classNameJoiner from '../utils/classNamesJoiner';
import iconNames from '../constants/iconNames';
import PropTypes from 'prop-types';

const IconNameMapper = {
  [iconNames.spinner]: {
    value: <>&#xe838;</>,
    className: 'icon-spin5 animate-spin'
  },
  [iconNames.starActive]: {
    value: <>&#xe800;</>
  },
  [iconNames.starInactive]: {
    value: <>&#xe801;</>
  },
  [iconNames.clock]: {
    value: <>&#xe802;</>
  },
  [iconNames.downOpen]: {
    value: <>&#xe803;</>
  }
};

const Icon = ({ name, style }) => {
  const { value, className } = IconNameMapper[name];
  return (
    <i
      className={classNameJoiner(['icon', className])}
      {...(style ? { style } : {})}
    >
      {value}
    </i>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  style: PropTypes.shape({
    color: PropTypes.string
  })
};

export default Icon;
