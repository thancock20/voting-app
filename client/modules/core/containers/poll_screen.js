import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PollScreen from '../components/poll_screen.jsx';

export const composer = ({context, params: {pollId}}, onData) => {
  const {Meteor, Collections} = context();
  Meteor.subscribe('polls');
  const poll = Collections.Polls.findOne({_id: pollId});
  onData(null, {poll});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PollScreen);
