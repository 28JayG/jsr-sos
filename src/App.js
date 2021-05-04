import { useEffect, useState } from 'react';
import { InternalRoutes } from './constants/routes';

import { Route, Switch } from 'react-router';
import Homepage from './pages/homepage/homepage.component';
import Doctors from './pages/doctor/doctors.component';
import FaqsPage from './pages/faqpage/faqpage.component';
import ServiceView from './components/homepage/service-view/service-view.component';
import SplashScreen from './pages/splash-scren/splash-screen.component';

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 500);
  }, []);

  if (splash) return <SplashScreen />;

  return (
    <Switch>
      <Route path={InternalRoutes.HOME} exact component={Homepage} />
      <Route path={InternalRoutes.DOCTOR} component={Doctors} />
      <Route
        path={`${InternalRoutes.SERVICES}/:serviceId`}
        component={ServiceView}
      />
      <Route path={InternalRoutes.FAQS} exact component={FaqsPage} />
    </Switch>
  );
}

export default App;
