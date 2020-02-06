import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css';

interface MenuItemProps {
  title: string
  to: string
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({title, to}) => (
  <li><Link to={to}>{title}</Link></li>
)

const Menu: React.FunctionComponent = () => (
  <nav>
    <ul>
      <MenuItem title="Bow" to="/bow"/>
      <MenuItem title="BowString" to="/bowstring"/>
      <MenuItem title="Extra" to="/extra"/>
      <MenuItem title="Fletching" to="/fletching"/>
      <MenuItem title="Handle" to="/handle"/>
      <MenuItem title="Head" to="/head"/>
      <MenuItem title="Shaft" to="/shaft"/>
      <MenuItem title="Tool Forge" to="/tool-builder"/>
    </ul>
  </nav>
)

export const Header: React.FunctionComponent = () => (
  <div className={styles.header}>
    <Menu />
    mGuv's Tinker Helper
  </div>
)