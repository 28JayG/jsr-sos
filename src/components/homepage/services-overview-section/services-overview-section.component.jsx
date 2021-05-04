import React, { useContext } from 'react';
import { ServicesContext } from '../../../providers/services/services.provider';

import AppBar from '../../common/appbar/appbar.component';
import PlasmaDonateBanner from '../plasma-donate-banner/plasma-donate-banner.component';
import ServiceTile from './service-tile/service-tile.component';

import './services-overview-section.styles.scss';

const ServicesOverviewSection = () => {
  const { services, loading } = useContext(ServicesContext);

  return (
    <section className="services-overview-section">
      <PlasmaDonateBanner />
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
