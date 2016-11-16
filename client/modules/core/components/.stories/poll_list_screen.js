import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import PollListScreen from '../poll_list_screen.jsx';
import PollList from '../../containers/poll_list';

setComposerStub(PollList, (props) => {
  const data = {
    ...props,
    polls: [
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
    ]
  };

  return data;
});

storiesOf('core.PollListScreen', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <PollListScreen />
    );
  });
