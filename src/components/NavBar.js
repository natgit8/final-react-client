import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Menu>
      <Menu.Item header> ARTicles</Menu.Item>
      <Menu.Item as={Link} to='/'>
        <Icon name="home"/>
      </Menu.Item>
      <Menu.Menu position='right'>
      <Menu.Item as={Link} to='/saved' name='Saved'>
      </Menu.Item>

      <Menu.Item as={Link} to='/search' name='Search'>
      </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
