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
      <AboutMePlanning />
      <AboutMeMongoDbBox />
      <AboutMeExpressJsBox />
      <AboutMeNodeJsBox />
      <AboutMeReactBox />
      <AboutMeJavaScriptBox />
      <AboutMeCssBox />
      <AboutMeHtmlBox />
      <AboutMeSoftwareSkillsBox />
    </section>
  );
};

export default AboutMeCodeingSkills;
