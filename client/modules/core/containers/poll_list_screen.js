import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PollListScreen from '../components/poll_list_screen.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  newPoll: actions.polls.newPoll,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PollListScreen);
