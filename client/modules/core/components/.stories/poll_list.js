import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import PollList from '../poll_list.jsx';

storiesOf('core.PollList', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <PollList />
    );
  });
