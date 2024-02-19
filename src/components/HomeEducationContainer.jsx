import { useCallback } from 'react';
import DeoButton from './DeoButton';
import './HomeEducationContainer.scss';

const HomeEducationContainer = () => {
  const onDeoIconGold1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homePresentationName']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

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
            className='screenshot-from-2023-10-16-09-'
            alt=''
            src='/screenshot-from-20231016-090219-1@2x.png'
          />
          <img
            className='screenshot-from-2023-10-16-09-'
            alt=''
            src='/screenshot-from-20231016-090357-1@2x.png'
          />
          <img
            className='screenshot-from-2023-10-16-09-'
            alt=''
            src='/screenshot-from-20231016-090336-1@2x.png'
          />
        </div>
      </section>
      <DeoButton
        dimensionCode='/deo-icongold-1@2x.png'
        propPosition='absolute'
        propTop='34.375rem'
        propLeft='1rem'
        propWidth='1.875rem'
        propHeight='1.875rem'
        onDeoIconGold12Click={onDeoIconGold1Click}
      />
    </section>
  );
};

export default HomeEducationContainer;
