import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import Footer from '../footer.jsx';

storiesOf('core.Footer', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    return (
      <Footer />
    );
  });
