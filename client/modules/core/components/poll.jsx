import React, { PropTypes } from 'react';
import { ButtonCircle } from 'rebass';
import { partial } from 'partial-application';
import Load from 'shingon-load-jss';

const Poll = ({poll, deletePoll}) => (
  <li
    className={classes.list}
  >
    <a
      href={`/polls/${poll._id}`}
      className={classes.link}
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

const styles = {
  list: {
    position: 'relative',
    listStyle: 'none',
    padding: 15,
    borderBottom: '#eee solid 1px'
  },
  link: {
    textDecoration: 'none',
    color: '#7700ff',
  },
};

const classes = Load(styles);

export default Poll;
