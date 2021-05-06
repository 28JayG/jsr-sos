import React, { useState } from 'react';
import { bottomNavRoutes, ExternalLinks } from '../../../constants/routes';

import CustomNavLink from './nav-link/nav-link.component';
import {IconPhone} from '@tabler/icons'
import { Dialog, DialogTitle } from '@material-ui/core';

import './bottom-nav.styles.scss';
const BottomNav = () => {
  const [dailogOpen, setOpen] = useState(false);
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
        <div onClick={() => setOpen(true)} className="nav-link">
          {helpline.icon()}
          <p className="text-bn">{helpline.title}</p>
        </div>
      </div>

      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="dailog-title"
        open={dailogOpen}
      >
        <DialogTitle id="dailog-title">East Singhbhum Helpline:</DialogTitle>
        <a href={`tel:${ExternalLinks.HELPLINE_NUMBER}`} className="phone-bn">
          {ExternalLinks.HELPLINE_NUMBER}
          <IconPhone />
        </a>
      </Dialog>
    </div>
  );
};

export default BottomNav;
