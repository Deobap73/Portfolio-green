// src/components/LeadershipExperienceBoxLeft.jsx

import { useMemo } from 'react';
import PropTypes from 'prop-types';
import './LeadershipExperienceBoxLeft.scss';

const LeadershipExperienceBoxLeft = ({
  dimensionsId,
  skillsDescription,
  teamLeadershipDescription,
  propWidth,
  propHeight,
}) => {
  const leadershipStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const leadershipSkillsWereStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className='aboutmeexperienceboxleft'>
      <div className='experienceboxleftrectangle' />
      <img
        className='experienceboxleftpicture-icon'
        alt='Man in suit in office'
        src={dimensionsId}
      />
      <div className='rectangle-parent'>
        <div className='rectangle-div' />
        <div className='leadership-parent'>
          <h2 className='leadership' style={leadershipStyle}>
            {skillsDescription}
          </h2>
          <p
            className='leadership-skills-were'
            style={leadershipSkillsWereStyle}>
            {teamLeadershipDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

LeadershipExperienceBoxLeft.propTypes = {
  dimensionsId: PropTypes.string.isRequired,
  skillsDescription: PropTypes.string.isRequired,
  teamLeadershipDescription: PropTypes.string.isRequired,
  propWidth: PropTypes.string.isRequired,
  propHeight: PropTypes.string.isRequired,
};

export default LeadershipExperienceBoxLeft;
