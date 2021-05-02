import { InternalRoutes } from './constants/routes';

import { Route, Switch } from 'react-router';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <Switch>
      <Route path={InternalRoutes.HOME} exact component={Homepage} />
    </Switch>
  );
}

export default App;
