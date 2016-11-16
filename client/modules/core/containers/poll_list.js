import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PollList from '../components/poll_list.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  Meteor.subscribe('polls');
  const polls = Collections.Polls.find({}, { sort: { createdAt: -1 } }).fetch();
  onData(null, {polls});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PollList);
