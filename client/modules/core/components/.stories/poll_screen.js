import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import PollScreen from '../poll_screen.jsx';
import PollButtons from '../../containers/poll_buttons';

setComposerStub(PollButtons, (props) => {
  const data = {
    ...props,
    vote: action('pollButton-vote-clicked')
  };

  return data;
});

storiesOf('core.PollScreen', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    const poll = object('poll', {
      _id: 'abc123',
      question: 'Ice Cream Flavors',
      options: [
        {
          name: 'Chocolate',
          votes: 10
        },
        {
          name: 'Vanilla',
          votes: 5
        },
        {
          name: 'Rocky Road',
          votes: 20
        }
      ]
    });
    return (
      <PollScreen poll={poll} />
    );
  });
