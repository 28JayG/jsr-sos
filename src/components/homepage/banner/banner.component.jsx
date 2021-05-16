import React from 'react';

import BannerCallToAction from '../../common/banner-call-to-action/banner-call-to-action.component';

import './banner.styles.scss';

const Banner = ({ bgImage, href, ctaText, ctaColor }) => {
  return (
    <section
      className="plasma-donation-banner"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <a href={href} className="call-to-action">
        <BannerCallToAction style={{ backgroundColor: ctaColor }}>
          {ctaText}
        </BannerCallToAction>
      </a>
    </section>
  );
};

export default Banner;
