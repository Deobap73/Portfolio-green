// src/components/AboutMeReactBox.jsx

import images from '../assets/imageIndex';
import './AboutMeReactBox.scss';

const AboutMeReactBox = () => {
  return (
    <div className='aboutmereactbox'>
      <div className='languagesymbol3'>
        <img className='react-icon' alt='' src={images.react} />
      </div>
      <div className='planning4'>
        <h2 className='react'>React</h2>
        <p className='react-is-the'>
          React is the artist`s palette, allowing developers to sculpt intricate
          user interfaces that mirror the beauty and complexity of the real
          world.
        </p>
      </div>
      <div className='timeline3'>
        <h3 className='jul'>13 Jul</h3>
        <div className='ellipse-div' />
        <h3 className='jul'>2023</h3>
      </div>
      <img
        className='aboutmereactbox-child'
        id='Example of a few lines of code in React'
        alt=''
        src={images.rectangleReact}
      />
    </div>
  );
};

export default AboutMeReactBox;
