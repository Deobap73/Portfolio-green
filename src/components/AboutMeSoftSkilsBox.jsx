// src/components/AboutMeSoftSkilsBox.jsx

import images from '../assets/imageIndex';
import AboutMeExperienceBox from './AboutMeExperienceBox';
import LeadershipExperienceBoxLeft from './LeadershipExperienceBoxLeft';
import AboutMeExperienceBoxRight from './AboutMeExperienceBoxRight';
import './AboutMeSoftSkilsBox.scss';

const AboutMeSoftSkilsBox = () => {
  return (
    <section className='aboutmesoftskilsbox'>
      <AboutMeExperienceBox />
      <LeadershipExperienceBoxLeft
        dimensionsId={images.experienceboxleftLeadership}
        skillsDescription='Leadership '
        teamLeadershipDescription='Leadership skills were key to guiding and inspiring team members to excel and achieve their best.'
      />
      <AboutMeExperienceBoxRight
        experienceBoxLeftPicture={images.experienceboxleftCommunication}
        communication='Communication'
        effectiveCommunicationFac='Effective communication  facilitated successful collaboration among diverse teams, driving improved project outcomes.'
      />
      <LeadershipExperienceBoxLeft
        dimensionsId={images.experienceboxleftAdaptability}
        skillsDescription='Adaptability and Flexibility:'
        teamLeadershipDescription='Adaptability and flexibility through a seamless transition between roles and a readiness to embrace new opportunities.'
        propWidth='unset'
        propHeight='3.75rem'
      />
      <AboutMeExperienceBoxRight
        aboutMeExperienceBoxRightAlignSelf='unset'
        aboutMeExperienceBoxRightWidth='45.063rem'
        frameDivLeft='31.938rem'
        experienceBoxLeftPicture={images.experienceboxleftProblemSolving}
        communication='Problem-Solving Aptitude'
        communicationWidth='unset'
        effectiveCommunicationFac='Problem-solving were instrumental in overcoming challenges and enhancing overall performance.'
        effectiveCommunicationFacFontSize='24px'
        effectiveCommunicationFacFontWeight='400'
      />
    </section>
  );
};

export default AboutMeSoftSkilsBox;
