import React from 'react';
import './style.css';
import myphoto from '../../../assets/media//img/myPhoto.jpg';

const Home = () => {
  return (
    <section className="home">
      <h2 className='firstitle'>Frontend <span className='highlighted'>Developer</span></h2>
      <div className="sidebar">
        <div className="sidebar__right">
          <img src={myphoto} alt="My cover photo" className='myphoto'/>
        </div>
        <div className="sidebar__left">
          <span className='scroll'>Scroll down ➝</span>
        </div> 
        <div className="backgroundRotate"></div>
      </div>
    </section>
  )
}

export { Home }