// src/pages/AboutMe.jsx

import AboutMeMain from '../components/AboutMeMain';
import AboutMeSkillsContainer from '../components/AboutMeSkillsContainer';
import Footer from '../components/Footer';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <div className='aboutme'>
      <header
        className='aboutmepresentationname'
        data-scroll-to='aboutMePresentationName'>
        <h1 className='deolindo-baptista1'>
          <span>{`Hi, I am `}</span>
          <span className='deolindo-baptista2'>Deolindo Baptista</span>
        </h1>
        <p className='as-a-junior'>
          My journey as a Junior Full Stack Web Developer is marked by
          resilience, constant learning and an unwavering passion for building
          exceptional web applications
        </p>
      </header>
      <AboutMeMain />
      <AboutMeSkillsContainer />
      <Footer />
    </div>
  );
};

export default AboutMe;
