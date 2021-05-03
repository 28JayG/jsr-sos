import React from 'react';
import { Link } from 'react-router-dom';

import './service-tile.styles.scss';

const ServiceTile = ({ iconUrl, title, route }) => {
  return (
    <Link to={`${route}`} className="service-tile">
      {/*icon */}
      <div className="icon" style={{ backgroundImage: `url(${iconUrl})` }} />
      <h4 className="title">{title}</h4>
    </Link>
  );
};

export default ServiceTile;
