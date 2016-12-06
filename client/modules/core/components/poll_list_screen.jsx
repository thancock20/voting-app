import React, { PropTypes } from 'react';
import PollList from '../containers/poll_list.js';
import { Button } from 'rebass';

const PollListScreen = ({newPoll}) => (
  <div style={{paddingTop: 48}}>
    <PollList />
    <Button
      pill={true}
      theme='primary'
      onClick={newPoll}
    >
      New Poll
    </Button>
  </div>
);
PollListScreen.propTypes = {
  newPoll: PropTypes.func
};

export default PollListScreen;
