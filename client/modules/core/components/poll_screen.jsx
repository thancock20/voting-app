import React, { PropTypes } from 'react';
import PollChart from './poll_chart.jsx';
import PollButtons from './poll_buttons.jsx';
import palette from '../libs/palette';
import { Heading } from 'rebass';

const PollScreen = ({poll}) => {
  const colorScale = palette([ 'tol', 'tol-rainbow' ], poll.options.length);
  return (
    <div style={{paddingTop: 48}}>
      <Heading
        level={1}
        style={{textAlign: 'center'}}
      >
        {poll.question}
      </Heading>
      <PollChart
        options={poll.options}
        colorScale={colorScale}
      />
      <PollButtons
        poll={poll}
      />
    </div>
  );
};
PollScreen.propTypes = {};

export default PollScreen;
