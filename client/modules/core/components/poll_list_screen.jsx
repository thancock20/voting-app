import React, { PropTypes } from 'react';
import PollList from '../containers/poll_list.js';
import Helmet from 'react-helmet';

const PollListScreen = () => (
  <div style={{paddingTop: 48, margin: 'auto'}}>
    <Helmet title="Polls" />
    <PollList />
  </div>
);
PollListScreen.propTypes = {};

export default PollListScreen;
