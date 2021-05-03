import { InternalRoutes } from './constants/routes';

import { Route, Switch } from 'react-router';
import Homepage from './pages/homepage/homepage.component';
import Doctors from './pages/doctor/doctors.component';
import Faqpage from './pages/faqpage/faqpage.component';
import ServiceView from './components/homepage/service-view/service-view.component';
import Helpline from './pages/helpline/helpline.component';

function App() {
  return (
    <Switch>
      <Route path={InternalRoutes.HOME} exact component={Homepage} />
      <Route path={InternalRoutes.DOCTOR} component={Doctors} />
      <Route
        path={`${InternalRoutes.SERVICES}/:serviceId`}
        component={ServiceView}
      />
      <Route path={InternalRoutes.FAQS} exact component={Faqpage} />
      <Route path={InternalRoutes.HELPLINE} component={Helpline} />
    </Switch>
  );
}

export default App;
