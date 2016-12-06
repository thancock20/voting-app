import React, { PropTypes } from 'react';
import PollList from '../containers/poll_list.js';

const PollListScreen = () => (
  <div style={{paddingTop: 48, margin: 'auto'}}>
    <PollList />
  </div>
);
PollListScreen.propTypes = {};

export default PollListScreen;
