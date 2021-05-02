import React from 'react';

import './banner-call-to-action.styles.scss';

const BannerCallToAction = ({ children, ...otherButtonProps }) => {
  /* otherProps => some regular button attributes,
    in other it micks a regular button */

  return (
    <button className=" banner-cta" {...otherButtonProps}>
      {children}
    </button>
  );
};

export default BannerCallToAction;
