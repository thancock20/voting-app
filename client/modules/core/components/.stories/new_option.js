import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import NewOption from '../new_option.jsx';

storiesOf('core.NewOption', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <NewOption />
    );
  });
