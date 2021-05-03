import React from 'react';
import { Link } from 'react-router-dom';
import { InternalRoutes } from '../../../../constants/routes';

import './service-tile.styles.scss';

const ServiceTile = ({ iconUrl, title, routeName }) => (
  <Link to={`${InternalRoutes.SERVICES}/${routeName}`} className="service-tile">
    {/*icon */}
    <div className="icon" style={{ backgroundImage: `url(${iconUrl})` }} />
    <h4 className="title">{title}</h4>
  </Link>
);

export default ServiceTile;
