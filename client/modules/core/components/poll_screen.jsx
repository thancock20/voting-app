import React, { PropTypes } from 'react';
import PollChart from './poll_chart.jsx';
import PollButtons from './poll_buttons.jsx';

const PollScreen = () => (
  <div>
    PollScreen
    <PollChart />
    <PollButtons />
  </div>
);
PollScreen.propTypes = {};

export default PollScreen;
