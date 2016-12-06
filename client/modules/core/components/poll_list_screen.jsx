import React, { PropTypes } from 'react';
import PollList from '../containers/poll_list.js';

const PollListScreen = ({newPoll}) => (
  <div style={{paddingTop: 48, maxWidth: 800, margin: 'auto'}}>
    <PollList />
  </div>
);
PollListScreen.propTypes = {
  newPoll: PropTypes.func
};

export default PollListScreen;
