import React from 'react';
import BottomNav from '../../components/common/bottom-nav/bottom-nav.component';
import FaqToggle from '../../components/common/faq-toggle/faq-toggle.component';

import ServicesOverviewSection from '../../components/homepage/services-overview-section/services-overview-section.component';

import './homepage.styles.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <ServicesOverviewSection />
      <FaqToggle/>
      <BottomNav/>
    </div>
  );
};

export default Homepage;
