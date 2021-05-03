import React from 'react';

import ServicesOverviewSection from '../../components/homepage/services-overview-section/services-overview-section.component';

import './homepage.styles.scss';

const Homepage = ({ match }) => {
  return (
    <div className="homepage">
      <ServicesOverviewSection />
    </div>
  );
};

export default Homepage;
