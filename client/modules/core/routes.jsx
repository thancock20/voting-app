import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import PollListScreen from './components/poll_list_screen.jsx';
import PollScreen from './components/poll_screen.jsx';
import NewPollForm from './components/new_poll_form.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/polls', {
    name: 'polls',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PollListScreen />)
      });
    }
  });

  FlowRouter.route('/polls/new', {
    name: 'newPoll',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPollForm />)
      });
    }
  });

  FlowRouter.route('/polls/:id', {
    name: 'poll',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PollScreen />)
      });
    }
  });
}
