import React from "react";
import config from "../config";

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

export default Image;
