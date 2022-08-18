import React, { useState } from 'react';
import { Nav } from '../Nav/Nav';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';


const Header = () => {

  const [state, setState] = useState(false);
  

  return (
    <header className='header'>
      <div className="header__showIconMenuContainer">
        <h1 className='firstname'>Fabio Sosa </h1>
        <MenuIcon
          className={state ? 'hiddeIconMenu' : 'showIconMenu'}
          onClick={() => !state ? setState(true) : setState(false)}
        />
      </div>
      <div className="header__hiddeIconMenuContainer">
      <CloseIcon 
      className={state ? 'showIconClose' : 'hiddeIconClose'}
      onClick={() => state ? setState(false) : setState(true)}
      />
      <Nav showMenu={state}/>
      </div>
      
    </header>
  );
}


export { Header };

// https://www.behance.net/gallery/71132361/Frontend-Develope r-Website