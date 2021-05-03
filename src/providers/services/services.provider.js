import { createContext, useEffect, useState } from 'react';
import { fetchServiceOptions, fetchServicesAsync } from './services.utils';

export const ServicesContext = createContext({
  loading: false,
  toggleLoading: () => {},
  services: null,
  getServiceOptions: () => {},
});

const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const toggleLoading = (value) => setLoading(value);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        //set loading true before fetching
        setLoading(true);
        const servicesMap = await fetchServicesAsync();
        //set fetches and manipulated services
        setServices(servicesMap);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    //call fetching services
    fetchServices();
  }, []);

  const getServiceOptions = async (serviceId) => {
    //set loading true before fetching
    setLoading(true);
    
    try {
      const serviceOptions = await fetchServiceOptions(serviceId);
      return serviceOptions;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (

    <ServicesContext.Provider value={{ services, loading, toggleLoading, getServiceOptions }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServiceProvider;
