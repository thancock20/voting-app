import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import Header from '../header.jsx';

storiesOf('core.Header', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <Header isLoggedIn={boolean('isLoggedIn', true)}/>
    );
  });
