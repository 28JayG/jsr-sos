import { InternalRoutes } from './constants/routes';

import { Route, Switch } from 'react-router';
import Homepage from './pages/homepage/homepage.component';
import Doctors from './pages/doctor/doctors.component';
import ServiceView from './components/homepage/service-view/service-view.component';

function App() {
  return (
    <Switch>
      <Route path={InternalRoutes.HOME} exact component={Homepage} />
      <Route path={InternalRoutes.DOCTOR} component={Doctors} />
      <Route
        path={`${InternalRoutes.SERVICES}/:serviceId`}
        component={ServiceView}
      />
    </Switch>
  );
}

export default App;
