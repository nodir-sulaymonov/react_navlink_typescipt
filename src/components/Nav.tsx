import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type NavProps = {
  exact: boolean;
  to: string;
  size: 'small' | 'medium';
  text: string;
};

const Nav: React.FC<NavProps> = ({ exact, to, size, text }) => {
  const classes = classNames('nav-link-wrapper', {
    'nav-link-wrapper--medium': size === 'medium',
    'nav-link-wrapper--small': size === 'small',
  });
  return (
    <li className={classes}>
      <NavLink exact={exact} to={`/${to}`} activeClassName="active">
        {text}
      </NavLink>
    </li>
  );
};
export default Nav;
//// acitve, defaultCommon, defaultCommon--medium, defaultCommon--small
