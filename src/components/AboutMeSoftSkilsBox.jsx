import AboutMeExperienceBox from './AboutMeExperienceBox';
import LeadershipExperienceBoxLeft from './LeadershipExperienceBoxLeft';
import AboutMeExperienceBoxRight from './AboutMeExperienceBoxRight';
import './AboutMeSoftSkilsBox.scss';

const AboutMeSoftSkilsBox = () => {
  return (
    <section className='aboutmesoftskilsbox'>
      <AboutMeExperienceBox />
      <LeadershipExperienceBoxLeft
        dimensionsId='/experienceboxleftpicture@2x.png'
        skillsDescription='Leadership '
        teamLeadershipDescription='Leadership skills were key to guiding and inspiring team members to excel and achieve their best.'
      />
      <AboutMeExperienceBoxRight
        experienceBoxLeftPicture='/experienceboxleftpicture1@2x.png'
        communication='Communication'
        effectiveCommunicationFac='Effective communication  facilitated successful collaboration among diverse teams, driving improved project outcomes.'
      />
      <LeadershipExperienceBoxLeft
        dimensionsId='/experienceboxleftpicture2@2x.png'
        skillsDescription='Adaptability and Flexibility:'
        teamLeadershipDescription='Adaptability and flexibility through a seamless transition between roles and a readiness to embrace new opportunities.'
        propWidth='unset'
        propHeight='3.75rem'
      />
      <AboutMeExperienceBoxRight
        aboutMeExperienceBoxRightAlignSelf='unset'
        aboutMeExperienceBoxRightWidth='45.063rem'
        frameDivLeft='31.938rem'
        experienceBoxLeftPicture='/experienceboxleftpicture3@2x.png'
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
