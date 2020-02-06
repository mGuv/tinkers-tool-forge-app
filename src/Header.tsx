import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css';

const Menu: React.FunctionComponent = () => (
  <nav>
    <ul>
      <li><Link to="/bow">Bow</Link></li>
      <li><Link to="/head">Head</Link></li>
    </ul>
  </nav>
)

export const Header: React.FunctionComponent = () => (
  <div className={styles.header}>
    <Menu />
  </div>
)