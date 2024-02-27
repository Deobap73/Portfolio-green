// src/components/AboutMeExpressJsBox.jsx

import images from '../assets/imageIndex';
import './AboutMeExpressJsBox.scss';

const AboutMeExpressJsBox = () => {
  return (
    <div className='aboutmeexpressjsbox'>
      <div className='languagesymbol1'>
        <img
          className='languagesymbol-item'
          alt=''
          src={images.ExpressJSLogo}
        />
      </div>
      <div className='planning2'>
        <h2 className='expressjs'>Express.JS</h2>
        <p className='expressjs-the-swift'>
          Express.js, the swift messenger of the web, paves the way for
          developers to deliver data and services at the speed of thought.
        </p>
      </div>
      <div className='timeline1'>
        <h3 className='oct'>23 Oct</h3>
        <div className='timeline-item' />
        <h3 className='oct'>2023</h3>
      </div>
      <img
        className='aboutmeexpressjsbox-child'
        alt='Example of a few lines of code in Express.JS'
        src={images.rectangleExpressJS}
      />
    </div>
  );
};

export default AboutMeExpressJsBox;
