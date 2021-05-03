import React from 'react';
import './bottom-nav.styles.scss';
import { bottomNavRoutes } from '../../../constants/routes';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="bottom-nav-wrapper">
      <div className="bottom-nav">
        {Object.values(bottomNavRoutes).map((navRoute) => {
          return (
            <NavLink
              to={navRoute.route}
              className="nav-link"
              activeClassName='nav-link active'
              exact
              key={navRoute.title}
            >
              {/* icon will go here */}
              {navRoute.icon({})}
              <p className="text-bn">{navRoute.title}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
