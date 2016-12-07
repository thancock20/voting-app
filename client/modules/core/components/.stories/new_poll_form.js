import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import NewPollForm from '../new_poll_form.jsx';

storiesOf('core.NewPollForm', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <NewPollForm createPoll={action('createPoll')}/>
    );
  });
