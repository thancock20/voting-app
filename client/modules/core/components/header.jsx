import React, { PropTypes } from 'react';
import { Link } from 'react-router';
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
      <NavItem to="/" is={Link} children="Home" />
      <Space auto />
      <NavItem to="/polls" is={Link} children="Polls" />
      { isLoggedIn && <NavItem to="/polls/new" is={Link} children="New Poll" /> }
      <LogInButtons />
    </Toolbar>
  </Fixed>
);
Header.propTypes = {};

export default Header;
