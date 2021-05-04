import React from 'react';
import './bottom-nav.styles.scss';
import { bottomNavRoutes, ExternalLinks } from '../../../constants/routes';
import CustomNavLink from './nav-link/nav-link.component';

const BottomNav = () => {
  const { helpline, home, faqs, doctor } = bottomNavRoutes;

  return (
    <div className="bottom-nav-wrapper">
      <div className="bottom-nav">
        {/* home link */}
        <CustomNavLink title={home.title} icon={home.icon()} to={home.route} />
        {/* doctors link */}
        <CustomNavLink
          title={doctor.title}
          icon={doctor.icon()}
          to={doctor.route}
        />
        {/* faqs link */}
        <CustomNavLink title={faqs.title} icon={faqs.icon()} to={faqs.route} />
        {/* helpline caller link */}
        <a href={`tel:${ExternalLinks.HELPLINE_NUMBER}`} className="nav-link">
          {helpline.icon()}
          <p className="text-bn">{helpline.title}</p>
        </a>
      </div>
    </div>
  );
};

export default BottomNav;

