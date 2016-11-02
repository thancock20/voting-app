import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import PollScreen from '../poll_screen.jsx';

storiesOf('core.PollScreen', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <PollScreen />
    );
  });
