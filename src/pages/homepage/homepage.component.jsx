import React from 'react';

import BottomNav from '../../components/common/bottom-nav/bottom-nav.component';
import MainContainer from '../../components/common/main-container/main-container.component';
import AppBar from '../../components/common/appbar/appbar.component';
import ServicesOverviewSection from '../../components/homepage/services-overview-section/services-overview-section.component';

import './homepage.styles.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <AppBar title="home" />
      <MainContainer>
        <ServicesOverviewSection />
      </MainContainer>
      <BottomNav />
    </div>
  );
};

export default Homepage;
