// src/components/TimeLine.jsx

import './TimeLine.scss';
import images from '../../assets/imageIndex';

const TimeLine = () => {
  return (
    <div className='timeline7'>
      <div className='graduationellipse' />
      <div className='graduationellipse1' />
      <img className='graduation-icon' alt='' src={images.graduation} />
      <img className='briefcase-icon' alt='' src={images.briefcase} />
      <div className='briefcaseellipse' />
      <img className='comments-icon' alt='' src={images.comments} />
    </div>
  );
};

export default TimeLine;
