// src/components/HomeEducationContainer.jsx

import DeoButton from './DeoButton';
import images from '../assets/imageIndex';
import './HomeEducationContainer.scss';

const HomeEducationContainer = () => {
  return (
    <section className='homeeducationcontainer'>
      <section className='homeeducationconainerbox'>
        <div className='verticalline1'>
          <img className='verticalline-item' alt='' src='/line-1.svg' />
        </div>
        <div className='homeeducationslogan'>
          <p className='my-training-in-container'>
            <span className='my-training-in'>{`My training in Web Development at Digital Career Institute was a transformative journey. `}</span>
            <span className='my-training-in'>&nbsp;</span>
            <span className='my-training-in'>{`At DCI, I delved into programming languages, responsive design and teamwork. `}</span>
            <span className='my-training-in'>{`I learned to face complex challenges and find creative solutions. `}</span>
            <span className='my-training-in'>
              This experience shaped my career path, and I look forward to
              applying what I learned to future opportunities in the web
              development industry.
            </span>
          </p>
          <div className='educationslogantitle'>
            <h2 className='my-education'>My Education</h2>
          </div>
        </div>
        <div className='homeeducationbox'>
          <img
            className='screenshot-diploma'
            alt='Diploma JavaScript'
            src={images.DiplomaJavaScript}
          />
          <img
            className='screenshot-diploma'
            alt='Diploma React'
            src={images.DiplomaReact}
          />
          <img
            className='screenshot-diploma'
            alt='Diploma FullStack'
            src={images.DiplomaFullStack}
          />
        </div>
      </section>
      <DeoButton />
    </section>
  );
};

export default HomeEducationContainer;
