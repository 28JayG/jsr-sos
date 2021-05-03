import { createContext } from 'react';

export const ServicesContext = createContext();

const ServiceProvider = ({ chilren }) => {
  return <ServicesContext.Provider>{chilren}</ServicesContext.Provider>;
};

export default ServiceProvider;
