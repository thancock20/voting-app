import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import NewOptionButton from '../new_option_button.jsx';

storiesOf('core.NewOptionButton', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <NewOptionButton />
    );
  });
