import React, { useContext, useEffect, useState } from 'react';
import { HelplinesContext } from '../../providers/helplines/helplines.provider';

import BottomNav from '../../components/common/bottom-nav/bottom-nav.component';
import AppBar from '../../components/common/appbar/appbar.component';
import Loader from '../../components/common/loader/loader.component';
import ServiceOptionCard from '../../components/common/service-option-card/service-option-card.component';


import './helpline.styles.scss';

const Helpline = () => {
  const [loading, setLoading] = useState(false);
  const [helplines, setHelpLines] = useState(null);
  const { fetchHelplines } = useContext(HelplinesContext);

  useEffect(() => {
    const getHelplinesAsync = async () => {
      setLoading(true);
      try {
        let helplines = await fetchHelplines();
        setHelpLines(helplines);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getHelplinesAsync();
  }, []);

  return (
    <div className="helplines-page">
      <AppBar title="helplines" />
      {loading && <Loader type="linear" />}

      <section className="helplines-container">
        {helplines &&
          helplines.length > 0 &&
          helplines.map((helpline) => {
            return (
              <ServiceOptionCard
                {...helpline}
                hideDirection
                key={helpline.id}
              />
            );
          })}
      </section>

      <BottomNav />
    </div>
  );
};

export default Helpline;
