import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import Poll from '../poll.jsx';

storiesOf('core.Poll', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <Poll />
    );
  });
