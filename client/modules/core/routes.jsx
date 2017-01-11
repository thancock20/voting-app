import React from 'react';
import {mount} from 'react-mounter';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import PollListScreen from './components/poll_list_screen.jsx';
import PollScreen from './containers/poll_screen.js';
import NewPollForm from './containers/new_poll_form.js';

export default function (injectDeps, {Meteor}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  Meteor.startup ( () => {
    ReactDOM.render(
      (<Router
        history={browserHistory}
        onUpdate={() => {window.scrollTo(0, 0);}}>
        <Route
          path="/"
          component={MainLayoutCtx}>
          <IndexRoute component={Home} />
        </Route>
        <Route
          path="/polls"
          component={MainLayoutCtx}>
          <IndexRoute component={PollListScreen} />
        </Route>
        <Route
          path="/polls/new"
          component={MainLayoutCtx}>
          <IndexRoute component={NewPollForm} />
        </Route>
        <Route
          path="/polls/:pollId"
          component={MainLayoutCtx}>
          <IndexRoute component={PollScreen} />
        </Route>
      </Router>),
      document.querySelector('#reactRoot')
    );
  });
}
