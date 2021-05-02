import React from 'react';

import BannerCallToAction from '../../common/banner-call-to-action/banner-call-to-action.component';

import './plasma-donate-banner.styles.scss';

const PlasmaDonateBanner = () => {
  return (
    <section className="plasma-donation-banner">
      <a href="" className="call-to-action">
        <BannerCallToAction>Donate</BannerCallToAction>
      </a>
    </section>
  );
};

export default PlasmaDonateBanner;
