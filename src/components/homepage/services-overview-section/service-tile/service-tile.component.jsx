import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './service-tile.styles.scss';

const ServiceTile = ({ iconUrl, title, routeName, match }) => (
  <Link to={`${match.url}${routeName}`} className="service-tile">
    {/*icon */}
    <div className="icon" style={{ backgroundImage: `url(${iconUrl})` }} />
    <h4 className="title">{title}</h4>
  </Link>
);

export default withRouter(ServiceTile);
