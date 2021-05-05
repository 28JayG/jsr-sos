import React, { useState } from 'react';
import moment from 'moment';

import CustomCardButton from '../custom-card-button/custom-card-button.component';

import { Dialog, DialogTitle } from '@material-ui/core';
import GetDirections from './get-directions/get-directions.component';

import './service-option-card.styles.scss';
import { checkPhoneNumberNotEmpty } from '../../../utils/utils';
import { IconPhone } from '@tabler/icons';

const ServiceOptionCard = ({
  id,
  name,
  is_verified,
  verification_date,
  phone_number,
  address,
  hideDirection,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="service-card">
        <div className="title-badge-sc">
          <p className="title-sc">{name}</p>
          {is_verified && <p className="badge-sc">verified</p>}
        </div>
        <p className="date-sc">
          Verified on:{' '}
          {moment(verification_date.toDate()).format('MMM DD, YYYY')}
        </p>
        <div className="button-sc">
          {!hideDirection && address && <GetDirections destination={address} />}
          {checkPhoneNumberNotEmpty(phone_number) > 0 && (
            <CustomCardButton onClick={() => setOpen(true)} filled>
              Call
            </CustomCardButton>
          )}
        </div>
      </div>

      {/* //phone number dailog */}
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="dailog-title"
        open={open}
      >
        {phone_number.map((number) => (
          <a href={`tel:${number}`} className="phone-sc" key={number}>
            {number}
            <IconPhone />
          </a>
        ))}
      </Dialog>
    </>
  );
};

export default ServiceOptionCard;
