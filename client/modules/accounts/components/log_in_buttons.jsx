import React from 'react';

const LogInButtons = ({Blaze}) => (
  <div>
    {(typeof Blaze !== 'undefined') ?
      <div>
        <Blaze template="loginButtons" />
      </div> :
      <div>
        <u>Sign in ▾</u>
      </div> }
  </div>
);

export default LogInButtons;
