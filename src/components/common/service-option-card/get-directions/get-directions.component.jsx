import React from 'react';

import CustomCardButton from '../../../common/custom-card-button/custom-card-button.component';

const GetDirections = ({ destination }) => {
  return (
    <form action="http://maps.google.com/maps" method="get" target="_blank">
      <input type="hidden" name="saddr" />
      <input type="hidden" name="daddr" value={destination} />
      <CustomCardButton type="submit">Get Direction</CustomCardButton>
    </form>
  );
};

export default GetDirections;
