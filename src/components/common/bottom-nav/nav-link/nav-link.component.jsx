import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-link.styles.scss';

const CustomNavLink = ({ to, icon, title }) => {
  return (
    <NavLink
      to={to}
      className="cstm-nav-link"
      activeClassName="cstm-nav-link active"
      exact
    >
      {icon && icon}
      <p className="text-bn">{title}</p>
    </NavLink>
  );
};

export default CustomNavLink;
