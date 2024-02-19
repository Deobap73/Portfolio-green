import AboutMeWelcomeContainer from './AboutMeWelcomeContainer';
import './AboutMeWelcomeContainerBox.scss';

const AboutMeWelcomeContainerBox = () => {
  return (
    <section className='aboutmewelcomecontainer-parent'>
      <AboutMeWelcomeContainer />
      <img
        className='aboutmebackground-1-icon'
        alt='Front image of the page owner'
        src='/aboutmebackground-1@2x.png'
      />
    </section>
  );
};

export default AboutMeWelcomeContainerBox;
