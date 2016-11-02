import React, { PropTypes } from 'react';
import PollList from './poll_list.jsx';
import NewPollButton from './new_poll_button.jsx';

const PollListScreen = () => (
  <div>
    PollListScreen
    <PollList />
    <NewPollButton />
  </div>
);
PollListScreen.propTypes = {};

export default PollListScreen;
