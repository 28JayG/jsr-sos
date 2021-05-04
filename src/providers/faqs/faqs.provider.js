import { createContext } from 'react';

import { fetchFaqs } from './faqs.utils';

export const FaqsContext = createContext();

const FaqsProvider = ({ children }) => {
  return (
    <FaqsContext.Provider value={{ fetchFaqs }}>
      {children}
    </FaqsContext.Provider>
  );
};

export default FaqsProvider;
