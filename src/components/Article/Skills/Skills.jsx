import React from 'react';
import './style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGithub, faHtml5, faJs, faNpm, faReact, faSass, faSquareGit } from '@fortawesome/free-brands-svg-icons';
import typescriptLogo from '../../../assets/media/icon/typescript.png';


AOS.init();
AOS.init({
  delay: 0,
  once: true
});

const Skills = () => {
  return (
    <section className="skills" data-aos="fade-right" id='skills'>
      <h2>Skills ⚡️</h2>
      <section className="skills__img">
        <div className="firstCapa">
          <div className="skillItems">
            <h3>HTML5</h3>
            <FontAwesomeIcon icon={faHtml5} className='iconSkillSize html5' />
          </div>
          <div className="skillItems">
            <h3>CSS3</h3>
            <FontAwesomeIcon icon={faCss3Alt} className='iconSkillSize css3' />
          </div>
          <div className="skillItems">
            <h3>JavaScript</h3>
            <FontAwesomeIcon icon={faJs} className='iconSkillSize javascript' />
          </div>
        </div>
        <div className="secondCapa">
          <FontAwesomeIcon icon={faSquareGit} className='iconSkillSize git' />
          <div className="skillItems">
            <h3>Github</h3>
            <FontAwesomeIcon icon={faGithub} className='iconSkillSize github' />
          </div>
          <FontAwesomeIcon icon={faSass} className='iconSkillSize sass' />
        </div>
        <div className="threeCapa">
          <div className="skillItems">
            <h3>React</h3>
            <FontAwesomeIcon icon={faReact} className='iconSkillSize react' />
          </div>
          <div className="skillItems">
            <h3>TypeScript</h3>
            <img src={typescriptLogo} alt="TypeScript" className='typescript' />
          </div>
          <FontAwesomeIcon icon={faNpm} className='iconSkillSize npm' />
        </div>
      </section>
    </section>
  )
}

export { Skills }