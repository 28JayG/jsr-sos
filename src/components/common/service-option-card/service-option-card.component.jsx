import React from 'react';

import CustomCardButton from '../custom-card-button/custom-card-button.component';

import './service-option-card.styles.scss';

const ServiceOptionCard = ({ title, date, verify, direction, contact }) => {
  return (
    <div className="service-card">
      <div className="title-badge-sc">
        <p className="title-sc">Marwari Yuva Manch</p>
        <p className="badge-sc">verified</p>
      </div>
      <p className="date-sc">Verified on: Apr 28, 2021</p>
      <div className="button-sc">
        <CustomCardButton>Get Direction</CustomCardButton>
        <a href="tel:">
          <CustomCardButton filled>Call</CustomCardButton>
        </a>
      </div>
    </div>
  );
};

export default ServiceOptionCard;
