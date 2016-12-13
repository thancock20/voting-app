import React, { PropTypes } from 'react';
import { ButtonCircle } from 'rebass';
import { partial } from 'partial-application';

const Poll = ({poll, deletePoll}) => (
  <li
    style={{
      position: 'relative',
      listStyle: 'none',
      padding: 15,
      borderBottom: '#eee solid 1px'
    }}
  >
    <a
      href={`/polls/${poll._id}`}
      style={{textDecoration: 'none', color: '#7700ff'}}
    >{poll.question}</a>
    { poll.isOwner() && (
      <ButtonCircle
        title="Delete"
        style={{float: 'right'}}
        backgroundColor="error"
        onClick={partial(deletePoll, poll._id)}
      >
        &times;
      </ButtonCircle>
    ) }
  </li>
);
Poll.propTypes = {
  poll: PropTypes.object,
  deletePoll: PropTypes.func
};

export default Poll;
