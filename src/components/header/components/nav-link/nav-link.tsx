import clsx from "clsx";
import { FC } from 'react';
import { NavLinkProps as NavLinkPropsRouter, NavLink as NavLinkRouter } from "react-router-dom";

import styles from './nav-link.module.scss'

type NavLinkProps = Omit<NavLinkPropsRouter & React.RefAttributes<HTMLAnchorElement>, 'className'>

const NavLink: FC<NavLinkProps> = (props) => {

  return (
    <NavLinkRouter className={({ isActive }) => clsx({
      [styles.navLink]: true,
      [styles.navLink_active]: isActive
    })} {...props} />
  );
};

export default NavLink;
