import React, { useContext, useEffect, useState } from 'react';
import { ServicesContext } from '../../../providers/services/services.provider';
import { needDirectionsFor } from '../../../utils/utils';
import AddResources from '../../common/add-resources/add-resources.component';

import AppBar from '../../common/appbar/appbar.component';
import Loader from '../../common/loader/loader.component';
import MainContainer from '../../common/main-container/main-container.component';
import ServiceOptionCard from '../../common/service-option-card/service-option-card.component';
import RegisterForCowin from '../../register-for-cowin/register-for-cowin.component';

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

  return (
    <div className="service">
      {/* subpage show that the current route is a part of some other route */}
      <AppBar title={title} subPage />
      {loading && <Loader type="linear" />}

      <MainContainer>
        <section className="service-options-container">
          <AddResources />
          <div style={{paddingBottom: `25px`}} />
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <ServiceOptionCard {...option} key={option.id} />
            ))}
        </section>
        {serviceId === 'vaccines' && (
          <div className="fb-wrapper">
            <div className="floating-button">
              <RegisterForCowin />
            </div>
          </div>
        )}
      </MainContainer>

    </div>
  );
};

export default ServiceView;
