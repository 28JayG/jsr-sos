// all the provider will wrap this component
import { SnackbarProvider } from 'notistack';
import DoctorsProvider from './doctor/doctors.provider';
import ServicesProvider from './services/services.provider';

const RootProvider = ({ children }) => {
  return (
    <SnackbarProvider>
      <DoctorsProvider>
        <ServicesProvider>{children}</ServicesProvider>
      </DoctorsProvider>
    </SnackbarProvider>
  );
};

export default RootProvider;
