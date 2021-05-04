// all the provider will wrap this component
import { SnackbarProvider } from 'notistack';
import DoctorsProvider from './doctor/doctors.provider';
import FaqsProvider from './faqs/faqs.provider';
import ServicesProvider from './services/services.provider';

const RootProvider = ({ children }) => {
  return (
    <SnackbarProvider>
      <DoctorsProvider>
        <FaqsProvider>
          <ServicesProvider>{children}</ServicesProvider>
        </FaqsProvider>
      </DoctorsProvider>
    </SnackbarProvider>
  );
};

export default RootProvider;
