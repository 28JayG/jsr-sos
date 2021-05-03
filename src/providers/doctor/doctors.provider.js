import { createContext } from 'react';
import { fetchDoctors as fetchDoctorsCollection } from './doctors.utils';

export const DoctorsContext = createContext({ fetchDoctors: () => {} });

const DoctorsProvider = ({ children }) => {
  const fetchDoctors = async () => {
    try {
      const doctors = await fetchDoctorsCollection();
      return doctors;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DoctorsContext.Provider value={{ fetchDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
};

export default DoctorsProvider;
