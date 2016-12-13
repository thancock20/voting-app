import React, { PropTypes } from 'react';
import PollChart from './poll_chart.jsx';
import PollButtons from '../containers/poll_buttons.js';
import palette from '../libs/palette';
import { Heading } from 'rebass';
import Helmet from 'react-helmet';

const PollScreen = ({poll}) => {
  if (!poll) { return <div>loading...</div>; }
  const colorScale = palette([ 'tol', 'tol-rainbow' ], poll.options.length);
  return (
    <div style={{paddingTop: 48, textAlign: 'center', maxWidth: 600, margin: 'auto'}}>
      <Helmet title={poll.question} />
      <Heading
        level={1}
      >
        {poll.question}
      </Heading>
      <PollChart
        options={poll.options}
        colorScale={colorScale}
      />
      <PollButtons
        poll={poll}
        colorScale={colorScale}
      />
    </div>
  );
};
PollScreen.propTypes = {
  poll: PropTypes.object
};

export default PollScreen;
