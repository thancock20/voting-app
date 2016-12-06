import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import PollList from '../poll_list.jsx';
import Poll from '../../containers/poll';

setComposerStub(Poll, (props) => {
  const data = {
    ...props,
    deletePoll: action('poll-delete-clicked')
  };

  return data;
});

storiesOf('core.PollList', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    const polls = [
      {
        _id: 1,
        question: 'The Best Captain',
        isOwner: () => true
      },
      {
        _id: 2,
        question: 'Ice Cream Flavor',
        isOwner: () => false
      }
    ];
    return (
      <PollList polls={object('Polls', polls)} />
    );
  });
