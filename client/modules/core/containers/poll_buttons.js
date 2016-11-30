import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PollButtons from '../components/poll_buttons.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  vote: actions.polls.vote,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PollButtons);
