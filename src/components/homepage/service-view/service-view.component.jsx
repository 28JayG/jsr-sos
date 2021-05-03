import React from 'react';

import AppBar from '../../common/appbar/appbar.component';
import ServiceOptionCard from '../../common/service-option-card/service-option-card.component';

import './service-view.styles.scss';

const ServiceView = ({ service, match }) => {
  const title = match.params.serviceId.replace('-', ' ')
    
  return (
    <div className='service'>
      {/* subpage show that the current route is a part of some other route */}
      <AppBar title={title} subPage />
      <section className="service-options-container">
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
        <ServiceOptionCard />
      </section>
    </div>
  );
};

export default ServiceView;
