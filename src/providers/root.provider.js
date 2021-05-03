// all the provider will wrap this component
import { SnackbarProvider } from 'notistack';
import ServicesProvider from './services/services.provider'

const RootProvider = ({ children }) => {
  return (
    <SnackbarProvider>
      <ServicesProvider>{children}</ServicesProvider>
    </SnackbarProvider>
  );
};

export default RootProvider;
