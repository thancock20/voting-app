import React, { PropTypes } from 'react';
import PollButton from './poll_button.jsx';
import NewOptionButton from './new_option_button.jsx';

const PollButtons = () => (
  <div>
    PollButtons
    <PollButton />
    <NewOptionButton />
  </div>
);
PollButtons.propTypes = {};

export default PollButtons;
