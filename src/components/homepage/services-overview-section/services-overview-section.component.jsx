import React from 'react';
import { SERVICES } from '../../../data/services';
import AppBar from '../../common/appbar/appbar.component';
import PlasmaDonateBanner from '../plasma-donate-banner/plasma-donate-banner.component';
import ServiceTile from './service-tile/service-tile.component';

import './services-overview-section.styles.scss';

const ServicesOverviewSection = () => {
  const services = SERVICES;

  return (
    <section className="services-overview-section">
      <AppBar title="home" />
      <PlasmaDonateBanner />
      <div className="services">
        {Object.values(services).map((service) => (
          <ServiceTile {...service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
