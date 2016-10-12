import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Layout from './components/Layout';
import SearchPage from './components/SearchPage';
import SavedTweets from './components/SavedTweets';


injectTapEventPlugin();

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <Route path='searchPage' component={SearchPage}/>
      <Route path='savedTweets' component={SavedTweets}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
