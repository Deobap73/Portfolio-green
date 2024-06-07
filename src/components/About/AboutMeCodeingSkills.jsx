// src/components/AboutMeCodeingSkills.jsx

import AboutMePlanning from './AboutMePlanning';
import AboutMeMongoDbBox from './AboutMeMongoDbBox';
import AboutMeExpressJsBox from './AboutMeExpressJsBox';
import AboutMeNodeJsBox from './AboutMeNodeJsBox';
import AboutMeReactBox from './AboutMeReactBox';
import AboutMeJavaScriptBox from './AboutMeJavaScriptBox';
import AboutMeCssBox from './AboutMeCssBox';
import AboutMeHtmlBox from './AboutMeHtmlBox';
import AboutMeSoftwareSkillsBox from './AboutMeSoftwareSkillsBox';
import './AboutMeCodeingSkills.scss';

const AboutMeCodeingSkills = () => {
  return (
    <section className='aboutmecodeingskills'>
      <AboutMeSoftwareSkillsBox />
      <AboutMeHtmlBox />
      <AboutMeCssBox />
      <AboutMeJavaScriptBox />
      <AboutMeReactBox />
      <AboutMeNodeJsBox />
      <AboutMeExpressJsBox />
      <AboutMeMongoDbBox />
      <AboutMePlanning />
    </section>
  );
};

export default AboutMeCodeingSkills;
