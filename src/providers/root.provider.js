// all the provider will wrap this component
import { SnackbarProvider } from 'notistack';
import DoctorsProvider from './doctor/doctors.provider';
import HelplinesProvider from './helplines/helplines.provider';
import ServicesProvider from './services/services.provider';

const RootProvider = ({ children }) => {
  return (
    <SnackbarProvider>
      <DoctorsProvider>
        <HelplinesProvider>
          <ServicesProvider>{children}</ServicesProvider>
        </HelplinesProvider>
      </DoctorsProvider>
    </SnackbarProvider>
  );
};

export default RootProvider;
