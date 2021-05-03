import { createContext } from 'react';
import { fetchHelplines } from './helplines.utils';

export const HelplinesContext = createContext();

const HelplinesProvider = ({ children }) => {
  return (
    <HelplinesContext.Provider value={{ fetchHelplines }}>
      {children}
    </HelplinesContext.Provider>
  );
};

export default HelplinesProvider;
