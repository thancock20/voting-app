import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Header from '../components/header.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const isLoggedIn = Boolean(Meteor.user());
  onData(null, {isLoggedIn});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Header);
