import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewPollForm from '../components/new_poll_form.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  createPoll: actions.polls.createPoll
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewPollForm);
