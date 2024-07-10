// Portfolio-green\src\components\About\AboutMeSkillsContainer.jsx

import AboutMeCodingSkills from './AboutMeCodingSkills';
import AboutMeWorkExperience from './AboutMeWorkExperience';
import AboutMeSoftSkillsBox from './AboutMeSoftSkillsBox';
import AboutMeSoftwareSkills from './AboutMeSoftwareSkills';
import AboutMeLineOfTime from './AboutMeLineOfTime';
import './AboutMeSkillsContainer.scss';

const AboutMeSkillsContainer = () => {
  return (
    <section className='aboutMeSkillsContainer'>
      <AboutMeCodingSkills />
      <AboutMeWorkExperience />
      <AboutMeSoftSkillsBox />
      <AboutMeSoftwareSkills />
      <AboutMeLineOfTime />
    </section>
  );
};

export default AboutMeSkillsContainer;
