import './AboutMeSoftwareBox.scss';

const AboutMeSoftwareBox = () => {
  return (
    <div className='aboutmesoftwarebox'>
      <div className='frame10'>
        <img className='frame-child3' alt='' src='/line-1.svg' />
      </div>
      <div className='frame11'>
        <div className='frame12'>
          <h2 className='the-software-skills-container'>
            <b>{`The `}</b>
            <span>Software Skills</span>
          </h2>
        </div>
        <p className='proficiency-in-other'>
          Proficiency in other software tools amplifies the coding toolkit,
          adding versatility and ingenuity to tackle diverse development
          challenges with precision and creativity.
        </p>
      </div>
    </div>
  );
};

export default AboutMeSoftwareBox;
