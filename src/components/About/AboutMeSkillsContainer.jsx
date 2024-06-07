// src/components/AboutMeSkillsContainer.jsx

import DeoButton from '../Buttons/DeoButton';
import AboutMeCodeingSkills from './AboutMeCodeingSkills';
import AboutMeWorkExperience from './AboutMeWorkExperience';
import AboutMeSoftSkilsBox from './AboutMeSoftSkilsBox';
import AboutMeSoftwareSkills from './AboutMeSoftwareSkills';
import AboutMeLineOfTime from './AboutMeLineOfTime';
import './AboutMeSkillsContainer.scss';

const AboutMeSkillsContainer = () => {
  return (
    <section className='aboutmeskillscontainer'>
      <div className='aboutIcons'>
        <DeoButton />
        <DeoButton />
        <DeoButton />
      </div>
      <div className='aboutAllTheSkills'>
        <AboutMeCodeingSkills />
        <AboutMeWorkExperience />
        <AboutMeSoftSkilsBox />
        <AboutMeSoftwareSkills />
        <AboutMeLineOfTime />
      </div>
    </section>
  );
};

export default AboutMeSkillsContainer;
