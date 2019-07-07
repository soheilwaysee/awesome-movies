import React from "react";
import config from "../config";
import PropTypes from 'prop-types'

const Image = ({ alt, src, className }) => (
  <img
    {...(src
      ? { src: `${config.IMAGE_BASE_URL}${src}` }
      : { src: "/images/placeholder.png" })}
    data-testid="image"
    alt={alt}
    className={className}
  />
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string
};

export default Image;
