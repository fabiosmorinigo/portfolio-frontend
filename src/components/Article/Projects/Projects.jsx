import React from 'react';
import './style.css'
import project1 from '../../../assets/media/img/movieApp.png';
import project2 from '../../../assets/media/img/weatherApp.png';
import project3 from '../../../assets/media/img/dogApp.png';
import project4 from '../../../assets/media/img/balanceApp.png';
import project5 from '../../../assets/media/img/batataApp.png';
import project6 from '../../../assets/media/img/finanzaApp.png';
import project7 from '../../../assets/media/img/snapApp.png';


import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faFingerprint } from '@fortawesome/free-solid-svg-icons';

AOS.init();
AOS.init({
  delay: 0,
  once: true
});

const Projects = () => {


  const slideLeft = () => {
    var slide = document.querySelector('#slider');
    slide.scrollLeft = slide.scrollLeft - 200;
  }

  const slideRight = () => {
    var slide = document.querySelector('#slider');
    slide.scrollLeft = slide.scrollLeft + 200;
  }

  return (
    <section className='projects' data-aos="zoom-in-up" id='projects'>
      <h2>Projects</h2>

      <section className="items" id='slider'>

        <div className="item1 item">
        <h3>KaiserMovies APP</h3>
        <a href="https://fabiosmorinigo.github.io/kaiserMovieAPP/" target='_blank' rel='noreferrer' ><img className='projects-img' src={project1} alt="Projecto Kaiser App Movie" /><FontAwesomeIcon icon={faFingerprint} className='touch'></FontAwesomeIcon></a>
        
        </div>

        <div className="item2 item">
        <h3>Weather APP</h3>
        <a href="https://weatherappfabio.netlify.app/" target='_blank' rel='noreferrer'><img className='projects-img' src={project2} alt="Projecto Kaiser App Movie" /><FontAwesomeIcon icon={faFingerprint} className='touch'></FontAwesomeIcon></a>
        

        </div>

        <div className="item3 item">
        <h3>Veterinaria APP</h3>
        <a href="https://fabiosmorinigo.github.io/administradorDePacientes/" target='_blank' rel='noreferrer'><img className='projects-img' src={project3} alt="Projecto Kaiser App Movie" /><FontAwesomeIcon icon={faFingerprint} className='touch'></FontAwesomeIcon></a>
        

        </div>

        <div className="item4 item">
        <h3>Estadistica APP</h3>
        <a href="https://fabiosmorinigo.github.io/expensesChartComponent/" target='_blank' rel='noreferrer'><img className='projects-img' src={project4} alt="Projecto Kaiser App Movie" /> <FontAwesomeIcon icon={faFingerprint} className='touch'></FontAwesomeIcon></a>
       

        </div>
        
        <div className="item5 item">
        <h3>Crypto APP</h3>
        <a href="https://objective-davinci-e93724.netlify.app/" target='_blank' rel='noreferrer'><img className='projects-img' src={project5} alt="Projecto Kaiser App Movie" /><FontAwesomeIcon icon={faFingerprint} className='touch'></FontAwesomeIcon></a>
        

        </div>

        <div className="item6 item">
        <h3>Presupuesto APP</h3>
        <a href="https://fabiosmorinigo.github.io/presupuesto/" target='_blank' rel='noreferrer'><img className='projects-img' src={project6} alt="Projecto Kaiser App Movie" /><FontAwesomeIcon icon={faFingerprint} className='touch'></FontAwesomeIcon></a>
        

        </div>

        <div className="item7 item">
        <h3>Snapp APP</h3>
        <a href="https://fabiosmorinigo.github.io/dropDownNavigation/" target='_blank' rel='noreferrer'><img className='projects-img' src={project7} alt="Projecto Kaiser App Movie" /><FontAwesomeIcon icon={faFingerprint} className='touch'></FontAwesomeIcon></a>


        </div>

      </section>

        <FontAwesomeIcon onClick={slideRight} icon={faCircleArrowRight} className='arrow-right'></FontAwesomeIcon>
        <FontAwesomeIcon onClick={slideLeft} icon={faCircleArrowLeft} className='arrow-left'></FontAwesomeIcon>
    </section>
  )
}

export { Projects }