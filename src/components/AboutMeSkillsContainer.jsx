import { useCallback } from 'react';
import DeoButton from './DeoButton';
import AboutMeCodeingSkills from './AboutMeCodeingSkills';
import AboutMeWorkExperience from './AboutMeWorkExperience';
import AboutMeSoftSkilsBox from './AboutMeSoftSkilsBox';
import AboutMeSoftwareSkills from './AboutMeSoftwareSkills';
import AboutMeLineOfTime from './AboutMeLineOfTime';
import './AboutMeSkillsContainer.scss';

const AboutMeSkillsContainer = () => {
  const onDeoIconGold1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutMePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  const onDeoIconGold12Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutMePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  const onDeoIconGold13Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutMePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <section className='aboutmeskillscontainer'>
      <DeoButton
        dimensionCode='/deo-icongold-14@2x.png'
        propPosition='unset'
        propTop='unset'
        propLeft='unset'
        propWidth='1.875rem'
        propHeight='1.875rem'
        onDeoIconGold12Click={onDeoIconGold1Click}
      />
      <AboutMeCodeingSkills />
      <DeoButton
        dimensionCode='/deo-icongold-14@2x.png'
        propPosition='unset'
        propTop='unset'
        propLeft='unset'
        propWidth='1.875rem'
        propHeight='1.875rem'
        onDeoIconGold12Click={onDeoIconGold12Click}
      />
      <AboutMeWorkExperience />
      <DeoButton
        dimensionCode='/deo-icongold-15@2x.png'
        propPosition='unset'
        propTop='unset'
        propLeft='unset'
        propWidth='1.875rem'
        propHeight='1.875rem'
        onDeoIconGold12Click={onDeoIconGold13Click}
      />
      <AboutMeSoftSkilsBox />
      <AboutMeSoftwareSkills />
      <AboutMeLineOfTime />
    </section>
  );
};

export default AboutMeSkillsContainer;
