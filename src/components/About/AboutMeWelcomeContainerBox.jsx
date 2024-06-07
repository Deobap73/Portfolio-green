// src/components/AboutMeWelcomeContainer.jsx

import images from '../../assets/imageIndex';
import AboutMeWelcomeContainer from './AboutMeWelcomeContainer';
import './AboutMeWelcomeContainerBox.scss';

const AboutMeWelcomeContainerBox = () => {
  return (
    <section className='aboutmewelcomecontainer-parent'>
      <AboutMeWelcomeContainer />
      <img
        className='aboutmebackground-1-icon'
        alt='Front image of the page owner'
        src={images.aboutMeBackground}
      />
    </section>
  );
};

export default AboutMeWelcomeContainerBox;
