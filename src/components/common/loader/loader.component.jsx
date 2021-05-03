import React from 'react';

import './loader.styles.scss';

const Loader = ({ type }) => {
  const selectLoader = (type) => {
    switch (type) {
      case 'linear':
        return (
          <div className="linear-loader-wrapper">
            <div className="linear-loader" />
          </div>
        );

      default:
        return;
    }
  };
  return selectLoader(type);
};

export default Loader;
