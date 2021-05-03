import React, { useContext, useEffect, useState } from 'react';
import { ServicesContext } from '../../../providers/services/services.provider';

import AppBar from '../../common/appbar/appbar.component';
import Loader from '../../common/loader/loader.component';
import ServiceOptionCard from '../../common/service-option-card/service-option-card.component';

import './service-view.styles.scss';

const ServiceView = ({ match }) => {
  const [options, setOptions] = useState(null);
  const { serviceId } = match.params;
  const { loading, getServiceOptions } = useContext(ServicesContext);

  useEffect(() => {
    const fetchOptions = async () => {
      let options = await getServiceOptions(serviceId);
      setOptions(options);
    };

    fetchOptions();
  }, []);

  const title = serviceId.replace(/_/g, ' '); //revse the slugify

  console.log(options)

  return (
    <div className="service">
      {/* subpage show that the current route is a part of some other route */}
      <AppBar title={title} subPage />
      {loading && <Loader type="linear" />}
      <section className="service-options-container">
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <ServiceOptionCard {...option} key={option.id} />
          ))}
      </section>
    </div>
  );
};

export default ServiceView;
