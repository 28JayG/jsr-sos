import React from 'react';
import Logo from '../../assets/app-icon.png';

import './splash-screen.styles.scss';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={Logo} alt="" width="200" height="200" />
    </div>
  );
};

export default SplashScreen;
