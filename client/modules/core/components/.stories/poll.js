import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import Poll from '../poll.jsx';

storiesOf('core.Poll', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    const poll = object('poll', {
      _id: 'abc123',
      question: 'Ice Cream Flavors',
      isOwner: () => true
    });
    return (
      <Poll
        poll={poll}
        deletePoll={action('poll-delete-clicked')}
      />
    );
  })
  .add('non-owner', () => {
    const poll = object('poll', {
      _id: 'abc123',
      question: 'Ice Cream Flavors',
      isOwner: () => false
    });
    return (
      <Poll
        poll={poll}
        deletePoll={action('poll-delete-clicked')}
      />
    );
  });
