import React, { PropTypes } from 'react';
import Poll from '../containers/poll.js';

const PollList = ({polls}) => (
  <ul>
    {polls.map((poll) => {
      return (
        <Poll
          key={poll._id}
          poll={poll}
        />
      );
    })}
  </ul>
);
PollList.propTypes = {
  polls: PropTypes.array
};

export default PollList;
