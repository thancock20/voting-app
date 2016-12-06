import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, number, object } from '@kadira/storybook-addon-knobs';
import { setComposerStub } from 'react-komposer';
import PollChart from '../poll_chart.jsx';
import palette from '../../libs/palette';

storiesOf('core.PollChart', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    const options = object('options', [
      {
        name: 'Chocolate',
        votes: 10
      },
      {
        name: 'Vanilla',
        votes: 5
      },
      {
        name: 'Rocky Road',
        votes: 20
      }
    ]);
    const colorScale = palette([ 'tol', 'tol-rainbow' ], options.length);
    return (
      <PollChart options={options} colorScale={colorScale} />
    );
  });
