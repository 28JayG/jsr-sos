import React, { useContext, useEffect, useState } from 'react';
import { DoctorsContext } from '../../providers/doctor/doctors.provider';

import AppBar from '../../components/common/appbar/appbar.component';
import BottomNav from '../../components/common/bottom-nav/bottom-nav.component';
import MainContainer from '../../components/common/main-container/main-container.component';
import Loader from '../../components/common/loader/loader.component';
import ServiceOptionCard from '../../components/common/service-option-card/service-option-card.component';

import './doctors.styles.scss';

const Doctors = () => {
  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState(null);
  const { fetchDoctors } = useContext(DoctorsContext);

  useEffect(() => {
    const getDoctorsAsync = async () => {
      setLoading(true);
      try {
        let doctors = await fetchDoctors();
        setDoctors(doctors);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getDoctorsAsync();
  }, []);

  return (
    <div className="doctors-page">
      <AppBar title="Doctors" />
      
      <MainContainer>
        {loading && <Loader type="linear" />}
        <section className="doctors-container">
          {doctors &&
            doctors.length > 0 &&
            doctors.map((doctor) => {
              return (
                <ServiceOptionCard
                  {...doctor}
                  hideDirection
                  key={doctor.name}
                />
              );
            })}
        </section>
      </MainContainer>

      <BottomNav />
    </div>
  );
};

export default Doctors;
