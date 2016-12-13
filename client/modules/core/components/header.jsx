import React, { PropTypes } from 'react';
import LogInButtons from '/client/modules/accounts/containers/log_in_buttons.js';
import {
  Arrow,
  Dropdown,
  DropdownMenu,
  Fixed,
  NavItem,
  Space,
  Toolbar
} from 'rebass';

const Header = ({isLoggedIn}) => (
  <Fixed top left right zIndex={1}>
    <Toolbar>
      <NavItem href="/" children="Home" />
      <Space auto />
      <NavItem href="/polls" children="Polls" />
      { isLoggedIn && <NavItem href="/polls/new" children="New Poll" /> }
      <LogInButtons />
    </Toolbar>
  </Fixed>
);
Header.propTypes = {};

export default Header;
