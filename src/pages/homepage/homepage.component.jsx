import React from 'react';

import { Route, Switch } from 'react-router';
import ServicesOverviewSection from '../../components/homepage/services-overview-section/services-overview-section.component';

import './homepage.styles.scss';

const Homepage = ({ match }) => {
  return (
    <div className="homepage">
      <Switch>
        {/* uses the path from the url
        (match property tells everything about url) */}
        <Route exact path={match.path} component={ServicesOverviewSection} />
        <Route path={`${match.path}/:servieId`} />
      </Switch>
    </div>
  );
};

export default Homepage;
