import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import NewPollButton from '../new_poll_button.jsx';

storiesOf('core.NewPollButton', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <NewPollButton />
    );
  });
