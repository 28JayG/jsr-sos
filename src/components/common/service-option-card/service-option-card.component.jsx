import React from 'react';
import moment from 'moment';

import CustomCardButton from '../custom-card-button/custom-card-button.component';

import './service-option-card.styles.scss';

const ServiceOptionCard = ({
  id,
  name,
  is_verified,
  verification_date,
  phone_number,
  hideDirection,
}) => {
  return (
    <div className="service-card">
      <div className="title-badge-sc">
        <p className="title-sc">{name}</p>
        {is_verified && <p className="badge-sc">verified</p>}
      </div>
      <p className="date-sc">
        Verified on: {moment(verification_date.toDate()).format('MMM DD, YYYY')}
      </p>
      <div className="button-sc">
        {!hideDirection && <CustomCardButton>Get Direction</CustomCardButton>}
        {phone_number.length > 0 && (
          <a href={`tel:${phone_number[0]}`}>
            <CustomCardButton filled>Call</CustomCardButton>
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceOptionCard;
