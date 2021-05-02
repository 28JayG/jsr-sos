import { InternalRoutes } from './constants/routes';

import { Route, Switch } from 'react-router';
import AppBar from './components/common/appbar/appbar.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <AppBar />
      <Switch>
        <Route path={InternalRoutes.HOME} exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
