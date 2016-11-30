import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import PollButtons from '../poll_buttons.jsx';
import palette from '../../libs/palette';

storiesOf('core.PollButtons', module)
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
    const colorScale = palette([ 'tol', 'tol-rainbow' ], poll.options.length);
    return (
      <PollButtons
        poll={poll}
        colorScale={colorScale}
        vote={action('pollButtons-vote-clicked')}
      />
    );
  });
