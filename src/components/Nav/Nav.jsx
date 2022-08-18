import React from 'react'
import './style.css';

const Nav = ({showMenu}) => {
  return (
      <nav className={showMenu ? 'showNav' : 'hiddeNav'}>
        <ul>
          <li><a href="/">About me</a></li>
          <li><a href="/">Skills</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
  )
}

export { Nav };