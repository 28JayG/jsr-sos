import React from 'react';
import BottomNav from '../../components/common/bottom-nav/bottom-nav.component';
import FaqToggle from '../../components/common/faq-toggle/faq-toggle.component';
import Appbar from '../../components/common/appbar/appbar.component'

import './faqpage.styles.scss';

const Faqpage = () => {
  return (
    <div className="faqpage">
      <Appbar title="FAQ" />
      <FaqToggle/>
      <BottomNav/>
    </div>
  );
};

export default Faqpage;
