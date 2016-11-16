import React, { PropTypes } from 'react';
import PollList from '../containers/poll_list.js';
import NewPollButton from './new_poll_button.jsx';

const PollListScreen = () => (
  <div style={{paddingTop: 48}}>
    <PollList />
    <NewPollButton />
  </div>
);
PollListScreen.propTypes = {};

export default PollListScreen;
