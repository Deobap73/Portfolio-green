import { useMemo } from 'react';
import './AboutMeExperienceBoxRight.scss';

const AboutMeExperienceBoxRight = ({
  aboutMeExperienceBoxRightAlignSelf,
  aboutMeExperienceBoxRightWidth,
  frameDivLeft,
  experienceBoxLeftPicture,
  communication,
  communicationWidth,
  effectiveCommunicationFac,
  effectiveCommunicationFacFontSize,
  effectiveCommunicationFacFontWeight,
}) => {
  const aboutMeExperienceBoxRightStyle = useMemo(() => {
    return {
      alignSelf: aboutMeExperienceBoxRightAlignSelf,
      width: aboutMeExperienceBoxRightWidth,
    };
  }, [aboutMeExperienceBoxRightAlignSelf, aboutMeExperienceBoxRightWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  const communicationStyle = useMemo(() => {
    return {
      width: communicationWidth,
    };
  }, [communicationWidth]);

  const effectiveCommunicationFaciliStyle = useMemo(() => {
    return {
      fontSize: effectiveCommunicationFacFontSize,
      fontWeight: effectiveCommunicationFacFontWeight,
    };
  }, [effectiveCommunicationFacFontSize, effectiveCommunicationFacFontWeight]);

  return (
    <div
      className='aboutmeexperienceboxright'
      style={aboutMeExperienceBoxRightStyle}>
      <div className='experienceboxleftrectangle-parent' style={frameDiv1Style}>
        <div className='experienceboxleftrectangle1' />
        <img
          className='experienceboxleftpicture-icon1'
          alt='Man in speaker position in a room with people listening to him'
          src={experienceBoxLeftPicture}
        />
      </div>
      <div className='rectangle-group'>
        <div className='frame-child2' />
        <div className='communication-parent'>
          <h2 className='communication' style={communicationStyle}>
            {communication}
          </h2>
          <p
            className='effective-communication-facili'
            style={effectiveCommunicationFaciliStyle}>
            {effectiveCommunicationFac}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeExperienceBoxRight;
