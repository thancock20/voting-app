import React, { PropTypes } from 'react';
import NewOption from './new_option.jsx';
import { Button } from 'rebass';
import { partial } from 'partial-application';

const PollButtons = ({poll, colorScale, vote, isLoggedIn}) => (
  <div>
    {
      poll.options.map((option, index) => (
        <div key={index} style={{marginBottom: 5}}>
          <Button
            style={{width: '80%'}}
            backgroundColor={`#${colorScale[index]}`}
            onClick={partial(vote, poll._id, option.name)}
          >
            {option.name}: {option.votes} votes
          </Button>
        </div>
      ))
    }
    { isLoggedIn && <NewOption /> }
  </div>
);
PollButtons.propTypes = {
  poll: PropTypes.object,
  colorScale: PropTypes.array,
  vote: PropTypes.func
};

export default PollButtons;
