import React from 'react'
import './style.css';

const Nav = ({showMenu}) => {
  return (
      <nav className={showMenu ? 'showNav' : 'hiddeNav'}>
        <ul>
          <li><a href="#about">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
  )
}

export { Nav };