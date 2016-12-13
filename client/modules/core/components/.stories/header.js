import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import Header from '../header.jsx';
import LogInButtons from '../../../accounts/containers/log_in_buttons';

setComposerStub(LogInButtons, (props) => {
  const data = {
    ...props,
  };

  return data;
});

storiesOf('core.Header', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <Header isLoggedIn={boolean('isLoggedIn', true)}/>
    );
  });
