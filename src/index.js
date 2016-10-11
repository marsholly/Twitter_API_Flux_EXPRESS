import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//
// import Welcome from './components/Welcome';
// import Navbar from './components/Navbar';
import Layout from './components/Layout';
// import FavoriteYelp from './components/FavoriteYelp';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
    </Route>
  </Router>,
  document.getElementById('root')
)
