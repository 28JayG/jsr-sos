// all the provider will wrap this component
import { SnackbarProvider } from 'notistack';

const RootProvider = ({ children }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>;
};

export default RootProvider;
