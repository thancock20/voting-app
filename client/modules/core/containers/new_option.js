import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewOption from '../components/new_option.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  addOption: actions.polls.addOption
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewOption);
