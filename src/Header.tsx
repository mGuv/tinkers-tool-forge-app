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
    <h3>Parts</h3>
    <ul>
      <MenuItem title="Bow" to="/bow"/>
      <MenuItem title="Head" to="/head"/>
    </ul>

    <h3>Utilities</h3>
    <ul>
      <li><Link to="/tool-builder">Tool Builder</Link></li>
    </ul>
  </nav>
)

export const Header: React.FunctionComponent = () => (
  <div className={styles.header}>
    <Menu />
    mGuv's Tinker Helper
  </div>
)
