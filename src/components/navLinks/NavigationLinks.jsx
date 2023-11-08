import React from 'react'
import clsx from "clsx";
import { useStyles } from './NavigationLinks.styles';
import { NavLink } from 'react-router-dom';

export const NavigationLinks = () => {

  const classes = useStyles();

  return (
    <ul className={classes.navLinks}>
      {/* <li><NavLink to="/" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>Accueil</NavLink></li> */}
      <li><NavLink to="/propos" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>À propos</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>Contacts</NavLink></li>
    </ul>
  );
}
