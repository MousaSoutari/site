import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import Home from './containers/HomeContainer';
import Repl from './containers/ReplContainer';

const createRoutes = () => (
  <div>
    <Route path={`${process.env.PUBLIC_URL}/repl`} component={Repl} />
    <Route path={`${process.env.PUBLIC_URL}/`} component={App}>
      <IndexRedirect to="home" />
      <Route path="home" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </div>
);

export default createRoutes;
