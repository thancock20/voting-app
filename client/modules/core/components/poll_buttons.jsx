import React, { PropTypes } from 'react';
import NewOption from '../containers/new_option.js';
import { Button } from 'rebass';
import { partial } from 'partial-application';

const PollButtons = ({poll, colorScale, vote, isLoggedIn}) => (
  <div>
    {
      poll.options.map((option, index) => (
        <div key={index} style={{marginBottom: 5}}>
          <Button
            style={{width: '80%'}}
            backgroundColor={`${colorScale[index]}`}
            onClick={partial(vote, poll._id, option.name)}
          >
            <span style={{fontWeight: 'bold'}}>{option.name}: {option.votes} votes</span>
          </Button>
        </div>
      ))
    }
    { isLoggedIn && <NewOption pollId={poll._id} /> }
  </div>
);
PollButtons.propTypes = {
  poll: PropTypes.object,
  colorScale: PropTypes.array,
  vote: PropTypes.func
};

export default PollButtons;
