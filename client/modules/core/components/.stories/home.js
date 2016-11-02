import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import Home from '../home.jsx';

storiesOf('core.Home', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <Home />
    );
  });
