import React, { PropTypes } from 'react';
import NewOptionButton from './new_option_button.jsx';
import { Button } from 'rebass';
import { partial } from 'partial-application';

const PollButtons = ({poll, colorScale, vote}) => (
  <div>
    {
      poll.options.map((option, index) => (
        <div key={index} style={{marginBottom: 5}}>
          <Button
            backgroundColor={`#${colorScale[index]}`}
            onClick={partial(vote, poll._id, option.name)}
          >
            {option.name}
          </Button>
        </div>
      ))
    }
    <NewOptionButton />
  </div>
);
PollButtons.propTypes = {
  poll: PropTypes.object,
  colorScale: PropTypes.array,
  vote: PropTypes.func
};

export default PollButtons;
