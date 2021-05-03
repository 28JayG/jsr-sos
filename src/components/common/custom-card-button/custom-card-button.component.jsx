import React from 'react';

import './custom-card-button.styles.scss'

const CustomCardButton = ({ filled, children, ...otherButtonProps }) => {
  return (
    <button
      className={`btn-common-sc ${filled ? 'filled' : ''}`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomCardButton;
