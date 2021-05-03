import React from 'react';
import BottomNav from '../../components/common/bottom-nav/bottom-nav.component';

import ServicesOverviewSection from '../../components/homepage/services-overview-section/services-overview-section.component';

import './homepage.styles.scss';

const Homepage = ({ match }) => {
  return (
    <div className="homepage">
      <ServicesOverviewSection />
      <BottomNav/>
    </div>
  );
};

export default Homepage;
