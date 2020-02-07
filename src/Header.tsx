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
      <MenuItem title="Bow" to="/bow"/>
    </ul>
  </nav>
)

export const Header: React.FunctionComponent = () => (
  <div className={styles.header}>
    <Menu />
    mGuv's Tinker Helper
  </div>
)