import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css';

interface MenuItemProps {
  title: string
  to: string
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({title, to}) => (
  <li><NavLink activeClassName={styles.active} to={to}>{title}</NavLink></li>
)

const Menu: React.FunctionComponent = () => (
  <nav>
    <ul>
      <MenuItem title="Bow Limbs" to="/bowLimbs"/>
      <MenuItem title="Bow Strings" to="/bowStrings"/>
      <MenuItem title="Extras" to="/extras"/>
      <MenuItem title="Fletchings" to="/fletchings"/>
      <MenuItem title="Handles" to="/handles"/>
      <MenuItem title="Heads" to="/heads"/>
      <MenuItem title="Shafts" to="/shafts"/>
      <MenuItem title="Tool Forge" to="/toolforge"/>
    </ul>
  </nav>
)

export const Header: React.FunctionComponent = () => (
  <div className={styles.header}>
    <Menu />
    mGuv's Tinker Helper
  </div>
)
