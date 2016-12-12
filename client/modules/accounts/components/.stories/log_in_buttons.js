import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import LogInButtons from '../log_in_buttons.jsx';

storiesOf('accounts.LogInButtons', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <LogInButtons />
    );
  });
