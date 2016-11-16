import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Poll from '../components/poll.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  deletePoll: actions.polls.deletePoll,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Poll);
