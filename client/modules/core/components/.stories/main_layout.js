import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import MainLayout from '../main_layout.jsx';

storiesOf('core.MainLayout', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <MainLayout />
    );
  });
