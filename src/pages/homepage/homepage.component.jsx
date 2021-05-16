import React, { useEffect, useState } from 'react';

import BottomNav from '../../components/common/bottom-nav/bottom-nav.component';
import MainContainer from '../../components/common/main-container/main-container.component';
import AppBar from '../../components/common/appbar/appbar.component';
import ServicesOverviewSection from '../../components/homepage/services-overview-section/services-overview-section.component';

import './homepage.styles.scss';
import { fetchBanners } from '../../providers/services/services.utils';

const Homepage = () => {
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    const getBannersAsync = async () => {
      try {
        let banners = await fetchBanners();
        setBanners(banners);
      } catch (error) {
        console.error(error);
      }
    };

    getBannersAsync();
  }, []);

  console.log(banners);

  return (
    <div className="homepage">
      <AppBar title="home" />
      <MainContainer>
        <ServicesOverviewSection banners={banners} />
      </MainContainer>
      <BottomNav />
    </div>
  );
};

export default Homepage;
