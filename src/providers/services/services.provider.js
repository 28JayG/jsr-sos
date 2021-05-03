import { createContext, useEffect, useState } from 'react';
import { fetchServicesAsync } from './services.utils';

export const ServicesContext = createContext({
  loading: false,
  toggleLoading: () => {},
  services: null,
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

  return (
    <ServicesContext.Provider value={{ services, loading, toggleLoading }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServiceProvider;
