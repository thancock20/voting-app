import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import PollListScreen from '../poll_list_screen.jsx';

storiesOf('core.PollListScreen', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <PollListScreen />
    );
  });
