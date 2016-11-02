import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import PollButtons from '../poll_buttons.jsx';

storiesOf('core.PollButtons', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <PollButtons />
    );
  });
