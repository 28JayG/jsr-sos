import React from 'react';
import { ExternalLinks, ImagesLinks } from '../../../constants/routes';

import BannerCallToAction from '../../common/banner-call-to-action/banner-call-to-action.component';

import './plasma-donate-banner.styles.scss';

const PlasmaDonateBanner = () => {
  return (
    <section
      className="plasma-donation-banner"
      style={{ backgroundImage: `url(${ImagesLinks.PLASMA_DONATE_IMAGE_URL})` }}
    >
      <a
        href={ExternalLinks.PLASMA_DONATE_FORM_LINK}
        className="call-to-action"
      >
        <BannerCallToAction>Donate</BannerCallToAction>
      </a>
    </section>
  );
};

export default PlasmaDonateBanner;
