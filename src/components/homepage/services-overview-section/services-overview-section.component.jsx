import React, { useContext } from 'react';
import { ServicesContext } from '../../../providers/services/services.provider';

import Banner from '../banner/banner.component';
import CustomCarousel from './custom-carousel/custom-carousel.component';
import ServiceTile from './service-tile/service-tile.component';

import './services-overview-section.styles.scss';

const ServicesOverviewSection = ({ banners }) => {
  const { services, loading } = useContext(ServicesContext);

  /* banner structure: link, button_color, button_text, imageUrl */

  return (
    <section className="services-overview-section">
      <CustomCarousel>
        {banners &&
          banners.map(({ id, link, button_color, button_text, imageUrl }) => (
            <Banner
              href={link}
              bgImage={imageUrl}
              ctaText={button_text}
              ctaColor={button_color}
              key={id}
            />
          ))}
      </CustomCarousel>
      <div className="services">
        {!loading &&
          services &&
          Object.values(services).map((service) => (
            <ServiceTile {...service} key={service.id} />
          ))}
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
